from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

new_audio = r'''class $0 {
    context = null;
    master = null;
    music = null;
    fx = null;
    ambience = null;
    nextChord = 0;
    musicStep = 0;
    zone = "outside";
    settings;
    constructor(t) { this.settings = t; }
    async start() { if (!this.context) {
        const t = window.AudioContext || window.webkitAudioContext;
        if (!t)
            return;
        this.context = new t;
        const e = this.context;
        this.master = e.createGain(), this.music = e.createGain(), this.fx = e.createGain(), this.ambience = e.createGain(), this.master.connect(e.destination), this.music.connect(this.master), this.fx.connect(this.master), this.ambience.connect(this.fx);
        const n = e.createBuffer(1, e.sampleRate * 4, e.sampleRate), i = n.getChannelData(0);
        let r = 0;
        for (let c = 0; c < i.length; c++)
            r = (r + Math.random() * .035 - .0175) / 1.015, i[c] = r;
        const a = e.createBufferSource();
        a.buffer = n, a.loop = !0;
        const o = e.createBiquadFilter();
        o.type = "lowpass", o.frequency.value = 800, a.connect(o), o.connect(this.ambience), a.start(), this.apply(this.settings);
    } await this.context.resume(); }
    apply(t) { this.settings = t, this.context && (this.master.gain.value = t.master, this.music.gain.value = t.music * .16, this.fx.gain.value = t.effects * .4, this.ambience.gain.value = .2); }
    tone(t, e = .12, n = "sine", i = .2, r = !1, a = 0) { const o = this.context; if (!o || o.state !== "running")
        return; const c = o.createOscillator(), l = o.createGain(), h = o.currentTime + Math.max(0, a); c.type = n, c.frequency.setValueAtTime(t, h), l.gain.setValueAtTime(1e-4, h), l.gain.exponentialRampToValueAtTime(Math.max(.001, i), h + .025), l.gain.exponentialRampToValueAtTime(1e-4, h + e), c.connect(l), l.connect(r ? this.music : this.fx), c.start(h), c.stop(h + e + .06), c.onended = () => { c.disconnect(), l.disconnect(); }; }
    musicPhrase(t, e) {
        const n = {
            outside: [
                [392, 329.63, 293.66, 246.94, 329.63],
                [440, 392, 329.63, 293.66, 392],
                [329.63, 392, 493.88, 440, 329.63],
                [293.66, 329.63, 392, 329.63, 246.94]
            ],
            night: [
                [329.63, 293.66, 246.94, 220, 293.66],
                [392, 329.63, 293.66, 246.94, 220],
                [293.66, 246.94, 220, 196, 246.94]
            ],
            cafe: [
                [329.63, 392, 440, 392, 329.63, 261.63],
                [349.23, 440, 523.25, 440, 349.23, 293.66],
                [392, 329.63, 261.63, 329.63, 440, 392]
            ],
            store: [
                [392, 329.63, 293.66, 329.63, 392],
                [440, 349.23, 293.66, 349.23, 440],
                [329.63, 392, 329.63, 261.63, 293.66]
            ],
            ship: [
                [293.66, 369.99, 329.63, 246.94, 293.66],
                [329.63, 415.3, 369.99, 293.66, 246.94],
                [246.94, 293.66, 369.99, 329.63, 293.66]
            ],
            orren: [
                [349.23, 440, 523.25, 440, 392],
                [392, 493.88, 587.33, 493.88, 440],
                [329.63, 392, 493.88, 440, 349.23]
            ],
            cave: [
                [261.63, 196, 246.94, 220],
                [293.66, 220, 261.63, 196],
                [246.94, 185, 220, 164.81]
            ]
        };
        const i = t === "outside" && e > 18 ? "night" : t, r = n[i] ?? n.outside, a = r[this.musicStep++ % r.length], o = i === "cafe" ? [0, .56, 1.22, 2.05, 2.7, 3.45] : i === "cave" ? [0, 1.05, 2.15, 3.35] : [0, .72, 1.5, 2.45, 3.2], c = i === "cave" ? "sine" : i === "ship" ? "sine" : "triangle";
        a.forEach((l, h) => this.tone(l, h === a.length - 1 ? 1.25 : .48 + (h % 3) * .12, c, i === "cave" ? .075 : .11, !0, o[h] ?? h * .72));
        if (i !== "cave") {
            const l = a[0] / 2;
            this.tone(l, 1.35, "sine", .032, !0, .04), this.tone(l * 1.5, 1.1, "sine", .022, !0, 2.45);
        }
        if (i === "cafe" && this.musicStep % 2 === 0)
            this.tone(a[1] * 2, .55, "sine", .045, !0, 1.78);
    }
    ui() { this.tone(660, .08, "sine", .18); }
    pickup() { this.tone(740, .2, "sine", .22), this.tone(1110, .33, "sine", .09); }
    step() { this.tone(this.zone === "ship" ? 100 : this.zone === "cave" ? 135 : 85, .075, "triangle", .16); }
    update(t, e, n) { this.zone = e, this.context && (this.nextChord -= t, this.nextChord < 0 && (this.nextChord = (e === "cave" ? 9.5 : 8) + Math.random() * 3.2, this.musicPhrase(e, n), e === "outside" && n < 19 && Math.random() < .5 && (this.tone(1050 + Math.random() * 450, .16, "sine", .022, !1, .3), this.tone(1280 + Math.random() * 520, .11, "sine", .015, !1, .5)))); }
}'''

