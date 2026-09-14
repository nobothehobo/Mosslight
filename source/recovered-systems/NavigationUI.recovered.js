/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: h0
 * Friendly recovery name: NavigationUI
 * Role: Compass, minimap and map UI
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class h0 {
    constructor(t, e, n, i, r) { this.nav = t, this.ui = e, this.settings = n, this.changed = i, this.system = r; const a = e.root.querySelector("#compass"); a.innerHTML = '<canvas width="660" height="112" aria-label="Navigation compass"></canvas>', this.compass = a.querySelector("canvas"); const o = document.createElement("div"); o.id = "minimap-wrap", o.innerHTML = '<button id="minimap-open" aria-label="Open navigation map"><canvas width="320" height="320" aria-label="Local minimap"></canvas></button><span id="minimap-caption">NORTH UP</span>', e.hud.append(o), this.minimap = o.querySelector("canvas"), o.querySelector("button").addEventListener("click", () => e.actions.open("map")), this.target = document.createElement("button"), this.target.id = "nav-target", this.target.addEventListener("click", () => e.actions.open("map")), e.hud.append(this.target), this.worldLabel = document.createElement("div"), this.worldLabel.id = "world-marker", e.hud.append(this.worldLabel), this.crosshair = document.createElement("div"), this.crosshair.id = "crosshair", this.crosshair.textContent = "·", e.hud.append(this.crosshair), this.region = document.createElement("div"), this.region.id = "region-banner", e.hud.append(this.region); }
    nav;
    ui;
    settings;
    changed;
    system;
    minimap;
    compass;
    target;
    worldLabel;
    crosshair;
    region;
    cache = new Map;
    timer = 0;
    markers = [];
    mapCanvas = null;
    mapCenter = { x: 0, z: 0 };
    mapScale = 1.5;
    mapWorld = "mosslight";
    hits = [];
    lastRegion = "";
    regionTimer = 0;
    notifyRegion(t) { t !== this.lastRegion && (this.lastRegion = t, this.region.textContent = t, this.region.classList.add("show"), clearTimeout(this.regionTimer), this.regionTimer = window.setTimeout(() => this.region.classList.remove("show"), 2800)); }
    base(t) { const e = this.cache.get(t); if (e)
        return e; const n = document.createElement("canvas"); n.width = 1024, n.height = 1024; const i = n.getContext("2d"), r = t === "orren"; for (let o = 0; o < 128; o++)
        for (let c = 0; c < 128; c++) {
            const l = (c / 128 - .5) * 520, h = (o / 128 - .5) * 520, u = Ot(l, h, r ? "orren" : "outside");
            i.fillStyle = r ? `hsl(${25 + u * .4} 29% ${29 + u * .7}%)` : `hsl(${137 + u * .4} 18% ${25 + u * .8}%)`, i.fillRect(c * 8, o * 8, 8, 8);
        } if (i.save(), i.translate(512, 512), i.scale(1024 / 520, 1024 / 520), i.fillStyle = r ? "#5eaaa5" : "#4e8692", i.beginPath(), i.ellipse(r ? 35 : 76, r ? 0 : -12, r ? 17 : 35, r ? 13 : 25, 0, 0, Math.PI * 2), i.fill(), r || (i.fillStyle = "#28493e", i.beginPath(), i.ellipse(-76, -80, 48, 69, -.35, 0, Math.PI * 2), i.fill()), (r ? a0 : go).forEach((o, c) => { i.beginPath(), o.forEach(([l, h], u) => u ? i.lineTo(l, h) : i.moveTo(l, h)), i.strokeStyle = c === 0 ? "#c6ac7c" : c === 1 ? "#95bfcb" : "#94a595", i.lineWidth = 2.1, i.stroke(); }), r)
        i.strokeStyle = "#e2b99d", i.lineWidth = 3, i.strokeRect(73, -88, 20, 17), i.strokeRect(-81, -72, 12, 10);
    else
        for (const [o, c, l, h] of r0)
            i.fillStyle = "#e0c9a1", i.fillRect(o - l / 2, c - h / 2, l, h), i.strokeStyle = "#34413d", i.lineWidth = 1, i.strokeRect(o - l / 2, c - h / 2, l, h); return i.restore(), this.cache.set(t, n), n; }
    geography(t, e, n, i, r, a, o) { t.fillStyle = o === "orren" ? "#493b3a" : "#173d3e", t.fillRect(0, 0, e, n), t.save(), t.translate(e / 2, n / 2), t.rotate(a), t.scale(r, r), t.translate(-i.x, -i.z), t.drawImage(this.base(o), -260, -260, 520, 520), t.restore(); }
    point(t, e, n, i, r, a) { const o = (t.x - e.x) * n, c = (t.z - e.z) * n; return { x: r / 2 + o * Math.cos(i) - c * Math.sin(i), y: a / 2 + o * Math.sin(i) + c * Math.cos(i) }; }
    drawPlayer(t, e, n, i) { t.save(), t.translate(e, n), t.rotate(i), t.beginPath(), t.moveTo(0, -10), t.lineTo(7, 8), t.lineTo(0, 4), t.lineTo(-7, 8), t.closePath(), t.fillStyle = "#f4fcdf", t.strokeStyle = "#18464a", t.lineWidth = 2, t.fill(), t.stroke(), t.restore(); }
    visibleMarkers(t) { const e = this.settings(); return this.markers.filter(n => n.worldId === t && n.discovered && (n.type !== "quest" || e.questMarkers !== "off") && (n.type !== "npc" || n.id === this.nav.state.data.navigation.trackedMarker)); }
    update(t, e, n, i) { const r = this.settings(), a = this.nav.state.data, o = a.voyage.mode !== "landed"; this.timer += t, this.crosshair.hidden = !i || r.perspective !== "first" || o && a.voyage.piloting; const c = this.minimap.parentElement.parentElement; c.hidden = !i || !r.minimap || o; const l = this.nav.selected(), h = l ? this.nav.guidance(l) : null; if (this.target.hidden = !i || o || !h || h.type === "quest" && r.questMarkers === "off", h) {
        const u = h.worldId !== this.nav.worldId, d = Math.round(Math.hypot(h.x - a.player.x, h.z - a.player.z));
        this.target.textContent = `${h.icon} ${h.label}${u ? " · " + h.worldId.toUpperCase() : r.distances ? " · " + d + " m" : ""}`;
    } if (this.compass.parentElement.hidden = !i || o, this.timer >= .18 && (this.timer = 0, this.markers = this.nav.all(), c.hidden || this.drawMini(e)), i && !o && this.drawCompass(e), this.worldLabel.hidden = !0, i && !o && h && h.worldId === this.nav.worldId && (h.type !== "quest" || r.questMarkers === "full") && r.worldMarkers !== "off") {
        const u = a.player;
        let d = { x: h.x, y: h.y + 2, z: h.z };
        const f = new T(d.x, d.y, d.z).project(n), g = Ol(u, d, e), v = f.z < 1 && Math.abs(f.x) < .85 && Math.abs(f.y) < .75 && Math.abs(g) < Math.PI / 2;
        if (v || r.edgeIndicators) {
            this.worldLabel.hidden = !1, this.worldLabel.classList.toggle("edge", !v);
            const m = v ? (f.x * .5 + .5) * innerWidth : g > 0 ? innerWidth - 55 : 55, p = v ? (-f.y * .5 + .5) * innerHeight : innerHeight * .5;
            this.worldLabel.style.left = m + "px", this.worldLabel.style.top = p + "px", this.worldLabel.textContent = `${v ? "◇" : g > 0 ? "◇ ›" : "‹ ◇"} ${l0(u.y, d.y - 2)}${r.distances ? " " + Math.round(Math.hypot(d.x - u.x, d.z - u.z)) + " m" : ""}${h.searchRadius ? " · search" : ""}${r.worldMarkers === "full" && v ? " · " + h.label : ""}`;
        }
    } }
    drawCompass(t) { const e = this.compass.getContext("2d"), n = 660; e.clearRect(0, 0, n, 112), e.font = "22px system-ui", e.textAlign = "center"; const r = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]; for (let l = 0; l < 8; l++) {
        const h = Hc(l * Math.PI / 4 - t);
        if (Math.abs(h) < 1.9) {
            const u = n / 2 + h * 165;
            e.fillStyle = "#d0dfd3", e.fillText(r[l], u, 25), e.fillRect(u, 34, 1, 9);
        }
    } e.fillStyle = "#f5d39d", e.beginPath(), e.moveTo(n / 2 - 4, 0), e.lineTo(n / 2 + 4, 0), e.lineTo(n / 2, 7), e.fill(); const a = this.nav.selected(), o = this.visibleMarkers(this.nav.worldId).filter(l => l.id === a?.id || l.id === "ship").sort((l, h) => h.priority - l.priority), c = []; for (const l of o) {
        if (l.id === "ship" && this.nav.state.data.player.zone === "ship")
            continue;
        const h = this.nav.guidance(l);
        let u = Ol(this.nav.state.data.player, h, t), d = Math.max(20, Math.min(n - 20, n / 2 + u * 165));
        c.some(f => Math.abs(f - d) < 60) && (d = Math.max(22, Math.min(n - 22, d + 65))), c.push(d), e.fillStyle = h.color, e.font = "23px system-ui", e.fillText(h.icon, d, 69), this.settings().distances && (e.font = "18px system-ui", e.fillText(Math.round(Math.hypot(h.x - this.nav.state.data.player.x, h.z - this.nav.state.data.player.z)) + " m", d, 99));
    } }
    drawMini(t) { if (this.nav.state.data.player.zone !== "outside" && this.nav.state.data.player.zone !== "orren") {
        this.drawInterior(t);
        return;
    } const e = this.minimap.getContext("2d"), n = this.settings(), i = this.nav.origin, r = n.minimapOrientation === "rotating" ? -t : 0, a = n.minimapZoom === "near" ? 3.6 : n.minimapZoom === "wide" ? 1 : 2; this.geography(e, 320, 320, i, a, r, this.nav.worldId); const o = this.nav.selected(); for (const c of this.visibleMarkers(this.nav.worldId).filter(l => l.priority >= 30 || l.id === o?.id)) {
        let l = this.point(c, i, a, r, 320, 320);
        (l.x < 14 || l.x > 306 || l.y < 14 || l.y > 306) && c.id !== o?.id && c.type !== "ship" || (l = { x: Math.max(14, Math.min(306, l.x)), y: Math.max(14, Math.min(306, l.y)) }, c.searchRadius && (e.fillStyle = "#eac28a22", e.beginPath(), e.arc(l.x, l.y, c.searchRadius * a, 0, Math.PI * 2), e.fill(), e.strokeStyle = "#eac28a88", e.stroke()), e.font = "bold 24px system-ui", e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#153637", e.beginPath(), e.arc(l.x, l.y, 14, 0, Math.PI * 2), e.fill(), e.fillStyle = c.color, e.fillText(c.icon, l.x, l.y));
    } this.drawPlayer(e, 160, 160, t + r), e.font = "bold 19px system-ui", e.fillStyle = "#faf3dc", e.textAlign = "left", n.minimapOrientation === "north" ? e.fillText("N", 12, 21) : (e.textAlign = "center", e.fillText("N", 160 + Math.sin(-t) * 137, 160 - Math.cos(-t) * 137)), this.ui.root.querySelector("#minimap-caption").textContent = n.minimapOrientation === "north" ? "NORTH UP · " + n.minimapZoom.toUpperCase() : "HEADING UP · " + n.minimapZoom.toUpperCase(); }
    drawInterior(t) { const e = this.minimap.getContext("2d"), n = this.nav.state.data.player, i = qa[n.zone]; if (!i)
        return; e.fillStyle = "#183940", e.fillRect(0, 0, 320, 320); const r = i.depth > 20 ? 8 : 14, a = 160, o = 160; e.fillStyle = "#65776c", e.fillRect(a - i.width * r / 2, o - i.depth * r / 2, i.width * r, i.depth * r), e.strokeStyle = "#c9c7a4", e.lineWidth = 3, e.strokeRect(a - i.width * r / 2, o - i.depth * r / 2, i.width * r, i.depth * r), e.fillStyle = "#e5d3a5", e.font = "22px system-ui", e.textAlign = "center", e.fillText("↗", a + i.exit.x * r, o + i.exit.z * r); const c = this.nav.selected(); if (c) {
        const l = this.nav.guidance(c);
        e.fillStyle = l.color, e.fillText(l.icon, a + l.x * r, o + l.z * r);
    } this.drawPlayer(e, a + n.x * r, o + n.z * r, t), this.ui.root.querySelector("#minimap-caption").textContent = i.name; }
    journalLinks() { for (const t of Array.from(this.ui.panel.querySelectorAll(".journal-quest"))) {
        const e = t.querySelector("h3")?.textContent, n = Object.values(Oe).find(r => r.title === e);
        if (!n || this.nav.state.data.quests[n.id] === 3)
            continue;
        const i = document.createElement("button");
        i.textContent = this.nav.state.data.navigation.trackedQuest === n.id ? "Tracking this quest" : "Track quest", i.className = "track-button", i.addEventListener("click", () => { this.nav.trackQuest(n.id), this.changed(), this.ui.notify("Tracking · " + n.title), this.ui.journal(); }), t.append(i);
    } }
    map(t = this.nav.worldId) { this.mapWorld = t, this.mapCenter = t === this.nav.worldId ? { ...this.nav.origin } : { x: 0, z: 0 }, this.mapScale = 1.5, this.ui.shell(t === "mosslight" ? "Mosslight region" : "Orren · Amber Garden", "LOCAL NAVIGATION", '<div class="map-toolbar"><button id="system-chart">System chart</button><button id="map-minus" aria-label="Zoom map out">−</button><button id="map-plus" aria-label="Zoom map in">＋</button><button id="map-recenter">Recenter</button><button id="clear-waypoint">Clear destination</button></div><div class="navigation-map"><canvas id="navigation-map" width="840" height="630" aria-label="Interactive map. Drag to pan; tap to set a waypoint."></canvas></div><p id="map-selection" role="status">Tap a place to set a waypoint. Drag to pan; pinch or scroll to zoom.</p><div id="map-directory" class="map-directory"></div>', "map"), this.mapCanvas = this.ui.panel.querySelector("canvas"), this.markers = this.nav.all(), this.drawMap(), this.directory(); const e = (n, i) => this.ui.panel.querySelector("#" + n).addEventListener("click", i); e("system-chart", this.system), e("clear-waypoint", () => { this.nav.clear(), this.changed(), this.markers = this.nav.all(), this.drawMap(), this.directory(); }), e("map-plus", () => { this.mapScale = Math.min(6, this.mapScale * 1.3), this.drawMap(); }), e("map-minus", () => { this.mapScale = Math.max(.8, this.mapScale / 1.3), this.drawMap(); }), e("map-recenter", () => { this.mapCenter = { ...this.nav.origin }, this.drawMap(); }), this.bindMap(); }
    directory() { const t = this.ui.panel.querySelector("#map-directory"); if (t) {
        t.innerHTML = "";
        for (const e of this.nav.all().filter(n => n.worldId === this.mapWorld && n.discovered)) {
            const n = document.createElement("button");
            n.textContent = e.icon + " " + e.label + (e.activity ? " · " + e.activity : ""), n.addEventListener("click", () => { this.nav.trackMarker(e.id), this.changed(), this.ui.notify("Destination · " + e.label), this.markers = this.nav.all(), this.drawMap(); }), t.append(n);
        }
    } }
    drawMap() { const t = this.mapCanvas; if (!t || !t.isConnected)
        return; const e = t.getContext("2d"), n = 840, i = 630; this.markers = this.nav.all(), this.geography(e, n, i, this.mapCenter, this.mapScale, 0, this.mapWorld), this.hits = [], e.textAlign = "center", e.textBaseline = "middle"; for (const r of this.visibleMarkers(this.mapWorld)) {
        const a = this.nav.mapMarker(r), o = this.point(a, this.mapCenter, this.mapScale, 0, n, i);
        if (o.x < 0 || o.x > n || o.y < 0 || o.y > i)
            continue;
        a.searchRadius && (e.fillStyle = "#edbd7029", e.strokeStyle = "#e8c388", e.beginPath(), e.arc(o.x, o.y, a.searchRadius * this.mapScale, 0, Math.PI * 2), e.fill(), e.stroke()), this.hits.find(l => Math.hypot(l.x - o.x, l.y - o.y) < 30) && (o.x += 28, o.y += 17), this.hits.push({ x: o.x, y: o.y, m: a }), e.fillStyle = "#17383b", e.strokeStyle = a.color, e.lineWidth = a.id === this.nav.selected()?.id ? 3 : 1, e.beginPath(), e.arc(o.x, o.y, 17, 0, Math.PI * 2), e.fill(), e.stroke(), e.fillStyle = a.color, e.font = "24px system-ui", e.fillText(a.icon, o.x, o.y);
    } if (this.mapWorld === this.nav.worldId) {
        const r = this.point(this.nav.origin, this.mapCenter, this.mapScale, 0, n, i);
        this.drawPlayer(e, r.x, r.y, this.nav.state.data.player.facing - Math.PI);
    } e.fillStyle = "#f5e5c4", e.font = "bold 20px system-ui", e.textAlign = "right", e.fillText("N ↑", 812, 25), e.font = "16px system-ui", e.fillText("100 m", 810, 605), e.fillRect(810 - 100 * this.mapScale, 616, 100 * this.mapScale, 2); }
    bindMap() { const t = this.mapCanvas, e = new Map; let n = { x: 0, y: 0 }, i = { x: 0, y: 0 }, r = !1, a = 0; const o = c => { const l = t.getBoundingClientRect(); return { x: (c.clientX - l.left) * 840 / l.width, y: (c.clientY - l.top) * 630 / l.height }; }; t.addEventListener("pointerdown", c => { c.preventDefault(), t.setPointerCapture(c.pointerId); const l = o(c); if (e.set(c.pointerId, l), n = l, i = l, r = !1, e.size === 2) {
        const [h, u] = [...e.values()];
        a = Math.hypot(h.x - u.x, h.y - u.y), r = !0;
    } }), t.addEventListener("pointermove", c => { if (!e.has(c.pointerId))
        return; const l = o(c); if (e.set(c.pointerId, l), e.size === 2) {
        const [h, u] = [...e.values()], d = Math.hypot(h.x - u.x, h.y - u.y);
        a > 0 && (this.mapScale = Math.max(.8, Math.min(6, this.mapScale * d / a))), a = d, r = !0;
    }
    else
        Math.hypot(l.x - n.x, l.y - n.y) > 7 && (r = !0), r && (this.mapCenter.x -= (l.x - i.x) / this.mapScale, this.mapCenter.z -= (l.y - i.y) / this.mapScale); i = l, this.drawMap(); }), t.addEventListener("pointerup", c => { const l = o(c); if (e.delete(c.pointerId), !r) {
        const h = this.hits.find(u => Math.hypot(u.x - l.x, u.y - l.y) < 24);
        h ? this.nav.trackMarker(h.m.id) : this.nav.place(this.mapCenter.x + (l.x - 420) / this.mapScale, this.mapCenter.z + (l.y - 315) / this.mapScale, "Your waypoint", this.mapWorld), this.changed(), this.ui.panel.querySelector("#map-selection").textContent = h ? "Destination set · " + h.m.label : "Waypoint placed · follow the compass", this.drawMap(), this.directory();
    } r = !0; }), t.addEventListener("pointercancel", () => { e.clear(), r = !0; }), t.addEventListener("wheel", c => { c.preventDefault(), this.mapScale = Math.max(.8, Math.min(6, this.mapScale * Math.exp(-c.deltaY * .001))), this.drawMap(); }, { passive: !1 }); }
}
