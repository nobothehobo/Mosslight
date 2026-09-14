from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

for path in runtime_paths:
    s = path.read_text()

    hud_anchor = '</nav></div><div id="compass">'
    hud_new = '</nav></div><button id="fullscreen-fab" class="fullscreen-fab" aria-label="Toggle fullscreen">⛶ <span>Full screen</span></button><div id="compass">'
    if 'id="fullscreen-fab"' not in s:
        if hud_anchor not in s:
            raise SystemExit(f"HUD anchor missing in {path}")
        s = s.replace(hud_anchor, hud_new, 1)

    bind_anchor = 'this.root.querySelector("#fullscreen-button").addEventListener("click", () => this.toggleFullscreen()),'
    bind_new = 'this.root.querySelector("#fullscreen-button").addEventListener("click", () => this.toggleFullscreen()), this.root.querySelector("#fullscreen-fab").addEventListener("click", () => this.toggleFullscreen()),'
    if 'querySelector("#fullscreen-fab").addEventListener' not in s:
        if bind_anchor not in s:
            raise SystemExit(f"bind anchor missing in {path}")
        s = s.replace(bind_anchor, bind_new, 1)

    update_old = 'const t = this.root.querySelector("#fullscreen-button"); if (!t) return; const e = this.fullscreenActive() || this.immersiveFallback; t.textContent = e ? "↙" : "⛶", t.title = e ? "Exit fullscreen" : "Enter fullscreen", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen"), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback);'
    update_new = 'const t = this.root.querySelector("#fullscreen-button"), n = this.root.querySelector("#fullscreen-fab"); if (!t && !n) return; const e = this.fullscreenActive() || this.immersiveFallback; t && (t.textContent = e ? "↙" : "⛶", t.title = e ? "Exit fullscreen" : "Enter fullscreen", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen")), n && (n.innerHTML = e ? "↙ <span>Exit full screen</span>" : "⛶ <span>Full screen</span>", n.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen")), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback);'
    if 'n = this.root.querySelector("#fullscreen-fab")' not in s:
        if update_old not in s:
            raise SystemExit(f"update method anchor missing in {path}")
        s = s.replace(update_old, update_new, 1)

    path.write_text(s)

css_add = """
/* V3R5.2 obvious fullscreen control */
.fullscreen-fab{position:absolute;right:max(24px,env(safe-area-inset-right));top:max(84px,calc(env(safe-area-inset-top) + 58px));z-index:16;display:flex;align-items:center;gap:8px;padding:9px 12px!important;border-radius:999px!important;background:#17373ee8!important;border:1px solid #d8ddc545!important;backdrop-filter:blur(10px);box-shadow:0 6px 22px #0d2c3238;color:#eef0dc!important;font-size:12px!important;white-space:nowrap}
.fullscreen-fab span{float:none!important}
@media(max-height:700px){.fullscreen-fab{top:60px}}
@media(max-height:500px)and (pointer:coarse){.fullscreen-fab{top:58px;right:max(14px,env(safe-area-inset-right));padding:7px 10px!important;font-size:11px!important}}
"""
for p in [root/"source/legacy/mosslight-v3.css", root/"working/assets/mosslight-v3.css"]:
    s = p.read_text()
    if "V3R5.2 obvious fullscreen control" not in s:
        p.write_text(s.rstrip()+"\n"+css_add+"\n")

idx = root/"working/index.html"
s = idx.read_text()
s = s.replace("v=3.51", "v=3.52")
if 'apple-mobile-web-app-capable' not in s:
    s = s.replace('<meta name="theme-color" content="#102b32">', '<meta name="theme-color" content="#102b32"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="mobile-web-app-capable" content="yes"><link rel="manifest" href="./manifest.webmanifest?v=3.52">')
idx.write_text(s)

manifest = root/"working/manifest.webmanifest"
manifest.write_text('''{
  "name": "Mosslight Harbor",
  "short_name": "Mosslight",
  "start_url": "./",
  "scope": "./",
  "display": "fullscreen",
  "background_color": "#173640",
  "theme_color": "#102b32",
  "orientation": "landscape"
}\n''')

ch = root/"CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R5.2 development — fullscreen visibility + iPad standalone support

- Added a clearly labeled floating Full screen pill inside gameplay so the control is impossible to confuse with the other HUD icons.
- Kept the icon-only HUD control and pause-menu control.
- Added iPad/iPhone standalone web-app metadata and a web manifest for a browser-chrome-free Home Screen launch where Safari does not permit page fullscreen.
- Bumped Safari cache version again.
"""
if "## V3R5.2 development" not in cs:
    ch.write_text(cs.rstrip()+"\n"+entry+"\n")

print("V3R5.2 fullscreen visibility patch applied")
