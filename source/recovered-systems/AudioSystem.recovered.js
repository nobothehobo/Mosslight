/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: $0
 * Friendly recovery name: AudioSystem
 * Role: Audio and ambience system
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class $0 {
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
}
