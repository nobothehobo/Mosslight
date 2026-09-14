/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: C0
 * Friendly recovery name: InteractionController
 * Role: Interaction, pilot and activity UI controller
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class C0 {
    constructor(t) { this.game = t; const e = t; this.navigation = new c0(e.state), this.flight = new d0(e.state), this.activities = new R0(e.state), this.space = new A0(e.world.ship), this.exterior = new n0(e.world.ship), this.navUI = new h0(this.navigation, e.ui, () => e.settings, () => { e.audio.ui(), e.changed(); }, () => e.openPanel("system")), e.ui.navigation = this.navUI, this.haze = document.createElement("div"), this.haze.id = "atmosphere-haze", this.haze.innerHTML = "<span>Passing through the cloud layer</span>", e.ui.root.append(this.haze); const n = document.createElement("span"); n.id = "device-qa-badge", n.textContent = "DEVICE QA · VISUAL CHECK PENDING", e.ui.root.append(n), this.travelHUD = document.createElement("button"), this.travelHUD.id = "travel-status", this.travelHUD.addEventListener("click", () => e.openPanel("system")), e.ui.hud.append(this.travelHUD), this.flightHUD = document.createElement("div"), this.flightHUD.id = "flight-hud", this.flightHUD.innerHTML = '<div class="flight-readout"></div><div class="flight-actions"><button data-flight="chart">Chart course</button><button data-flight="auto">Autopilot</button><button data-flight="brake">Brake / hold</button><button data-flight="stand">Leave seat</button><button data-flight="land">Land</button></div><div class="throttle-actions"><button data-throttle="1">Thrust ＋</button><button data-throttle="-1">Thrust −</button></div><div class="space-target"></div>', e.ui.hud.append(this.flightHUD), this.flightHUD.querySelectorAll("[data-flight]").forEach(r => r.addEventListener("click", () => this.flightAction(r.dataset.flight))), this.flightHUD.querySelectorAll("[data-throttle]").forEach(r => r.addEventListener("click", () => { const a = this.flight.data; a.mode !== "manual" && this.flight.brake(), a.throttle = Ba.clamp(a.throttle + Number(r.dataset.throttle) * .2, 0, 1); })), this.standButton = document.createElement("button"), this.standButton.id = "stand-button", this.standButton.textContent = "Stand up", this.standButton.addEventListener("click", () => { this.sitting = !1, this.standButton.hidden = !0; }), e.ui.hud.append(this.standButton), this.shipButton = document.createElement("button"), this.shipButton.id = "ship-nav-button", this.shipButton.textContent = "⌁ Ship navigation", this.shipButton.addEventListener("click", () => e.openPanel("system")), e.ui.hud.append(this.shipButton); const i = document.createElement("button"); i.id = "perspective-button", i.textContent = "View · V", i.addEventListener("click", () => e.setSettings({ ...e.settings, perspective: e.settings.perspective === "first" ? "third" : "first" })), e.ui.hud.append(i), this.theme = new i0(e.world.ship), this.decor = R(e.world.ship, "box", "#a0b7a0", 0, .16, 2.2, 3.2, .08, 3.2), this.decor.material = this.decor.material.clone(); for (const r of [-1.5, 1.5])
        R(e.world.ship, "box", "#e3cdab", r, .22, 2.2, .08, .025, 3); R(e.world.ship, "cylinder", "#d1b18d", -4, 1.1, -2, .48, .7, .48), this.plant = new Wt, e.world.ship.add(this.plant); for (let r = 0; r < 5; r++)
        R(this.plant, "round", "#91b393", -4 + Math.sin(r) * .28, 1.7 + r * .09, -2 + Math.cos(r) * .3, .12, .4, .12).rotation.z = Math.sin(r) * .6; R(e.world.ship, "box", "#6d877f", 3.8, 1.15, -2, 2, 2.3, 1.1), R(e.world.ship, "cylinder", "#3f5655", 3.65, 2.36, -2, .42, .1, .42), R(e.world.ship, "cylinder", "#bdc9bb", 3.65, 2.6, -2, .32, .38, .32), R(e.world.ship, "round", "#657d76", 3.65, 2.82, -2, .35, .07, .35); }
    game;
    exterior;
    navigation;
    navUI;
    flight;
    space;
    activities;
    sitting = !1;
    haze;
    lastTransit = !1;
    theme;
    travelHUD;
    flightHUD;
    standButton;
    shipButton;
    decor;
    plant;
    ticks = 0;
    fishTime = 0;
    fishing = !1;
    fishReady = !1;
    fishCanvas = null;
    lastArea = "";
    get piloting() { return this.flight.data.piloting; }
    reset() { this.sitting = !1, this.fishing = !1, this.game.render.camera.far = 1e3, this.game.render.camera.updateProjectionMatrix(), this.game.camera.firstPerson = this.game.settings.perspective === "first"; }
    heading() { return this.piloting ? -this.flight.data.yaw : -this.game.camera.yaw; }
    flightAction(t) { const e = this.game; if (this.flight.data.transit) {
        e.ui.notify("Descent / ascent in progress · controls secured");
        return;
    } if (t === "chart") {
        e.openPanel("system");
        return;
    } if (t === "auto" && this.flight.autopilot() && (e.audio.pickup(), e.ui.notify("Autopilot engaged · " + this.flight.target.name), e.changed()), t === "brake" && (this.flight.brake(), e.ui.notify("Holding position"), e.changed()), t === "stand" && (this.flight.stand(), e.player.teleport(0, -2.7, "ship"), e.camera.yaw = 0, e.camera.pitch = 0, e.render.camera.far = 1e3, e.render.camera.updateProjectionMatrix(), e.camera.update(1, e.player.position, "ship", e.settings.sensitivity, !0), e.closePanel(), e.changed()), t === "land") {
        if (!this.flight.beginLanding()) {
            e.ui.notify("Approach your selected planet first, or engage autopilot.");
            return;
        }
        e.render.camera.far = 1e3, e.render.camera.updateProjectionMatrix(), e.closePanel(), e.ui.notify("Beginning descent · " + this.flight.target.landing), e.audio.pickup(), e.changed();
    } }
    openSystem() { const t = this.game, e = this.flight.data; t.freeze(), t.ui.shell("Aster system", "SHIP NAVIGATION", `<canvas id="system-map" width="840" height="340" aria-label="System chart with Mosslight, Orren, and your ship"></canvas><div class="planet-cards">${Object.values(rn).map(n => `<article><div class="eyebrow">${n.subtitle}</div><h3>${n.name}</h3><p>${n.description}</p><p>Landing zone · ${n.landing}</p><button data-course="${n.id}" ${t.state.data.navigation.unlockedWorlds.includes(n.id) ? "" : "disabled"}>${e.destination === n.id ? "Course selected" : "Set course"}</button><button data-planet-map="${n.id}" ${e.visited.includes(n.id) ? "" : "disabled"}>Region map</button></article>`).join("")}</div><div class="button-row">${e.mode === "landed" ? `<button id="launch" class="primary" ${t.player.zone !== "ship" || !t.state.data.flags.repaired || e.transit ? "disabled" : ""}>Take off</button>` : `<button id="autopilot" class="primary">Engage autopilot</button><button id="pilot">Take pilot seat</button><button id="land" ${this.flight.canLand() ? "" : "disabled"}>Land at ${this.flight.target?.landing ?? "destination"}</button>`}</div><p class="fine-print">${e.mode === "landed" && !t.state.data.flags.repaired ? "Finish Sela’s signal quest and fit the navigation couplings to unlock travel." : t.player.zone !== "ship" ? "Board your ship to take off." : "W / S change throttle. Mouse or touch-drag steers. M opens this chart; E leaves the pilot seat. Autopilot lets you leave the seat; use Brake to hold position. Flight uses compressed distances."}</p>`, "system"), this.drawSystem(), t.ui.panel.querySelectorAll("[data-course]").forEach(n => n.addEventListener("click", () => { this.flight.setCourse(n.dataset.course), t.changed(), this.openSystem(); })), t.ui.panel.querySelectorAll("[data-planet-map]").forEach(n => n.addEventListener("click", () => this.navUI.map(n.dataset.planetMap))), t.ui.panel.querySelector("#launch")?.addEventListener("click", () => { this.flight.beginTakeoff() && (t.camera.pitch = 0, t.closePanel(), t.audio.pickup(), t.ui.notify("Engines warming · climbing through the atmosphere"), t.changed()); }), t.ui.panel.querySelector("#autopilot")?.addEventListener("click", () => { this.flightAction("auto"), t.closePanel(); }), t.ui.panel.querySelector("#pilot")?.addEventListener("click", () => { e.piloting = !0, t.closePanel(), t.changed(); }), t.ui.panel.querySelector("#land")?.addEventListener("click", () => this.flightAction("land")); }
    drawSystem() { const t = this.game.ui.panel.querySelector("#system-map")?.getContext("2d"); if (!t)
        return; t.fillStyle = "#132738", t.fillRect(0, 0, 840, 340), t.strokeStyle = "#36505b", t.lineWidth = 1; for (const a of [190, 335])
        t.beginPath(), t.ellipse(420, 175, a, a * .42, -.13, 0, Math.PI * 2), t.stroke(); const e = t.createRadialGradient(420, 175, 2, 420, 175, 45); e.addColorStop(0, "#fff0c8"), e.addColorStop(1, "#d9a46c00"), t.fillStyle = e, t.fillRect(375, 130, 90, 90), t.fillStyle = "#f3d2a1", t.beginPath(), t.arc(420, 175, 17, 0, Math.PI * 2), t.fill(), t.font = "18px system-ui", t.textAlign = "center", t.fillText("ASTER", 420, 223); for (const [a, o, c, l] of [["mosslight", 249, 142, 26], ["orren", 728, 136, 20]]) {
        const h = rn[a], u = t.createRadialGradient(o - 8, c - 8, 0, o, c, l);
        u.addColorStop(0, h.color), u.addColorStop(1, "#38525b"), t.fillStyle = u, t.beginPath(), t.arc(o, c, l, 0, Math.PI * 2), t.fill(), t.fillStyle = "#dce6d5", t.fillText(h.name, o, c + l + 27), this.flight.data.destination === a && (t.strokeStyle = "#f0c896", t.beginPath(), t.arc(o, c, l + 8, 0, Math.PI * 2), t.stroke());
    } const n = this.flight.data; let i = n.planet === "mosslight" ? 249 : 728, r = 106; if (n.mode !== "landed") {
        const a = rn.mosslight.position, o = rn.orren.position, c = Ba.clamp((n.position[0] - a[0]) / (o[0] - a[0]), 0, 1);
        i = 249 + 479 * c, r = 94 + Math.sin(c * Math.PI) * 40;
    } t.fillStyle = "#a9e5dc", t.font = "25px system-ui", t.fillText("⌁", i, r), t.font = "14px system-ui", t.fillText("YOUR SHIP", i, r - 19), t.fillStyle = "#91a9a5", t.fillText("✧ Unresolved echo · beyond the chart", 185, 296); }
    handle(t) { const e = this.game; switch (t.kind) {
        case "enter_store": return e.travel("store", 0, 5.5), !0;
        case "enter_cafe": return e.travel("cafe", 0, 5.5), !0;
        case "leave_business": return e.travel("outside", t.data === "store" ? 15 : -1, t.data === "store" ? -9 : 13.6), !0;
        case "cafe_tea": return e.freeze(), e.ui.info("A cup kept warm for you", "NERI’S TABLE", "<p>“You’re welcome to sit as long as you like,” Neri says. “No need to earn a quiet moment.”</p>", [{ label: "Share a cup of tea", action: () => { e.player.stamina = 100, e.closePanel(), this.sitting = !0, e.audio.ui(), e.state.data.flags.sharedTea = !0, e.changed(); } }]), !0;
        case "radio": return e.freeze(), e.ui.info("A little music for the journey", "CABIN RADIO", "<p>A soft melody fills the cabin. Someone has written beside the dial: “Leave a light on for the way home.”</p>"), e.audio.pickup(), !0;
        case "counter": return e.freeze(), e.ui.shop(), !0;
        case "pilot": return this.flight.data.piloting = !0, e.closePanel(), e.ui.notify("Pilot seat · open Ship navigation to start engines"), !0;
        case "outside": return this.flight.data.mode !== "landed" ? (e.ui.notify("The airlock stays closed in space. Land first."), !0) : (e.travel(this.flight.data.planet === "orren" ? "orren" : "outside", -17.1, 34), !0);
        case "fish": return this.openFishing(), !0;
        case "cook": return this.cookMenu(), !0;
        case "decorate": return this.decorate(), !0;
        case "garden": {
            const n = this.activities.garden();
            return e.ui.notify(n === "planted" ? "Lanterncaps planted · check after three world hours." : n === "growing" ? "The windowsill garden is still growing." : n === "full" ? "Make space for two lanterncaps." : "Harvested two homegrown lanterncaps."), e.changed(), !0;
        }
        case "locker": return e.state.data.flags.locker ? (this.storage(), !0) : !1;
        case "sit": return this.sitting = !0, e.ui.notify("Stay a little. Look around, or stand when you’re ready."), !0;
        case "rest": return this.flight.data.mode !== "landed" ? (this.sitting = !0, e.ui.notify("Resting while the ship travels. Your course continues."), !0) : !1;
        case "seed": return e.freeze(), e.ui.info("A garden listening to the stars", "ORREN · CONSERVATORY 02", "<p>Someone planted this cinderbloom beneath the receiver. Its petals open and close in the same six-beat rhythm you heard on Mosslight.</p><p>A seed sits in a small paper envelope. On it: “For the next gardener.”</p>", e.state.data.flags.orrenSeed ? [] : [{ label: "Take the cinderbloom seed", primary: !0, action: () => { if (!e.state.pickup("orren_seed", "seed")) {
                    e.ui.notify("Make one slot available first.");
                    return;
                } e.state.data.flags.orrenSeed = !0, e.closePanel(), e.changed(); } }]), !0;
        case "orren_log": return e.freeze(), e.ui.info("The patient work of growing", "ORREN · FIELD NOTE", "<p>“We built a receiver, then another. Nothing answered until we planted something beneath them.”</p><p>“If Mosslight is listening, tell them the garden survived. Tell them we left the path lights on.”</p>"), !0;
    } return !1; }
    cookMenu() { const t = this.game; t.freeze(), t.ui.info("A little warmth for the journey", "SHIP GALLEY", `<p>Food restores stamina. Recipes use supplies from your pack.</p>${Xa.map(e => `<p><b>${e.name}</b> · ${e.ingredients.map(n => `${n.count} ${ee[n.id].name} (${t.state.count(n.id)} available)`).join(" + ")}</p>`).join("")}`, Xa.map(e => ({ label: "Cook " + e.name, action: () => { this.activities.cook(e.id) ? (t.audio.pickup(), t.changed(), t.ui.notify("Cooked · " + e.name)) : t.ui.notify("You need the ingredients and room in your pack."), this.cookMenu(); } }))); }
    decorate() { const t = this.game; t.freeze(), t.ui.info("Make it feel like yours", "CABIN DETAILS", "<p>Choose a coordinated wall, trim, floor and upholstery palette. Your choice stays with the ship between worlds.</p>", ["fern", "sunset", "ocean"].map(e => ({ label: e[0].toUpperCase() + e.slice(1), action: () => { t.state.data.activities.decor = e, t.closePanel(), t.changed(); } }))); }
    storage() { const t = this.game; t.freeze(); const e = t.state.data.inventory.filter(i => ee[i.id].category !== "Quest"), n = t.state.data.activities.storage; t.ui.shell("A place for your supplies", "SHIP STORAGE · 12 STACKS", `<div class="storage-grid"><div><h3>Field pack</h3>${e.map(i => `<button data-store="${i.id}">${ee[i.id].name} ×${i.count} · Store one</button>`).join("")}</div><div><h3>Ship locker</h3>${n.length ? n.map(i => `<button data-take="${i.id}">${ee[i.id].name} ×${i.count} · Take one</button>`).join("") : "<p>Your supplies can travel here.</p>"}</div></div>`, "storage"), t.ui.panel.querySelectorAll("[data-store]").forEach(i => i.addEventListener("click", () => { this.activities.store(i.dataset.store) || t.ui.notify("The locker is full."), t.changed(), this.storage(); })), t.ui.panel.querySelectorAll("[data-take]").forEach(i => i.addEventListener("click", () => { this.activities.take(i.dataset.take) || t.ui.notify("Your pack is full."), t.changed(), this.storage(); })); }
    openFishing() { const t = this.game; t.freeze(), this.fishing = !0, this.fishReady = !1, this.fishTime = 0, t.ui.shell("A moment at Glasswater", "CAST, WAIT FOR A RIPPLE, REEL", '<canvas id="fishing-water" width="620" height="230" aria-label="Fishing float and ripples"></canvas><p id="fish-status">Your float settles. Wait for a bite…</p><button id="reel-fish" class="primary wide">Wait for a bite</button>', "fishing"), this.fishCanvas = t.ui.panel.querySelector("canvas"), t.ui.panel.querySelector("#reel-fish").addEventListener("click", () => { if (!this.fishing) {
        this.openFishing();
        return;
    } if (!this.fishReady) {
        t.ui.notify("Wait until the float dips.");
        return;
    } this.activities.fish() ? (t.audio.pickup(), t.changed(), t.ui.panel.querySelector("#fish-status").textContent = "A glassfin! Cook it with a lanterncap in your galley.") : t.ui.panel.querySelector("#fish-status").textContent = "Make room in your pack before casting again.", this.fishing = !1, t.ui.panel.querySelector("#reel-fish").textContent = "Cast again"; }); }
    update(t) { const e = this.game, n = this.flight.data, i = n.transit; this.haze.style.opacity = i ? String(Math.max(0, i.kind === "takeoff" ? (i.elapsed - 13) / 4 : 1 - i.elapsed / 5)) : "0", this.haze.querySelector("span").textContent = i?.kind === "landing" ? "Descending toward " + this.flight.target?.landing : "Climbing beyond the clouds", this.lastTransit && !i && (e.ui.notify(n.mode === "landed" ? "Touchdown · welcome to " + rn[n.planet].name : "Clear of the atmosphere · set your course"), e.changed()), this.lastTransit = !!i; const r = e.running, a = ["inventory", "journal", "map", "system", "storage", "info"], o = r && (!e.paused || a.includes(e.ui.currentPanel)); if (e.input.pop("PERSPECTIVE") && r && e.setSettings({ ...e.settings, perspective: e.settings.perspective === "first" ? "third" : "first" }), o && (n.mode !== "landed" || n.transit)) {
        const c = this.piloting && !e.paused ? { x: e.input.look.x * e.settings.sensitivity, y: e.input.look.y * e.settings.sensitivity } : { x: 0, y: 0 }, l = this.piloting && !e.paused ? e.input.movement().y : 0;
        this.flight.update(t, c, l) && (e.audio.pickup(), e.ui.notify("Approaching " + this.flight.target.name + " · choose Land"), e.changed()), this.piloting && (e.input.look.x = e.input.look.y = 0);
    } if (this.piloting && n.mode === "landed" && (e.input.look.x = e.input.look.y = 0), r && this.piloting ? (e.world.outside.visible = e.world.ship.visible = e.world.orren.visible = e.world.store.visible = e.world.cafeRoom.visible = e.world.cave.visible = !1, this.space.pilot(e.render.camera, this.flight), e.world.ship.visible = !0, e.player.avatar.root.visible = !1) : r && (e.world.setZone(e.player.zone), e.player.avatar.root.visible = e.settings.perspective === "third", this.sitting && !e.paused && (e.render.camera.position.y -= .6, Math.hypot(e.input.movement().x, e.input.movement().y) > .1 && (this.sitting = !1))), this.standButton.hidden = !r || !this.sitting || e.paused, this.shipButton.hidden = !r || e.player.zone !== "ship" || this.piloting || e.paused, this.travelHUD.hidden = !r || n.mode === "landed" || this.piloting || e.paused, this.flightHUD.hidden = !r || !this.piloting || e.paused, e.ui.root.querySelector("#perspective-button").hidden = !r || this.piloting || e.paused, r && n.mode === "landed" ? (this.flightHUD.querySelector(".flight-readout").textContent = n.transit ? "ASCENT · " + Math.round(n.transit.elapsed / 18 * 100) + "%" : "LANDED · " + rn[n.planet].landing, this.flightHUD.querySelector(".space-target").hidden = !0) : this.flightHUD.querySelector(".space-target").hidden = !!n.transit, r) {
        e.state.data.player = e.player.snapshot();
        const c = !e.paused;
        if (this.navUI.update(t, this.heading(), e.render.camera, c), n.mode !== "landed") {
            this.travelHUD.textContent = `⌁ ${n.mode === "autopilot" ? "Cruising to" : n.mode === "approach" ? "Arrived near" : "Holding near"} ${this.flight.target?.name ?? "open space"} · ${n.mode === "approach" ? "Ready to land" : this.flight.eta + " s"}`, this.flightHUD.querySelector(".flight-readout").textContent = `${n.mode.toUpperCase()} · ${this.flight.target?.name ?? "NO COURSE"} · ${Math.round(this.flight.distance)} km · ${Math.round(n.speed)} km/s · ${Math.round(n.throttle * 100)}% thrust${n.mode === "autopilot" ? " · ETA " + this.flight.eta + " s" : ""}`, this.flightHUD.querySelector("[data-flight=land]").disabled = !this.flight.canLand();
            const l = this.flightHUD.querySelector(".space-target"), h = this.flight.target;
            if (h) {
                const u = new T(...h.position).project(this.exterior.camera), d = h.position[0] - n.position[0], f = h.position[2] - n.position[2], g = Math.atan2(Math.sin(Math.atan2(d, -f) + n.yaw), Math.cos(Math.atan2(d, -f) + n.yaw)), v = u.z < 1 && Math.abs(u.x) < .85 && Math.abs(u.y) < .8 && Math.abs(g) < Math.PI / 2;
                l.style.left = (v ? (u.x * .5 + .5) * 100 : g > 0 ? 94 : 6) + "%", l.style.top = (v ? (-u.y * .5 + .5) * 100 : 50) + "%", l.textContent = (v ? "◇ " : g > 0 ? "› " : "‹ ") + h.name;
            }
        }
    } if (this.theme.apply(e.state.data.activities.decor), this.space.updateWindow(t, this.flight), this.decor.material.color.set(e.state.data.activities.decor === "sunset" ? "#c7917c" : e.state.data.activities.decor === "ocean" ? "#8bafbd" : "#9db59d"), this.plant.visible = e.state.data.activities.gardenPlanted !== null, this.ticks += t, r && this.ticks > .5) {
        this.ticks = 0;
        const c = this.navigation.discover();
        c.length && (e.ui.notify("Discovered · " + c[0]), e.audio.ui(), e.changed()), this.navigation.arrive() && (e.ui.notify("Destination reached"), e.audio.pickup(), e.changed()), e.state.data.flags.repaired && !e.state.data.navigation.unlockedWorlds.includes("orren") && (e.state.data.navigation.unlockedWorlds.push("orren"), e.changed()), e.ui.currentPanel === "system" && this.drawSystem();
    } if (r && e.ui.currentPanel === "fishing" && this.fishing) {
        this.fishTime += t;
        const c = 2.8 + e.state.data.activities.fishCaught % 3 * .45;
        this.fishReady = this.fishTime >= c && this.fishTime < c + 3.5;
        const l = e.ui.panel.querySelector("#fish-status"), h = e.ui.panel.querySelector("#reel-fish");
        this.fishReady && (l.textContent = "The float dips! Reel in now.", h.textContent = "Reel in!"), this.fishTime >= c + 3.5 && (this.fishing = !1, l.textContent = "The glassfin slipped away. There’s always another cast.", h.textContent = "Cast again");
        const u = this.fishCanvas?.getContext("2d");
        if (u) {
            u.fillStyle = "#396b76", u.fillRect(0, 0, 620, 230);
            for (let d = 0; d < 6; d++)
                u.strokeStyle = "#a8cec566", u.beginPath(), u.ellipse(310, 130, 30 + (this.fishTime * 25 + d * 32) % 170, 8 + (this.fishTime * 8 + d * 11) % 56, 0, 0, Math.PI * 2), u.stroke();
            u.fillStyle = this.fishReady ? "#f4cf8c" : "#d0e3d2", u.beginPath(), u.arc(310, 105 + Math.sin(this.fishTime * 3) * (this.fishReady ? 14 : 2), 6, 0, Math.PI * 2), u.fill();
        }
    } }
}
