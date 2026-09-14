from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

for path in runtime_paths:
    s = path.read_text()

    # Remove the icon-only fullscreen button; keep the clearly labeled in-game pill.
    s = s.replace('<button id="fullscreen-button" class="fullscreen-toggle" title="Toggle fullscreen" aria-label="Enter fullscreen">⛶</button>', '', 1)

    # Remove its click binding.
    s = s.replace('this.root.querySelector("#fullscreen-button").addEventListener("click", () => this.toggleFullscreen()), ', '', 1)

    # Simplify state sync to the single visible in-game control.
    old = 'updateFullscreenButton() { const t = this.root.querySelector("#fullscreen-button"), n = this.root.querySelector("#fullscreen-fab"); if (!t && !n) return; const e = this.fullscreenActive() || this.immersiveFallback; t && (t.textContent = e ? "↙" : "⛶", t.title = e ? "Exit fullscreen" : "Enter fullscreen", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen")), n && (n.innerHTML = e ? "↙ <span>Exit full screen</span>" : "⛶ <span>Full screen</span>", n.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen")), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback); }'
    new = 'updateFullscreenButton() { const t = this.root.querySelector("#fullscreen-fab"); if (!t) return; const e = this.fullscreenActive() || this.immersiveFallback; t.innerHTML = e ? "↙ <span>Exit full screen</span>" : "⛶ <span>Full screen</span>", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen"), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback); }'
    if old in s:
        s = s.replace(old, new, 1)
    elif 'querySelector("#fullscreen-button")' in s:
        raise SystemExit(f"Unexpected fullscreen-button reference remains in {path}")

    path.write_text(s)

# Remove now-unused icon-only style.
for p in [root/"source/legacy/mosslight-v3.css", root/"working/assets/mosslight-v3.css"]:
    s = p.read_text()
    s = s.replace('.fullscreen-toggle{font-size:18px!important;min-width:42px;text-align:center!important}\n', '')
    p.write_text(s)

# Cache-bust again for Safari.
idx = root/"working/index.html"
s = idx.read_text().replace("v=3.52", "v=3.53")
idx.write_text(s)

ch = root/"CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R5.3 development — fullscreen UI cleanup

- Removed the duplicate icon-only fullscreen button from the in-game HUD.
- Kept one clearly labeled Full screen control during gameplay.
- Kept fullscreen access on the title screen and in the pause menu.
- Bumped the Safari cache version so the duplicate disappears immediately.
"""
if "## V3R5.3 development" not in cs:
    ch.write_text(cs.rstrip()+"\n"+entry+"\n")

print("V3R5.3 fullscreen duplicate cleanup applied")
