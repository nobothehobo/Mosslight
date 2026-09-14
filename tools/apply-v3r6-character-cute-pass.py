from pathlib import Path

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root / "source/legacy/mosslight-v3-runtime.js",
    root / "working/assets/mosslight-v3-readable.js",
]

new_class = r'''class qc {
    lids = [];
    blinkClock = 0;
    root = new Wt;
    body = new Wt;
    head = new Wt;
    arms = [];
    legs = [];
    mouth = null;
    brows = [];
    phase = 0;
    facing = 0;
    constructor(t) {
        this.blinkClock = t.height * 2, this.root.add(this.body), this.root.scale.setScalar(t.height);
        R(this.body, "round", t.color, 0, 1.28, 0, .76, .72, .5);
        R(this.body, "round", "#455a63", 0, .94, 0, .66, .26, .44);
        R(this.body, "round", "#d8e4d5", 0, 1.57, .255, .25, .12, .045);
        R(this.body, "round", "#b7d5cc", -.12, 1.49, .272, .075, .075, .04);
        R(this.body, "round", "#e9dbb8", .13, 1.49, .272, .075, .075, .04);

        this.head.position.set(0, 1.84, 0), this.body.add(this.head);
        R(this.head, "round", t.skin, 0, .15, 0, .48, .5, .405);

        for (const e of [-.16, .16]) {
            R(this.head, "round", "#f7ead8", e, .225, .365, .11, .12, .04);
            R(this.head, "round", "#263c3a", e, .215, .4, .052, .074, .022);
            R(this.head, "round", "#ffffff", e - .014, .248, .423, .014, .018, .009);
        }

        R(this.head, "round", t.skin, 0, .085, .404, .07, .065, .075);
        this.mouth = R(this.head, "round", "#8f554f", 0, -.055, .392, .085, .02, .024);

        for (const e of [-1, 1]) {
            R(this.head, "round", t.skin, e * .455, .13, 0, .1, .15, .095);
            R(this.head, "round", "#d99a8b", e * .285, .015, .35, .085, .052, .025);
            this.brows.push(R(this.head, "round", t.hair, e * .16, .365, .345, .14, .028, .025));
        }

        R(this.head, "round", t.hair, 0, .49, -.035, .47, .285, .405);
        R(this.head, "round", t.hair, -.22, .36, .255, .3, .18, .22).rotation.z = -.16;
        R(this.head, "round", t.hair, .19, .385, .25, .24, .12, .18).rotation.z = .13;

        if (t.style === "bun") {
            R(this.head, "ball", t.hair, 0, .58, -.38, .28, .29, .27);
            R(this.head, "round", t.hair, 0, .48, -.28, .32, .18, .2);
        }
        if (t.style === "puff")
            for (const e of [-.27, 0, .27])
                R(this.head, "ball", t.hair, e, .61 - Math.abs(e) * .1, -.08, .26, .27, .27);
        if (t.style === "bob")
            for (const e of [-.34, .34])
                R(this.head, "round", t.hair, e, .11, -.02, .2, .55, .34);
        if (t.style === "short") {
            R(this.head, "round", t.hair, -.34, .32, -.08, .16, .25, .26);
            R(this.head, "round", t.hair, .34, .31, -.08, .15, .22, .24);
        }
        if (t.style === "cap") {
            R(this.head, "round", "#aebfa4", 0, .52, -.025, .49, .24, .42);
            R(this.head, "round", "#617b70", 0, .485, .385, .46, .07, .22);
        }

        if (t.accessory === "goggles")
            for (const e of [-.17, .17]) {
                R(this.head, "cylinder", "#9fbebb", e, .53, .3, .12, .065, .12).rotation.x = Math.PI / 2;
                R(this.head, "round", "#4c6666", e, .53, .34, .075, .075, .025);
            }

        if (t.accessory === "apron") {
            R(this.body, "round", "#eee0b8", 0, 1.2, .285, .56, .62, .055);
            R(this.body, "round", "#c6b17f", 0, .98, .323, .27, .19, .035);
        }

        if (t.accessory === "pack") {
            R(this.body, "round", "#caab78", 0, 1.3, -.39, .62, .65, .28);
            R(this.body, "round", "#778d83", 0, 1.3, -.545, .46, .12, .08);
            for (const e of [-1, 1])
                R(this.body, "round", "#806f57", e * .31, 1.36, -.18, .075, .58, .07);
        }

        for (const e of [-1, 1]) {
            const n = new Wt;
            n.position.set(e * .49, 1.5, 0), this.body.add(n);
            R(n, "round", t.color, 0, -.2, 0, .29, .46, .33);
            R(n, "round", t.skin, 0, -.49, .02, .175, .185, .17);
            this.arms.push(n);

            const i = new Wt;
            i.position.set(e * .2, .9, 0), this.body.add(i);
            R(i, "round", "#465b68", 0, -.28, 0, .31, .54, .33);
            R(i, "round", "#343f45", 0, -.66, .105, .39, .24, .52);
            this.legs.push(i);
        }

        for (const e of [-.16, .16]) {
            const n = new Wt;
            n.position.set(e, .225, .392), this.head.add(n);
            R(n, "round", t.skin, 0, 0, 0, .112, .122, .028), n.visible = !1, this.lids.push(n);
        }
        ms(this.body);
    }
    animate(t, e, n, i, r = 0) {
        this.blinkClock += t;
        const a = this.blinkClock % 4.7 > 4.54;
        this.lids.forEach(c => c.visible = a), this.facing = Bc(this.facing, i, 13, t), this.root.rotation.y = this.facing, this.phase += t * (e > .1 ? e * 2.45 : 1.65);
        const o = Math.min(.72, e * .095);
        for (let c = 0; c < 2; c++) {
            const l = Math.sin(this.phase + c * Math.PI);
            this.legs[c].rotation.x = Mi(this.legs[c].rotation.x, n ? l * o : -.24, 15, t), this.arms[c].rotation.x = Mi(this.arms[c].rotation.x, n ? -l * o * .82 : .48, 15, t), this.arms[c].rotation.z = Mi(this.arms[c].rotation.z, 0, 9, t), this.arms[c].rotation.y = Mi(this.arms[c].rotation.y, 0, 9, t);
        }
        this.body.position.y = n ? e > .1 ? Math.abs(Math.sin(this.phase)) * .052 : Math.sin(this.phase) * .018 : 0, this.body.rotation.z = Mi(this.body.rotation.z, n ? Math.sin(this.phase) * o * .018 : 0, 5, t), this.head.rotation.y = Mi(this.head.rotation.y, Math.max(-.58, Math.min(.58, r)), 4, t), this.head.rotation.z = Mi(this.head.rotation.z, 0, 7, t), this.head.rotation.x = Mi(this.head.rotation.x, 0, 7, t), this.mouth && (this.mouth.scale.x = Mi(this.mouth.scale.x, 1, 10, t), this.mouth.scale.y = Mi(this.mouth.scale.y, 1, 10, t), this.mouth.position.y = Mi(this.mouth.position.y, -.055, 10, t)), this.brows.forEach(c => { c.position.y = Mi(c.position.y, .365, 10, t), c.rotation.z = Mi(c.rotation.z, 0, 10, t); });
    }
    socialPose(t, e, n = 1) {
        const i = de(n, 0, 1), r = this.arms[1], a = Math.sin(this.phase * 5.2);
        if (this.mouth) this.mouth.scale.x = Mi(this.mouth.scale.x, 1 + .18 * i, 12, t), this.mouth.scale.y = Mi(this.mouth.scale.y, .72, 12, t), this.mouth.position.y = Mi(this.mouth.position.y, -.038, 12, t);
        this.brows.forEach((o, c) => { o.position.y = Mi(o.position.y, .39, 12, t), o.rotation.z = Mi(o.rotation.z, (c === 0 ? -.06 : .06) * i, 12, t); });
        if (e === "wave") {
            r.rotation.z = Mi(r.rotation.z, 2.28, 10, t), r.rotation.x = Mi(r.rotation.x, -.06 + a * .12, 12, t), r.rotation.y = Mi(r.rotation.y, .04, 10, t), this.head.rotation.z = Mi(this.head.rotation.z, -.045, 8, t);
        } else if (e === "nod") {
            this.head.rotation.x = Mi(this.head.rotation.x, .035 + Math.sin(this.phase * 2.5) * .045 * i, 8, t);
        } else if (e === "grin") {
            this.head.rotation.z = Mi(this.head.rotation.z, .03, 8, t);
        }
    }
}'''

