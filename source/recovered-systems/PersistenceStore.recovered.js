/**
 * RECOVERED FROM MOSSLIGHT V3 PRODUCTION BUNDLE.
 * Original minified symbol: L0
 * Friendly recovery name: PersistenceStore
 * Role: IndexedDB save/settings persistence
 *
 * This slice is reference source during reconstruction. It still depends on
 * minified symbols from the legacy runtime and is not yet a standalone module.
 */
class L0 {
    db;
    status = "Not saved yet";
    lastSaved = 0;
    constructor() { this.db = new Promise((t, e) => { const n = indexedDB.open("mosslight-harbor", 1); n.onupgradeneeded = () => { n.result.createObjectStore("saves"), n.result.createObjectStore("settings"); }, n.onsuccess = () => t(n.result), n.onerror = () => e(new Error("Browser storage is unavailable. Enable website storage to keep saves.")); }); }
    async read(t, e) { const n = await this.db; return new Promise((i, r) => { const a = n.transaction(t, "readonly").objectStore(t).get(e); a.onsuccess = () => i(a.result), a.onerror = () => r(a.error); }); }
    async write(t, e, n) { const i = await this.db; return new Promise((r, a) => { const o = i.transaction(t, "readwrite"); o.objectStore(t).put(n, e), o.oncomplete = () => r(), o.onerror = () => a(o.error), o.onabort = () => a(o.error); }); }
    async load() { const t = await this.read("saves", "main"); return t ? Vc(t) : null; }
    async save(t) { this.status = "Saving…"; const e = structuredClone(t); e.timestamp = Date.now(); try {
        await this.write("saves", "main", e), this.lastSaved = e.timestamp, this.status = "Saved";
    }
    catch (n) {
        throw this.status = "Save failed", n;
    } }
    async settings() { return this.read("settings", "preferences"); }
    async saveSettings(t) { await this.write("settings", "preferences", t); }
}
