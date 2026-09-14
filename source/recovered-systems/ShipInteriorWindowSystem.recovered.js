/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: A0
 * Friendly recovery name: ShipInteriorWindowSystem
 * Role: Ship pilot/window state
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class A0 {
    yoke = new Wt;
    throttle = new Wt;
    scene = new gc;
    cockpit = new Wt;
    constructor(t) { this.scene.background = new Pt("#0d182b"), this.scene.add(new Ic("#b3c3ed", "#162738", 2)); const e = new Uc("#ffdfbd", 3); e.position.set(-300, 400, 200), this.scene.add(e); const n = Nn(712), i = new Float32Array(1600 * 3); for (let a = 0; a < 1600; a++) {
        const o = n() * Math.PI * 2, c = Math.acos(n() * 2 - 1), l = 19e3;
        i.set([Math.sin(c) * Math.cos(o) * l, Math.cos(c) * l, Math.sin(c) * Math.sin(o) * l], a * 3);
    } const r = new _e; r.setAttribute("position", new Se(i, 3)), this.scene.add(new lo(r, new rr({ color: "#d4dfef", size: 12, sizeAttenuation: !0, fog: !1 }))); for (const a of Object.values(rn)) {
        const o = new On(a.radius, 48, 32), c = o.attributes.position, l = new Float32Array(c.count * 3);
        for (let d = 0; d < c.count; d++) {
            const f = c.getX(d) / a.radius, g = c.getY(d) / a.radius, v = c.getZ(d) / a.radius, m = Math.sin(f * 13 + Math.cos(g * 7)) * Math.cos(v * 11 + g * 4), p = new Pt(a.id === "mosslight" ? m > .15 ? "#91ac85" : "#558eac" : m > .2 ? "#dbb5a0" : "#bc927d");
            Math.abs(g) > .85 && p.set("#e7e2cc"), l.set([p.r, p.g, p.b], d * 3);
        }
        o.setAttribute("color", new Se(l, 3));
        const h = new qt(o, new ye({ vertexColors: !0, roughness: .92 }));
        h.position.fromArray(a.position), this.scene.add(h);
        const u = new qt(new On(a.radius * 1.025, 32, 24), new bn({ color: a.id === "mosslight" ? "#82bfd5" : "#e5b6bd", transparent: !0, opacity: .1, side: Re }));
        if (u.position.copy(h.position), this.scene.add(u), a.id === "orren") {
            const d = new qt(new cr(a.radius * 1.45, a.radius * 1.9, 96), new ye({ color: "#c8b29f", side: Ge, transparent: !0, opacity: .48 }));
            d.position.copy(h.position), d.rotation.x = 1.15, this.scene.add(d);
        }
    } R(this.cockpit, "box", "#344c54", 0, -1.15, -1.65, 4.6, .42, 1.2); for (const a of [-1.65, 1.65])
        R(this.cockpit, "box", "#657e79", a, .2, -1.8, .1, 2.8, .1).rotation.z = a > 0 ? -.13 : .13; R(this.cockpit, "box", "#788f84", 0, 1.48, -1.8, 3.8, .1, .1); for (const a of [-.6, 0, .6])
        R(this.cockpit, "box", "#91c9bd", a, -.91, -1.6, .36, .02, .23, .6); this.scene.add(this.cockpit), this.yoke.position.set(0, -.6, -1.15), this.cockpit.add(this.yoke), R(this.yoke, "cylinder", "#b5c3b5", 0, -.2, 0, .055, .4, .055), R(this.yoke, "box", "#d2b589", 0, 0, 0, .62, .07, .08); for (const a of [-.3, .3])
        R(this.yoke, "box", "#5e827b", a, .07, 0, .085, .22, .12); this.throttle.position.set(.8, -.75, -1.2), this.cockpit.add(this.throttle), R(this.throttle, "cylinder", "#b5c3b5", 0, .12, 0, .025, .3, .025), R(this.throttle, "box", "#d5a56e", 0, .3, 0, .19, .08, .13), this.cockpit.position.set(0, 2.15, -5.4), t.add(this.cockpit); }
    pilot(t, e) { this.yoke.rotation.z = -e.angular.x * .4, this.yoke.rotation.x = e.angular.y * .35, this.throttle.rotation.x = .6 - e.data.throttle * 1.2, t.far = 1e3, t.near = .04, t.updateProjectionMatrix(), t.position.set(0, 2.15, -5.4), t.rotation.order = "YXZ", t.rotation.set(e.data.transit ? -.28 : 0, 0, 0); }
    updateWindow(t, e) { }
}
