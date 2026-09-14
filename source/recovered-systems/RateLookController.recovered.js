/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: D0
 * Friendly recovery name: RateLookController
 * Role: iPad rate-look controller
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class D0 {
    active = !1;
    anchor = { x: 0, y: 0 };
    offset = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    begin(t, e) { this.cancel(), this.active = !0, this.anchor = { x: t, y: e }; }
    move(t, e) { this.active && (this.offset = { x: t - this.anchor.x, y: e - this.anchor.y }); }
    cancel() { this.active = !1, this.offset = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }; }
    step(t) { t = Math.min(.05, Math.max(0, t)); const e = n => { const i = Math.min(1, Math.max(0, (Math.abs(n) - 7) / 110)); return Math.sign(n) * i * i * 800; }; for (const n of ["x", "y"])
        this.velocity[n] += (this.active ? e(this.offset[n]) - this.velocity[n] : -this.velocity[n]) * (1 - Math.exp(-12 * t)); return { x: this.velocity.x * t, y: this.velocity.y * t }; }
}
