from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
runtime_paths = [
    root/'source/legacy/mosslight-v3-runtime.js',
    root/'working/assets/mosslight-v3-readable.js',
]

social_const = '''\nconst ML_SOCIAL = [
    { pose: "wave", ambient: ["Morning, pilot!", "Hey, pilot.", "Good to see you."], return: "Back in one piece? Good." },
    { pose: "wave", ambient: ["Morning!", "Heya, friend!", "There you are!"] , return: "Welcome back! Need anything?" },
    { pose: "grin", ambient: ["Oh! Morning!", "Oh, hi!", "You’re back!"] , return: "You’re back! I have questions." },
    { pose: "wave", ambient: ["Morning, you.", "Hey, you. Kettle’s on.", "Glad you’re here."] , return: "Welcome home. I kept the kettle warm." },
    { pose: "nod", ambient: ["Morning.", "Hey there.", "Good to see you."] , return: "Good to see you safe." }
];
'''

old_const_end = 'const Za = "180", eh = 0'

old_class_header = '''class qc {
    lids = [];
    blinkClock = 0;
    root = new Wt;
    body = new Wt;
    head = new Wt;
    arms = [];
    legs = [];
    phase = 0;
    facing = 0;'''
new_class_header = '''class qc {
    lids = [];
    blinkClock = 0;
    root = new Wt;
    body = new Wt;
    head = new Wt;
    arms = [];
    legs = [];
    mouth = null;
    phase = 0;
    facing = 0;'''

old_mouth = 'R(this.head, "round", t.skin, 0, .08, .344, .072, .07, .074), R(this.head, "round", "#965d52", 0, -.04, .325, .09, .018, .025);'
new_mouth = 'R(this.head, "round", t.skin, 0, .08, .344, .072, .07, .074), this.mouth = R(this.head, "round", "#965d52", 0, -.04, .325, .09, .018, .025);'

old_animate_tail = '''    animate(t, e, n, i, r = 0) { this.blinkClock += t; const a = this.blinkClock % 4.7 > 4.54; this.lids.forEach(c => c.visible = a), this.facing = Bc(this.facing, i, 13, t), this.root.rotation.y = this.facing, this.phase += t * (e > .1 ? e * 2.45 : 1.8); const o = Math.min(.85, e * .105); for (let c = 0; c < 2; c++) {
        const l = Math.sin(this.phase + c * Math.PI);
        this.legs[c].rotation.x = Mi(this.legs[c].rotation.x, n ? l * o : -.3, 15, t), this.arms[c].rotation.x = Mi(this.arms[c].rotation.x, n ? -l * o : .65, 15, t);
    } this.body.position.y = n ? e > .1 ? Math.abs(Math.sin(this.phase)) * .065 : Math.sin(this.phase) * .013 : 0, this.body.rotation.z = Mi(this.body.rotation.z, n ? Math.sin(this.phase) * o * .022 : 0, 5, t), this.head.rotation.y = Mi(this.head.rotation.y, Math.max(-.65, Math.min(.65, r)), 4, t); }
}'''
new_animate_tail = '''    animate(t, e, n, i, r = 0) { this.blinkClock += t; const a = this.blinkClock % 4.7 > 4.54; this.lids.forEach(c => c.visible = a), this.facing = Bc(this.facing, i, 13, t), this.root.rotation.y = this.facing, this.phase += t * (e > .1 ? e * 2.45 : 1.8); const o = Math.min(.85, e * .105); for (let c = 0; c < 2; c++) {
        const l = Math.sin(this.phase + c * Math.PI);
        this.legs[c].rotation.x = Mi(this.legs[c].rotation.x, n ? l * o : -.3, 15, t), this.arms[c].rotation.x = Mi(this.arms[c].rotation.x, n ? -l * o : .65, 15, t), this.arms[c].rotation.z = Mi(this.arms[c].rotation.z, 0, 10, t), this.arms[c].rotation.y = Mi(this.arms[c].rotation.y, 0, 10, t);
    } this.body.position.y = n ? e > .1 ? Math.abs(Math.sin(this.phase)) * .065 : Math.sin(this.phase) * .013 : 0, this.body.rotation.z = Mi(this.body.rotation.z, n ? Math.sin(this.phase) * o * .022 : 0, 5, t), this.head.rotation.y = Mi(this.head.rotation.y, Math.max(-.65, Math.min(.65, r)), 4, t), this.head.rotation.z = Mi(this.head.rotation.z, 0, 7, t), this.mouth && (this.mouth.scale.x = Mi(this.mouth.scale.x, 1, 8, t), this.mouth.scale.y = Mi(this.mouth.scale.y, 1, 8, t)); }
    socialPose(t, e, n = 1) { const i = de(n, 0, 1), r = this.arms[1]; if (this.mouth && (e === "wave" || e === "grin" || e === "nod")) { this.mouth.scale.x = Mi(this.mouth.scale.x, 1 + .65 * i, 14, t), this.mouth.scale.y = Mi(this.mouth.scale.y, .8, 14, t); } if (e === "wave") { r.rotation.z = Mi(r.rotation.z, -1.42 * i, 13, t), r.rotation.x = Mi(r.rotation.x, -.35 + Math.sin(this.phase * 4.4) * .28, 14, t), r.rotation.y = Mi(r.rotation.y, -.18, 12, t), this.head.rotation.z = Mi(this.head.rotation.z, -.08, 9, t); } else if (e === "nod") { this.head.rotation.x = Mi(this.head.rotation.x, .07 + Math.sin(this.phase * 2.6) * .09 * i, 9, t); } else if (e === "grin") { this.head.rotation.z = Mi(this.head.rotation.z, Math.sin(this.phase * .8) * .045, 8, t); } }
}'''

