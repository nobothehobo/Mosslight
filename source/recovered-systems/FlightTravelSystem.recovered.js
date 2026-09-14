/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: d0
 * Friendly recovery name: FlightTravelSystem
 * Role: Ship flight and travel state
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class d0 {
    constructor(t) { this.state = t; }
    state;
    angular = { x: 0, y: 0 };
    beginTakeoff() { return this.data.mode !== "landed" || !this.state.data.flags.repaired || this.data.transit ? !1 : (this.data.transit = { kind: "takeoff", elapsed: 0 }, this.data.piloting = !0, this.state.touch(), !0); }
    beginLanding() { return !this.canLand() || this.data.transit ? !1 : (this.data.transit = { kind: "landing", elapsed: 0 }, this.data.piloting = !0, this.data.speed = 0, this.state.touch(), !0); }
    get data() { return this.state.data.voyage; }
    get target() { return this.data.destination ? rn[this.data.destination] : null; }
    get distance() { const t = this.target, e = this.data.position; return t ? Math.max(0, Math.hypot(e[0] - t.position[0], e[1] - t.position[1], e[2] - t.position[2]) - t.radius - 80) : 0; }
    get eta() { return Math.ceil(this.distance / Math.max(1, this.data.mode === "autopilot" ? 45 : this.data.speed)); }
    setCourse(t) { return this.state.data.navigation.unlockedWorlds.includes(t) ? (this.data.destination = t, this.data.mode === "approach" && (this.data.mode = "manual"), this.state.touch(), !0) : !1; }
    launch() { if (!this.state.data.flags.repaired || this.data.mode !== "landed")
        return !1; const t = rn[this.data.planet]; return this.data.position = [t.position[0], t.position[1] + 35, t.position[2] + t.radius + 170], this.data.mode = "manual", this.data.piloting = !0, this.data.speed = 0, this.data.throttle = 0, this.data.yaw = 0, this.data.pitch = 0, this.state.data.navigation.unlockedWorlds = ["mosslight", "orren"], this.data.destination = this.data.destination ?? (this.data.planet === "mosslight" ? "orren" : "mosslight"), this.state.touch(), !0; }
    autopilot() { return this.data.transit || this.data.mode === "landed" || !this.target ? !1 : (this.data.mode = "autopilot", this.state.touch(), !0); }
    stand() { this.data.transit || (this.data.piloting = !1, this.data.mode === "manual" && (this.data.speed = 0, this.data.throttle = 0), this.state.touch()); }
    brake() { this.data.transit || (this.data.mode !== "landed" && (this.data.mode = "manual"), this.data.throttle = 0, this.data.speed = 0); }
    update(t, e = { x: 0, y: 0 }, n = 0) { t = Math.min(.05, Math.max(0, t)); const i = this.data; if (i.transit) {
        if (i.transit.elapsed += t, i.transit.elapsed >= 18) {
            const r = i.transit.kind;
            delete i.transit, r === "takeoff" ? this.launch() : this.land(), this.state.touch();
        }
        return !1;
    } if (i.mode === "landed")
        return !1; if (i.mode === "autopilot" && this.target) {
        const r = this.target, a = i.position, o = r.position[0] - a[0], c = r.position[1] - a[1], l = r.position[2] - a[2], h = Math.hypot(o, c, l);
        i.yaw = Math.atan2(-o, -l), i.pitch = -Math.asin(c / Math.max(.001, h));
        const u = Math.min(45 * t, this.distance);
        if (i.speed = u / Math.max(t, .001), i.throttle = 1, h > 0 && (a[0] += o / h * u, a[1] += c / h * u, a[2] += l / h * u), this.distance < .1)
            return i.mode = "approach", i.speed = 0, i.throttle = 0, this.state.touch(), !0;
    }
    else if (i.mode === "manual" && i.piloting) {
        const r = o => de(o / Math.max(t, .001) * .0016, -1.1, 1.1);
        this.angular.x += (r(e.x) - this.angular.x) * (1 - Math.exp(-3.5 * t)), this.angular.y += (r(e.y) - this.angular.y) * (1 - Math.exp(-3.5 * t)), i.yaw -= this.angular.x * t, i.pitch = de(i.pitch + this.angular.y * t, -1.45, 1.45), i.throttle = de(i.throttle + n * t * .5, 0, 1), i.speed += (i.throttle * 60 - i.speed) * (1 - Math.exp(-2 * t));
        const a = Math.cos(i.pitch);
        i.position[0] -= Math.sin(i.yaw) * a * i.speed * t, i.position[1] -= Math.sin(i.pitch) * i.speed * t, i.position[2] -= Math.cos(i.yaw) * a * i.speed * t;
        for (const o of Object.values(rn)) {
            const c = i.position.map((u, d) => u - o.position[d]), l = Math.hypot(...c), h = o.radius + 45;
            if (l < h) {
                for (let u = 0; u < 3; u++)
                    i.position[u] = o.position[u] + (l > .001 ? c[u] / l : u === 2 ? 1 : 0) * h;
                i.speed = 0, i.throttle = 0;
            }
        }
        for (let o = 0; o < 3; o++)
            Math.abs(i.position[o]) > 12e3 && (i.position[o] = de(i.position[o], -12e3, 12e3), i.speed = 0, i.throttle = 0);
    } return !1; }
    canLand() { return this.data.mode !== "landed" && this.target !== null && this.distance < 25; }
    land() { if (!this.canLand() || !this.data.destination)
        return !1; const t = this.data; t.planet = t.destination, t.mode = "landed", t.speed = 0, t.throttle = 0, t.piloting = !1, t.visited.includes(t.planet) || t.visited.push(t.planet); const e = t.planet === "mosslight" ? "mosslight_harbor" : "orren_anchorage"; return this.state.data.navigation.knownLandings.includes(e) || this.state.data.navigation.knownLandings.push(e), this.state.touch(), !0; }
}
