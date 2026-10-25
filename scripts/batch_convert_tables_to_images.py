#!/usr/bin/env python3
"""
batch_convert_tables_to_images.py

Systematically converts all HTML clinical tables across all 86 modules into
high-definition editorial visual table images (PNG, 1200px width), with no redundant
banner headers, semaphoric color styling, and accompanying clinical notes, replacing
raw table containers with lightbox-enabled image containers.
"""

import os
import re
import sys
import time
import glob
import uuid
import shutil
import subprocess
from PIL import Image
from concurrent.futures import ProcessPoolExecutor, as_completed

ROOT = "/home/candida/Área de Trabalho/Antigravity/Fluxogramas"
IMG_DIR = os.path.join(ROOT, "imagens", "tabelas")
SCRATCH_DIR = "/home/candida/.gemini/antigravity/brain/9978b589-e0e1-44b0-ab8d-b43e46700145/scratch"

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(SCRATCH_DIR, exist_ok=True)

CSS_EDITORIAL_TABLE = """
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background-color: transparent;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  padding: 0;
  display: flex;
  justify-content: center;
}
.table-poster {
  width: 1200px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  overflow: hidden;
}
.content {
  padding: 24px 28px;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0px;
}
th {
  padding: 14px 16px;
  font-size: 14.5px;
  font-weight: 800;
  text-align: left;
  border-bottom: 2px solid #cbd5e1;
  background: #f8fafc;
  color: #1e293b;
  letter-spacing: 0.02em;
}
th:first-child {
  background: #0f172a;
  color: #ffffff;
  border-bottom: 2px solid #334155;
}
td {
  padding: 13px 16px;
  font-size: 14px;
  line-height: 1.5;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
  vertical-align: middle;
}
tr:last-child td {
  border-bottom: none;
}
tr:nth-child(even) td {
  background-color: #f8fafc;
}
tr td:first-child {
  font-weight: 700;
  color: #0f172a;
  background: #f1f5f9;
  border-right: 1px solid #cbd5e1;
}
tr:nth-child(even) td:first-child {
  background: #e2e8f0;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.badge-success, .badge-anvisa-yes, .badge-evidence-1, .badge-evidence-a, .badge-cat1 {
  background-color: #dcfce7;
  color: #15803d;
  border: 1px solid #86efac;
}
.badge-evidence-2, .badge-evidence-b, .badge-cat2 {
  background-color: #e0f2fe;
  color: #0369a1;
  border: 1px solid #7dd3fc;
}
.badge-warning, .badge-offlabel, .badge-cat3 {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
}
.badge-danger, .badge-anvisa-no, .badge-alert, .badge-cat4 {
  background-color: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
}
.badge-palm, .badge-coein {
  background-color: #f3e8ff;
  color: #7e22ce;
  border: 1px solid #d8b4fe;
}
.accompanying-box {
  margin-top: 18px;
  padding: 16px 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 13.5px;
  line-height: 1.5;
  color: #334155;
}
.footer {
  border-top: 1px solid #e2e8f0;
  padding: 12px 28px;
  background: #f8fafc;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
"""

def render_worker(task):
    table_html, acc_html, ref_title, out_png_path = task
    if os.path.exists(out_png_path) and os.path.getsize(out_png_path) > 5000:
        return True, out_png_path, "cached"

    uid = uuid.uuid4().hex[:8]
    acc_block = f'<div class="accompanying-box">{acc_html}</div>' if acc_html and acc_html.strip() else ''
    full_html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <style>{CSS_EDITORIAL_TABLE}</style>
</head>
<body>
  <div class="table-poster">
    <div class="content">
      {table_html}
      {acc_block}
    </div>
    <div class="footer">
      <span>{ref_title}</span>
      <span>Fluxomed Brasil • Diretrizes Clínicas Visuais HD</span>
    </div>
  </div>
