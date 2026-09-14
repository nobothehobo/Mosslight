/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: R0
 * Friendly recovery name: ActivitiesSystem
 * Role: Cooking, fishing, gardening, storage/take actions
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class R0 {
    constructor(t) { this.state = t; }
    state;
    cook(t) { const e = Xa.find(i => i.id === t); if (!e || e.ingredients.some(i => this.state.count(i.id) < i.count))
        return !1; const n = structuredClone(this.state.data.inventory); for (const i of e.ingredients)
        this.state.remove(i.id, i.count); return this.state.add(e.output, 1) ? (this.state.data.activities.cooked++, this.state.updateQuests(), this.state.touch(), !0) : (this.state.data.inventory = n, !1); }
    fish() { const t = this.state.data, e = t.day * 24 + t.time; return e - t.activities.lastCatch < .04 || !this.state.add("fish", 1) ? !1 : (t.activities.lastCatch = e, t.activities.fishCaught++, this.state.touch(), !0); }
    garden() { const t = this.state.data, e = t.day * 24 + t.time; return t.activities.gardenPlanted === null ? (t.activities.gardenPlanted = e, this.state.touch(), "planted") : e - t.activities.gardenPlanted < 3 ? "growing" : this.state.add("glowcap", 2) ? (t.activities.gardenPlanted = null, this.state.updateQuests(), this.state.touch(), "harvested") : "full"; }
    store(t) { if (!ee[t] || ee[t].category === "Quest" || !this.state.count(t))
        return !1; const e = this.state.data.activities.storage, n = e.find(i => i.id === t && i.count < ee[t].stackSize); return !n && e.length >= 12 ? !1 : (this.state.remove(t, 1), n ? n.count++ : e.push({ id: t, count: 1 }), this.state.touch(), !0); }
    take(t) { const e = this.state.data.activities.storage, n = e.find(i => i.id === t); return !n || !this.state.add(t, 1) ? !1 : (n.count--, this.state.data.activities.storage = e.filter(i => i.count > 0), this.state.updateQuests(), this.state.touch(), !0); }
}