old_v0 = '''class V0 {
    constructor(t, e, n) { this.state = e, Ln.forEach((i, r) => { const a = new qc({ ...i }); t.add(a.root); const o = Zr(e.data.time, r), c = e.data.npcs[i.id], l = { x: c?.x ?? o.x, z: c?.z ?? o.z, activity: o.activity, relationship: c?.relationship ?? 0 }; e.data.npcs[i.id] = l; const h = { id: i.id, label: "Talk to " + i.name.split(" ")[0], x: l.x, y: 0, z: l.z, zone: "outside", kind: "npc", data: i.dialogue, radius: 3.6, priority: 6 }; n.push(h), this.entities.push({ id: i.id, index: r, avatar: a, interaction: h, state: l, facing: 0, wait: 0 }); }); }
    state;
    entities = [];
    pausedId = null;
    reload() { for (const t of this.entities) {
        const e = Zr(this.state.data.time, t.index), n = this.state.data.npcs[t.id] ?? { ...e, relationship: 0 };
        this.state.data.npcs[t.id] = n, t.state = n, t.avatar.root.position.set(n.x, Ot(n.x, n.z), n.z);
    } }
    update(t, e, n) { for (const i of this.entities) {
        const r = Zr(n, i.index);
        i.state.activity = r.activity;
        const a = us(e, i.state);
        let o = 0;
        if (this.pausedId !== i.id && us(i.state, r) > .35) {
            let c = r.x, l = r.z;
            Math.abs(i.state.x - r.x) > 5 && i.state.z < 0 && r.z < 0 ? (c = i.state.x, l = 1) : Math.abs(i.state.x - r.x) > 1.2 && i.state.z >= -.3 && (c = r.x, l = 1);
            const h = c - i.state.x, u = l - i.state.z, d = Math.hypot(h, u);
            o = Math.min(1.55, d / t), d > .05 && (i.state.x += h / d * o * t, i.state.z += u / d * o * t, i.facing = Math.atan2(h, u));
        }
        else
            a < 4.5 && (i.facing = Math.atan2(e.x - i.state.x, e.z - i.state.z));
        if (i.avatar.root.position.set(i.state.x, Ot(i.state.x, i.state.z), i.state.z), i.avatar.animate(t, o, !0, i.facing, a < 7 ? Math.atan2(e.x - i.state.x, e.z - i.state.z) - i.facing : 0), o < .1 && this.pausedId !== i.id) {
            const c = i.avatar.phase, l = i.avatar.arms[1];
            l.rotation.x = [-.8 + Math.sin(c * 2) * .25, -.4 + Math.sin(c) * .3, -1.1 + Math.sin(c * .8) * .12, -.7 + Math.sin(c * 1.5) * .35, -.25][i.index], i.avatar.head.rotation.x = i.index === 2 ? .18 : i.index === 0 ? .12 : 0;
        }
        i.interaction.x = i.state.x, i.interaction.z = i.state.z, i.interaction.y = i.avatar.root.position.y;
    } }
}'''

