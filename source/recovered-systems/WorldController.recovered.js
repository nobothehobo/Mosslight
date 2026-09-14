/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: z0
 * Friendly recovery name: WorldController
 * Role: Terrain, nature, harbor, landmarks and pickups
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class z0 {
    constructor(t, e) { this.scene = t, this.state = e, t.add(this.outside, this.ship, this.cave, this.orren, this.store, this.cafeRoom), this.makeTerrain(), this.makeNature(), this.makeHarbor(), this.makeLandmarks(), this.makePickups(), F0(this.ship), O0(this.cave), this.ship.visible = !1, this.cave.visible = !1, x0(this.outside), kl(this.store, !1), kl(this.cafeRoom, !0), k0(this), this.orren.visible = !1, this.store.visible = !1, this.cafeRoom.visible = !1, this.addInteraction("cafe_tea", "Sit for a welcoming cup of tea", -3, 0, 3.5, "cafe", "cafe_tea", 2.5, 6), this.addInteraction("ship_radio", "Listen to the cabin radio", -3.8, 1, 3.5, "ship", "radio", 2, 3), this.addInteraction("ship_hatch", "Enter your ship", -18.2, 0, 34, "outside", "ship", 5, 5), this.addInteraction("ship_exit", "Step outside", 0, 0, 7.4, "ship", "outside", 3, 4), this.addInteraction("ship_terminal", "Read ship status", -3.8, 1, -4.2, "ship", "terminal", 3, 3), this.addInteraction("ship_locker", "Open storage locker", 3.6, 0, 4.4, "ship", "locker", 3, 3), this.addInteraction("ship_bunk", "Rest until morning", -3.6, 0, 1.4, "ship", "rest", 2.7, 3), this.addInteraction("ship_workbench", "Repair navigation", 3.7, 0, 0, "ship", "repair", 2.5, 3), this.addInteraction("cave_entrance", "Enter the Lantern Tunnel", 130, Ot(130, -119), -119, "outside", "cave", 5, 4), this.addInteraction("cave_exit", "Return to daylight", 0, 0, 13.5, "cave", "outside_cave", 3, 4), this.addInteraction("survey_archive", "Listen to the old recording", 0, 1, -11, "cave", "archive", 3.2, 4), this.addInteraction("overlook", "Take in the view", 134, Ot(134, 77), 77, "outside", "overlook", 7, 1), this.addInteraction("store_door", "Enter Oren’s Provisions", 15, Ot(15, -11), -11, "outside", "enter_store", 2.5, 8), this.addInteraction("cafe_door", "Enter the Warm Kettle", -1, Ot(-1, 11), 11, "outside", "enter_cafe", 2.1, 8); for (const n of ["store", "cafe"])
        this.addInteraction(n + "_exit", "Step into the harbor", 0, 0, 6.7, n, "leave_business", 2.5, 5, n), this.addInteraction(n + "_counter", n === "store" ? "Browse provisions" : "Browse the café menu", 0, 1, -2.4, n, "counter", 3, 5); this.addInteraction("fish_jetty", "Fish at Glasswater Jetty", 47, Ot(47, -7), -7, "outside", "fish", 4, 4), this.addInteraction("ship_cook", "Use the galley", 3.5, 1, -2, "ship", "cook", 2.4, 5), this.addInteraction("ship_pilot", "Take the pilot seat", 0, 1, -4.4, "ship", "pilot", 2.4, 7), this.addInteraction("ship_decor", "Make yourself at home", -3.8, 1, 3.5, "ship", "decorate", 2, 4), this.addInteraction("ship_garden", "Tend the windowsill garden", -4, 1, -2, "ship", "garden", 2, 4), this.addInteraction("harbor_bench", "Sit and watch the harbor", -8, 0, -2, "outside", "sit", 2, 2); for (const n of [-3, 3])
        this.colliders.push({ x: n, z: 2, radius: .85, height: .8, zone: "cafe" }); for (const n of [-8.2, 8.2])
        this.colliders.push({ x: n, z: -1, radius: 1.4, halfX: 1.4, halfZ: 15.5, height: 8, zone: "cave" }); this.colliders.push({ x: 0, z: -17, radius: 2, halfX: 9, halfZ: 1.7, height: 8, zone: "cave" }), this.colliders.push({ x: 0, z: -6.8, radius: 3.4, halfX: 3.4, halfZ: .6, height: 1.9, zone: "ship" }, { x: 0, z: -12, radius: 2, halfX: 2, halfZ: .85, height: 1.3, zone: "cave" }), this.colliders.push({ x: -4.65, z: 1.4, radius: 1.2, height: 1.6, zone: "ship" }, { x: 4.75, z: 4.5, radius: 1, height: 3.1, zone: "ship" }, { x: 4.6, z: .15, radius: 1.15, height: 1.5, zone: "ship" }); for (const n of ["store", "cafe"]) {
        this.colliders.push({ x: 0, z: -4.4, radius: 4.15, halfX: 4.15, halfZ: .9, height: 1.02, zone: n });
        for (const i of [-5.9, 5.9])
            for (const r of [-2, 0, 2])
                this.colliders.push({ x: i, z: r, radius: .65, height: 3.7, zone: n });
    } this.addInteraction("harbor_notice", "Read the harbor noticeboard", 4, 0, 4, "outside", "notice", 3, 2); }
    scene;
    state;
    hulls = [];
    orren = new Wt;
    store = new Wt;
    cafeRoom = new Wt;
    outside = new Wt;
    ship = new Wt;
    cave = new Wt;
    colliders = [];
    interactions = [];
    pickups = new Map;
    trees;
    grass;
    water;
    beacon = new Wt;
    beaconOrb;
    lamps = [];
    treeWind = { value: 0 };
    grassCount = 0;
    zone = "outside";
    addInteraction(t, e, n, i, r, a, o, c = 3, l = 1, h) { const u = { id: t, label: e, x: n, y: i, z: r, zone: a, kind: o, radius: c, priority: l, data: h }; return this.interactions.push(u), u; }
    makeTerrain() { const t = new dn(620, 620, 130, 130); t.rotateX(-Math.PI / 2); const e = t.attributes.position, n = new Float32Array(e.count * 3), i = Nn(357), r = new Pt; for (let c = 0; c < e.count; c++) {
        const l = e.getX(c), h = e.getZ(c), u = Ot(l, h);
        e.setY(c, u);
        const d = qs(l, h), f = l < -30 && h < -35;
        r.set(d < 2.5 ? "#b9b08a" : u > 12 ? "#7f9984" : f ? "#688e70" : "#9baf78"), Si(l, h) && r.set("#668e80"), r.multiplyScalar(.94 + i() * .12), n.set([r.r, r.g, r.b], c * 3);
    } t.setAttribute("color", new Se(n, 3)), t.computeVertexNormals(); const a = new qt(t, new ye({ vertexColors: !0, roughness: .96, map: v0() })); a.receiveShadow = !0, this.outside.add(a); const o = new en({ transparent: !0, depthWrite: !1, side: Ge, uniforms: { time: { value: 0 }, light: { value: 1 } }, vertexShader: "varying vec2 vUv; varying vec3 vWorld; uniform float time; void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*.6+time*.9)*.045+cos(p.y*.5+time)*.035;vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}", fragmentShader: "varying vec2 vUv;varying vec3 vWorld;uniform float time;uniform float light;void main(){float w=sin(vWorld.x*1.1+vWorld.z*.65+time*.6)*sin(vWorld.z*1.45-time*.9);float r=smoothstep(.76,.96,w);float edge=smoothstep(.38,.5,length(vUv-.5));vec3 col=mix(vec3(.20,.46,.49),vec3(.55,.76,.69),.35+.15*sin(vWorld.z*.18+time*.35));col+=r*.19+edge*.13;gl_FragColor=vec4(col*(.3+.7*light),.78);}" }); this.water = new qt(new ar(1, 72), o), this.water.rotation.x = -Math.PI / 2, this.water.position.set(76, -2, -12), this.water.scale.set(35, 25, 1), this.outside.add(this.water); }
    makeNature() {
        const t = Nn(8841), e = new Me, n = [], i = [], r = new Wt;
        for (let h = 0; h < 730; h++) {
            const u = (t() - .5) * 540, d = (t() - .5) * 510;
            if (Math.hypot(u, d) < 47 || Math.hypot(u + 25, d - 34) < 28 || Si(u, d) || qs(u, d) < 5 || Math.hypot(u - 130, d + 119) < 12 || Math.hypot(u + 106, d + 137) < 11)
                continue;
            const f = .8 + t() * .9, g = 6 + t() * 6, v = Ot(u, d);
            i.push({ x: u, y: v, z: d, s: f, h: g }), this.colliders.push({ x: u, z: d, radius: f * .43, zone: "outside", height: g });
            for (let m = 0; m < 3; m++)
                n.push({ x: u + (m - 1) * f * 1.1, y: v + g - m * f * .8, z: d + (m === 1 ? -.5 : .5) * f, s: f * (m === 1 ? 3.05 : 2.3), h: f * (m === 1 ? 3 : 2.4) });
        }
        const a = new Fr(new fs(.36, .58, 1, 7), new ye({ color: "#675d4b", roughness: 1 }), i.length);
        i.forEach((h, u) => { e.position.set(h.x, h.y + h.h / 2, h.z), e.scale.set(h.s, h.h, h.s), e.rotation.set(0, h.x, 0), e.updateMatrix(), a.setMatrixAt(u, e.matrix); }), a.castShadow = !0, a.receiveShadow = !0, this.outside.add(a), this.trees = new Fr(new lr(1, 2), new ye({ roughness: .85 }), n.length);
        const o = new Pt;
        n.forEach((h, u) => { e.position.set(h.x, h.y, h.z), e.scale.set(h.s, h.h, h.s * .85), e.rotation.set(h.x * .05, h.z * .1, .1), e.updateMatrix(), this.trees.setMatrixAt(u, e.matrix), o.set(u % 11 === 0 ? "#d0b278" : u % 3 === 0 ? "#719d85" : u % 3 === 1 ? "#83ab8b" : "#527e71"), this.trees.setColorAt(u, o); }), this.trees.material.onBeforeCompile = h => {
            h.uniforms.harborWind = this.treeWind, h.vertexShader = `uniform float harborWind;
` + h.vertexShader, h.vertexShader = h.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.x += sin(harborWind*.65 + instanceMatrix[3].x*.08 + instanceMatrix[3].z*.04)*.035;
#endif`);
        }, this.trees.castShadow = !0, this.trees.receiveShadow = !0, this.outside.add(this.trees);
        const c = new or(.18, .65, 3);
        c.translate(0, .325, 0), this.grass = new Fr(c, new ye({ color: "#7d9e69", roughness: 1 }), 9500);
        let l = 0;
        for (let h = 0; h < 16e3 && l < 9500; h++) {
            const u = (t() - .5) * 420, d = (t() - .5) * 420;
            qs(u, d) < 3 || Si(u, d) || Math.hypot(u, d) < 35 || Math.hypot(u + 25, d - 34) < 15 || (e.position.set(u, Ot(u, d), d), e.rotation.set(0, t() * Math.PI, 0), e.scale.setScalar(.6 + t() * 1.2), e.updateMatrix(), this.grass.setMatrixAt(l, e.matrix), o.set(h % 8 === 0 ? "#d3c49a" : h % 5 === 0 ? "#bdd1a4" : "#779c71"), this.grass.setColorAt(l, o), l++);
        }
        this.grassCount = l, this.grass.count = l, this.grass.receiveShadow = !0, this.outside.add(this.grass);
        for (let h = 0; h < 140; h++) {
            const u = (t() - .5) * 510, d = (t() - .5) * 490;
            if (qs(u, d) < 5 || Math.hypot(u, d) < 44 || Si(u, d) || Math.hypot(u + 25, d - 34) < 15)
                continue;
            const f = 1 + t() * 3, g = Ot(u, d);
            R(r, "ball", h % 3 ? "#84958b" : "#a4ada0", u, g + f * .3, d, f, f * .67, f * .85).rotation.y = t() * 6.2, this.colliders.push({ x: u, z: d, radius: f * .73, zone: "outside", height: f * 1.1 });
        }
        for (let h = 0; h < 35; h++) {
            const u = h / 35 * Math.PI * 2, d = 320 + t() * 80;
            R(r, "cone", h % 2 ? "#8aa9a6" : "#829d9e", Math.sin(u) * d, -3, Math.cos(u) * d, 38 + t() * 25, 45 + t() * 78, 38 + t() * 25);
        }
        for (let h = 0; h < 30; h++) {
            const u = t() * Math.PI * 2, d = 76 + Math.cos(u) * 36, f = -12 + Math.sin(u) * 27;
            R(r, "cylinder", "#a4b087", d, Ot(d, f) + .75, f, .045, 1.5, .045), R(r, "round", "#b1a073", d, Ot(d, f) + 1.55, f, .14, .32, .14);
        }
        this.outside.add(wi(r));
    }
    makeHarbor() { const t = new Wt, e = [[-19, -17, "SELA · REPAIRS", "#628d88", 9, 8], [15, -18, "OREN · PROVISIONS", "#b28b62", 10, 8], [-1, 4, "THE WARM KETTLE", "#b28479", 10, 8], [20, -38, "FIELD STATION", "#7894a1", 9, 7], [-25, -38, "HOMESTEAD 01", "#7e9982", 8, 7], [34, -39, "HOMESTEAD 02", "#b99977", 8, 7], [36, -9, "TRAIL SHELTER", "#739287", 7, 7]]; for (const [r, a, o, c, l, h] of e) {
        const u = Ot(r, a);
        T0(t, r, u, a, o, c, l, h), this.colliders.push({ x: r, z: a, radius: Math.max(l, h) * .53, halfX: l / 2, halfZ: h / 2, zone: "outside", height: 6.6 });
    } const n = new Wt; Wc(n), this.outside.add(n), this.hulls.push(n), this.colliders.push({ x: -25, z: 34, radius: 5.6, halfX: 5.4, halfZ: 7.9, zone: "outside", height: 6.2 }); for (const [r, a] of [[-9, 1], [8, 1], [-9, 22], [11, 21], [30, 8], [-32, -19], [21, -30], [-14, 30]])
        Mn(t, r, Ot(r, a), a); an(t, -8, 0, -2), an(t, 8, 0, -2), an(t, 6, 0, 17), an(t, -7, 0, 17); for (let r = 0; r < 12; r++) {
        const a = r < 6 ? -30 + r % 3 * 1.8 : 23 + r % 3 * 1.7, o = r < 6 ? -12 - Math.floor(r / 3) * 2 : -18 - Math.floor((r - 6) / 3) * 2;
        hn(t, a, Ot(a, o), o, r % 2 ? "#ae9c7e" : "#6e9189", r % 3 === 0 ? .7 : 1);
    } for (const [r, a] of [[-8, 15], [7, 15], [-25, -10], [21, -11]]) {
        R(t, "box", "#b6a484", r, .5, a, 1.7, 1, 1.5), R(t, "ball", "#72956e", r, 1.35, a, .9, .9, .75);
        for (let o = 0; o < 3; o++)
            R(t, "ball", "#d0b781", r + (o - 1) * .35, 2.05, a, .2, .22, .2);
    } R(t, "box", "#496762", 4, 1.65, 3, 3.3, 2.3, .26), R(t, "box", "#c3b48d", 4, 1.65, 3.15, 2.95, 1.95, .08); for (const r of [2.8, 5.2])
        R(t, "box", "#557369", r, 1.1, 3, .16, 2.2, .16); Ue(t, "HARBOR NOTES", 4, 2.95, 3.27, 3.2), R(t, "cylinder", "#7b9687", 0, .25, -4, 2, .5, 2), R(t, "cylinder", "#719b95", 0, .55, -4, 1.7, .28, 1.7), R(t, "ball", "#b7cabb", 0, 1.4, -4, .75, .7, .75), R(t, "cone", "#dec391", 0, 2.4, -4, .32, 1.8, .32); const i = []; t.traverse(r => { r instanceof qt && r.material instanceof bn && i.push(r); }), t.updateMatrixWorld(!0); for (const r of i)
        r.applyMatrix4(r.parent.matrixWorld), r.removeFromParent(), this.outside.add(r); this.outside.add(wi(t)); }
    makeLandmarks() { const t = new Wt; for (let h = 0; h < 3; h++) {
        const u = go[h];
        for (let d = 1; d < u.length; d++) {
            const [f, g] = u[d];
            if (d === u.length - 1)
                continue;
            const v = Ot(f + 3, g);
            Mn(t, f + 3, v, g, h === 0 ? "#e7bc79" : h === 1 ? "#9bcdd3" : "#d2d4b3", 1.65);
        }
    } const e = -106, n = -137, i = Ot(e, n); R(t, "cylinder", "#5e7576", e, i + .24, n, 4.1, .48, 4.1), R(t, "box", "#819e94", e, i + 1.15, n, 2.1, 1.6, 2.1), R(t, "cylinder", "#4e6a72", e, i + 3.3, n, .29, 4.3, .29), R(t, "cylinder", "#b6c9b6", e, i + 5.5, n, 2.8, .19, 2.8).rotation.z = .2, R(t, "cylinder", "#4a6770", e, i + 5.75, n, 2.3, .09, 2.3).rotation.z = .2, this.beacon.position.set(e, i, n), this.beaconOrb = R(this.beacon, "round", "#97dacc", 0, 4.2, 0, .65, .65, .65, 1.9); for (let h = 0; h < 3; h++) {
        const u = new qt(new ps(1.1 + h * .38, .045, 6, 36), new bn({ color: "#a6e8dc", transparent: !0, opacity: .7 }));
        u.rotation.x = Math.PI / 2, u.position.y = 3.3 + h * .75, this.beacon.add(u);
    } this.outside.add(this.beacon), this.addInteraction("quest_beacon_001", "Examine the survey beacon", e, i + 1, n, "outside", "beacon", 5, 5), hn(t, e + 5, i, n + 2, "#7d9183"), an(t, e - 5, i, n + 4), Ue(t, "ARRAY 04 · SILENT SINCE 2181", e, i + 1.5, n + 4.3, 5.6), R(t, "cylinder", "#66847e", -87, Ot(-87, -118) + 2, -118, .15, 8, .15).rotation.z = 1.06; const r = 130, a = -122, o = Ot(r, a); for (const h of [-1, 1])
        R(t, "ball", "#a7b0a3", r + h * 5.1, o + 3, a, 3.5, 5, 4.7), R(t, "box", "#687c7c", r + h * 3, o + 2.1, a + 2, .45, 4.5, 1.2); R(t, "ball", "#8b9c91", r, o + 6.4, a, 7.8, 3, 5.3), R(t, "box", "#1f3b43", r, o + 2.25, a + 1.5, 5.7, 4.6, .25), R(t, "box", "#789189", r, o + 4.45, a + 2, 6.3, .4, 1.1), Mn(t, r + 3.4, o, a + 5, "#beddd0", 2), Ue(t, "LANTERN TUNNEL", r, o + 5, a + 2.8, 4.7); const c = Ot(134, 77); an(t, 134, c, 77), Mn(t, 131, c, 77, "#e0d5b4", 2.1); for (let h = 0; h < 3; h++)
        R(t, "ball", "#a3aea1", 139, c + .35 + h * .48, 77, 1 - h * .2, .45, 1 - h * .2); const l = []; t.traverse(h => { h instanceof qt && h.material instanceof bn && l.push(h); }); for (const h of l)
        h.removeFromParent(), this.outside.add(h); this.outside.add(wi(t)); }
    makePickups() { const t = Nn(145), e = []; for (let n = 0; n < 28; n++) {
        const i = n < 18;
        e.push({ id: "pickup_glowcap_" + n.toString().padStart(3, "0"), item: "glowcap", x: i ? -42 - n * 3.4 + (t() - .5) * 15 : 59 + t() * 40, z: i ? -37 - n * 4.3 + (t() - .5) * 13 : -47 - t() * 12, zone: "outside" });
    } for (let n = 0; n < 12; n++)
        e.push({ id: "pickup_mineral_" + n, item: "mineral", x: 99 + t() * 32, z: -71 - t() * 39, zone: "outside" }); for (let n = 0; n < 7; n++)
        e.push({ id: "pickup_scrap_" + n, item: "scrap", x: -93 + t() * 16, z: -119 - t() * 24, zone: "outside" }); e.push({ id: "pickup_battery_001", item: "battery", x: -40, z: -36, zone: "outside" }, { id: "pickup_cave_quartz_001", item: "mineral", x: 5, z: -7, zone: "cave" }, { id: "pickup_cave_quartz_002", item: "mineral", x: -5, z: 3, zone: "cave" }); for (const n of e) {
        const i = Ot(n.x, n.z, n.zone), r = new Wt;
        r.position.set(n.x, i, n.z), n.item === "glowcap" ? (Li(r, 0, 0, 0, 1.15), Li(r, .55, 0, .3, .65)) : n.item === "mineral" ? (R(r, "cone", "#b2c9db", 0, .55, 0, .35, 1.1, .35, .2), R(r, "cone", "#8fbec8", .4, .3, .1, .24, .65, .24, .2).rotation.z = -.25) : hn(r, 0, 0, 0, n.item === "battery" ? "#9fc2b6" : "#9caa9e", .5), ms(r), (n.zone === "outside" ? this.outside : this.cave).add(r), this.pickups.set(n.id, r);
        const a = this.addInteraction(n.id, n.item === "glowcap" ? "Gather lanterncaps" : n.item === "mineral" ? "Collect cloud quartz" : n.item === "battery" ? "Take field cell" : "Collect salvaged alloy", n.x, i, n.z, n.zone, "pickup", 2.8, 2, n.item);
        a.enabled = () => !this.state.data.collected.includes(n.id);
    } }
    setZone(t) { this.zone = t, this.outside.visible = t === "outside", this.ship.visible = t === "ship", this.cave.visible = t === "cave", this.orren.visible = t === "orren", this.store.visible = t === "store", this.cafeRoom.visible = t === "cafe"; }
    setQuality(t) { this.grass.count = Math.floor(this.grassCount * (t === "low" ? .25 : t === "medium" ? .62 : 1)), this.trees.castShadow = t !== "low"; }
    sync() { for (const [t, e] of this.pickups)
        e.visible = !this.state.data.collected.includes(t); }
    update(t, e, n) { this.treeWind.value = t, this.water.material.uniforms.time.value = t, this.water.material.uniforms.light.value = e, this.beacon.rotation.y += n * .28, this.beaconOrb.scale.setScalar(.65 + Math.sin(t * 2.4) * .055), this.beaconOrb.material = this.beaconOrb.material, this.beacon.visible = this.zone === "outside"; }
}
