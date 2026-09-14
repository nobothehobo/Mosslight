/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: j0
 * Friendly recovery name: GameApplication
 * Role: Top-level application/game controller
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class j0 {
    expansion;
    state = new I0;
    saves;
    settings = Hl();
    input;
    render;
    world;
    player;
    camera;
    npcs;
    creatures;
    ui;
    audio;
    running = !1;
    paused = !0;
    loadedSave = null;
    currentInteraction = null;
    fps = 60;
    frameTime = 16.7;
    elapsed = 0;
    last = 0;
    autosave = 0;
    newPending = !1;
    settingsFromTitle = !1;
    unavailable = !1;
    lastSavePromise = Promise.resolve();
    location = "Landing meadow";
    progressTimer = 0;
    sessionStarted = !1;
    debugTimer = 0;
    constructor() { const t = document.getElementById("world"); this.render = new N0(t), this.input = new U0(t), this.world = new z0(this.render.scene, this.state), this.player = new H0(this.input, this.world.colliders), this.player.load(this.state.data.player), this.render.scene.add(this.player.avatar.root), this.camera = new G0(this.render.camera, this.input, this.world.colliders), this.npcs = new V0(this.world.outside, this.state, this.world.interactions), this.creatures = new q0(this.world.outside, this.state, this.world.interactions), this.audio = new $0(this.settings), this.ui = new Y0(this.state, { newGame: () => this.newGame(), continueGame: () => this.continueGame(), close: () => this.closePanel(), pause: () => this.pause(), save: () => { this.saveNow(!0); }, title: () => { this.returnTitle(); }, settings: () => this.openSettings(), setSettings: e => this.setSettings(e), interact: () => this.interact(), dialogue: e => this.chooseDialogue(e), buy: e => this.buy(e), sell: e => this.sell(e), use: e => this.use(e), open: e => this.openPanel(e), exportSave: () => this.exportSave(), importSave: e => { this.importSave(e); } }, this.settings), this.expansion = new C0(this), this.state.onNotify = e => this.ui.notify(e), this.input.bindTouch(this.ui.touch), this.input.onMode = () => this.updateControls(), this.player.onStep = () => this.audio.step(), this.player.onJump = () => this.audio.tone(180, .12, "triangle", .1), window.addEventListener("pagehide", () => { this.running && this.saveNow(); }), document.addEventListener("visibilitychange", () => { document.hidden && this.running && (this.saveNow(), this.paused || this.pause()), this.last = performance.now(); }), t.addEventListener("webglcontextlost", e => { e.preventDefault(), this.pause(), this.saveNow(), this.ui.notify("Graphics paused. Your journey is being saved. Reload to resume."); }), t.addEventListener("webglcontextrestored", () => location.reload()), this.installDebug(), this.installWebMCP(); }
    async init() { try {
        this.saves = new L0;
        const [t, e] = await Promise.all([this.saves.load(), this.saves.settings()]);
        this.loadedSave = t, e && (this.settings = { ...Hl(), ...e });
    }
    catch (t) {
        this.unavailable = !0, this.ui.notify(t.message + " Use Export save as a backup.");
    } this.setSettings(this.settings, !1), this.ui.showTitle(!!this.loadedSave), document.getElementById("boot")?.remove(), this.last = performance.now(), requestAnimationFrame(t => this.loop(t)); }
    start(t) { this.state.data = structuredClone(t), this.state.touch(), this.expansion.reset(), this.world.sync(), this.player.load(this.state.data.player), this.world.setZone(this.player.zone), this.npcs.reload(), this.camera.yaw = this.state.data.player.facing - Math.PI, this.camera.pitch = 0, this.camera.update(1, this.player.position, this.player.zone, this.settings.sensitivity, !0), this.running = !0, this.paused = !1, this.newPending = !1, this.sessionStarted = !0, this.autosave = 0, this.ui.showGame(), this.input.enabled = !0, this.updateControls(), this.audio.start(), this.player.avatar.root.visible = this.settings.perspective === "third", this.ui.notify(this.state.data.quests.signal === 0 ? "Welcome to Mosslight Harbor. Find Sela at the workshop." : "Welcome back. Your journey continues."), this.saveNow(); }
    newGame() { this.loadedSave || this.sessionStarted ? (this.newPending = !0, this.ui.confirmNew()) : this.start(ir()); }
    continueGame() { this.newPending ? (this.newPending = !1, this.start(ir())) : this.loadedSave && this.start(this.loadedSave); }
    freeze() { this.paused = !0, this.input.enabled = !1, this.input.release(), this.currentInteraction = null, this.ui.prompt.hidden = !0; }
    closePanel() { this.newPending = !1, this.npcs.pausedId = null, this.ui.close(), this.running && (this.paused = !1, this.input.enabled = !0, this.audio.start()), this.updateControls(), this.audio.ui(); }
    pause() { this.running && (this.freeze(), this.ui.pause(), this.audio.ui()); }
    openPanel(t) { this.running && (this.freeze(), this.snapshot(), t === "inventory" ? this.ui.inventory() : t === "journal" ? this.ui.journal() : t === "map" ? this.state.data.voyage.mode !== "landed" ? this.expansion.openSystem() : this.ui.map() : t === "system" ? this.expansion.openSystem() : this.ui.pause(), this.audio.ui()); }
    openSettings() { this.settingsFromTitle = !this.running, this.freeze(), this.ui.showSettings(this.settings); }
    setSettings(t, e = !0) { const n = t.quality in { low: 1, medium: 1, high: 1 } ? t.quality : "medium"; this.settings = { ...t, quality: n, sensitivity: de(t.sensitivity, .3, 2.5), master: de(t.master, 0, 1), music: de(t.music, 0, 1), effects: de(t.effects, 0, 1) }, this.render.quality !== n && this.render.setQuality(n), this.world.setQuality(n), this.audio.apply(this.settings), this.input.pointerMode = this.settings.pointerMode, this.camera.firstPerson = this.settings.perspective === "first", this.camera.headBob = this.settings.headBob, this.render.camera.fov = de(this.settings.fov, 55, 95), this.render.camera.updateProjectionMatrix(), this.ui.debug.hidden = !t.debug, this.updateControls(), e && !this.unavailable && this.saves.saveSettings(this.settings).catch(() => this.ui.notify("Could not save these settings.")); }
    updateControls() { this.ui.controls(this.settings.touch === "on" || this.settings.touch === "auto" && this.input.mode === "touch"); }
    snapshot() { this.state.data.player = this.player.snapshot(), this.state.data.timestamp = Date.now(); }
    async saveNow(t = !1) { if (!this.running)
        return; if (this.unavailable) {
        t && this.ui.notify("Browser saving unavailable. Export a save from the pause menu.");
        return;
    } this.snapshot(); const e = structuredClone(this.state.data); this.lastSavePromise = this.lastSavePromise.catch(() => { }).then(async () => { try {
        await this.saves.save(e), this.loadedSave = e, t && this.ui.notify("Journey saved.");
    }
    catch {
        this.ui.notify("Your browser could not save. Export your journey from the pause menu.");
    } }), await this.lastSavePromise; }
    changed() { this.state.updateQuests(), this.world.sync(), this.saveNow(); }
    async returnTitle() { await this.saveNow(!0), this.running = !1, this.paused = !0, this.input.enabled = !1, this.input.release(), this.ui.showTitle(!!this.loadedSave), this.world.setZone("outside"), this.player.avatar.root.visible = !1; }
    travel(t, e, n) { this.ui.transition(t === "ship" ? "The Little Elsewhere" : t === "orren" ? "Cinderbloom Anchorage" : t === "cave" ? "The Lantern Tunnel" : t === "store" ? "Oren’s Provisions" : t === "cafe" ? "The Warm Kettle" : "Mosslight Harbor"), this.player.teleport(e, n, t), this.world.setZone(t), this.expansion.sitting = !1, this.camera.pitch = this.settings.perspective === "first" ? 0 : .31, this.camera.yaw = 0, this.camera.update(1, this.player.position, t, this.settings.sensitivity, !0), this.currentInteraction = null, this.closePanel(), this.changed(), this.ui.notify(t === "ship" ? "The Little Elsewhere · Welcome home." : t === "cave" ? "The Lantern Tunnel · Suit lamp on." : "Back beneath the open sky."); }
    interact() { if (!this.running || this.paused)
        return; const t = Wl(this.world.interactions, this.player.position, this.camera.yaw + Math.PI, this.player.zone); if (t && (this.audio.ui(), !this.expansion.handle(t)))
        switch (t.kind) {
            case "npc": {
                this.npcs.pausedId = t.id;
                const e = X0(t.data, this.state);
                if (e) {
                    this.freeze(), this.ui.dialogue(th(t.id, e, this.state));
                    const n = this.state.data.npcs[t.id];
                    n && (n.relationship = Math.min(100, n.relationship + 1)), this.changed();
                }
                break;
            }
            case "pickup":
                this.state.pickup(t.id, t.data) ? (this.audio.pickup(), this.changed()) : this.ui.notify("Your field pack is full. Sell supplies or enjoy a snack.");
                break;
            case "observe": {
                if (this.creatures.creatures.find(n => n.id === t.id)?.mood === "Fleeing") {
                    this.ui.notify("Give the mossling a little room to settle.");
                    break;
                }
                this.state.observe(t.id) && (this.audio.pickup(), this.changed());
                break;
            }
            case "beacon":
                this.beacon();
                break;
            case "archive":
                this.archive();
                break;
            case "ship":
                this.travel("ship", 0, 5.8);
                break;
            case "outside":
                this.travel("outside", -17.1, 34);
                break;
            case "cave":
                this.travel("cave", 0, 11.5);
                break;
            case "outside_cave":
                this.travel("outside", 130, -115);
                break;
            case "terminal":
                this.terminal();
                break;
            case "locker":
                this.locker();
                break;
            case "repair":
                this.repair();
                break;
            case "rest":
                this.freeze(), this.ui.info("A bunk of your own", "THE LITTLE ELSEWHERE", "<p>The hull ticks as it cools. Through the window, the harbor lamps look like distant stars.</p><p>Rest until 07:00. Your journey will be saved.</p>", [{ label: "Rest until morning", primary: !0, action: () => { this.state.data.time = 7, this.state.data.day++, this.player.stamina = 100, this.player.foodTimer = 0, this.closePanel(), this.changed(), this.ui.notify("A new morning at Mosslight Harbor."); } }]);
                break;
            case "overlook":
                this.freeze(), this.state.data.flags.overlook = !0, this.ui.info("The world keeps turning", "FARLOOK RIDGE", "<p>From here, your ship is a small bright shape beside the harbor. The forest moves in the wind. Above the far hills, the pale rings of Aster hang in the sky.</p><p>For the first time since landing, being grounded doesn’t feel quite so unfortunate.</p>"), this.changed();
                break;
            case "notice":
                this.freeze(), this.ui.info("Notes from the harbor", "COMMUNITY NOTICEBOARD", "<p><b>SELA:</b> New arrivals, come by the workshop. If your ship has a strange hum, please describe it. Do not sing it.</p><p><b>IVO:</b> Paying for mossling observations and lanterncap samples. No capture required.</p><p><b>TAMSIN:</b> The old tunnel is open. Blue trail markers lead east.</p><p><b>NERI:</b> Lunch at twelve. There will be cake.</p>");
                break;
        } }
    beacon() { if (this.freeze(), this.state.data.flags.beacon) {
        this.ui.info("Six beats. A pause.", "SURVEY ARRAY 04", "<p>The array turns slowly. The lanterncaps answer with a soft wash of blue. Your suit has recorded the echo.</p><p>Sela will want to see the module.</p>");
        return;
    } this.ui.info("An answer in the silence", "SURVEY ARRAY 04", "<p>You brush moss from the control face. A light flickers. Six beats. A pause. Six more.</p><p>Your ship’s navigation warning repeats the same pattern. Beneath the receiver, a small echo module is still warm.</p>", [{ label: "Recover the echo module", primary: !0, action: () => { if (!this.state.pickup("beacon_module", "module")) {
                this.ui.notify("Make room in your pack before taking the module.");
                return;
            } this.state.data.flags.beacon = !0, this.state.updateQuests(), this.audio.pickup(), this.closePanel(), this.changed(), this.ui.notify(this.state.data.quests.signal ? "Echo recovered · Return to Sela." : "Echo recovered · Show the mechanic in town."); } }]); }
    archive() { this.freeze(), this.state.data.flags.archive ? this.ui.info("Someone left a light", "THE LANTERN TUNNEL", "<p>The little desk is empty now. The lamp stays on.</p><p>“Leave a light for whoever comes next.” — Elian Wren</p>") : this.ui.info("Leave a light", "ELIAN WREN · SURVEY JOURNAL 01", "<p>“Day 418. I thought I was the first to give this place a name. Today I realized it already had one. I just don’t know how to hear it.”</p><p>“If someone finds this: the pond is beautiful at dusk. The small creatures are friendly. Leave a light for whoever comes next.”</p><p>The recording ends with a kettle beginning to sing.</p>", [{ label: "Take the recording to Tamsin", primary: !0, action: () => { if (!this.state.pickup("archive_wafer", "archive")) {
                this.ui.notify("Make room in your pack first.");
                return;
            } this.state.data.flags.archive = !0, this.state.updateQuests(), this.closePanel(), this.changed(); } }]); }
    chooseDialogue(t) { const e = this.ui.dialogueId; if (!tn[e])
        return; const n = Xc(e, this.state)[t]; if (n) {
        this.audio.ui();
        for (const i of n.actions ?? []) {
            if (i.type === "close") {
                this.closePanel();
                return;
            }
            if (i.type === "shop") {
                this.ui.shop();
                return;
            }
            if (!this.state.act(i)) {
                this.ui.notify(i.type === "completeQuest" ? "You still need the requested items." : "Your pack needs a free slot.");
                return;
            }
        }
        this.changed(), n.next ? this.ui.dialogue(n.next) : this.closePanel();
    } }
    buy(t) { this.state.buy(t) ? (this.audio.pickup(), this.ui.notify("Bought " + ee[t].name), this.changed()) : this.ui.notify("Not enough credits or pack space."), this.ui.shop(); }
    sell(t) { this.state.sell(t) && (this.audio.ui(), this.changed()), this.ui.shop(); }
    use(t) { ee[t]?.category !== "Food" || !this.state.remove(t, 1) || (this.player.stamina = 100, this.player.foodTimer = 90, this.changed(), this.ui.notify("Well fed · Easy running for 90 seconds."), this.ui.inventory()); }
    terminal() { this.freeze(); const t = !!this.state.data.flags.repaired, e = this.state.data.quests.signal === 3; this.ui.info("The Little Elsewhere", "SHIP STATUS", `<div class="terminal-grid"><span>NAVIGATION</span><span>${t ? "STABLE" : e ? "COUPLINGS REQUIRED" : "FAULT"}</span><span>DRIVE</span><span>AVAILABLE</span><span>POWER</span><span>STABLE</span><span>INTERFERENCE</span><span>${e ? "CONTAINED" : "DETECTED"}</span><span>LOCATION</span><span>MOSSLIGHT HARBOR</span></div><p>${t ? "Navigation is quiet. You have somewhere warm to sleep, and people who notice when you return." : "Sela’s workshop is west of the settlement square. She can help you understand the fault."}</p><p class="fine-print">Take the pilot seat to chart a course. Autopilot lets you enjoy your cabin while traveling.</p>`); }
    locker() { if (this.freeze(), this.state.data.flags.locker) {
        this.ui.info("Ship’s locker", "PERSONAL SUPPLIES", "<p>The emergency supplies are in your field pack now. There’s still a folded blanket and an old postcard inside.</p>", [{ label: "Open field pack", action: () => this.ui.inventory() }]);
        return;
    } this.ui.info("A little reserve", "SHIP’S LOCKER", "<p>A field cell and two orchard trailcakes. You were saving these for a rainy day.</p>", [{ label: "Take the supplies", primary: !0, action: () => { if (!this.state.canAdd("battery", 1) || !this.state.canAdd("ration", 2) || this.state.data.inventory.length > 22) {
                this.ui.notify("Make two slots available in your pack first.");
                return;
            } this.state.add("battery", 1), this.state.add("ration", 2), this.state.data.flags.locker = !0, this.closePanel(), this.changed(), this.ui.notify("Emergency supplies packed."); } }]); }
    repair() { if (this.freeze(), this.state.data.flags.repaired) {
        this.ui.info("A steady little heartbeat", "SHIP WORKBENCH", "<p>The new couplings are holding. For once, the diagnostics have nothing to complain about.</p><p>The Little Elsewhere is yours again.</p>");
        return;
    } const t = this.state.data.quests.signal === 3; this.ui.info("One last adjustment", "SHIP WORKBENCH", `<p>${t ? "Sela isolated the strange pulse. Fit two repair couplings to stabilize the navigation circuit." : "The navigation circuit is still receiving interference. Ask Sela in the settlement to diagnose the problem first."}</p><p>Repair fittings: ${this.state.count("parts")} / 2</p>`, t ? [{ label: "Fit two repair couplings", primary: !0, action: () => { if (!this.state.remove("parts", 2)) {
                this.ui.notify("You need two repair fittings. Oren sells them.");
                return;
            } this.state.data.flags.repaired = !0, this.audio.pickup(), this.changed(), this.ui.info("A light to come home to", "NAVIGATION STABLE", "<p>The warning light fades. The ship settles into its familiar, uneven hum.</p><p>There are still questions in the forest. But tonight, you have a working ship, a warm bunk, and a reason to stay.</p><p>Your navigation is stable. Take the pilot seat to visit Orren, or ask Ivo about the garden between stars. Your journey is saved.</p>"); } }] : []); }
    exportSave() { this.snapshot(); const t = document.createElement("a"); t.href = URL.createObjectURL(new Blob([JSON.stringify(this.state.data, null, 2)], { type: "application/json" })), t.download = "Mosslight-Harbor-save.json", t.click(), window.setTimeout(() => URL.revokeObjectURL(t.href), 1500), this.ui.notify("Save exported. Keep it safe or move it to another device."); }
    async importSave(t) { try {
        if (t.size > 1024 * 1024)
            throw new Error("Save file is too large.");
        const e = Vc(JSON.parse(await t.text()));
        this.ui.info("Continue this journey?", "IMPORT SAVE", `<p>Replace the current journey with this save from day ${e.day}?</p>`, [{ label: "Import this journey", primary: !0, action: () => { this.start(e), this.ui.notify("Journey imported."); } }]);
    }
    catch (e) {
        this.ui.notify("Could not import: " + e.message);
    } }
    loop(t) { const e = Math.max(0, (t - this.last) / 1e3), n = Math.min(e, .05); this.last = t, this.elapsed += n, this.frameTime = this.frameTime * .95 + e * 1e3 * .05, this.fps = 1e3 / Math.max(1, this.frameTime), this.input.pop("PAUSE") && (this.running ? this.paused ? this.closePanel() : this.pause() : this.ui.panel.hidden || this.closePanel()); for (const [a, o] of [["INVENTORY", "inventory"], ["JOURNAL", "journal"], ["MAP", "map"]])
        this.input.pop(a) && this.running && (this.ui.currentPanel === o ? this.closePanel() : this.openPanel(o)); if (this.running && !this.paused) {
        this.input.update(n);
        const a = Math.max(1, Math.ceil(n / (1 / 60)));
        if (!this.expansion.piloting && !this.expansion.sitting)
            for (let o = 0; o < a; o++)
                this.player.update(n / a, this.camera.yaw);
        this.settings.perspective === "first" && (this.player.facing = this.camera.yaw + Math.PI), this.state.data.time += n * (24 / 1200), this.state.data.time >= 24 && (this.state.data.time -= 24, this.state.data.day++), this.npcs.update(n, this.player.position, this.state.data.time), this.player.zone === "outside" && this.creatures.update(n, this.player.position, this.state.data.time), this.currentInteraction = Wl(this.world.interactions, this.player.position, this.camera.yaw + Math.PI, this.player.zone), this.input.pop("INTERACT") && (this.expansion.piloting ? this.expansion.flightAction("stand") : this.interact()), this.camera.speed = this.player.speed, this.expansion.piloting || this.camera.update(n, this.player.position, this.player.zone, this.settings.sensitivity), this.autosave += n, this.autosave >= 20 && (this.autosave = 0, this.saveNow()), this.progressTimer += n, this.progressTimer > .6 && (this.progressTimer = 0, this.discover()), this.audio.update(n, this.player.zone, this.state.data.time);
    } if (!this.running) {
        const a = this.elapsed * .019;
        this.render.camera.position.set(48 + Math.sin(a) * 5, 24, 67 + Math.cos(a) * 5), this.render.camera.lookAt(-11, 2, -4), this.player.avatar.root.visible = !1, this.npcs.update(n, new T(1e3, 0, 1e3), 9), this.creatures.update(n, new T(0, 0, 0), 9);
    } const i = this.running ? this.player.zone : "outside", r = this.running ? this.state.data.time : 16.5; this.render.update(r, this.player.position, i), this.world.update(this.elapsed, this.render.daylight, n), this.expansion.update(n), this.running && this.player.zone === "ship" && this.expansion.exterior.render(this), this.render.render(), this.running && (this.ui.updateHUD(this.elapsed, this.state.data.time, this.state.data.day, this.player.stamina, this.player.foodTimer > 0, this.location, this.currentInteraction, this.camera.yaw, this.unavailable ? "Save failed" : this.saves?.status ?? "Not saved yet"), this.expansion.piloting ? (this.currentInteraction = null, this.ui.prompt.hidden = !0, this.ui.touch.hidden = !0) : this.updateControls()), this.debugTimer += n, this.settings.debug && this.debugTimer > .5 && (this.debugTimer = 0, this.updateDebug()), requestAnimationFrame(a => this.loop(a)); }
    discover() { const t = { ship: "The Little Elsewhere", cave: "The Lantern Tunnel", store: "Oren’s Provisions", cafe: "The Warm Kettle", outside: "Open meadow", orren: "The Amber Garden" }; if (this.location = t[this.player.zone], this.player.zone === "outside" || this.player.zone === "orren") {
        let e = 55;
        for (const n of this.expansion.navigation.locations) {
            const i = us(n, this.player.position);
            i < e && (e = i, this.location = n.name);
        }
    } this.expansion.navUI.notifyRegion(this.location); }
    metrics() { const t = this.render.renderer, e = t.getDrawingBufferSize(new ct); return { version: Jr, navigation: structuredClone(this.state.data.navigation), voyage: structuredClone(this.state.data.voyage), player: { ...this.player.snapshot() }, fps: Math.round(this.fps), frameTime: Math.round(this.frameTime * 10) / 10, drawCalls: t.info.render.calls, triangles: t.info.render.triangles, activeNPCs: this.npcs.entities.length, activeCreatures: this.creatures.creatures.filter(n => n.root.visible).length, time: this.state.data.time, day: this.state.data.day, quests: { ...this.state.data.quests }, inventory: structuredClone(this.state.data.inventory), credits: this.state.data.credits, saveStatus: this.saves?.status ?? "Unavailable", graphics: this.settings.quality, renderer: "Three.js WebGL2", resolution: [innerWidth, innerHeight], internalResolution: [e.x, e.y], pixelRatio: t.getPixelRatio(), zone: this.player.zone, interaction: this.currentInteraction?.id ?? null, npcs: this.npcs.entities.map(n => ({ id: n.id, ...n.state })), creatures: this.creatures.creatures.map(n => ({ id: n.id, mood: n.mood, x: n.root.position.x, z: n.root.position.z })) }; }
    updateDebug() {
        const t = this.metrics();
        this.ui.debug.textContent = `MOSSLIGHT HARBOR ${Jr}
${navigator.platform} · ${navigator.userAgent.match(/(Chrome|Safari|Firefox|Edg)\/[\d.]+/g)?.join(" ") ?? "Browser"}
${t.renderer} · ${t.graphics.toUpperCase()}
Viewport ${t.resolution.join(" × ")} · Internal ${t.internalResolution.join(" × ")}
Pixel ratio ${t.pixelRatio.toFixed(2)}
${t.fps} FPS · ${t.frameTime} ms
${t.drawCalls} draws · ${t.triangles.toLocaleString()} triangles
${t.activeNPCs} NPCs · ${t.activeCreatures} mosslings
Day ${t.day} · ${t.time.toFixed(2)} h · ${t.zone}
${t.saveStatus}`;
    }
    installDebug() { const t = this, e = { get state() { return t.metrics(); }, teleport(n, i) { if (!Number.isFinite(n) || !Number.isFinite(i))
            throw new Error("Expected finite coordinates"); t.player.teleport(de(n, -230, 230), de(i, -220, 215)), t.camera.update(1, t.player.position, t.player.zone, t.settings.sensitivity, !0); }, setTime(n) { if (!Number.isFinite(n))
            throw new Error("Expected a finite hour"); t.state.data.time = (n % 24 + 24) % 24; }, giveItem(n, i = 1) { return t.state.add(n, i); }, saveNow() { return t.saveNow(!0); }, toggleWireframe() { t.render.scene.traverse(n => { n instanceof qt && n.material instanceof ye && (n.material.wireframe = !n.material.wireframe); }); }, toggleDebug() { t.setSettings({ ...t.settings, debug: !t.settings.debug }); }, get inventory() { return structuredClone(t.state.data.inventory); } }; window.GAME_DEBUG = e; }
    installWebMCP() { const t = document.modelContext; if (!t)
        return; const e = new AbortController; window.addEventListener("pagehide", () => e.abort(), { once: !0 }); try {
        Promise.resolve(t.registerTool({ name: "read_journey_state", description: "Read the current player, quest, inventory and save status in Mosslight Harbor.", inputSchema: { type: "object", properties: {}, additionalProperties: !1 }, annotations: { readOnlyHint: !0 }, execute(n) { if (!n || typeof n != "object" || Object.keys(n).length)
                throw new Error("Expected an empty object"); return window.GAME_DEBUG.state; } }, { signal: e.signal })).catch(() => { });
    }
    catch { } }
}
