/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: U0
 * Friendly recovery name: InputSystem
 * Role: Keyboard, pointer and touch input
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class U0 {
    constructor(t) { this.canvas = t, window.addEventListener("keydown", e => { if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement)
        return; const n = Gl[e.code]; !n || !this.enabled && n !== "PAUSE" || (e.preventDefault(), this.setMode("keyboard"), !this.held.has(n) && !e.repeat && this.pressed.add(n), this.held.add(n)); }), window.addEventListener("keyup", e => { const n = Gl[e.code]; n && this.held.delete(n); }), window.addEventListener("blur", () => this.reset()), document.addEventListener("visibilitychange", () => { document.hidden && this.reset(); }), t.addEventListener("pointerdown", e => { if (this.enabled && (this.setMode(e.pointerType === "touch" ? "touch" : "keyboard"), this.cameraPointer = e.pointerId, this.last = { x: e.clientX, y: e.clientY }, this.rateGesture = e.pointerType !== "touch" && this.useRate(), this.rateGesture && this.rate.begin(e.clientX, e.clientY), t.setPointerCapture(e.pointerId), !this.rateGesture && this.pointerMode !== "drag" && e.pointerType === "mouse" && e.button === 0 && document.pointerLockElement !== t))
        try {
            t.requestPointerLock?.()?.catch(() => { this.cameraPointer !== null && (this.rateGesture = !0, this.rate.begin(this.last.x, this.last.y)); });
        }
        catch { } }), window.addEventListener("pointermove", e => { this.enabled && (document.pointerLockElement === t ? (this.look.x += e.movementX, this.look.y += e.movementY) : this.cameraPointer === e.pointerId && (this.rateGesture ? this.rate.move(e.clientX, e.clientY) : (this.look.x += e.clientX - this.last.x, this.look.y += e.clientY - this.last.y), this.last = { x: e.clientX, y: e.clientY })); }), window.addEventListener("pointerup", e => { this.cameraPointer === e.pointerId && (this.cameraPointer = null, this.rate.cancel(), this.rateGesture = !1); }), window.addEventListener("pointercancel", () => this.reset()), t.addEventListener("lostpointercapture", () => { this.rate.cancel(), this.rateGesture = !1, this.cameraPointer = null; }), t.addEventListener("contextmenu", e => e.preventDefault()), t.addEventListener("wheel", e => { this.enabled && (e.preventDefault(), this.zoom += e.deltaY * .007); }, { passive: !1 }); }
    canvas;
    held = new Set;
    pressed = new Set;
    stick = { x: 0, y: 0 };
    look = { x: 0, y: 0 };
    zoom = 0;
    mode = navigator.maxTouchPoints > 0 ? "touch" : "keyboard";
    enabled = !1;
    sprintToggle = !1;
    hoverLook = !1;
    pointerMode = "auto";
    rate = new D0;
    rateGesture = !1;
    update(t) { if (this.enabled && this.rateGesture) {
        const e = this.rate.step(t);
        this.look.x += e.x, this.look.y += e.y;
    } }
    useRate() { return this.pointerMode === "rate" || this.pointerMode === "auto" && navigator.maxTouchPoints > 0; }
    onMode = () => { };
    cameraPointer = null;
    last = { x: 0, y: 0 };
    setMode(t) { t !== this.mode && (this.mode = t, this.onMode()); }
    down(t) { return this.held.has(t) || t === "SPRINT" && this.sprintToggle; }
    pop(t) { const e = this.pressed.has(t); return this.pressed.delete(t), e; }
    movement() { let t = this.stick.x + (this.down("MOVE_RIGHT") ? 1 : 0) - (this.down("MOVE_LEFT") ? 1 : 0), e = -this.stick.y + (this.down("MOVE_FORWARD") ? 1 : 0) - (this.down("MOVE_BACK") ? 1 : 0); const n = Math.hypot(t, e); return n > 1 && (t /= n, e /= n), { x: t, y: e }; }
    reset() { this.held.clear(), this.pressed.clear(), this.stick = { x: 0, y: 0 }, this.look = { x: 0, y: 0 }, this.zoom = 0, this.cameraPointer = null, this.rate.cancel(), this.rateGesture = !1, this.sprintToggle = !1, document.querySelector("[data-action=SPRINT]")?.classList.remove("active"); }
    release() { this.reset(), document.pointerLockElement && document.exitPointerLock(); }
    bindTouch(t) { const e = t.querySelector("#stick"), n = e.querySelector("span"); let i = null, r = 0, a = 0; const o = l => { if (l.pointerId !== i)
        return; const h = l.clientX - r, u = l.clientY - a, d = Math.max(1, Math.hypot(h, u) / 42); this.stick = { x: de(h / d / 42, -1, 1), y: de(u / d / 42, -1, 1) }, n.style.transform = `translate(${this.stick.x * 36}px,${this.stick.y * 36}px)`; }; e.addEventListener("pointerdown", l => { if (!this.enabled)
        return; l.preventDefault(), l.stopPropagation(), i = l.pointerId; const h = e.getBoundingClientRect(); r = h.left + h.width / 2, a = h.top + h.height / 2, e.setPointerCapture(i), this.setMode("touch"), o(l); }), e.addEventListener("pointermove", o); const c = () => { i = null, this.stick = { x: 0, y: 0 }, n.style.transform = "translate(0,0)"; }; e.addEventListener("pointerup", c), e.addEventListener("pointercancel", c), e.addEventListener("lostpointercapture", c), t.querySelectorAll("[data-action]").forEach(l => { const h = l.dataset.action; l.addEventListener("pointerdown", d => { this.enabled && (d.preventDefault(), d.stopPropagation(), l.setPointerCapture(d.pointerId), this.setMode("touch"), h === "SPRINT" ? (this.sprintToggle = !this.sprintToggle, l.classList.toggle("active", this.sprintToggle)) : (this.held.add(h), this.pressed.add(h))); }); const u = () => this.held.delete(h); l.addEventListener("pointerup", u), l.addEventListener("pointercancel", u); }); }
}
