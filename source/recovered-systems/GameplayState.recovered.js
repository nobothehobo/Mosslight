/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: I0
 * Friendly recovery name: GameplayState
 * Role: Inventory, economy, quest and item gameplay state
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class I0 {
    data;
    revision = 0;
    onNotify = () => { };
    constructor(t = ir()) { this.data = t; }
    touch() { this.revision++; }
    count(t) { return this.data.inventory.filter(e => e.id === t).reduce((e, n) => e + n.count, 0); }
    canAdd(t, e) { const n = ee[t]; return !n || !Number.isInteger(e) || e <= 0 ? !1 : this.data.inventory.filter(r => r.id === t).reduce((r, a) => r + n.stackSize - a.count, 0) + (24 - this.data.inventory.length) * n.stackSize >= e; }
    add(t, e) { if (!this.canAdd(t, e))
        return !1; const n = ee[t]; let i = e; for (const r of this.data.inventory)
        if (r.id === t) {
            const a = Math.min(i, n.stackSize - r.count);
            r.count += a, i -= a;
        } for (; i > 0;) {
        const r = Math.min(i, n.stackSize);
        this.data.inventory.push({ id: t, count: r }), i -= r;
    } return this.touch(), !0; }
    remove(t, e) { if (!Number.isInteger(e) || e <= 0 || this.count(t) < e)
        return !1; let n = e; for (const i of this.data.inventory)
        if (i.id === t) {
            const r = Math.min(i.count, n);
            i.count -= r, n -= r;
        } return this.data.inventory = this.data.inventory.filter(i => i.count > 0), this.touch(), !0; }
    matches(t) { let e = !0; return t.quest && (e = (this.data.quests[t.quest] ?? 0) === (t.stage ?? 0)), t.flag && (e = e && !!this.data.flags[t.flag]), t.item && (e = e && this.count(t.item) >= (t.count ?? 1)), t.observed !== void 0 && (e = e && this.data.observed.length >= t.observed), t.not ? !e : e; }
    conditions(t) { return !t || t.every(e => this.matches(e)); }
    buy(t) { const e = ee[t]; return !e || !Kr.stock.includes(t) || this.data.credits < e.value || !this.canAdd(t, 1) ? !1 : (this.data.credits -= e.value, this.add(t, 1), !0); }
    sell(t) { const e = ee[t]; return !e || e.category === "Quest" || this.count(t) < 1 ? !1 : (this.remove(t, 1), this.data.credits += Math.max(1, Math.floor(e.value * Kr.buyback)), this.touch(), !0); }
    startQuest(t) { return !Oe[t] || this.data.quests[t] ? !1 : (this.data.quests[t] = 1, this.updateQuests(), this.touch(), this.onNotify("Journal updated · " + Oe[t].title), !0); }
    updateQuests() { for (const [t, e] of Object.entries(Oe))
        this.data.quests[t] === 1 && this.conditions(e.completion) && (this.data.quests[t] = 2, this.touch(), this.onNotify("Objective complete · Return to " + (t === "signal" ? "Sela" : t === "research" || t === "garden" ? "Ivo" : t === "supper" ? "Neri" : "Tamsin"))); }
    completeQuest(t) { const e = Oe[t]; if (!e || this.data.quests[t] !== 2 || !this.conditions(e.completion))
        return !1; t === "supper" && this.remove("stew", 1), t === "garden" && this.remove("seed", 1), t === "research" && this.remove("glowcap", 3), t === "signal" && this.remove("module", 1), t === "cave" && this.remove("archive", 1), this.data.quests[t] = 3, this.data.credits += e.reward; for (const n of e.rewardItems ?? [])
        this.add(n.id, n.count) || (this.data.credits += ee[n.id].value * n.count); return this.touch(), this.onNotify("Quest complete · +" + e.reward + " credits"), !0; }
    pickup(t, e, n = 1) { return this.data.collected.includes(t) || !this.add(e, n) ? !1 : (this.data.collected.push(t), this.updateQuests(), this.touch(), this.onNotify("Collected " + ee[e].name + (n > 1 ? " ×" + n : "")), !0); }
    observe(t) { return this.data.observed.includes(t) ? !1 : (this.data.observed.push(t), this.touch(), this.updateQuests(), this.onNotify("Field note recorded · Mossling " + this.data.observed.length), !0); }
    act(t) { switch (t.type) {
        case "startQuest": return this.startQuest(t.id);
        case "completeQuest": return this.completeQuest(t.id);
        case "flag": return this.data.flags[t.id] = t.value ?? !0, this.touch(), !0;
        case "give": return this.add(t.id, t.count);
        default: return !1;
    } }
}
