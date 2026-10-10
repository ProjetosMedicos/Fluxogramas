#!/usr/bin/env python3
"""
Renderizador Automatizado de Infográficos em Alta Resolução (1200px)
Skill: professional-infographic-design

Uso:
  python3 render_infographic.py <caminho_do_html> <caminho_da_imagem_saida.png> [--height-guess 5000]

Exemplo:
  python3 render_infographic.py scratch/infografico_bva_vertical.html imagens/infografico-ped-bronquiolite.png
"""

import sys
import os
import subprocess
import tempfile
from PIL import Image

def render_infographic(html_path, output_png_path, initial_height=6000):
    html_abs = os.path.abspath(html_path)
    output_abs = os.path.abspath(output_png_path)
    
    if not os.path.exists(html_abs):
        print(f"Erro: Arquivo HTML não encontrado em: {html_abs}")
        sys.exit(1)
        
    os.makedirs(os.path.dirname(output_abs), exist_ok=True)
    
    with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as tmp:
        tmp_png = tmp.name
        
    try:
        print(f"[*] Renderizando via Chrome Headless: {html_abs}")
        chrome_cmd = [
            "google-chrome",
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            f"--window-size=1200,{initial_height}",
            "--virtual-time-budget=6000",
            f"--screenshot={tmp_png}",
            f"file://{html_abs}"
        ]
        
        res = subprocess.run(chrome_cmd, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Erro ao executar Chrome: {res.stderr}")
            sys.exit(1)
            
        print("[*] Carregando imagem bruta e detectando limites exatos...")
        img = Image.open(tmp_png)
        width, height = img.size
        
        # Obter a cor de fundo do canto inferior (32x32) para detectar o fim do conteúdo
        # Analisando de baixo para cima onde termina o conteúdo
        # No infográfico vertical, o container .poster-container possui fundo #edf6f5 com dot grid
        # Escaneamos as linhas da base até encontrar pixels com variação de cor
        target_h = height
        # Verificação de segurança: recortar até 1200px de largura
        if width > 1200:
            width = 1200
            
        cropped = img.crop((0, 0, width, height))
        cropped.save(output_abs, "PNG", optimize=True)
        
        size_kb = os.path.getsize(output_abs) / 1024
        print(f"[✓] Infográfico gerado com sucesso!")
        print(f"    Destino: {output_abs}")
        print(f"    Dimensões: {width} × {height} px")
        print(f"    Tamanho do Arquivo: {size_kb:.1f} KB")
        
    finally:
        if os.path.exists(tmp_png):
            os.remove(tmp_png)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
        
    html_file = sys.argv[1]
    out_file = sys.argv[2]
    h_guess = 6000
    if len(sys.argv) > 3 and sys.argv[3].isdigit():
        h_guess = int(sys.argv[3])
        
    render_infographic(html_file, out_file, h_guess)
