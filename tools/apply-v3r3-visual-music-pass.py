from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

old_audio = '''class $0 {
    context = null;
    master = null;
    music = null;
    fx = null;
    ambience = null;
    nextChord = 0;
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
    apply(t) { this.settings = t, this.context && (this.master.gain.value = t.master, this.music.gain.value = t.music * .13, this.fx.gain.value = t.effects * .4, this.ambience.gain.value = .2); }
    tone(t, e = .12, n = "sine", i = .2, r = !1) { const a = this.context; if (!a || a.state !== "running")
        return; const o = a.createOscillator(), c = a.createGain(); o.type = n, o.frequency.setValueAtTime(t, a.currentTime), c.gain.setValueAtTime(1e-4, a.currentTime), c.gain.exponentialRampToValueAtTime(Math.max(.001, i), a.currentTime + .02), c.gain.exponentialRampToValueAtTime(1e-4, a.currentTime + e), o.connect(c), c.connect(r ? this.music : this.fx), o.start(), o.stop(a.currentTime + e + .05), o.onended = () => { o.disconnect(), c.disconnect(); }; }
    ui() { this.tone(660, .08, "sine", .18); }
    pickup() { this.tone(740, .2, "sine", .22), this.tone(1110, .33, "sine", .09); }
    step() { this.tone(this.zone === "ship" ? 100 : this.zone === "cave" ? 135 : 85, .075, "triangle", .16); }
    update(t, e, n) { this.zone = e, this.context && (this.nextChord -= t, this.nextChord < 0 && (this.nextChord = 9, (e === "cafe" ? [164.81, 220, 277.18, 329.63] : e === "ship" ? [146.83, 220, 293.66, 369.99] : e === "orren" ? [174.61, 261.63, 349.23, 440] : e === "store" ? [196, 261.63, 329.63] : e === "cave" ? [130.81, 196, 293.66] : n > 18 ? [174.61, 220, 329.63] : [196, 246.94, 293.66, 440]).forEach(r => this.tone(r, 7, "sine", .2, !0)), e === "outside" && n < 19 && this.tone(1200 + Math.random() * 400, .22, "sine", .04))); }
}'''

new_audio = '''class $0 {
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
    apply(t) { this.settings = t, this.context && (this.master.gain.value = t.master, this.music.gain.value = t.music * .105, this.fx.gain.value = t.effects * .4, this.ambience.gain.value = .2); }
    tone(t, e = .12, n = "sine", i = .2, r = !1, a = 0) { const o = this.context; if (!o || o.state !== "running")
        return; const c = o.createOscillator(), l = o.createGain(), h = o.currentTime + Math.max(0, a); c.type = n, c.frequency.setValueAtTime(t, h), l.gain.setValueAtTime(1e-4, h), l.gain.exponentialRampToValueAtTime(Math.max(.001, i), h + .035), l.gain.exponentialRampToValueAtTime(1e-4, h + e), c.connect(l), l.connect(r ? this.music : this.fx), c.start(h), c.stop(h + e + .06), c.onended = () => { c.disconnect(), l.disconnect(); }; }
    musicPhrase(t, e) { const n = {
        cafe: [[164.81, 207.65, 246.94, 329.63], [174.61, 220, 261.63, 349.23], [146.83, 196, 246.94, 293.66]],
        ship: [[146.83, 220, 293.66, 369.99], [130.81, 196, 261.63, 329.63], [164.81, 246.94, 329.63, 415.3]],
        orren: [[174.61, 261.63, 349.23, 440], [196, 293.66, 392, 493.88], [164.81, 246.94, 329.63, 440]],
        store: [[196, 246.94, 329.63, 392], [220, 261.63, 329.63, 440], [174.61, 220, 293.66, 349.23]],
        cave: [[130.81, 196, 261.63], [146.83, 220, 293.66], [123.47, 185, 246.94]],
        night: [[174.61, 220, 293.66, 349.23], [146.83, 196, 246.94, 329.63], [164.81, 207.65, 261.63, 329.63]],
        outside: [[196, 246.94, 293.66, 392], [220, 261.63, 329.63, 440], [174.61, 220, 293.66, 349.23], [196, 261.63, 329.63, 493.88]]
    }, i = t === "outside" && e > 18 ? "night" : t, r = n[i] ?? n.outside, a = r[this.musicStep++ % r.length], o = t === "cave" ? 0.045 : t === "ship" ? .052 : .06, c = t === "cave" ? "sine" : "triangle";
        this.tone(a[0] / 2, 4.8, "sine", o * .62, !0, 0);
        a.slice(0, 3).forEach((l, h) => this.tone(l, 1.55 + h * .18, c, o * (1 - h * .12), !0, h * .62));
        a[3] && this.musicStep % 2 === 0 && this.tone(a[3], 1.75, "sine", o * .45, !0, 2.05);
        t === "cafe" && this.musicStep % 3 === 0 && this.tone(a[1] * 2, .9, "sine", o * .25, !0, 2.75);
    }
    ui() { this.tone(660, .08, "sine", .18); }
    pickup() { this.tone(740, .2, "sine", .22), this.tone(1110, .33, "sine", .09); }
    step() { this.tone(this.zone === "ship" ? 100 : this.zone === "cave" ? 135 : 85, .075, "triangle", .16); }
    update(t, e, n) { this.zone = e, this.context && (this.nextChord -= t, this.nextChord < 0 && (this.nextChord = (e === "cave" ? 7.8 : 5.4) + Math.random() * 2.8, this.musicPhrase(e, n), e === "outside" && n < 19 && Math.random() < .58 && (this.tone(1050 + Math.random() * 450, .18, "sine", .025, !1, .25), this.tone(1280 + Math.random() * 520, .13, "sine", .018, !1, .42)))); }
}'''

