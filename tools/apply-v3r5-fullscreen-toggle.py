from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

for path in runtime_paths:
    s = path.read_text()

    nav_old = '<button id="pause-button" aria-label="Pause">Ⅱ</button></nav>'
    nav_new = '<button id="fullscreen-button" class="fullscreen-toggle" title="Toggle fullscreen" aria-label="Enter fullscreen">⛶</button><button id="pause-button" aria-label="Pause">Ⅱ</button></nav>'
    if 'id="fullscreen-button"' not in s:
        if nav_old not in s:
            raise SystemExit(f"HUD nav anchor not found in {path}")
        s = s.replace(nav_old, nav_new, 1)

    bind_old = 'this.root.querySelector("#pause-button").addEventListener("click", e.pause), this.prompt.addEventListener("click", e.interact)'
    bind_new = 'this.root.querySelector("#pause-button").addEventListener("click", e.pause), this.root.querySelector("#fullscreen-button").addEventListener("click", () => this.toggleFullscreen()), document.addEventListener("fullscreenchange", () => this.updateFullscreenButton()), document.addEventListener("webkitfullscreenchange", () => this.updateFullscreenButton()), this.prompt.addEventListener("click", e.interact)'
    if 'this.toggleFullscreen()' not in s:
        if bind_old not in s:
            raise SystemExit(f"fullscreen listener anchor not found in {path}")
        s = s.replace(bind_old, bind_new, 1)

    field_old = '    toastTimer = 0;\n    settings;'
    field_new = '    toastTimer = 0;\n    immersiveFallback = !1;\n    settings;'
    if 'immersiveFallback = !1;' not in s:
        if field_old not in s:
            raise SystemExit(f"field anchor not found in {path}")
        s = s.replace(field_old, field_new, 1)

    method_anchor = '    transition(t) { this.root.querySelector(".scene-transition")?.remove();'
    methods = '''    fullscreenActive() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
    updateFullscreenButton() { const t = this.root.querySelector("#fullscreen-button"); if (!t) return; const e = this.fullscreenActive() || this.immersiveFallback; t.textContent = e ? "↙" : "⛶", t.title = e ? "Exit fullscreen" : "Enter fullscreen", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen"), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback); }
    async toggleFullscreen() { const t = document.documentElement, e = document.exitFullscreen?.bind(document), n = document.webkitExitFullscreen?.bind(document), i = t.requestFullscreen?.bind(t), r = t.webkitRequestFullscreen?.bind(t); try { if (this.fullscreenActive()) e ? await e() : n && n(); else if (i) await i({ navigationUI: "hide" }); else if (r) r(); else this.immersiveFallback = !this.immersiveFallback, this.updateFullscreenButton(), this.notify(this.immersiveFallback ? "Immersive view on. Your browser does not expose true fullscreen here." : "Immersive view off."); } catch (a) { this.immersiveFallback = !this.immersiveFallback, this.updateFullscreenButton(), this.notify(this.immersiveFallback ? "Immersive view on. Browser fullscreen was unavailable." : "Immersive view off."); } }
'''
    if 'fullscreenActive()' not in s:
        if method_anchor not in s:
            raise SystemExit(f"method anchor not found in {path}")
        s = s.replace(method_anchor, methods + method_anchor, 1)

    pause_old = '<button id="settings">Settings & controls</button><div class="split">'
    pause_new = '<button id="settings">Settings & controls</button><button id="pause-fullscreen">Toggle fullscreen</button><div class="split">'
    if 'id="pause-fullscreen"' not in s:
        if pause_old not in s:
            raise SystemExit(f"pause menu anchor not found in {path}")
        s = s.replace(pause_old, pause_new, 1)

    pause_bind_old = 't("#resume", this.actions.close), t("#manual-save", this.actions.save), t("#settings", this.actions.settings), t("#export-save"'
    pause_bind_new = 't("#resume", this.actions.close), t("#manual-save", this.actions.save), t("#settings", this.actions.settings), t("#pause-fullscreen", () => this.toggleFullscreen()), t("#export-save"'
    if 't("#pause-fullscreen"' not in s:
        if pause_bind_old not in s:
            raise SystemExit(f"pause bind anchor not found in {path}")
        s = s.replace(pause_bind_old, pause_bind_new, 1)

    path.write_text(s)

css_paths = [
    root / "source/legacy/mosslight-v3.css",
    root / "working/assets/mosslight-v3.css",
]
css_add = '''
/* V3R5 fullscreen toggle */
.fullscreen-toggle{font-size:18px!important;min-width:42px;text-align:center!important}
html.mosslight-immersive,html.mosslight-immersive body{width:100%;height:100%;height:100dvh;overflow:hidden}
html.mosslight-immersive #world,html.mosslight-immersive #ui{position:fixed;inset:0;width:100vw;height:100dvh}
@supports(height:100dvh){html:fullscreen body,html:fullscreen #world,html:fullscreen #ui{height:100dvh}}
'''
for p in css_paths:
    s = p.read_text()
    if 'V3R5 fullscreen toggle' not in s:
        p.write_text(s.rstrip() + "\n" + css_add + "\n")

index_path = root / "working/index.html"
idx = index_path.read_text()
idx = idx.replace("mosslight-v3-readable.js?v=3.4", "mosslight-v3-readable.js?v=3.5")
idx = idx.replace("mosslight-v3.css?v=3.4", "mosslight-v3.css?v=3.5")
if "?v=3.5" not in idx:
    idx = idx.replace("./assets/mosslight-v3-readable.js", "./assets/mosslight-v3-readable.js?v=3.5")
    idx = idx.replace("./assets/mosslight-v3.css", "./assets/mosslight-v3.css?v=3.5")
index_path.write_text(idx)

ch = root / "CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R5 development — fullscreen toggle

- Added a fullscreen toggle button to the top-right gameplay HUD.
- Added a second fullscreen toggle inside the pause menu.
- Uses the browser Fullscreen API where available, including Safari's prefixed fallback.
- Adds an immersive-layout fallback when a browser does not expose true fullscreen for web apps.
- Fullscreen button icon and accessibility label update automatically when entering or leaving fullscreen.
- Added a Safari cache-buster for the updated runtime and stylesheet.
"""
if "## V3R5 development — fullscreen toggle" not in cs:
    ch.write_text(cs.rstrip() + "\n" + entry + "\n")

print("V3R5 fullscreen toggle applied")