for path in runtime_paths:
    s = path.read_text()

    # Replace the entire procedural audio class so the new melody is unmistakably different.
    a = s.index("class $0 {")
    b = s.index("function Wl(", a)
    s = s[:a] + new_audio + "\n" + s[b:]

    # Store eyebrow meshes so expressions can be subtle instead of stretching the mouth.
    s = s.replace(
        "    mouth = null;\n    phase = 0;",
        "    mouth = null;\n    brows = [];\n    phase = 0;",
        1
    )
    brow_old = 'R(this.head, "box", t.hair, e * .14, .32, .3, .13, .025, .025);'
    brow_new = 'this.brows.push(R(this.head, "box", t.hair, e * .14, .32, .3, .13, .025, .025));'
    s = s.replace(brow_old, brow_new, 1)

    # Replace animation reset + social pose with a safer whole-arm wave and subtle happy face.
    social_start = s.index("    animate(t, e, n, i, r = 0) {", s.index("class qc {"))
    social_end = s.index("\n}\nclass H0", social_start)
    old_block = s[social_start:social_end]
    new_block = r'''    animate(t, e, n, i, r = 0) { this.blinkClock += t; const a = this.blinkClock % 4.7 > 4.54; this.lids.forEach(c => c.visible = a), this.facing = Bc(this.facing, i, 13, t), this.root.rotation.y = this.facing, this.phase += t * (e > .1 ? e * 2.45 : 1.8); const o = Math.min(.85, e * .105); for (let c = 0; c < 2; c++) {
        const l = Math.sin(this.phase + c * Math.PI);
        this.legs[c].rotation.x = Mi(this.legs[c].rotation.x, n ? l * o : -.3, 15, t), this.arms[c].rotation.x = Mi(this.arms[c].rotation.x, n ? -l * o : .65, 15, t), this.arms[c].rotation.z = Mi(this.arms[c].rotation.z, 0, 9, t), this.arms[c].rotation.y = Mi(this.arms[c].rotation.y, 0, 9, t);
    } this.body.position.y = n ? e > .1 ? Math.abs(Math.sin(this.phase)) * .065 : Math.sin(this.phase) * .013 : 0, this.body.rotation.z = Mi(this.body.rotation.z, n ? Math.sin(this.phase) * o * .022 : 0, 5, t), this.head.rotation.y = Mi(this.head.rotation.y, Math.max(-.65, Math.min(.65, r)), 4, t), this.head.rotation.z = Mi(this.head.rotation.z, 0, 7, t), this.head.rotation.x = Mi(this.head.rotation.x, 0, 7, t), this.mouth && (this.mouth.scale.x = Mi(this.mouth.scale.x, 1, 10, t), this.mouth.scale.y = Mi(this.mouth.scale.y, 1, 10, t), this.mouth.position.y = Mi(this.mouth.position.y, -.04, 10, t)), this.brows.forEach(c => { c.position.y = Mi(c.position.y, .32, 10, t), c.rotation.z = Mi(c.rotation.z, 0, 10, t); }); }
    socialPose(t, e, n = 1) {
        const i = de(n, 0, 1), r = this.arms[1], a = Math.sin(this.phase * 5.2);
        if (this.mouth) this.mouth.scale.x = Mi(this.mouth.scale.x, 1 + .22 * i, 12, t), this.mouth.scale.y = Mi(this.mouth.scale.y, .78, 12, t), this.mouth.position.y = Mi(this.mouth.position.y, -.025, 12, t);
        this.brows.forEach((o, c) => { o.position.y = Mi(o.position.y, .35, 12, t), o.rotation.z = Mi(o.rotation.z, (c === 0 ? -.08 : .08) * i, 12, t); });
        if (e === "wave") {
            r.rotation.z = Mi(r.rotation.z, 2.38, 10, t), r.rotation.x = Mi(r.rotation.x, -.08 + a * .16, 12, t), r.rotation.y = Mi(r.rotation.y, .05, 10, t), this.head.rotation.z = Mi(this.head.rotation.z, -.055, 8, t);
        } else if (e === "nod") {
            this.head.rotation.x = Mi(this.head.rotation.x, .04 + Math.sin(this.phase * 2.5) * .055 * i, 8, t);
        } else if (e === "grin") {
            this.head.rotation.z = Mi(this.head.rotation.z, .035, 8, t);
        }
    }'''
    s = s[:social_start] + new_block + s[social_end:]
    path.write_text(s)

# Cache-bust the dev entry point so Safari cannot silently keep the old runtime/music.
index_path = root / "working/index.html"
idx = index_path.read_text()
idx = idx.replace("./assets/mosslight-v3-readable.js", "./assets/mosslight-v3-readable.js?v=3.4")
idx = idx.replace("./assets/mosslight-v3.css", "./assets/mosslight-v3.css?v=3.4")
index_path.write_text(idx)

ch = root / "CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R4 development hotfix — social animation + audible music variation

- Replaced the awkward NPC arm pose with a safer raised whole-arm wave.
- Removed exaggerated mouth stretching and switched expressions to subtle mouth, brow, nod, and head-tilt motion.
- Added automatic pose reset so social expressions return cleanly to idle animations.
- Reworked music again with clearly separated melodic notes, changing motifs, rhythmic spacing, and real rests instead of a nearly continuous sustained tone.
- Raised the musical layer enough to be audible while preserving the existing filtered ambient noise bed.
- Added a dev-build cache-buster so Safari reliably loads the new runtime and stylesheet.
"""
if "## V3R4 development hotfix" not in cs:
    ch.write_text(cs.rstrip() + "\n" + entry + "\n")

print("V3R4 hotfix applied")