new_v0 = '''class V0 {
    constructor(t, e, n, i) { this.state = e, this.camera = i, Ln.forEach((r, a) => { const o = new qc({ ...r }); t.add(o.root); const c = Zr(e.data.time, a), l = e.data.npcs[r.id], h = { x: l?.x ?? c.x, z: l?.z ?? c.z, activity: c.activity, relationship: l?.relationship ?? 0 }; e.data.npcs[r.id] = h; const u = { id: r.id, label: "Talk to " + r.name.split(" ")[0], x: h.x, y: 0, z: h.z, zone: "outside", kind: "npc", data: r.dialogue, radius: 3.6, priority: 6 }, d = document.createElement("div"); d.className = "npc-social-bubble", d.hidden = !0, d.innerHTML = `<strong>${r.name.split(" ")[0]}</strong><span></span>`, document.getElementById("ui")?.appendChild(d), n.push(u), this.entities.push({ id: r.id, index: a, avatar: o, interaction: u, state: h, facing: 0, wait: 0, bubble: d, nearPlayer: !1, socialTimer: 0, socialCooldown: 1.4 + a * .65, socialKind: "grin", socialText: "" }); }); }
    state;
    camera;
    entities = [];
    pausedId = null;
    hideBubbles() { for (const t of this.entities) t.bubble && (t.bubble.hidden = !0), t.socialTimer = 0; }
    reload() { for (const t of this.entities) {
        const e = Zr(this.state.data.time, t.index), n = this.state.data.npcs[t.id] ?? { ...e, relationship: 0 };
        this.state.data.npcs[t.id] = n, t.state = n, t.avatar.root.position.set(n.x, Ot(n.x, n.z), n.z), t.nearPlayer = !1, t.socialTimer = 0, t.socialCooldown = 1.5 + t.index * .55, t.bubble && (t.bubble.hidden = !0);
    } }
    updateBubble(t) { if (!t.bubble || t.socialTimer <= 0 || !this.camera) return t.bubble && (t.bubble.hidden = !0); const e = new T(t.state.x, Ot(t.state.x, t.state.z) + 2.65 * Ln[t.index].height, t.state.z).project(this.camera), n = e.z > -1 && e.z < 1 && Math.abs(e.x) < 1.08 && Math.abs(e.y) < 1.08; if (!n) return t.bubble.hidden = !0; t.bubble.hidden = !1, t.bubble.style.left = `${(e.x * .5 + .5) * innerWidth}px`, t.bubble.style.top = `${(-e.y * .5 + .5) * innerHeight}px`, t.bubble.querySelector("span").textContent = t.socialText; }
    greet(t, e) { const n = ML_SOCIAL[t.index], i = e.data.voyage.visited.includes("orren") && t.state.relationship > 1, r = e.data.time < 12 ? 0 : e.data.time < 18 ? 1 : 2; t.socialKind = n.pose, t.socialText = i ? n.return : n.ambient[r], t.socialTimer = 3.2, t.socialCooldown = 18 + t.index * 2.5; }
    update(t, e, n) { for (const i of this.entities) {
        const r = Zr(n, i.index);
        i.state.activity = r.activity, i.socialCooldown = Math.max(0, i.socialCooldown - t), i.socialTimer = Math.max(0, i.socialTimer - t);
        const a = us(e, i.state);
        let o = 0;
        const c = a < 7.2, l = c && !i.nearPlayer;
        a > 8.4 && (i.nearPlayer = !1), c && (i.nearPlayer = !0), l && i.socialCooldown <= 0 && this.pausedId !== i.id && this.greet(i, this.state);
        if (this.pausedId !== i.id && us(i.state, r) > .35 && i.socialTimer <= 0) {
            let h = r.x, u = r.z;
            Math.abs(i.state.x - r.x) > 5 && i.state.z < 0 && r.z < 0 ? (h = i.state.x, u = 1) : Math.abs(i.state.x - r.x) > 1.2 && i.state.z >= -.3 && (h = r.x, u = 1);
            const d = h - i.state.x, f = u - i.state.z, g = Math.hypot(d, f);
            o = Math.min(1.55, g / t), g > .05 && (i.state.x += d / g * o * t, i.state.z += f / g * o * t, i.facing = Math.atan2(d, f));
        }
        else
            (a < 4.5 || i.socialTimer > 0) && (i.facing = Math.atan2(e.x - i.state.x, e.z - i.state.z));
        if (i.avatar.root.position.set(i.state.x, Ot(i.state.x, i.state.z), i.state.z), i.avatar.animate(t, o, !0, i.facing, a < 7 ? Math.atan2(e.x - i.state.x, e.z - i.state.z) - i.facing : 0), o < .1 && this.pausedId !== i.id) {
            const h = i.avatar.phase, u = i.avatar.arms[1];
            u.rotation.x = [-.8 + Math.sin(h * 2) * .25, -.4 + Math.sin(h) * .3, -1.1 + Math.sin(h * .8) * .12, -.7 + Math.sin(h * 1.5) * .35, -.25][i.index], i.avatar.head.rotation.x = i.index === 2 ? .18 : i.index === 0 ? .12 : 0;
        }
        i.socialTimer > 0 && this.pausedId !== i.id ? i.avatar.socialPose(t, i.socialKind, Math.min(1, i.socialTimer * 1.5)) : this.pausedId === i.id && i.avatar.socialPose(t, "grin", 1), this.updateBubble(i), i.interaction.x = i.state.x, i.interaction.z = i.state.z, i.interaction.y = i.avatar.root.position.y;
    } }
}'''

