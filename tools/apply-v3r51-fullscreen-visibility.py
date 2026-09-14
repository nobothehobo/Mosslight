from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

for path in runtime_paths:
    s = path.read_text()

    title_old = '<button id="title-settings" class="quiet">Settings & controls</button></div>'
    title_new = '<button id="title-settings" class="quiet">Settings & controls</button><button id="title-fullscreen" class="quiet title-fullscreen">⛶ Full screen</button></div>'
    if 'id="title-fullscreen"' not in s:
        if title_old not in s:
            raise SystemExit(f"title button anchor not found in {path}")
        s = s.replace(title_old, title_new, 1)

    bind_old = 'this.root.querySelector("#title-settings").addEventListener("click", e.settings), this.root.querySelector("#pause-button").addEventListener("click", e.pause)'
    bind_new = 'this.root.querySelector("#title-settings").addEventListener("click", e.settings), this.root.querySelector("#title-fullscreen").addEventListener("click", () => this.toggleFullscreen()), this.root.querySelector("#pause-button").addEventListener("click", e.pause)'
    if 'querySelector("#title-fullscreen").addEventListener' not in s:
        if bind_old not in s:
            raise SystemExit(f"title bind anchor not found in {path}")
        s = s.replace(bind_old, bind_new, 1)

    path.write_text(s)

for p in [root/"source/legacy/mosslight-v3.css", root/"working/assets/mosslight-v3.css"]:
    s = p.read_text()
    add = '''
/* V3R5.1 title fullscreen affordance */
.title-fullscreen{margin-top:-2px;font-size:13px!important;color:#d5dfc9!important;border:1px solid #bcd1ba22!important;text-align:center!important}
.title-fullscreen:hover{border-color:#bcd1ba55!important}
'''
    if 'V3R5.1 title fullscreen affordance' not in s:
        p.write_text(s.rstrip()+"\n"+add+"\n")

idx = root/"working/index.html"
s = idx.read_text().replace("v=3.5", "v=3.51")
idx.write_text(s)

ch = root/"CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R5.1 development — fullscreen visibility hotfix

- Added a clearly labeled Full screen button directly on the title screen.
- The existing in-game HUD and pause-menu fullscreen controls remain available.
- Updated cache-busting so Safari loads the new control immediately.
"""
if "## V3R5.1 development" not in cs:
    ch.write_text(cs.rstrip()+"\n"+entry+"\n")

print("V3R5.1 applied")
