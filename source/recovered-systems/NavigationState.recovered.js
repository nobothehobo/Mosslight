/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: c0
 * Friendly recovery name: NavigationState
 * Role: Navigation marker/state system
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class c0 {
    constructor(t) { this.state = t; }
    state;
    get worldId() { return this.state.data.voyage.planet; }
    get locations() { return this.worldId === "orren" ? Fl : wo; }
    get origin() { const t = this.state.data.player; return t.zone === "outside" || t.zone === "orren" ? { x: t.x, y: t.y, z: t.z } : t.zone === "cave" ? { x: 130, y: Ot(130, -119), z: -119 } : t.zone === "store" ? { x: 15, y: 0, z: -11 } : t.zone === "cafe" ? { x: -1, y: 0, z: 11 } : { x: -18, y: 0, z: 34 }; }
    marker(t, e, n, i, r, a, o = {}) { return { id: t, type: e, label: n, x: i, z: r, y: Ot(i, r, a === "mosslight" ? "outside" : "orren"), worldId: a, icon: "◇", color: "#bcd9c9", priority: 10, discovered: !0, ...o }; }
    all() { const t = this.state.data, e = t.navigation, n = []; for (const [r, a] of [["mosslight", wo], ["orren", Fl]])
        if (e.unlockedWorlds.includes(r))
            for (const o of a) {
                if (o.id === "ship")
                    continue;
                const c = t.discovered.includes(o.id);
                n.push(this.marker(o.id, "landmark", c ? o.name : "Unexplored", o.x, o.z, r, { discovered: c, icon: c ? "✧" : "?", color: c ? "#b2c9bb" : "#718c88" }));
            } n.push(this.marker("ship", "ship", "Your ship · The Little Elsewhere", -18, 34, t.voyage.planet, { icon: "⌁", color: "#a6e2d8", priority: 80 })); for (const r of Nl)
        e.knownServices.includes(r.id) && n.push(this.marker(r.id, "service", r.label, r.x, r.z, "mosslight", { icon: r.icon, color: "#ead3a5", priority: 30 })); for (const r of Ln) {
        if (!e.knownNPCs.includes(r.id))
            continue;
        const a = t.npcs[r.id] ?? { ...r.work, activity: "At work" };
        n.push(this.marker(r.id, "npc", r.name, a.x, a.z, "mosslight", { icon: "●", priority: 25, activity: a.activity, targetEntityId: r.id }));
    } const i = this.questMarker(); return i && n.push(i), e.waypoint && n.push(this.marker("waypoint", "waypoint", e.waypoint.label, e.waypoint.x, e.waypoint.z, e.waypoint.worldId, { priority: 120, icon: "⌖", color: "#f0c08b" })), n; }
    guidance(t) { const e = this.state.data.player.zone; if (e === "outside" || e === "orren" || t.zone === e)
        return t; const n = qa[e]; return { ...t, ...n.exit, y: 1, zone: e, label: (e === "ship" ? "Airlock" : e === "cave" ? "Tunnel exit" : "Harbor door") + " → " + t.label }; }
    mapMarker(t) { const e = qa[t.zone]; return e ? { ...t, ...e.entry } : t; }
    questMarker() { const t = this.state.data, e = t.navigation.trackedQuest; if (!e || !Oe[e])
        return null; const n = t.quests[e] ?? 0; if (n === 3)
        return null; const i = (a, o, c, l = "mosslight", h = {}) => this.marker("quest:" + e, "quest", a, o, c, l, { priority: 100, color: "#f4d096", ...h }), r = a => { const o = Ln[a], c = t.npcs[o.id] ?? o.work; return i(o.name, c.x, c.z, "mosslight", { targetEntityId: o.id }); }; return e === "signal" ? n === 0 || n === 2 ? r(0) : t.discovered.includes("beacon") ? i("Survey Array 04", -106, -137) : i("Search Fernwood for the signal", -88, -110, "mosslight", { searchRadius: 42 }) : e === "research" ? n === 0 || n === 2 ? r(2) : i(t.observed.length < 2 ? "Observe mosslings · keep a little distance" : "Gather three lanterncaps", -62, -72, "mosslight", { searchRadius: 32 }) : e === "cave" ? n === 0 || n === 2 ? r(4) : t.player.zone === "cave" ? i("Surveyor’s recording", 0, -11, "mosslight", { zone: "cave", y: 1 }) : i("The Lantern Tunnel", 130, -119) : e === "garden" ? n === 0 || n === 2 ? r(2) : i("The Listening Garden", 83, -79, "orren", t.discovered.includes("orren_garden") ? {} : { searchRadius: 22 }) : e === "supper" ? n === 0 || n === 2 ? r(3) : this.state.count("fish") === 0 ? i("Fish at Glasswater Jetty", 47, -7) : this.state.count("glowcap") === 0 ? i("Gather a lanterncap", -48, -44, "mosslight", { searchRadius: 18 }) : i("Cook in your ship galley", -18, 34) : null; }
    selected() { const t = this.state.data.navigation, e = this.all(); return e.find(n => n.id === "waypoint") ?? e.find(n => n.id === t.trackedMarker) ?? e.find(n => n.id === "quest:" + t.trackedQuest) ?? null; }
    trackQuest(t) { Oe[t] && (Object.assign(this.state.data.navigation, { trackedQuest: t, trackedMarker: null, waypoint: null }), this.state.touch()); }
    trackMarker(t) { this.all().some(e => e.id === t) && (Object.assign(this.state.data.navigation, { trackedMarker: t, waypoint: null }), this.state.touch()); }
    place(t, e, n = "Your waypoint", i = this.worldId) { !Number.isFinite(t) || !Number.isFinite(e) || (this.state.data.navigation.waypoint = { x: Math.max(-225, Math.min(225, t)), z: Math.max(-215, Math.min(215, e)), label: n, worldId: i }, this.state.touch()); }
    clear() { this.state.data.navigation.waypoint = null, this.state.data.navigation.trackedMarker = null, this.state.touch(); }
    discover() { const t = this.state.data, e = t.player, n = t.navigation, i = []; if (e.zone !== "outside" && e.zone !== "orren")
        return i; for (const r of this.locations)
        Math.hypot(r.x - e.x, r.z - e.z) < 25 && !t.discovered.includes(r.id) && (t.discovered.push(r.id), i.push(r.name)); if (e.zone === "outside") {
        for (const r of Nl)
            Math.hypot(r.x - e.x, r.z - e.z) < 20 && !n.knownServices.includes(r.id) && (n.knownServices.push(r.id), i.push(r.label));
        for (const r of Ln) {
            const a = t.npcs[r.id] ?? r.work;
            Math.hypot(a.x - e.x, a.z - e.z) < 10 && !n.knownNPCs.includes(r.id) && n.knownNPCs.push(r.id);
        }
    } return i.length && this.state.touch(), i; }
    arrive() { const t = this.state.data, e = t.navigation.waypoint; return e && e.worldId === this.worldId && (t.player.zone === "outside" || t.player.zone === "orren") && Math.hypot(t.player.x - e.x, t.player.z - e.z) < 6 ? (t.navigation.waypoint = null, this.state.touch(), !0) : !1; }
}