</body>
</html>"""

    base_name = os.path.basename(out_png_path)
    tmp_html = os.path.join(SCRATCH_DIR, f"temp_{uid}_{base_name}.html")
    tmp_png = os.path.join(SCRATCH_DIR, f"temp_{uid}_{base_name}.png")
    user_data = f"/tmp/chrome_u_{uid}"

    try:
        with open(tmp_html, "w", encoding="utf-8") as fp:
            fp.write(full_html)

        cmd = [
            "google-chrome",
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--hide-scrollbars",
            f"--user-data-dir={user_data}",
            "--window-size=1200,4500",
            "--default-background-color=00000000",
            f"--screenshot={tmp_png}",
            f"file://{tmp_html}"
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        img = Image.open(tmp_png)
        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            cropped.save(out_png_path, "PNG", optimize=True)
        else:
            img.save(out_png_path, "PNG", optimize=True)
        return True, out_png_path, "rendered"
    except Exception as e:
        return False, out_png_path, str(e)
    finally:
        for p in [tmp_html, tmp_png]:
            if os.path.exists(p):
                try: os.remove(p)
                except: pass
        if os.path.exists(user_data):
            try: shutil.rmtree(user_data, ignore_errors=True)
            except: pass

def collect_all_tasks():
    files = sorted(glob.glob(os.path.join(ROOT, "content", "**", "*.html"), recursive=True))
    all_tasks = []
    file_plans = {}

    pattern = re.compile(
        r'(<div class=[\'"](?:table-responsive|table-container)[\'"][^>]*>[\s\S]*?<table[\s\S]*?</table>[\s\S]*?</div>)(\s*<div[^>]*>[\s\S]*?</div>|\s*<p[^>]*>[\s\S]*?</p>)?',
        re.IGNORECASE
    )

    for f in files:
        with open(f, "r", encoding="utf-8") as fp:
            html = fp.read()

        mod_name = os.path.basename(f).replace(".html", "")
        is_ped = "ped-" in mod_name or "pediatria" in f
        ref_title = "Tratado de Pediatria SBP 2024 (6ª Edição)" if is_ped else "Tratado de Ginecologia FEBRASGO"

        matches = list(pattern.finditer(html))
        if not matches:
            continue

        file_plans[f] = []

        for idx, m in enumerate(matches):
            tbl_container = m.group(1)
            post_block = m.group(2) or ""

            # Check if post_block is an accompanying note
            acc_html = ""
            include_post_in_replacement = False
            if post_block:
                post_strip = post_block.strip()
                is_note = any(k in post_strip.lower() for k in [
                    'interpretação', 'escore', 'pontuação', 'legenda', 'nota:', 'observação',
                    'obs:', 'fonte:', 'atenção', 'alerta', 'background:', 'border:'
                ]) and not '<h' in post_strip
                if is_note:
                    acc_html = post_strip
                    include_post_in_replacement = True

            # Extract table HTML
            t_m = re.search(r'(<table[\s\S]*?</table>)', tbl_container, re.IGNORECASE)
            if not t_m:
                continue
            table_html = t_m.group(1)

            # Find nearest preceding heading
            start_pos = m.start()
            pre_text = html[max(0, start_pos - 800):start_pos]
            h_m = re.findall(r'<h([234])[^>]*>(.*?)</h\1>', pre_text, re.DOTALL)
            raw_title = h_m[-1][1] if h_m else f"Tabela {idx+1}"
            clean_title = re.sub(r'<[^>]+>', '', raw_title).strip()
            slug_title = re.sub(r'[^a-z0-9]+', '-', clean_title.lower()).strip('-')[:35]

            png_filename = f"tabela-{mod_name}-{idx+1}-{slug_title}.png"
            png_path = os.path.join(IMG_DIR, png_filename)

            task_tuple = (table_html, acc_html, ref_title, png_path)
            all_tasks.append(task_tuple)

            file_plans[f].append({
                "match_start": m.start(),
                "match_end": m.end() if include_post_in_replacement else m.start() + len(tbl_container),
                "png_filename": png_filename,
                "clean_title": clean_title,
                "task_tuple": task_tuple
            })

    return all_tasks, file_plans

def main():
    print("🚀 [Step 1/4] Cataloging all clinical tables across all modules...")
    all_tasks, file_plans = collect_all_tasks()
    print(f"📊 Found {len(all_tasks)} tables across {len(file_plans)} files.")

    print(f"\n⚙️ [Step 2/4] Rendering {len(all_tasks)} high-definition table images with 4 workers...")
    t0 = time.time()
    rendered_cnt = 0
    cached_cnt = 0
    errors = []

    with ProcessPoolExecutor(max_workers=4) as executor:
        future_map = {executor.submit(render_worker, task): task for task in all_tasks}
        for i, future in enumerate(as_completed(future_map), 1):
            success, path, status = future.result()
            base = os.path.basename(path)
            if success:
                if status == "cached":
                    cached_cnt += 1
                else:
                    rendered_cnt += 1
                if i % 25 == 0 or i == len(all_tasks):
                    print(f"   [{i}/{len(all_tasks)}] Completed {base} ({rendered_cnt} rendered, {cached_cnt} cached)")
            else:
                errors.append((base, status))
                print(f"   ❌ ERROR rendering {base}: {status}")

    render_duration = time.time() - t0
    print(f"🎉 Rendering complete in {render_duration:.1f}s ({rendered_cnt} newly rendered, {cached_cnt} cached, {len(errors)} errors)")
    if errors:
        print(f"⚠️ Aborting replacement due to {len(errors)} rendering errors.")
        sys.exit(1)

    print("\n📝 [Step 3/4] Updating module HTML files with visual table containers...")
    updated_files = 0
    for f, plan_list in file_plans.items():
        with open(f, "r", encoding="utf-8") as fp:
            html = fp.read()

        new_html = html
        # Replace backwards so indices remain valid
        for item in reversed(plan_list):
            m_start = item["match_start"]
            m_end = item["match_end"]
            rel_img = f"imagens/tabelas/{item['png_filename']}"
            title = item["clean_title"]

            replacement = f"""<div class="flowchart-img-container">
          <img src="{rel_img}"
               alt="Tabela Clínica Visual: {title}"
               class="flowchart-img infographic-mode"
               loading="lazy"
               decoding="async"
               onclick="if(typeof openVisualLightbox==='function'){{openVisualLightbox(this);}}"
               style="cursor: zoom-in;">
        </div>
        <div style="margin-top: 8px; font-size: 0.8rem; color: var(--text-muted); text-align: center; line-height: 1.4;">
          💡 <em>Clique na tabela para ampliar em alta resolução com Pan &amp; Zoom interativo.</em>
        </div>"""

            new_html = new_html[:m_start] + replacement + new_html[m_end:]

        with open(f, "w", encoding="utf-8") as fp:
            fp.write(new_html)
        updated_files += 1

    print(f"✅ Successfully updated {updated_files} HTML files with visual table images.")

    print("\n🔄 [Step 4/4] Bumping Service Worker cache version...")
    sw_path = os.path.join(ROOT, "sw.js")
    with open(sw_path, "r", encoding="utf-8") as fp:
        sw_content = fp.read()
    
    current_cache_m = re.search(r"fluxomed-cache-v(\d+)", sw_content)
    if current_cache_m:
        cur_v = int(current_cache_m.group(1))
        new_v = cur_v + 1
        sw_content = sw_content.replace(f"fluxomed-cache-v{cur_v}", f"fluxomed-cache-v{new_v}")
        with open(sw_path, "w", encoding="utf-8") as fp:
            fp.write(sw_content)
        print(f"✅ Service Worker bumped to fluxomed-cache-v{new_v}")

if __name__ == "__main__":
    main()