sky_old = 'fragmentShader: "varying vec3 vDir;uniform vec3 top;uniform vec3 bottom;uniform vec3 sun;uniform float warm;void main(){vec3 d=normalize(vDir);float h=pow(max(0.,d.y),.5);vec3 col=mix(bottom,top,h);float spot=pow(max(0.,dot(d,normalize(sun))),90.);col+=spot*vec3(.6,.42,.21)*warm;gl_FragColor=vec4(col,1.);}"'
sky_new = 'fragmentShader: "varying vec3 vDir;uniform vec3 top;uniform vec3 bottom;uniform vec3 sun;uniform float warm;void main(){vec3 d=normalize(vDir);float h=pow(max(0.,d.y),.62);vec3 col=mix(bottom,top,h);float horizon=pow(1.-abs(clamp(d.y,-1.,1.)),5.);col+=horizon*vec3(.10,.12,.08)*(0.35+warm*.65);float spot=pow(max(0.,dot(d,normalize(sun))),110.);float halo=pow(max(0.,dot(d,normalize(sun))),18.);col+=spot*vec3(.72,.48,.24)*warm+halo*vec3(.09,.07,.04)*warm;gl_FragColor=vec4(col,1.);}"'

tree_old = 'this.trees = new Fr(new lr(1, 2), new ye({ roughness: .85 }), n.length);'
tree_new = 'this.trees = new Fr(new On(1, 10, 7), new ye({ roughness: .78 }), n.length);'

terrain_old = 'new ye({ vertexColors: !0, roughness: .96, map: v0() })'
terrain_new = 'new ye({ vertexColors: !0, roughness: .88, map: v0() })'

harbor_old = 'T0(t, r, u, a, o, c, l, h), this.colliders.push({ x: r, z: a, radius: Math.max(l, h) * .53, halfX: l / 2, halfZ: h / 2, zone: "outside", height: 6.6 });'
harbor_new = '''T0(t, r, u, a, o, c, l, h), R(t, "box", "#c7b895", r, u + .12, a + h / 2 + .62, Math.min(3.1, l * .42), .24, 1.35), R(t, "box", "#6d8478", r - l * .28, u + 1.35, a + h / 2 + .12, 1.65, .28, .34), R(t, "box", "#6d8478", r + l * .28, u + 1.35, a + h / 2 + .12, 1.65, .28, .34), R(t, "ball", "#7fa079", r - l * .28, u + 1.68, a + h / 2 + .18, .62, .42, .34), R(t, "ball", "#8dae80", r + l * .28, u + 1.68, a + h / 2 + .18, .62, .42, .34), this.colliders.push({ x: r, z: a, radius: Math.max(l, h) * .53, halfX: l / 2, halfZ: h / 2, zone: "outside", height: 6.6 });'''