for path in runtime_paths:
    s = path.read_text()
    a = s.index("class qc {")
    b = s.index("class H0", a)
    if a < 0 or b < 0:
        raise SystemExit(f"Character class boundary not found in {path}")
    s = s[:a] + new_class + "\n" + s[b:]
    path.write_text(s)

# Cache-bust the playable dev build.
idx = root / "working/index.html"
s = idx.read_text().replace("v=3.53", "v=3.60")
if "v=3.60" not in s:
    s = s.replace("mosslight-v3-readable.js", "mosslight-v3-readable.js?v=3.60")
    s = s.replace("mosslight-v3.css", "mosslight-v3.css?v=3.60")
idx.write_text(s)

ch = root / "CHANGELOG.md"
cs = ch.read_text()
entry = """
## V3R6 development — Character Cute Pass

- Redesigned the shared player/NPC character model with larger heads, shorter softer bodies, rounder limbs, chunkier shoes, and a more toy-like silhouette.
- Enlarged and refined eyes with visible highlights, softened brows, clearer mouths, and warmer cheek blush.
- Reworked hair into more rounded layered silhouettes for bun, puff, bob, cap, and short styles.
- Added more dimensional apron, backpack, straps, badges, and clothing details without introducing external model dependencies.
- Softened idle bounce and walk movement while preserving the repaired social-wave behavior.
- Kept NPC identities, dialogue, schedules, quest hooks, interaction radii, saves, and gameplay state unchanged.
- The same character system continues to power the optional third-person player avatar, keeping the art direction consistent.
"""
if "## V3R6 development — Character Cute Pass" not in cs:
    ch.write_text(cs.rstrip() + "\n" + entry + "\n")

print("V3R6 Character Cute Pass applied")
