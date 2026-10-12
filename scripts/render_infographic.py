#!/usr/bin/env python3
import sys
import os
import time
import json
import socket
import struct
import subprocess
import urllib.request
from PIL import Image

def measure_and_render(html_rel_path, output_png_rel_path, port=9895):
    html_path = os.path.abspath(html_rel_path)
    output_png = os.path.abspath(output_png_rel_path)
    user_data = f'/tmp/chrome_measure_{port}'
    os.makedirs(user_data, exist_ok=True)

    print(f"--> Measuring height for {html_rel_path}...")
    cmd = [
        'google-chrome',
        '--headless=new',
        f'--remote-debugging-port={port}',
        '--remote-allow-origins=*',
        f'--user-data-dir={user_data}',
        '--disable-gpu',
        '--no-sandbox',
        '--window-size=1200,1000',
        f'file://{html_path}'
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    scrollHeight = None
    try:
        time.sleep(2.5)
        tabs = json.loads(urllib.request.urlopen(f'http://127.0.0.1:{port}/json').read())
        tab = [t for t in tabs if t.get('type') == 'page'][0]
        ws_url = tab['webSocketDebuggerUrl']
        path = '/' + ws_url.split('/', 3)[3]

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect(('127.0.0.1', port))
        handshake = (
            f'GET {path} HTTP/1.1\r\nHost: 127.0.0.1:{port}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n'
            'Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\nSec-WebSocket-Version: 13\r\n'
            f'Origin: http://127.0.0.1:{port}\r\n\r\n'
        )
        s.sendall(handshake.encode('utf-8'))
        assert b'101' in s.recv(4096)

        def send_cdp(method, params=None):
            payload = json.dumps({'id': 1, 'method': method, 'params': params or {}})
            data = payload.encode('utf-8')
            mask = b'\x12\x34\x56\x78'
            l = len(data)
            if l <= 125:
                hdr = bytes([0x81, 0x80 | l]) + mask
            else:
                hdr = bytes([0x81, 0x80 | 126]) + struct.pack('>H', l) + mask
            s.sendall(hdr + bytes(b ^ mask[i % 4] for i, b in enumerate(data)))
            h = s.recv(2)
            length = h[1] & 0x7F
            if length == 126:
                length = struct.unpack('>H', s.recv(2))[0]
            buf = bytearray()
            while len(buf) < length:
                chunk = s.recv(min(length - len(buf), 65536))
                if not chunk: break
                buf.extend(chunk)
            return json.loads(buf.decode('utf-8', errors='ignore')).get('result')

        time.sleep(1)
        res = send_cdp('Runtime.evaluate', {
            'expression': '(document.querySelector(".poster-container") || document.body).scrollHeight',
            'returnByValue': True
        })
        scrollHeight = res.get('result', {}).get('value')
        print(f"Measured scrollHeight: {scrollHeight}px")
    finally:
        proc.terminate()
        proc.wait()

    if not scrollHeight:
        raise RuntimeError("Failed to measure scrollHeight!")

    print(f"--> Rendering screenshot to {output_png_rel_path} with window-size=1200,{scrollHeight}...")
    render_cmd = [
        'google-chrome',
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        f'--window-size=1200,{scrollHeight}',
        '--virtual-time-budget=6000',
        f'--screenshot={output_png}',
        f'file://{html_path}'
    ]
    res = subprocess.run(render_cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Chrome error:", res.stderr)
        raise RuntimeError("Screenshot rendering failed!")

    img = Image.open(output_png)
    print(f"Success! Generated {output_png_rel_path}: {img.size[0]}x{img.size[1]}px ({os.path.getsize(output_png)/1024:.1f} KB)")
    
    # Gera automaticamente crops de topo e rodapé para inspeção no diretório de artifacts
    artifact_dir = '/home/candida/.gemini/antigravity/brain/9978b589-e0e1-44b0-ab8d-b43e46700145'
    if os.path.isdir(artifact_dir):
        base_name = os.path.splitext(os.path.basename(output_png))[0].replace('infografico-', '')
        top_crop = img.crop((0, 0, img.size[0], min(600, img.size[1])))
        bot_crop = img.crop((0, max(0, img.size[1] - 600), img.size[0], img.size[1]))
        top_crop.save(os.path.join(artifact_dir, f"{base_name}_top.png"))
        bot_crop.save(os.path.join(artifact_dir, f"{base_name}_bot.png"))
        print(f"--> Crops saved for QA: {base_name}_top.png, {base_name}_bot.png")

    return img.size

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python3 render_infographic.py <html_path> <output_png_path> [<html2> <png2> ...]")
        sys.exit(1)
    
    pairs = []
    args = sys.argv[1:]
    if len(args) % 2 != 0:
        print("Error: Arguments must be in pairs of <html_path> <output_png_path>")
        sys.exit(1)
    for i in range(0, len(args), 2):
        measure_and_render(args[i], args[i+1])