constructor_old = 'this.npcs = new V0(this.world.outside, this.state, this.world.interactions)'
constructor_new = 'this.npcs = new V0(this.world.outside, this.state, this.world.interactions, this.render.camera)'
freeze_old = 'freeze() { this.paused = !0, this.input.enabled = !1, this.input.release(), this.currentInteraction = null, this.ui.prompt.hidden = !0; }'
freeze_new = 'freeze() { this.npcs.hideBubbles(), this.paused = !0, this.input.enabled = !1, this.input.release(), this.currentInteraction = null, this.ui.prompt.hidden = !0; }'

repls = {
    'Home is where someone notices you’ve been gone. Take the long way back from the woods. Look over the pond. Then come tell us what you found. That’s how it starts.': 'Honestly? It’s mostly people noticing when you’ve been gone. Take the long way back from the woods sometime, then come tell me what you found.',
    'Your echo module and the lanterncap pulses line up. The old array isn’t broadcasting at the forest. It’s listening. Whatever your ship heard, the forest heard first. We may be standing on an enormous conversation.': 'Your echo module matches the lanterncap pulses exactly. And the array isn’t broadcasting — it’s listening. Whatever your ship picked up, the forest heard it first. That is… a lot to think about.',
    'There. Quiet, for now. Ivo has been listening to the plants, if you can believe it. Show him what we found. Your workbench is ready when you get back aboard.': 'There. Quiet again. Ivo wants to see what we found — apparently he’s been listening to plants now. Your workbench is ready when you get back aboard.',
    'The fittings will stabilize navigation. Take the pilot seat and chart a course to Orren when you’re ready. And come back. That’s what a harbor is for.': 'The fittings will stabilize navigation. When you’re ready, take the pilot seat and chart a course to Orren. And, hey — come back, alright?',
    'That’s the spirit. Bring back a story, and leave the trail a little better.': 'That’s the idea. Have a good walk — and try not to let the weather surprise you.'
}

for p in runtime_paths:
    s = p.read_text()
    if 'const ML_SOCIAL = [' not in s:
        assert old_const_end in s
        s = s.replace(old_const_end, social_const + '\n' + old_const_end, 1)
    if 'mouth = null;' not in s:
        assert old_class_header in s
        s = s.replace(old_class_header, new_class_header, 1)
    if 'this.mouth = R(this.head' not in s:
        assert old_mouth in s
        s = s.replace(old_mouth, new_mouth, 1)
    if 'socialPose(t, e, n = 1)' not in s:
        assert old_animate_tail in s
        s = s.replace(old_animate_tail, new_animate_tail, 1)
    if 'updateBubble(t)' not in s:
        assert old_v0 in s
        s = s.replace(old_v0, new_v0, 1)
    if constructor_new not in s:
        assert constructor_old in s
        s = s.replace(constructor_old, constructor_new, 1)
    if freeze_new not in s:
        assert freeze_old in s
        s = s.replace(freeze_old, freeze_new, 1)
    for old, new in repls.items():
        s = s.replace(old, new)
    p.write_text(s)