nature_anchor = 'this.outside.add(wi(r));\n    }\n    makeHarbor()'
nature_insert = '''this.outside.add(wi(r));
        const s = new Wt;
        for (let h = 0; h < 54; h++) {
            const u = t() * Math.PI * 2, d = 30 + t() * 58, f = Math.cos(u) * d, g = Math.sin(u) * d;
            if (Si(f, g) || qs(f, g) < 4 || Math.hypot(f + 25, g - 34) < 13)
                continue;
            const v = Ot(f, g), m = .55 + t() * .7;
            R(s, "ball", h % 4 === 0 ? "#9fb987" : h % 3 === 0 ? "#6f9875" : "#7fa47a", f, v + .42 * m, g, 1.05 * m, .72 * m, .95 * m);
            if (h % 3 === 0) {
                const p = h % 2 ? "#e5c28d" : "#d7a6a6";
                for (let y = 0; y < 3; y++)
                    R(s, "round", p, f + (y - 1) * .28 * m, v + .9 * m + (y % 2) * .12, g + .08, .11 * m, .11 * m, .11 * m);
            }
        }
        for (let h = 0; h < 34; h++) {
            const u = (t() - .5) * 72, d = (t() - .5) * 72;
            if (Math.hypot(u, d) < 13 || Si(u, d))
                continue;
            const f = Ot(u, d), g = .8 + t() * .8;
            R(s, "round", h % 2 ? "#799a75" : "#8cab78", u, f + .24, d, .72 * g, .32 * g, .62 * g);
        }
        this.outside.add(wi(s));
    }
    makeHarbor()'''

renderer_exposure_old = 'this.renderer.toneMappingExposure = 1.08'
renderer_exposure_new = 'this.renderer.toneMappingExposure = 1.12'

for path in runtime_paths:
    s = path.read_text()
    if 'musicPhrase(t, e)' not in s:
        if old_audio not in s:
            raise SystemExit(f"AudioSystem pattern not found in {path}")
        s = s.replace(old_audio, new_audio, 1)
    if sky_new not in s:
        if sky_old not in s:
            raise SystemExit(f"Sky shader pattern not found in {path}")
        s = s.replace(sky_old, sky_new, 1)
    if tree_new not in s:
        if tree_old not in s:
            raise SystemExit(f"Tree geometry pattern not found in {path}")
        s = s.replace(tree_old, tree_new, 1)
    if terrain_new not in s:
        if terrain_old not in s:
            raise SystemExit(f"Terrain material pattern not found in {path}")
        s = s.replace(terrain_old, terrain_new, 1)
    if harbor_new not in s:
        if harbor_old not in s:
            raise SystemExit(f"Harbor detail pattern not found in {path}")
        s = s.replace(harbor_old, harbor_new, 1)
    if 'const s = new Wt;' not in s:
        if nature_anchor not in s:
            raise SystemExit(f"Nature anchor not found in {path}")
        s = s.replace(nature_anchor, nature_insert, 1)
    s = s.replace(renderer_exposure_old, renderer_exposure_new)
    path.write_text(s)

ch = root / "CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R3 development — visual + music foundation

- Reworked the procedural music system from long static sustained chords into gentle changing phrases, broken chords, rests, and zone-specific progressions.
- Preserved the existing low-passed ambient noise bed that gives Mosslight its soft environmental hush.
- Added different musical palettes for Mosslight daytime/night, café, provisions shop, ship, Orren, and cave.
- Replaced pointed tree foliage with layered rounded canopies for a softer handcrafted silhouette.
- Added shrubs, small flowering clusters, and low ground cover around the harbor region.
- Added porch steps, window boxes, and planted façade details to settlement buildings without changing collision boundaries.
- Improved terrain material response, sky horizon depth, sunset halo, and overall exposure.
- Kept gameplay, saves, quests, economy, navigation, flight, and interaction coordinates unchanged.
"""
if "## V3R3 development — visual + music foundation" not in cs:
    ch.write_text(cs.rstrip() + "\n" + entry + "\n")

print("V3R3 visual + music patch applied")
