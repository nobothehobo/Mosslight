/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: N0
 * Friendly recovery name: Renderer
 * Role: Renderer and quality settings
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class N0 {
    settlementLights = [];
    renderer;
    scene = new gc;
    camera = new Fe(54, innerWidth / innerHeight, .12, 1e3);
    sun = new Uc("#fff0cd", 3.1);
    hemi = new Ic("#bfd9d7", "#647860", 2);
    ambient = new md("#c2d8d7", .15);
    sky;
    stars;
    planet = new Wt;
    quality = "medium";
    daylight = 1;
    lastLight = -1;
    sunDir = new T;
    constructor(t) { this.renderer = new t0({ canvas: t, antialias: !0, powerPreference: "high-performance", alpha: !1 }), this.renderer.outputColorSpace = De, this.renderer.toneMapping = jl, this.renderer.toneMappingExposure = 1.08, this.renderer.shadowMap.type = Yl, this.scene.add(this.sun, this.sun.target, this.hemi, this.ambient), this.sun.castShadow = !0, this.sun.shadow.camera.left = -42, this.sun.shadow.camera.right = 42, this.sun.shadow.camera.top = 42, this.sun.shadow.camera.bottom = -42, this.sun.shadow.camera.near = 1, this.sun.shadow.camera.far = 190, this.sun.shadow.bias = -4e-4, this.sun.shadow.normalBias = .07, this.scene.fog = new ao("#b7d4cb", 100, 360); const e = new en({ side: Re, depthWrite: !1, uniforms: { top: { value: new Pt("#6dadaf") }, bottom: { value: new Pt("#dce4c0") }, sun: { value: new T(1, 1, 0) }, warm: { value: 0 } }, vertexShader: "varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", fragmentShader: "varying vec3 vDir;uniform vec3 top;uniform vec3 bottom;uniform vec3 sun;uniform float warm;void main(){vec3 d=normalize(vDir);float h=pow(max(0.,d.y),.5);vec3 col=mix(bottom,top,h);float spot=pow(max(0.,dot(d,normalize(sun))),90.);col+=spot*vec3(.6,.42,.21)*warm;gl_FragColor=vec4(col,1.);}" }); this.sky = new qt(new On(800, 24, 12), e), this.scene.add(this.sky); const n = Nn(381), i = new Float32Array(650 * 3); for (let c = 0; c < 650; c++) {
        const l = n() * Math.PI * 2, h = n() * .94 + .05, u = Math.sqrt(1 - h * h);
        i.set([Math.cos(l) * u * 740, h * 740, Math.sin(l) * u * 740], c * 3);
    } const r = new _e; r.setAttribute("position", new Se(i, 3)), this.stars = new lo(r, new rr({ color: "#d6e8e4", size: 1.1, transparent: !0, opacity: 0, depthWrite: !1, fog: !1 })), this.scene.add(this.stars); const a = new qt(new On(39, 32, 20), new bn({ color: "#c6d6be", fog: !1 })); this.planet.add(a); const o = new qt(new cr(49, 62, 64), new bn({ color: "#d8d0af", side: Ge, transparent: !0, opacity: .48, fog: !1 })); o.rotation.x = 1.3, o.rotation.z = .35, this.planet.add(o), this.planet.position.set(165, 170, -480), this.scene.add(this.planet); for (const [c, l] of [[-9, 1], [11, 21], [21, -30]]) {
        const h = new hs("#ffd599", 9, 15, 2);
        h.position.set(c, 2.9, l), this.scene.add(h), this.settlementLights.push(h);
    } window.visualViewport?.addEventListener("resize", () => this.resize()), window.addEventListener("resize", () => this.resize()), this.setQuality("medium"); }
    setQuality(t) { this.quality = t; const e = Xs[t]; this.renderer.shadowMap.enabled = e.shadow > 0, this.sun.shadow.mapSize.setScalar(e.shadow || 512), this.sun.shadow.map?.dispose(), this.sun.shadow.map = null, this.resize(); }
    resize() { const t = Xs[this.quality]; this.renderer.setPixelRatio(Math.min(devicePixelRatio, t.ratio) * t.scale); const e = window.visualViewport?.width ?? innerWidth, n = window.visualViewport?.height ?? innerHeight; document.documentElement.style.setProperty("--game-height", n + "px"), this.renderer.setSize(e, n, !1), this.camera.aspect = e / n, this.camera.updateProjectionMatrix(); }
    update(t, e, n) { const i = (t - 6) / 24 * Math.PI * 2, r = Math.sin(i); this.daylight = de((r + .12) * 2, 0, 1); const a = Math.max(0, 1 - Math.abs(r) / .4) * this.daylight; for (const u of this.settlementLights)
        u.visible = n === "outside", u.intensity = 9 * (1 - this.daylight); const o = n === "outside" || n === "orren"; if (this.sky.visible = o, this.stars.visible = o, this.planet.visible = o, !o) {
        this.sun.intensity = n === "cave" ? .2 : .65, this.hemi.intensity = n === "cave" ? .5 : 1.65, this.hemi.color.set(n === "ship" ? "#d7d8c0" : "#91b4c1"), this.hemi.groundColor.set("#516165"), this.scene.background = new Pt(n === "ship" ? "#18363d" : "#122933"), this.scene.fog.color.copy(this.scene.background), this.scene.fog.near = 12, this.scene.fog.far = n === "ship" ? 45 : 34;
        return;
    } this.scene.background = null, this.sunDir.set(Math.cos(i) * 70, Math.max(r * 110, 18), -50), this.sun.position.copy(e).add(this.sunDir), this.sun.target.position.copy(e), this.sun.intensity = .13 + this.daylight * (2.65 - a * .35), this.sun.color.set("#fff0d5").lerp(new Pt("#efb18c"), a * .75), this.hemi.intensity = .68 + this.daylight * 1.32, this.hemi.color.set("#6889af").lerp(new Pt("#c0dad4"), this.daylight), this.hemi.groundColor.set("#263952").lerp(new Pt("#798665"), this.daylight); const c = new Pt("#132f51").lerp(new Pt("#6cabad"), this.daylight).lerp(new Pt("#7892a8"), a * .3), l = new Pt("#405c79").lerp(new Pt("#d0ddc1"), this.daylight).lerp(new Pt("#dfb698"), a * .75); n === "orren" && (c.lerp(new Pt("#998eb7"), .58), l.lerp(new Pt("#e5c6b1"), .55), this.hemi.groundColor.set("#997f73")), this.sky.material.uniforms.top.value.copy(c), this.sky.material.uniforms.bottom.value.copy(l), this.sky.material.uniforms.sun.value.copy(this.sunDir), this.sky.material.uniforms.warm.value = a; const h = this.scene.fog; h.color.copy(l), h.near = Xs[this.quality].distance * .35, h.far = Xs[this.quality].distance, this.stars.material.opacity = 1 - this.daylight, this.planet.children.forEach(u => { u instanceof qt && u.material.color.set("#d0d7c5").multiplyScalar(.45 + .55 * this.daylight); }); }
    render() { this.renderer.render(this.scene, this.camera); }
}