dialogue_path = root/'source/data/dialogue.json'
dialogue = json.loads(dialogue_path.read_text())
for node in dialogue.values():
    if isinstance(node, dict) and node.get('text') in repls:
        node['text'] = repls[node['text']]
dialogue_path.write_text(json.dumps(dialogue, ensure_ascii=False, indent=2) + '\n')

profiles_path = root/'source/data/npc-social-profiles.json'
old_profiles = json.loads(profiles_path.read_text())
ids = ['npc_mechanic_001','npc_store_001','npc_researcher_001','npc_cafe_001','npc_ranger_001']
shorts = [
    {'pose':'wave','ambient':['Morning, pilot!','Hey, pilot.','Good to see you.'],'return':'Back in one piece? Good.'},
    {'pose':'wave','ambient':['Morning!','Heya, friend!','There you are!'],'return':'Welcome back! Need anything?'},
    {'pose':'grin','ambient':['Oh! Morning!','Oh, hi!','You’re back!'],'return':'You’re back! I have questions.'},
    {'pose':'wave','ambient':['Morning, you.','Hey, you. Kettle’s on.','Glad you’re here.'],'return':'Welcome home. I kept the kettle warm.'},
    {'pose':'nod','ambient':['Morning.','Hey there.','Good to see you.'],'return':'Good to see you safe.'},
]
profiles = []
for idx, prof in enumerate(old_profiles):
    q = {'id': ids[idx], **prof, 'ambient': shorts[idx]['ambient'], 'returnGreeting': shorts[idx]['return'], 'gesture': shorts[idx]['pose'], 'cooldownSeconds': 18 + idx*2.5}
    profiles.append(q)
profiles_path.write_text(json.dumps(profiles, ensure_ascii=False, indent=2) + '\n')

css_append = '''\n/* V3R2 social greeting pass */
.npc-social-bubble{position:absolute;z-index:18;transform:translate(-50%,-118%);pointer-events:none;display:grid;gap:2px;min-width:92px;max-width:min(230px,42vw);padding:8px 11px;border-radius:15px 15px 15px 5px;background:#f4edd9ee;color:#254441;box-shadow:0 7px 24px #09262d30;border:1px solid #fff8e2c9;backdrop-filter:blur(7px);font-size:13px;line-height:1.25;text-align:left;animation:npc-bubble-in .18s ease-out both}
.npc-social-bubble strong{font-size:9px;line-height:1.2;letter-spacing:1.2px;text-transform:uppercase;color:#657f72;font-weight:750}
.npc-social-bubble span{float:none;font-family:Georgia,serif;font-size:14px;color:#294843}
.npc-social-bubble[hidden]{display:none!important}
@keyframes npc-bubble-in{from{opacity:0;transform:translate(-50%,-105%) scale(.94)}to{opacity:1;transform:translate(-50%,-118%) scale(1)}}
@media(max-width:700px){.npc-social-bubble{max-width:175px;padding:7px 9px}.npc-social-bubble span{font-size:12px}.npc-social-bubble strong{font-size:8px}}
@media(prefers-reduced-motion:reduce){.npc-social-bubble{animation:none}}
'''
for p in [root/'source/legacy/mosslight-v3.css', root/'working/assets/mosslight-v3.css']:
    s=p.read_text()
    if 'V3R2 social greeting pass' not in s:
        p.write_text(s.rstrip()+css_append+'\n')

ch = root/'CHANGELOG.md'
cs = ch.read_text()
entry = '''\n## V3R2 development — NPC social greeting pass

- Added proximity-based ambient NPC greetings with cooldowns and re-entry hysteresis.
- Added warm NPC speech bubbles projected above characters in the 3D world.
- Added visible social poses: waves, grins, nods, head tilts, and friendlier eye/head tracking.
- NPCs briefly stop their routine to acknowledge the player, then resume schedules.
- Return greetings can acknowledge a trip to Orren without changing save schema.
- Reworked several dialogue lines for shorter, more conversational delivery while preserving quest logic.
- Added named social-profile data for future clean TypeScript reconstruction.
- No changes to save schema, quests, inventory, economy, world layout, navigation, or flight.
'''
if '## V3R2 development — NPC social greeting pass' not in cs:
    ch.write_text(cs.rstrip()+entry+'\n')

print('patched')
