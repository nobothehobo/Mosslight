(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i); new MutationObserver(i => { for (const r of i)
    if (r.type === "childList")
        for (const a of r.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && n(a); }).observe(document, { childList: !0, subtree: !0 }); function e(i) { const r = {}; return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r; } function n(i) { if (i.ep)
    return; i.ep = !0; const r = e(i); fetch(i.href, r); } })();
const Jr = "0.2.0", ee = { fish: { name: "Glassfin", description: "A bright little pond fish. Cook with a lanterncap aboard your ship.", category: "Ingredient", stackSize: 20, value: 9, rarity: "Common", icon: "◁", color: "#98d6df" }, stew: { name: "Harbor chowder", description: "Glassfin, lanterncaps and a pinch of home. Restores stamina. Neri would love a bowl.", category: "Food", stackSize: 20, value: 24, rarity: "Homemade", icon: "♨", color: "#eac19b" }, seed: { name: "Cinderbloom seed", description: "A hardy seed from Orren’s listening garden. Ivo will want to study it.", category: "Quest", stackSize: 1, value: 0, rarity: "Unique", icon: "❋", color: "#e3b2dc" }, moonfruit: { name: "Sunplum", description: "A tart golden fruit from Orren. Good for tea, or a long walk.", category: "Food", stackSize: 30, value: 8, rarity: "Uncommon", icon: "●", color: "#f1b479" }, ration: { name: "Orchard trailcake", description: "Oat, honeyfruit, and a little homesickness. Restores all stamina and grants 90 seconds of easy running.", category: "Food", stackSize: 20, value: 8, rarity: "Common", icon: "◒", color: "#e9bd82" }, battery: { name: "Field cell", description: "A sturdy power cell. Survey equipment never seems to have enough of these.", category: "Component", stackSize: 20, value: 12, rarity: "Common", icon: "▥", color: "#90c9d2" }, parts: { name: "Repair fittings", description: "Universal couplings for very non-universal spacecraft. Useful at the ship workbench.", category: "Component", stackSize: 20, value: 18, rarity: "Common", icon: "⚙", color: "#b5c2cb" }, module: { name: "Echo module", description: "Recovered from the woodland beacon. It carries a pulse identical to your ship’s fault.", category: "Quest", stackSize: 1, value: 0, rarity: "Unique", icon: "◇", color: "#9fe0e7" }, glowcap: { name: "Lanterncap", description: "A soft blue mushroom. The gills glow in time with the old survey towers.", category: "Research", stackSize: 30, value: 5, rarity: "Common", icon: "♧", color: "#95d9ce" }, mineral: { name: "Cloud quartz", description: "Milky crystal with a faint blue core. Oren buys it for the settlement’s filters.", category: "Resource", stackSize: 30, value: 7, rarity: "Uncommon", icon: "◆", color: "#bacbfa" }, scrap: { name: "Salvaged alloy", description: "Clean scrap from a time when everything had sharp corners. Tradable with Oren.", category: "Resource", stackSize: 30, value: 4, rarity: "Common", icon: "⬡", color: "#c4b4a0" }, archive: { name: "Surveyor’s keepsake", description: "A scratched recording wafer. Someone wanted the next visitor to remember this place.", category: "Quest", stackSize: 1, value: 0, rarity: "Unique", icon: "▣", color: "#e7c195" }, tea: { name: "Moonmint tea", description: "A little warmth for the road. Restores stamina and grants 90 seconds of easy running.", category: "Food", stackSize: 20, value: 6, rarity: "Common", icon: "♨", color: "#aad3a1" } }, Kr = { stock: ["ration", "battery", "parts", "tea"], buyback: .5 }, Oe = { supper: { id: "supper", title: "Something warm to share", description: "Neri has a spare recipe. Catch a glassfin at the pond, gather a lanterncap, and cook a bowl of chowder in your ship galley.", stages: ["Ask Neri about a recipe.", "Cook harbor chowder with one glassfin and one lanterncap.", "Bring a bowl of chowder to Neri.", "A recipe becomes a tradition."], reward: 35, completion: [{ item: "stew", count: 1 }] }, garden: { id: "garden", title: "The garden between stars", description: "The array’s echo names a listening garden on Orren. Ivo would like a seed from the old conservatory.", stages: ["After fixing navigation, ask Ivo about Orren.", "Fly to Orren. Find the Listening Garden and recover a seed.", "Return to Ivo on Mosslight with the cinderbloom seed.", "Two worlds, one quiet conversation."], reward: 90, rewardItems: [{ id: "moonfruit", count: 3 }], completion: [{ item: "seed", count: 1 }] }, signal: { id: "signal", title: "A signal among the leaves", description: "Your navigation fault shares a rhythm with interference from the abandoned survey array. Sela thinks the forest holds an answer.", stages: ["Speak with Sela, the mechanic.", "Follow the amber trail into Fernwood. Examine the survey beacon.", "Bring the echo module back to Sela.", "The interference is contained. Ask Ivo what the signal means."], reward: 70, rewardItems: [{ id: "parts", count: 2 }], completion: [{ flag: "beacon" }, { item: "module", count: 1 }] }, research: { id: "research", title: "Small, luminous lives", description: "Ivo suspects that the lanterncaps and the gentle mosslings hear something the settlement cannot. Observe them without causing harm.", stages: ["Meet Ivo at the research hut.", "Observe two different mosslings and gather three lanterncaps.", "Return to Ivo with your notes and three lanterncaps.", "The forest has a rhythm of its own."], reward: 45, rewardItems: [{ id: "tea", count: 2 }], completion: [{ observed: 2 }, { item: "glowcap", count: 3 }] }, cave: { id: "cave", title: "Someone was here before", description: "Tamsin found an old survey tunnel beneath the eastern ridge. A lamp was still lit inside. Find out who left it there.", stages: ["Speak to Tamsin by the trail shelter.", "Follow the blue trail to the ridge tunnel. Recover the old recording.", "Return the surveyor’s keepsake to Tamsin.", "The first surveyor is remembered."], reward: 55, rewardItems: [{ id: "mineral", count: 3 }], completion: [{ flag: "archive" }, { item: "archive", count: 1 }] } }, wo = [{ id: "harbor", name: "Mosslight Harbor", x: 0, z: 0, short: "Harbor" }, { id: "ship", name: "The Little Elsewhere", x: -25, z: 34, short: "Your ship" }, { id: "pond", name: "Glasswater Pond", x: 76, z: -12, short: "Glasswater" }, { id: "forest", name: "Fernwood", x: -73, z: -75, short: "Fernwood" }, { id: "beacon", name: "Survey Array 04", x: -106, z: -137, short: "Array 04" }, { id: "cave", name: "The Lantern Tunnel", x: 130, z: -119, short: "Tunnel" }, { id: "overlook", name: "Farlook Ridge", x: 134, z: 77, short: "Farlook" }], Ln = [{ id: "npc_mechanic_001", name: "Sela Venn", role: "Mechanic", personality: "A steady hand. A dry joke.", color: "#e4a069", skin: "#a86d51", hair: "#493b38", style: "bun", height: 1.03, accessory: "goggles", work: { x: -17, z: -7 }, home: { x: -25, z: -28 }, dialogue: "sela" }, { id: "npc_store_001", name: "Oren Vale", role: "Provisions", personality: "Knows everybody’s favorite tea.", color: "#98b998", skin: "#dca482", hair: "#5c4539", style: "cap", height: 1.13, accessory: "apron", work: { x: 15, z: -7 }, home: { x: 25, z: -29 }, dialogue: "oren" }, { id: "npc_researcher_001", name: "Ivo Quill", role: "Field researcher", personality: "Always one question from a discovery.", color: "#cfcec0", skin: "#805942", hair: "#252a30", style: "puff", height: .96, accessory: "pack", work: { x: 20, z: -27 }, home: { x: 25, z: -29 }, dialogue: "ivo" }, { id: "npc_cafe_001", name: "Neri Bloom", role: "Café keeper", personality: "Makes a place feel like home.", color: "#d5a4b7", skin: "#ebba95", hair: "#825945", style: "bob", height: .97, accessory: "apron", work: { x: -1, z: 13 }, home: { x: -25, z: -28 }, dialogue: "neri" }, { id: "npc_ranger_001", name: "Tamsin Reed", role: "Trail ranger", personality: "Notices the things others walk past.", color: "#7faca4", skin: "#b88360", hair: "#d0bc8c", style: "short", height: 1.08, accessory: "pack", work: { x: 32, z: 2 }, home: { x: 25, z: -29 }, dialogue: "tamsin" }], ve = { text: "See you around.", actions: [{ type: "close" }] }, tn = { "sela.complete": { speaker: "Sela Venn", conditions: [{ quest: "signal", stage: 3 }], text: "Couplings are steady. I’ve isolated that pulse, but Ivo wants a look at the echo. Two repair fittings at your workbench will finish the job. Then your little ship can be a home again.", responses: [{ text: "Does this mean I can take off?", next: "sela.flight" }, ve] }, "sela.return": { speaker: "Sela Venn", conditions: [{ quest: "signal", stage: 2 }], text: "That’s the same rhythm. Six beats, a pause, then six more. Wear and tear doesn’t usually have a favorite song. I’ll contain the interference. Take these fittings, and your pay. You’ve earned a quiet evening.", responses: [{ text: "Hand over the echo module.", actions: [{ type: "completeQuest", id: "signal" }], next: "sela.done" }, ve] }, "sela.active": { speaker: "Sela Venn", conditions: [{ quest: "signal", stage: 1 }], text: "Amber trail markers lead northwest through Fernwood. The old array is past the fallen mast. Bring back its echo module. And don’t let the mosslings convince you they’re starving. They’re very good at that.", responses: [{ text: "What’s the settlement like?", next: "sela.town" }, ve] }, "sela.start": { speaker: "Sela Venn", text: "You must be the pilot of that lovely old rust-bird. Your drive is fine. Navigation… less fine. Funny thing: our lamps started flickering in exactly the same rhythm. There’s an abandoned survey array out in Fernwood. Fancy taking a walk?", responses: [{ text: "I’ll check the survey array.", actions: [{ type: "startQuest", id: "signal" }], next: "sela.accepted" }, { text: "Tell me about the settlement.", next: "sela.town" }, ve] }, "sela.accepted": { speaker: "Sela Venn", text: "Follow the amber markers northwest. Your journal and map have the location. Take your time. Pick a few lanterncaps, watch the little creatures. A problem can wait long enough for a good walk.", responses: [{ text: "I’m on my way.", actions: [{ type: "close" }] }] }, "sela.done": { speaker: "Sela Venn", text: "There. Quiet again. Ivo wants to see what we found — apparently he’s been listening to plants now. Your workbench is ready when you get back aboard.", responses: [{ text: "Thank you, Sela.", actions: [{ type: "close" }] }] }, "sela.town": { speaker: "Sela Venn", text: "Mosslight Harbor. Eighty-six people, three working kettles, one extremely opinionated weather station. Oren stocks the necessities. Neri supplies the reasons to stay.", responses: [{ text: "Sounds like a good place to be grounded.", actions: [{ type: "close" }] }] }, "sela.flight": { speaker: "Sela Venn", text: "The fittings will stabilize navigation. When you’re ready, take the pilot seat and chart a course to Orren. And, hey — come back, alright?", responses: [ve] }, "oren.start": { speaker: "Oren Vale", text: "A new face! Welcome. If it powers a torch, fills a belly, or stops a worrying rattle, I probably sell it. I also buy lanterncaps, cloud quartz, and clean salvage. Fair prices, modest gossip.", responses: [{ text: "Show me your provisions.", actions: [{ type: "shop" }] }, { text: "What should I take on the trail?", next: "oren.trail" }, ve] }, "oren.trail": { speaker: "Oren Vale", text: "A trailcake helps with long runs. Batteries and repair fittings are always useful. Keep three lanterncaps for Ivo before you sell the rest. He’s paying well for field notes, too.", responses: [{ text: "Let’s trade.", actions: [{ type: "shop" }] }, ve] }, "ivo.done": { speaker: "Ivo Quill", conditions: [{ quest: "research", stage: 3 }, { quest: "signal", stage: 3 }], text: "Your echo module matches the lanterncap pulses exactly. And the array isn’t broadcasting — it’s listening. Whatever your ship picked up, the forest heard it first. That is… a lot to think about.", responses: [{ text: "I think I’ll stay and listen.", actions: [{ type: "close" }] }] }, "ivo.return": { speaker: "Ivo Quill", conditions: [{ quest: "research", stage: 2 }], text: "Two observations and three lanterncaps! No frightened creatures, no collecting jars full of unhappy things. Exactly the kind of science I like. Here’s your field stipend, and some tea from Neri.", responses: [{ text: "Share the notes and samples.", actions: [{ type: "completeQuest", id: "research" }], next: "ivo.thanks" }, ve] }, "ivo.active": { speaker: "Ivo Quill", conditions: [{ quest: "research", stage: 1 }], text: "Observe two different mosslings from a few paces away. They bolt if you sprint right at them. Three lanterncaps as well, please. The blue ones grow beside the woodland trail and pond.", responses: [{ text: "What about the signal?", next: "ivo.signal", conditions: [{ quest: "signal", stage: 3 }] }, ve] }, "ivo.complete": { speaker: "Ivo Quill", conditions: [{ quest: "research", stage: 3 }], text: "The samples are settling nicely. Mosslings pause before every lanterncap pulse. I wonder what they can hear that we can’t.", responses: [{ text: "The array was listening.", next: "ivo.signal", conditions: [{ quest: "signal", stage: 3 }] }, ve] }, "ivo.start": { speaker: "Ivo Quill", text: "Oh! A traveler. Excellent. Would you help me study the mosslings? Observe two different ones, and gather three lanterncaps. No fighting, no cages. Just pay attention. It’s surprisingly rare.", responses: [{ text: "I’d like to help.", actions: [{ type: "startQuest", id: "research" }], next: "ivo.accepted" }, { text: "Sela recovered the signal.", next: "ivo.signal", conditions: [{ quest: "signal", stage: 3 }] }, ve] }, "ivo.accepted": { speaker: "Ivo Quill", text: "You already have a field scanner in your suit. Approach at a walk and use Observe. The meadow and Glasswater Pond are good places to look. I’ve marked them on your map.", responses: [{ text: "I’ll keep my distance.", actions: [{ type: "close" }] }] }, "ivo.signal": { speaker: "Ivo Quill", text: "Six beats. The lanterncaps do that at night! Before the arrays were abandoned, a surveyor wrote: “We thought we were alone because we only listened for voices.” Tamsin might know where the rest of that journal is.", responses: [ve] }, "ivo.thanks": { speaker: "Ivo Quill", text: "Here’s the strange part: the gills glow a heartbeat before the array pulses. Not an echo. A reply? Come back after you’ve helped Sela. We’ll compare notes.", responses: [ve] }, "neri.gift": { speaker: "Neri Bloom", conditions: [{ flag: "teaGift", not: !0 }], text: "New arrivals get a cup on the house. House rule. You look like someone whose ship has decided to become a garden ornament. Sit for a minute. The universe can be strange after tea.", responses: [{ text: "I could use that. Thank you.", actions: [{ type: "give", id: "tea", count: 1 }, { type: "flag", id: "teaGift" }], next: "neri.home" }, { text: "What brought you here?", next: "neri.home" }, ve] }, "neri.start": { speaker: "Neri Bloom", text: "Welcome back. The kettle’s warm. At lunch, half the settlement ends up out here pretending they didn’t come for a second cake.", responses: [{ text: "What makes this place home?", next: "neri.home" }, ve] }, "neri.home": { speaker: "Neri Bloom", text: "Honestly? It’s mostly people noticing when you’ve been gone. Take the long way back from the woods sometime, then come tell me what you found.", responses: [{ text: "I’ll come back.", actions: [{ type: "close" }] }] }, "tamsin.return": { speaker: "Tamsin Reed", conditions: [{ quest: "cave", stage: 2 }], text: "That’s Elian’s recording. The first surveyor. We kept the lamp burning because… well, it felt wrong to turn it off. What did it say?", responses: [{ text: "“Leave a light for whoever comes next.”", actions: [{ type: "completeQuest", id: "cave" }], next: "tamsin.done" }, ve] }, "tamsin.active": { speaker: "Tamsin Reed", conditions: [{ quest: "cave", stage: 1 }], text: "Blue markers, east of the pond. The tunnel is tucked under the ridge. Your suit lamp will come on inside. Check the old desk at the back. No danger in there. Just time.", responses: [ve] }, "tamsin.complete": { speaker: "Tamsin Reed", conditions: [{ quest: "cave", stage: 3 }], text: "We’ll keep a copy in the community hall. There’s an overlook southeast of town if you need to think. On a clear night you can see the rings above the ridge.", responses: [ve] }, "tamsin.start": { speaker: "Tamsin Reed", text: "If you’re heading out, there’s an old survey tunnel beyond Glasswater. I found a lamp still burning. Someone lived there before we built the harbor. Would you look for a recording? I’d like to know their name.", responses: [{ text: "I’ll find what they left behind.", actions: [{ type: "startQuest", id: "cave" }], next: "tamsin.accepted" }, { text: "Any advice for the trails?", next: "tamsin.advice" }, ve] }, "tamsin.accepted": { speaker: "Tamsin Reed", text: "Follow the blue markers east, past Glasswater Pond. The tunnel’s entrance is beneath the pale stone arch. And walk around the mosslings, please. They were here first.", responses: [ve] }, "tamsin.advice": { speaker: "Tamsin Reed", text: "Amber leads to the array. Blue leads to the tunnel. Stone cairns lead to Farlook Ridge. The pond is shallow by the edges, but take the path around it. Save a little breath for the view.", responses: [ve] } }, ja = { sela: ["sela.complete", "sela.return", "sela.active", "sela.start"], oren: ["oren.start"], ivo: ["ivo.done", "ivo.return", "ivo.active", "ivo.complete", "ivo.start"], neri: ["neri.gift", "neri.start"], tamsin: ["tamsin.return", "tamsin.active", "tamsin.complete", "tamsin.start"] };
tn["ivo.garden"] = { speaker: "Ivo Quill", conditions: [{ quest: "garden", stage: 2 }], text: "A living cinderbloom seed! The same pulse, in two different skies. Perhaps the old arrays were keeping a garden together. Thank you for bringing a little of it home.", responses: [{ text: "Share the seed.", actions: [{ type: "completeQuest", id: "garden" }] }, { text: "I’ll return shortly.", actions: [{ type: "close" }] }] };
ja.ivo.unshift("ivo.garden");
tn["neri.supper"] = { speaker: "Neri Bloom", conditions: [{ quest: "supper", stage: 2 }], text: "You brought the chowder! The best thing about a recipe is that eventually somebody makes it for you.", responses: [{ text: "Share a warm bowl.", actions: [{ type: "completeQuest", id: "supper" }] }, { text: "I’ll come back.", actions: [{ type: "close" }] }] };
ja.neri.unshift("neri.supper");
for (const s of ["neri.start", "neri.gift", "neri.home"])
    tn[s].responses.unshift({ text: "May I learn a recipe?", conditions: [{ quest: "supper", stage: 0 }], actions: [{ type: "startQuest", id: "supper" }] });
for (const s of ["ivo.done", "ivo.complete", "ivo.start", "ivo.signal"])
    tn[s].responses.unshift({ text: "Tell me about the garden on Orren.", conditions: [{ flag: "repaired" }, { quest: "garden", stage: 0 }], actions: [{ type: "startQuest", id: "garden" }], next: "ivo.course" });
tn["ivo.course"] = { speaker: "Ivo Quill", text: "Your repaired ship can reach Orren. Take the pilot seat and open the system chart. The Listening Garden is northeast of Cinderbloom Anchorage. Bring a seed home. I’ll keep the kettle on.", responses: [{ text: "I’ll set a course.", actions: [{ type: "close" }] }] };
const Qc = [{ warmth: .8, energy: .5, humor: .9, interest: "Old engines", lines: ["Morning, pilot. I saved you a place by the heater. Your ship can wait until you’ve warmed up.", "You’re just in time. Sit beside me while I work, if you like. Company improves the diagnostics.", "There you are. I checked your landing lights before supper. They’ll be waiting whenever you come home."], reply: "You understand machinery: a little attention, and knowing when to stop." }, { warmth: 1, energy: .8, humor: .6, interest: "Tea and local gossip", lines: ["Good morning! I set aside the softer trail biscuits for you. No hurry; tell me how you slept.", "I stock three kinds of biscuits. Neri maintains there are only two good kinds.", "I’m glad you stopped in. If you’re short of something for the journey, we’ll work it out together."], reply: "I’ll put the kettle on. No purchase required for a decent conversation." }, { warmth: .7, energy: 1, humor: .5, interest: "Living signals", lines: ["You’re here! I found something wonderful at dawn, and you were the first person I wanted to tell.", "I was meant to catalogue samples. Instead I discovered six new questions.", "The plants keep different hours from us. I’m trying to be a considerate visitor."], reply: "Exactly! Curiosity is a useful instrument, provided we remember to listen." }, { warmth: 1, energy: .6, humor: .7, interest: "Recipes and stories", lines: ["A quiet breakfast is a perfectly good adventure.", "Sela calls this lunch. Oren calls it market research. They both order seconds.", "I kept a little pot warm in case you came by. Come sit; you don’t have to have a story tonight."], reply: "Then stay a while. A place becomes home one ordinary evening at a time." }, { warmth: .6, energy: .7, humor: .7, interest: "Tracks and weather", lines: ["Fresh tracks near the water. Walking slowly is how you see the good things.", "Checked the trail signs. One was pointing at a bush. The bush denied everything.", "It’s good to see you safe. I’ll walk the first bend with you if the dark feels a little too quiet."], reply: "That’s the idea. Have a good walk — and try not to let the weather surprise you." }];
function th(s, t, e) { const n = Ln.findIndex(h => h.id === s); if (n < 0)
    return t; const i = Qc[n], r = Ln[n], a = e.data.time < 12 ? 0 : e.data.time < 18 ? 1 : 2, o = "greet_" + s + "_" + a, c = !!e.data.flags[o]; e.data.flags[o] = !0; const l = s + ".greeting"; return tn[l] = { speaker: r.name, text: c ? `${i.reply} ${e.data.voyage.visited.includes("orren") ? "I saw the Elsewhere return to the pad. It’s lovely having you back among us." : ""}` : i.lines[a], responses: [{ text: "About the work we discussed…", next: t }, { text: "What keeps you here?", next: s + ".personal" }, { text: "Just stopping by. Take care.", actions: [{ type: "close" }] }] }, tn[s + ".personal"] = { speaker: r.name, text: `${i.interest}. ${i.reply}`, responses: [{ text: "I like that way of looking at it.", next: t }, { text: "See you around.", actions: [{ type: "close" }] }] }, l; }

const ML_SOCIAL = [
    { pose: "wave", ambient: ["Morning, pilot!", "Hey, pilot.", "Good to see you."], return: "Back in one piece? Good." },
    { pose: "wave", ambient: ["Morning!", "Heya, friend!", "There you are!"] , return: "Welcome back! Need anything?" },
    { pose: "grin", ambient: ["Oh! Morning!", "Oh, hi!", "You’re back!"] , return: "You’re back! I have questions." },
    { pose: "wave", ambient: ["Morning, you.", "Hey, you. Kettle’s on.", "Glad you’re here."] , return: "Welcome home. I kept the kettle warm." },
    { pose: "nod", ambient: ["Morning.", "Hey there.", "Good to see you."] , return: "Good to see you safe." }
];

const Za = "180", eh = 0, To = 1, nh = 2, Xl = 1, Yl = 2, yn = 3, En = 0, Re = 1, Ge = 2, Dn = 0, bi = 1, Qr = 2, Ao = 3, Ro = 4, ih = 5, $n = 100, sh = 101, rh = 102, ah = 103, oh = 104, lh = 200, ch = 201, hh = 202, uh = 203, ta = 204, ea = 205, dh = 206, fh = 207, ph = 208, mh = 209, gh = 210, vh = 211, xh = 212, _h = 213, yh = 214, na = 0, ia = 1, sa = 2, Ti = 3, ra = 4, aa = 5, oa = 6, la = 7, $l = 0, Mh = 1, Sh = 2, Un = 0, bh = 1, Eh = 2, wh = 3, jl = 4, Th = 5, Ah = 6, Rh = 7, Zl = 300, Ai = 301, Ri = 302, ca = 303, ha = 304, sr = 306, Ks = 1e3, Zn = 1001, ua = 1002, Ve = 1003, Ch = 1004, xs = 1005, on = 1006, pr = 1007, Jn = 1008, un = 1009, Jl = 1010, Kl = 1011, es = 1012, Ja = 1013, Kn = 1014, ln = 1015, ds = 1016, Ka = 1017, Qa = 1018, ns = 1020, Ql = 35902, tc = 35899, ec = 1021, nc = 1022, Qe = 1023, is = 1026, ss = 1027, to = 1028, eo = 1029, ic = 1030, no = 1031, io = 1033, Ys = 33776, $s = 33777, js = 33778, Zs = 33779, da = 35840, fa = 35841, pa = 35842, ma = 35843, ga = 36196, va = 37492, xa = 37496, _a = 37808, ya = 37809, Ma = 37810, Sa = 37811, ba = 37812, Ea = 37813, wa = 37814, Ta = 37815, Aa = 37816, Ra = 37817, Ca = 37818, Pa = 37819, Ia = 37820, La = 37821, Da = 36492, Ua = 36494, Na = 36495, Fa = 36283, Oa = 36284, ka = 36285, za = 36286, Ph = 3200, Ih = 3201, sc = 0, Lh = 1, In = "", De = "srgb", Ci = "srgb-linear", Qs = "linear", re = "srgb", ii = 7680, Co = 519, Dh = 512, Uh = 513, Nh = 514, rc = 515, Fh = 516, Oh = 517, kh = 518, zh = 519, Po = 35044, Io = "300 es", cn = 2e3, tr = 2001;
class Di {
    addEventListener(t, e) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e); }
    hasEventListener(t, e) { const n = this._listeners; return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1; }
    removeEventListener(t, e) { const n = this._listeners; if (n === void 0)
        return; const i = n[t]; if (i !== void 0) {
        const r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
    } }
    dispatchEvent(t) { const e = this._listeners; if (e === void 0)
        return; const n = e[t.type]; if (n !== void 0) {
        t.target = this;
        const i = n.slice(0);
        for (let r = 0, a = i.length; r < a; r++)
            i[r].call(this, t);
        t.target = null;
    } }
}
const Te = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Lo = 1234567;
const Ji = Math.PI / 180, rs = 180 / Math.PI;
function ti() { const s = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (Te[s & 255] + Te[s >> 8 & 255] + Te[s >> 16 & 255] + Te[s >> 24 & 255] + "-" + Te[t & 255] + Te[t >> 8 & 255] + "-" + Te[t >> 16 & 15 | 64] + Te[t >> 24 & 255] + "-" + Te[e & 63 | 128] + Te[e >> 8 & 255] + "-" + Te[e >> 16 & 255] + Te[e >> 24 & 255] + Te[n & 255] + Te[n >> 8 & 255] + Te[n >> 16 & 255] + Te[n >> 24 & 255]).toLowerCase(); }
function Yt(s, t, e) { return Math.max(t, Math.min(e, s)); }
function so(s, t) { return (s % t + t) % t; }
function Bh(s, t, e, n, i) { return n + (s - t) * (i - n) / (e - t); }
function Hh(s, t, e) { return s !== t ? (e - s) / (t - s) : 0; }
function Ki(s, t, e) { return (1 - e) * s + e * t; }
function Gh(s, t, e, n) { return Ki(s, t, 1 - Math.exp(-e * n)); }
function Vh(s, t = 1) { return t - Math.abs(so(s, t * 2) - t); }
function Wh(s, t, e) { return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * (3 - 2 * s)); }
function qh(s, t, e) { return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * s * (s * (s * 6 - 15) + 10)); }
function Xh(s, t) { return s + Math.floor(Math.random() * (t - s + 1)); }
function Yh(s, t) { return s + Math.random() * (t - s); }
function $h(s) { return s * (.5 - Math.random()); }
function jh(s) { s !== void 0 && (Lo = s); let t = Lo += 1831565813; return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296; }
function Zh(s) { return s * Ji; }
function Jh(s) { return s * rs; }
function Kh(s) { return (s & s - 1) === 0 && s !== 0; }
function Qh(s) { return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2)); }
function tu(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)); }
function eu(s, t, e, n, i) { const r = Math.cos, a = Math.sin, o = r(e / 2), c = a(e / 2), l = r((t + n) / 2), h = a((t + n) / 2), u = r((t - n) / 2), d = a((t - n) / 2), f = r((n - t) / 2), g = a((n - t) / 2); switch (i) {
    case "XYX":
        s.set(o * h, c * u, c * d, o * l);
        break;
    case "YZY":
        s.set(c * d, o * h, c * u, o * l);
        break;
    case "ZXZ":
        s.set(c * u, c * d, o * h, o * l);
        break;
    case "XZX":
        s.set(o * h, c * g, c * f, o * l);
        break;
    case "YXY":
        s.set(c * f, o * h, c * g, o * l);
        break;
    case "ZYZ":
        s.set(c * g, c * f, o * h, o * l);
        break;
    default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
} }
function xi(s, t) { switch (t.constructor) {
    case Float32Array: return s;
    case Uint32Array: return s / 4294967295;
    case Uint16Array: return s / 65535;
    case Uint8Array: return s / 255;
    case Int32Array: return Math.max(s / 2147483647, -1);
    case Int16Array: return Math.max(s / 32767, -1);
    case Int8Array: return Math.max(s / 127, -1);
    default: throw new Error("Invalid component type.");
} }
function Ie(s, t) { switch (t.constructor) {
    case Float32Array: return s;
    case Uint32Array: return Math.round(s * 4294967295);
    case Uint16Array: return Math.round(s * 65535);
    case Uint8Array: return Math.round(s * 255);
    case Int32Array: return Math.round(s * 2147483647);
    case Int16Array: return Math.round(s * 32767);
    case Int8Array: return Math.round(s * 127);
    default: throw new Error("Invalid component type.");
} }
const Ba = { DEG2RAD: Ji, RAD2DEG: rs, generateUUID: ti, clamp: Yt, euclideanModulo: so, mapLinear: Bh, inverseLerp: Hh, lerp: Ki, damp: Gh, pingpong: Vh, smoothstep: Wh, smootherstep: qh, randInt: Xh, randFloat: Yh, randFloatSpread: $h, seededRandom: jh, degToRad: Zh, radToDeg: Jh, isPowerOfTwo: Kh, ceilPowerOfTwo: Qh, floorPowerOfTwo: tu, setQuaternionFromProperEuler: eu, normalize: Ie, denormalize: xi };
class ct {
    constructor(t = 0, e = 0) { ct.prototype.isVector2 = !0, this.x = t, this.y = e; }
    get width() { return this.x; }
    set width(t) { this.x = t; }
    get height() { return this.y; }
    set height(t) { this.y = t; }
    set(t, e) { return this.x = t, this.y = e, this; }
    setScalar(t) { return this.x = t, this.y = t, this; }
    setX(t) { return this.x = t, this; }
    setY(t) { return this.y = t, this; }
    setComponent(t, e) { switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        default: throw new Error("index is out of range: " + t);
    } return this; }
    getComponent(t) { switch (t) {
        case 0: return this.x;
        case 1: return this.y;
        default: throw new Error("index is out of range: " + t);
    } }
    clone() { return new this.constructor(this.x, this.y); }
    copy(t) { return this.x = t.x, this.y = t.y, this; }
    add(t) { return this.x += t.x, this.y += t.y, this; }
    addScalar(t) { return this.x += t, this.y += t, this; }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this; }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this; }
    sub(t) { return this.x -= t.x, this.y -= t.y, this; }
    subScalar(t) { return this.x -= t, this.y -= t, this; }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this; }
    multiply(t) { return this.x *= t.x, this.y *= t.y, this; }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this; }
    divide(t) { return this.x /= t.x, this.y /= t.y, this; }
    divideScalar(t) { return this.multiplyScalar(1 / t); }
    applyMatrix3(t) { const e = this.x, n = this.y, i = t.elements; return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this; }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this; }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this; }
    clamp(t, e) { return this.x = Yt(this.x, t.x, e.x), this.y = Yt(this.y, t.y, e.y), this; }
    clampScalar(t, e) { return this.x = Yt(this.x, t, e), this.y = Yt(this.y, t, e), this; }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Yt(n, t, e)); }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this; }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this; }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this; }
    roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this; }
    negate() { return this.x = -this.x, this.y = -this.y, this; }
    dot(t) { return this.x * t.x + this.y * t.y; }
    cross(t) { return this.x * t.y - this.y * t.x; }
    lengthSq() { return this.x * this.x + this.y * this.y; }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y); }
    normalize() { return this.divideScalar(this.length() || 1); }
    angle() { return Math.atan2(-this.y, -this.x) + Math.PI; }
    angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0)
        return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(Yt(n, -1, 1)); }
    distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)); }
    distanceToSquared(t) { const e = this.x - t.x, n = this.y - t.y; return e * e + n * n; }
    manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y); }
    setLength(t) { return this.normalize().multiplyScalar(t); }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this; }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this; }
    equals(t) { return t.x === this.x && t.y === this.y; }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this; }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t; }
    fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this; }
    rotateAround(t, e) { const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y; return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this; }
    random() { return this.x = Math.random(), this.y = Math.random(), this; }
    *[Symbol.iterator]() { yield this.x, yield this.y; }
}
class Ui {
    constructor(t = 0, e = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i; }
    static slerpFlat(t, e, n, i, r, a, o) { let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3]; const d = r[a + 0], f = r[a + 1], g = r[a + 2], v = r[a + 3]; if (o === 0) {
        t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
        return;
    } if (o === 1) {
        t[e + 0] = d, t[e + 1] = f, t[e + 2] = g, t[e + 3] = v;
        return;
    } if (u !== v || c !== d || l !== f || h !== g) {
        let m = 1 - o;
        const p = c * d + l * f + h * g + u * v, E = p >= 0 ? 1 : -1, S = 1 - p * p;
        if (S > Number.EPSILON) {
            const P = Math.sqrt(S), A = Math.atan2(P, p * E);
            m = Math.sin(m * A) / P, o = Math.sin(o * A) / P;
        }
        const _ = o * E;
        if (c = c * m + d * _, l = l * m + f * _, h = h * m + g * _, u = u * m + v * _, m === 1 - o) {
            const P = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
            c *= P, l *= P, h *= P, u *= P;
        }
    } t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u; }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) { const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], f = r[a + 2], g = r[a + 3]; return t[e] = o * g + h * u + c * f - l * d, t[e + 1] = c * g + h * d + l * u - o * f, t[e + 2] = l * g + h * f + o * d - c * u, t[e + 3] = h * g - o * u - c * d - l * f, t; }
    get x() { return this._x; }
    set x(t) { this._x = t, this._onChangeCallback(); }
    get y() { return this._y; }
    set y(t) { this._y = t, this._onChangeCallback(); }
    get z() { return this._z; }
    set z(t) { this._z = t, this._onChangeCallback(); }
    get w() { return this._w; }
    set w(t) { this._w = t, this._onChangeCallback(); }
    set(t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this; }
    clone() { return new this.constructor(this._x, this._y, this._z, this._w); }
    copy(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this; }
    setFromEuler(t, e = !0) { const n = t._x, i = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(r / 2), d = c(n / 2), f = c(i / 2), g = c(r / 2); switch (a) {
        case "XYZ":
            this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
            break;
        case "YXZ":
            this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
            break;
        case "ZXY":
            this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
            break;
        case "ZYX":
            this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
            break;
        case "YZX":
            this._x = d * h * u + l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u - d * f * g;
            break;
        case "XZY":
            this._x = d * h * u - l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u + d * f * g;
            break;
        default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    } return e === !0 && this._onChangeCallback(), this; }
    setFromAxisAngle(t, e) { const n = e / 2, i = Math.sin(n); return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this; }
    setFromRotationMatrix(t) { const e = t.elements, n = e[0], i = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], d = n + o + u; if (d > 0) {
        const f = .5 / Math.sqrt(d + 1);
        this._w = .25 / f, this._x = (h - c) * f, this._y = (r - l) * f, this._z = (a - i) * f;
    }
    else if (n > o && n > u) {
        const f = 2 * Math.sqrt(1 + n - o - u);
        this._w = (h - c) / f, this._x = .25 * f, this._y = (i + a) / f, this._z = (r + l) / f;
    }
    else if (o > u) {
        const f = 2 * Math.sqrt(1 + o - n - u);
        this._w = (r - l) / f, this._x = (i + a) / f, this._y = .25 * f, this._z = (c + h) / f;
    }
    else {
        const f = 2 * Math.sqrt(1 + u - n - o);
        this._w = (a - i) / f, this._x = (r + l) / f, this._y = (c + h) / f, this._z = .25 * f;
    } return this._onChangeCallback(), this; }
    setFromUnitVectors(t, e) { let n = t.dot(e) + 1; return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize(); }
    angleTo(t) { return 2 * Math.acos(Math.abs(Yt(this.dot(t), -1, 1))); }
    rotateTowards(t, e) { const n = this.angleTo(t); if (n === 0)
        return this; const i = Math.min(1, e / n); return this.slerp(t, i), this; }
    identity() { return this.set(0, 0, 0, 1); }
    invert() { return this.conjugate(); }
    conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this; }
    dot(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w; }
    lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; }
    length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); }
    normalize() { let t = this.length(); return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this; }
    multiply(t) { return this.multiplyQuaternions(this, t); }
    premultiply(t) { return this.multiplyQuaternions(t, this); }
    multiplyQuaternions(t, e) { const n = t._x, i = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w; return this._x = n * h + a * o + i * l - r * c, this._y = i * h + a * c + r * o - n * l, this._z = r * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - r * l, this._onChangeCallback(), this; }
    slerp(t, e) { if (e === 0)
        return this; if (e === 1)
        return this.copy(t); const n = this._x, i = this._y, r = this._z, a = this._w; let o = a * t._w + n * t._x + i * t._y + r * t._z; if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
        return this._w = a, this._x = n, this._y = i, this._z = r, this; const c = 1 - o * o; if (c <= Number.EPSILON) {
        const f = 1 - e;
        return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * r + e * this._z, this.normalize(), this;
    } const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, d = Math.sin(e * h) / l; return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this; }
    slerpQuaternions(t, e, n) { return this.copy(t).slerp(e, n); }
    random() { const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n); return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e)); }
    equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w; }
    fromArray(t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this; }
    toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t; }
    fromBufferAttribute(t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this; }
    toJSON() { return this.toArray(); }
    _onChange(t) { return this._onChangeCallback = t, this; }
    _onChangeCallback() { }
    *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w; }
}
class T {
    constructor(t = 0, e = 0, n = 0) { T.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n; }
    set(t, e, n) { return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this; }
    setScalar(t) { return this.x = t, this.y = t, this.z = t, this; }
    setX(t) { return this.x = t, this; }
    setY(t) { return this.y = t, this; }
    setZ(t) { return this.z = t, this; }
    setComponent(t, e) { switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        default: throw new Error("index is out of range: " + t);
    } return this; }
    getComponent(t) { switch (t) {
        case 0: return this.x;
        case 1: return this.y;
        case 2: return this.z;
        default: throw new Error("index is out of range: " + t);
    } }
    clone() { return new this.constructor(this.x, this.y, this.z); }
    copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this; }
    add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this; }
    addScalar(t) { return this.x += t, this.y += t, this.z += t, this; }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this; }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this; }
    sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this; }
    subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this; }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this; }
    multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this; }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this; }
    multiplyVectors(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this; }
    applyEuler(t) { return this.applyQuaternion(Do.setFromEuler(t)); }
    applyAxisAngle(t, e) { return this.applyQuaternion(Do.setFromAxisAngle(t, e)); }
    applyMatrix3(t) { const e = this.x, n = this.y, i = this.z, r = t.elements; return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this; }
    applyNormalMatrix(t) { return this.applyMatrix3(t).normalize(); }
    applyMatrix4(t) { const e = this.x, n = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this; }
    applyQuaternion(t) { const e = this.x, n = this.y, i = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * i - o * n), h = 2 * (o * e - r * i), u = 2 * (r * n - a * e); return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - r * u, this.z = i + c * u + r * h - a * l, this; }
    project(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix); }
    unproject(t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld); }
    transformDirection(t) { const e = this.x, n = this.y, i = this.z, r = t.elements; return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize(); }
    divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this; }
    divideScalar(t) { return this.multiplyScalar(1 / t); }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this; }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this; }
    clamp(t, e) { return this.x = Yt(this.x, t.x, e.x), this.y = Yt(this.y, t.y, e.y), this.z = Yt(this.z, t.z, e.z), this; }
    clampScalar(t, e) { return this.x = Yt(this.x, t, e), this.y = Yt(this.y, t, e), this.z = Yt(this.z, t, e), this; }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Yt(n, t, e)); }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this; }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this; }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this; }
    roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this; }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this; }
    dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z; }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z; }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z); }
    normalize() { return this.divideScalar(this.length() || 1); }
    setLength(t) { return this.normalize().multiplyScalar(t); }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this; }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this; }
    cross(t) { return this.crossVectors(this, t); }
    crossVectors(t, e) { const n = t.x, i = t.y, r = t.z, a = e.x, o = e.y, c = e.z; return this.x = i * c - r * o, this.y = r * a - n * c, this.z = n * o - i * a, this; }
    projectOnVector(t) { const e = t.lengthSq(); if (e === 0)
        return this.set(0, 0, 0); const n = t.dot(this) / e; return this.copy(t).multiplyScalar(n); }
    projectOnPlane(t) { return mr.copy(this).projectOnVector(t), this.sub(mr); }
    reflect(t) { return this.sub(mr.copy(t).multiplyScalar(2 * this.dot(t))); }
    angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0)
        return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(Yt(n, -1, 1)); }
    distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)); }
    distanceToSquared(t) { const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z; return e * e + n * n + i * i; }
    manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z); }
    setFromSpherical(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta); }
    setFromSphericalCoords(t, e, n) { const i = Math.sin(e) * t; return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this; }
    setFromCylindrical(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y); }
    setFromCylindricalCoords(t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this; }
    setFromMatrixPosition(t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this; }
    setFromMatrixScale(t) { const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = i, this; }
    setFromMatrixColumn(t, e) { return this.fromArray(t.elements, e * 4); }
    setFromMatrix3Column(t, e) { return this.fromArray(t.elements, e * 3); }
    setFromEuler(t) { return this.x = t._x, this.y = t._y, this.z = t._z, this; }
    setFromColor(t) { return this.x = t.r, this.y = t.g, this.z = t.b, this; }
    equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z; }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this; }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t; }
    fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this; }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this; }
    randomDirection() { const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e); return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this; }
    *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z; }
}
const mr = new T, Do = new Ui;
class Vt {
    constructor(t, e, n, i, r, a, o, c, l) { Vt.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, c, l); }
    set(t, e, n, i, r, a, o, c, l) { const h = this.elements; return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = r, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this; }
    identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this; }
    copy(t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this; }
    extractBasis(t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this; }
    setFromMatrix4(t) { const e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this; }
    multiply(t) { return this.multiplyMatrices(this, t); }
    premultiply(t) { return this.multiplyMatrices(t, this); }
    multiplyMatrices(t, e) { const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], v = i[0], m = i[3], p = i[6], E = i[1], S = i[4], _ = i[7], P = i[2], A = i[5], I = i[8]; return r[0] = a * v + o * E + c * P, r[3] = a * m + o * S + c * A, r[6] = a * p + o * _ + c * I, r[1] = l * v + h * E + u * P, r[4] = l * m + h * S + u * A, r[7] = l * p + h * _ + u * I, r[2] = d * v + f * E + g * P, r[5] = d * m + f * S + g * A, r[8] = d * p + f * _ + g * I, this; }
    multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this; }
    determinant() { const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8]; return e * a * h - e * o * l - n * r * h + n * o * c + i * r * l - i * a * c; }
    invert() { const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, d = o * c - h * r, f = l * r - a * c, g = e * u + n * d + i * f; if (g === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const v = 1 / g; return t[0] = u * v, t[1] = (i * l - h * n) * v, t[2] = (o * n - i * a) * v, t[3] = d * v, t[4] = (h * e - i * c) * v, t[5] = (i * r - o * e) * v, t[6] = f * v, t[7] = (n * c - l * e) * v, t[8] = (a * e - n * r) * v, this; }
    transpose() { let t; const e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this; }
    getNormalMatrix(t) { return this.setFromMatrix4(t).invert().transpose(); }
    transposeIntoArray(t) { const e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this; }
    setUvTransform(t, e, n, i, r, a, o) { const c = Math.cos(r), l = Math.sin(r); return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -i * l, i * c, -i * (-l * a + c * o) + o + e, 0, 0, 1), this; }
    scale(t, e) { return this.premultiply(gr.makeScale(t, e)), this; }
    rotate(t) { return this.premultiply(gr.makeRotation(-t)), this; }
    translate(t, e) { return this.premultiply(gr.makeTranslation(t, e)), this; }
    makeTranslation(t, e) { return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this; }
    makeRotation(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this; }
    makeScale(t, e) { return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this; }
    equals(t) { const e = this.elements, n = t.elements; for (let i = 0; i < 9; i++)
        if (e[i] !== n[i])
            return !1; return !0; }
    fromArray(t, e = 0) { for (let n = 0; n < 9; n++)
        this.elements[n] = t[n + e]; return this; }
    toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t; }
    clone() { return new this.constructor().fromArray(this.elements); }
}
const gr = new Vt;
function ac(s) { for (let t = s.length - 1; t >= 0; --t)
    if (s[t] >= 65535)
        return !0; return !1; }
function er(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s); }
function nu() { const s = er("canvas"); return s.style.display = "block", s; }
const Uo = {};
function as(s) { s in Uo || (Uo[s] = !0, console.warn(s)); }
function iu(s, t, e) { return new Promise(function (n, i) { function r() { switch (s.clientWaitSync(t, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
    case s.WAIT_FAILED:
        i();
        break;
    case s.TIMEOUT_EXPIRED:
        setTimeout(r, e);
        break;
    default: n();
} } setTimeout(r, e); }); }
const No = new Vt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Fo = new Vt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function su() { const s = { enabled: !0, workingColorSpace: Ci, spaces: {}, convert: function (i, r, a) { return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === re && (i.r = Sn(i.r), i.g = Sn(i.g), i.b = Sn(i.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === re && (i.r = Ei(i.r), i.g = Ei(i.g), i.b = Ei(i.b))), i; }, workingToColorSpace: function (i, r) { return this.convert(i, this.workingColorSpace, r); }, colorSpaceToWorking: function (i, r) { return this.convert(i, r, this.workingColorSpace); }, getPrimaries: function (i) { return this.spaces[i].primaries; }, getTransfer: function (i) { return i === In ? Qs : this.spaces[i].transfer; }, getToneMappingMode: function (i) { return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard"; }, getLuminanceCoefficients: function (i, r = this.workingColorSpace) { return i.fromArray(this.spaces[r].luminanceCoefficients); }, define: function (i) { Object.assign(this.spaces, i); }, _getMatrix: function (i, r, a) { return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ); }, _getDrawingBufferColorSpace: function (i) { return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace; }, _getUnpackColorSpace: function (i = this.workingColorSpace) { return this.spaces[i].workingColorSpaceConfig.unpackColorSpace; }, fromWorkingColorSpace: function (i, r) { return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), s.workingToColorSpace(i, r); }, toWorkingColorSpace: function (i, r) { return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), s.colorSpaceToWorking(i, r); } }, t = [.64, .33, .3, .6, .15, .06], e = [.2126, .7152, .0722], n = [.3127, .329]; return s.define({ [Ci]: { primaries: t, whitePoint: n, transfer: Qs, toXYZ: No, fromXYZ: Fo, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: De }, outputColorSpaceConfig: { drawingBufferColorSpace: De } }, [De]: { primaries: t, whitePoint: n, transfer: re, toXYZ: No, fromXYZ: Fo, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: De } } }), s; }
const Qt = su();
function Sn(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4); }
function Ei(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055; }
let si;
class ru {
    static getDataURL(t, e = "image/png") { if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
        return t.src; let n; if (t instanceof HTMLCanvasElement)
        n = t;
    else {
        si === void 0 && (si = er("canvas")), si.width = t.width, si.height = t.height;
        const i = si.getContext("2d");
        t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), n = si;
    } return n.toDataURL(e); }
    static sRGBToLinear(t) { if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
        const e = er("canvas");
        e.width = t.width, e.height = t.height;
        const n = e.getContext("2d");
        n.drawImage(t, 0, 0, t.width, t.height);
        const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
        for (let a = 0; a < r.length; a++)
            r[a] = Sn(r[a] / 255) * 255;
        return n.putImageData(i, 0, 0), e;
    }
    else if (t.data) {
        const e = t.data.slice(0);
        for (let n = 0; n < e.length; n++)
            e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Sn(e[n] / 255) * 255) : e[n] = Sn(e[n]);
        return { data: e, width: t.width, height: t.height };
    }
    else
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t; }
}
let au = 0;
class ro {
    constructor(t = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: au++ }), this.uuid = ti(), this.data = t, this.dataReady = !0, this.version = 0; }
    getSize(t) { const e = this.data; return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t; }
    set needsUpdate(t) { t === !0 && this.version++; }
    toJSON(t) { const e = t === void 0 || typeof t == "string"; if (!e && t.images[this.uuid] !== void 0)
        return t.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) {
        let r;
        if (Array.isArray(i)) {
            r = [];
            for (let a = 0, o = i.length; a < o; a++)
                i[a].isDataTexture ? r.push(vr(i[a].image)) : r.push(vr(i[a]));
        }
        else
            r = vr(i);
        n.url = r;
    } return e || (t.images[this.uuid] = n), n; }
}
function vr(s) { return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? ru.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}); }
let ou = 0;
const xr = new T;
class Ce extends Di {
    constructor(t = Ce.DEFAULT_IMAGE, e = Ce.DEFAULT_MAPPING, n = Zn, i = Zn, r = on, a = Jn, o = Qe, c = un, l = Ce.DEFAULT_ANISOTROPY, h = In) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ou++ }), this.uuid = ti(), this.name = "", this.source = new ro(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ct(0, 0), this.repeat = new ct(1, 1), this.center = new ct(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Vt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0; }
    get width() { return this.source.getSize(xr).x; }
    get height() { return this.source.getSize(xr).y; }
    get depth() { return this.source.getSize(xr).z; }
    get image() { return this.source.data; }
    set image(t = null) { this.source.data = t; }
    updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y); }
    addUpdateRange(t, e) { this.updateRanges.push({ start: t, count: e }); }
    clearUpdateRanges() { this.updateRanges.length = 0; }
    clone() { return new this.constructor().copy(this); }
    copy(t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this; }
    setValues(t) { for (const e in t) {
        const n = t[e];
        if (n === void 0) {
            console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
            continue;
        }
        const i = this[e];
        if (i === void 0) {
            console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
            continue;
        }
        i && n && i.isVector2 && n.isVector2 || i && n && i.isVector3 && n.isVector3 || i && n && i.isMatrix3 && n.isMatrix3 ? i.copy(n) : this[e] = n;
    } }
    toJSON(t) { const e = t === void 0 || typeof t == "string"; if (!e && t.textures[this.uuid] !== void 0)
        return t.textures[this.uuid]; const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n; }
    dispose() { this.dispatchEvent({ type: "dispose" }); }
    transformUv(t) { if (this.mapping !== Zl)
        return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
        switch (this.wrapS) {
            case Ks:
                t.x = t.x - Math.floor(t.x);
                break;
            case Zn:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case ua:
                Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                break;
        } if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
            case Ks:
                t.y = t.y - Math.floor(t.y);
                break;
            case Zn:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case ua:
                Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                break;
        } return this.flipY && (t.y = 1 - t.y), t; }
    set needsUpdate(t) { t === !0 && (this.version++, this.source.needsUpdate = !0); }
    set needsPMREMUpdate(t) { t === !0 && this.pmremVersion++; }
}
Ce.DEFAULT_IMAGE = null;
Ce.DEFAULT_MAPPING = Zl;
Ce.DEFAULT_ANISOTROPY = 1;
class ae {
    constructor(t = 0, e = 0, n = 0, i = 1) { ae.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i; }
    get width() { return this.z; }
    set width(t) { this.z = t; }
    get height() { return this.w; }
    set height(t) { this.w = t; }
    set(t, e, n, i) { return this.x = t, this.y = e, this.z = n, this.w = i, this; }
    setScalar(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this; }
    setX(t) { return this.x = t, this; }
    setY(t) { return this.y = t, this; }
    setZ(t) { return this.z = t, this; }
    setW(t) { return this.w = t, this; }
    setComponent(t, e) { switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        case 3:
            this.w = e;
            break;
        default: throw new Error("index is out of range: " + t);
    } return this; }
    getComponent(t) { switch (t) {
        case 0: return this.x;
        case 1: return this.y;
        case 2: return this.z;
        case 3: return this.w;
        default: throw new Error("index is out of range: " + t);
    } }
    clone() { return new this.constructor(this.x, this.y, this.z, this.w); }
    copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this; }
    add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this; }
    addScalar(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this; }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this; }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this; }
    sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this; }
    subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this; }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this; }
    multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this; }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this; }
    applyMatrix4(t) { const e = this.x, n = this.y, i = this.z, r = this.w, a = t.elements; return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this; }
    divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this; }
    divideScalar(t) { return this.multiplyScalar(1 / t); }
    setAxisAngleFromQuaternion(t) { this.w = 2 * Math.acos(t.w); const e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this; }
    setAxisAngleFromRotationMatrix(t) { let e, n, i, r; const c = t.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], g = c[9], v = c[2], m = c[6], p = c[10]; if (Math.abs(h - d) < .01 && Math.abs(u - v) < .01 && Math.abs(g - m) < .01) {
        if (Math.abs(h + d) < .1 && Math.abs(u + v) < .1 && Math.abs(g + m) < .1 && Math.abs(l + f + p - 3) < .1)
            return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const S = (l + 1) / 2, _ = (f + 1) / 2, P = (p + 1) / 2, A = (h + d) / 4, I = (u + v) / 4, D = (g + m) / 4;
        return S > _ && S > P ? S < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(S), i = A / n, r = I / n) : _ > P ? _ < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_), n = A / i, r = D / i) : P < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(P), n = I / r, i = D / r), this.set(n, i, r, e), this;
    } let E = Math.sqrt((m - g) * (m - g) + (u - v) * (u - v) + (d - h) * (d - h)); return Math.abs(E) < .001 && (E = 1), this.x = (m - g) / E, this.y = (u - v) / E, this.z = (d - h) / E, this.w = Math.acos((l + f + p - 1) / 2), this; }
    setFromMatrixPosition(t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this; }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this; }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this; }
    clamp(t, e) { return this.x = Yt(this.x, t.x, e.x), this.y = Yt(this.y, t.y, e.y), this.z = Yt(this.z, t.z, e.z), this.w = Yt(this.w, t.w, e.w), this; }
    clampScalar(t, e) { return this.x = Yt(this.x, t, e), this.y = Yt(this.y, t, e), this.z = Yt(this.z, t, e), this.w = Yt(this.w, t, e), this; }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Yt(n, t, e)); }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this; }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this; }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this; }
    roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this; }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this; }
    dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w; }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); }
    normalize() { return this.divideScalar(this.length() || 1); }
    setLength(t) { return this.normalize().multiplyScalar(t); }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this; }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this; }
    equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w; }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this; }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t; }
    fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this; }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this; }
    *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w; }
}
class lu extends Di {
    constructor(t = 1, e = 1, n = {}) { super(), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: on, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: !1 }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new ae(0, 0, t, e), this.scissorTest = !1, this.viewport = new ae(0, 0, t, e); const i = { width: t, height: e, depth: n.depth }, r = new Ce(i); this.textures = []; const a = n.count; for (let o = 0; o < a; o++)
        this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this; this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview; }
    _setTextureOptions(t = {}) { const e = { minFilter: on, generateMipmaps: !1, flipY: !1, internalFormat: null }; t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat); for (let n = 0; n < this.textures.length; n++)
        this.textures[n].setValues(e); }
    get texture() { return this.textures[0]; }
    set texture(t) { this.textures[0] = t; }
    set depthTexture(t) { this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t; }
    get depthTexture() { return this._depthTexture; }
    setSize(t, e, n = 1) { if (this.width !== t || this.height !== e || this.depth !== n) {
        this.width = t, this.height = e, this.depth = n;
        for (let i = 0, r = this.textures.length; i < r; i++)
            this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n, this.textures[i].isArrayTexture = this.textures[i].image.depth > 1;
        this.dispose();
    } this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e); }
    clone() { return new this.constructor().copy(this); }
    copy(t) { this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0; for (let e = 0, n = t.textures.length; e < n; e++) {
        this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
        const i = Object.assign({}, t.textures[e].image);
        this.textures[e].source = new ro(i);
    } return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this; }
    dispose() { this.dispatchEvent({ type: "dispose" }); }
}
class Fn extends lu {
    constructor(t = 1, e = 1, n = {}) { super(t, e, n), this.isWebGLRenderTarget = !0; }
}
class oc extends Ce {
    constructor(t = null, e = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ve, this.minFilter = Ve, this.wrapR = Zn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set; }
    addLayerUpdate(t) { this.layerUpdates.add(t); }
    clearLayerUpdates() { this.layerUpdates.clear(); }
}
class cu extends Ce {
    constructor(t = null, e = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ve, this.minFilter = Ve, this.wrapR = Zn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1; }
}
class ei {
    constructor(t = new T(1 / 0, 1 / 0, 1 / 0), e = new T(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = t, this.max = e; }
    set(t, e) { return this.min.copy(t), this.max.copy(e), this; }
    setFromArray(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e += 3)
        this.expandByPoint(je.fromArray(t, e)); return this; }
    setFromBufferAttribute(t) { this.makeEmpty(); for (let e = 0, n = t.count; e < n; e++)
        this.expandByPoint(je.fromBufferAttribute(t, e)); return this; }
    setFromPoints(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++)
        this.expandByPoint(t[e]); return this; }
    setFromCenterAndSize(t, e) { const n = je.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this; }
    setFromObject(t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e); }
    clone() { return new this.constructor().copy(this); }
    copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this; }
    makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this; }
    isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; }
    getCenter(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5); }
    getSize(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min); }
    expandByPoint(t) { return this.min.min(t), this.max.max(t), this; }
    expandByVector(t) { return this.min.sub(t), this.max.add(t), this; }
    expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this; }
    expandByObject(t, e = !1) { t.updateWorldMatrix(!1, !1); const n = t.geometry; if (n !== void 0) {
        const r = n.getAttribute("position");
        if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
            for (let a = 0, o = r.count; a < o; a++)
                t.isMesh === !0 ? t.getVertexPosition(a, je) : je.fromBufferAttribute(r, a), je.applyMatrix4(t.matrixWorld), this.expandByPoint(je);
        else
            t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), _s.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), _s.copy(n.boundingBox)), _s.applyMatrix4(t.matrixWorld), this.union(_s);
    } const i = t.children; for (let r = 0, a = i.length; r < a; r++)
        this.expandByObject(i[r], e); return this; }
    containsPoint(t) { return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z; }
    containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z; }
    getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)); }
    intersectsBox(t) { return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z; }
    intersectsSphere(t) { return this.clampPoint(t.center, je), je.distanceToSquared(t.center) <= t.radius * t.radius; }
    intersectsPlane(t) { let e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant; }
    intersectsTriangle(t) { if (this.isEmpty())
        return !1; this.getCenter(Bi), ys.subVectors(this.max, Bi), ri.subVectors(t.a, Bi), ai.subVectors(t.b, Bi), oi.subVectors(t.c, Bi), wn.subVectors(ai, ri), Tn.subVectors(oi, ai), Bn.subVectors(ri, oi); let e = [0, -wn.z, wn.y, 0, -Tn.z, Tn.y, 0, -Bn.z, Bn.y, wn.z, 0, -wn.x, Tn.z, 0, -Tn.x, Bn.z, 0, -Bn.x, -wn.y, wn.x, 0, -Tn.y, Tn.x, 0, -Bn.y, Bn.x, 0]; return !_r(e, ri, ai, oi, ys) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !_r(e, ri, ai, oi, ys)) ? !1 : (Ms.crossVectors(wn, Tn), e = [Ms.x, Ms.y, Ms.z], _r(e, ri, ai, oi, ys)); }
    clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max); }
    distanceToPoint(t) { return this.clampPoint(t, je).distanceTo(t); }
    getBoundingSphere(t) { return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(je).length() * .5), t; }
    intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this; }
    union(t) { return this.min.min(t.min), this.max.max(t.max), this; }
    applyMatrix4(t) { return this.isEmpty() ? this : (mn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), mn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), mn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), mn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), mn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), mn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), mn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), mn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(mn), this); }
    translate(t) { return this.min.add(t), this.max.add(t), this; }
    equals(t) { return t.min.equals(this.min) && t.max.equals(this.max); }
    toJSON() { return { min: this.min.toArray(), max: this.max.toArray() }; }
    fromJSON(t) { return this.min.fromArray(t.min), this.max.fromArray(t.max), this; }
}
const mn = [new T, new T, new T, new T, new T, new T, new T, new T], je = new T, _s = new ei, ri = new T, ai = new T, oi = new T, wn = new T, Tn = new T, Bn = new T, Bi = new T, ys = new T, Ms = new T, Hn = new T;
function _r(s, t, e, n, i) { for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Hn.fromArray(s, r);
    const o = i.x * Math.abs(Hn.x) + i.y * Math.abs(Hn.y) + i.z * Math.abs(Hn.z), c = t.dot(Hn), l = e.dot(Hn), h = n.dot(Hn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
        return !1;
} return !0; }
const hu = new ei, Hi = new T, yr = new T;
class Ni {
    constructor(t = new T, e = -1) { this.isSphere = !0, this.center = t, this.radius = e; }
    set(t, e) { return this.center.copy(t), this.radius = e, this; }
    setFromPoints(t, e) { const n = this.center; e !== void 0 ? n.copy(e) : hu.setFromPoints(t).getCenter(n); let i = 0; for (let r = 0, a = t.length; r < a; r++)
        i = Math.max(i, n.distanceToSquared(t[r])); return this.radius = Math.sqrt(i), this; }
    copy(t) { return this.center.copy(t.center), this.radius = t.radius, this; }
    isEmpty() { return this.radius < 0; }
    makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this; }
    containsPoint(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius; }
    distanceToPoint(t) { return t.distanceTo(this.center) - this.radius; }
    intersectsSphere(t) { const e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e; }
    intersectsBox(t) { return t.intersectsSphere(this); }
    intersectsPlane(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius; }
    clampPoint(t, e) { const n = this.center.distanceToSquared(t); return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e; }
    getBoundingBox(t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t); }
    applyMatrix4(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this; }
    translate(t) { return this.center.add(t), this; }
    expandByPoint(t) { if (this.isEmpty())
        return this.center.copy(t), this.radius = 0, this; Hi.subVectors(t, this.center); const e = Hi.lengthSq(); if (e > this.radius * this.radius) {
        const n = Math.sqrt(e), i = (n - this.radius) * .5;
        this.center.addScaledVector(Hi, i / n), this.radius += i;
    } return this; }
    union(t) { return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (yr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Hi.copy(t.center).add(yr)), this.expandByPoint(Hi.copy(t.center).sub(yr))), this); }
    equals(t) { return t.center.equals(this.center) && t.radius === this.radius; }
    clone() { return new this.constructor().copy(this); }
    toJSON() { return { radius: this.radius, center: this.center.toArray() }; }
    fromJSON(t) { return this.radius = t.radius, this.center.fromArray(t.center), this; }
}
const gn = new T, Mr = new T, Ss = new T, An = new T, Sr = new T, bs = new T, br = new T;
class lc {
    constructor(t = new T, e = new T(0, 0, -1)) { this.origin = t, this.direction = e; }
    set(t, e) { return this.origin.copy(t), this.direction.copy(e), this; }
    copy(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this; }
    at(t, e) { return e.copy(this.origin).addScaledVector(this.direction, t); }
    lookAt(t) { return this.direction.copy(t).sub(this.origin).normalize(), this; }
    recast(t) { return this.origin.copy(this.at(t, gn)), this; }
    closestPointToPoint(t, e) { e.subVectors(t, this.origin); const n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n); }
    distanceToPoint(t) { return Math.sqrt(this.distanceSqToPoint(t)); }
    distanceSqToPoint(t) { const e = gn.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (gn.copy(this.origin).addScaledVector(this.direction, e), gn.distanceToSquared(t)); }
    distanceSqToSegment(t, e, n, i) { Mr.copy(t).add(e).multiplyScalar(.5), Ss.copy(e).sub(t).normalize(), An.copy(this.origin).sub(Mr); const r = t.distanceTo(e) * .5, a = -this.direction.dot(Ss), o = An.dot(this.direction), c = -An.dot(Ss), l = An.lengthSq(), h = Math.abs(1 - a * a); let u, d, f, g; if (h > 0)
        if (u = a * c - o, d = a * o - c, g = r * h, u >= 0)
            if (d >= -g)
                if (d <= g) {
                    const v = 1 / h;
                    u *= v, d *= v, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
                }
                else
                    d = r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
            else
                d = -r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
        else
            d <= -g ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -c), r), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l);
    else
        d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Mr).addScaledVector(Ss, d), f; }
    intersectSphere(t, e) { gn.subVectors(t.center, this.origin); const n = gn.dot(this.direction), i = gn.dot(gn) - n * n, r = t.radius * t.radius; if (i > r)
        return null; const a = Math.sqrt(r - i), o = n - a, c = n + a; return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e); }
    intersectsSphere(t) { return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius; }
    distanceToPlane(t) { const e = t.normal.dot(this.direction); if (e === 0)
        return t.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null; }
    intersectPlane(t, e) { const n = this.distanceToPlane(t); return n === null ? null : this.at(n, e); }
    intersectsPlane(t) { const e = t.distanceToPoint(this.origin); return e === 0 || t.normal.dot(this.direction) * e < 0; }
    intersectBox(t, e) { let n, i, r, a, o, c; const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return l >= 0 ? (n = (t.min.x - d.x) * l, i = (t.max.x - d.x) * l) : (n = (t.max.x - d.x) * l, i = (t.min.x - d.x) * l), h >= 0 ? (r = (t.min.y - d.y) * h, a = (t.max.y - d.y) * h) : (r = (t.max.y - d.y) * h, a = (t.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (t.min.z - d.z) * u, c = (t.max.z - d.z) * u) : (o = (t.max.z - d.z) * u, c = (t.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, e); }
    intersectsBox(t) { return this.intersectBox(t, gn) !== null; }
    intersectTriangle(t, e, n, i, r) { Sr.subVectors(e, t), bs.subVectors(n, t), br.crossVectors(Sr, bs); let a = this.direction.dot(br), o; if (a > 0) {
        if (i)
            return null;
        o = 1;
    }
    else if (a < 0)
        o = -1, a = -a;
    else
        return null; An.subVectors(this.origin, t); const c = o * this.direction.dot(bs.crossVectors(An, bs)); if (c < 0)
        return null; const l = o * this.direction.dot(Sr.cross(An)); if (l < 0 || c + l > a)
        return null; const h = -o * An.dot(br); return h < 0 ? null : this.at(h / a, r); }
    applyMatrix4(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this; }
    equals(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction); }
    clone() { return new this.constructor().copy(this); }
}
class le {
    constructor(t, e, n, i, r, a, o, c, l, h, u, d, f, g, v, m) { le.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, c, l, h, u, d, f, g, v, m); }
    set(t, e, n, i, r, a, o, c, l, h, u, d, f, g, v, m) { const p = this.elements; return p[0] = t, p[4] = e, p[8] = n, p[12] = i, p[1] = r, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = v, p[15] = m, this; }
    identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }
    clone() { return new le().fromArray(this.elements); }
    copy(t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this; }
    copyPosition(t) { const e = this.elements, n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this; }
    setFromMatrix3(t) { const e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this; }
    extractBasis(t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this; }
    makeBasis(t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this; }
    extractRotation(t) { const e = this.elements, n = t.elements, i = 1 / li.setFromMatrixColumn(t, 0).length(), r = 1 / li.setFromMatrixColumn(t, 1).length(), a = 1 / li.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; }
    makeRotationFromEuler(t) { const e = this.elements, n = t.x, i = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), u = Math.sin(r); if (t.order === "XYZ") {
        const d = a * h, f = a * u, g = o * h, v = o * u;
        e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = f + g * l, e[5] = d - v * l, e[9] = -o * c, e[2] = v - d * l, e[6] = g + f * l, e[10] = a * c;
    }
    else if (t.order === "YXZ") {
        const d = c * h, f = c * u, g = l * h, v = l * u;
        e[0] = d + v * o, e[4] = g * o - f, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = f * o - g, e[6] = v + d * o, e[10] = a * c;
    }
    else if (t.order === "ZXY") {
        const d = c * h, f = c * u, g = l * h, v = l * u;
        e[0] = d - v * o, e[4] = -a * u, e[8] = g + f * o, e[1] = f + g * o, e[5] = a * h, e[9] = v - d * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    }
    else if (t.order === "ZYX") {
        const d = a * h, f = a * u, g = o * h, v = o * u;
        e[0] = c * h, e[4] = g * l - f, e[8] = d * l + v, e[1] = c * u, e[5] = v * l + d, e[9] = f * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    }
    else if (t.order === "YZX") {
        const d = a * c, f = a * l, g = o * c, v = o * l;
        e[0] = c * h, e[4] = v - d * u, e[8] = g * u + f, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = f * u + g, e[10] = d - v * u;
    }
    else if (t.order === "XZY") {
        const d = a * c, f = a * l, g = o * c, v = o * l;
        e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = d * u + v, e[5] = a * h, e[9] = f * u - g, e[2] = g * u - f, e[6] = o * h, e[10] = v * u + d;
    } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; }
    makeRotationFromQuaternion(t) { return this.compose(uu, t, du); }
    lookAt(t, e, n) { const i = this.elements; return Be.subVectors(t, e), Be.lengthSq() === 0 && (Be.z = 1), Be.normalize(), Rn.crossVectors(n, Be), Rn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Be.x += 1e-4 : Be.z += 1e-4, Be.normalize(), Rn.crossVectors(n, Be)), Rn.normalize(), Es.crossVectors(Be, Rn), i[0] = Rn.x, i[4] = Es.x, i[8] = Be.x, i[1] = Rn.y, i[5] = Es.y, i[9] = Be.y, i[2] = Rn.z, i[6] = Es.z, i[10] = Be.z, this; }
    multiply(t) { return this.multiplyMatrices(this, t); }
    premultiply(t) { return this.multiplyMatrices(t, this); }
    multiplyMatrices(t, e) { const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], v = n[6], m = n[10], p = n[14], E = n[3], S = n[7], _ = n[11], P = n[15], A = i[0], I = i[4], D = i[8], b = i[12], M = i[1], L = i[5], k = i[9], H = i[13], Y = i[2], V = i[6], X = i[10], Q = i[14], W = i[3], dt = i[7], xt = i[11], Mt = i[15]; return r[0] = a * A + o * M + c * Y + l * W, r[4] = a * I + o * L + c * V + l * dt, r[8] = a * D + o * k + c * X + l * xt, r[12] = a * b + o * H + c * Q + l * Mt, r[1] = h * A + u * M + d * Y + f * W, r[5] = h * I + u * L + d * V + f * dt, r[9] = h * D + u * k + d * X + f * xt, r[13] = h * b + u * H + d * Q + f * Mt, r[2] = g * A + v * M + m * Y + p * W, r[6] = g * I + v * L + m * V + p * dt, r[10] = g * D + v * k + m * X + p * xt, r[14] = g * b + v * H + m * Q + p * Mt, r[3] = E * A + S * M + _ * Y + P * W, r[7] = E * I + S * L + _ * V + P * dt, r[11] = E * D + S * k + _ * X + P * xt, r[15] = E * b + S * H + _ * Q + P * Mt, this; }
    multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this; }
    determinant() { const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], d = t[10], f = t[14], g = t[3], v = t[7], m = t[11], p = t[15]; return g * (+r * c * u - i * l * u - r * o * d + n * l * d + i * o * f - n * c * f) + v * (+e * c * f - e * l * d + r * a * d - i * a * f + i * l * h - r * c * h) + m * (+e * l * u - e * o * f - r * a * u + n * a * f + r * o * h - n * l * h) + p * (-i * o * h - e * c * u + e * o * d + i * a * u - n * a * d + n * c * h); }
    transpose() { const t = this.elements; let e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this; }
    setPosition(t, e, n) { const i = this.elements; return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this; }
    invert() { const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], d = t[10], f = t[11], g = t[12], v = t[13], m = t[14], p = t[15], E = u * m * l - v * d * l + v * c * f - o * m * f - u * c * p + o * d * p, S = g * d * l - h * m * l - g * c * f + a * m * f + h * c * p - a * d * p, _ = h * v * l - g * u * l + g * o * f - a * v * f - h * o * p + a * u * p, P = g * u * c - h * v * c - g * o * d + a * v * d + h * o * m - a * u * m, A = e * E + n * S + i * _ + r * P; if (A === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const I = 1 / A; return t[0] = E * I, t[1] = (v * d * r - u * m * r - v * i * f + n * m * f + u * i * p - n * d * p) * I, t[2] = (o * m * r - v * c * r + v * i * l - n * m * l - o * i * p + n * c * p) * I, t[3] = (u * c * r - o * d * r - u * i * l + n * d * l + o * i * f - n * c * f) * I, t[4] = S * I, t[5] = (h * m * r - g * d * r + g * i * f - e * m * f - h * i * p + e * d * p) * I, t[6] = (g * c * r - a * m * r - g * i * l + e * m * l + a * i * p - e * c * p) * I, t[7] = (a * d * r - h * c * r + h * i * l - e * d * l - a * i * f + e * c * f) * I, t[8] = _ * I, t[9] = (g * u * r - h * v * r - g * n * f + e * v * f + h * n * p - e * u * p) * I, t[10] = (a * v * r - g * o * r + g * n * l - e * v * l - a * n * p + e * o * p) * I, t[11] = (h * o * r - a * u * r - h * n * l + e * u * l + a * n * f - e * o * f) * I, t[12] = P * I, t[13] = (h * v * i - g * u * i + g * n * d - e * v * d - h * n * m + e * u * m) * I, t[14] = (g * o * i - a * v * i - g * n * c + e * v * c + a * n * m - e * o * m) * I, t[15] = (a * u * i - h * o * i + h * n * c - e * u * c - a * n * d + e * o * d) * I, this; }
    scale(t) { const e = this.elements, n = t.x, i = t.y, r = t.z; return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this; }
    getMaxScaleOnAxis() { const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, i)); }
    makeTranslation(t, e, n) { return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this; }
    makeRotationX(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this; }
    makeRotationY(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this; }
    makeRotationZ(t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }
    makeRotationAxis(t, e) { const n = Math.cos(e), i = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, h = r * o; return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, h * o + n, h * c - i * a, 0, l * c - i * o, h * c + i * a, r * c * c + n, 0, 0, 0, 0, 1), this; }
    makeScale(t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this; }
    makeShear(t, e, n, i, r, a) { return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this; }
    compose(t, e, n) { const i = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, h = a + a, u = o + o, d = r * l, f = r * h, g = r * u, v = a * h, m = a * u, p = o * u, E = c * l, S = c * h, _ = c * u, P = n.x, A = n.y, I = n.z; return i[0] = (1 - (v + p)) * P, i[1] = (f + _) * P, i[2] = (g - S) * P, i[3] = 0, i[4] = (f - _) * A, i[5] = (1 - (d + p)) * A, i[6] = (m + E) * A, i[7] = 0, i[8] = (g + S) * I, i[9] = (m - E) * I, i[10] = (1 - (d + v)) * I, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this; }
    decompose(t, e, n) { const i = this.elements; let r = li.set(i[0], i[1], i[2]).length(); const a = li.set(i[4], i[5], i[6]).length(), o = li.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ze.copy(this); const l = 1 / r, h = 1 / a, u = 1 / o; return Ze.elements[0] *= l, Ze.elements[1] *= l, Ze.elements[2] *= l, Ze.elements[4] *= h, Ze.elements[5] *= h, Ze.elements[6] *= h, Ze.elements[8] *= u, Ze.elements[9] *= u, Ze.elements[10] *= u, e.setFromRotationMatrix(Ze), n.x = r, n.y = a, n.z = o, this; }
    makePerspective(t, e, n, i, r, a, o = cn, c = !1) { const l = this.elements, h = 2 * r / (e - t), u = 2 * r / (n - i), d = (e + t) / (e - t), f = (n + i) / (n - i); let g, v; if (c)
        g = r / (a - r), v = a * r / (a - r);
    else if (o === cn)
        g = -(a + r) / (a - r), v = -2 * a * r / (a - r);
    else if (o === tr)
        g = -a / (a - r), v = -a * r / (a - r);
    else
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o); return l[0] = h, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this; }
    makeOrthographic(t, e, n, i, r, a, o = cn, c = !1) { const l = this.elements, h = 2 / (e - t), u = 2 / (n - i), d = -(e + t) / (e - t), f = -(n + i) / (n - i); let g, v; if (c)
        g = 1 / (a - r), v = a / (a - r);
    else if (o === cn)
        g = -2 / (a - r), v = -(a + r) / (a - r);
    else if (o === tr)
        g = -1 / (a - r), v = -r / (a - r);
    else
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o); return l[0] = h, l[4] = 0, l[8] = 0, l[12] = d, l[1] = 0, l[5] = u, l[9] = 0, l[13] = f, l[2] = 0, l[6] = 0, l[10] = g, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this; }
    equals(t) { const e = this.elements, n = t.elements; for (let i = 0; i < 16; i++)
        if (e[i] !== n[i])
            return !1; return !0; }
    fromArray(t, e = 0) { for (let n = 0; n < 16; n++)
        this.elements[n] = t[n + e]; return this; }
    toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t; }
}
const li = new T, Ze = new le, uu = new T(0, 0, 0), du = new T(1, 1, 1), Rn = new T, Es = new T, Be = new T, Oo = new le, ko = new Ui;
class $e {
    constructor(t = 0, e = 0, n = 0, i = $e.DEFAULT_ORDER) { this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i; }
    get x() { return this._x; }
    set x(t) { this._x = t, this._onChangeCallback(); }
    get y() { return this._y; }
    set y(t) { this._y = t, this._onChangeCallback(); }
    get z() { return this._z; }
    set z(t) { this._z = t, this._onChangeCallback(); }
    get order() { return this._order; }
    set order(t) { this._order = t, this._onChangeCallback(); }
    set(t, e, n, i = this._order) { return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this; }
    clone() { return new this.constructor(this._x, this._y, this._z, this._order); }
    copy(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this; }
    setFromRotationMatrix(t, e = this._order, n = !0) { const i = t.elements, r = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10]; switch (e) {
        case "XYZ":
            this._y = Math.asin(Yt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, l), this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-Yt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(Yt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
            break;
        case "ZYX":
            this._y = Math.asin(-Yt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
            break;
        case "YZX":
            this._z = Math.asin(Yt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, f));
            break;
        case "XZY":
            this._z = Math.asin(-Yt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
            break;
        default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    } return this._order = e, n === !0 && this._onChangeCallback(), this; }
    setFromQuaternion(t, e, n) { return Oo.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Oo, e, n); }
    setFromVector3(t, e = this._order) { return this.set(t.x, t.y, t.z, e); }
    reorder(t) { return ko.setFromEuler(this), this.setFromQuaternion(ko, t); }
    equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order; }
    fromArray(t) { return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this; }
    toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t; }
    _onChange(t) { return this._onChangeCallback = t, this; }
    _onChangeCallback() { }
    *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order; }
}
$e.DEFAULT_ORDER = "XYZ";
class cc {
    constructor() { this.mask = 1; }
    set(t) { this.mask = (1 << t | 0) >>> 0; }
    enable(t) { this.mask |= 1 << t | 0; }
    enableAll() { this.mask = -1; }
    toggle(t) { this.mask ^= 1 << t | 0; }
    disable(t) { this.mask &= ~(1 << t | 0); }
    disableAll() { this.mask = 0; }
    test(t) { return (this.mask & t.mask) !== 0; }
    isEnabled(t) { return (this.mask & (1 << t | 0)) !== 0; }
}
let fu = 0;
const zo = new T, ci = new Ui, vn = new le, ws = new T, Gi = new T, pu = new T, mu = new Ui, Bo = new T(1, 0, 0), Ho = new T(0, 1, 0), Go = new T(0, 0, 1), Vo = { type: "added" }, gu = { type: "removed" }, hi = { type: "childadded", child: null }, Er = { type: "childremoved", child: null };
class Me extends Di {
    constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: fu++ }), this.uuid = ti(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Me.DEFAULT_UP.clone(); const t = new T, e = new $e, n = new Ui, i = new T(1, 1, 1); function r() { n.setFromEuler(e, !1); } function a() { e.setFromQuaternion(n, void 0, !1); } e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new le }, normalMatrix: { value: new Vt } }), this.matrix = new le, this.matrixWorld = new le, this.matrixAutoUpdate = Me.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new cc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {}; }
    onBeforeShadow() { }
    onAfterShadow() { }
    onBeforeRender() { }
    onAfterRender() { }
    applyMatrix4(t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale); }
    applyQuaternion(t) { return this.quaternion.premultiply(t), this; }
    setRotationFromAxisAngle(t, e) { this.quaternion.setFromAxisAngle(t, e); }
    setRotationFromEuler(t) { this.quaternion.setFromEuler(t, !0); }
    setRotationFromMatrix(t) { this.quaternion.setFromRotationMatrix(t); }
    setRotationFromQuaternion(t) { this.quaternion.copy(t); }
    rotateOnAxis(t, e) { return ci.setFromAxisAngle(t, e), this.quaternion.multiply(ci), this; }
    rotateOnWorldAxis(t, e) { return ci.setFromAxisAngle(t, e), this.quaternion.premultiply(ci), this; }
    rotateX(t) { return this.rotateOnAxis(Bo, t); }
    rotateY(t) { return this.rotateOnAxis(Ho, t); }
    rotateZ(t) { return this.rotateOnAxis(Go, t); }
    translateOnAxis(t, e) { return zo.copy(t).applyQuaternion(this.quaternion), this.position.add(zo.multiplyScalar(e)), this; }
    translateX(t) { return this.translateOnAxis(Bo, t); }
    translateY(t) { return this.translateOnAxis(Ho, t); }
    translateZ(t) { return this.translateOnAxis(Go, t); }
    localToWorld(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld); }
    worldToLocal(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(vn.copy(this.matrixWorld).invert()); }
    lookAt(t, e, n) { t.isVector3 ? ws.copy(t) : ws.set(t, e, n); const i = this.parent; this.updateWorldMatrix(!0, !1), Gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vn.lookAt(Gi, ws, this.up) : vn.lookAt(ws, Gi, this.up), this.quaternion.setFromRotationMatrix(vn), i && (vn.extractRotation(i.matrixWorld), ci.setFromRotationMatrix(vn), this.quaternion.premultiply(ci.invert())); }
    add(t) { if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++)
            this.add(arguments[e]);
        return this;
    } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Vo), hi.child = t, this.dispatchEvent(hi), hi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this); }
    remove(t) { if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++)
            this.remove(arguments[n]);
        return this;
    } const e = this.children.indexOf(t); return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(gu), Er.child = t, this.dispatchEvent(Er), Er.child = null), this; }
    removeFromParent() { const t = this.parent; return t !== null && t.remove(this), this; }
    clear() { return this.remove(...this.children); }
    attach(t) { return this.updateWorldMatrix(!0, !1), vn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), vn.multiply(t.parent.matrixWorld)), t.applyMatrix4(vn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Vo), hi.child = t, this.dispatchEvent(hi), hi.child = null, this; }
    getObjectById(t) { return this.getObjectByProperty("id", t); }
    getObjectByName(t) { return this.getObjectByProperty("name", t); }
    getObjectByProperty(t, e) { if (this[t] === e)
        return this; for (let n = 0, i = this.children.length; n < i; n++) {
        const a = this.children[n].getObjectByProperty(t, e);
        if (a !== void 0)
            return a;
    } }
    getObjectsByProperty(t, e, n = []) { this[t] === e && n.push(this); const i = this.children; for (let r = 0, a = i.length; r < a; r++)
        i[r].getObjectsByProperty(t, e, n); return n; }
    getWorldPosition(t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld); }
    getWorldQuaternion(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, t, pu), t; }
    getWorldScale(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, mu, t), t; }
    getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize(); }
    raycast() { }
    traverse(t) { t(this); const e = this.children; for (let n = 0, i = e.length; n < i; n++)
        e[n].traverse(t); }
    traverseVisible(t) { if (this.visible === !1)
        return; t(this); const e = this.children; for (let n = 0, i = e.length; n < i; n++)
        e[n].traverseVisible(t); }
    traverseAncestors(t) { const e = this.parent; e !== null && (t(e), e.traverseAncestors(t)); }
    updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0; }
    updateMatrixWorld(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0); const e = this.children; for (let n = 0, i = e.length; n < i; n++)
        e[n].updateMatrixWorld(t); }
    updateWorldMatrix(t, e) { const n = this.parent; if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
        const i = this.children;
        for (let r = 0, a = i.length; r < a; r++)
            i[r].updateWorldMatrix(!1, !0);
    } }
    toJSON(t) { const e = t === void 0 || typeof t == "string", n = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map(o => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map(o => ({ ...o })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(t), i.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON())); function r(o, c) { return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid; } if (this.isScene)
        this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const o = this.geometry.parameters;
        if (o !== void 0 && o.shapes !== void 0) {
            const c = o.shapes;
            if (Array.isArray(c))
                for (let l = 0, h = c.length; l < h; l++) {
                    const u = c[l];
                    r(t.shapes, u);
                }
            else
                r(t.shapes, c);
        }
    } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
        if (Array.isArray(this.material)) {
            const o = [];
            for (let c = 0, l = this.material.length; c < l; c++)
                o.push(r(t.materials, this.material[c]));
            i.material = o;
        }
        else
            i.material = r(t.materials, this.material); if (this.children.length > 0) {
        i.children = [];
        for (let o = 0; o < this.children.length; o++)
            i.children.push(this.children[o].toJSON(t).object);
    } if (this.animations.length > 0) {
        i.animations = [];
        for (let o = 0; o < this.animations.length; o++) {
            const c = this.animations[o];
            i.animations.push(r(t.animations, c));
        }
    } if (e) {
        const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), f = a(t.animations), g = a(t.nodes);
        o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    } return n.object = i, n; function a(o) { const c = []; for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
    } return c; } }
    clone(t) { return new this.constructor().copy(this, t); }
    copy(t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
        for (let n = 0; n < t.children.length; n++) {
            const i = t.children[n];
            this.add(i.clone());
        } return this; }
}
Me.DEFAULT_UP = new T(0, 1, 0);
Me.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Je = new T, xn = new T, wr = new T, _n = new T, ui = new T, di = new T, Wo = new T, Tr = new T, Ar = new T, Rr = new T, Cr = new ae, Pr = new ae, Ir = new ae;
class Ke {
    constructor(t = new T, e = new T, n = new T) { this.a = t, this.b = e, this.c = n; }
    static getNormal(t, e, n, i) { i.subVectors(n, e), Je.subVectors(t, e), i.cross(Je); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0); }
    static getBarycoord(t, e, n, i, r) { Je.subVectors(i, e), xn.subVectors(n, e), wr.subVectors(t, e); const a = Je.dot(Je), o = Je.dot(xn), c = Je.dot(wr), l = xn.dot(xn), h = xn.dot(wr), u = a * l - o * o; if (u === 0)
        return r.set(0, 0, 0), null; const d = 1 / u, f = (l * c - o * h) * d, g = (a * h - o * c) * d; return r.set(1 - f - g, g, f); }
    static containsPoint(t, e, n, i) { return this.getBarycoord(t, e, n, i, _n) === null ? !1 : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1; }
    static getInterpolation(t, e, n, i, r, a, o, c) { return this.getBarycoord(t, e, n, i, _n) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, _n.x), c.addScaledVector(a, _n.y), c.addScaledVector(o, _n.z), c); }
    static getInterpolatedAttribute(t, e, n, i, r, a) { return Cr.setScalar(0), Pr.setScalar(0), Ir.setScalar(0), Cr.fromBufferAttribute(t, e), Pr.fromBufferAttribute(t, n), Ir.fromBufferAttribute(t, i), a.setScalar(0), a.addScaledVector(Cr, r.x), a.addScaledVector(Pr, r.y), a.addScaledVector(Ir, r.z), a; }
    static isFrontFacing(t, e, n, i) { return Je.subVectors(n, e), xn.subVectors(t, e), Je.cross(xn).dot(i) < 0; }
    set(t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this; }
    setFromPointsAndIndices(t, e, n, i) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this; }
    setFromAttributeAndIndices(t, e, n, i) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this; }
    clone() { return new this.constructor().copy(this); }
    copy(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this; }
    getArea() { return Je.subVectors(this.c, this.b), xn.subVectors(this.a, this.b), Je.cross(xn).length() * .5; }
    getMidpoint(t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3); }
    getNormal(t) { return Ke.getNormal(this.a, this.b, this.c, t); }
    getPlane(t) { return t.setFromCoplanarPoints(this.a, this.b, this.c); }
    getBarycoord(t, e) { return Ke.getBarycoord(t, this.a, this.b, this.c, e); }
    getInterpolation(t, e, n, i, r) { return Ke.getInterpolation(t, this.a, this.b, this.c, e, n, i, r); }
    containsPoint(t) { return Ke.containsPoint(t, this.a, this.b, this.c); }
    isFrontFacing(t) { return Ke.isFrontFacing(this.a, this.b, this.c, t); }
    intersectsBox(t) { return t.intersectsTriangle(this); }
    closestPointToPoint(t, e) { const n = this.a, i = this.b, r = this.c; let a, o; ui.subVectors(i, n), di.subVectors(r, n), Tr.subVectors(t, n); const c = ui.dot(Tr), l = di.dot(Tr); if (c <= 0 && l <= 0)
        return e.copy(n); Ar.subVectors(t, i); const h = ui.dot(Ar), u = di.dot(Ar); if (h >= 0 && u <= h)
        return e.copy(i); const d = c * u - h * l; if (d <= 0 && c >= 0 && h <= 0)
        return a = c / (c - h), e.copy(n).addScaledVector(ui, a); Rr.subVectors(t, r); const f = ui.dot(Rr), g = di.dot(Rr); if (g >= 0 && f <= g)
        return e.copy(r); const v = f * l - c * g; if (v <= 0 && l >= 0 && g <= 0)
        return o = l / (l - g), e.copy(n).addScaledVector(di, o); const m = h * g - f * u; if (m <= 0 && u - h >= 0 && f - g >= 0)
        return Wo.subVectors(r, i), o = (u - h) / (u - h + (f - g)), e.copy(i).addScaledVector(Wo, o); const p = 1 / (m + v + d); return a = v * p, o = d * p, e.copy(n).addScaledVector(ui, a).addScaledVector(di, o); }
    equals(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c); }
}
const hc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Cn = { h: 0, s: 0, l: 0 }, Ts = { h: 0, s: 0, l: 0 };
function Lr(s, t, e) { return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s + (t - s) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s + (t - s) * 6 * (2 / 3 - e) : s; }
class Pt {
    constructor(t, e, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n); }
    set(t, e, n) { if (e === void 0 && n === void 0) {
        const i = t;
        i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    }
    else
        this.setRGB(t, e, n); return this; }
    setScalar(t) { return this.r = t, this.g = t, this.b = t, this; }
    setHex(t, e = De) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Qt.colorSpaceToWorking(this, e), this; }
    setRGB(t, e, n, i = Qt.workingColorSpace) { return this.r = t, this.g = e, this.b = n, Qt.colorSpaceToWorking(this, i), this; }
    setHSL(t, e, n, i = Qt.workingColorSpace) { if (t = so(t, 1), e = Yt(e, 0, 1), n = Yt(n, 0, 1), e === 0)
        this.r = this.g = this.b = n;
    else {
        const r = n <= .5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
        this.r = Lr(a, r, t + 1 / 3), this.g = Lr(a, r, t), this.b = Lr(a, r, t - 1 / 3);
    } return Qt.colorSpaceToWorking(this, i), this; }
    setStyle(t, e = De) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored."); } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
        let r;
        const a = i[1], o = i[2];
        switch (a) {
            case "rgb":
            case "rgba":
                if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                break;
            case "hsl":
            case "hsla":
                if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                break;
            default: console.warn("THREE.Color: Unknown color model " + t);
        }
    }
    else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
        const r = i[1], a = r.length;
        if (a === 3)
            return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
        if (a === 6)
            return this.setHex(parseInt(r, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t);
    }
    else if (t && t.length > 0)
        return this.setColorName(t, e); return this; }
    setColorName(t, e = De) { const n = hc[t.toLowerCase()]; return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this; }
    clone() { return new this.constructor(this.r, this.g, this.b); }
    copy(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this; }
    copySRGBToLinear(t) { return this.r = Sn(t.r), this.g = Sn(t.g), this.b = Sn(t.b), this; }
    copyLinearToSRGB(t) { return this.r = Ei(t.r), this.g = Ei(t.g), this.b = Ei(t.b), this; }
    convertSRGBToLinear() { return this.copySRGBToLinear(this), this; }
    convertLinearToSRGB() { return this.copyLinearToSRGB(this), this; }
    getHex(t = De) { return Qt.workingToColorSpace(Ae.copy(this), t), Math.round(Yt(Ae.r * 255, 0, 255)) * 65536 + Math.round(Yt(Ae.g * 255, 0, 255)) * 256 + Math.round(Yt(Ae.b * 255, 0, 255)); }
    getHexString(t = De) { return ("000000" + this.getHex(t).toString(16)).slice(-6); }
    getHSL(t, e = Qt.workingColorSpace) { Qt.workingToColorSpace(Ae.copy(this), e); const n = Ae.r, i = Ae.g, r = Ae.b, a = Math.max(n, i, r), o = Math.min(n, i, r); let c, l; const h = (o + a) / 2; if (o === a)
        c = 0, l = 0;
    else {
        const u = a - o;
        switch (l = h <= .5 ? u / (a + o) : u / (2 - a - o), a) {
            case n:
                c = (i - r) / u + (i < r ? 6 : 0);
                break;
            case i:
                c = (r - n) / u + 2;
                break;
            case r:
                c = (n - i) / u + 4;
                break;
        }
        c /= 6;
    } return t.h = c, t.s = l, t.l = h, t; }
    getRGB(t, e = Qt.workingColorSpace) { return Qt.workingToColorSpace(Ae.copy(this), e), t.r = Ae.r, t.g = Ae.g, t.b = Ae.b, t; }
    getStyle(t = De) { Qt.workingToColorSpace(Ae.copy(this), t); const e = Ae.r, n = Ae.g, i = Ae.b; return t !== De ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`; }
    offsetHSL(t, e, n) { return this.getHSL(Cn), this.setHSL(Cn.h + t, Cn.s + e, Cn.l + n); }
    add(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this; }
    addColors(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this; }
    addScalar(t) { return this.r += t, this.g += t, this.b += t, this; }
    sub(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this; }
    multiply(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this; }
    multiplyScalar(t) { return this.r *= t, this.g *= t, this.b *= t, this; }
    lerp(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this; }
    lerpColors(t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this; }
    lerpHSL(t, e) { this.getHSL(Cn), t.getHSL(Ts); const n = Ki(Cn.h, Ts.h, e), i = Ki(Cn.s, Ts.s, e), r = Ki(Cn.l, Ts.l, e); return this.setHSL(n, i, r), this; }
    setFromVector3(t) { return this.r = t.x, this.g = t.y, this.b = t.z, this; }
    applyMatrix3(t) { const e = this.r, n = this.g, i = this.b, r = t.elements; return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this; }
    equals(t) { return t.r === this.r && t.g === this.g && t.b === this.b; }
    fromArray(t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this; }
    toArray(t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t; }
    fromBufferAttribute(t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this; }
    toJSON() { return this.getHex(); }
    *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b; }
}
const Ae = new Pt;
Pt.NAMES = hc;
let vu = 0;
class Fi extends Di {
    constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: vu++ }), this.uuid = ti(), this.name = "", this.type = "Material", this.blending = bi, this.side = En, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ta, this.blendDst = ea, this.blendEquation = $n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ti, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Co, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ii, this.stencilZFail = ii, this.stencilZPass = ii, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0; }
    get alphaTest() { return this._alphaTest; }
    set alphaTest(t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t; }
    onBeforeRender() { }
    onBeforeCompile() { }
    customProgramCacheKey() { return this.onBeforeCompile.toString(); }
    setValues(t) { if (t !== void 0)
        for (const e in t) {
            const n = t[e];
            if (n === void 0) {
                console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                continue;
            }
            const i = this[e];
            if (i === void 0) {
                console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                continue;
            }
            i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
        } }
    toJSON(t) { const e = t === void 0 || typeof t == "string"; e && (t = { textures: {}, images: {} }); const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== bi && (n.blending = this.blending), this.side !== En && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ta && (n.blendSrc = this.blendSrc), this.blendDst !== ea && (n.blendDst = this.blendDst), this.blendEquation !== $n && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ti && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Co && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ii && (n.stencilFail = this.stencilFail), this.stencilZFail !== ii && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ii && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(r) { const a = []; for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
    } return a; } if (e) {
        const r = i(t.textures), a = i(t.images);
        r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    } return n; }
    clone() { return new this.constructor().copy(this); }
    copy(t) { this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; const e = t.clippingPlanes; let n = null; if (e !== null) {
        const i = e.length;
        n = new Array(i);
        for (let r = 0; r !== i; ++r)
            n[r] = e[r].clone();
    } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this; }
    dispose() { this.dispatchEvent({ type: "dispose" }); }
    set needsUpdate(t) { t === !0 && this.version++; }
}
class bn extends Fi {
    constructor(t) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $e, this.combine = $l, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t); }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this; }
}
const xe = new T, As = new ct;
let xu = 0;
class Se {
    constructor(t, e, n = !1) { if (Array.isArray(t))
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: xu++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Po, this.updateRanges = [], this.gpuType = ln, this.version = 0; }
    onUploadCallback() { }
    set needsUpdate(t) { t === !0 && this.version++; }
    setUsage(t) { return this.usage = t, this; }
    addUpdateRange(t, e) { this.updateRanges.push({ start: t, count: e }); }
    clearUpdateRanges() { this.updateRanges.length = 0; }
    copy(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this; }
    copyAt(t, e, n) { t *= this.itemSize, n *= e.itemSize; for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i]; return this; }
    copyArray(t) { return this.array.set(t), this; }
    applyMatrix3(t) { if (this.itemSize === 2)
        for (let e = 0, n = this.count; e < n; e++)
            As.fromBufferAttribute(this, e), As.applyMatrix3(t), this.setXY(e, As.x, As.y);
    else if (this.itemSize === 3)
        for (let e = 0, n = this.count; e < n; e++)
            xe.fromBufferAttribute(this, e), xe.applyMatrix3(t), this.setXYZ(e, xe.x, xe.y, xe.z); return this; }
    applyMatrix4(t) { for (let e = 0, n = this.count; e < n; e++)
        xe.fromBufferAttribute(this, e), xe.applyMatrix4(t), this.setXYZ(e, xe.x, xe.y, xe.z); return this; }
    applyNormalMatrix(t) { for (let e = 0, n = this.count; e < n; e++)
        xe.fromBufferAttribute(this, e), xe.applyNormalMatrix(t), this.setXYZ(e, xe.x, xe.y, xe.z); return this; }
    transformDirection(t) { for (let e = 0, n = this.count; e < n; e++)
        xe.fromBufferAttribute(this, e), xe.transformDirection(t), this.setXYZ(e, xe.x, xe.y, xe.z); return this; }
    set(t, e = 0) { return this.array.set(t, e), this; }
    getComponent(t, e) { let n = this.array[t * this.itemSize + e]; return this.normalized && (n = xi(n, this.array)), n; }
    setComponent(t, e, n) { return this.normalized && (n = Ie(n, this.array)), this.array[t * this.itemSize + e] = n, this; }
    getX(t) { let e = this.array[t * this.itemSize]; return this.normalized && (e = xi(e, this.array)), e; }
    setX(t, e) { return this.normalized && (e = Ie(e, this.array)), this.array[t * this.itemSize] = e, this; }
    getY(t) { let e = this.array[t * this.itemSize + 1]; return this.normalized && (e = xi(e, this.array)), e; }
    setY(t, e) { return this.normalized && (e = Ie(e, this.array)), this.array[t * this.itemSize + 1] = e, this; }
    getZ(t) { let e = this.array[t * this.itemSize + 2]; return this.normalized && (e = xi(e, this.array)), e; }
    setZ(t, e) { return this.normalized && (e = Ie(e, this.array)), this.array[t * this.itemSize + 2] = e, this; }
    getW(t) { let e = this.array[t * this.itemSize + 3]; return this.normalized && (e = xi(e, this.array)), e; }
    setW(t, e) { return this.normalized && (e = Ie(e, this.array)), this.array[t * this.itemSize + 3] = e, this; }
    setXY(t, e, n) { return t *= this.itemSize, this.normalized && (e = Ie(e, this.array), n = Ie(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this; }
    setXYZ(t, e, n, i) { return t *= this.itemSize, this.normalized && (e = Ie(e, this.array), n = Ie(n, this.array), i = Ie(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this; }
    setXYZW(t, e, n, i, r) { return t *= this.itemSize, this.normalized && (e = Ie(e, this.array), n = Ie(n, this.array), i = Ie(i, this.array), r = Ie(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this; }
    onUpload(t) { return this.onUploadCallback = t, this; }
    clone() { return new this.constructor(this.array, this.itemSize).copy(this); }
    toJSON() { const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (t.name = this.name), this.usage !== Po && (t.usage = this.usage), t; }
}
class uc extends Se {
    constructor(t, e, n) { super(new Uint16Array(t), e, n); }
}
class dc extends Se {
    constructor(t, e, n) { super(new Uint32Array(t), e, n); }
}
class ne extends Se {
    constructor(t, e, n) { super(new Float32Array(t), e, n); }
}
let _u = 0;
const Xe = new le, Dr = new Me, fi = new T, He = new ei, Vi = new ei, we = new T;
class _e extends Di {
    constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _u++ }), this.uuid = ti(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}; }
    getIndex() { return this.index; }
    setIndex(t) { return Array.isArray(t) ? this.index = new (ac(t) ? dc : uc)(t, 1) : this.index = t, this; }
    setIndirect(t) { return this.indirect = t, this; }
    getIndirect() { return this.indirect; }
    getAttribute(t) { return this.attributes[t]; }
    setAttribute(t, e) { return this.attributes[t] = e, this; }
    deleteAttribute(t) { return delete this.attributes[t], this; }
    hasAttribute(t) { return this.attributes[t] !== void 0; }
    addGroup(t, e, n = 0) { this.groups.push({ start: t, count: e, materialIndex: n }); }
    clearGroups() { this.groups = []; }
    setDrawRange(t, e) { this.drawRange.start = t, this.drawRange.count = e; }
    applyMatrix4(t) { const e = this.attributes.position; e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) {
        const r = new Vt().getNormalMatrix(t);
        n.applyNormalMatrix(r), n.needsUpdate = !0;
    } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this; }
    applyQuaternion(t) { return Xe.makeRotationFromQuaternion(t), this.applyMatrix4(Xe), this; }
    rotateX(t) { return Xe.makeRotationX(t), this.applyMatrix4(Xe), this; }
    rotateY(t) { return Xe.makeRotationY(t), this.applyMatrix4(Xe), this; }
    rotateZ(t) { return Xe.makeRotationZ(t), this.applyMatrix4(Xe), this; }
    translate(t, e, n) { return Xe.makeTranslation(t, e, n), this.applyMatrix4(Xe), this; }
    scale(t, e, n) { return Xe.makeScale(t, e, n), this.applyMatrix4(Xe), this; }
    lookAt(t) { return Dr.lookAt(t), Dr.updateMatrix(), this.applyMatrix4(Dr.matrix), this; }
    center() { return this.computeBoundingBox(), this.boundingBox.getCenter(fi).negate(), this.translate(fi.x, fi.y, fi.z), this; }
    setFromPoints(t) { const e = this.getAttribute("position"); if (e === void 0) {
        const n = [];
        for (let i = 0, r = t.length; i < r; i++) {
            const a = t[i];
            n.push(a.x, a.y, a.z || 0);
        }
        this.setAttribute("position", new ne(n, 3));
    }
    else {
        const n = Math.min(t.length, e.count);
        for (let i = 0; i < n; i++) {
            const r = t[i];
            e.setXYZ(i, r.x, r.y, r.z || 0);
        }
        t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    } return this; }
    computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new ei); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new T(-1 / 0, -1 / 0, -1 / 0), new T(1 / 0, 1 / 0, 1 / 0));
        return;
    } if (t !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(t), e)
            for (let n = 0, i = e.length; n < i; n++) {
                const r = e[n];
                He.setFromBufferAttribute(r), this.morphTargetsRelative ? (we.addVectors(this.boundingBox.min, He.min), this.boundingBox.expandByPoint(we), we.addVectors(this.boundingBox.max, He.max), this.boundingBox.expandByPoint(we)) : (this.boundingBox.expandByPoint(He.min), this.boundingBox.expandByPoint(He.max));
            }
    }
    else
        this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this); }
    computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Ni); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new T, 1 / 0);
        return;
    } if (t) {
        const n = this.boundingSphere.center;
        if (He.setFromBufferAttribute(t), e)
            for (let r = 0, a = e.length; r < a; r++) {
                const o = e[r];
                Vi.setFromBufferAttribute(o), this.morphTargetsRelative ? (we.addVectors(He.min, Vi.min), He.expandByPoint(we), we.addVectors(He.max, Vi.max), He.expandByPoint(we)) : (He.expandByPoint(Vi.min), He.expandByPoint(Vi.max));
            }
        He.getCenter(n);
        let i = 0;
        for (let r = 0, a = t.count; r < a; r++)
            we.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(we));
        if (e)
            for (let r = 0, a = e.length; r < a; r++) {
                const o = e[r], c = this.morphTargetsRelative;
                for (let l = 0, h = o.count; l < h; l++)
                    we.fromBufferAttribute(o, l), c && (fi.fromBufferAttribute(t, l), we.add(fi)), i = Math.max(i, n.distanceToSquared(we));
            }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    } }
    computeTangents() { const t = this.index, e = this.attributes; if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
    } const n = e.position, i = e.normal, r = e.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Se(new Float32Array(4 * n.count), 4)); const a = this.getAttribute("tangent"), o = [], c = []; for (let D = 0; D < n.count; D++)
        o[D] = new T, c[D] = new T; const l = new T, h = new T, u = new T, d = new ct, f = new ct, g = new ct, v = new T, m = new T; function p(D, b, M) { l.fromBufferAttribute(n, D), h.fromBufferAttribute(n, b), u.fromBufferAttribute(n, M), d.fromBufferAttribute(r, D), f.fromBufferAttribute(r, b), g.fromBufferAttribute(r, M), h.sub(l), u.sub(l), f.sub(d), g.sub(d); const L = 1 / (f.x * g.y - g.x * f.y); isFinite(L) && (v.copy(h).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(L), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -g.x).multiplyScalar(L), o[D].add(v), o[b].add(v), o[M].add(v), c[D].add(m), c[b].add(m), c[M].add(m)); } let E = this.groups; E.length === 0 && (E = [{ start: 0, count: t.count }]); for (let D = 0, b = E.length; D < b; ++D) {
        const M = E[D], L = M.start, k = M.count;
        for (let H = L, Y = L + k; H < Y; H += 3)
            p(t.getX(H + 0), t.getX(H + 1), t.getX(H + 2));
    } const S = new T, _ = new T, P = new T, A = new T; function I(D) { P.fromBufferAttribute(i, D), A.copy(P); const b = o[D]; S.copy(b), S.sub(P.multiplyScalar(P.dot(b))).normalize(), _.crossVectors(A, b); const L = _.dot(c[D]) < 0 ? -1 : 1; a.setXYZW(D, S.x, S.y, S.z, L); } for (let D = 0, b = E.length; D < b; ++D) {
        const M = E[D], L = M.start, k = M.count;
        for (let H = L, Y = L + k; H < Y; H += 3)
            I(t.getX(H + 0)), I(t.getX(H + 1)), I(t.getX(H + 2));
    } }
    computeVertexNormals() { const t = this.index, e = this.getAttribute("position"); if (e !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0)
            n = new Se(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
        else
            for (let d = 0, f = n.count; d < f; d++)
                n.setXYZ(d, 0, 0, 0);
        const i = new T, r = new T, a = new T, o = new T, c = new T, l = new T, h = new T, u = new T;
        if (t)
            for (let d = 0, f = t.count; d < f; d += 3) {
                const g = t.getX(d + 0), v = t.getX(d + 1), m = t.getX(d + 2);
                i.fromBufferAttribute(e, g), r.fromBufferAttribute(e, v), a.fromBufferAttribute(e, m), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, v), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
            }
        else
            for (let d = 0, f = e.count; d < f; d += 3)
                i.fromBufferAttribute(e, d + 0), r.fromBufferAttribute(e, d + 1), a.fromBufferAttribute(e, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
        this.normalizeNormals(), n.needsUpdate = !0;
    } }
    normalizeNormals() { const t = this.attributes.normal; for (let e = 0, n = t.count; e < n; e++)
        we.fromBufferAttribute(t, e), we.normalize(), t.setXYZ(e, we.x, we.y, we.z); }
    toNonIndexed() { function t(o, c) { const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h); let f = 0, g = 0; for (let v = 0, m = c.length; v < m; v++) {
        o.isInterleavedBufferAttribute ? f = c[v] * o.data.stride + o.offset : f = c[v] * h;
        for (let p = 0; p < h; p++)
            d[g++] = l[f++];
    } return new Se(d, h, u); } if (this.index === null)
        return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const e = new _e, n = this.index.array, i = this.attributes; for (const o in i) {
        const c = i[o], l = t(c, n);
        e.setAttribute(o, l);
    } const r = this.morphAttributes; for (const o in r) {
        const c = [], l = r[o];
        for (let h = 0, u = l.length; h < u; h++) {
            const d = l[h], f = t(d, n);
            c.push(f);
        }
        e.morphAttributes[o] = c;
    } e.morphTargetsRelative = this.morphTargetsRelative; const a = this.groups; for (let o = 0, c = a.length; o < c; o++) {
        const l = a[o];
        e.addGroup(l.start, l.count, l.materialIndex);
    } return e; }
    toJSON() { const t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
        const c = this.parameters;
        for (const l in c)
            c[l] !== void 0 && (t[l] = c[l]);
        return t;
    } t.data = { attributes: {} }; const e = this.index; e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); const n = this.attributes; for (const c in n) {
        const l = n[c];
        t.data.attributes[c] = l.toJSON(t.data);
    } const i = {}; let r = !1; for (const c in this.morphAttributes) {
        const l = this.morphAttributes[c], h = [];
        for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u];
            h.push(f.toJSON(t.data));
        }
        h.length > 0 && (i[c] = h, r = !0);
    } r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative); const a = this.groups; a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a))); const o = this.boundingSphere; return o !== null && (t.data.boundingSphere = o.toJSON()), t; }
    clone() { return new this.constructor().copy(this); }
    copy(t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const e = {}; this.name = t.name; const n = t.index; n !== null && this.setIndex(n.clone()); const i = t.attributes; for (const l in i) {
        const h = i[l];
        this.setAttribute(l, h.clone(e));
    } const r = t.morphAttributes; for (const l in r) {
        const h = [], u = r[l];
        for (let d = 0, f = u.length; d < f; d++)
            h.push(u[d].clone(e));
        this.morphAttributes[l] = h;
    } this.morphTargetsRelative = t.morphTargetsRelative; const a = t.groups; for (let l = 0, h = a.length; l < h; l++) {
        const u = a[l];
        this.addGroup(u.start, u.count, u.materialIndex);
    } const o = t.boundingBox; o !== null && (this.boundingBox = o.clone()); const c = t.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this; }
    dispose() { this.dispatchEvent({ type: "dispose" }); }
}
const qo = new le, Gn = new lc, Rs = new Ni, Xo = new T, Cs = new T, Ps = new T, Is = new T, Ur = new T, Ls = new T, Yo = new T, Ds = new T;
class qt extends Me {
    constructor(t = new _e, e = new bn) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets(); }
    copy(t, e) { return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this; }
    updateMorphTargets() { const e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (let r = 0, a = i.length; r < a; r++) {
                const o = i[r].name || String(r);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
            }
        }
    } }
    getVertexPosition(t, e) { const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative; e.fromBufferAttribute(i, t); const o = this.morphTargetInfluences; if (r && o) {
        Ls.set(0, 0, 0);
        for (let c = 0, l = r.length; c < l; c++) {
            const h = o[c], u = r[c];
            h !== 0 && (Ur.fromBufferAttribute(u, t), a ? Ls.addScaledVector(Ur, h) : Ls.addScaledVector(Ur.sub(e), h));
        }
        e.add(Ls);
    } return e; }
    raycast(t, e) { const n = this.geometry, i = this.material, r = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Rs.copy(n.boundingSphere), Rs.applyMatrix4(r), Gn.copy(t.ray).recast(t.near), !(Rs.containsPoint(Gn.origin) === !1 && (Gn.intersectSphere(Rs, Xo) === null || Gn.origin.distanceToSquared(Xo) > (t.far - t.near) ** 2)) && (qo.copy(r).invert(), Gn.copy(t.ray).applyMatrix4(qo), !(n.boundingBox !== null && Gn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, Gn))); }
    _computeIntersections(t, e, n) { let i; const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange; if (o !== null)
        if (Array.isArray(a))
            for (let g = 0, v = d.length; g < v; g++) {
                const m = d[g], p = a[m.materialIndex], E = Math.max(m.start, f.start), S = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
                for (let _ = E, P = S; _ < P; _ += 3) {
                    const A = o.getX(_), I = o.getX(_ + 1), D = o.getX(_ + 2);
                    i = Us(this, p, t, n, l, h, u, A, I, D), i && (i.faceIndex = Math.floor(_ / 3), i.face.materialIndex = m.materialIndex, e.push(i));
                }
            }
        else {
            const g = Math.max(0, f.start), v = Math.min(o.count, f.start + f.count);
            for (let m = g, p = v; m < p; m += 3) {
                const E = o.getX(m), S = o.getX(m + 1), _ = o.getX(m + 2);
                i = Us(this, a, t, n, l, h, u, E, S, _), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
            }
        }
    else if (c !== void 0)
        if (Array.isArray(a))
            for (let g = 0, v = d.length; g < v; g++) {
                const m = d[g], p = a[m.materialIndex], E = Math.max(m.start, f.start), S = Math.min(c.count, Math.min(m.start + m.count, f.start + f.count));
                for (let _ = E, P = S; _ < P; _ += 3) {
                    const A = _, I = _ + 1, D = _ + 2;
                    i = Us(this, p, t, n, l, h, u, A, I, D), i && (i.faceIndex = Math.floor(_ / 3), i.face.materialIndex = m.materialIndex, e.push(i));
                }
            }
        else {
            const g = Math.max(0, f.start), v = Math.min(c.count, f.start + f.count);
            for (let m = g, p = v; m < p; m += 3) {
                const E = m, S = m + 1, _ = m + 2;
                i = Us(this, a, t, n, l, h, u, E, S, _), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
            }
        } }
}
function yu(s, t, e, n, i, r, a, o) { let c; if (t.side === Re ? c = n.intersectTriangle(a, r, i, !0, o) : c = n.intersectTriangle(i, r, a, t.side === En, o), c === null)
    return null; Ds.copy(o), Ds.applyMatrix4(s.matrixWorld); const l = e.ray.origin.distanceTo(Ds); return l < e.near || l > e.far ? null : { distance: l, point: Ds.clone(), object: s }; }
function Us(s, t, e, n, i, r, a, o, c, l) { s.getVertexPosition(o, Cs), s.getVertexPosition(c, Ps), s.getVertexPosition(l, Is); const h = yu(s, t, e, n, Cs, Ps, Is, Yo); if (h) {
    const u = new T;
    Ke.getBarycoord(Yo, Cs, Ps, Is, u), i && (h.uv = Ke.getInterpolatedAttribute(i, o, c, l, u, new ct)), r && (h.uv1 = Ke.getInterpolatedAttribute(r, o, c, l, u, new ct)), a && (h.normal = Ke.getInterpolatedAttribute(a, o, c, l, u, new T), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: c, c: l, normal: new T, materialIndex: 0 };
    Ke.getNormal(Cs, Ps, Is, d.normal), h.face = d, h.barycoord = u;
} return h; }
class Oi extends _e {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: a }; const o = this; i = Math.floor(i), r = Math.floor(r), a = Math.floor(a); const c = [], l = [], h = [], u = []; let d = 0, f = 0; g("z", "y", "x", -1, -1, n, e, t, a, r, 0), g("z", "y", "x", 1, -1, n, e, -t, a, r, 1), g("x", "z", "y", 1, 1, t, n, e, i, a, 2), g("x", "z", "y", 1, -1, t, n, -e, i, a, 3), g("x", "y", "z", 1, -1, t, e, n, i, r, 4), g("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new ne(l, 3)), this.setAttribute("normal", new ne(h, 3)), this.setAttribute("uv", new ne(u, 2)); function g(v, m, p, E, S, _, P, A, I, D, b) { const M = _ / I, L = P / D, k = _ / 2, H = P / 2, Y = A / 2, V = I + 1, X = D + 1; let Q = 0, W = 0; const dt = new T; for (let xt = 0; xt < X; xt++) {
        const Mt = xt * L - H;
        for (let Ht = 0; Ht < V; Ht++) {
            const Zt = Ht * M - k;
            dt[v] = Zt * E, dt[m] = Mt * S, dt[p] = Y, l.push(dt.x, dt.y, dt.z), dt[v] = 0, dt[m] = 0, dt[p] = A > 0 ? 1 : -1, h.push(dt.x, dt.y, dt.z), u.push(Ht / I), u.push(1 - xt / D), Q += 1;
        }
    } for (let xt = 0; xt < D; xt++)
        for (let Mt = 0; Mt < I; Mt++) {
            const Ht = d + Mt + V * xt, Zt = d + Mt + V * (xt + 1), ie = d + (Mt + 1) + V * (xt + 1), Jt = d + (Mt + 1) + V * xt;
            c.push(Ht, Zt, Jt), c.push(Zt, ie, Jt), W += 6;
        } o.addGroup(f, W, b), f += W, d += Q; } }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new Oi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments); }
}
function Pi(s) { const t = {}; for (const e in s) {
    t[e] = {};
    for (const n in s[e]) {
        const i = s[e][n];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
} return t; }
function Le(s) { const t = {}; for (let e = 0; e < s.length; e++) {
    const n = Pi(s[e]);
    for (const i in n)
        t[i] = n[i];
} return t; }
function Mu(s) { const t = []; for (let e = 0; e < s.length; e++)
    t.push(s[e].clone()); return t; }
function fc(s) { const t = s.getRenderTarget(); return t === null ? s.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Qt.workingColorSpace; }
const Su = { clone: Pi, merge: Le };
var bu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Eu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class en extends Fi {
    constructor(t) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = bu, this.fragmentShader = Eu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t); }
    copy(t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Pi(t.uniforms), this.uniformsGroups = Mu(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this; }
    toJSON(t) { const e = super.toJSON(t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (const i in this.uniforms) {
        const a = this.uniforms[i].value;
        a && a.isTexture ? e.uniforms[i] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[i] = { type: "m4", value: a.toArray() } : e.uniforms[i] = { value: a };
    } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping; const n = {}; for (const i in this.extensions)
        this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e; }
}
class pc extends Me {
    constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new le, this.projectionMatrix = new le, this.projectionMatrixInverse = new le, this.coordinateSystem = cn, this._reversedDepth = !1; }
    get reversedDepth() { return this._reversedDepth; }
    copy(t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this; }
    getWorldDirection(t) { return super.getWorldDirection(t).negate(); }
    updateMatrixWorld(t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }
    updateWorldMatrix(t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }
    clone() { return new this.constructor().copy(this); }
}
const Pn = new T, $o = new ct, jo = new ct;
class Fe extends pc {
    constructor(t = 50, e = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix(); }
    copy(t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this; }
    setFocalLength(t) { const e = .5 * this.getFilmHeight() / t; this.fov = rs * 2 * Math.atan(e), this.updateProjectionMatrix(); }
    getFocalLength() { const t = Math.tan(Ji * .5 * this.fov); return .5 * this.getFilmHeight() / t; }
    getEffectiveFOV() { return rs * 2 * Math.atan(Math.tan(Ji * .5 * this.fov) / this.zoom); }
    getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1); }
    getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1); }
    getViewBounds(t, e, n) { Pn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), e.set(Pn.x, Pn.y).multiplyScalar(-t / Pn.z), Pn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(Pn.x, Pn.y).multiplyScalar(-t / Pn.z); }
    getViewSize(t, e) { return this.getViewBounds(t, $o, jo), e.subVectors(jo, $o); }
    setViewOffset(t, e, n, i, r, a) { this.aspect = t / e, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix(); }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix(); }
    updateProjectionMatrix() { const t = this.near; let e = t * Math.tan(Ji * .5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -.5 * i; const a = this.view; if (this.view !== null && this.view.enabled) {
        const c = a.fullWidth, l = a.fullHeight;
        r += a.offsetX * i / c, e -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    } const o = this.filmOffset; o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); }
    toJSON(t) { const e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e; }
}
const pi = -90, mi = 1;
class wu extends Me {
    constructor(t, e, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const i = new Fe(pi, mi, t, e); i.layers = this.layers, this.add(i); const r = new Fe(pi, mi, t, e); r.layers = this.layers, this.add(r); const a = new Fe(pi, mi, t, e); a.layers = this.layers, this.add(a); const o = new Fe(pi, mi, t, e); o.layers = this.layers, this.add(o); const c = new Fe(pi, mi, t, e); c.layers = this.layers, this.add(c); const l = new Fe(pi, mi, t, e); l.layers = this.layers, this.add(l); }
    updateCoordinateSystem() { const t = this.coordinateSystem, e = this.children.concat(), [n, i, r, a, o, c] = e; for (const l of e)
        this.remove(l); if (t === cn)
        n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === tr)
        n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
        throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t); for (const l of e)
        this.add(l), l.updateMatrixWorld(); }
    update(t, e) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem()); const [r, a, o, c, l, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), g = t.xr.enabled; t.xr.enabled = !1; const v = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, i), t.render(e, r), t.setRenderTarget(n, 1, i), t.render(e, a), t.setRenderTarget(n, 2, i), t.render(e, o), t.setRenderTarget(n, 3, i), t.render(e, c), t.setRenderTarget(n, 4, i), t.render(e, l), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0; }
}
class mc extends Ce {
    constructor(t = [], e = Ai, n, i, r, a, o, c, l, h) { super(t, e, n, i, r, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1; }
    get images() { return this.image; }
    set images(t) { this.image = t; }
}
class Tu extends Fn {
    constructor(t = 1, e = {}) { super(t, t, e), this.isWebGLCubeRenderTarget = !0; const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n]; this.texture = new mc(i), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0; }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new Oi(5, 5, 5), r = new en({ name: "CubemapFromEquirect", uniforms: Pi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Re, blending: Dn });
        r.uniforms.tEquirect.value = e;
        const a = new qt(i, r), o = e.minFilter;
        return e.minFilter === Jn && (e.minFilter = on), new wu(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
    }
    clear(t, e = !0, n = !0, i = !0) { const r = t.getRenderTarget(); for (let a = 0; a < 6; a++)
        t.setRenderTarget(this, a), t.clear(e, n, i); t.setRenderTarget(r); }
}
class Wt extends Me {
    constructor() { super(), this.isGroup = !0, this.type = "Group"; }
}
const Au = { type: "move" };
class Nr {
    constructor() { this._targetRay = null, this._grip = null, this._hand = null; }
    getHandSpace() { return this._hand === null && (this._hand = new Wt, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand; }
    getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Wt, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new T, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new T), this._targetRay; }
    getGripSpace() { return this._grip === null && (this._grip = new Wt, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new T, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new T), this._grip; }
    dispatchEvent(t) { return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this; }
    connect(t) { if (t && t.hand) {
        const e = this._hand;
        if (e)
            for (const n of t.hand.values())
                this._getHandJoint(e, n);
    } return this.dispatchEvent({ type: "connected", data: t }), this; }
    disconnect(t) { return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this; }
    update(t, e, n) { let i = null, r = null, a = null; const o = this._targetRay, c = this._grip, l = this._hand; if (t && e.session.visibilityState !== "visible-blurred") {
        if (l && t.hand) {
            a = !0;
            for (const v of t.hand.values()) {
                const m = e.getJointPose(v, n), p = this._getHandJoint(l, v);
                m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
            }
            const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = .02, g = .005;
            l.inputState.pinching && d > f + g ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && d <= f - g && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
        }
        else
            c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
        o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Au)));
    } return o !== null && (o.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this; }
    _getHandJoint(t, e) { if (t.joints[e.jointName] === void 0) {
        const n = new Wt;
        n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    } return t.joints[e.jointName]; }
}
class ao {
    constructor(t, e = 1, n = 1e3) { this.isFog = !0, this.name = "", this.color = new Pt(t), this.near = e, this.far = n; }
    clone() { return new ao(this.color, this.near, this.far); }
    toJSON() { return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far }; }
}
class gc extends Me {
    constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new $e, this.environmentIntensity = 1, this.environmentRotation = new $e, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
    copy(t, e) { return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this; }
    toJSON(t) { const e = super.toJSON(t); return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e; }
}
class Ru extends Ce {
    constructor(t = null, e = 1, n = 1, i, r, a, o, c, l = Ve, h = Ve, u, d) { super(null, a, o, c, l, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1; }
}
class Zo extends Se {
    constructor(t, e, n, i = 1) { super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i; }
    copy(t) { return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this; }
    toJSON() { const t = super.toJSON(); return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t; }
}
const gi = new le, Jo = new le, Ns = [], Ko = new ei, Cu = new le, Wi = new qt, qi = new Ni;
class Fr extends qt {
    constructor(t, e, n) { super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Zo(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)
        this.setMatrixAt(i, Cu); }
    computeBoundingBox() { const t = this.geometry, e = this.count; this.boundingBox === null && (this.boundingBox = new ei), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < e; n++)
        this.getMatrixAt(n, gi), Ko.copy(t.boundingBox).applyMatrix4(gi), this.boundingBox.union(Ko); }
    computeBoundingSphere() { const t = this.geometry, e = this.count; this.boundingSphere === null && (this.boundingSphere = new Ni), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < e; n++)
        this.getMatrixAt(n, gi), qi.copy(t.boundingSphere).applyMatrix4(gi), this.boundingSphere.union(qi); }
    copy(t, e) { return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this; }
    getColorAt(t, e) { e.fromArray(this.instanceColor.array, t * 3); }
    getMatrixAt(t, e) { e.fromArray(this.instanceMatrix.array, t * 16); }
    getMorphAt(t, e) { const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = t * r + 1; for (let o = 0; o < n.length; o++)
        n[o] = i[a + o]; }
    raycast(t, e) { const n = this.matrixWorld, i = this.count; if (Wi.geometry = this.geometry, Wi.material = this.material, Wi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), qi.copy(this.boundingSphere), qi.applyMatrix4(n), t.ray.intersectsSphere(qi) !== !1))
        for (let r = 0; r < i; r++) {
            this.getMatrixAt(r, gi), Jo.multiplyMatrices(n, gi), Wi.matrixWorld = Jo, Wi.raycast(t, Ns);
            for (let a = 0, o = Ns.length; a < o; a++) {
                const c = Ns[a];
                c.instanceId = r, c.object = this, e.push(c);
            }
            Ns.length = 0;
        } }
    setColorAt(t, e) { this.instanceColor === null && (this.instanceColor = new Zo(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3); }
    setMatrixAt(t, e) { e.toArray(this.instanceMatrix.array, t * 16); }
    setMorphAt(t, e) { const n = e.morphTargetInfluences, i = n.length + 1; this.morphTexture === null && (this.morphTexture = new Ru(new Float32Array(i * this.count), i, this.count, to, ln)); const r = this.morphTexture.source.data.data; let a = 0; for (let l = 0; l < n.length; l++)
        a += n[l]; const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = i * t; r[c] = o, r.set(n, c + 1); }
    updateMorphTargets() { }
    dispose() { this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null); }
}
const Or = new T, Pu = new T, Iu = new Vt;
class Xn {
    constructor(t = new T(1, 0, 0), e = 0) { this.isPlane = !0, this.normal = t, this.constant = e; }
    set(t, e) { return this.normal.copy(t), this.constant = e, this; }
    setComponents(t, e, n, i) { return this.normal.set(t, e, n), this.constant = i, this; }
    setFromNormalAndCoplanarPoint(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this; }
    setFromCoplanarPoints(t, e, n) { const i = Or.subVectors(n, e).cross(Pu.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(i, t), this; }
    copy(t) { return this.normal.copy(t.normal), this.constant = t.constant, this; }
    normalize() { const t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this; }
    negate() { return this.constant *= -1, this.normal.negate(), this; }
    distanceToPoint(t) { return this.normal.dot(t) + this.constant; }
    distanceToSphere(t) { return this.distanceToPoint(t.center) - t.radius; }
    projectPoint(t, e) { return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t)); }
    intersectLine(t, e) { const n = t.delta(Or), i = this.normal.dot(n); if (i === 0)
        return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null; const r = -(t.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r); }
    intersectsLine(t) { const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0; }
    intersectsBox(t) { return t.intersectsPlane(this); }
    intersectsSphere(t) { return t.intersectsPlane(this); }
    coplanarPoint(t) { return t.copy(this.normal).multiplyScalar(-this.constant); }
    applyMatrix4(t, e) { const n = e || Iu.getNormalMatrix(t), i = this.coplanarPoint(Or).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this; }
    translate(t) { return this.constant -= t.dot(this.normal), this; }
    equals(t) { return t.normal.equals(this.normal) && t.constant === this.constant; }
    clone() { return new this.constructor().copy(this); }
}
const Vn = new Ni, Lu = new ct(.5, .5), Fs = new T;
class oo {
    constructor(t = new Xn, e = new Xn, n = new Xn, i = new Xn, r = new Xn, a = new Xn) { this.planes = [t, e, n, i, r, a]; }
    set(t, e, n, i, r, a) { const o = this.planes; return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this; }
    copy(t) { const e = this.planes; for (let n = 0; n < 6; n++)
        e[n].copy(t.planes[n]); return this; }
    setFromProjectionMatrix(t, e = cn, n = !1) { const i = this.planes, r = t.elements, a = r[0], o = r[1], c = r[2], l = r[3], h = r[4], u = r[5], d = r[6], f = r[7], g = r[8], v = r[9], m = r[10], p = r[11], E = r[12], S = r[13], _ = r[14], P = r[15]; if (i[0].setComponents(l - a, f - h, p - g, P - E).normalize(), i[1].setComponents(l + a, f + h, p + g, P + E).normalize(), i[2].setComponents(l + o, f + u, p + v, P + S).normalize(), i[3].setComponents(l - o, f - u, p - v, P - S).normalize(), n)
        i[4].setComponents(c, d, m, _).normalize(), i[5].setComponents(l - c, f - d, p - m, P - _).normalize();
    else if (i[4].setComponents(l - c, f - d, p - m, P - _).normalize(), e === cn)
        i[5].setComponents(l + c, f + d, p + m, P + _).normalize();
    else if (e === tr)
        i[5].setComponents(c, d, m, _).normalize();
    else
        throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e); return this; }
    intersectsObject(t) { if (t.boundingSphere !== void 0)
        t.boundingSphere === null && t.computeBoundingSphere(), Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
        const e = t.geometry;
        e.boundingSphere === null && e.computeBoundingSphere(), Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    } return this.intersectsSphere(Vn); }
    intersectsSprite(t) { Vn.center.set(0, 0, 0); const e = Lu.distanceTo(t.center); return Vn.radius = .7071067811865476 + e, Vn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Vn); }
    intersectsSphere(t) { const e = this.planes, n = t.center, i = -t.radius; for (let r = 0; r < 6; r++)
        if (e[r].distanceToPoint(n) < i)
            return !1; return !0; }
    intersectsBox(t) { const e = this.planes; for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (Fs.x = i.normal.x > 0 ? t.max.x : t.min.x, Fs.y = i.normal.y > 0 ? t.max.y : t.min.y, Fs.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Fs) < 0)
            return !1;
    } return !0; }
    containsPoint(t) { const e = this.planes; for (let n = 0; n < 6; n++)
        if (e[n].distanceToPoint(t) < 0)
            return !1; return !0; }
    clone() { return new this.constructor().copy(this); }
}
class rr extends Fi {
    constructor(t) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Pt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t); }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this; }
}
const Qo = new le, Ha = new lc, Os = new Ni, ks = new T;
class lo extends Me {
    constructor(t = new _e, e = new rr) { super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets(); }
    copy(t, e) { return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this; }
    raycast(t, e) { const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Os.copy(n.boundingSphere), Os.applyMatrix4(i), Os.radius += r, t.ray.intersectsSphere(Os) === !1)
        return; Qo.copy(i).invert(), Ha.copy(t.ray).applyMatrix4(Qo); const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position; if (l !== null) {
        const d = Math.max(0, a.start), f = Math.min(l.count, a.start + a.count);
        for (let g = d, v = f; g < v; g++) {
            const m = l.getX(g);
            ks.fromBufferAttribute(u, m), tl(ks, m, c, i, t, e, this);
        }
    }
    else {
        const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count);
        for (let g = d, v = f; g < v; g++)
            ks.fromBufferAttribute(u, g), tl(ks, g, c, i, t, e, this);
    } }
    updateMorphTargets() { const e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (let r = 0, a = i.length; r < a; r++) {
                const o = i[r].name || String(r);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
            }
        }
    } }
}
function tl(s, t, e, n, i, r, a) { const o = Ha.distanceSqToPoint(s); if (o < e) {
    const c = new T;
    Ha.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
        return;
    r.push({ distance: l, distanceToRay: Math.sqrt(o), point: c, index: t, face: null, faceIndex: null, barycoord: null, object: a });
} }
class vc extends Ce {
    constructor(t, e, n, i, r, a, o, c, l) { super(t, e, n, i, r, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0; }
}
class xc extends Ce {
    constructor(t, e, n = Kn, i, r, a, o = Ve, c = Ve, l, h = is, u = 1) { if (h !== is && h !== ss)
        throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); const d = { width: t, height: e, depth: u }; super(d, i, r, a, o, c, h, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null; }
    copy(t) { return super.copy(t), this.source = new ro(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this; }
    toJSON(t) { const e = super.toJSON(t); return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e; }
}
class _c extends Ce {
    constructor(t = null) { super(), this.sourceTexture = t, this.isExternalTexture = !0; }
    copy(t) { return super.copy(t), this.sourceTexture = t.sourceTexture, this; }
}
class ar extends _e {
    constructor(t = 1, e = 32, n = 0, i = Math.PI * 2) { super(), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e); const r = [], a = [], o = [], c = [], l = new T, h = new ct; a.push(0, 0, 0), o.push(0, 0, 1), c.push(.5, .5); for (let u = 0, d = 3; u <= e; u++, d += 3) {
        const f = n + u / e * i;
        l.x = t * Math.cos(f), l.y = t * Math.sin(f), a.push(l.x, l.y, l.z), o.push(0, 0, 1), h.x = (a[d] / t + 1) / 2, h.y = (a[d + 1] / t + 1) / 2, c.push(h.x, h.y);
    } for (let u = 1; u <= e; u++)
        r.push(u, u + 1, 0); this.setIndex(r), this.setAttribute("position", new ne(a, 3)), this.setAttribute("normal", new ne(o, 3)), this.setAttribute("uv", new ne(c, 2)); }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new ar(t.radius, t.segments, t.thetaStart, t.thetaLength); }
}
class fs extends _e {
    constructor(t = 1, e = 1, n = 1, i = 32, r = 1, a = !1, o = 0, c = Math.PI * 2) { super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: c }; const l = this; i = Math.floor(i), r = Math.floor(r); const h = [], u = [], d = [], f = []; let g = 0; const v = [], m = n / 2; let p = 0; E(), a === !1 && (t > 0 && S(!0), e > 0 && S(!1)), this.setIndex(h), this.setAttribute("position", new ne(u, 3)), this.setAttribute("normal", new ne(d, 3)), this.setAttribute("uv", new ne(f, 2)); function E() { const _ = new T, P = new T; let A = 0; const I = (e - t) / n; for (let D = 0; D <= r; D++) {
        const b = [], M = D / r, L = M * (e - t) + t;
        for (let k = 0; k <= i; k++) {
            const H = k / i, Y = H * c + o, V = Math.sin(Y), X = Math.cos(Y);
            P.x = L * V, P.y = -M * n + m, P.z = L * X, u.push(P.x, P.y, P.z), _.set(V, I, X).normalize(), d.push(_.x, _.y, _.z), f.push(H, 1 - M), b.push(g++);
        }
        v.push(b);
    } for (let D = 0; D < i; D++)
        for (let b = 0; b < r; b++) {
            const M = v[b][D], L = v[b + 1][D], k = v[b + 1][D + 1], H = v[b][D + 1];
            (t > 0 || b !== 0) && (h.push(M, L, H), A += 3), (e > 0 || b !== r - 1) && (h.push(L, k, H), A += 3);
        } l.addGroup(p, A, 0), p += A; } function S(_) { const P = g, A = new ct, I = new T; let D = 0; const b = _ === !0 ? t : e, M = _ === !0 ? 1 : -1; for (let k = 1; k <= i; k++)
        u.push(0, m * M, 0), d.push(0, M, 0), f.push(.5, .5), g++; const L = g; for (let k = 0; k <= i; k++) {
        const Y = k / i * c + o, V = Math.cos(Y), X = Math.sin(Y);
        I.x = b * X, I.y = m * M, I.z = b * V, u.push(I.x, I.y, I.z), d.push(0, M, 0), A.x = V * .5 + .5, A.y = X * .5 * M + .5, f.push(A.x, A.y), g++;
    } for (let k = 0; k < i; k++) {
        const H = P + k, Y = L + k;
        _ === !0 ? h.push(Y, Y + 1, H) : h.push(Y + 1, Y, H), D += 3;
    } l.addGroup(p, D, _ === !0 ? 1 : 2), p += D; } }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new fs(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength); }
}
class or extends fs {
    constructor(t = 1, e = 1, n = 32, i = 1, r = !1, a = 0, o = Math.PI * 2) { super(0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: a, thetaLength: o }; }
    static fromJSON(t) { return new or(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength); }
}
class co extends _e {
    constructor(t = [], e = [], n = 1, i = 0) { super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: n, detail: i }; const r = [], a = []; o(i), l(n), h(), this.setAttribute("position", new ne(r, 3)), this.setAttribute("normal", new ne(r.slice(), 3)), this.setAttribute("uv", new ne(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals(); function o(E) { const S = new T, _ = new T, P = new T; for (let A = 0; A < e.length; A += 3)
        f(e[A + 0], S), f(e[A + 1], _), f(e[A + 2], P), c(S, _, P, E); } function c(E, S, _, P) { const A = P + 1, I = []; for (let D = 0; D <= A; D++) {
        I[D] = [];
        const b = E.clone().lerp(_, D / A), M = S.clone().lerp(_, D / A), L = A - D;
        for (let k = 0; k <= L; k++)
            k === 0 && D === A ? I[D][k] = b : I[D][k] = b.clone().lerp(M, k / L);
    } for (let D = 0; D < A; D++)
        for (let b = 0; b < 2 * (A - D) - 1; b++) {
            const M = Math.floor(b / 2);
            b % 2 === 0 ? (d(I[D][M + 1]), d(I[D + 1][M]), d(I[D][M])) : (d(I[D][M + 1]), d(I[D + 1][M + 1]), d(I[D + 1][M]));
        } } function l(E) { const S = new T; for (let _ = 0; _ < r.length; _ += 3)
        S.x = r[_ + 0], S.y = r[_ + 1], S.z = r[_ + 2], S.normalize().multiplyScalar(E), r[_ + 0] = S.x, r[_ + 1] = S.y, r[_ + 2] = S.z; } function h() { const E = new T; for (let S = 0; S < r.length; S += 3) {
        E.x = r[S + 0], E.y = r[S + 1], E.z = r[S + 2];
        const _ = m(E) / 2 / Math.PI + .5, P = p(E) / Math.PI + .5;
        a.push(_, 1 - P);
    } g(), u(); } function u() { for (let E = 0; E < a.length; E += 6) {
        const S = a[E + 0], _ = a[E + 2], P = a[E + 4], A = Math.max(S, _, P), I = Math.min(S, _, P);
        A > .9 && I < .1 && (S < .2 && (a[E + 0] += 1), _ < .2 && (a[E + 2] += 1), P < .2 && (a[E + 4] += 1));
    } } function d(E) { r.push(E.x, E.y, E.z); } function f(E, S) { const _ = E * 3; S.x = t[_ + 0], S.y = t[_ + 1], S.z = t[_ + 2]; } function g() { const E = new T, S = new T, _ = new T, P = new T, A = new ct, I = new ct, D = new ct; for (let b = 0, M = 0; b < r.length; b += 9, M += 6) {
        E.set(r[b + 0], r[b + 1], r[b + 2]), S.set(r[b + 3], r[b + 4], r[b + 5]), _.set(r[b + 6], r[b + 7], r[b + 8]), A.set(a[M + 0], a[M + 1]), I.set(a[M + 2], a[M + 3]), D.set(a[M + 4], a[M + 5]), P.copy(E).add(S).add(_).divideScalar(3);
        const L = m(P);
        v(A, M + 0, E, L), v(I, M + 2, S, L), v(D, M + 4, _, L);
    } } function v(E, S, _, P) { P < 0 && E.x === 1 && (a[S] = E.x - 1), _.x === 0 && _.z === 0 && (a[S] = P / 2 / Math.PI + .5); } function m(E) { return Math.atan2(E.z, -E.x); } function p(E) { return Math.atan2(-E.y, Math.sqrt(E.x * E.x + E.z * E.z)); } }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new co(t.vertices, t.indices, t.radius, t.details); }
}
class fn {
    constructor() { this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null; }
    getPoint() { console.warn("THREE.Curve: .getPoint() not implemented."); }
    getPointAt(t, e) { const n = this.getUtoTmapping(t); return this.getPoint(n, e); }
    getPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++)
        e.push(this.getPoint(n / t)); return e; }
    getSpacedPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++)
        e.push(this.getPointAt(n / t)); return e; }
    getLength() { const t = this.getLengths(); return t[t.length - 1]; }
    getLengths(t = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
        return this.cacheArcLengths; this.needsUpdate = !1; const e = []; let n, i = this.getPoint(0), r = 0; e.push(0); for (let a = 1; a <= t; a++)
        n = this.getPoint(a / t), r += n.distanceTo(i), e.push(r), i = n; return this.cacheArcLengths = e, e; }
    updateArcLengths() { this.needsUpdate = !0, this.getLengths(); }
    getUtoTmapping(t, e = null) { const n = this.getLengths(); let i = 0; const r = n.length; let a; e ? a = e : a = t * n[r - 1]; let o = 0, c = r - 1, l; for (; o <= c;)
        if (i = Math.floor(o + (c - o) / 2), l = n[i] - a, l < 0)
            o = i + 1;
        else if (l > 0)
            c = i - 1;
        else {
            c = i;
            break;
        } if (i = c, n[i] === a)
        return i / (r - 1); const h = n[i], d = n[i + 1] - h, f = (a - h) / d; return (i + f) / (r - 1); }
    getTangent(t, e) { let i = t - 1e-4, r = t + 1e-4; i < 0 && (i = 0), r > 1 && (r = 1); const a = this.getPoint(i), o = this.getPoint(r), c = e || (a.isVector2 ? new ct : new T); return c.copy(o).sub(a).normalize(), c; }
    getTangentAt(t, e) { const n = this.getUtoTmapping(t); return this.getTangent(n, e); }
    computeFrenetFrames(t, e = !1) { const n = new T, i = [], r = [], a = [], o = new T, c = new le; for (let f = 0; f <= t; f++) {
        const g = f / t;
        i[f] = this.getTangentAt(g, new T);
    } r[0] = new T, a[0] = new T; let l = Number.MAX_VALUE; const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z); h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), a[0].crossVectors(i[0], r[0]); for (let f = 1; f <= t; f++) {
        if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
            o.normalize();
            const g = Math.acos(Yt(i[f - 1].dot(i[f]), -1, 1));
            r[f].applyMatrix4(c.makeRotationAxis(o, g));
        }
        a[f].crossVectors(i[f], r[f]);
    } if (e === !0) {
        let f = Math.acos(Yt(r[0].dot(r[t]), -1, 1));
        f /= t, i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f);
        for (let g = 1; g <= t; g++)
            r[g].applyMatrix4(c.makeRotationAxis(i[g], f * g)), a[g].crossVectors(i[g], r[g]);
    } return { tangents: i, normals: r, binormals: a }; }
    clone() { return new this.constructor().copy(this); }
    copy(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; }
    toJSON() { const t = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t; }
    fromJSON(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; }
}
class ho extends fn {
    constructor(t = 0, e = 0, n = 1, i = 1, r = 0, a = Math.PI * 2, o = !1, c = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c; }
    getPoint(t, e = new ct) { const n = e, i = Math.PI * 2; let r = this.aEndAngle - this.aStartAngle; const a = Math.abs(r) < Number.EPSILON; for (; r < 0;)
        r += i; for (; r > i;)
        r -= i; r < Number.EPSILON && (a ? r = 0 : r = i), this.aClockwise === !0 && !a && (r === i ? r = -i : r = r - i); const o = this.aStartAngle + t * r; let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o); if (this.aRotation !== 0) {
        const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
        c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    } return n.set(c, l); }
    copy(t) { return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; }
    toJSON() { const t = super.toJSON(); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t; }
    fromJSON(t) { return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; }
}
class Du extends ho {
    constructor(t, e, n, i, r, a) { super(t, e, n, n, i, r, a), this.isArcCurve = !0, this.type = "ArcCurve"; }
}
function uo() { let s = 0, t = 0, e = 0, n = 0; function i(r, a, o, c) { s = r, t = o, e = -3 * r + 3 * a - 2 * o - c, n = 2 * r - 2 * a + o + c; } return { initCatmullRom: function (r, a, o, c, l) { i(a, o, l * (o - r), l * (c - a)); }, initNonuniformCatmullRom: function (r, a, o, c, l, h, u) { let d = (a - r) / l - (o - r) / (l + h) + (o - a) / h, f = (o - a) / h - (c - a) / (h + u) + (c - o) / u; d *= h, f *= h, i(a, o, d, f); }, calc: function (r) { const a = r * r, o = a * r; return s + t * r + e * a + n * o; } }; }
const zs = new T, kr = new uo, zr = new uo, Br = new uo;
class yc extends fn {
    constructor(t = [], e = !1, n = "centripetal", i = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i; }
    getPoint(t, e = new T) { const n = e, i = this.points, r = i.length, a = (r - (this.closed ? 0 : 1)) * t; let o = Math.floor(a), c = a - o; this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : c === 0 && o === r - 1 && (o = r - 2, c = 1); let l, h; this.closed || o > 0 ? l = i[(o - 1) % r] : (zs.subVectors(i[0], i[1]).add(i[0]), l = zs); const u = i[o % r], d = i[(o + 1) % r]; if (this.closed || o + 2 < r ? h = i[(o + 2) % r] : (zs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = zs), this.curveType === "centripetal" || this.curveType === "chordal") {
        const f = this.curveType === "chordal" ? .5 : .25;
        let g = Math.pow(l.distanceToSquared(u), f), v = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
        v < 1e-4 && (v = 1), g < 1e-4 && (g = v), m < 1e-4 && (m = v), kr.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, v, m), zr.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, v, m), Br.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, v, m);
    }
    else
        this.curveType === "catmullrom" && (kr.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), zr.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), Br.initCatmullRom(l.z, u.z, d.z, h.z, this.tension)); return n.set(kr.calc(c), zr.calc(c), Br.calc(c)), n; }
    copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) {
        const i = t.points[e];
        this.points.push(i.clone());
    } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; }
    toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, n = this.points.length; e < n; e++) {
        const i = this.points[e];
        t.points.push(i.toArray());
    } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t; }
    fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) {
        const i = t.points[e];
        this.points.push(new T().fromArray(i));
    } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; }
}
function el(s, t, e, n, i) { const r = (n - t) * .5, a = (i - e) * .5, o = s * s, c = s * o; return (2 * e - 2 * n + r + a) * c + (-3 * e + 3 * n - 2 * r - a) * o + r * s + e; }
function Uu(s, t) { const e = 1 - s; return e * e * t; }
function Nu(s, t) { return 2 * (1 - s) * s * t; }
function Fu(s, t) { return s * s * t; }
function Qi(s, t, e, n) { return Uu(s, t) + Nu(s, e) + Fu(s, n); }
function Ou(s, t) { const e = 1 - s; return e * e * e * t; }
function ku(s, t) { const e = 1 - s; return 3 * e * e * s * t; }
function zu(s, t) { return 3 * (1 - s) * s * s * t; }
function Bu(s, t) { return s * s * s * t; }
function ts(s, t, e, n, i) { return Ou(s, t) + ku(s, e) + zu(s, n) + Bu(s, i); }
class Mc extends fn {
    constructor(t = new ct, e = new ct, n = new ct, i = new ct) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i; }
    getPoint(t, e = new ct) { const n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3; return n.set(ts(t, i.x, r.x, a.x, o.x), ts(t, i.y, r.y, a.y, o.y)), n; }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; }
}
class Hu extends fn {
    constructor(t = new T, e = new T, n = new T, i = new T) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i; }
    getPoint(t, e = new T) { const n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3; return n.set(ts(t, i.x, r.x, a.x, o.x), ts(t, i.y, r.y, a.y, o.y), ts(t, i.z, r.z, a.z, o.z)), n; }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; }
}
class Sc extends fn {
    constructor(t = new ct, e = new ct) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e; }
    getPoint(t, e = new ct) { const n = e; return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n; }
    getPointAt(t, e) { return this.getPoint(t, e); }
    getTangent(t, e = new ct) { return e.subVectors(this.v2, this.v1).normalize(); }
    getTangentAt(t, e) { return this.getTangent(t, e); }
    copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
    toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
}
class Gu extends fn {
    constructor(t = new T, e = new T) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e; }
    getPoint(t, e = new T) { const n = e; return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n; }
    getPointAt(t, e) { return this.getPoint(t, e); }
    getTangent(t, e = new T) { return e.subVectors(this.v2, this.v1).normalize(); }
    getTangentAt(t, e) { return this.getTangent(t, e); }
    copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
    toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
}
class bc extends fn {
    constructor(t = new ct, e = new ct, n = new ct) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n; }
    getPoint(t, e = new ct) { const n = e, i = this.v0, r = this.v1, a = this.v2; return n.set(Qi(t, i.x, r.x, a.x), Qi(t, i.y, r.y, a.y)), n; }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
}
class Ec extends fn {
    constructor(t = new T, e = new T, n = new T) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n; }
    getPoint(t, e = new T) { const n = e, i = this.v0, r = this.v1, a = this.v2; return n.set(Qi(t, i.x, r.x, a.x), Qi(t, i.y, r.y, a.y), Qi(t, i.z, r.z, a.z)), n; }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
}
class wc extends fn {
    constructor(t = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t; }
    getPoint(t, e = new ct) { const n = e, i = this.points, r = (i.length - 1) * t, a = Math.floor(r), o = r - a, c = i[a === 0 ? a : a - 1], l = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2]; return n.set(el(o, c.x, l.x, h.x, u.x), el(o, c.y, l.y, h.y, u.y)), n; }
    copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) {
        const i = t.points[e];
        this.points.push(i.clone());
    } return this; }
    toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, n = this.points.length; e < n; e++) {
        const i = this.points[e];
        t.points.push(i.toArray());
    } return t; }
    fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) {
        const i = t.points[e];
        this.points.push(new ct().fromArray(i));
    } return this; }
}
var nr = Object.freeze({ __proto__: null, ArcCurve: Du, CatmullRomCurve3: yc, CubicBezierCurve: Mc, CubicBezierCurve3: Hu, EllipseCurve: ho, LineCurve: Sc, LineCurve3: Gu, QuadraticBezierCurve: bc, QuadraticBezierCurve3: Ec, SplineCurve: wc });
class Vu extends fn {
    constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1; }
    add(t) { this.curves.push(t); }
    closePath() { const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1); if (!t.equals(e)) {
        const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
        this.curves.push(new nr[n](e, t));
    } return this; }
    getPoint(t, e) { const n = t * this.getLength(), i = this.getCurveLengths(); let r = 0; for (; r < i.length;) {
        if (i[r] >= n) {
            const a = i[r] - n, o = this.curves[r], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c;
            return o.getPointAt(l, e);
        }
        r++;
    } return null; }
    getLength() { const t = this.getCurveLengths(); return t[t.length - 1]; }
    updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths(); }
    getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths; const t = []; let e = 0; for (let n = 0, i = this.curves.length; n < i; n++)
        e += this.curves[n].getLength(), t.push(e); return this.cacheLengths = t, t; }
    getSpacedPoints(t = 40) { const e = []; for (let n = 0; n <= t; n++)
        e.push(this.getPoint(n / t)); return this.autoClose && e.push(e[0]), e; }
    getPoints(t = 12) { const e = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) {
        const a = r[i], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, c = a.getPoints(o);
        for (let l = 0; l < c.length; l++) {
            const h = c[l];
            n && n.equals(h) || (e.push(h), n = h);
        }
    } return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e; }
    copy(t) { super.copy(t), this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) {
        const i = t.curves[e];
        this.curves.push(i.clone());
    } return this.autoClose = t.autoClose, this; }
    toJSON() { const t = super.toJSON(); t.autoClose = this.autoClose, t.curves = []; for (let e = 0, n = this.curves.length; e < n; e++) {
        const i = this.curves[e];
        t.curves.push(i.toJSON());
    } return t; }
    fromJSON(t) { super.fromJSON(t), this.autoClose = t.autoClose, this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) {
        const i = t.curves[e];
        this.curves.push(new nr[i.type]().fromJSON(i));
    } return this; }
}
class nl extends Vu {
    constructor(t) { super(), this.type = "Path", this.currentPoint = new ct, t && this.setFromPoints(t); }
    setFromPoints(t) { this.moveTo(t[0].x, t[0].y); for (let e = 1, n = t.length; e < n; e++)
        this.lineTo(t[e].x, t[e].y); return this; }
    moveTo(t, e) { return this.currentPoint.set(t, e), this; }
    lineTo(t, e) { const n = new Sc(this.currentPoint.clone(), new ct(t, e)); return this.curves.push(n), this.currentPoint.set(t, e), this; }
    quadraticCurveTo(t, e, n, i) { const r = new bc(this.currentPoint.clone(), new ct(t, e), new ct(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this; }
    bezierCurveTo(t, e, n, i, r, a) { const o = new Mc(this.currentPoint.clone(), new ct(t, e), new ct(n, i), new ct(r, a)); return this.curves.push(o), this.currentPoint.set(r, a), this; }
    splineThru(t) { const e = [this.currentPoint.clone()].concat(t), n = new wc(e); return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this; }
    arc(t, e, n, i, r, a) { const o = this.currentPoint.x, c = this.currentPoint.y; return this.absarc(t + o, e + c, n, i, r, a), this; }
    absarc(t, e, n, i, r, a) { return this.absellipse(t, e, n, n, i, r, a), this; }
    ellipse(t, e, n, i, r, a, o, c) { const l = this.currentPoint.x, h = this.currentPoint.y; return this.absellipse(t + l, e + h, n, i, r, a, o, c), this; }
    absellipse(t, e, n, i, r, a, o, c) { const l = new ho(t, e, n, i, r, a, o, c); if (this.curves.length > 0) {
        const u = l.getPoint(0);
        u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    } this.curves.push(l); const h = l.getPoint(1); return this.currentPoint.copy(h), this; }
    copy(t) { return super.copy(t), this.currentPoint.copy(t.currentPoint), this; }
    toJSON() { const t = super.toJSON(); return t.currentPoint = this.currentPoint.toArray(), t; }
    fromJSON(t) { return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this; }
}
class Tc extends nl {
    constructor(t) { super(t), this.uuid = ti(), this.type = "Shape", this.holes = []; }
    getPointsHoles(t) { const e = []; for (let n = 0, i = this.holes.length; n < i; n++)
        e[n] = this.holes[n].getPoints(t); return e; }
    extractPoints(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) }; }
    copy(t) { super.copy(t), this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) {
        const i = t.holes[e];
        this.holes.push(i.clone());
    } return this; }
    toJSON() { const t = super.toJSON(); t.uuid = this.uuid, t.holes = []; for (let e = 0, n = this.holes.length; e < n; e++) {
        const i = this.holes[e];
        t.holes.push(i.toJSON());
    } return t; }
    fromJSON(t) { super.fromJSON(t), this.uuid = t.uuid, this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) {
        const i = t.holes[e];
        this.holes.push(new nl().fromJSON(i));
    } return this; }
}
function Wu(s, t, e = 2) { const n = t && t.length, i = n ? t[0] * e : s.length; let r = Ac(s, 0, i, e, !0); const a = []; if (!r || r.next === r.prev)
    return a; let o, c, l; if (n && (r = ju(s, t, r, e)), s.length > 80 * e) {
    o = 1 / 0, c = 1 / 0;
    let h = -1 / 0, u = -1 / 0;
    for (let d = e; d < i; d += e) {
        const f = s[d], g = s[d + 1];
        f < o && (o = f), g < c && (c = g), f > h && (h = f), g > u && (u = g);
    }
    l = Math.max(h - o, u - c), l = l !== 0 ? 32767 / l : 0;
} return os(r, a, e, o, c, l, 0), a; }
function Ac(s, t, e, n, i) { let r; if (i === ad(s, t, e, n) > 0)
    for (let a = t; a < e; a += n)
        r = il(a / n | 0, s[a], s[a + 1], r);
else
    for (let a = e - n; a >= t; a -= n)
        r = il(a / n | 0, s[a], s[a + 1], r); return r && Ii(r, r.next) && (cs(r), r = r.next), r; }
function Qn(s, t) { if (!s)
    return s; t || (t = s); let e = s, n; do
    if (n = !1, !e.steiner && (Ii(e, e.next) || me(e.prev, e, e.next) === 0)) {
        if (cs(e), e = t = e.prev, e === e.next)
            break;
        n = !0;
    }
    else
        e = e.next;
while (n || e !== t); return t; }
function os(s, t, e, n, i, r, a) { if (!s)
    return; !a && r && td(s, n, i, r); let o = s; for (; s.prev !== s.next;) {
    const c = s.prev, l = s.next;
    if (r ? Xu(s, n, i, r) : qu(s)) {
        t.push(c.i, s.i, l.i), cs(s), s = l.next, o = l.next;
        continue;
    }
    if (s = l, s === o) {
        a ? a === 1 ? (s = Yu(Qn(s), t), os(s, t, e, n, i, r, 2)) : a === 2 && $u(s, t, e, n, i, r) : os(Qn(s), t, e, n, i, r, 1);
        break;
    }
} }
function qu(s) { const t = s.prev, e = s, n = s.next; if (me(t, e, n) >= 0)
    return !1; const i = t.x, r = e.x, a = n.x, o = t.y, c = e.y, l = n.y, h = Math.min(i, r, a), u = Math.min(o, c, l), d = Math.max(i, r, a), f = Math.max(o, c, l); let g = n.next; for (; g !== t;) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && ji(i, o, r, c, a, l, g.x, g.y) && me(g.prev, g, g.next) >= 0)
        return !1;
    g = g.next;
} return !0; }
function Xu(s, t, e, n) { const i = s.prev, r = s, a = s.next; if (me(i, r, a) >= 0)
    return !1; const o = i.x, c = r.x, l = a.x, h = i.y, u = r.y, d = a.y, f = Math.min(o, c, l), g = Math.min(h, u, d), v = Math.max(o, c, l), m = Math.max(h, u, d), p = Ga(f, g, t, e, n), E = Ga(v, m, t, e, n); let S = s.prevZ, _ = s.nextZ; for (; S && S.z >= p && _ && _.z <= E;) {
    if (S.x >= f && S.x <= v && S.y >= g && S.y <= m && S !== i && S !== a && ji(o, h, c, u, l, d, S.x, S.y) && me(S.prev, S, S.next) >= 0 || (S = S.prevZ, _.x >= f && _.x <= v && _.y >= g && _.y <= m && _ !== i && _ !== a && ji(o, h, c, u, l, d, _.x, _.y) && me(_.prev, _, _.next) >= 0))
        return !1;
    _ = _.nextZ;
} for (; S && S.z >= p;) {
    if (S.x >= f && S.x <= v && S.y >= g && S.y <= m && S !== i && S !== a && ji(o, h, c, u, l, d, S.x, S.y) && me(S.prev, S, S.next) >= 0)
        return !1;
    S = S.prevZ;
} for (; _ && _.z <= E;) {
    if (_.x >= f && _.x <= v && _.y >= g && _.y <= m && _ !== i && _ !== a && ji(o, h, c, u, l, d, _.x, _.y) && me(_.prev, _, _.next) >= 0)
        return !1;
    _ = _.nextZ;
} return !0; }
function Yu(s, t) { let e = s; do {
    const n = e.prev, i = e.next.next;
    !Ii(n, i) && Cc(n, e, e.next, i) && ls(n, i) && ls(i, n) && (t.push(n.i, e.i, i.i), cs(e), cs(e.next), e = s = i), e = e.next;
} while (e !== s); return Qn(e); }
function $u(s, t, e, n, i, r) { let a = s; do {
    let o = a.next.next;
    for (; o !== a.prev;) {
        if (a.i !== o.i && id(a, o)) {
            let c = Pc(a, o);
            a = Qn(a, a.next), c = Qn(c, c.next), os(a, t, e, n, i, r, 0), os(c, t, e, n, i, r, 0);
            return;
        }
        o = o.next;
    }
    a = a.next;
} while (a !== s); }
function ju(s, t, e, n) { const i = []; for (let r = 0, a = t.length; r < a; r++) {
    const o = t[r] * n, c = r < a - 1 ? t[r + 1] * n : s.length, l = Ac(s, o, c, n, !1);
    l === l.next && (l.steiner = !0), i.push(nd(l));
} i.sort(Zu); for (let r = 0; r < i.length; r++)
    e = Ju(i[r], e); return e; }
function Zu(s, t) { let e = s.x - t.x; if (e === 0 && (e = s.y - t.y, e === 0)) {
    const n = (s.next.y - s.y) / (s.next.x - s.x), i = (t.next.y - t.y) / (t.next.x - t.x);
    e = n - i;
} return e; }
function Ju(s, t) { const e = Ku(s, t); if (!e)
    return t; const n = Pc(e, s); return Qn(n, n.next), Qn(e, e.next); }
function Ku(s, t) { let e = t; const n = s.x, i = s.y; let r = -1 / 0, a; if (Ii(s, e))
    return e; do {
    if (Ii(s, e.next))
        return e.next;
    if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
        const u = e.x + (i - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (u <= n && u > r && (r = u, a = e.x < e.next.x ? e : e.next, u === n))
            return a;
    }
    e = e.next;
} while (e !== t); if (!a)
    return null; const o = a, c = a.x, l = a.y; let h = 1 / 0; e = a; do {
    if (n >= e.x && e.x >= c && n !== e.x && Rc(i < l ? n : r, i, c, l, i < l ? r : n, i, e.x, e.y)) {
        const u = Math.abs(i - e.y) / (n - e.x);
        ls(e, s) && (u < h || u === h && (e.x > a.x || e.x === a.x && Qu(a, e))) && (a = e, h = u);
    }
    e = e.next;
} while (e !== o); return a; }
function Qu(s, t) { return me(s.prev, s, t.prev) < 0 && me(t.next, s, s.next) < 0; }
function td(s, t, e, n) { let i = s; do
    i.z === 0 && (i.z = Ga(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
while (i !== s); i.prevZ.nextZ = null, i.prevZ = null, ed(i); }
function ed(s) { let t, e = 1; do {
    let n = s, i;
    s = null;
    let r = null;
    for (t = 0; n;) {
        t++;
        let a = n, o = 0;
        for (let l = 0; l < e && (o++, a = a.nextZ, !!a); l++)
            ;
        let c = e;
        for (; o > 0 || c > 0 && a;)
            o !== 0 && (c === 0 || !a || n.z <= a.z) ? (i = n, n = n.nextZ, o--) : (i = a, a = a.nextZ, c--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
        n = a;
    }
    r.nextZ = null, e *= 2;
} while (t > 1); return s; }
function Ga(s, t, e, n, i) { return s = (s - e) * i | 0, t = (t - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1; }
function nd(s) { let t = s, e = s; do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
while (t !== s); return e; }
function Rc(s, t, e, n, i, r, a, o) { return (i - a) * (t - o) >= (s - a) * (r - o) && (s - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (r - o) >= (i - a) * (n - o); }
function ji(s, t, e, n, i, r, a, o) { return !(s === a && t === o) && Rc(s, t, e, n, i, r, a, o); }
function id(s, t) { return s.next.i !== t.i && s.prev.i !== t.i && !sd(s, t) && (ls(s, t) && ls(t, s) && rd(s, t) && (me(s.prev, s, t.prev) || me(s, t.prev, t)) || Ii(s, t) && me(s.prev, s, s.next) > 0 && me(t.prev, t, t.next) > 0); }
function me(s, t, e) { return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y); }
function Ii(s, t) { return s.x === t.x && s.y === t.y; }
function Cc(s, t, e, n) { const i = Hs(me(s, t, e)), r = Hs(me(s, t, n)), a = Hs(me(e, n, s)), o = Hs(me(e, n, t)); return !!(i !== r && a !== o || i === 0 && Bs(s, e, t) || r === 0 && Bs(s, n, t) || a === 0 && Bs(e, s, n) || o === 0 && Bs(e, t, n)); }
function Bs(s, t, e) { return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y); }
function Hs(s) { return s > 0 ? 1 : s < 0 ? -1 : 0; }
function sd(s, t) { let e = s; do {
    if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && Cc(e, e.next, s, t))
        return !0;
    e = e.next;
} while (e !== s); return !1; }
function ls(s, t) { return me(s.prev, s, s.next) < 0 ? me(s, t, s.next) >= 0 && me(s, s.prev, t) >= 0 : me(s, t, s.prev) < 0 || me(s, s.next, t) < 0; }
function rd(s, t) { let e = s, n = !1; const i = (s.x + t.x) / 2, r = (s.y + t.y) / 2; do
    e.y > r != e.next.y > r && e.next.y !== e.y && i < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
while (e !== s); return n; }
function Pc(s, t) { const e = Va(s.i, s.x, s.y), n = Va(t.i, t.x, t.y), i = s.next, r = t.prev; return s.next = t, t.prev = s, e.next = i, i.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n; }
function il(s, t, e, n) { const i = Va(s, t, e); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i; }
function cs(s) { s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ); }
function Va(s, t, e) { return { i: s, x: t, y: e, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: !1 }; }
function ad(s, t, e, n) { let i = 0; for (let r = t, a = e - n; r < e; r += n)
    i += (s[a] - s[r]) * (s[r + 1] + s[a + 1]), a = r; return i; }
class od {
    static triangulate(t, e, n = 2) { return Wu(t, e, n); }
}
class _i {
    static area(t) { const e = t.length; let n = 0; for (let i = e - 1, r = 0; r < e; i = r++)
        n += t[i].x * t[r].y - t[r].x * t[i].y; return n * .5; }
    static isClockWise(t) { return _i.area(t) < 0; }
    static triangulateShape(t, e) { const n = [], i = [], r = []; sl(t), rl(n, t); let a = t.length; e.forEach(sl); for (let c = 0; c < e.length; c++)
        i.push(a), a += e[c].length, rl(n, e[c]); const o = od.triangulate(n, i); for (let c = 0; c < o.length; c += 3)
        r.push(o.slice(c, c + 3)); return r; }
}
function sl(s) { const t = s.length; t > 2 && s[t - 1].equals(s[0]) && s.pop(); }
function rl(s, t) { for (let e = 0; e < t.length; e++)
    s.push(t[e].x), s.push(t[e].y); }
class fo extends _e {
    constructor(t = new Tc([new ct(.5, .5), new ct(-.5, .5), new ct(-.5, -.5), new ct(.5, -.5)]), e = {}) { super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t]; const n = this, i = [], r = []; for (let o = 0, c = t.length; o < c; o++) {
        const l = t[o];
        a(l);
    } this.setAttribute("position", new ne(i, 3)), this.setAttribute("uv", new ne(r, 2)), this.computeVertexNormals(); function a(o) { const c = [], l = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1; let d = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, f = e.bevelThickness !== void 0 ? e.bevelThickness : .2, g = e.bevelSize !== void 0 ? e.bevelSize : f - .1, v = e.bevelOffset !== void 0 ? e.bevelOffset : 0, m = e.bevelSegments !== void 0 ? e.bevelSegments : 3; const p = e.extrudePath, E = e.UVGenerator !== void 0 ? e.UVGenerator : ld; let S, _ = !1, P, A, I, D; p && (S = p.getSpacedPoints(h), _ = !0, d = !1, P = p.computeFrenetFrames(h, !1), A = new T, I = new T, D = new T), d || (m = 0, f = 0, g = 0, v = 0); const b = o.extractPoints(l); let M = b.shape; const L = b.holes; if (!_i.isClockWise(M)) {
        M = M.reverse();
        for (let et = 0, J = L.length; et < J; et++) {
            const Z = L[et];
            _i.isClockWise(Z) && (L[et] = Z.reverse());
        }
    } function H(et) { const Z = 10000000000000001e-36; let j = et[0]; for (let ht = 1; ht <= et.length; ht++) {
        const it = ht % et.length, ut = et[it], zt = ut.x - j.x, kt = ut.y - j.y, w = zt * zt + kt * kt, x = Math.max(Math.abs(ut.x), Math.abs(ut.y), Math.abs(j.x), Math.abs(j.y)), O = Z * x * x;
        if (w <= O) {
            et.splice(it, 1), ht--;
            continue;
        }
        j = ut;
    } } H(M), L.forEach(H); const Y = L.length, V = M; for (let et = 0; et < Y; et++) {
        const J = L[et];
        M = M.concat(J);
    } function X(et, J, Z) { return J || console.error("THREE.ExtrudeGeometry: vec does not exist"), et.clone().addScaledVector(J, Z); } const Q = M.length; function W(et, J, Z) { let j, ht, it; const ut = et.x - J.x, zt = et.y - J.y, kt = Z.x - et.x, w = Z.y - et.y, x = ut * ut + zt * zt, O = ut * w - zt * kt; if (Math.abs(O) > Number.EPSILON) {
        const G = Math.sqrt(x), tt = Math.sqrt(kt * kt + w * w), q = J.x - zt / G, Rt = J.y + ut / G, lt = Z.x - w / tt, wt = Z.y + kt / tt, Tt = ((lt - q) * w - (wt - Rt) * kt) / (ut * w - zt * kt);
        j = q + ut * Tt - et.x, ht = Rt + zt * Tt - et.y;
        const st = j * j + ht * ht;
        if (st <= 2)
            return new ct(j, ht);
        it = Math.sqrt(st / 2);
    }
    else {
        let G = !1;
        ut > Number.EPSILON ? kt > Number.EPSILON && (G = !0) : ut < -Number.EPSILON ? kt < -Number.EPSILON && (G = !0) : Math.sign(zt) === Math.sign(w) && (G = !0), G ? (j = -zt, ht = ut, it = Math.sqrt(x)) : (j = ut, ht = zt, it = Math.sqrt(x / 2));
    } return new ct(j / it, ht / it); } const dt = []; for (let et = 0, J = V.length, Z = J - 1, j = et + 1; et < J; et++, Z++, j++)
        Z === J && (Z = 0), j === J && (j = 0), dt[et] = W(V[et], V[Z], V[j]); const xt = []; let Mt, Ht = dt.concat(); for (let et = 0, J = Y; et < J; et++) {
        const Z = L[et];
        Mt = [];
        for (let j = 0, ht = Z.length, it = ht - 1, ut = j + 1; j < ht; j++, it++, ut++)
            it === ht && (it = 0), ut === ht && (ut = 0), Mt[j] = W(Z[j], Z[it], Z[ut]);
        xt.push(Mt), Ht = Ht.concat(Mt);
    } let Zt; if (m === 0)
        Zt = _i.triangulateShape(V, L);
    else {
        const et = [], J = [];
        for (let Z = 0; Z < m; Z++) {
            const j = Z / m, ht = f * Math.cos(j * Math.PI / 2), it = g * Math.sin(j * Math.PI / 2) + v;
            for (let ut = 0, zt = V.length; ut < zt; ut++) {
                const kt = X(V[ut], dt[ut], it);
                It(kt.x, kt.y, -ht), j === 0 && et.push(kt);
            }
            for (let ut = 0, zt = Y; ut < zt; ut++) {
                const kt = L[ut];
                Mt = xt[ut];
                const w = [];
                for (let x = 0, O = kt.length; x < O; x++) {
                    const G = X(kt[x], Mt[x], it);
                    It(G.x, G.y, -ht), j === 0 && w.push(G);
                }
                j === 0 && J.push(w);
            }
        }
        Zt = _i.triangulateShape(et, J);
    } const ie = Zt.length, Jt = g + v; for (let et = 0; et < Q; et++) {
        const J = d ? X(M[et], Ht[et], Jt) : M[et];
        _ ? (I.copy(P.normals[0]).multiplyScalar(J.x), A.copy(P.binormals[0]).multiplyScalar(J.y), D.copy(S[0]).add(I).add(A), It(D.x, D.y, D.z)) : It(J.x, J.y, 0);
    } for (let et = 1; et <= h; et++)
        for (let J = 0; J < Q; J++) {
            const Z = d ? X(M[J], Ht[J], Jt) : M[J];
            _ ? (I.copy(P.normals[et]).multiplyScalar(Z.x), A.copy(P.binormals[et]).multiplyScalar(Z.y), D.copy(S[et]).add(I).add(A), It(D.x, D.y, D.z)) : It(Z.x, Z.y, u / h * et);
        } for (let et = m - 1; et >= 0; et--) {
        const J = et / m, Z = f * Math.cos(J * Math.PI / 2), j = g * Math.sin(J * Math.PI / 2) + v;
        for (let ht = 0, it = V.length; ht < it; ht++) {
            const ut = X(V[ht], dt[ht], j);
            It(ut.x, ut.y, u + Z);
        }
        for (let ht = 0, it = L.length; ht < it; ht++) {
            const ut = L[ht];
            Mt = xt[ht];
            for (let zt = 0, kt = ut.length; zt < kt; zt++) {
                const w = X(ut[zt], Mt[zt], j);
                _ ? It(w.x, w.y + S[h - 1].y, S[h - 1].x + Z) : It(w.x, w.y, u + Z);
            }
        }
    } $(), nt(); function $() { const et = i.length / 3; if (d) {
        let J = 0, Z = Q * J;
        for (let j = 0; j < ie; j++) {
            const ht = Zt[j];
            Et(ht[2] + Z, ht[1] + Z, ht[0] + Z);
        }
        J = h + m * 2, Z = Q * J;
        for (let j = 0; j < ie; j++) {
            const ht = Zt[j];
            Et(ht[0] + Z, ht[1] + Z, ht[2] + Z);
        }
    }
    else {
        for (let J = 0; J < ie; J++) {
            const Z = Zt[J];
            Et(Z[2], Z[1], Z[0]);
        }
        for (let J = 0; J < ie; J++) {
            const Z = Zt[J];
            Et(Z[0] + Q * h, Z[1] + Q * h, Z[2] + Q * h);
        }
    } n.addGroup(et, i.length / 3 - et, 0); } function nt() { const et = i.length / 3; let J = 0; yt(V, J), J += V.length; for (let Z = 0, j = L.length; Z < j; Z++) {
        const ht = L[Z];
        yt(ht, J), J += ht.length;
    } n.addGroup(et, i.length / 3 - et, 1); } function yt(et, J) { let Z = et.length; for (; --Z >= 0;) {
        const j = Z;
        let ht = Z - 1;
        ht < 0 && (ht = et.length - 1);
        for (let it = 0, ut = h + m * 2; it < ut; it++) {
            const zt = Q * it, kt = Q * (it + 1), w = J + j + zt, x = J + ht + zt, O = J + ht + kt, G = J + j + kt;
            $t(w, x, O, G);
        }
    } } function It(et, J, Z) { c.push(et), c.push(J), c.push(Z); } function Et(et, J, Z) { ce(et), ce(J), ce(Z); const j = i.length / 3, ht = E.generateTopUV(n, i, j - 3, j - 2, j - 1); C(ht[0]), C(ht[1]), C(ht[2]); } function $t(et, J, Z, j) { ce(et), ce(J), ce(j), ce(J), ce(Z), ce(j); const ht = i.length / 3, it = E.generateSideWallUV(n, i, ht - 6, ht - 3, ht - 2, ht - 1); C(it[0]), C(it[1]), C(it[3]), C(it[1]), C(it[2]), C(it[3]); } function ce(et) { i.push(c[et * 3 + 0]), i.push(c[et * 3 + 1]), i.push(c[et * 3 + 2]); } function C(et) { r.push(et.x), r.push(et.y); } } }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    toJSON() { const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options; return cd(e, n, t); }
    static fromJSON(t, e) { const n = []; for (let r = 0, a = t.shapes.length; r < a; r++) {
        const o = e[t.shapes[r]];
        n.push(o);
    } const i = t.options.extrudePath; return i !== void 0 && (t.options.extrudePath = new nr[i.type]().fromJSON(i)), new fo(n, t.options); }
}
const ld = { generateTopUV: function (s, t, e, n, i) { const r = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], c = t[n * 3 + 1], l = t[i * 3], h = t[i * 3 + 1]; return [new ct(r, a), new ct(o, c), new ct(l, h)]; }, generateSideWallUV: function (s, t, e, n, i, r) { const a = t[e * 3], o = t[e * 3 + 1], c = t[e * 3 + 2], l = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], d = t[i * 3], f = t[i * 3 + 1], g = t[i * 3 + 2], v = t[r * 3], m = t[r * 3 + 1], p = t[r * 3 + 2]; return Math.abs(o - h) < Math.abs(a - l) ? [new ct(a, 1 - c), new ct(l, 1 - u), new ct(d, 1 - g), new ct(v, 1 - p)] : [new ct(o, 1 - c), new ct(h, 1 - u), new ct(f, 1 - g), new ct(m, 1 - p)]; } };
function cd(s, t, e) { if (e.shapes = [], Array.isArray(s))
    for (let n = 0, i = s.length; n < i; n++) {
        const r = s[n];
        e.shapes.push(r.uuid);
    }
else
    e.shapes.push(s.uuid); return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e; }
class lr extends co {
    constructor(t = 1, e = 0) { const n = (1 + Math.sqrt(5)) / 2, i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1]; super(i, r, t, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e }; }
    static fromJSON(t) { return new lr(t.radius, t.detail); }
}
class dn extends _e {
    constructor(t = 1, e = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i }; const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = t / o, d = e / c, f = [], g = [], v = [], m = []; for (let p = 0; p < h; p++) {
        const E = p * d - a;
        for (let S = 0; S < l; S++) {
            const _ = S * u - r;
            g.push(_, -E, 0), v.push(0, 0, 1), m.push(S / o), m.push(1 - p / c);
        }
    } for (let p = 0; p < c; p++)
        for (let E = 0; E < o; E++) {
            const S = E + l * p, _ = E + l * (p + 1), P = E + 1 + l * (p + 1), A = E + 1 + l * p;
            f.push(S, _, A), f.push(_, P, A);
        } this.setIndex(f), this.setAttribute("position", new ne(g, 3)), this.setAttribute("normal", new ne(v, 3)), this.setAttribute("uv", new ne(m, 2)); }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new dn(t.width, t.height, t.widthSegments, t.heightSegments); }
}
class cr extends _e {
    constructor(t = .5, e = 1, n = 32, i = 1, r = 0, a = Math.PI * 2) { super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: a }, n = Math.max(3, n), i = Math.max(1, i); const o = [], c = [], l = [], h = []; let u = t; const d = (e - t) / i, f = new T, g = new ct; for (let v = 0; v <= i; v++) {
        for (let m = 0; m <= n; m++) {
            const p = r + m / n * a;
            f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), g.x = (f.x / e + 1) / 2, g.y = (f.y / e + 1) / 2, h.push(g.x, g.y);
        }
        u += d;
    } for (let v = 0; v < i; v++) {
        const m = v * (n + 1);
        for (let p = 0; p < n; p++) {
            const E = p + m, S = E, _ = E + n + 1, P = E + n + 2, A = E + 1;
            o.push(S, _, A), o.push(_, P, A);
        }
    } this.setIndex(o), this.setAttribute("position", new ne(c, 3)), this.setAttribute("normal", new ne(l, 3)), this.setAttribute("uv", new ne(h, 2)); }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new cr(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength); }
}
class On extends _e {
    constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, a = 0, o = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n)); const c = Math.min(a + o, Math.PI); let l = 0; const h = [], u = new T, d = new T, f = [], g = [], v = [], m = []; for (let p = 0; p <= n; p++) {
        const E = [], S = p / n;
        let _ = 0;
        p === 0 && a === 0 ? _ = .5 / e : p === n && c === Math.PI && (_ = -.5 / e);
        for (let P = 0; P <= e; P++) {
            const A = P / e;
            u.x = -t * Math.cos(i + A * r) * Math.sin(a + S * o), u.y = t * Math.cos(a + S * o), u.z = t * Math.sin(i + A * r) * Math.sin(a + S * o), g.push(u.x, u.y, u.z), d.copy(u).normalize(), v.push(d.x, d.y, d.z), m.push(A + _, 1 - S), E.push(l++);
        }
        h.push(E);
    } for (let p = 0; p < n; p++)
        for (let E = 0; E < e; E++) {
            const S = h[p][E + 1], _ = h[p][E], P = h[p + 1][E], A = h[p + 1][E + 1];
            (p !== 0 || a > 0) && f.push(S, _, A), (p !== n - 1 || c < Math.PI) && f.push(_, P, A);
        } this.setIndex(f), this.setAttribute("position", new ne(g, 3)), this.setAttribute("normal", new ne(v, 3)), this.setAttribute("uv", new ne(m, 2)); }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new On(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength); }
}
class ps extends _e {
    constructor(t = 1, e = .4, n = 12, i = 48, r = Math.PI * 2) { super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i); const a = [], o = [], c = [], l = [], h = new T, u = new T, d = new T; for (let f = 0; f <= n; f++)
        for (let g = 0; g <= i; g++) {
            const v = g / i * r, m = f / n * Math.PI * 2;
            u.x = (t + e * Math.cos(m)) * Math.cos(v), u.y = (t + e * Math.cos(m)) * Math.sin(v), u.z = e * Math.sin(m), o.push(u.x, u.y, u.z), h.x = t * Math.cos(v), h.y = t * Math.sin(v), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(g / i), l.push(f / n);
        } for (let f = 1; f <= n; f++)
        for (let g = 1; g <= i; g++) {
            const v = (i + 1) * f + g - 1, m = (i + 1) * (f - 1) + g - 1, p = (i + 1) * (f - 1) + g, E = (i + 1) * f + g;
            a.push(v, m, E), a.push(m, p, E);
        } this.setIndex(a), this.setAttribute("position", new ne(o, 3)), this.setAttribute("normal", new ne(c, 3)), this.setAttribute("uv", new ne(l, 2)); }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    static fromJSON(t) { return new ps(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc); }
}
class po extends _e {
    constructor(t = new Ec(new T(-1, -1, 0), new T(-1, 1, 0), new T(1, 1, 0)), e = 64, n = 1, i = 8, r = !1) { super(), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: n, radialSegments: i, closed: r }; const a = t.computeFrenetFrames(e, r); this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals; const o = new T, c = new T, l = new ct; let h = new T; const u = [], d = [], f = [], g = []; v(), this.setIndex(g), this.setAttribute("position", new ne(u, 3)), this.setAttribute("normal", new ne(d, 3)), this.setAttribute("uv", new ne(f, 2)); function v() { for (let S = 0; S < e; S++)
        m(S); m(r === !1 ? e : 0), E(), p(); } function m(S) { h = t.getPointAt(S / e, h); const _ = a.normals[S], P = a.binormals[S]; for (let A = 0; A <= i; A++) {
        const I = A / i * Math.PI * 2, D = Math.sin(I), b = -Math.cos(I);
        c.x = b * _.x + D * P.x, c.y = b * _.y + D * P.y, c.z = b * _.z + D * P.z, c.normalize(), d.push(c.x, c.y, c.z), o.x = h.x + n * c.x, o.y = h.y + n * c.y, o.z = h.z + n * c.z, u.push(o.x, o.y, o.z);
    } } function p() { for (let S = 1; S <= e; S++)
        for (let _ = 1; _ <= i; _++) {
            const P = (i + 1) * (S - 1) + (_ - 1), A = (i + 1) * S + (_ - 1), I = (i + 1) * S + _, D = (i + 1) * (S - 1) + _;
            g.push(P, A, D), g.push(A, I, D);
        } } function E() { for (let S = 0; S <= e; S++)
        for (let _ = 0; _ <= i; _++)
            l.x = S / e, l.y = _ / i, f.push(l.x, l.y); } }
    copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this; }
    toJSON() { const t = super.toJSON(); return t.path = this.parameters.path.toJSON(), t; }
    static fromJSON(t) { return new po(new nr[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed); }
}
class ye extends Fi {
    constructor(t) { super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Pt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = sc, this.normalScale = new ct(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $e, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t); }
    copy(t) { return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this; }
}
class hd extends ye {
    constructor(t) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ct(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return Yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1); }, set: function (e) { this.ior = (1 + .4 * e) / (1 - .4 * e); } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Pt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Pt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Pt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t); }
    get anisotropy() { return this._anisotropy; }
    set anisotropy(t) { this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t; }
    get clearcoat() { return this._clearcoat; }
    set clearcoat(t) { this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t; }
    get iridescence() { return this._iridescence; }
    set iridescence(t) { this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t; }
    get dispersion() { return this._dispersion; }
    set dispersion(t) { this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t; }
    get sheen() { return this._sheen; }
    set sheen(t) { this._sheen > 0 != t > 0 && this.version++, this._sheen = t; }
    get transmission() { return this._transmission; }
    set transmission(t) { this._transmission > 0 != t > 0 && this.version++, this._transmission = t; }
    copy(t) { return super.copy(t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this; }
}
class ud extends Fi {
    constructor(t) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ph, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t); }
    copy(t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this; }
}
class dd extends Fi {
    constructor(t) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t); }
    copy(t) { return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this; }
}
class hr extends Me {
    constructor(t, e = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Pt(t), this.intensity = e; }
    dispose() { }
    copy(t, e) { return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this; }
    toJSON(t) { const e = super.toJSON(t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e; }
}
class Ic extends hr {
    constructor(t, e, n) { super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Me.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Pt(e); }
    copy(t, e) { return super.copy(t, e), this.groundColor.copy(t.groundColor), this; }
}
const Hr = new le, al = new T, ol = new T;
class Lc {
    constructor(t) { this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ct(512, 512), this.mapType = un, this.map = null, this.mapPass = null, this.matrix = new le, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new oo, this._frameExtents = new ct(1, 1), this._viewportCount = 1, this._viewports = [new ae(0, 0, 1, 1)]; }
    getViewportCount() { return this._viewportCount; }
    getFrustum() { return this._frustum; }
    updateMatrices(t) { const e = this.camera, n = this.matrix; al.setFromMatrixPosition(t.matrixWorld), e.position.copy(al), ol.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ol), e.updateMatrixWorld(), Hr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Hr, e.coordinateSystem, e.reversedDepth), e.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Hr); }
    getViewport(t) { return this._viewports[t]; }
    getFrameExtents() { return this._frameExtents; }
    dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose(); }
    copy(t) { return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.autoUpdate = t.autoUpdate, this.needsUpdate = t.needsUpdate, this.normalBias = t.normalBias, this.blurSamples = t.blurSamples, this.mapSize.copy(t.mapSize), this; }
    clone() { return new this.constructor().copy(this); }
    toJSON() { const t = {}; return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t; }
}
const ll = new le, Xi = new T, Gr = new T;
class fd extends Lc {
    constructor() { super(new Fe(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ct(4, 2), this._viewportCount = 6, this._viewports = [new ae(2, 1, 1, 1), new ae(0, 1, 1, 1), new ae(3, 1, 1, 1), new ae(1, 1, 1, 1), new ae(3, 0, 1, 1), new ae(1, 0, 1, 1)], this._cubeDirections = [new T(1, 0, 0), new T(-1, 0, 0), new T(0, 0, 1), new T(0, 0, -1), new T(0, 1, 0), new T(0, -1, 0)], this._cubeUps = [new T(0, 1, 0), new T(0, 1, 0), new T(0, 1, 0), new T(0, 1, 0), new T(0, 0, 1), new T(0, 0, -1)]; }
    updateMatrices(t, e = 0) { const n = this.camera, i = this.matrix, r = t.distance || n.far; r !== n.far && (n.far = r, n.updateProjectionMatrix()), Xi.setFromMatrixPosition(t.matrixWorld), n.position.copy(Xi), Gr.copy(n.position), Gr.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Gr), n.updateMatrixWorld(), i.makeTranslation(-Xi.x, -Xi.y, -Xi.z), ll.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ll, n.coordinateSystem, n.reversedDepth); }
}
class hs extends hr {
    constructor(t, e, n = 0, i = 2) { super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new fd; }
    get power() { return this.intensity * 4 * Math.PI; }
    set power(t) { this.intensity = t / (4 * Math.PI); }
    dispose() { this.shadow.dispose(); }
    copy(t, e) { return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this; }
}
class Dc extends pc {
    constructor(t = -1, e = 1, n = 1, i = -1, r = .1, a = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix(); }
    copy(t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this; }
    setViewOffset(t, e, n, i, r, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix(); }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix(); }
    updateProjectionMatrix() { const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let r = n - t, a = n + t, o = i + e, c = i - e; if (this.view !== null && this.view.enabled) {
        const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    } this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); }
    toJSON(t) { const e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e; }
}
class pd extends Lc {
    constructor() { super(new Dc(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0; }
}
class Uc extends hr {
    constructor(t, e) { super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Me.DEFAULT_UP), this.updateMatrix(), this.target = new Me, this.shadow = new pd; }
    dispose() { this.shadow.dispose(); }
    copy(t) { return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this; }
}
class md extends hr {
    constructor(t, e) { super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight"; }
}
class gd extends Fe {
    constructor(t = []) { super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t; }
}
function cl(s, t, e, n) { const i = vd(n); switch (e) {
    case ec: return s * t;
    case to: return s * t / i.components * i.byteLength;
    case eo: return s * t / i.components * i.byteLength;
    case ic: return s * t * 2 / i.components * i.byteLength;
    case no: return s * t * 2 / i.components * i.byteLength;
    case nc: return s * t * 3 / i.components * i.byteLength;
    case Qe: return s * t * 4 / i.components * i.byteLength;
    case io: return s * t * 4 / i.components * i.byteLength;
    case Ys:
    case $s: return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case js:
    case Zs: return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case fa:
    case ma: return Math.max(s, 16) * Math.max(t, 8) / 4;
    case da:
    case pa: return Math.max(s, 8) * Math.max(t, 8) / 2;
    case ga:
    case va: return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case xa: return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case _a: return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ya: return Math.floor((s + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Ma: return Math.floor((s + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Sa: return Math.floor((s + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ba: return Math.floor((s + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ea: return Math.floor((s + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case wa: return Math.floor((s + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Ta: return Math.floor((s + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Aa: return Math.floor((s + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Ra: return Math.floor((s + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Ca: return Math.floor((s + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Pa: return Math.floor((s + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ia: return Math.floor((s + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case La: return Math.floor((s + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Da:
    case Ua:
    case Na: return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
    case Fa:
    case Oa: return Math.ceil(s / 4) * Math.ceil(t / 4) * 8;
    case ka:
    case za: return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
} throw new Error(`Unable to determine texture byte length for ${e} format.`); }
function vd(s) { switch (s) {
    case un:
    case Jl: return { byteLength: 1, components: 1 };
    case es:
    case Kl:
    case ds: return { byteLength: 2, components: 1 };
    case Ka:
    case Qa: return { byteLength: 2, components: 4 };
    case Kn:
    case Ja:
    case ln: return { byteLength: 4, components: 1 };
    case Ql:
    case tc: return { byteLength: 4, components: 3 };
} throw new Error(`Unknown texture type ${s}.`); }
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Za } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Za);
function Nc() { let s = null, t = !1, e = null, n = null; function i(r, a) { e(r, a), n = s.requestAnimationFrame(i); } return { start: function () { t !== !0 && e !== null && (n = s.requestAnimationFrame(i), t = !0); }, stop: function () { s.cancelAnimationFrame(n), t = !1; }, setAnimationLoop: function (r) { e = r; }, setContext: function (r) { s = r; } }; }
function xd(s) { const t = new WeakMap; function e(o, c) { const l = o.array, h = o.usage, u = l.byteLength, d = s.createBuffer(); s.bindBuffer(c, d), s.bufferData(c, l, h), o.onUploadCallback(); let f; if (l instanceof Float32Array)
    f = s.FLOAT;
else if (typeof Float16Array < "u" && l instanceof Float16Array)
    f = s.HALF_FLOAT;
else if (l instanceof Uint16Array)
    o.isFloat16BufferAttribute ? f = s.HALF_FLOAT : f = s.UNSIGNED_SHORT;
else if (l instanceof Int16Array)
    f = s.SHORT;
else if (l instanceof Uint32Array)
    f = s.UNSIGNED_INT;
else if (l instanceof Int32Array)
    f = s.INT;
else if (l instanceof Int8Array)
    f = s.BYTE;
else if (l instanceof Uint8Array)
    f = s.UNSIGNED_BYTE;
else if (l instanceof Uint8ClampedArray)
    f = s.UNSIGNED_BYTE;
else
    throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l); return { buffer: d, type: f, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: u }; } function n(o, c, l) { const h = c.array, u = c.updateRanges; if (s.bindBuffer(l, o), u.length === 0)
    s.bufferSubData(l, 0, h);
else {
    u.sort((f, g) => f.start - g.start);
    let d = 0;
    for (let f = 1; f < u.length; f++) {
        const g = u[d], v = u[f];
        v.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, v.start + v.count - g.start) : (++d, u[d] = v);
    }
    u.length = d + 1;
    for (let f = 0, g = u.length; f < g; f++) {
        const v = u[f];
        s.bufferSubData(l, v.start * h.BYTES_PER_ELEMENT, h, v.start, v.count);
    }
    c.clearUpdateRanges();
} c.onUploadCallback(); } function i(o) { return o.isInterleavedBufferAttribute && (o = o.data), t.get(o); } function r(o) { o.isInterleavedBufferAttribute && (o = o.data); const c = t.get(o); c && (s.deleteBuffer(c.buffer), t.delete(o)); } function a(o, c) { if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
    const h = t.get(o);
    (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
    return;
} const l = t.get(o); if (l === void 0)
    t.set(o, e(o, c));
else if (l.version < o.version) {
    if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
    n(l.buffer, o, c), l.version = o.version;
} } return { get: i, remove: r, update: a }; }
var _d = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, yd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Md = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ed = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, wd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Td = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ad = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Rd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Cd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Pd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Id = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ld = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Dd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ud = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Nd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Od = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, kd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Bd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Hd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Gd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Vd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Wd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, qd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Xd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Yd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, $d = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, jd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Jd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Kd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Qd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, tf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ef = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, nf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, sf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, rf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, af = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, of = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, cf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, hf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, uf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, df = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, ff = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, pf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, mf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, gf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, vf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, xf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, _f = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, yf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Mf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Sf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, bf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ef = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Tf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Af = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Rf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Cf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Pf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, If = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Lf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Df = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Uf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Nf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Ff = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Of = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, kf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, zf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Vf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, qf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Xf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, $f = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, jf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Zf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Jf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Kf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Qf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, tp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ep = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, np = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ip = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, sp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, rp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ap = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, op = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, lp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, cp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, hp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, up = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, dp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, fp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, pp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, mp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, vp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, xp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _p = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, yp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ep = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Tp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ap = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Rp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Cp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ip = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Dp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Up = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Np = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Op = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, kp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Bp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Wp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, $p = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Jp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Kp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Xt = { alphahash_fragment: _d, alphahash_pars_fragment: yd, alphamap_fragment: Md, alphamap_pars_fragment: Sd, alphatest_fragment: bd, alphatest_pars_fragment: Ed, aomap_fragment: wd, aomap_pars_fragment: Td, batching_pars_vertex: Ad, batching_vertex: Rd, begin_vertex: Cd, beginnormal_vertex: Pd, bsdfs: Id, iridescence_fragment: Ld, bumpmap_pars_fragment: Dd, clipping_planes_fragment: Ud, clipping_planes_pars_fragment: Nd, clipping_planes_pars_vertex: Fd, clipping_planes_vertex: Od, color_fragment: kd, color_pars_fragment: zd, color_pars_vertex: Bd, color_vertex: Hd, common: Gd, cube_uv_reflection_fragment: Vd, defaultnormal_vertex: Wd, displacementmap_pars_vertex: qd, displacementmap_vertex: Xd, emissivemap_fragment: Yd, emissivemap_pars_fragment: $d, colorspace_fragment: jd, colorspace_pars_fragment: Zd, envmap_fragment: Jd, envmap_common_pars_fragment: Kd, envmap_pars_fragment: Qd, envmap_pars_vertex: tf, envmap_physical_pars_fragment: df, envmap_vertex: ef, fog_vertex: nf, fog_pars_vertex: sf, fog_fragment: rf, fog_pars_fragment: af, gradientmap_pars_fragment: of, lightmap_pars_fragment: lf, lights_lambert_fragment: cf, lights_lambert_pars_fragment: hf, lights_pars_begin: uf, lights_toon_fragment: ff, lights_toon_pars_fragment: pf, lights_phong_fragment: mf, lights_phong_pars_fragment: gf, lights_physical_fragment: vf, lights_physical_pars_fragment: xf, lights_fragment_begin: _f, lights_fragment_maps: yf, lights_fragment_end: Mf, logdepthbuf_fragment: Sf, logdepthbuf_pars_fragment: bf, logdepthbuf_pars_vertex: Ef, logdepthbuf_vertex: wf, map_fragment: Tf, map_pars_fragment: Af, map_particle_fragment: Rf, map_particle_pars_fragment: Cf, metalnessmap_fragment: Pf, metalnessmap_pars_fragment: If, morphinstance_vertex: Lf, morphcolor_vertex: Df, morphnormal_vertex: Uf, morphtarget_pars_vertex: Nf, morphtarget_vertex: Ff, normal_fragment_begin: Of, normal_fragment_maps: kf, normal_pars_fragment: zf, normal_pars_vertex: Bf, normal_vertex: Hf, normalmap_pars_fragment: Gf, clearcoat_normal_fragment_begin: Vf, clearcoat_normal_fragment_maps: Wf, clearcoat_pars_fragment: qf, iridescence_pars_fragment: Xf, opaque_fragment: Yf, packing: $f, premultiplied_alpha_fragment: jf, project_vertex: Zf, dithering_fragment: Jf, dithering_pars_fragment: Kf, roughnessmap_fragment: Qf, roughnessmap_pars_fragment: tp, shadowmap_pars_fragment: ep, shadowmap_pars_vertex: np, shadowmap_vertex: ip, shadowmask_pars_fragment: sp, skinbase_vertex: rp, skinning_pars_vertex: ap, skinning_vertex: op, skinnormal_vertex: lp, specularmap_fragment: cp, specularmap_pars_fragment: hp, tonemapping_fragment: up, tonemapping_pars_fragment: dp, transmission_fragment: fp, transmission_pars_fragment: pp, uv_pars_fragment: mp, uv_pars_vertex: gp, uv_vertex: vp, worldpos_vertex: xp, background_vert: _p, background_frag: yp, backgroundCube_vert: Mp, backgroundCube_frag: Sp, cube_vert: bp, cube_frag: Ep, depth_vert: wp, depth_frag: Tp, distanceRGBA_vert: Ap, distanceRGBA_frag: Rp, equirect_vert: Cp, equirect_frag: Pp, linedashed_vert: Ip, linedashed_frag: Lp, meshbasic_vert: Dp, meshbasic_frag: Up, meshlambert_vert: Np, meshlambert_frag: Fp, meshmatcap_vert: Op, meshmatcap_frag: kp, meshnormal_vert: zp, meshnormal_frag: Bp, meshphong_vert: Hp, meshphong_frag: Gp, meshphysical_vert: Vp, meshphysical_frag: Wp, meshtoon_vert: qp, meshtoon_frag: Xp, points_vert: Yp, points_frag: $p, shadow_vert: jp, shadow_frag: Zp, sprite_vert: Jp, sprite_frag: Kp }, pt = { common: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Vt }, alphaMap: { value: null }, alphaMapTransform: { value: new Vt }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Vt } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Vt }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Vt } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Vt } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Vt }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Vt }, normalScale: { value: new ct(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Vt }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Vt } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Vt } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Vt } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Vt }, alphaTest: { value: 0 }, uvTransform: { value: new Vt } }, sprite: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, center: { value: new ct(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Vt }, alphaMap: { value: null }, alphaMapTransform: { value: new Vt }, alphaTest: { value: 0 } } }, sn = { basic: { uniforms: Le([pt.common, pt.specularmap, pt.envmap, pt.aomap, pt.lightmap, pt.fog]), vertexShader: Xt.meshbasic_vert, fragmentShader: Xt.meshbasic_frag }, lambert: { uniforms: Le([pt.common, pt.specularmap, pt.envmap, pt.aomap, pt.lightmap, pt.emissivemap, pt.bumpmap, pt.normalmap, pt.displacementmap, pt.fog, pt.lights, { emissive: { value: new Pt(0) } }]), vertexShader: Xt.meshlambert_vert, fragmentShader: Xt.meshlambert_frag }, phong: { uniforms: Le([pt.common, pt.specularmap, pt.envmap, pt.aomap, pt.lightmap, pt.emissivemap, pt.bumpmap, pt.normalmap, pt.displacementmap, pt.fog, pt.lights, { emissive: { value: new Pt(0) }, specular: { value: new Pt(1118481) }, shininess: { value: 30 } }]), vertexShader: Xt.meshphong_vert, fragmentShader: Xt.meshphong_frag }, standard: { uniforms: Le([pt.common, pt.envmap, pt.aomap, pt.lightmap, pt.emissivemap, pt.bumpmap, pt.normalmap, pt.displacementmap, pt.roughnessmap, pt.metalnessmap, pt.fog, pt.lights, { emissive: { value: new Pt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Xt.meshphysical_vert, fragmentShader: Xt.meshphysical_frag }, toon: { uniforms: Le([pt.common, pt.aomap, pt.lightmap, pt.emissivemap, pt.bumpmap, pt.normalmap, pt.displacementmap, pt.gradientmap, pt.fog, pt.lights, { emissive: { value: new Pt(0) } }]), vertexShader: Xt.meshtoon_vert, fragmentShader: Xt.meshtoon_frag }, matcap: { uniforms: Le([pt.common, pt.bumpmap, pt.normalmap, pt.displacementmap, pt.fog, { matcap: { value: null } }]), vertexShader: Xt.meshmatcap_vert, fragmentShader: Xt.meshmatcap_frag }, points: { uniforms: Le([pt.points, pt.fog]), vertexShader: Xt.points_vert, fragmentShader: Xt.points_frag }, dashed: { uniforms: Le([pt.common, pt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Xt.linedashed_vert, fragmentShader: Xt.linedashed_frag }, depth: { uniforms: Le([pt.common, pt.displacementmap]), vertexShader: Xt.depth_vert, fragmentShader: Xt.depth_frag }, normal: { uniforms: Le([pt.common, pt.bumpmap, pt.normalmap, pt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Xt.meshnormal_vert, fragmentShader: Xt.meshnormal_frag }, sprite: { uniforms: Le([pt.sprite, pt.fog]), vertexShader: Xt.sprite_vert, fragmentShader: Xt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Vt }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Xt.background_vert, fragmentShader: Xt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Vt } }, vertexShader: Xt.backgroundCube_vert, fragmentShader: Xt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Xt.cube_vert, fragmentShader: Xt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Xt.equirect_vert, fragmentShader: Xt.equirect_frag }, distanceRGBA: { uniforms: Le([pt.common, pt.displacementmap, { referencePosition: { value: new T }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Xt.distanceRGBA_vert, fragmentShader: Xt.distanceRGBA_frag }, shadow: { uniforms: Le([pt.lights, pt.fog, { color: { value: new Pt(0) }, opacity: { value: 1 } }]), vertexShader: Xt.shadow_vert, fragmentShader: Xt.shadow_frag } };
sn.physical = { uniforms: Le([sn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Vt }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Vt }, clearcoatNormalScale: { value: new ct(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Vt }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Vt }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Vt }, sheen: { value: 0 }, sheenColor: { value: new Pt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Vt }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Vt }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Vt }, transmissionSamplerSize: { value: new ct }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Vt }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Pt(0) }, specularColor: { value: new Pt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Vt }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Vt }, anisotropyVector: { value: new ct }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Vt } }]), vertexShader: Xt.meshphysical_vert, fragmentShader: Xt.meshphysical_frag };
const Gs = { r: 0, b: 0, g: 0 }, Wn = new $e, Qp = new le;
function tm(s, t, e, n, i, r, a) { const o = new Pt(0); let c = r === !0 ? 0 : 1, l, h, u = null, d = 0, f = null; function g(S) { let _ = S.isScene === !0 ? S.background : null; return _ && _.isTexture && (_ = (S.backgroundBlurriness > 0 ? e : t).get(_)), _; } function v(S) { let _ = !1; const P = g(S); P === null ? p(o, c) : P && P.isColor && (p(P, 1), _ = !0); const A = s.xr.getEnvironmentBlendMode(); A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || _) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil)); } function m(S, _) { const P = g(_); P && (P.isCubeTexture || P.mapping === sr) ? (h === void 0 && (h = new qt(new Oi(1, 1, 1), new en({ name: "BackgroundCubeMaterial", uniforms: Pi(sn.backgroundCube.uniforms), vertexShader: sn.backgroundCube.vertexShader, fragmentShader: sn.backgroundCube.fragmentShader, side: Re, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (A, I, D) { this.matrixWorld.copyPosition(D.matrixWorld); }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value; } }), i.update(h)), Wn.copy(_.backgroundRotation), Wn.x *= -1, Wn.y *= -1, Wn.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === !1 && (Wn.y *= -1, Wn.z *= -1), h.material.uniforms.envMap.value = P, h.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Wn)), h.material.toneMapped = Qt.getTransfer(P.colorSpace) !== re, (u !== P || d !== P.version || f !== s.toneMapping) && (h.material.needsUpdate = !0, u = P, d = P.version, f = s.toneMapping), h.layers.enableAll(), S.unshift(h, h.geometry, h.material, 0, 0, null)) : P && P.isTexture && (l === void 0 && (l = new qt(new dn(2, 2), new en({ name: "BackgroundMaterial", uniforms: Pi(sn.background.uniforms), vertexShader: sn.background.vertexShader, fragmentShader: sn.background.fragmentShader, side: En, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value; } }), i.update(l)), l.material.uniforms.t2D.value = P, l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l.material.toneMapped = Qt.getTransfer(P.colorSpace) !== re, P.matrixAutoUpdate === !0 && P.updateMatrix(), l.material.uniforms.uvTransform.value.copy(P.matrix), (u !== P || d !== P.version || f !== s.toneMapping) && (l.material.needsUpdate = !0, u = P, d = P.version, f = s.toneMapping), l.layers.enableAll(), S.unshift(l, l.geometry, l.material, 0, 0, null)); } function p(S, _) { S.getRGB(Gs, fc(s)), n.buffers.color.setClear(Gs.r, Gs.g, Gs.b, _, a); } function E() { h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0); } return { getClearColor: function () { return o; }, setClearColor: function (S, _ = 1) { o.set(S), c = _, p(o, c); }, getClearAlpha: function () { return c; }, setClearAlpha: function (S) { c = S, p(o, c); }, render: v, addToRenderList: m, dispose: E }; }
function em(s, t) { const e = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null); let r = i, a = !1; function o(M, L, k, H, Y) { let V = !1; const X = u(H, k, L); r !== X && (r = X, l(r.object)), V = f(M, H, k, Y), V && g(M, H, k, Y), Y !== null && t.update(Y, s.ELEMENT_ARRAY_BUFFER), (V || a) && (a = !1, _(M, L, k, H), Y !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer)); } function c() { return s.createVertexArray(); } function l(M) { return s.bindVertexArray(M); } function h(M) { return s.deleteVertexArray(M); } function u(M, L, k) { const H = k.wireframe === !0; let Y = n[M.id]; Y === void 0 && (Y = {}, n[M.id] = Y); let V = Y[L.id]; V === void 0 && (V = {}, Y[L.id] = V); let X = V[H]; return X === void 0 && (X = d(c()), V[H] = X), X; } function d(M) { const L = [], k = [], H = []; for (let Y = 0; Y < e; Y++)
    L[Y] = 0, k[Y] = 0, H[Y] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: L, enabledAttributes: k, attributeDivisors: H, object: M, attributes: {}, index: null }; } function f(M, L, k, H) { const Y = r.attributes, V = L.attributes; let X = 0; const Q = k.getAttributes(); for (const W in Q)
    if (Q[W].location >= 0) {
        const xt = Y[W];
        let Mt = V[W];
        if (Mt === void 0 && (W === "instanceMatrix" && M.instanceMatrix && (Mt = M.instanceMatrix), W === "instanceColor" && M.instanceColor && (Mt = M.instanceColor)), xt === void 0 || xt.attribute !== Mt || Mt && xt.data !== Mt.data)
            return !0;
        X++;
    } return r.attributesNum !== X || r.index !== H; } function g(M, L, k, H) { const Y = {}, V = L.attributes; let X = 0; const Q = k.getAttributes(); for (const W in Q)
    if (Q[W].location >= 0) {
        let xt = V[W];
        xt === void 0 && (W === "instanceMatrix" && M.instanceMatrix && (xt = M.instanceMatrix), W === "instanceColor" && M.instanceColor && (xt = M.instanceColor));
        const Mt = {};
        Mt.attribute = xt, xt && xt.data && (Mt.data = xt.data), Y[W] = Mt, X++;
    } r.attributes = Y, r.attributesNum = X, r.index = H; } function v() { const M = r.newAttributes; for (let L = 0, k = M.length; L < k; L++)
    M[L] = 0; } function m(M) { p(M, 0); } function p(M, L) { const k = r.newAttributes, H = r.enabledAttributes, Y = r.attributeDivisors; k[M] = 1, H[M] === 0 && (s.enableVertexAttribArray(M), H[M] = 1), Y[M] !== L && (s.vertexAttribDivisor(M, L), Y[M] = L); } function E() { const M = r.newAttributes, L = r.enabledAttributes; for (let k = 0, H = L.length; k < H; k++)
    L[k] !== M[k] && (s.disableVertexAttribArray(k), L[k] = 0); } function S(M, L, k, H, Y, V, X) { X === !0 ? s.vertexAttribIPointer(M, L, k, Y, V) : s.vertexAttribPointer(M, L, k, H, Y, V); } function _(M, L, k, H) { v(); const Y = H.attributes, V = k.getAttributes(), X = L.defaultAttributeValues; for (const Q in V) {
    const W = V[Q];
    if (W.location >= 0) {
        let dt = Y[Q];
        if (dt === void 0 && (Q === "instanceMatrix" && M.instanceMatrix && (dt = M.instanceMatrix), Q === "instanceColor" && M.instanceColor && (dt = M.instanceColor)), dt !== void 0) {
            const xt = dt.normalized, Mt = dt.itemSize, Ht = t.get(dt);
            if (Ht === void 0)
                continue;
            const Zt = Ht.buffer, ie = Ht.type, Jt = Ht.bytesPerElement, $ = ie === s.INT || ie === s.UNSIGNED_INT || dt.gpuType === Ja;
            if (dt.isInterleavedBufferAttribute) {
                const nt = dt.data, yt = nt.stride, It = dt.offset;
                if (nt.isInstancedInterleavedBuffer) {
                    for (let Et = 0; Et < W.locationSize; Et++)
                        p(W.location + Et, nt.meshPerAttribute);
                    M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = nt.meshPerAttribute * nt.count);
                }
                else
                    for (let Et = 0; Et < W.locationSize; Et++)
                        m(W.location + Et);
                s.bindBuffer(s.ARRAY_BUFFER, Zt);
                for (let Et = 0; Et < W.locationSize; Et++)
                    S(W.location + Et, Mt / W.locationSize, ie, xt, yt * Jt, (It + Mt / W.locationSize * Et) * Jt, $);
            }
            else {
                if (dt.isInstancedBufferAttribute) {
                    for (let nt = 0; nt < W.locationSize; nt++)
                        p(W.location + nt, dt.meshPerAttribute);
                    M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = dt.meshPerAttribute * dt.count);
                }
                else
                    for (let nt = 0; nt < W.locationSize; nt++)
                        m(W.location + nt);
                s.bindBuffer(s.ARRAY_BUFFER, Zt);
                for (let nt = 0; nt < W.locationSize; nt++)
                    S(W.location + nt, Mt / W.locationSize, ie, xt, Mt * Jt, Mt / W.locationSize * nt * Jt, $);
            }
        }
        else if (X !== void 0) {
            const xt = X[Q];
            if (xt !== void 0)
                switch (xt.length) {
                    case 2:
                        s.vertexAttrib2fv(W.location, xt);
                        break;
                    case 3:
                        s.vertexAttrib3fv(W.location, xt);
                        break;
                    case 4:
                        s.vertexAttrib4fv(W.location, xt);
                        break;
                    default: s.vertexAttrib1fv(W.location, xt);
                }
        }
    }
} E(); } function P() { D(); for (const M in n) {
    const L = n[M];
    for (const k in L) {
        const H = L[k];
        for (const Y in H)
            h(H[Y].object), delete H[Y];
        delete L[k];
    }
    delete n[M];
} } function A(M) { if (n[M.id] === void 0)
    return; const L = n[M.id]; for (const k in L) {
    const H = L[k];
    for (const Y in H)
        h(H[Y].object), delete H[Y];
    delete L[k];
} delete n[M.id]; } function I(M) { for (const L in n) {
    const k = n[L];
    if (k[M.id] === void 0)
        continue;
    const H = k[M.id];
    for (const Y in H)
        h(H[Y].object), delete H[Y];
    delete k[M.id];
} } function D() { b(), a = !0, r !== i && (r = i, l(r.object)); } function b() { i.geometry = null, i.program = null, i.wireframe = !1; } return { setup: o, reset: D, resetDefaultState: b, dispose: P, releaseStatesOfGeometry: A, releaseStatesOfProgram: I, initAttributes: v, enableAttribute: m, disableUnusedAttributes: E }; }
function nm(s, t, e) { let n; function i(l) { n = l; } function r(l, h) { s.drawArrays(n, l, h), e.update(h, n, 1); } function a(l, h, u) { u !== 0 && (s.drawArraysInstanced(n, l, h, u), e.update(h, n, u)); } function o(l, h, u) { if (u === 0)
    return; t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u); let f = 0; for (let g = 0; g < u; g++)
    f += h[g]; e.update(f, n, 1); } function c(l, h, u, d) { if (u === 0)
    return; const f = t.get("WEBGL_multi_draw"); if (f === null)
    for (let g = 0; g < l.length; g++)
        a(l[g], h[g], d[g]);
else {
    f.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u);
    let g = 0;
    for (let v = 0; v < u; v++)
        g += h[v] * d[v];
    e.update(g, n, 1);
} } this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c; }
function im(s, t, e, n) { let i; function r() { if (i !== void 0)
    return i; if (t.has("EXT_texture_filter_anisotropic") === !0) {
    const I = t.get("EXT_texture_filter_anisotropic");
    i = s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
}
else
    i = 0; return i; } function a(I) { return !(I !== Qe && n.convert(I) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)); } function o(I) { const D = I === ds && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float")); return !(I !== un && n.convert(I) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && I !== ln && !D); } function c(I) { if (I === "highp") {
    if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
    I = "mediump";
} return I === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"; } let l = e.precision !== void 0 ? e.precision : "highp"; const h = c(l); h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h); const u = e.logarithmicDepthBuffer === !0, d = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), f = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), E = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), S = s.getParameter(s.MAX_VARYING_VECTORS), _ = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), P = g > 0, A = s.getParameter(s.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: u, reversedDepthBuffer: d, maxTextures: f, maxVertexTextures: g, maxTextureSize: v, maxCubemapSize: m, maxAttributes: p, maxVertexUniforms: E, maxVaryings: S, maxFragmentUniforms: _, vertexTextures: P, maxSamples: A }; }
function sm(s) { const t = this; let e = null, n = 0, i = !1, r = !1; const a = new Xn, o = new Vt, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { const f = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, f; }, this.beginShadows = function () { r = !0, h(null); }, this.endShadows = function () { r = !1; }, this.setGlobalState = function (u, d) { e = h(u, d, 0); }, this.setState = function (u, d, f) { const g = u.clippingPlanes, v = u.clipIntersection, m = u.clipShadows, p = s.get(u); if (!i || g === null || g.length === 0 || r && !m)
    r ? h(null) : l();
else {
    const E = r ? 0 : n, S = E * 4;
    let _ = p.clippingState || null;
    c.value = _, _ = h(g, d, S, f);
    for (let P = 0; P !== S; ++P)
        _[P] = e[P];
    p.clippingState = _, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += E;
} }; function l() { c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0; } function h(u, d, f, g) { const v = u !== null ? u.length : 0; let m = null; if (v !== 0) {
    if (m = c.value, g !== !0 || m === null) {
        const p = f + v * 4, E = d.matrixWorldInverse;
        o.getNormalMatrix(E), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let S = 0, _ = f; S !== v; ++S, _ += 4)
            a.copy(u[S]).applyMatrix4(E, o), a.normal.toArray(m, _), m[_ + 3] = a.constant;
    }
    c.value = m, c.needsUpdate = !0;
} return t.numPlanes = v, t.numIntersection = 0, m; } }
function rm(s) { let t = new WeakMap; function e(a, o) { return o === ca ? a.mapping = Ai : o === ha && (a.mapping = Ri), a; } function n(a) { if (a && a.isTexture) {
    const o = a.mapping;
    if (o === ca || o === ha)
        if (t.has(a)) {
            const c = t.get(a).texture;
            return e(c, a.mapping);
        }
        else {
            const c = a.image;
            if (c && c.height > 0) {
                const l = new Tu(c.height);
                return l.fromEquirectangularTexture(s, a), t.set(a, l), a.addEventListener("dispose", i), e(l.texture, a.mapping);
            }
            else
                return null;
        }
} return a; } function i(a) { const o = a.target; o.removeEventListener("dispose", i); const c = t.get(o); c !== void 0 && (t.delete(o), c.dispose()); } function r() { t = new WeakMap; } return { get: n, dispose: r }; }
const yi = 4, hl = [.125, .215, .35, .446, .526, .582], jn = 20, Vr = new Dc, ul = new Pt;
let Wr = null, qr = 0, Xr = 0, Yr = !1;
const Yn = (1 + Math.sqrt(5)) / 2, vi = 1 / Yn, dl = [new T(-Yn, vi, 0), new T(Yn, vi, 0), new T(-vi, 0, Yn), new T(vi, 0, Yn), new T(0, Yn, -vi), new T(0, Yn, vi), new T(-1, 1, -1), new T(1, 1, -1), new T(-1, 1, 1), new T(1, 1, 1)], am = new T;
class fl {
    constructor(t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial); }
    fromScene(t, e = 0, n = .1, i = 100, r = {}) { const { size: a = 256, position: o = am } = r; Wr = this._renderer.getRenderTarget(), qr = this._renderer.getActiveCubeFace(), Xr = this._renderer.getActiveMipmapLevel(), Yr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a); const c = this._allocateTargets(); return c.depthBuffer = !0, this._sceneToCubeUV(t, n, i, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c; }
    fromEquirectangular(t, e = null) { return this._fromTexture(t, e); }
    fromCubemap(t, e = null) { return this._fromTexture(t, e); }
    compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = gl(), this._compileMaterial(this._cubemapMaterial)); }
    compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = ml(), this._compileMaterial(this._equirectMaterial)); }
    dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(); }
    _setSize(t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax); }
    _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++)
        this._lodPlanes[t].dispose(); }
    _cleanup(t) { this._renderer.setRenderTarget(Wr, qr, Xr), this._renderer.xr.enabled = Yr, t.scissorTest = !1, Vs(t, 0, 0, t.width, t.height); }
    _fromTexture(t, e) { t.mapping === Ai || t.mapping === Ri ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Wr = this._renderer.getRenderTarget(), qr = this._renderer.getActiveCubeFace(), Xr = this._renderer.getActiveMipmapLevel(), Yr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const n = e || this._allocateTargets(); return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n; }
    _allocateTargets() { const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: on, minFilter: on, generateMipmaps: !1, type: ds, format: Qe, colorSpace: Ci, depthBuffer: !1 }, i = pl(t, e, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = pl(t, e, n);
        const { _lodMax: r } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = om(r)), this._blurMaterial = lm(r, t, e);
    } return i; }
    _compileMaterial(t) { const e = new qt(this._lodPlanes[0], t); this._renderer.compile(e, Vr); }
    _sceneToCubeUV(t, e, n, i, r) { const c = new Fe(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping; u.getClearColor(ul), u.toneMapping = Un, u.autoClear = !1, u.state.buffers.depth.getReversed() && (u.setRenderTarget(i), u.clearDepth(), u.setRenderTarget(null)); const v = new bn({ name: "PMREM.Background", side: Re, depthWrite: !1, depthTest: !1 }), m = new qt(new Oi, v); let p = !1; const E = t.background; E ? E.isColor && (v.color.copy(E), t.background = null, p = !0) : (v.color.copy(ul), p = !0); for (let S = 0; S < 6; S++) {
        const _ = S % 3;
        _ === 0 ? (c.up.set(0, l[S], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + h[S], r.y, r.z)) : _ === 1 ? (c.up.set(0, 0, l[S]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + h[S], r.z)) : (c.up.set(0, l[S], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + h[S]));
        const P = this._cubeSize;
        Vs(i, _ * P, S > 2 ? P : 0, P, P), u.setRenderTarget(i), p && u.render(m, c), u.render(t, c);
    } m.geometry.dispose(), m.material.dispose(), u.toneMapping = f, u.autoClear = d, t.background = E; }
    _textureToCubeUV(t, e) { const n = this._renderer, i = t.mapping === Ai || t.mapping === Ri; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = gl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ml()); const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new qt(this._lodPlanes[0], r), o = r.uniforms; o.envMap.value = t; const c = this._cubeSize; Vs(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Vr); }
    _applyPMREM(t) { const e = this._renderer, n = e.autoClear; e.autoClear = !1; const i = this._lodPlanes.length; for (let r = 1; r < i; r++) {
        const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = dl[(i - r - 1) % dl.length];
        this._blur(t, r - 1, r, a, o);
    } e.autoClear = n; }
    _blur(t, e, n, i, r) { const a = this._pingPongRenderTarget; this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r); }
    _halfBlur(t, e, n, i, r, a, o) { const c = this._renderer, l = this._blurMaterial; a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3, u = new qt(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * jn - 1), v = r / g, m = isFinite(r) ? 1 + Math.floor(h * v) : jn; m > jn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`); const p = []; let E = 0; for (let I = 0; I < jn; ++I) {
        const D = I / v, b = Math.exp(-D * D / 2);
        p.push(b), I === 0 ? E += b : I < m && (E += 2 * b);
    } for (let I = 0; I < p.length; I++)
        p[I] = p[I] / E; d.envMap.value = t.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o); const { _lodMax: S } = this; d.dTheta.value = g, d.mipInt.value = S - n; const _ = this._sizeLods[i], P = 3 * _ * (i > S - yi ? i - S + yi : 0), A = 4 * (this._cubeSize - _); Vs(e, P, A, 3 * _, 2 * _), c.setRenderTarget(e), c.render(u, Vr); }
}
function om(s) { const t = [], e = [], n = []; let i = s; const r = s - yi + 1 + hl.length; for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    e.push(o);
    let c = 1 / o;
    a > s - yi ? c = hl[a - s + yi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, v = 3, m = 2, p = 1, E = new Float32Array(v * g * f), S = new Float32Array(m * g * f), _ = new Float32Array(p * g * f);
    for (let A = 0; A < f; A++) {
        const I = A % 3 * 2 / 3 - 1, D = A > 2 ? 0 : -1, b = [I, D, 0, I + 2 / 3, D, 0, I + 2 / 3, D + 1, 0, I, D, 0, I + 2 / 3, D + 1, 0, I, D + 1, 0];
        E.set(b, v * g * A), S.set(d, m * g * A);
        const M = [A, A, A, A, A, A];
        _.set(M, p * g * A);
    }
    const P = new _e;
    P.setAttribute("position", new Se(E, v)), P.setAttribute("uv", new Se(S, m)), P.setAttribute("faceIndex", new Se(_, p)), t.push(P), i > yi && i--;
} return { lodPlanes: t, sizeLods: e, sigmas: n }; }
function pl(s, t, e) { const n = new Fn(s, t, e); return n.texture.mapping = sr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n; }
function Vs(s, t, e, n, i) { s.viewport.set(t, e, n, i), s.scissor.set(t, e, n, i); }
function lm(s, t, e) {
    const n = new Float32Array(jn), i = new T(0, 1, 0);
    return new en({ name: "SphericalGaussianBlur", defines: { n: jn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: mo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1 });
}
function ml() {
    return new en({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: mo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1 });
}
function gl() {
    return new en({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: mo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1 });
}
function mo() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function cm(s) { let t = new WeakMap, e = null; function n(o) { if (o && o.isTexture) {
    const c = o.mapping, l = c === ca || c === ha, h = c === Ai || c === Ri;
    if (l || h) {
        let u = t.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
            return e === null && (e = new fl(s)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
            return u.texture;
        {
            const f = o.image;
            return l && f && f.height > 0 || h && f && i(f) ? (e === null && (e = new fl(s)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
    }
} return o; } function i(o) { let c = 0; const l = 6; for (let h = 0; h < l; h++)
    o[h] !== void 0 && c++; return c === l; } function r(o) { const c = o.target; c.removeEventListener("dispose", r); const l = t.get(c); l !== void 0 && (t.delete(c), l.dispose()); } function a() { t = new WeakMap, e !== null && (e.dispose(), e = null); } return { get: n, dispose: a }; }
function hm(s) { const t = {}; function e(n) { if (t[n] !== void 0)
    return t[n]; let i; switch (n) {
    case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
    case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
    case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
    case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
    default: i = s.getExtension(n);
} return t[n] = i, i; } return { has: function (n) { return e(n) !== null; }, init: function () { e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent"); }, get: function (n) { const i = e(n); return i === null && as("THREE.WebGLRenderer: " + n + " extension not supported."), i; } }; }
function um(s, t, e, n) { const i = {}, r = new WeakMap; function a(u) { const d = u.target; d.index !== null && t.remove(d.index); for (const g in d.attributes)
    t.remove(d.attributes[g]); d.removeEventListener("dispose", a), delete i[d.id]; const f = r.get(d); f && (t.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries--; } function o(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, e.memory.geometries++), d; } function c(u) { const d = u.attributes; for (const f in d)
    t.update(d[f], s.ARRAY_BUFFER); } function l(u) { const d = [], f = u.index, g = u.attributes.position; let v = 0; if (f !== null) {
    const E = f.array;
    v = f.version;
    for (let S = 0, _ = E.length; S < _; S += 3) {
        const P = E[S + 0], A = E[S + 1], I = E[S + 2];
        d.push(P, A, A, I, I, P);
    }
}
else if (g !== void 0) {
    const E = g.array;
    v = g.version;
    for (let S = 0, _ = E.length / 3 - 1; S < _; S += 3) {
        const P = S + 0, A = S + 1, I = S + 2;
        d.push(P, A, A, I, I, P);
    }
}
else
    return; const m = new (ac(d) ? dc : uc)(d, 1); m.version = v; const p = r.get(u); p && t.remove(p), r.set(u, m); } function h(u) { const d = r.get(u); if (d) {
    const f = u.index;
    f !== null && d.version < f.version && l(u);
}
else
    l(u); return r.get(u); } return { get: o, update: c, getWireframeAttribute: h }; }
function dm(s, t, e) { let n; function i(d) { n = d; } let r, a; function o(d) { r = d.type, a = d.bytesPerElement; } function c(d, f) { s.drawElements(n, f, r, d * a), e.update(f, n, 1); } function l(d, f, g) { g !== 0 && (s.drawElementsInstanced(n, f, r, d * a, g), e.update(f, n, g)); } function h(d, f, g) { if (g === 0)
    return; t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, d, 0, g); let m = 0; for (let p = 0; p < g; p++)
    m += f[p]; e.update(m, n, 1); } function u(d, f, g, v) { if (g === 0)
    return; const m = t.get("WEBGL_multi_draw"); if (m === null)
    for (let p = 0; p < d.length; p++)
        l(d[p] / a, f[p], v[p]);
else {
    m.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, v, 0, g);
    let p = 0;
    for (let E = 0; E < g; E++)
        p += f[E] * v[E];
    e.update(p, n, 1);
} } this.setMode = i, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u; }
function fm(s) { const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, a, o) { switch (e.calls++, a) {
    case s.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
    case s.LINES:
        e.lines += o * (r / 2);
        break;
    case s.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
    case s.LINE_LOOP:
        e.lines += o * r;
        break;
    case s.POINTS:
        e.points += o * r;
        break;
    default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
} } function i() { e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0; } return { memory: t, render: e, programs: null, autoReset: !0, reset: i, update: n }; }
function pm(s, t, e) { const n = new WeakMap, i = new ae; function r(a, o, c) { const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0; let d = n.get(o); if (d === void 0 || d.count !== u) {
    let M = function () { D.dispose(), n.delete(o), o.removeEventListener("dispose", M); };
    var f = M;
    d !== void 0 && d.texture.dispose();
    const g = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, m = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], E = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
    let _ = 0;
    g === !0 && (_ = 1), v === !0 && (_ = 2), m === !0 && (_ = 3);
    let P = o.attributes.position.count * _, A = 1;
    P > t.maxTextureSize && (A = Math.ceil(P / t.maxTextureSize), P = t.maxTextureSize);
    const I = new Float32Array(P * A * 4 * u), D = new oc(I, P, A, u);
    D.type = ln, D.needsUpdate = !0;
    const b = _ * 4;
    for (let L = 0; L < u; L++) {
        const k = p[L], H = E[L], Y = S[L], V = P * A * 4 * L;
        for (let X = 0; X < k.count; X++) {
            const Q = X * b;
            g === !0 && (i.fromBufferAttribute(k, X), I[V + Q + 0] = i.x, I[V + Q + 1] = i.y, I[V + Q + 2] = i.z, I[V + Q + 3] = 0), v === !0 && (i.fromBufferAttribute(H, X), I[V + Q + 4] = i.x, I[V + Q + 5] = i.y, I[V + Q + 6] = i.z, I[V + Q + 7] = 0), m === !0 && (i.fromBufferAttribute(Y, X), I[V + Q + 8] = i.x, I[V + Q + 9] = i.y, I[V + Q + 10] = i.z, I[V + Q + 11] = Y.itemSize === 4 ? i.w : 1);
        }
    }
    d = { count: u, texture: D, size: new ct(P, A) }, n.set(o, d), o.addEventListener("dispose", M);
} if (a.isInstancedMesh === !0 && a.morphTexture !== null)
    c.getUniforms().setValue(s, "morphTexture", a.morphTexture, e);
else {
    let g = 0;
    for (let m = 0; m < l.length; m++)
        g += l[m];
    const v = o.morphTargetsRelative ? 1 : 1 - g;
    c.getUniforms().setValue(s, "morphTargetBaseInfluence", v), c.getUniforms().setValue(s, "morphTargetInfluences", l);
} c.getUniforms().setValue(s, "morphTargetsTexture", d.texture, e), c.getUniforms().setValue(s, "morphTargetsTextureSize", d.size); } return { update: r }; }
function mm(s, t, e, n) { let i = new WeakMap; function r(c) { const l = n.render.frame, h = c.geometry, u = t.get(c, h); if (i.get(u) !== l && (t.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (e.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
    const d = c.skeleton;
    i.get(d) !== l && (d.update(), i.set(d, l));
} return u; } function a() { i = new WeakMap; } function o(c) { const l = c.target; l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor); } return { update: r, dispose: a }; }
const Fc = new Ce, vl = new xc(1, 1), Oc = new oc, kc = new cu, zc = new mc, xl = [], _l = [], yl = new Float32Array(16), Ml = new Float32Array(9), Sl = new Float32Array(4);
function ki(s, t, e) { const n = s[0]; if (n <= 0 || n > 0)
    return s; const i = t * e; let r = xl[i]; if (r === void 0 && (r = new Float32Array(i), xl[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
        o += e, s[a].toArray(r, o);
} return r; }
function be(s, t) { if (s.length !== t.length)
    return !1; for (let e = 0, n = s.length; e < n; e++)
    if (s[e] !== t[e])
        return !1; return !0; }
function Ee(s, t) { for (let e = 0, n = t.length; e < n; e++)
    s[e] = t[e]; }
function ur(s, t) { let e = _l[t]; e === void 0 && (e = new Int32Array(t), _l[t] = e); for (let n = 0; n !== t; ++n)
    e[n] = s.allocateTextureUnit(); return e; }
function gm(s, t) { const e = this.cache; e[0] !== t && (s.uniform1f(this.addr, t), e[0] = t); }
function vm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
else {
    if (be(e, t))
        return;
    s.uniform2fv(this.addr, t), Ee(e, t);
} }
function xm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
else {
    if (be(e, t))
        return;
    s.uniform3fv(this.addr, t), Ee(e, t);
} }
function _m(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
else {
    if (be(e, t))
        return;
    s.uniform4fv(this.addr, t), Ee(e, t);
} }
function ym(s, t) { const e = this.cache, n = t.elements; if (n === void 0) {
    if (be(e, t))
        return;
    s.uniformMatrix2fv(this.addr, !1, t), Ee(e, t);
}
else {
    if (be(e, n))
        return;
    Sl.set(n), s.uniformMatrix2fv(this.addr, !1, Sl), Ee(e, n);
} }
function Mm(s, t) { const e = this.cache, n = t.elements; if (n === void 0) {
    if (be(e, t))
        return;
    s.uniformMatrix3fv(this.addr, !1, t), Ee(e, t);
}
else {
    if (be(e, n))
        return;
    Ml.set(n), s.uniformMatrix3fv(this.addr, !1, Ml), Ee(e, n);
} }
function Sm(s, t) { const e = this.cache, n = t.elements; if (n === void 0) {
    if (be(e, t))
        return;
    s.uniformMatrix4fv(this.addr, !1, t), Ee(e, t);
}
else {
    if (be(e, n))
        return;
    yl.set(n), s.uniformMatrix4fv(this.addr, !1, yl), Ee(e, n);
} }
function bm(s, t) { const e = this.cache; e[0] !== t && (s.uniform1i(this.addr, t), e[0] = t); }
function Em(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
else {
    if (be(e, t))
        return;
    s.uniform2iv(this.addr, t), Ee(e, t);
} }
function wm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
else {
    if (be(e, t))
        return;
    s.uniform3iv(this.addr, t), Ee(e, t);
} }
function Tm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
else {
    if (be(e, t))
        return;
    s.uniform4iv(this.addr, t), Ee(e, t);
} }
function Am(s, t) { const e = this.cache; e[0] !== t && (s.uniform1ui(this.addr, t), e[0] = t); }
function Rm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
else {
    if (be(e, t))
        return;
    s.uniform2uiv(this.addr, t), Ee(e, t);
} }
function Cm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
else {
    if (be(e, t))
        return;
    s.uniform3uiv(this.addr, t), Ee(e, t);
} }
function Pm(s, t) { const e = this.cache; if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
else {
    if (be(e, t))
        return;
    s.uniform4uiv(this.addr, t), Ee(e, t);
} }
function Im(s, t, e) { const n = this.cache, i = e.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i); let r; this.type === s.SAMPLER_2D_SHADOW ? (vl.compareFunction = rc, r = vl) : r = Fc, e.setTexture2D(t || r, i); }
function Lm(s, t, e) { const n = this.cache, i = e.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || kc, i); }
function Dm(s, t, e) { const n = this.cache, i = e.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || zc, i); }
function Um(s, t, e) { const n = this.cache, i = e.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Oc, i); }
function Nm(s) { switch (s) {
    case 5126: return gm;
    case 35664: return vm;
    case 35665: return xm;
    case 35666: return _m;
    case 35674: return ym;
    case 35675: return Mm;
    case 35676: return Sm;
    case 5124:
    case 35670: return bm;
    case 35667:
    case 35671: return Em;
    case 35668:
    case 35672: return wm;
    case 35669:
    case 35673: return Tm;
    case 5125: return Am;
    case 36294: return Rm;
    case 36295: return Cm;
    case 36296: return Pm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682: return Im;
    case 35679:
    case 36299:
    case 36307: return Lm;
    case 35680:
    case 36300:
    case 36308:
    case 36293: return Dm;
    case 36289:
    case 36303:
    case 36311:
    case 36292: return Um;
} }
function Fm(s, t) { s.uniform1fv(this.addr, t); }
function Om(s, t) { const e = ki(t, this.size, 2); s.uniform2fv(this.addr, e); }
function km(s, t) { const e = ki(t, this.size, 3); s.uniform3fv(this.addr, e); }
function zm(s, t) { const e = ki(t, this.size, 4); s.uniform4fv(this.addr, e); }
function Bm(s, t) { const e = ki(t, this.size, 4); s.uniformMatrix2fv(this.addr, !1, e); }
function Hm(s, t) { const e = ki(t, this.size, 9); s.uniformMatrix3fv(this.addr, !1, e); }
function Gm(s, t) { const e = ki(t, this.size, 16); s.uniformMatrix4fv(this.addr, !1, e); }
function Vm(s, t) { s.uniform1iv(this.addr, t); }
function Wm(s, t) { s.uniform2iv(this.addr, t); }
function qm(s, t) { s.uniform3iv(this.addr, t); }
function Xm(s, t) { s.uniform4iv(this.addr, t); }
function Ym(s, t) { s.uniform1uiv(this.addr, t); }
function $m(s, t) { s.uniform2uiv(this.addr, t); }
function jm(s, t) { s.uniform3uiv(this.addr, t); }
function Zm(s, t) { s.uniform4uiv(this.addr, t); }
function Jm(s, t, e) { const n = this.cache, i = t.length, r = ur(e, i); be(n, r) || (s.uniform1iv(this.addr, r), Ee(n, r)); for (let a = 0; a !== i; ++a)
    e.setTexture2D(t[a] || Fc, r[a]); }
function Km(s, t, e) { const n = this.cache, i = t.length, r = ur(e, i); be(n, r) || (s.uniform1iv(this.addr, r), Ee(n, r)); for (let a = 0; a !== i; ++a)
    e.setTexture3D(t[a] || kc, r[a]); }
function Qm(s, t, e) { const n = this.cache, i = t.length, r = ur(e, i); be(n, r) || (s.uniform1iv(this.addr, r), Ee(n, r)); for (let a = 0; a !== i; ++a)
    e.setTextureCube(t[a] || zc, r[a]); }
function tg(s, t, e) { const n = this.cache, i = t.length, r = ur(e, i); be(n, r) || (s.uniform1iv(this.addr, r), Ee(n, r)); for (let a = 0; a !== i; ++a)
    e.setTexture2DArray(t[a] || Oc, r[a]); }
function eg(s) { switch (s) {
    case 5126: return Fm;
    case 35664: return Om;
    case 35665: return km;
    case 35666: return zm;
    case 35674: return Bm;
    case 35675: return Hm;
    case 35676: return Gm;
    case 5124:
    case 35670: return Vm;
    case 35667:
    case 35671: return Wm;
    case 35668:
    case 35672: return qm;
    case 35669:
    case 35673: return Xm;
    case 5125: return Ym;
    case 36294: return $m;
    case 36295: return jm;
    case 36296: return Zm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682: return Jm;
    case 35679:
    case 36299:
    case 36307: return Km;
    case 35680:
    case 36300:
    case 36308:
    case 36293: return Qm;
    case 36289:
    case 36303:
    case 36311:
    case 36292: return tg;
} }
class ng {
    constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Nm(e.type); }
}
class ig {
    constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = eg(e.type); }
}
class sg {
    constructor(t) { this.id = t, this.seq = [], this.map = {}; }
    setValue(t, e, n) { const i = this.seq; for (let r = 0, a = i.length; r !== a; ++r) {
        const o = i[r];
        o.setValue(t, e[o.id], n);
    } }
}
const $r = /(\w+)(\])?(\[|\.)?/g;
function bl(s, t) { s.seq.push(t), s.map[t.id] = t; }
function rg(s, t, e) { const n = s.name, i = n.length; for ($r.lastIndex = 0;;) {
    const r = $r.exec(n), a = $r.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
        bl(e, l === void 0 ? new ng(o, s, t) : new ig(o, s, t));
        break;
    }
    else {
        let u = e.map[o];
        u === void 0 && (u = new sg(o), bl(e, u)), e = u;
    }
} }
class Js {
    constructor(t, e) { this.seq = [], this.map = {}; const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) {
        const r = t.getActiveUniform(e, i), a = t.getUniformLocation(e, r.name);
        rg(r, a, this);
    } }
    setValue(t, e, n, i) { const r = this.map[e]; r !== void 0 && r.setValue(t, n, i); }
    setOptional(t, e, n) { const i = e[n]; i !== void 0 && this.setValue(t, n, i); }
    static upload(t, e, n, i) { for (let r = 0, a = e.length; r !== a; ++r) {
        const o = e[r], c = n[o.id];
        c.needsUpdate !== !1 && o.setValue(t, c.value, i);
    } }
    static seqWithValue(t, e) { const n = []; for (let i = 0, r = t.length; i !== r; ++i) {
        const a = t[i];
        a.id in e && n.push(a);
    } return n; }
}
function El(s, t, e) { const n = s.createShader(t); return s.shaderSource(n, e), s.compileShader(n), n; }
const ag = 37297;
let og = 0;
function lg(s, t) {
    const e = s.split(`
`), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
    for (let a = i; a < r; a++) {
        const o = a + 1;
        n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
    }
    return n.join(`
`);
}
const wl = new Vt;
function cg(s) { Qt._getMatrix(wl, Qt.workingColorSpace, s); const t = `mat3( ${wl.elements.map(e => e.toFixed(4))} )`; switch (Qt.getTransfer(s)) {
    case Qs: return [t, "LinearTransferOETF"];
    case re: return [t, "sRGBTransferOETF"];
    default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [t, "LinearTransferOETF"];
} }
function Tl(s, t, e) {
    const n = s.getShaderParameter(t, s.COMPILE_STATUS), r = (s.getShaderInfoLog(t) || "").trim();
    if (n && r === "")
        return "";
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
        const o = parseInt(a[1]);
        return e.toUpperCase() + `

` + r + `

` + lg(s.getShaderSource(t), o);
    }
    else
        return r;
}
function hg(s, t) {
    const e = cg(t);
    return [`vec4 ${s}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
function ug(s, t) { let e; switch (t) {
    case bh:
        e = "Linear";
        break;
    case Eh:
        e = "Reinhard";
        break;
    case wh:
        e = "Cineon";
        break;
    case jl:
        e = "ACESFilmic";
        break;
    case Ah:
        e = "AgX";
        break;
    case Rh:
        e = "Neutral";
        break;
    case Th:
        e = "Custom";
        break;
    default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
} return "vec3 " + s + "( vec3 color ) { return " + e + "ToneMapping( color ); }"; }
const Ws = new T;
function dg() {
    Qt.getLuminanceCoefficients(Ws);
    const s = Ws.x.toFixed(4), t = Ws.y.toFixed(4), e = Ws.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function fg(s) {
    return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Zi).join(`
`);
}
function pg(s) {
    const t = [];
    for (const e in s) {
        const n = s[e];
        n !== !1 && t.push("#define " + e + " " + n);
    }
    return t.join(`
`);
}
function mg(s, t) { const e = {}, n = s.getProgramParameter(t, s.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(t, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: s.getAttribLocation(t, a), locationSize: o };
} return e; }
function Zi(s) { return s !== ""; }
function Al(s, t) { const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps; return s.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows); }
function Rl(s, t) { return s.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection); }
const gg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Wa(s) { return s.replace(gg, xg); }
const vg = new Map;
function xg(s, t) { let e = Xt[t]; if (e === void 0) {
    const n = vg.get(t);
    if (n !== void 0)
        e = Xt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
        throw new Error("Can not resolve #include <" + t + ">");
} return Wa(e); }
const _g = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Cl(s) { return s.replace(_g, yg); }
function yg(s, t, e, n) { let i = ""; for (let r = parseInt(t); r < parseInt(e); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i; }
function Pl(s) {
    let t = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
    return s.precision === "highp" ? t += `
#define HIGH_PRECISION` : s.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Mg(s) { let t = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === Xl ? t = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Yl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === yn && (t = "SHADOWMAP_TYPE_VSM"), t; }
function Sg(s) { let t = "ENVMAP_TYPE_CUBE"; if (s.envMap)
    switch (s.envMapMode) {
        case Ai:
        case Ri:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case sr:
            t = "ENVMAP_TYPE_CUBE_UV";
            break;
    } return t; }
function bg(s) { let t = "ENVMAP_MODE_REFLECTION"; return s.envMap && s.envMapMode === Ri && (t = "ENVMAP_MODE_REFRACTION"), t; }
function Eg(s) { let t = "ENVMAP_BLENDING_NONE"; if (s.envMap)
    switch (s.combine) {
        case $l:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Mh:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case Sh:
            t = "ENVMAP_BLENDING_ADD";
            break;
    } return t; }
function wg(s) { const t = s.envMapCubeUVHeight; if (t === null)
    return null; const e = Math.log2(t) - 2, n = 1 / t; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e }; }
function Tg(s, t, e, n) {
    const i = s.getContext(), r = e.defines;
    let a = e.vertexShader, o = e.fragmentShader;
    const c = Mg(e), l = Sg(e), h = bg(e), u = Eg(e), d = wg(e), f = fg(e), g = pg(r), v = i.createProgram();
    let m, p, E = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Zi).join(`
`), m.length > 0 && (m += `
`), p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Zi).join(`
`), p.length > 0 && (p += `
`)) : (m = [Pl(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Zi).join(`
`), p = [Pl(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Un ? "#define TONE_MAPPING" : "", e.toneMapping !== Un ? Xt.tonemapping_pars_fragment : "", e.toneMapping !== Un ? ug("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Xt.colorspace_pars_fragment, hg("linearToOutputTexel", e.outputColorSpace), dg(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Zi).join(`
`)), a = Wa(a), a = Al(a, e), a = Rl(a, e), o = Wa(o), o = Al(o, e), o = Rl(o, e), a = Cl(a), o = Cl(o), e.isRawShaderMaterial !== !0 && (E = `#version 300 es
`, m = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, p = ["#define varying in", e.glslVersion === Io ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Io ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
    const S = E + m + a, _ = E + p + o, P = El(i, i.VERTEX_SHADER, S), A = El(i, i.FRAGMENT_SHADER, _);
    i.attachShader(v, P), i.attachShader(v, A), e.index0AttributeName !== void 0 ? i.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(v, 0, "position"), i.linkProgram(v);
    function I(L) {
        if (s.debug.checkShaderErrors) {
            const k = i.getProgramInfoLog(v) || "", H = i.getShaderInfoLog(P) || "", Y = i.getShaderInfoLog(A) || "", V = k.trim(), X = H.trim(), Q = Y.trim();
            let W = !0, dt = !0;
            if (i.getProgramParameter(v, i.LINK_STATUS) === !1)
                if (W = !1, typeof s.debug.onShaderError == "function")
                    s.debug.onShaderError(i, v, P, A);
                else {
                    const xt = Tl(i, P, "vertex"), Mt = Tl(i, A, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(v, i.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + V + `
` + xt + `
` + Mt);
                }
            else
                V !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", V) : (X === "" || Q === "") && (dt = !1);
            dt && (L.diagnostics = { runnable: W, programLog: V, vertexShader: { log: X, prefix: m }, fragmentShader: { log: Q, prefix: p } });
        }
        i.deleteShader(P), i.deleteShader(A), D = new Js(i, v), b = mg(i, v);
    }
    let D;
    this.getUniforms = function () { return D === void 0 && I(this), D; };
    let b;
    this.getAttributes = function () { return b === void 0 && I(this), b; };
    let M = e.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function () { return M === !1 && (M = i.getProgramParameter(v, ag)), M; }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(v), this.program = void 0; }, this.type = e.shaderType, this.name = e.shaderName, this.id = og++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = P, this.fragmentShader = A, this;
}
let Ag = 0;
class Rg {
    constructor() { this.shaderCache = new Map, this.materialCache = new Map; }
    update(t) { const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t); return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this; }
    remove(t) { const e = this.materialCache.get(t); for (const n of e)
        n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(t), this; }
    getVertexShaderID(t) { return this._getShaderStage(t.vertexShader).id; }
    getFragmentShaderID(t) { return this._getShaderStage(t.fragmentShader).id; }
    dispose() { this.shaderCache.clear(), this.materialCache.clear(); }
    _getShaderCacheForMaterial(t) { const e = this.materialCache; let n = e.get(t); return n === void 0 && (n = new Set, e.set(t, n)), n; }
    _getShaderStage(t) { const e = this.shaderCache; let n = e.get(t); return n === void 0 && (n = new Cg(t), e.set(t, n)), n; }
}
class Cg {
    constructor(t) { this.id = Ag++, this.code = t, this.usedTimes = 0; }
}
function Pg(s, t, e, n, i, r, a) { const o = new cc, c = new Rg, l = new Set, h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures; let f = i.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function v(b) { return l.add(b), b === 0 ? "uv" : `uv${b}`; } function m(b, M, L, k, H) { const Y = k.fog, V = H.geometry, X = b.isMeshStandardMaterial ? k.environment : null, Q = (b.isMeshStandardMaterial ? e : t).get(b.envMap || X), W = Q && Q.mapping === sr ? Q.image.height : null, dt = g[b.type]; b.precision !== null && (f = i.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead.")); const xt = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Mt = xt !== void 0 ? xt.length : 0; let Ht = 0; V.morphAttributes.position !== void 0 && (Ht = 1), V.morphAttributes.normal !== void 0 && (Ht = 2), V.morphAttributes.color !== void 0 && (Ht = 3); let Zt, ie, Jt, $; if (dt) {
    const te = sn[dt];
    Zt = te.vertexShader, ie = te.fragmentShader;
}
else
    Zt = b.vertexShader, ie = b.fragmentShader, c.update(b), Jt = c.getVertexShaderID(b), $ = c.getFragmentShaderID(b); const nt = s.getRenderTarget(), yt = s.state.buffers.depth.getReversed(), It = H.isInstancedMesh === !0, Et = H.isBatchedMesh === !0, $t = !!b.map, ce = !!b.matcap, C = !!Q, et = !!b.aoMap, J = !!b.lightMap, Z = !!b.bumpMap, j = !!b.normalMap, ht = !!b.displacementMap, it = !!b.emissiveMap, ut = !!b.metalnessMap, zt = !!b.roughnessMap, kt = b.anisotropy > 0, w = b.clearcoat > 0, x = b.dispersion > 0, O = b.iridescence > 0, G = b.sheen > 0, tt = b.transmission > 0, q = kt && !!b.anisotropyMap, Rt = w && !!b.clearcoatMap, lt = w && !!b.clearcoatNormalMap, wt = w && !!b.clearcoatRoughnessMap, Tt = O && !!b.iridescenceMap, st = O && !!b.iridescenceThicknessMap, vt = G && !!b.sheenColorMap, Nt = G && !!b.sheenRoughnessMap, Ct = !!b.specularMap, mt = !!b.specularColorMap, Gt = !!b.specularIntensityMap, U = tt && !!b.transmissionMap, ot = tt && !!b.thicknessMap, ft = !!b.gradientMap, St = !!b.alphaMap, rt = b.alphaTest > 0, K = !!b.alphaHash, At = !!b.extensions; let Bt = Un; b.toneMapped && (nt === null || nt.isXRRenderTarget === !0) && (Bt = s.toneMapping); const he = { shaderID: dt, shaderType: b.type, shaderName: b.name, vertexShader: Zt, fragmentShader: ie, defines: b.defines, customVertexShaderID: Jt, customFragmentShaderID: $, isRawShaderMaterial: b.isRawShaderMaterial === !0, glslVersion: b.glslVersion, precision: f, batching: Et, batchingColor: Et && H._colorsTexture !== null, instancing: It, instancingColor: It && H.instanceColor !== null, instancingMorph: It && H.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: nt === null ? s.outputColorSpace : nt.isXRRenderTarget === !0 ? nt.texture.colorSpace : Ci, alphaToCoverage: !!b.alphaToCoverage, map: $t, matcap: ce, envMap: C, envMapMode: C && Q.mapping, envMapCubeUVHeight: W, aoMap: et, lightMap: J, bumpMap: Z, normalMap: j, displacementMap: d && ht, emissiveMap: it, normalMapObjectSpace: j && b.normalMapType === Lh, normalMapTangentSpace: j && b.normalMapType === sc, metalnessMap: ut, roughnessMap: zt, anisotropy: kt, anisotropyMap: q, clearcoat: w, clearcoatMap: Rt, clearcoatNormalMap: lt, clearcoatRoughnessMap: wt, dispersion: x, iridescence: O, iridescenceMap: Tt, iridescenceThicknessMap: st, sheen: G, sheenColorMap: vt, sheenRoughnessMap: Nt, specularMap: Ct, specularColorMap: mt, specularIntensityMap: Gt, transmission: tt, transmissionMap: U, thicknessMap: ot, gradientMap: ft, opaque: b.transparent === !1 && b.blending === bi && b.alphaToCoverage === !1, alphaMap: St, alphaTest: rt, alphaHash: K, combine: b.combine, mapUv: $t && v(b.map.channel), aoMapUv: et && v(b.aoMap.channel), lightMapUv: J && v(b.lightMap.channel), bumpMapUv: Z && v(b.bumpMap.channel), normalMapUv: j && v(b.normalMap.channel), displacementMapUv: ht && v(b.displacementMap.channel), emissiveMapUv: it && v(b.emissiveMap.channel), metalnessMapUv: ut && v(b.metalnessMap.channel), roughnessMapUv: zt && v(b.roughnessMap.channel), anisotropyMapUv: q && v(b.anisotropyMap.channel), clearcoatMapUv: Rt && v(b.clearcoatMap.channel), clearcoatNormalMapUv: lt && v(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: wt && v(b.clearcoatRoughnessMap.channel), iridescenceMapUv: Tt && v(b.iridescenceMap.channel), iridescenceThicknessMapUv: st && v(b.iridescenceThicknessMap.channel), sheenColorMapUv: vt && v(b.sheenColorMap.channel), sheenRoughnessMapUv: Nt && v(b.sheenRoughnessMap.channel), specularMapUv: Ct && v(b.specularMap.channel), specularColorMapUv: mt && v(b.specularColorMap.channel), specularIntensityMapUv: Gt && v(b.specularIntensityMap.channel), transmissionMapUv: U && v(b.transmissionMap.channel), thicknessMapUv: ot && v(b.thicknessMap.channel), alphaMapUv: St && v(b.alphaMap.channel), vertexTangents: !!V.attributes.tangent && (j || kt), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, pointsUvs: H.isPoints === !0 && !!V.attributes.uv && ($t || St), fog: !!Y, useFog: b.fog === !0, fogExp2: !!Y && Y.isFogExp2, flatShading: b.flatShading === !0 && b.wireframe === !1, sizeAttenuation: b.sizeAttenuation === !0, logarithmicDepthBuffer: u, reversedDepthBuffer: yt, skinning: H.isSkinnedMesh === !0, morphTargets: V.morphAttributes.position !== void 0, morphNormals: V.morphAttributes.normal !== void 0, morphColors: V.morphAttributes.color !== void 0, morphTargetsCount: Mt, morphTextureStride: Ht, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: s.shadowMap.enabled && L.length > 0, shadowMapType: s.shadowMap.type, toneMapping: Bt, decodeVideoTexture: $t && b.map.isVideoTexture === !0 && Qt.getTransfer(b.map.colorSpace) === re, decodeVideoTextureEmissive: it && b.emissiveMap.isVideoTexture === !0 && Qt.getTransfer(b.emissiveMap.colorSpace) === re, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === Ge, flipSided: b.side === Re, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: At && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (At && b.extensions.multiDraw === !0 || Et) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() }; return he.vertexUv1s = l.has(1), he.vertexUv2s = l.has(2), he.vertexUv3s = l.has(3), l.clear(), he; } function p(b) { const M = []; if (b.shaderID ? M.push(b.shaderID) : (M.push(b.customVertexShaderID), M.push(b.customFragmentShaderID)), b.defines !== void 0)
    for (const L in b.defines)
        M.push(L), M.push(b.defines[L]); return b.isRawShaderMaterial === !1 && (E(M, b), S(M, b), M.push(s.outputColorSpace)), M.push(b.customProgramCacheKey), M.join(); } function E(b, M) { b.push(M.precision), b.push(M.outputColorSpace), b.push(M.envMapMode), b.push(M.envMapCubeUVHeight), b.push(M.mapUv), b.push(M.alphaMapUv), b.push(M.lightMapUv), b.push(M.aoMapUv), b.push(M.bumpMapUv), b.push(M.normalMapUv), b.push(M.displacementMapUv), b.push(M.emissiveMapUv), b.push(M.metalnessMapUv), b.push(M.roughnessMapUv), b.push(M.anisotropyMapUv), b.push(M.clearcoatMapUv), b.push(M.clearcoatNormalMapUv), b.push(M.clearcoatRoughnessMapUv), b.push(M.iridescenceMapUv), b.push(M.iridescenceThicknessMapUv), b.push(M.sheenColorMapUv), b.push(M.sheenRoughnessMapUv), b.push(M.specularMapUv), b.push(M.specularColorMapUv), b.push(M.specularIntensityMapUv), b.push(M.transmissionMapUv), b.push(M.thicknessMapUv), b.push(M.combine), b.push(M.fogExp2), b.push(M.sizeAttenuation), b.push(M.morphTargetsCount), b.push(M.morphAttributeCount), b.push(M.numDirLights), b.push(M.numPointLights), b.push(M.numSpotLights), b.push(M.numSpotLightMaps), b.push(M.numHemiLights), b.push(M.numRectAreaLights), b.push(M.numDirLightShadows), b.push(M.numPointLightShadows), b.push(M.numSpotLightShadows), b.push(M.numSpotLightShadowsWithMaps), b.push(M.numLightProbes), b.push(M.shadowMapType), b.push(M.toneMapping), b.push(M.numClippingPlanes), b.push(M.numClipIntersection), b.push(M.depthPacking); } function S(b, M) { o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), b.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), b.push(o.mask); } function _(b) { const M = g[b.type]; let L; if (M) {
    const k = sn[M];
    L = Su.clone(k.uniforms);
}
else
    L = b.uniforms; return L; } function P(b, M) { let L; for (let k = 0, H = h.length; k < H; k++) {
    const Y = h[k];
    if (Y.cacheKey === M) {
        L = Y, ++L.usedTimes;
        break;
    }
} return L === void 0 && (L = new Tg(s, M, b, r), h.push(L)), L; } function A(b) { if (--b.usedTimes === 0) {
    const M = h.indexOf(b);
    h[M] = h[h.length - 1], h.pop(), b.destroy();
} } function I(b) { c.remove(b); } function D() { c.dispose(); } return { getParameters: m, getProgramCacheKey: p, getUniforms: _, acquireProgram: P, releaseProgram: A, releaseShaderCache: I, programs: h, dispose: D }; }
function Ig() { let s = new WeakMap; function t(a) { return s.has(a); } function e(a) { let o = s.get(a); return o === void 0 && (o = {}, s.set(a, o)), o; } function n(a) { s.delete(a); } function i(a, o, c) { s.get(a)[o] = c; } function r() { s = new WeakMap; } return { has: t, get: e, remove: n, update: i, dispose: r }; }
function Lg(s, t) { return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.material.id !== t.material.id ? s.material.id - t.material.id : s.z !== t.z ? s.z - t.z : s.id - t.id; }
function Il(s, t) { return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.z !== t.z ? t.z - s.z : s.id - t.id; }
function Ll() { const s = []; let t = 0; const e = [], n = [], i = []; function r() { t = 0, e.length = 0, n.length = 0, i.length = 0; } function a(u, d, f, g, v, m) { let p = s[t]; return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: g, renderOrder: u.renderOrder, z: v, group: m }, s[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = v, p.group = m), t++, p; } function o(u, d, f, g, v, m) { const p = a(u, d, f, g, v, m); f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : e.push(p); } function c(u, d, f, g, v, m) { const p = a(u, d, f, g, v, m); f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : e.unshift(p); } function l(u, d) { e.length > 1 && e.sort(u || Lg), n.length > 1 && n.sort(d || Il), i.length > 1 && i.sort(d || Il); } function h() { for (let u = t, d = s.length; u < d; u++) {
    const f = s[u];
    if (f.id === null)
        break;
    f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
} } return { opaque: e, transmissive: n, transparent: i, init: r, push: o, unshift: c, finish: h, sort: l }; }
function Dg() { let s = new WeakMap; function t(n, i) { const r = s.get(n); let a; return r === void 0 ? (a = new Ll, s.set(n, [a])) : i >= r.length ? (a = new Ll, r.push(a)) : a = r[i], a; } function e() { s = new WeakMap; } return { get: t, dispose: e }; }
function Ug() { const s = {}; return { get: function (t) { if (s[t.id] !== void 0)
        return s[t.id]; let e; switch (t.type) {
        case "DirectionalLight":
            e = { direction: new T, color: new Pt };
            break;
        case "SpotLight":
            e = { position: new T, direction: new T, color: new Pt, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
            break;
        case "PointLight":
            e = { position: new T, color: new Pt, distance: 0, decay: 0 };
            break;
        case "HemisphereLight":
            e = { direction: new T, skyColor: new Pt, groundColor: new Pt };
            break;
        case "RectAreaLight":
            e = { color: new Pt, position: new T, halfWidth: new T, halfHeight: new T };
            break;
    } return s[t.id] = e, e; } }; }
function Ng() { const s = {}; return { get: function (t) { if (s[t.id] !== void 0)
        return s[t.id]; let e; switch (t.type) {
        case "DirectionalLight":
            e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ct };
            break;
        case "SpotLight":
            e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ct };
            break;
        case "PointLight":
            e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ct, shadowCameraNear: 1, shadowCameraFar: 1e3 };
            break;
    } return s[t.id] = e, e; } }; }
let Fg = 0;
function Og(s, t) { return (t.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s.map ? 1 : 0); }
function kg(s) { const t = new Ug, e = Ng(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let l = 0; l < 9; l++)
    n.probe.push(new T); const i = new T, r = new le, a = new le; function o(l) { let h = 0, u = 0, d = 0; for (let b = 0; b < 9; b++)
    n.probe[b].set(0, 0, 0); let f = 0, g = 0, v = 0, m = 0, p = 0, E = 0, S = 0, _ = 0, P = 0, A = 0, I = 0; l.sort(Og); for (let b = 0, M = l.length; b < M; b++) {
    const L = l[b], k = L.color, H = L.intensity, Y = L.distance, V = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
    if (L.isAmbientLight)
        h += k.r * H, u += k.g * H, d += k.b * H;
    else if (L.isLightProbe) {
        for (let X = 0; X < 9; X++)
            n.probe[X].addScaledVector(L.sh.coefficients[X], H);
        I++;
    }
    else if (L.isDirectionalLight) {
        const X = t.get(L);
        if (X.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
            const Q = L.shadow, W = e.get(L);
            W.shadowIntensity = Q.intensity, W.shadowBias = Q.bias, W.shadowNormalBias = Q.normalBias, W.shadowRadius = Q.radius, W.shadowMapSize = Q.mapSize, n.directionalShadow[f] = W, n.directionalShadowMap[f] = V, n.directionalShadowMatrix[f] = L.shadow.matrix, E++;
        }
        n.directional[f] = X, f++;
    }
    else if (L.isSpotLight) {
        const X = t.get(L);
        X.position.setFromMatrixPosition(L.matrixWorld), X.color.copy(k).multiplyScalar(H), X.distance = Y, X.coneCos = Math.cos(L.angle), X.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), X.decay = L.decay, n.spot[v] = X;
        const Q = L.shadow;
        if (L.map && (n.spotLightMap[P] = L.map, P++, Q.updateMatrices(L), L.castShadow && A++), n.spotLightMatrix[v] = Q.matrix, L.castShadow) {
            const W = e.get(L);
            W.shadowIntensity = Q.intensity, W.shadowBias = Q.bias, W.shadowNormalBias = Q.normalBias, W.shadowRadius = Q.radius, W.shadowMapSize = Q.mapSize, n.spotShadow[v] = W, n.spotShadowMap[v] = V, _++;
        }
        v++;
    }
    else if (L.isRectAreaLight) {
        const X = t.get(L);
        X.color.copy(k).multiplyScalar(H), X.halfWidth.set(L.width * .5, 0, 0), X.halfHeight.set(0, L.height * .5, 0), n.rectArea[m] = X, m++;
    }
    else if (L.isPointLight) {
        const X = t.get(L);
        if (X.color.copy(L.color).multiplyScalar(L.intensity), X.distance = L.distance, X.decay = L.decay, L.castShadow) {
            const Q = L.shadow, W = e.get(L);
            W.shadowIntensity = Q.intensity, W.shadowBias = Q.bias, W.shadowNormalBias = Q.normalBias, W.shadowRadius = Q.radius, W.shadowMapSize = Q.mapSize, W.shadowCameraNear = Q.camera.near, W.shadowCameraFar = Q.camera.far, n.pointShadow[g] = W, n.pointShadowMap[g] = V, n.pointShadowMatrix[g] = L.shadow.matrix, S++;
        }
        n.point[g] = X, g++;
    }
    else if (L.isHemisphereLight) {
        const X = t.get(L);
        X.skyColor.copy(L.color).multiplyScalar(H), X.groundColor.copy(L.groundColor).multiplyScalar(H), n.hemi[p] = X, p++;
    }
} m > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = pt.LTC_FLOAT_1, n.rectAreaLTC2 = pt.LTC_FLOAT_2) : (n.rectAreaLTC1 = pt.LTC_HALF_1, n.rectAreaLTC2 = pt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d; const D = n.hash; (D.directionalLength !== f || D.pointLength !== g || D.spotLength !== v || D.rectAreaLength !== m || D.hemiLength !== p || D.numDirectionalShadows !== E || D.numPointShadows !== S || D.numSpotShadows !== _ || D.numSpotMaps !== P || D.numLightProbes !== I) && (n.directional.length = f, n.spot.length = v, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = E, n.directionalShadowMap.length = E, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = _, n.spotShadowMap.length = _, n.directionalShadowMatrix.length = E, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = _ + P - A, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = I, D.directionalLength = f, D.pointLength = g, D.spotLength = v, D.rectAreaLength = m, D.hemiLength = p, D.numDirectionalShadows = E, D.numPointShadows = S, D.numSpotShadows = _, D.numSpotMaps = P, D.numLightProbes = I, n.version = Fg++); } function c(l, h) { let u = 0, d = 0, f = 0, g = 0, v = 0; const m = h.matrixWorldInverse; for (let p = 0, E = l.length; p < E; p++) {
    const S = l[p];
    if (S.isDirectionalLight) {
        const _ = n.directional[u];
        _.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), _.direction.sub(i), _.direction.transformDirection(m), u++;
    }
    else if (S.isSpotLight) {
        const _ = n.spot[f];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(m), _.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), _.direction.sub(i), _.direction.transformDirection(m), f++;
    }
    else if (S.isRectAreaLight) {
        const _ = n.rectArea[g];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(m), a.identity(), r.copy(S.matrixWorld), r.premultiply(m), a.extractRotation(r), _.halfWidth.set(S.width * .5, 0, 0), _.halfHeight.set(0, S.height * .5, 0), _.halfWidth.applyMatrix4(a), _.halfHeight.applyMatrix4(a), g++;
    }
    else if (S.isPointLight) {
        const _ = n.point[d];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(m), d++;
    }
    else if (S.isHemisphereLight) {
        const _ = n.hemi[v];
        _.direction.setFromMatrixPosition(S.matrixWorld), _.direction.transformDirection(m), v++;
    }
} } return { setup: o, setupView: c, state: n }; }
function Dl(s) { const t = new kg(s), e = [], n = []; function i(h) { l.camera = h, e.length = 0, n.length = 0; } function r(h) { e.push(h); } function a(h) { n.push(h); } function o() { t.setup(e); } function c(h) { t.setupView(e, h); } const l = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} }; return { init: i, state: l, setupLights: o, setupLightsView: c, pushLight: r, pushShadow: a }; }
function zg(s) { let t = new WeakMap; function e(i, r = 0) { const a = t.get(i); let o; return a === void 0 ? (o = new Dl(s), t.set(i, [o])) : r >= a.length ? (o = new Dl(s), a.push(o)) : o = a[r], o; } function n() { t = new WeakMap; } return { get: e, dispose: n }; }
const Bg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Hg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Gg(s, t, e) { let n = new oo; const i = new ct, r = new ct, a = new ae, o = new ud({ depthPacking: Ih }), c = new dd, l = {}, h = e.maxTextureSize, u = { [En]: Re, [Re]: En, [Ge]: Ge }, d = new en({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ct }, radius: { value: 4 } }, vertexShader: Bg, fragmentShader: Hg }), f = d.clone(); f.defines.HORIZONTAL_PASS = 1; const g = new _e; g.setAttribute("position", new Se(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const v = new qt(g, d), m = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Xl; let p = this.type; this.render = function (A, I, D) { if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0)
    return; const b = s.getRenderTarget(), M = s.getActiveCubeFace(), L = s.getActiveMipmapLevel(), k = s.state; k.setBlending(Dn), k.buffers.depth.getReversed() === !0 ? k.buffers.color.setClear(0, 0, 0, 0) : k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1); const H = p !== yn && this.type === yn, Y = p === yn && this.type !== yn; for (let V = 0, X = A.length; V < X; V++) {
    const Q = A[V], W = Q.shadow;
    if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
    }
    if (W.autoUpdate === !1 && W.needsUpdate === !1)
        continue;
    i.copy(W.mapSize);
    const dt = W.getFrameExtents();
    if (i.multiply(dt), r.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / dt.x), i.x = r.x * dt.x, W.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / dt.y), i.y = r.y * dt.y, W.mapSize.y = r.y)), W.map === null || H === !0 || Y === !0) {
        const Mt = this.type !== yn ? { minFilter: Ve, magFilter: Ve } : {};
        W.map !== null && W.map.dispose(), W.map = new Fn(i.x, i.y, Mt), W.map.texture.name = Q.name + ".shadowMap", W.camera.updateProjectionMatrix();
    }
    s.setRenderTarget(W.map), s.clear();
    const xt = W.getViewportCount();
    for (let Mt = 0; Mt < xt; Mt++) {
        const Ht = W.getViewport(Mt);
        a.set(r.x * Ht.x, r.y * Ht.y, r.x * Ht.z, r.y * Ht.w), k.viewport(a), W.updateMatrices(Q, Mt), n = W.getFrustum(), _(I, D, W.camera, Q, this.type);
    }
    W.isPointLightShadow !== !0 && this.type === yn && E(W, D), W.needsUpdate = !1;
} p = this.type, m.needsUpdate = !1, s.setRenderTarget(b, M, L); }; function E(A, I) { const D = t.update(v); d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Fn(i.x, i.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, s.setRenderTarget(A.mapPass), s.clear(), s.renderBufferDirect(I, null, D, d, v, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, s.setRenderTarget(A.map), s.clear(), s.renderBufferDirect(I, null, D, f, v, null); } function S(A, I, D, b) { let M = null; const L = D.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial; if (L !== void 0)
    M = L;
else if (M = D.isPointLight === !0 ? c : o, s.localClippingEnabled && I.clipShadows === !0 && Array.isArray(I.clippingPlanes) && I.clippingPlanes.length !== 0 || I.displacementMap && I.displacementScale !== 0 || I.alphaMap && I.alphaTest > 0 || I.map && I.alphaTest > 0 || I.alphaToCoverage === !0) {
    const k = M.uuid, H = I.uuid;
    let Y = l[k];
    Y === void 0 && (Y = {}, l[k] = Y);
    let V = Y[H];
    V === void 0 && (V = M.clone(), Y[H] = V, I.addEventListener("dispose", P)), M = V;
} if (M.visible = I.visible, M.wireframe = I.wireframe, b === yn ? M.side = I.shadowSide !== null ? I.shadowSide : I.side : M.side = I.shadowSide !== null ? I.shadowSide : u[I.side], M.alphaMap = I.alphaMap, M.alphaTest = I.alphaToCoverage === !0 ? .5 : I.alphaTest, M.map = I.map, M.clipShadows = I.clipShadows, M.clippingPlanes = I.clippingPlanes, M.clipIntersection = I.clipIntersection, M.displacementMap = I.displacementMap, M.displacementScale = I.displacementScale, M.displacementBias = I.displacementBias, M.wireframeLinewidth = I.wireframeLinewidth, M.linewidth = I.linewidth, D.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
    const k = s.properties.get(M);
    k.light = D;
} return M; } function _(A, I, D, b, M) { if (A.visible === !1)
    return; if (A.layers.test(I.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && M === yn) && (!A.frustumCulled || n.intersectsObject(A))) {
    A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, A.matrixWorld);
    const H = t.update(A), Y = A.material;
    if (Array.isArray(Y)) {
        const V = H.groups;
        for (let X = 0, Q = V.length; X < Q; X++) {
            const W = V[X], dt = Y[W.materialIndex];
            if (dt && dt.visible) {
                const xt = S(A, dt, b, M);
                A.onBeforeShadow(s, A, I, D, H, xt, W), s.renderBufferDirect(D, null, H, xt, A, W), A.onAfterShadow(s, A, I, D, H, xt, W);
            }
        }
    }
    else if (Y.visible) {
        const V = S(A, Y, b, M);
        A.onBeforeShadow(s, A, I, D, H, V, null), s.renderBufferDirect(D, null, H, V, A, null), A.onAfterShadow(s, A, I, D, H, V, null);
    }
} const k = A.children; for (let H = 0, Y = k.length; H < Y; H++)
    _(k[H], I, D, b, M); } function P(A) { A.target.removeEventListener("dispose", P); for (const D in l) {
    const b = l[D], M = A.target.uuid;
    M in b && (b[M].dispose(), delete b[M]);
} } }
const Vg = { [na]: ia, [sa]: oa, [ra]: la, [Ti]: aa, [ia]: na, [oa]: sa, [la]: ra, [aa]: Ti };
function Wg(s, t) { function e() { let U = !1; const ot = new ae; let ft = null; const St = new ae(0, 0, 0, 0); return { setMask: function (rt) { ft !== rt && !U && (s.colorMask(rt, rt, rt, rt), ft = rt); }, setLocked: function (rt) { U = rt; }, setClear: function (rt, K, At, Bt, he) { he === !0 && (rt *= Bt, K *= Bt, At *= Bt), ot.set(rt, K, At, Bt), St.equals(ot) === !1 && (s.clearColor(rt, K, At, Bt), St.copy(ot)); }, reset: function () { U = !1, ft = null, St.set(-1, 0, 0, 0); } }; } function n() { let U = !1, ot = !1, ft = null, St = null, rt = null; return { setReversed: function (K) { if (ot !== K) {
        const At = t.get("EXT_clip_control");
        K ? At.clipControlEXT(At.LOWER_LEFT_EXT, At.ZERO_TO_ONE_EXT) : At.clipControlEXT(At.LOWER_LEFT_EXT, At.NEGATIVE_ONE_TO_ONE_EXT), ot = K;
        const Bt = rt;
        rt = null, this.setClear(Bt);
    } }, getReversed: function () { return ot; }, setTest: function (K) { K ? nt(s.DEPTH_TEST) : yt(s.DEPTH_TEST); }, setMask: function (K) { ft !== K && !U && (s.depthMask(K), ft = K); }, setFunc: function (K) { if (ot && (K = Vg[K]), St !== K) {
        switch (K) {
            case na:
                s.depthFunc(s.NEVER);
                break;
            case ia:
                s.depthFunc(s.ALWAYS);
                break;
            case sa:
                s.depthFunc(s.LESS);
                break;
            case Ti:
                s.depthFunc(s.LEQUAL);
                break;
            case ra:
                s.depthFunc(s.EQUAL);
                break;
            case aa:
                s.depthFunc(s.GEQUAL);
                break;
            case oa:
                s.depthFunc(s.GREATER);
                break;
            case la:
                s.depthFunc(s.NOTEQUAL);
                break;
            default: s.depthFunc(s.LEQUAL);
        }
        St = K;
    } }, setLocked: function (K) { U = K; }, setClear: function (K) { rt !== K && (ot && (K = 1 - K), s.clearDepth(K), rt = K); }, reset: function () { U = !1, ft = null, St = null, rt = null, ot = !1; } }; } function i() { let U = !1, ot = null, ft = null, St = null, rt = null, K = null, At = null, Bt = null, he = null; return { setTest: function (te) { U || (te ? nt(s.STENCIL_TEST) : yt(s.STENCIL_TEST)); }, setMask: function (te) { ot !== te && !U && (s.stencilMask(te), ot = te); }, setFunc: function (te, pn, nn) { (ft !== te || St !== pn || rt !== nn) && (s.stencilFunc(te, pn, nn), ft = te, St = pn, rt = nn); }, setOp: function (te, pn, nn) { (K !== te || At !== pn || Bt !== nn) && (s.stencilOp(te, pn, nn), K = te, At = pn, Bt = nn); }, setLocked: function (te) { U = te; }, setClear: function (te) { he !== te && (s.clearStencil(te), he = te); }, reset: function () { U = !1, ot = null, ft = null, St = null, rt = null, K = null, At = null, Bt = null, he = null; } }; } const r = new e, a = new n, o = new i, c = new WeakMap, l = new WeakMap; let h = {}, u = {}, d = new WeakMap, f = [], g = null, v = !1, m = null, p = null, E = null, S = null, _ = null, P = null, A = null, I = new Pt(0, 0, 0), D = 0, b = !1, M = null, L = null, k = null, H = null, Y = null; const V = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let X = !1, Q = 0; const W = s.getParameter(s.VERSION); W.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(W)[1]), X = Q >= 1) : W.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), X = Q >= 2); let dt = null, xt = {}; const Mt = s.getParameter(s.SCISSOR_BOX), Ht = s.getParameter(s.VIEWPORT), Zt = new ae().fromArray(Mt), ie = new ae().fromArray(Ht); function Jt(U, ot, ft, St) { const rt = new Uint8Array(4), K = s.createTexture(); s.bindTexture(U, K), s.texParameteri(U, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(U, s.TEXTURE_MAG_FILTER, s.NEAREST); for (let At = 0; At < ft; At++)
    U === s.TEXTURE_3D || U === s.TEXTURE_2D_ARRAY ? s.texImage3D(ot, 0, s.RGBA, 1, 1, St, 0, s.RGBA, s.UNSIGNED_BYTE, rt) : s.texImage2D(ot + At, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, rt); return K; } const $ = {}; $[s.TEXTURE_2D] = Jt(s.TEXTURE_2D, s.TEXTURE_2D, 1), $[s.TEXTURE_CUBE_MAP] = Jt(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), $[s.TEXTURE_2D_ARRAY] = Jt(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), $[s.TEXTURE_3D] = Jt(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), nt(s.DEPTH_TEST), a.setFunc(Ti), Z(!1), j(To), nt(s.CULL_FACE), et(Dn); function nt(U) { h[U] !== !0 && (s.enable(U), h[U] = !0); } function yt(U) { h[U] !== !1 && (s.disable(U), h[U] = !1); } function It(U, ot) { return u[U] !== ot ? (s.bindFramebuffer(U, ot), u[U] = ot, U === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = ot), U === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = ot), !0) : !1; } function Et(U, ot) { let ft = f, St = !1; if (U) {
    ft = d.get(ot), ft === void 0 && (ft = [], d.set(ot, ft));
    const rt = U.textures;
    if (ft.length !== rt.length || ft[0] !== s.COLOR_ATTACHMENT0) {
        for (let K = 0, At = rt.length; K < At; K++)
            ft[K] = s.COLOR_ATTACHMENT0 + K;
        ft.length = rt.length, St = !0;
    }
}
else
    ft[0] !== s.BACK && (ft[0] = s.BACK, St = !0); St && s.drawBuffers(ft); } function $t(U) { return g !== U ? (s.useProgram(U), g = U, !0) : !1; } const ce = { [$n]: s.FUNC_ADD, [sh]: s.FUNC_SUBTRACT, [rh]: s.FUNC_REVERSE_SUBTRACT }; ce[ah] = s.MIN, ce[oh] = s.MAX; const C = { [lh]: s.ZERO, [ch]: s.ONE, [hh]: s.SRC_COLOR, [ta]: s.SRC_ALPHA, [gh]: s.SRC_ALPHA_SATURATE, [ph]: s.DST_COLOR, [dh]: s.DST_ALPHA, [uh]: s.ONE_MINUS_SRC_COLOR, [ea]: s.ONE_MINUS_SRC_ALPHA, [mh]: s.ONE_MINUS_DST_COLOR, [fh]: s.ONE_MINUS_DST_ALPHA, [vh]: s.CONSTANT_COLOR, [xh]: s.ONE_MINUS_CONSTANT_COLOR, [_h]: s.CONSTANT_ALPHA, [yh]: s.ONE_MINUS_CONSTANT_ALPHA }; function et(U, ot, ft, St, rt, K, At, Bt, he, te) { if (U === Dn) {
    v === !0 && (yt(s.BLEND), v = !1);
    return;
} if (v === !1 && (nt(s.BLEND), v = !0), U !== ih) {
    if (U !== m || te !== b) {
        if ((p !== $n || _ !== $n) && (s.blendEquation(s.FUNC_ADD), p = $n, _ = $n), te)
            switch (U) {
                case bi:
                    s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
                    break;
                case Qr:
                    s.blendFunc(s.ONE, s.ONE);
                    break;
                case Ao:
                    s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
                    break;
                case Ro:
                    s.blendFuncSeparate(s.DST_COLOR, s.ONE_MINUS_SRC_ALPHA, s.ZERO, s.ONE);
                    break;
                default:
                    console.error("THREE.WebGLState: Invalid blending: ", U);
                    break;
            }
        else
            switch (U) {
                case bi:
                    s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
                    break;
                case Qr:
                    s.blendFuncSeparate(s.SRC_ALPHA, s.ONE, s.ONE, s.ONE);
                    break;
                case Ao:
                    console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                    break;
                case Ro:
                    console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                    break;
                default:
                    console.error("THREE.WebGLState: Invalid blending: ", U);
                    break;
            }
        E = null, S = null, P = null, A = null, I.set(0, 0, 0), D = 0, m = U, b = te;
    }
    return;
} rt = rt || ot, K = K || ft, At = At || St, (ot !== p || rt !== _) && (s.blendEquationSeparate(ce[ot], ce[rt]), p = ot, _ = rt), (ft !== E || St !== S || K !== P || At !== A) && (s.blendFuncSeparate(C[ft], C[St], C[K], C[At]), E = ft, S = St, P = K, A = At), (Bt.equals(I) === !1 || he !== D) && (s.blendColor(Bt.r, Bt.g, Bt.b, he), I.copy(Bt), D = he), m = U, b = !1; } function J(U, ot) { U.side === Ge ? yt(s.CULL_FACE) : nt(s.CULL_FACE); let ft = U.side === Re; ot && (ft = !ft), Z(ft), U.blending === bi && U.transparent === !1 ? et(Dn) : et(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), a.setFunc(U.depthFunc), a.setTest(U.depthTest), a.setMask(U.depthWrite), r.setMask(U.colorWrite); const St = U.stencilWrite; o.setTest(St), St && (o.setMask(U.stencilWriteMask), o.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), o.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), it(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === !0 ? nt(s.SAMPLE_ALPHA_TO_COVERAGE) : yt(s.SAMPLE_ALPHA_TO_COVERAGE); } function Z(U) { M !== U && (U ? s.frontFace(s.CW) : s.frontFace(s.CCW), M = U); } function j(U) { U !== eh ? (nt(s.CULL_FACE), U !== L && (U === To ? s.cullFace(s.BACK) : U === nh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : yt(s.CULL_FACE), L = U; } function ht(U) { U !== k && (X && s.lineWidth(U), k = U); } function it(U, ot, ft) { U ? (nt(s.POLYGON_OFFSET_FILL), (H !== ot || Y !== ft) && (s.polygonOffset(ot, ft), H = ot, Y = ft)) : yt(s.POLYGON_OFFSET_FILL); } function ut(U) { U ? nt(s.SCISSOR_TEST) : yt(s.SCISSOR_TEST); } function zt(U) { U === void 0 && (U = s.TEXTURE0 + V - 1), dt !== U && (s.activeTexture(U), dt = U); } function kt(U, ot, ft) { ft === void 0 && (dt === null ? ft = s.TEXTURE0 + V - 1 : ft = dt); let St = xt[ft]; St === void 0 && (St = { type: void 0, texture: void 0 }, xt[ft] = St), (St.type !== U || St.texture !== ot) && (dt !== ft && (s.activeTexture(ft), dt = ft), s.bindTexture(U, ot || $[U]), St.type = U, St.texture = ot); } function w() { const U = xt[dt]; U !== void 0 && U.type !== void 0 && (s.bindTexture(U.type, null), U.type = void 0, U.texture = void 0); } function x() { try {
    s.compressedTexImage2D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function O() { try {
    s.compressedTexImage3D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function G() { try {
    s.texSubImage2D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function tt() { try {
    s.texSubImage3D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function q() { try {
    s.compressedTexSubImage2D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function Rt() { try {
    s.compressedTexSubImage3D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function lt() { try {
    s.texStorage2D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function wt() { try {
    s.texStorage3D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function Tt() { try {
    s.texImage2D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function st() { try {
    s.texImage3D(...arguments);
}
catch (U) {
    console.error("THREE.WebGLState:", U);
} } function vt(U) { Zt.equals(U) === !1 && (s.scissor(U.x, U.y, U.z, U.w), Zt.copy(U)); } function Nt(U) { ie.equals(U) === !1 && (s.viewport(U.x, U.y, U.z, U.w), ie.copy(U)); } function Ct(U, ot) { let ft = l.get(ot); ft === void 0 && (ft = new WeakMap, l.set(ot, ft)); let St = ft.get(U); St === void 0 && (St = s.getUniformBlockIndex(ot, U.name), ft.set(U, St)); } function mt(U, ot) { const St = l.get(ot).get(U); c.get(ot) !== St && (s.uniformBlockBinding(ot, St, U.__bindingPointIndex), c.set(ot, St)); } function Gt() { s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), a.setReversed(!1), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, dt = null, xt = {}, u = {}, d = new WeakMap, f = [], g = null, v = !1, m = null, p = null, E = null, S = null, _ = null, P = null, A = null, I = new Pt(0, 0, 0), D = 0, b = !1, M = null, L = null, k = null, H = null, Y = null, Zt.set(0, 0, s.canvas.width, s.canvas.height), ie.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), a.reset(), o.reset(); } return { buffers: { color: r, depth: a, stencil: o }, enable: nt, disable: yt, bindFramebuffer: It, drawBuffers: Et, useProgram: $t, setBlending: et, setMaterial: J, setFlipSided: Z, setCullFace: j, setLineWidth: ht, setPolygonOffset: it, setScissorTest: ut, activeTexture: zt, bindTexture: kt, unbindTexture: w, compressedTexImage2D: x, compressedTexImage3D: O, texImage2D: Tt, texImage3D: st, updateUBOMapping: Ct, uniformBlockBinding: mt, texStorage2D: lt, texStorage3D: wt, texSubImage2D: G, texSubImage3D: tt, compressedTexSubImage2D: q, compressedTexSubImage3D: Rt, scissor: vt, viewport: Nt, reset: Gt }; }
function qg(s, t, e, n, i, r, a) { const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new ct, h = new WeakMap; let u; const d = new WeakMap; let f = !1; try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
}
catch { } function g(w, x) { return f ? new OffscreenCanvas(w, x) : er("canvas"); } function v(w, x, O) { let G = 1; const tt = kt(w); if ((tt.width > O || tt.height > O) && (G = O / Math.max(tt.width, tt.height)), G < 1)
    if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap || typeof VideoFrame < "u" && w instanceof VideoFrame) {
        const q = Math.floor(G * tt.width), Rt = Math.floor(G * tt.height);
        u === void 0 && (u = g(q, Rt));
        const lt = x ? g(q, Rt) : u;
        return lt.width = q, lt.height = Rt, lt.getContext("2d").drawImage(w, 0, 0, q, Rt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + tt.width + "x" + tt.height + ") to (" + q + "x" + Rt + ")."), lt;
    }
    else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + tt.width + "x" + tt.height + ")."), w; return w; } function m(w) { return w.generateMipmaps; } function p(w) { s.generateMipmap(w); } function E(w) { return w.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : w.isWebGL3DRenderTarget ? s.TEXTURE_3D : w.isWebGLArrayRenderTarget || w.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D; } function S(w, x, O, G, tt = !1) { if (w !== null) {
    if (s[w] !== void 0)
        return s[w];
    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
} let q = x; if (x === s.RED && (O === s.FLOAT && (q = s.R32F), O === s.HALF_FLOAT && (q = s.R16F), O === s.UNSIGNED_BYTE && (q = s.R8)), x === s.RED_INTEGER && (O === s.UNSIGNED_BYTE && (q = s.R8UI), O === s.UNSIGNED_SHORT && (q = s.R16UI), O === s.UNSIGNED_INT && (q = s.R32UI), O === s.BYTE && (q = s.R8I), O === s.SHORT && (q = s.R16I), O === s.INT && (q = s.R32I)), x === s.RG && (O === s.FLOAT && (q = s.RG32F), O === s.HALF_FLOAT && (q = s.RG16F), O === s.UNSIGNED_BYTE && (q = s.RG8)), x === s.RG_INTEGER && (O === s.UNSIGNED_BYTE && (q = s.RG8UI), O === s.UNSIGNED_SHORT && (q = s.RG16UI), O === s.UNSIGNED_INT && (q = s.RG32UI), O === s.BYTE && (q = s.RG8I), O === s.SHORT && (q = s.RG16I), O === s.INT && (q = s.RG32I)), x === s.RGB_INTEGER && (O === s.UNSIGNED_BYTE && (q = s.RGB8UI), O === s.UNSIGNED_SHORT && (q = s.RGB16UI), O === s.UNSIGNED_INT && (q = s.RGB32UI), O === s.BYTE && (q = s.RGB8I), O === s.SHORT && (q = s.RGB16I), O === s.INT && (q = s.RGB32I)), x === s.RGBA_INTEGER && (O === s.UNSIGNED_BYTE && (q = s.RGBA8UI), O === s.UNSIGNED_SHORT && (q = s.RGBA16UI), O === s.UNSIGNED_INT && (q = s.RGBA32UI), O === s.BYTE && (q = s.RGBA8I), O === s.SHORT && (q = s.RGBA16I), O === s.INT && (q = s.RGBA32I)), x === s.RGB && (O === s.UNSIGNED_INT_5_9_9_9_REV && (q = s.RGB9_E5), O === s.UNSIGNED_INT_10F_11F_11F_REV && (q = s.R11F_G11F_B10F)), x === s.RGBA) {
    const Rt = tt ? Qs : Qt.getTransfer(G);
    O === s.FLOAT && (q = s.RGBA32F), O === s.HALF_FLOAT && (q = s.RGBA16F), O === s.UNSIGNED_BYTE && (q = Rt === re ? s.SRGB8_ALPHA8 : s.RGBA8), O === s.UNSIGNED_SHORT_4_4_4_4 && (q = s.RGBA4), O === s.UNSIGNED_SHORT_5_5_5_1 && (q = s.RGB5_A1);
} return (q === s.R16F || q === s.R32F || q === s.RG16F || q === s.RG32F || q === s.RGBA16F || q === s.RGBA32F) && t.get("EXT_color_buffer_float"), q; } function _(w, x) { let O; return w ? x === null || x === Kn || x === ns ? O = s.DEPTH24_STENCIL8 : x === ln ? O = s.DEPTH32F_STENCIL8 : x === es && (O = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === Kn || x === ns ? O = s.DEPTH_COMPONENT24 : x === ln ? O = s.DEPTH_COMPONENT32F : x === es && (O = s.DEPTH_COMPONENT16), O; } function P(w, x) { return m(w) === !0 || w.isFramebufferTexture && w.minFilter !== Ve && w.minFilter !== on ? Math.log2(Math.max(x.width, x.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? x.mipmaps.length : 1; } function A(w) { const x = w.target; x.removeEventListener("dispose", A), D(x), x.isVideoTexture && h.delete(x); } function I(w) { const x = w.target; x.removeEventListener("dispose", I), M(x); } function D(w) { const x = n.get(w); if (x.__webglInit === void 0)
    return; const O = w.source, G = d.get(O); if (G) {
    const tt = G[x.__cacheKey];
    tt.usedTimes--, tt.usedTimes === 0 && b(w), Object.keys(G).length === 0 && d.delete(O);
} n.remove(w); } function b(w) { const x = n.get(w); s.deleteTexture(x.__webglTexture); const O = w.source, G = d.get(O); delete G[x.__cacheKey], a.memory.textures--; } function M(w) { const x = n.get(w); if (w.depthTexture && (w.depthTexture.dispose(), n.remove(w.depthTexture)), w.isWebGLCubeRenderTarget)
    for (let G = 0; G < 6; G++) {
        if (Array.isArray(x.__webglFramebuffer[G]))
            for (let tt = 0; tt < x.__webglFramebuffer[G].length; tt++)
                s.deleteFramebuffer(x.__webglFramebuffer[G][tt]);
        else
            s.deleteFramebuffer(x.__webglFramebuffer[G]);
        x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[G]);
    }
else {
    if (Array.isArray(x.__webglFramebuffer))
        for (let G = 0; G < x.__webglFramebuffer.length; G++)
            s.deleteFramebuffer(x.__webglFramebuffer[G]);
    else
        s.deleteFramebuffer(x.__webglFramebuffer);
    if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let G = 0; G < x.__webglColorRenderbuffer.length; G++)
            x.__webglColorRenderbuffer[G] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);
    x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer);
} const O = w.textures; for (let G = 0, tt = O.length; G < tt; G++) {
    const q = n.get(O[G]);
    q.__webglTexture && (s.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(O[G]);
} n.remove(w); } let L = 0; function k() { L = 0; } function H() { const w = L; return w >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + i.maxTextures), L += 1, w; } function Y(w) { const x = []; return x.push(w.wrapS), x.push(w.wrapT), x.push(w.wrapR || 0), x.push(w.magFilter), x.push(w.minFilter), x.push(w.anisotropy), x.push(w.internalFormat), x.push(w.format), x.push(w.type), x.push(w.generateMipmaps), x.push(w.premultiplyAlpha), x.push(w.flipY), x.push(w.unpackAlignment), x.push(w.colorSpace), x.join(); } function V(w, x) { const O = n.get(w); if (w.isVideoTexture && ut(w), w.isRenderTargetTexture === !1 && w.isExternalTexture !== !0 && w.version > 0 && O.__version !== w.version) {
    const G = w.image;
    if (G === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
    else if (G.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
    else {
        $(O, w, x);
        return;
    }
}
else
    w.isExternalTexture && (O.__webglTexture = w.sourceTexture ? w.sourceTexture : null); e.bindTexture(s.TEXTURE_2D, O.__webglTexture, s.TEXTURE0 + x); } function X(w, x) { const O = n.get(w); if (w.isRenderTargetTexture === !1 && w.version > 0 && O.__version !== w.version) {
    $(O, w, x);
    return;
} e.bindTexture(s.TEXTURE_2D_ARRAY, O.__webglTexture, s.TEXTURE0 + x); } function Q(w, x) { const O = n.get(w); if (w.isRenderTargetTexture === !1 && w.version > 0 && O.__version !== w.version) {
    $(O, w, x);
    return;
} e.bindTexture(s.TEXTURE_3D, O.__webglTexture, s.TEXTURE0 + x); } function W(w, x) { const O = n.get(w); if (w.version > 0 && O.__version !== w.version) {
    nt(O, w, x);
    return;
} e.bindTexture(s.TEXTURE_CUBE_MAP, O.__webglTexture, s.TEXTURE0 + x); } const dt = { [Ks]: s.REPEAT, [Zn]: s.CLAMP_TO_EDGE, [ua]: s.MIRRORED_REPEAT }, xt = { [Ve]: s.NEAREST, [Ch]: s.NEAREST_MIPMAP_NEAREST, [xs]: s.NEAREST_MIPMAP_LINEAR, [on]: s.LINEAR, [pr]: s.LINEAR_MIPMAP_NEAREST, [Jn]: s.LINEAR_MIPMAP_LINEAR }, Mt = { [Dh]: s.NEVER, [zh]: s.ALWAYS, [Uh]: s.LESS, [rc]: s.LEQUAL, [Nh]: s.EQUAL, [kh]: s.GEQUAL, [Fh]: s.GREATER, [Oh]: s.NOTEQUAL }; function Ht(w, x) { if (x.type === ln && t.has("OES_texture_float_linear") === !1 && (x.magFilter === on || x.magFilter === pr || x.magFilter === xs || x.magFilter === Jn || x.minFilter === on || x.minFilter === pr || x.minFilter === xs || x.minFilter === Jn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(w, s.TEXTURE_WRAP_S, dt[x.wrapS]), s.texParameteri(w, s.TEXTURE_WRAP_T, dt[x.wrapT]), (w === s.TEXTURE_3D || w === s.TEXTURE_2D_ARRAY) && s.texParameteri(w, s.TEXTURE_WRAP_R, dt[x.wrapR]), s.texParameteri(w, s.TEXTURE_MAG_FILTER, xt[x.magFilter]), s.texParameteri(w, s.TEXTURE_MIN_FILTER, xt[x.minFilter]), x.compareFunction && (s.texParameteri(w, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(w, s.TEXTURE_COMPARE_FUNC, Mt[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
    if (x.magFilter === Ve || x.minFilter !== xs && x.minFilter !== Jn || x.type === ln && t.has("OES_texture_float_linear") === !1)
        return;
    if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const O = t.get("EXT_texture_filter_anisotropic");
        s.texParameterf(w, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
    }
} } function Zt(w, x) { let O = !1; w.__webglInit === void 0 && (w.__webglInit = !0, x.addEventListener("dispose", A)); const G = x.source; let tt = d.get(G); tt === void 0 && (tt = {}, d.set(G, tt)); const q = Y(x); if (q !== w.__cacheKey) {
    tt[q] === void 0 && (tt[q] = { texture: s.createTexture(), usedTimes: 0 }, a.memory.textures++, O = !0), tt[q].usedTimes++;
    const Rt = tt[w.__cacheKey];
    Rt !== void 0 && (tt[w.__cacheKey].usedTimes--, Rt.usedTimes === 0 && b(x)), w.__cacheKey = q, w.__webglTexture = tt[q].texture;
} return O; } function ie(w, x, O) { return Math.floor(Math.floor(w / O) / x); } function Jt(w, x, O, G) { const q = w.updateRanges; if (q.length === 0)
    e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, x.width, x.height, O, G, x.data);
else {
    q.sort((st, vt) => st.start - vt.start);
    let Rt = 0;
    for (let st = 1; st < q.length; st++) {
        const vt = q[Rt], Nt = q[st], Ct = vt.start + vt.count, mt = ie(Nt.start, x.width, 4), Gt = ie(vt.start, x.width, 4);
        Nt.start <= Ct + 1 && mt === Gt && ie(Nt.start + Nt.count - 1, x.width, 4) === mt ? vt.count = Math.max(vt.count, Nt.start + Nt.count - vt.start) : (++Rt, q[Rt] = Nt);
    }
    q.length = Rt + 1;
    const lt = s.getParameter(s.UNPACK_ROW_LENGTH), wt = s.getParameter(s.UNPACK_SKIP_PIXELS), Tt = s.getParameter(s.UNPACK_SKIP_ROWS);
    s.pixelStorei(s.UNPACK_ROW_LENGTH, x.width);
    for (let st = 0, vt = q.length; st < vt; st++) {
        const Nt = q[st], Ct = Math.floor(Nt.start / 4), mt = Math.ceil(Nt.count / 4), Gt = Ct % x.width, U = Math.floor(Ct / x.width), ot = mt, ft = 1;
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, Gt), s.pixelStorei(s.UNPACK_SKIP_ROWS, U), e.texSubImage2D(s.TEXTURE_2D, 0, Gt, U, ot, ft, O, G, x.data);
    }
    w.clearUpdateRanges(), s.pixelStorei(s.UNPACK_ROW_LENGTH, lt), s.pixelStorei(s.UNPACK_SKIP_PIXELS, wt), s.pixelStorei(s.UNPACK_SKIP_ROWS, Tt);
} } function $(w, x, O) { let G = s.TEXTURE_2D; (x.isDataArrayTexture || x.isCompressedArrayTexture) && (G = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (G = s.TEXTURE_3D); const tt = Zt(w, x), q = x.source; e.bindTexture(G, w.__webglTexture, s.TEXTURE0 + O); const Rt = n.get(q); if (q.version !== Rt.__version || tt === !0) {
    e.activeTexture(s.TEXTURE0 + O);
    const lt = Qt.getPrimaries(Qt.workingColorSpace), wt = x.colorSpace === In ? null : Qt.getPrimaries(x.colorSpace), Tt = x.colorSpace === In || lt === wt ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
    s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Tt);
    let st = v(x.image, !1, i.maxTextureSize);
    st = zt(x, st);
    const vt = r.convert(x.format, x.colorSpace), Nt = r.convert(x.type);
    let Ct = S(x.internalFormat, vt, Nt, x.colorSpace, x.isVideoTexture);
    Ht(G, x);
    let mt;
    const Gt = x.mipmaps, U = x.isVideoTexture !== !0, ot = Rt.__version === void 0 || tt === !0, ft = q.dataReady, St = P(x, st);
    if (x.isDepthTexture)
        Ct = _(x.format === ss, x.type), ot && (U ? e.texStorage2D(s.TEXTURE_2D, 1, Ct, st.width, st.height) : e.texImage2D(s.TEXTURE_2D, 0, Ct, st.width, st.height, 0, vt, Nt, null));
    else if (x.isDataTexture)
        if (Gt.length > 0) {
            U && ot && e.texStorage2D(s.TEXTURE_2D, St, Ct, Gt[0].width, Gt[0].height);
            for (let rt = 0, K = Gt.length; rt < K; rt++)
                mt = Gt[rt], U ? ft && e.texSubImage2D(s.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, vt, Nt, mt.data) : e.texImage2D(s.TEXTURE_2D, rt, Ct, mt.width, mt.height, 0, vt, Nt, mt.data);
            x.generateMipmaps = !1;
        }
        else
            U ? (ot && e.texStorage2D(s.TEXTURE_2D, St, Ct, st.width, st.height), ft && Jt(x, st, vt, Nt)) : e.texImage2D(s.TEXTURE_2D, 0, Ct, st.width, st.height, 0, vt, Nt, st.data);
    else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
            U && ot && e.texStorage3D(s.TEXTURE_2D_ARRAY, St, Ct, Gt[0].width, Gt[0].height, st.depth);
            for (let rt = 0, K = Gt.length; rt < K; rt++)
                if (mt = Gt[rt], x.format !== Qe)
                    if (vt !== null)
                        if (U) {
                            if (ft)
                                if (x.layerUpdates.size > 0) {
                                    const At = cl(mt.width, mt.height, x.format, x.type);
                                    for (const Bt of x.layerUpdates) {
                                        const he = mt.data.subarray(Bt * At / mt.data.BYTES_PER_ELEMENT, (Bt + 1) * At / mt.data.BYTES_PER_ELEMENT);
                                        e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, rt, 0, 0, Bt, mt.width, mt.height, 1, vt, he);
                                    }
                                    x.clearLayerUpdates();
                                }
                                else
                                    e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, rt, 0, 0, 0, mt.width, mt.height, st.depth, vt, mt.data);
                        }
                        else
                            e.compressedTexImage3D(s.TEXTURE_2D_ARRAY, rt, Ct, mt.width, mt.height, st.depth, 0, mt.data, 0, 0);
                    else
                        console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                else
                    U ? ft && e.texSubImage3D(s.TEXTURE_2D_ARRAY, rt, 0, 0, 0, mt.width, mt.height, st.depth, vt, Nt, mt.data) : e.texImage3D(s.TEXTURE_2D_ARRAY, rt, Ct, mt.width, mt.height, st.depth, 0, vt, Nt, mt.data);
        }
        else {
            U && ot && e.texStorage2D(s.TEXTURE_2D, St, Ct, Gt[0].width, Gt[0].height);
            for (let rt = 0, K = Gt.length; rt < K; rt++)
                mt = Gt[rt], x.format !== Qe ? vt !== null ? U ? ft && e.compressedTexSubImage2D(s.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, vt, mt.data) : e.compressedTexImage2D(s.TEXTURE_2D, rt, Ct, mt.width, mt.height, 0, mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : U ? ft && e.texSubImage2D(s.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, vt, Nt, mt.data) : e.texImage2D(s.TEXTURE_2D, rt, Ct, mt.width, mt.height, 0, vt, Nt, mt.data);
        }
    else if (x.isDataArrayTexture)
        if (U) {
            if (ot && e.texStorage3D(s.TEXTURE_2D_ARRAY, St, Ct, st.width, st.height, st.depth), ft)
                if (x.layerUpdates.size > 0) {
                    const rt = cl(st.width, st.height, x.format, x.type);
                    for (const K of x.layerUpdates) {
                        const At = st.data.subarray(K * rt / st.data.BYTES_PER_ELEMENT, (K + 1) * rt / st.data.BYTES_PER_ELEMENT);
                        e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, K, st.width, st.height, 1, vt, Nt, At);
                    }
                    x.clearLayerUpdates();
                }
                else
                    e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, st.width, st.height, st.depth, vt, Nt, st.data);
        }
        else
            e.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ct, st.width, st.height, st.depth, 0, vt, Nt, st.data);
    else if (x.isData3DTexture)
        U ? (ot && e.texStorage3D(s.TEXTURE_3D, St, Ct, st.width, st.height, st.depth), ft && e.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, st.width, st.height, st.depth, vt, Nt, st.data)) : e.texImage3D(s.TEXTURE_3D, 0, Ct, st.width, st.height, st.depth, 0, vt, Nt, st.data);
    else if (x.isFramebufferTexture) {
        if (ot)
            if (U)
                e.texStorage2D(s.TEXTURE_2D, St, Ct, st.width, st.height);
            else {
                let rt = st.width, K = st.height;
                for (let At = 0; At < St; At++)
                    e.texImage2D(s.TEXTURE_2D, At, Ct, rt, K, 0, vt, Nt, null), rt >>= 1, K >>= 1;
            }
    }
    else if (Gt.length > 0) {
        if (U && ot) {
            const rt = kt(Gt[0]);
            e.texStorage2D(s.TEXTURE_2D, St, Ct, rt.width, rt.height);
        }
        for (let rt = 0, K = Gt.length; rt < K; rt++)
            mt = Gt[rt], U ? ft && e.texSubImage2D(s.TEXTURE_2D, rt, 0, 0, vt, Nt, mt) : e.texImage2D(s.TEXTURE_2D, rt, Ct, vt, Nt, mt);
        x.generateMipmaps = !1;
    }
    else if (U) {
        if (ot) {
            const rt = kt(st);
            e.texStorage2D(s.TEXTURE_2D, St, Ct, rt.width, rt.height);
        }
        ft && e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, vt, Nt, st);
    }
    else
        e.texImage2D(s.TEXTURE_2D, 0, Ct, vt, Nt, st);
    m(x) && p(G), Rt.__version = q.version, x.onUpdate && x.onUpdate(x);
} w.__version = x.version; } function nt(w, x, O) { if (x.image.length !== 6)
    return; const G = Zt(w, x), tt = x.source; e.bindTexture(s.TEXTURE_CUBE_MAP, w.__webglTexture, s.TEXTURE0 + O); const q = n.get(tt); if (tt.version !== q.__version || G === !0) {
    e.activeTexture(s.TEXTURE0 + O);
    const Rt = Qt.getPrimaries(Qt.workingColorSpace), lt = x.colorSpace === In ? null : Qt.getPrimaries(x.colorSpace), wt = x.colorSpace === In || Rt === lt ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
    s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, wt);
    const Tt = x.isCompressedTexture || x.image[0].isCompressedTexture, st = x.image[0] && x.image[0].isDataTexture, vt = [];
    for (let K = 0; K < 6; K++)
        !Tt && !st ? vt[K] = v(x.image[K], !0, i.maxCubemapSize) : vt[K] = st ? x.image[K].image : x.image[K], vt[K] = zt(x, vt[K]);
    const Nt = vt[0], Ct = r.convert(x.format, x.colorSpace), mt = r.convert(x.type), Gt = S(x.internalFormat, Ct, mt, x.colorSpace), U = x.isVideoTexture !== !0, ot = q.__version === void 0 || G === !0, ft = tt.dataReady;
    let St = P(x, Nt);
    Ht(s.TEXTURE_CUBE_MAP, x);
    let rt;
    if (Tt) {
        U && ot && e.texStorage2D(s.TEXTURE_CUBE_MAP, St, Gt, Nt.width, Nt.height);
        for (let K = 0; K < 6; K++) {
            rt = vt[K].mipmaps;
            for (let At = 0; At < rt.length; At++) {
                const Bt = rt[At];
                x.format !== Qe ? Ct !== null ? U ? ft && e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, 0, 0, Bt.width, Bt.height, Ct, Bt.data) : e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, Gt, Bt.width, Bt.height, 0, Bt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : U ? ft && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, 0, 0, Bt.width, Bt.height, Ct, mt, Bt.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, Gt, Bt.width, Bt.height, 0, Ct, mt, Bt.data);
            }
        }
    }
    else {
        if (rt = x.mipmaps, U && ot) {
            rt.length > 0 && St++;
            const K = kt(vt[0]);
            e.texStorage2D(s.TEXTURE_CUBE_MAP, St, Gt, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
            if (st) {
                U ? ft && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, vt[K].width, vt[K].height, Ct, mt, vt[K].data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Gt, vt[K].width, vt[K].height, 0, Ct, mt, vt[K].data);
                for (let At = 0; At < rt.length; At++) {
                    const he = rt[At].image[K].image;
                    U ? ft && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, 0, 0, he.width, he.height, Ct, mt, he.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, Gt, he.width, he.height, 0, Ct, mt, he.data);
                }
            }
            else {
                U ? ft && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ct, mt, vt[K]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Gt, Ct, mt, vt[K]);
                for (let At = 0; At < rt.length; At++) {
                    const Bt = rt[At];
                    U ? ft && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, 0, 0, Ct, mt, Bt.image[K]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, Gt, Ct, mt, Bt.image[K]);
                }
            }
    }
    m(x) && p(s.TEXTURE_CUBE_MAP), q.__version = tt.version, x.onUpdate && x.onUpdate(x);
} w.__version = x.version; } function yt(w, x, O, G, tt, q) { const Rt = r.convert(O.format, O.colorSpace), lt = r.convert(O.type), wt = S(O.internalFormat, Rt, lt, O.colorSpace), Tt = n.get(x), st = n.get(O); if (st.__renderTarget = x, !Tt.__hasExternalTextures) {
    const vt = Math.max(1, x.width >> q), Nt = Math.max(1, x.height >> q);
    tt === s.TEXTURE_3D || tt === s.TEXTURE_2D_ARRAY ? e.texImage3D(tt, q, wt, vt, Nt, x.depth, 0, Rt, lt, null) : e.texImage2D(tt, q, wt, vt, Nt, 0, Rt, lt, null);
} e.bindFramebuffer(s.FRAMEBUFFER, w), it(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, G, tt, st.__webglTexture, 0, ht(x)) : (tt === s.TEXTURE_2D || tt >= s.TEXTURE_CUBE_MAP_POSITIVE_X && tt <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, G, tt, st.__webglTexture, q), e.bindFramebuffer(s.FRAMEBUFFER, null); } function It(w, x, O) { if (s.bindRenderbuffer(s.RENDERBUFFER, w), x.depthBuffer) {
    const G = x.depthTexture, tt = G && G.isDepthTexture ? G.type : null, q = _(x.stencilBuffer, tt), Rt = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, lt = ht(x);
    it(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, lt, q, x.width, x.height) : O ? s.renderbufferStorageMultisample(s.RENDERBUFFER, lt, q, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, q, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, Rt, s.RENDERBUFFER, w);
}
else {
    const G = x.textures;
    for (let tt = 0; tt < G.length; tt++) {
        const q = G[tt], Rt = r.convert(q.format, q.colorSpace), lt = r.convert(q.type), wt = S(q.internalFormat, Rt, lt, q.colorSpace), Tt = ht(x);
        O && it(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Tt, wt, x.width, x.height) : it(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Tt, wt, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, wt, x.width, x.height);
    }
} s.bindRenderbuffer(s.RENDERBUFFER, null); } function Et(w, x) { if (x && x.isWebGLCubeRenderTarget)
    throw new Error("Depth Texture with cube render targets is not supported"); if (e.bindFramebuffer(s.FRAMEBUFFER, w), !(x.depthTexture && x.depthTexture.isDepthTexture))
    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); const G = n.get(x.depthTexture); G.__renderTarget = x, (!G.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), V(x.depthTexture, 0); const tt = G.__webglTexture, q = ht(x); if (x.depthTexture.format === is)
    it(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, tt, 0, q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, tt, 0);
else if (x.depthTexture.format === ss)
    it(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, tt, 0, q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, tt, 0);
else
    throw new Error("Unknown depthTexture format"); } function $t(w) { const x = n.get(w), O = w.isWebGLCubeRenderTarget === !0; if (x.__boundDepthTexture !== w.depthTexture) {
    const G = w.depthTexture;
    if (x.__depthDisposeCallback && x.__depthDisposeCallback(), G) {
        const tt = () => { delete x.__boundDepthTexture, delete x.__depthDisposeCallback, G.removeEventListener("dispose", tt); };
        G.addEventListener("dispose", tt), x.__depthDisposeCallback = tt;
    }
    x.__boundDepthTexture = G;
} if (w.depthTexture && !x.__autoAllocateDepthBuffer) {
    if (O)
        throw new Error("target.depthTexture not supported in Cube render targets");
    const G = w.texture.mipmaps;
    G && G.length > 0 ? Et(x.__webglFramebuffer[0], w) : Et(x.__webglFramebuffer, w);
}
else if (O) {
    x.__webglDepthbuffer = [];
    for (let G = 0; G < 6; G++)
        if (e.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[G]), x.__webglDepthbuffer[G] === void 0)
            x.__webglDepthbuffer[G] = s.createRenderbuffer(), It(x.__webglDepthbuffer[G], w, !1);
        else {
            const tt = w.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, q = x.__webglDepthbuffer[G];
            s.bindRenderbuffer(s.RENDERBUFFER, q), s.framebufferRenderbuffer(s.FRAMEBUFFER, tt, s.RENDERBUFFER, q);
        }
}
else {
    const G = w.texture.mipmaps;
    if (G && G.length > 0 ? e.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[0]) : e.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
        x.__webglDepthbuffer = s.createRenderbuffer(), It(x.__webglDepthbuffer, w, !1);
    else {
        const tt = w.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, q = x.__webglDepthbuffer;
        s.bindRenderbuffer(s.RENDERBUFFER, q), s.framebufferRenderbuffer(s.FRAMEBUFFER, tt, s.RENDERBUFFER, q);
    }
} e.bindFramebuffer(s.FRAMEBUFFER, null); } function ce(w, x, O) { const G = n.get(w); x !== void 0 && yt(G.__webglFramebuffer, w, w.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), O !== void 0 && $t(w); } function C(w) { const x = w.texture, O = n.get(w), G = n.get(x); w.addEventListener("dispose", I); const tt = w.textures, q = w.isWebGLCubeRenderTarget === !0, Rt = tt.length > 1; if (Rt || (G.__webglTexture === void 0 && (G.__webglTexture = s.createTexture()), G.__version = x.version, a.memory.textures++), q) {
    O.__webglFramebuffer = [];
    for (let lt = 0; lt < 6; lt++)
        if (x.mipmaps && x.mipmaps.length > 0) {
            O.__webglFramebuffer[lt] = [];
            for (let wt = 0; wt < x.mipmaps.length; wt++)
                O.__webglFramebuffer[lt][wt] = s.createFramebuffer();
        }
        else
            O.__webglFramebuffer[lt] = s.createFramebuffer();
}
else {
    if (x.mipmaps && x.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let lt = 0; lt < x.mipmaps.length; lt++)
            O.__webglFramebuffer[lt] = s.createFramebuffer();
    }
    else
        O.__webglFramebuffer = s.createFramebuffer();
    if (Rt)
        for (let lt = 0, wt = tt.length; lt < wt; lt++) {
            const Tt = n.get(tt[lt]);
            Tt.__webglTexture === void 0 && (Tt.__webglTexture = s.createTexture(), a.memory.textures++);
        }
    if (w.samples > 0 && it(w) === !1) {
        O.__webglMultisampledFramebuffer = s.createFramebuffer(), O.__webglColorRenderbuffer = [], e.bindFramebuffer(s.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let lt = 0; lt < tt.length; lt++) {
            const wt = tt[lt];
            O.__webglColorRenderbuffer[lt] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, O.__webglColorRenderbuffer[lt]);
            const Tt = r.convert(wt.format, wt.colorSpace), st = r.convert(wt.type), vt = S(wt.internalFormat, Tt, st, wt.colorSpace, w.isXRRenderTarget === !0), Nt = ht(w);
            s.renderbufferStorageMultisample(s.RENDERBUFFER, Nt, vt, w.width, w.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + lt, s.RENDERBUFFER, O.__webglColorRenderbuffer[lt]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), w.depthBuffer && (O.__webglDepthRenderbuffer = s.createRenderbuffer(), It(O.__webglDepthRenderbuffer, w, !0)), e.bindFramebuffer(s.FRAMEBUFFER, null);
    }
} if (q) {
    e.bindTexture(s.TEXTURE_CUBE_MAP, G.__webglTexture), Ht(s.TEXTURE_CUBE_MAP, x);
    for (let lt = 0; lt < 6; lt++)
        if (x.mipmaps && x.mipmaps.length > 0)
            for (let wt = 0; wt < x.mipmaps.length; wt++)
                yt(O.__webglFramebuffer[lt][wt], w, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + lt, wt);
        else
            yt(O.__webglFramebuffer[lt], w, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + lt, 0);
    m(x) && p(s.TEXTURE_CUBE_MAP), e.unbindTexture();
}
else if (Rt) {
    for (let lt = 0, wt = tt.length; lt < wt; lt++) {
        const Tt = tt[lt], st = n.get(Tt);
        let vt = s.TEXTURE_2D;
        (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (vt = w.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), e.bindTexture(vt, st.__webglTexture), Ht(vt, Tt), yt(O.__webglFramebuffer, w, Tt, s.COLOR_ATTACHMENT0 + lt, vt, 0), m(Tt) && p(vt);
    }
    e.unbindTexture();
}
else {
    let lt = s.TEXTURE_2D;
    if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (lt = w.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), e.bindTexture(lt, G.__webglTexture), Ht(lt, x), x.mipmaps && x.mipmaps.length > 0)
        for (let wt = 0; wt < x.mipmaps.length; wt++)
            yt(O.__webglFramebuffer[wt], w, x, s.COLOR_ATTACHMENT0, lt, wt);
    else
        yt(O.__webglFramebuffer, w, x, s.COLOR_ATTACHMENT0, lt, 0);
    m(x) && p(lt), e.unbindTexture();
} w.depthBuffer && $t(w); } function et(w) { const x = w.textures; for (let O = 0, G = x.length; O < G; O++) {
    const tt = x[O];
    if (m(tt)) {
        const q = E(w), Rt = n.get(tt).__webglTexture;
        e.bindTexture(q, Rt), p(q), e.unbindTexture();
    }
} } const J = [], Z = []; function j(w) { if (w.samples > 0) {
    if (it(w) === !1) {
        const x = w.textures, O = w.width, G = w.height;
        let tt = s.COLOR_BUFFER_BIT;
        const q = w.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Rt = n.get(w), lt = x.length > 1;
        if (lt)
            for (let Tt = 0; Tt < x.length; Tt++)
                e.bindFramebuffer(s.FRAMEBUFFER, Rt.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Tt, s.RENDERBUFFER, null), e.bindFramebuffer(s.FRAMEBUFFER, Rt.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Tt, s.TEXTURE_2D, null, 0);
        e.bindFramebuffer(s.READ_FRAMEBUFFER, Rt.__webglMultisampledFramebuffer);
        const wt = w.texture.mipmaps;
        wt && wt.length > 0 ? e.bindFramebuffer(s.DRAW_FRAMEBUFFER, Rt.__webglFramebuffer[0]) : e.bindFramebuffer(s.DRAW_FRAMEBUFFER, Rt.__webglFramebuffer);
        for (let Tt = 0; Tt < x.length; Tt++) {
            if (w.resolveDepthBuffer && (w.depthBuffer && (tt |= s.DEPTH_BUFFER_BIT), w.stencilBuffer && w.resolveStencilBuffer && (tt |= s.STENCIL_BUFFER_BIT)), lt) {
                s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, Rt.__webglColorRenderbuffer[Tt]);
                const st = n.get(x[Tt]).__webglTexture;
                s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, st, 0);
            }
            s.blitFramebuffer(0, 0, O, G, 0, 0, O, G, tt, s.NEAREST), c === !0 && (J.length = 0, Z.length = 0, J.push(s.COLOR_ATTACHMENT0 + Tt), w.depthBuffer && w.resolveDepthBuffer === !1 && (J.push(q), Z.push(q), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, Z)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, J));
        }
        if (e.bindFramebuffer(s.READ_FRAMEBUFFER, null), e.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), lt)
            for (let Tt = 0; Tt < x.length; Tt++) {
                e.bindFramebuffer(s.FRAMEBUFFER, Rt.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Tt, s.RENDERBUFFER, Rt.__webglColorRenderbuffer[Tt]);
                const st = n.get(x[Tt]).__webglTexture;
                e.bindFramebuffer(s.FRAMEBUFFER, Rt.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Tt, s.TEXTURE_2D, st, 0);
            }
        e.bindFramebuffer(s.DRAW_FRAMEBUFFER, Rt.__webglMultisampledFramebuffer);
    }
    else if (w.depthBuffer && w.resolveDepthBuffer === !1 && c) {
        const x = w.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]);
    }
} } function ht(w) { return Math.min(i.maxSamples, w.samples); } function it(w) { const x = n.get(w); return w.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1; } function ut(w) { const x = a.render.frame; h.get(w) !== x && (h.set(w, x), w.update()); } function zt(w, x) { const O = w.colorSpace, G = w.format, tt = w.type; return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || O !== Ci && O !== In && (Qt.getTransfer(O) === re ? (G !== Qe || tt !== un) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), x; } function kt(w) { return typeof HTMLImageElement < "u" && w instanceof HTMLImageElement ? (l.width = w.naturalWidth || w.width, l.height = w.naturalHeight || w.height) : typeof VideoFrame < "u" && w instanceof VideoFrame ? (l.width = w.displayWidth, l.height = w.displayHeight) : (l.width = w.width, l.height = w.height), l; } this.allocateTextureUnit = H, this.resetTextureUnits = k, this.setTexture2D = V, this.setTexture2DArray = X, this.setTexture3D = Q, this.setTextureCube = W, this.rebindTextures = ce, this.setupRenderTarget = C, this.updateRenderTargetMipmap = et, this.updateMultisampleRenderTarget = j, this.setupDepthRenderbuffer = $t, this.setupFrameBufferTexture = yt, this.useMultisampledRTT = it; }
function Xg(s, t) { function e(n, i = In) { let r; const a = Qt.getTransfer(i); if (n === un)
    return s.UNSIGNED_BYTE; if (n === Ka)
    return s.UNSIGNED_SHORT_4_4_4_4; if (n === Qa)
    return s.UNSIGNED_SHORT_5_5_5_1; if (n === Ql)
    return s.UNSIGNED_INT_5_9_9_9_REV; if (n === tc)
    return s.UNSIGNED_INT_10F_11F_11F_REV; if (n === Jl)
    return s.BYTE; if (n === Kl)
    return s.SHORT; if (n === es)
    return s.UNSIGNED_SHORT; if (n === Ja)
    return s.INT; if (n === Kn)
    return s.UNSIGNED_INT; if (n === ln)
    return s.FLOAT; if (n === ds)
    return s.HALF_FLOAT; if (n === ec)
    return s.ALPHA; if (n === nc)
    return s.RGB; if (n === Qe)
    return s.RGBA; if (n === is)
    return s.DEPTH_COMPONENT; if (n === ss)
    return s.DEPTH_STENCIL; if (n === to)
    return s.RED; if (n === eo)
    return s.RED_INTEGER; if (n === ic)
    return s.RG; if (n === no)
    return s.RG_INTEGER; if (n === io)
    return s.RGBA_INTEGER; if (n === Ys || n === $s || n === js || n === Zs)
    if (a === re)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
            if (n === Ys)
                return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === $s)
                return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === js)
                return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === Zs)
                return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        }
        else
            return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === Ys)
            return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === $s)
            return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === js)
            return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Zs)
            return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
    else
        return null; if (n === da || n === fa || n === pa || n === ma)
    if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === da)
            return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === fa)
            return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === pa)
            return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === ma)
            return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }
    else
        return null; if (n === ga || n === va || n === xa)
    if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === ga || n === va)
            return a === re ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === xa)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    }
    else
        return null; if (n === _a || n === ya || n === Ma || n === Sa || n === ba || n === Ea || n === wa || n === Ta || n === Aa || n === Ra || n === Ca || n === Pa || n === Ia || n === La)
    if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === _a)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ya)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ma)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Sa)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ba)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ea)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === wa)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ta)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Aa)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Ra)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ca)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Pa)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ia)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === La)
            return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    }
    else
        return null; if (n === Da || n === Ua || n === Na)
    if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Da)
            return a === re ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ua)
            return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Na)
            return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    }
    else
        return null; if (n === Fa || n === Oa || n === ka || n === za)
    if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Fa)
            return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Oa)
            return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ka)
            return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === za)
            return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    }
    else
        return null; return n === ns ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null; } return { convert: e }; }
const Yg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, $g = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class jg {
    constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0; }
    init(t, e) { if (this.texture === null) {
        const n = new _c(t.texture);
        (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    } }
    getMesh(t) { if (this.texture !== null && this.mesh === null) {
        const e = t.cameras[0].viewport, n = new en({ vertexShader: Yg, fragmentShader: $g, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
        this.mesh = new qt(new dn(20, 20), n);
    } return this.mesh; }
    reset() { this.texture = null, this.mesh = null; }
    getDepthTexture() { return this.texture; }
}
class Zg extends Di {
    constructor(t, e) { super(); const n = this; let i = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, g = null; const v = typeof XRWebGLBinding < "u", m = new jg, p = {}, E = e.getContextAttributes(); let S = null, _ = null; const P = [], A = [], I = new ct; let D = null; const b = new Fe; b.viewport = new ae; const M = new Fe; M.viewport = new ae; const L = [b, M], k = new gd; let H = null, Y = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function ($) { let nt = P[$]; return nt === void 0 && (nt = new Nr, P[$] = nt), nt.getTargetRaySpace(); }, this.getControllerGrip = function ($) { let nt = P[$]; return nt === void 0 && (nt = new Nr, P[$] = nt), nt.getGripSpace(); }, this.getHand = function ($) { let nt = P[$]; return nt === void 0 && (nt = new Nr, P[$] = nt), nt.getHandSpace(); }; function V($) { const nt = A.indexOf($.inputSource); if (nt === -1)
        return; const yt = P[nt]; yt !== void 0 && (yt.update($.inputSource, $.frame, l || a), yt.dispatchEvent({ type: $.type, data: $.inputSource })); } function X() { i.removeEventListener("select", V), i.removeEventListener("selectstart", V), i.removeEventListener("selectend", V), i.removeEventListener("squeeze", V), i.removeEventListener("squeezestart", V), i.removeEventListener("squeezeend", V), i.removeEventListener("end", X), i.removeEventListener("inputsourceschange", Q); for (let $ = 0; $ < P.length; $++) {
        const nt = A[$];
        nt !== null && (A[$] = null, P[$].disconnect(nt));
    } H = null, Y = null, m.reset(); for (const $ in p)
        delete p[$]; t.setRenderTarget(S), f = null, d = null, u = null, i = null, _ = null, Jt.stop(), n.isPresenting = !1, t.setPixelRatio(D), t.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" }); } this.setFramebufferScaleFactor = function ($) { r = $, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting."); }, this.setReferenceSpaceType = function ($) { o = $, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting."); }, this.getReferenceSpace = function () { return l || a; }, this.setReferenceSpace = function ($) { l = $; }, this.getBaseLayer = function () { return d !== null ? d : f; }, this.getBinding = function () { return u === null && v && (u = new XRWebGLBinding(i, e)), u; }, this.getFrame = function () { return g; }, this.getSession = function () { return i; }, this.setSession = async function ($) { if (i = $, i !== null) {
        if (S = t.getRenderTarget(), i.addEventListener("select", V), i.addEventListener("selectstart", V), i.addEventListener("selectend", V), i.addEventListener("squeeze", V), i.addEventListener("squeezestart", V), i.addEventListener("squeezeend", V), i.addEventListener("end", X), i.addEventListener("inputsourceschange", Q), E.xrCompatible !== !0 && await e.makeXRCompatible(), D = t.getPixelRatio(), t.getSize(I), v && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let yt = null, It = null, Et = null;
            E.depth && (Et = E.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, yt = E.stencil ? ss : is, It = E.stencil ? ns : Kn);
            const $t = { colorFormat: e.RGBA8, depthFormat: Et, scaleFactor: r };
            u = this.getBinding(), d = u.createProjectionLayer($t), i.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, !1), _ = new Fn(d.textureWidth, d.textureHeight, { format: Qe, type: un, depthTexture: new xc(d.textureWidth, d.textureHeight, It, void 0, void 0, void 0, void 0, void 0, void 0, yt), stencilBuffer: E.stencil, colorSpace: t.outputColorSpace, samples: E.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === !1, resolveStencilBuffer: d.ignoreDepthValues === !1 });
        }
        else {
            const yt = { antialias: E.antialias, alpha: !0, depth: E.depth, stencil: E.stencil, framebufferScaleFactor: r };
            f = new XRWebGLLayer(i, e, yt), i.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), _ = new Fn(f.framebufferWidth, f.framebufferHeight, { format: Qe, type: un, colorSpace: t.outputColorSpace, stencilBuffer: E.stencil, resolveDepthBuffer: f.ignoreDepthValues === !1, resolveStencilBuffer: f.ignoreDepthValues === !1 });
        }
        _.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Jt.setContext(i), Jt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
    } }, this.getEnvironmentBlendMode = function () { if (i !== null)
        return i.environmentBlendMode; }, this.getDepthTexture = function () { return m.getDepthTexture(); }; function Q($) { for (let nt = 0; nt < $.removed.length; nt++) {
        const yt = $.removed[nt], It = A.indexOf(yt);
        It >= 0 && (A[It] = null, P[It].disconnect(yt));
    } for (let nt = 0; nt < $.added.length; nt++) {
        const yt = $.added[nt];
        let It = A.indexOf(yt);
        if (It === -1) {
            for (let $t = 0; $t < P.length; $t++)
                if ($t >= A.length) {
                    A.push(yt), It = $t;
                    break;
                }
                else if (A[$t] === null) {
                    A[$t] = yt, It = $t;
                    break;
                }
            if (It === -1)
                break;
        }
        const Et = P[It];
        Et && Et.connect(yt);
    } } const W = new T, dt = new T; function xt($, nt, yt) { W.setFromMatrixPosition(nt.matrixWorld), dt.setFromMatrixPosition(yt.matrixWorld); const It = W.distanceTo(dt), Et = nt.projectionMatrix.elements, $t = yt.projectionMatrix.elements, ce = Et[14] / (Et[10] - 1), C = Et[14] / (Et[10] + 1), et = (Et[9] + 1) / Et[5], J = (Et[9] - 1) / Et[5], Z = (Et[8] - 1) / Et[0], j = ($t[8] + 1) / $t[0], ht = ce * Z, it = ce * j, ut = It / (-Z + j), zt = ut * -Z; if (nt.matrixWorld.decompose($.position, $.quaternion, $.scale), $.translateX(zt), $.translateZ(ut), $.matrixWorld.compose($.position, $.quaternion, $.scale), $.matrixWorldInverse.copy($.matrixWorld).invert(), Et[10] === -1)
        $.projectionMatrix.copy(nt.projectionMatrix), $.projectionMatrixInverse.copy(nt.projectionMatrixInverse);
    else {
        const kt = ce + ut, w = C + ut, x = ht - zt, O = it + (It - zt), G = et * C / w * kt, tt = J * C / w * kt;
        $.projectionMatrix.makePerspective(x, O, G, tt, kt, w), $.projectionMatrixInverse.copy($.projectionMatrix).invert();
    } } function Mt($, nt) { nt === null ? $.matrixWorld.copy($.matrix) : $.matrixWorld.multiplyMatrices(nt.matrixWorld, $.matrix), $.matrixWorldInverse.copy($.matrixWorld).invert(); } this.updateCamera = function ($) { if (i === null)
        return; let nt = $.near, yt = $.far; m.texture !== null && (m.depthNear > 0 && (nt = m.depthNear), m.depthFar > 0 && (yt = m.depthFar)), k.near = M.near = b.near = nt, k.far = M.far = b.far = yt, (H !== k.near || Y !== k.far) && (i.updateRenderState({ depthNear: k.near, depthFar: k.far }), H = k.near, Y = k.far), k.layers.mask = $.layers.mask | 6, b.layers.mask = k.layers.mask & 3, M.layers.mask = k.layers.mask & 5; const It = $.parent, Et = k.cameras; Mt(k, It); for (let $t = 0; $t < Et.length; $t++)
        Mt(Et[$t], It); Et.length === 2 ? xt(k, b, M) : k.projectionMatrix.copy(b.projectionMatrix), Ht($, k, It); }; function Ht($, nt, yt) { yt === null ? $.matrix.copy(nt.matrixWorld) : ($.matrix.copy(yt.matrixWorld), $.matrix.invert(), $.matrix.multiply(nt.matrixWorld)), $.matrix.decompose($.position, $.quaternion, $.scale), $.updateMatrixWorld(!0), $.projectionMatrix.copy(nt.projectionMatrix), $.projectionMatrixInverse.copy(nt.projectionMatrixInverse), $.isPerspectiveCamera && ($.fov = rs * 2 * Math.atan(1 / $.projectionMatrix.elements[5]), $.zoom = 1); } this.getCamera = function () { return k; }, this.getFoveation = function () { if (!(d === null && f === null))
        return c; }, this.setFoveation = function ($) { c = $, d !== null && (d.fixedFoveation = $), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = $); }, this.hasDepthSensing = function () { return m.texture !== null; }, this.getDepthSensingMesh = function () { return m.getMesh(k); }, this.getCameraTexture = function ($) { return p[$]; }; let Zt = null; function ie($, nt) { if (h = nt.getViewerPose(l || a), g = nt, h !== null) {
        const yt = h.views;
        f !== null && (t.setRenderTargetFramebuffer(_, f.framebuffer), t.setRenderTarget(_));
        let It = !1;
        yt.length !== k.cameras.length && (k.cameras.length = 0, It = !0);
        for (let C = 0; C < yt.length; C++) {
            const et = yt[C];
            let J = null;
            if (f !== null)
                J = f.getViewport(et);
            else {
                const j = u.getViewSubImage(d, et);
                J = j.viewport, C === 0 && (t.setRenderTargetTextures(_, j.colorTexture, j.depthStencilTexture), t.setRenderTarget(_));
            }
            let Z = L[C];
            Z === void 0 && (Z = new Fe, Z.layers.enable(C), Z.viewport = new ae, L[C] = Z), Z.matrix.fromArray(et.transform.matrix), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.projectionMatrix.fromArray(et.projectionMatrix), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(), Z.viewport.set(J.x, J.y, J.width, J.height), C === 0 && (k.matrix.copy(Z.matrix), k.matrix.decompose(k.position, k.quaternion, k.scale)), It === !0 && k.cameras.push(Z);
        }
        const Et = i.enabledFeatures;
        if (Et && Et.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && v) {
            u = n.getBinding();
            const C = u.getDepthInformation(yt[0]);
            C && C.isValid && C.texture && m.init(C, i.renderState);
        }
        if (Et && Et.includes("camera-access") && v) {
            t.state.unbindTexture(), u = n.getBinding();
            for (let C = 0; C < yt.length; C++) {
                const et = yt[C].camera;
                if (et) {
                    let J = p[et];
                    J || (J = new _c, p[et] = J);
                    const Z = u.getCameraImage(et);
                    J.sourceTexture = Z;
                }
            }
        }
    } for (let yt = 0; yt < P.length; yt++) {
        const It = A[yt], Et = P[yt];
        It !== null && Et !== void 0 && Et.update(It, nt, l || a);
    } Zt && Zt($, nt), nt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: nt }), g = null; } const Jt = new Nc; Jt.setAnimationLoop(ie), this.setAnimationLoop = function ($) { Zt = $; }, this.dispose = function () { }; }
}
const qn = new $e, Jg = new le;
function Kg(s, t) { function e(m, p) { m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix); } function n(m, p) { p.color.getRGB(m.fogColor.value, fc(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density); } function i(m, p, E, S, _) { p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, _)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), v(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? c(m, p, E, S) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1); } function r(m, p) { m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, e(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Re && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, e(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Re && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, e(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, e(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); const E = t.get(p), S = E.envMap, _ = E.envMapRotation; S && (m.envMap.value = S, qn.copy(_), qn.x *= -1, qn.y *= -1, qn.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (qn.y *= -1, qn.z *= -1), m.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(qn)), m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, m.aoMapTransform)); } function a(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, e(p.map, m.mapTransform)); } function o(m, p) { m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale; } function c(m, p, E, S) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * E, m.scale.value = S * .5, p.map && (m.map.value = p.map, e(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); } function l(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); } function h(m, p) { m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4); } function u(m, p) { p.gradientMap && (m.gradientMap.value = p.gradientMap); } function d(m, p) { m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity); } function f(m, p, E) { m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Re && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = E.texture, m.transmissionSamplerSize.value.set(E.width, E.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, m.specularIntensityMapTransform)); } function g(m, p) { p.matcap && (m.matcap.value = p.matcap); } function v(m, p) { const E = t.get(p).light; m.referencePosition.value.setFromMatrixPosition(E.matrixWorld), m.nearDistance.value = E.shadow.camera.near, m.farDistance.value = E.shadow.camera.far; } return { refreshFogUniforms: n, refreshMaterialUniforms: i }; }
function Qg(s, t, e, n) { let i = {}, r = {}, a = []; const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS); function c(E, S) { const _ = S.program; n.uniformBlockBinding(E, _); } function l(E, S) { let _ = i[E.id]; _ === void 0 && (g(E), _ = h(E), i[E.id] = _, E.addEventListener("dispose", m)); const P = S.program; n.updateUBOMapping(E, P); const A = t.render.frame; r[E.id] !== A && (d(E), r[E.id] = A); } function h(E) { const S = u(); E.__bindingPointIndex = S; const _ = s.createBuffer(), P = E.__size, A = E.usage; return s.bindBuffer(s.UNIFORM_BUFFER, _), s.bufferData(s.UNIFORM_BUFFER, P, A), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, S, _), _; } function u() { for (let E = 0; E < o; E++)
    if (a.indexOf(E) === -1)
        return a.push(E), E; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0; } function d(E) { const S = i[E.id], _ = E.uniforms, P = E.__cache; s.bindBuffer(s.UNIFORM_BUFFER, S); for (let A = 0, I = _.length; A < I; A++) {
    const D = Array.isArray(_[A]) ? _[A] : [_[A]];
    for (let b = 0, M = D.length; b < M; b++) {
        const L = D[b];
        if (f(L, A, b, P) === !0) {
            const k = L.__offset, H = Array.isArray(L.value) ? L.value : [L.value];
            let Y = 0;
            for (let V = 0; V < H.length; V++) {
                const X = H[V], Q = v(X);
                typeof X == "number" || typeof X == "boolean" ? (L.__data[0] = X, s.bufferSubData(s.UNIFORM_BUFFER, k + Y, L.__data)) : X.isMatrix3 ? (L.__data[0] = X.elements[0], L.__data[1] = X.elements[1], L.__data[2] = X.elements[2], L.__data[3] = 0, L.__data[4] = X.elements[3], L.__data[5] = X.elements[4], L.__data[6] = X.elements[5], L.__data[7] = 0, L.__data[8] = X.elements[6], L.__data[9] = X.elements[7], L.__data[10] = X.elements[8], L.__data[11] = 0) : (X.toArray(L.__data, Y), Y += Q.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            s.bufferSubData(s.UNIFORM_BUFFER, k, L.__data);
        }
    }
} s.bindBuffer(s.UNIFORM_BUFFER, null); } function f(E, S, _, P) { const A = E.value, I = S + "_" + _; if (P[I] === void 0)
    return typeof A == "number" || typeof A == "boolean" ? P[I] = A : P[I] = A.clone(), !0; {
    const D = P[I];
    if (typeof A == "number" || typeof A == "boolean") {
        if (D !== A)
            return P[I] = A, !0;
    }
    else if (D.equals(A) === !1)
        return D.copy(A), !0;
} return !1; } function g(E) { const S = E.uniforms; let _ = 0; const P = 16; for (let I = 0, D = S.length; I < D; I++) {
    const b = Array.isArray(S[I]) ? S[I] : [S[I]];
    for (let M = 0, L = b.length; M < L; M++) {
        const k = b[M], H = Array.isArray(k.value) ? k.value : [k.value];
        for (let Y = 0, V = H.length; Y < V; Y++) {
            const X = H[Y], Q = v(X), W = _ % P, dt = W % Q.boundary, xt = W + dt;
            _ += dt, xt !== 0 && P - xt < Q.storage && (_ += P - xt), k.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = _, _ += Q.storage;
        }
    }
} const A = _ % P; return A > 0 && (_ += P - A), E.__size = _, E.__cache = {}, this; } function v(E) { const S = { boundary: 0, storage: 0 }; return typeof E == "number" || typeof E == "boolean" ? (S.boundary = 4, S.storage = 4) : E.isVector2 ? (S.boundary = 8, S.storage = 8) : E.isVector3 || E.isColor ? (S.boundary = 16, S.storage = 12) : E.isVector4 ? (S.boundary = 16, S.storage = 16) : E.isMatrix3 ? (S.boundary = 48, S.storage = 48) : E.isMatrix4 ? (S.boundary = 64, S.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), S; } function m(E) { const S = E.target; S.removeEventListener("dispose", m); const _ = a.indexOf(S.__bindingPointIndex); a.splice(_, 1), s.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id]; } function p() { for (const E in i)
    s.deleteBuffer(i[E]); a = [], i = {}, r = {}; } return { bind: c, update: l, dispose: p }; }
class t0 {
    constructor(t = {}) { const { canvas: e = nu(), context: n = null, depth: i = !0, stencil: r = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1 } = t; this.isWebGLRenderer = !0; let f; if (n !== null) {
        if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
            throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        f = n.getContextAttributes().alpha;
    }
    else
        f = a; const g = new Uint32Array(4), v = new Int32Array(4); let m = null, p = null; const E = [], S = []; this.domElement = e, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Un, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1; const _ = this; let P = !1; this._outputColorSpace = De; let A = 0, I = 0, D = null, b = -1, M = null; const L = new ae, k = new ae; let H = null; const Y = new Pt(0); let V = 0, X = e.width, Q = e.height, W = 1, dt = null, xt = null; const Mt = new ae(0, 0, X, Q), Ht = new ae(0, 0, X, Q); let Zt = !1; const ie = new oo; let Jt = !1, $ = !1; const nt = new le, yt = new T, It = new ae, Et = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let $t = !1; function ce() { return D === null ? W : 1; } let C = n; function et(y, N) { return e.getContext(y, N); } try {
        const y = { alpha: !0, depth: i, stencil: r, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: u };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Za}`), e.addEventListener("webglcontextlost", ft, !1), e.addEventListener("webglcontextrestored", St, !1), e.addEventListener("webglcontextcreationerror", rt, !1), C === null) {
            const N = "webgl2";
            if (C = et(N, y), C === null)
                throw et(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
    }
    catch (y) {
        throw console.error("THREE.WebGLRenderer: " + y.message), y;
    } let J, Z, j, ht, it, ut, zt, kt, w, x, O, G, tt, q, Rt, lt, wt, Tt, st, vt, Nt, Ct, mt, Gt; function U() { J = new hm(C), J.init(), Ct = new Xg(C, J), Z = new im(C, J, t, Ct), j = new Wg(C, J), Z.reversedDepthBuffer && d && j.buffers.depth.setReversed(!0), ht = new fm(C), it = new Ig, ut = new qg(C, J, j, it, Z, Ct, ht), zt = new rm(_), kt = new cm(_), w = new xd(C), mt = new em(C, w), x = new um(C, w, ht, mt), O = new mm(C, x, w, ht), st = new pm(C, Z, ut), lt = new sm(it), G = new Pg(_, zt, kt, J, Z, mt, lt), tt = new Kg(_, it), q = new Dg, Rt = new zg(J), Tt = new tm(_, zt, kt, j, O, f, c), wt = new Gg(_, O, Z), Gt = new Qg(C, ht, Z, j), vt = new nm(C, J, ht), Nt = new dm(C, J, ht), ht.programs = G.programs, _.capabilities = Z, _.extensions = J, _.properties = it, _.renderLists = q, _.shadowMap = wt, _.state = j, _.info = ht; } U(); const ot = new Zg(_, C); this.xr = ot, this.getContext = function () { return C; }, this.getContextAttributes = function () { return C.getContextAttributes(); }, this.forceContextLoss = function () { const y = J.get("WEBGL_lose_context"); y && y.loseContext(); }, this.forceContextRestore = function () { const y = J.get("WEBGL_lose_context"); y && y.restoreContext(); }, this.getPixelRatio = function () { return W; }, this.setPixelRatio = function (y) { y !== void 0 && (W = y, this.setSize(X, Q, !1)); }, this.getSize = function (y) { return y.set(X, Q); }, this.setSize = function (y, N, z = !0) { if (ot.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
    } X = y, Q = N, e.width = Math.floor(y * W), e.height = Math.floor(N * W), z === !0 && (e.style.width = y + "px", e.style.height = N + "px"), this.setViewport(0, 0, y, N); }, this.getDrawingBufferSize = function (y) { return y.set(X * W, Q * W).floor(); }, this.setDrawingBufferSize = function (y, N, z) { X = y, Q = N, W = z, e.width = Math.floor(y * z), e.height = Math.floor(N * z), this.setViewport(0, 0, y, N); }, this.getCurrentViewport = function (y) { return y.copy(L); }, this.getViewport = function (y) { return y.copy(Mt); }, this.setViewport = function (y, N, z, B) { y.isVector4 ? Mt.set(y.x, y.y, y.z, y.w) : Mt.set(y, N, z, B), j.viewport(L.copy(Mt).multiplyScalar(W).round()); }, this.getScissor = function (y) { return y.copy(Ht); }, this.setScissor = function (y, N, z, B) { y.isVector4 ? Ht.set(y.x, y.y, y.z, y.w) : Ht.set(y, N, z, B), j.scissor(k.copy(Ht).multiplyScalar(W).round()); }, this.getScissorTest = function () { return Zt; }, this.setScissorTest = function (y) { j.setScissorTest(Zt = y); }, this.setOpaqueSort = function (y) { dt = y; }, this.setTransparentSort = function (y) { xt = y; }, this.getClearColor = function (y) { return y.copy(Tt.getClearColor()); }, this.setClearColor = function () { Tt.setClearColor(...arguments); }, this.getClearAlpha = function () { return Tt.getClearAlpha(); }, this.setClearAlpha = function () { Tt.setClearAlpha(...arguments); }, this.clear = function (y = !0, N = !0, z = !0) { let B = 0; if (y) {
        let F = !1;
        if (D !== null) {
            const at = D.texture.format;
            F = at === io || at === no || at === eo;
        }
        if (F) {
            const at = D.texture.type, gt = at === un || at === Kn || at === es || at === ns || at === Ka || at === Qa, bt = Tt.getClearColor(), _t = Tt.getClearAlpha(), Ut = bt.r, Ft = bt.g, Lt = bt.b;
            gt ? (g[0] = Ut, g[1] = Ft, g[2] = Lt, g[3] = _t, C.clearBufferuiv(C.COLOR, 0, g)) : (v[0] = Ut, v[1] = Ft, v[2] = Lt, v[3] = _t, C.clearBufferiv(C.COLOR, 0, v));
        }
        else
            B |= C.COLOR_BUFFER_BIT;
    } N && (B |= C.DEPTH_BUFFER_BIT), z && (B |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(B); }, this.clearColor = function () { this.clear(!0, !1, !1); }, this.clearDepth = function () { this.clear(!1, !0, !1); }, this.clearStencil = function () { this.clear(!1, !1, !0); }, this.dispose = function () { e.removeEventListener("webglcontextlost", ft, !1), e.removeEventListener("webglcontextrestored", St, !1), e.removeEventListener("webglcontextcreationerror", rt, !1), Tt.dispose(), q.dispose(), Rt.dispose(), it.dispose(), zt.dispose(), kt.dispose(), O.dispose(), mt.dispose(), Gt.dispose(), G.dispose(), ot.dispose(), ot.removeEventListener("sessionstart", nn), ot.removeEventListener("sessionend", _o), kn.stop(); }; function ft(y) { y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = !0; } function St() { console.log("THREE.WebGLRenderer: Context Restored."), P = !1; const y = ht.autoReset, N = wt.enabled, z = wt.autoUpdate, B = wt.needsUpdate, F = wt.type; U(), ht.autoReset = y, wt.enabled = N, wt.autoUpdate = z, wt.needsUpdate = B, wt.type = F; } function rt(y) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage); } function K(y) { const N = y.target; N.removeEventListener("dispose", K), At(N); } function At(y) { Bt(y), it.remove(y); } function Bt(y) { const N = it.get(y).programs; N !== void 0 && (N.forEach(function (z) { G.releaseProgram(z); }), y.isShaderMaterial && G.releaseShaderCache(y)); } this.renderBufferDirect = function (y, N, z, B, F, at) { N === null && (N = Et); const gt = F.isMesh && F.matrixWorld.determinant() < 0, bt = Yc(y, N, z, B, F); j.setMaterial(B, gt); let _t = z.index, Ut = 1; if (B.wireframe === !0) {
        if (_t = x.getWireframeAttribute(z), _t === void 0)
            return;
        Ut = 2;
    } const Ft = z.drawRange, Lt = z.attributes.position; let jt = Ft.start * Ut, se = (Ft.start + Ft.count) * Ut; at !== null && (jt = Math.max(jt, at.start * Ut), se = Math.min(se, (at.start + at.count) * Ut)), _t !== null ? (jt = Math.max(jt, 0), se = Math.min(se, _t.count)) : Lt != null && (jt = Math.max(jt, 0), se = Math.min(se, Lt.count)); const ge = se - jt; if (ge < 0 || ge === 1 / 0)
        return; mt.setup(F, B, bt, z, _t); let ue, oe = vt; if (_t !== null && (ue = w.get(_t), oe = Nt, oe.setIndex(ue)), F.isMesh)
        B.wireframe === !0 ? (j.setLineWidth(B.wireframeLinewidth * ce()), oe.setMode(C.LINES)) : oe.setMode(C.TRIANGLES);
    else if (F.isLine) {
        let Dt = B.linewidth;
        Dt === void 0 && (Dt = 1), j.setLineWidth(Dt * ce()), F.isLineSegments ? oe.setMode(C.LINES) : F.isLineLoop ? oe.setMode(C.LINE_LOOP) : oe.setMode(C.LINE_STRIP);
    }
    else
        F.isPoints ? oe.setMode(C.POINTS) : F.isSprite && oe.setMode(C.TRIANGLES); if (F.isBatchedMesh)
        if (F._multiDrawInstances !== null)
            as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), oe.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances);
        else if (J.get("WEBGL_multi_draw"))
            oe.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
        else {
            const Dt = F._multiDrawStarts, fe = F._multiDrawCounts, Kt = F._multiDrawCount, ke = _t ? w.get(_t).bytesPerElement : 1, ni = it.get(B).currentProgram.getUniforms();
            for (let ze = 0; ze < Kt; ze++)
                ni.setValue(C, "_gl_DrawID", ze), oe.render(Dt[ze] / ke, fe[ze]);
        }
    else if (F.isInstancedMesh)
        oe.renderInstances(jt, ge, F.count);
    else if (z.isInstancedBufferGeometry) {
        const Dt = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, fe = Math.min(z.instanceCount, Dt);
        oe.renderInstances(jt, ge, fe);
    }
    else
        oe.render(jt, ge); }; function he(y, N, z) { y.transparent === !0 && y.side === Ge && y.forceSinglePass === !1 ? (y.side = Re, y.needsUpdate = !0, vs(y, N, z), y.side = En, y.needsUpdate = !0, vs(y, N, z), y.side = Ge) : vs(y, N, z); } this.compile = function (y, N, z = null) { z === null && (z = y), p = Rt.get(z), p.init(N), S.push(p), z.traverseVisible(function (F) { F.isLight && F.layers.test(N.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F)); }), y !== z && y.traverseVisible(function (F) { F.isLight && F.layers.test(N.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F)); }), p.setupLights(); const B = new Set; return y.traverse(function (F) { if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite))
        return; const at = F.material; if (at)
        if (Array.isArray(at))
            for (let gt = 0; gt < at.length; gt++) {
                const bt = at[gt];
                he(bt, z, F), B.add(bt);
            }
        else
            he(at, z, F), B.add(at); }), p = S.pop(), B; }, this.compileAsync = function (y, N, z = null) { const B = this.compile(y, N, z); return new Promise(F => { function at() { if (B.forEach(function (gt) { it.get(gt).currentProgram.isReady() && B.delete(gt); }), B.size === 0) {
        F(y);
        return;
    } setTimeout(at, 10); } J.get("KHR_parallel_shader_compile") !== null ? at() : setTimeout(at, 10); }); }; let te = null; function pn(y) { te && te(y); } function nn() { kn.stop(); } function _o() { kn.start(); } const kn = new Nc; kn.setAnimationLoop(pn), typeof self < "u" && kn.setContext(self), this.setAnimationLoop = function (y) { te = y, ot.setAnimationLoop(y), y === null ? kn.stop() : kn.start(); }, ot.addEventListener("sessionstart", nn), ot.addEventListener("sessionend", _o), this.render = function (y, N) { if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
    } if (P === !0)
        return; if (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), ot.enabled === !0 && ot.isPresenting === !0 && (ot.cameraAutoUpdate === !0 && ot.updateCamera(N), N = ot.getCamera()), y.isScene === !0 && y.onBeforeRender(_, y, N, D), p = Rt.get(y, S.length), p.init(N), S.push(p), nt.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), ie.setFromProjectionMatrix(nt, cn, N.reversedDepth), $ = this.localClippingEnabled, Jt = lt.init(this.clippingPlanes, $), m = q.get(y, E.length), m.init(), E.push(m), ot.enabled === !0 && ot.isPresenting === !0) {
        const at = _.xr.getDepthSensingMesh();
        at !== null && dr(at, N, -1 / 0, _.sortObjects);
    } dr(y, N, 0, _.sortObjects), m.finish(), _.sortObjects === !0 && m.sort(dt, xt), $t = ot.enabled === !1 || ot.isPresenting === !1 || ot.hasDepthSensing() === !1, $t && Tt.addToRenderList(m, y), this.info.render.frame++, Jt === !0 && lt.beginShadows(); const z = p.state.shadowsArray; wt.render(z, y, N), Jt === !0 && lt.endShadows(), this.info.autoReset === !0 && this.info.reset(); const B = m.opaque, F = m.transmissive; if (p.setupLights(), N.isArrayCamera) {
        const at = N.cameras;
        if (F.length > 0)
            for (let gt = 0, bt = at.length; gt < bt; gt++) {
                const _t = at[gt];
                Mo(B, F, y, _t);
            }
        $t && Tt.render(y);
        for (let gt = 0, bt = at.length; gt < bt; gt++) {
            const _t = at[gt];
            yo(m, y, _t, _t.viewport);
        }
    }
    else
        F.length > 0 && Mo(B, F, y, N), $t && Tt.render(y), yo(m, y, N); D !== null && I === 0 && (ut.updateMultisampleRenderTarget(D), ut.updateRenderTargetMipmap(D)), y.isScene === !0 && y.onAfterRender(_, y, N), mt.resetDefaultState(), b = -1, M = null, S.pop(), S.length > 0 ? (p = S[S.length - 1], Jt === !0 && lt.setGlobalState(_.clippingPlanes, p.state.camera)) : p = null, E.pop(), E.length > 0 ? m = E[E.length - 1] : m = null; }; function dr(y, N, z, B) { if (y.visible === !1)
        return; if (y.layers.test(N.layers)) {
        if (y.isGroup)
            z = y.renderOrder;
        else if (y.isLOD)
            y.autoUpdate === !0 && y.update(N);
        else if (y.isLight)
            p.pushLight(y), y.castShadow && p.pushShadow(y);
        else if (y.isSprite) {
            if (!y.frustumCulled || ie.intersectsSprite(y)) {
                B && It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);
                const gt = O.update(y), bt = y.material;
                bt.visible && m.push(y, gt, bt, z, It.z, null);
            }
        }
        else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || ie.intersectsObject(y))) {
            const gt = O.update(y), bt = y.material;
            if (B && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(), It.copy(y.boundingSphere.center)) : (gt.boundingSphere === null && gt.computeBoundingSphere(), It.copy(gt.boundingSphere.center)), It.applyMatrix4(y.matrixWorld).applyMatrix4(nt)), Array.isArray(bt)) {
                const _t = gt.groups;
                for (let Ut = 0, Ft = _t.length; Ut < Ft; Ut++) {
                    const Lt = _t[Ut], jt = bt[Lt.materialIndex];
                    jt && jt.visible && m.push(y, gt, jt, z, It.z, Lt);
                }
            }
            else
                bt.visible && m.push(y, gt, bt, z, It.z, null);
        }
    } const at = y.children; for (let gt = 0, bt = at.length; gt < bt; gt++)
        dr(at[gt], N, z, B); } function yo(y, N, z, B) { const F = y.opaque, at = y.transmissive, gt = y.transparent; p.setupLightsView(z), Jt === !0 && lt.setGlobalState(_.clippingPlanes, z), B && j.viewport(L.copy(B)), F.length > 0 && gs(F, N, z), at.length > 0 && gs(at, N, z), gt.length > 0 && gs(gt, N, z), j.buffers.depth.setTest(!0), j.buffers.depth.setMask(!0), j.buffers.color.setMask(!0), j.setPolygonOffset(!1); } function Mo(y, N, z, B) { if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
        return; p.state.transmissionRenderTarget[B.id] === void 0 && (p.state.transmissionRenderTarget[B.id] = new Fn(1, 1, { generateMipmaps: !0, type: J.has("EXT_color_buffer_half_float") || J.has("EXT_color_buffer_float") ? ds : un, minFilter: Jn, samples: 4, stencilBuffer: r, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: Qt.workingColorSpace })); const at = p.state.transmissionRenderTarget[B.id], gt = B.viewport || L; at.setSize(gt.z * _.transmissionResolutionScale, gt.w * _.transmissionResolutionScale); const bt = _.getRenderTarget(), _t = _.getActiveCubeFace(), Ut = _.getActiveMipmapLevel(); _.setRenderTarget(at), _.getClearColor(Y), V = _.getClearAlpha(), V < 1 && _.setClearColor(16777215, .5), _.clear(), $t && Tt.render(z); const Ft = _.toneMapping; _.toneMapping = Un; const Lt = B.viewport; if (B.viewport !== void 0 && (B.viewport = void 0), p.setupLightsView(B), Jt === !0 && lt.setGlobalState(_.clippingPlanes, B), gs(y, z, B), ut.updateMultisampleRenderTarget(at), ut.updateRenderTargetMipmap(at), J.has("WEBGL_multisampled_render_to_texture") === !1) {
        let jt = !1;
        for (let se = 0, ge = N.length; se < ge; se++) {
            const ue = N[se], oe = ue.object, Dt = ue.geometry, fe = ue.material, Kt = ue.group;
            if (fe.side === Ge && oe.layers.test(B.layers)) {
                const ke = fe.side;
                fe.side = Re, fe.needsUpdate = !0, So(oe, z, B, Dt, fe, Kt), fe.side = ke, fe.needsUpdate = !0, jt = !0;
            }
        }
        jt === !0 && (ut.updateMultisampleRenderTarget(at), ut.updateRenderTargetMipmap(at));
    } _.setRenderTarget(bt, _t, Ut), _.setClearColor(Y, V), Lt !== void 0 && (B.viewport = Lt), _.toneMapping = Ft; } function gs(y, N, z) { const B = N.isScene === !0 ? N.overrideMaterial : null; for (let F = 0, at = y.length; F < at; F++) {
        const gt = y[F], bt = gt.object, _t = gt.geometry, Ut = gt.group;
        let Ft = gt.material;
        Ft.allowOverride === !0 && B !== null && (Ft = B), bt.layers.test(z.layers) && So(bt, N, z, _t, Ft, Ut);
    } } function So(y, N, z, B, F, at) { y.onBeforeRender(_, N, z, B, F, at), y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), F.onBeforeRender(_, N, z, B, y, at), F.transparent === !0 && F.side === Ge && F.forceSinglePass === !1 ? (F.side = Re, F.needsUpdate = !0, _.renderBufferDirect(z, N, B, F, y, at), F.side = En, F.needsUpdate = !0, _.renderBufferDirect(z, N, B, F, y, at), F.side = Ge) : _.renderBufferDirect(z, N, B, F, y, at), y.onAfterRender(_, N, z, B, F, at); } function vs(y, N, z) { N.isScene !== !0 && (N = Et); const B = it.get(y), F = p.state.lights, at = p.state.shadowsArray, gt = F.state.version, bt = G.getParameters(y, F.state, at, N, z), _t = G.getProgramCacheKey(bt); let Ut = B.programs; B.environment = y.isMeshStandardMaterial ? N.environment : null, B.fog = N.fog, B.envMap = (y.isMeshStandardMaterial ? kt : zt).get(y.envMap || B.environment), B.envMapRotation = B.environment !== null && y.envMap === null ? N.environmentRotation : y.envMapRotation, Ut === void 0 && (y.addEventListener("dispose", K), Ut = new Map, B.programs = Ut); let Ft = Ut.get(_t); if (Ft !== void 0) {
        if (B.currentProgram === Ft && B.lightsStateVersion === gt)
            return Eo(y, bt), Ft;
    }
    else
        bt.uniforms = G.getUniforms(y), y.onBeforeCompile(bt, _), Ft = G.acquireProgram(bt, _t), Ut.set(_t, Ft), B.uniforms = bt.uniforms; const Lt = B.uniforms; return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Lt.clippingPlanes = lt.uniform), Eo(y, bt), B.needsLights = jc(y), B.lightsStateVersion = gt, B.needsLights && (Lt.ambientLightColor.value = F.state.ambient, Lt.lightProbe.value = F.state.probe, Lt.directionalLights.value = F.state.directional, Lt.directionalLightShadows.value = F.state.directionalShadow, Lt.spotLights.value = F.state.spot, Lt.spotLightShadows.value = F.state.spotShadow, Lt.rectAreaLights.value = F.state.rectArea, Lt.ltc_1.value = F.state.rectAreaLTC1, Lt.ltc_2.value = F.state.rectAreaLTC2, Lt.pointLights.value = F.state.point, Lt.pointLightShadows.value = F.state.pointShadow, Lt.hemisphereLights.value = F.state.hemi, Lt.directionalShadowMap.value = F.state.directionalShadowMap, Lt.directionalShadowMatrix.value = F.state.directionalShadowMatrix, Lt.spotShadowMap.value = F.state.spotShadowMap, Lt.spotLightMatrix.value = F.state.spotLightMatrix, Lt.spotLightMap.value = F.state.spotLightMap, Lt.pointShadowMap.value = F.state.pointShadowMap, Lt.pointShadowMatrix.value = F.state.pointShadowMatrix), B.currentProgram = Ft, B.uniformsList = null, Ft; } function bo(y) { if (y.uniformsList === null) {
        const N = y.currentProgram.getUniforms();
        y.uniformsList = Js.seqWithValue(N.seq, y.uniforms);
    } return y.uniformsList; } function Eo(y, N) { const z = it.get(y); z.outputColorSpace = N.outputColorSpace, z.batching = N.batching, z.batchingColor = N.batchingColor, z.instancing = N.instancing, z.instancingColor = N.instancingColor, z.instancingMorph = N.instancingMorph, z.skinning = N.skinning, z.morphTargets = N.morphTargets, z.morphNormals = N.morphNormals, z.morphColors = N.morphColors, z.morphTargetsCount = N.morphTargetsCount, z.numClippingPlanes = N.numClippingPlanes, z.numIntersection = N.numClipIntersection, z.vertexAlphas = N.vertexAlphas, z.vertexTangents = N.vertexTangents, z.toneMapping = N.toneMapping; } function Yc(y, N, z, B, F) { N.isScene !== !0 && (N = Et), ut.resetTextureUnits(); const at = N.fog, gt = B.isMeshStandardMaterial ? N.environment : null, bt = D === null ? _.outputColorSpace : D.isXRRenderTarget === !0 ? D.texture.colorSpace : Ci, _t = (B.isMeshStandardMaterial ? kt : zt).get(B.envMap || gt), Ut = B.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Ft = !!z.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Lt = !!z.morphAttributes.position, jt = !!z.morphAttributes.normal, se = !!z.morphAttributes.color; let ge = Un; B.toneMapped && (D === null || D.isXRRenderTarget === !0) && (ge = _.toneMapping); const ue = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, oe = ue !== void 0 ? ue.length : 0, Dt = it.get(B), fe = p.state.lights; if (Jt === !0 && ($ === !0 || y !== M)) {
        const Pe = y === M && B.id === b;
        lt.setState(B, y, Pe);
    } let Kt = !1; B.version === Dt.__version ? (Dt.needsLights && Dt.lightsStateVersion !== fe.state.version || Dt.outputColorSpace !== bt || F.isBatchedMesh && Dt.batching === !1 || !F.isBatchedMesh && Dt.batching === !0 || F.isBatchedMesh && Dt.batchingColor === !0 && F.colorTexture === null || F.isBatchedMesh && Dt.batchingColor === !1 && F.colorTexture !== null || F.isInstancedMesh && Dt.instancing === !1 || !F.isInstancedMesh && Dt.instancing === !0 || F.isSkinnedMesh && Dt.skinning === !1 || !F.isSkinnedMesh && Dt.skinning === !0 || F.isInstancedMesh && Dt.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Dt.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Dt.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Dt.instancingMorph === !1 && F.morphTexture !== null || Dt.envMap !== _t || B.fog === !0 && Dt.fog !== at || Dt.numClippingPlanes !== void 0 && (Dt.numClippingPlanes !== lt.numPlanes || Dt.numIntersection !== lt.numIntersection) || Dt.vertexAlphas !== Ut || Dt.vertexTangents !== Ft || Dt.morphTargets !== Lt || Dt.morphNormals !== jt || Dt.morphColors !== se || Dt.toneMapping !== ge || Dt.morphTargetsCount !== oe) && (Kt = !0) : (Kt = !0, Dt.__version = B.version); let ke = Dt.currentProgram; Kt === !0 && (ke = vs(B, N, F)); let ni = !1, ze = !1, zi = !1; const pe = ke.getUniforms(), We = Dt.uniforms; if (j.useProgram(ke.program) && (ni = !0, ze = !0, zi = !0), B.id !== b && (b = B.id, ze = !0), ni || M !== y) {
        j.buffers.depth.getReversed() && y.reversedDepth !== !0 && (y._reversedDepth = !0, y.updateProjectionMatrix()), pe.setValue(C, "projectionMatrix", y.projectionMatrix), pe.setValue(C, "viewMatrix", y.matrixWorldInverse);
        const Ne = pe.map.cameraPosition;
        Ne !== void 0 && Ne.setValue(C, yt.setFromMatrixPosition(y.matrixWorld)), Z.logarithmicDepthBuffer && pe.setValue(C, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && pe.setValue(C, "isOrthographic", y.isOrthographicCamera === !0), M !== y && (M = y, ze = !0, zi = !0);
    } if (F.isSkinnedMesh) {
        pe.setOptional(C, F, "bindMatrix"), pe.setOptional(C, F, "bindMatrixInverse");
        const Pe = F.skeleton;
        Pe && (Pe.boneTexture === null && Pe.computeBoneTexture(), pe.setValue(C, "boneTexture", Pe.boneTexture, ut));
    } F.isBatchedMesh && (pe.setOptional(C, F, "batchingTexture"), pe.setValue(C, "batchingTexture", F._matricesTexture, ut), pe.setOptional(C, F, "batchingIdTexture"), pe.setValue(C, "batchingIdTexture", F._indirectTexture, ut), pe.setOptional(C, F, "batchingColorTexture"), F._colorsTexture !== null && pe.setValue(C, "batchingColorTexture", F._colorsTexture, ut)); const qe = z.morphAttributes; if ((qe.position !== void 0 || qe.normal !== void 0 || qe.color !== void 0) && st.update(F, z, ke), (ze || Dt.receiveShadow !== F.receiveShadow) && (Dt.receiveShadow = F.receiveShadow, pe.setValue(C, "receiveShadow", F.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (We.envMap.value = _t, We.flipEnvMap.value = _t.isCubeTexture && _t.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && N.environment !== null && (We.envMapIntensity.value = N.environmentIntensity), ze && (pe.setValue(C, "toneMappingExposure", _.toneMappingExposure), Dt.needsLights && $c(We, zi), at && B.fog === !0 && tt.refreshFogUniforms(We, at), tt.refreshMaterialUniforms(We, B, W, Q, p.state.transmissionRenderTarget[y.id]), Js.upload(C, bo(Dt), We, ut)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Js.upload(C, bo(Dt), We, ut), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && pe.setValue(C, "center", F.center), pe.setValue(C, "modelViewMatrix", F.modelViewMatrix), pe.setValue(C, "normalMatrix", F.normalMatrix), pe.setValue(C, "modelMatrix", F.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Pe = B.uniformsGroups;
        for (let Ne = 0, fr = Pe.length; Ne < fr; Ne++) {
            const zn = Pe[Ne];
            Gt.update(zn, ke), Gt.bind(zn, ke);
        }
    } return ke; } function $c(y, N) { y.ambientLightColor.needsUpdate = N, y.lightProbe.needsUpdate = N, y.directionalLights.needsUpdate = N, y.directionalLightShadows.needsUpdate = N, y.pointLights.needsUpdate = N, y.pointLightShadows.needsUpdate = N, y.spotLights.needsUpdate = N, y.spotLightShadows.needsUpdate = N, y.rectAreaLights.needsUpdate = N, y.hemisphereLights.needsUpdate = N; } function jc(y) { return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0; } this.getActiveCubeFace = function () { return A; }, this.getActiveMipmapLevel = function () { return I; }, this.getRenderTarget = function () { return D; }, this.setRenderTargetTextures = function (y, N, z) { const B = it.get(y); B.__autoAllocateDepthBuffer = y.resolveDepthBuffer === !1, B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1), it.get(y.texture).__webglTexture = N, it.get(y.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : z, B.__hasExternalTextures = !0; }, this.setRenderTargetFramebuffer = function (y, N) { const z = it.get(y); z.__webglFramebuffer = N, z.__useDefaultFramebuffer = N === void 0; }; const Zc = C.createFramebuffer(); this.setRenderTarget = function (y, N = 0, z = 0) { D = y, A = N, I = z; let B = !0, F = null, at = !1, gt = !1; if (y) {
        const _t = it.get(y);
        if (_t.__useDefaultFramebuffer !== void 0)
            j.bindFramebuffer(C.FRAMEBUFFER, null), B = !1;
        else if (_t.__webglFramebuffer === void 0)
            ut.setupRenderTarget(y);
        else if (_t.__hasExternalTextures)
            ut.rebindTextures(y, it.get(y.texture).__webglTexture, it.get(y.depthTexture).__webglTexture);
        else if (y.depthBuffer) {
            const Lt = y.depthTexture;
            if (_t.__boundDepthTexture !== Lt) {
                if (Lt !== null && it.has(Lt) && (y.width !== Lt.image.width || y.height !== Lt.image.height))
                    throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                ut.setupDepthRenderbuffer(y);
            }
        }
        const Ut = y.texture;
        (Ut.isData3DTexture || Ut.isDataArrayTexture || Ut.isCompressedArrayTexture) && (gt = !0);
        const Ft = it.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget ? (Array.isArray(Ft[N]) ? F = Ft[N][z] : F = Ft[N], at = !0) : y.samples > 0 && ut.useMultisampledRTT(y) === !1 ? F = it.get(y).__webglMultisampledFramebuffer : Array.isArray(Ft) ? F = Ft[z] : F = Ft, L.copy(y.viewport), k.copy(y.scissor), H = y.scissorTest;
    }
    else
        L.copy(Mt).multiplyScalar(W).floor(), k.copy(Ht).multiplyScalar(W).floor(), H = Zt; if (z !== 0 && (F = Zc), j.bindFramebuffer(C.FRAMEBUFFER, F) && B && j.drawBuffers(y, F), j.viewport(L), j.scissor(k), j.setScissorTest(H), at) {
        const _t = it.get(y.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + N, _t.__webglTexture, z);
    }
    else if (gt) {
        const _t = N;
        for (let Ut = 0; Ut < y.textures.length; Ut++) {
            const Ft = it.get(y.textures[Ut]);
            C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0 + Ut, Ft.__webglTexture, z, _t);
        }
    }
    else if (y !== null && z !== 0) {
        const _t = it.get(y.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, _t.__webglTexture, z);
    } b = -1; }, this.readRenderTargetPixels = function (y, N, z, B, F, at, gt, bt = 0) { if (!(y && y.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
    } let _t = it.get(y).__webglFramebuffer; if (y.isWebGLCubeRenderTarget && gt !== void 0 && (_t = _t[gt]), _t) {
        j.bindFramebuffer(C.FRAMEBUFFER, _t);
        try {
            const Ut = y.textures[bt], Ft = Ut.format, Lt = Ut.type;
            if (!Z.textureFormatReadable(Ft)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                return;
            }
            if (!Z.textureTypeReadable(Lt)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                return;
            }
            N >= 0 && N <= y.width - B && z >= 0 && z <= y.height - F && (y.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + bt), C.readPixels(N, z, B, F, Ct.convert(Ft), Ct.convert(Lt), at));
        }
        finally {
            const Ut = D !== null ? it.get(D).__webglFramebuffer : null;
            j.bindFramebuffer(C.FRAMEBUFFER, Ut);
        }
    } }, this.readRenderTargetPixelsAsync = async function (y, N, z, B, F, at, gt, bt = 0) { if (!(y && y.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let _t = it.get(y).__webglFramebuffer; if (y.isWebGLCubeRenderTarget && gt !== void 0 && (_t = _t[gt]), _t)
        if (N >= 0 && N <= y.width - B && z >= 0 && z <= y.height - F) {
            j.bindFramebuffer(C.FRAMEBUFFER, _t);
            const Ut = y.textures[bt], Ft = Ut.format, Lt = Ut.type;
            if (!Z.textureFormatReadable(Ft))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!Z.textureTypeReadable(Lt))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            const jt = C.createBuffer();
            C.bindBuffer(C.PIXEL_PACK_BUFFER, jt), C.bufferData(C.PIXEL_PACK_BUFFER, at.byteLength, C.STREAM_READ), y.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + bt), C.readPixels(N, z, B, F, Ct.convert(Ft), Ct.convert(Lt), 0);
            const se = D !== null ? it.get(D).__webglFramebuffer : null;
            j.bindFramebuffer(C.FRAMEBUFFER, se);
            const ge = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return C.flush(), await iu(C, ge, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, jt), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, at), C.deleteBuffer(jt), C.deleteSync(ge), at;
        }
        else
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."); }, this.copyFramebufferToTexture = function (y, N = null, z = 0) { const B = Math.pow(2, -z), F = Math.floor(y.image.width * B), at = Math.floor(y.image.height * B), gt = N !== null ? N.x : 0, bt = N !== null ? N.y : 0; ut.setTexture2D(y, 0), C.copyTexSubImage2D(C.TEXTURE_2D, z, 0, 0, gt, bt, F, at), j.unbindTexture(); }; const Jc = C.createFramebuffer(), Kc = C.createFramebuffer(); this.copyTextureToTexture = function (y, N, z = null, B = null, F = 0, at = null) { at === null && (F !== 0 ? (as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), at = F, F = 0) : at = 0); let gt, bt, _t, Ut, Ft, Lt, jt, se, ge; const ue = y.isCompressedTexture ? y.mipmaps[at] : y.image; if (z !== null)
        gt = z.max.x - z.min.x, bt = z.max.y - z.min.y, _t = z.isBox3 ? z.max.z - z.min.z : 1, Ut = z.min.x, Ft = z.min.y, Lt = z.isBox3 ? z.min.z : 0;
    else {
        const qe = Math.pow(2, -F);
        gt = Math.floor(ue.width * qe), bt = Math.floor(ue.height * qe), y.isDataArrayTexture ? _t = ue.depth : y.isData3DTexture ? _t = Math.floor(ue.depth * qe) : _t = 1, Ut = 0, Ft = 0, Lt = 0;
    } B !== null ? (jt = B.x, se = B.y, ge = B.z) : (jt = 0, se = 0, ge = 0); const oe = Ct.convert(N.format), Dt = Ct.convert(N.type); let fe; N.isData3DTexture ? (ut.setTexture3D(N, 0), fe = C.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (ut.setTexture2DArray(N, 0), fe = C.TEXTURE_2D_ARRAY) : (ut.setTexture2D(N, 0), fe = C.TEXTURE_2D), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, N.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, N.unpackAlignment); const Kt = C.getParameter(C.UNPACK_ROW_LENGTH), ke = C.getParameter(C.UNPACK_IMAGE_HEIGHT), ni = C.getParameter(C.UNPACK_SKIP_PIXELS), ze = C.getParameter(C.UNPACK_SKIP_ROWS), zi = C.getParameter(C.UNPACK_SKIP_IMAGES); C.pixelStorei(C.UNPACK_ROW_LENGTH, ue.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ue.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ut), C.pixelStorei(C.UNPACK_SKIP_ROWS, Ft), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Lt); const pe = y.isDataArrayTexture || y.isData3DTexture, We = N.isDataArrayTexture || N.isData3DTexture; if (y.isDepthTexture) {
        const qe = it.get(y), Pe = it.get(N), Ne = it.get(qe.__renderTarget), fr = it.get(Pe.__renderTarget);
        j.bindFramebuffer(C.READ_FRAMEBUFFER, Ne.__webglFramebuffer), j.bindFramebuffer(C.DRAW_FRAMEBUFFER, fr.__webglFramebuffer);
        for (let zn = 0; zn < _t; zn++)
            pe && (C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, it.get(y).__webglTexture, F, Lt + zn), C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, it.get(N).__webglTexture, at, ge + zn)), C.blitFramebuffer(Ut, Ft, gt, bt, jt, se, gt, bt, C.DEPTH_BUFFER_BIT, C.NEAREST);
        j.bindFramebuffer(C.READ_FRAMEBUFFER, null), j.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
    }
    else if (F !== 0 || y.isRenderTargetTexture || it.has(y)) {
        const qe = it.get(y), Pe = it.get(N);
        j.bindFramebuffer(C.READ_FRAMEBUFFER, Jc), j.bindFramebuffer(C.DRAW_FRAMEBUFFER, Kc);
        for (let Ne = 0; Ne < _t; Ne++)
            pe ? C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, qe.__webglTexture, F, Lt + Ne) : C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, qe.__webglTexture, F), We ? C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, Pe.__webglTexture, at, ge + Ne) : C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, Pe.__webglTexture, at), F !== 0 ? C.blitFramebuffer(Ut, Ft, gt, bt, jt, se, gt, bt, C.COLOR_BUFFER_BIT, C.NEAREST) : We ? C.copyTexSubImage3D(fe, at, jt, se, ge + Ne, Ut, Ft, gt, bt) : C.copyTexSubImage2D(fe, at, jt, se, Ut, Ft, gt, bt);
        j.bindFramebuffer(C.READ_FRAMEBUFFER, null), j.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
    }
    else
        We ? y.isDataTexture || y.isData3DTexture ? C.texSubImage3D(fe, at, jt, se, ge, gt, bt, _t, oe, Dt, ue.data) : N.isCompressedArrayTexture ? C.compressedTexSubImage3D(fe, at, jt, se, ge, gt, bt, _t, oe, ue.data) : C.texSubImage3D(fe, at, jt, se, ge, gt, bt, _t, oe, Dt, ue) : y.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, at, jt, se, gt, bt, oe, Dt, ue.data) : y.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, at, jt, se, ue.width, ue.height, oe, ue.data) : C.texSubImage2D(C.TEXTURE_2D, at, jt, se, gt, bt, oe, Dt, ue); C.pixelStorei(C.UNPACK_ROW_LENGTH, Kt), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ke), C.pixelStorei(C.UNPACK_SKIP_PIXELS, ni), C.pixelStorei(C.UNPACK_SKIP_ROWS, ze), C.pixelStorei(C.UNPACK_SKIP_IMAGES, zi), at === 0 && N.generateMipmaps && C.generateMipmap(fe), j.unbindTexture(); }, this.initRenderTarget = function (y) { it.get(y).__webglFramebuffer === void 0 && ut.setupRenderTarget(y); }, this.initTexture = function (y) { y.isCubeTexture ? ut.setTextureCube(y, 0) : y.isData3DTexture ? ut.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? ut.setTexture2DArray(y, 0) : ut.setTexture2D(y, 0), j.unbindTexture(); }, this.resetState = function () { A = 0, I = 0, D = null, j.reset(), mt.reset(); }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
    get coordinateSystem() { return cn; }
    get outputColorSpace() { return this._outputColorSpace; }
    set outputColorSpace(t) { this._outputColorSpace = t; const e = this.getContext(); e.drawingBufferColorSpace = Qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Qt._getUnpackColorSpace(); }
}
function e0(s, t) { const e = s.transit, n = e ? Math.min(1, e.elapsed / 18) : 0, i = s.mode === "landed" || !!e, r = e ? (e.kind === "takeoff" ? n * n : (1 - n) * (1 - n)) * 230 : 0, a = e?.kind === "landing" ? s.destination ?? s.planet : s.planet; return { surface: i, planet: a, altitude: r, position: i ? new T(-25 + t.x * .55, 1.3 + t.y * .55 + r, 34 + t.z * .65) : t.clone().multiplyScalar(.55).applyEuler(new $e(-s.pitch, s.yaw, 0, "YXZ")).add(new T().fromArray(s.position)) }; }
class n0 {
    target = new Fn(640, 360, { depthBuffer: !0 });
    camera = new Fe;
    shader;
    constructor(t) { this.shader = new en({ uniforms: { exterior: { value: this.target.texture } }, vertexShader: "varying vec4 clip;void main(){clip=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=clip;}", fragmentShader: "uniform sampler2D exterior;varying vec4 clip;void main(){vec2 uv=clip.xy/clip.w*.5+.5;gl_FragColor=texture2D(exterior,uv);}", toneMapped: !1 }); const e = new qt(new dn(8.6, 2.4), this.shader); e.position.set(0, 2.75, -8.61), t.add(e); for (const n of [-5.72, 5.72]) {
        const i = new qt(new dn(3.2, 1.7), this.shader);
        i.position.set(n, 2.4, -1.8), i.rotation.y = n < 0 ? Math.PI / 2 : -Math.PI / 2, t.add(i);
    } }
    render(t) { const e = t.render, n = e.renderer, i = t.state.data.voyage, r = e.camera, a = e0(i, r.position), o = n.getDrawingBufferSize(new ct), c = t.settings.quality === "low" ? .45 : t.settings.quality === "medium" ? .65 : .85, l = Math.max(1, Math.round(o.x * c)), h = Math.max(1, Math.round(o.y * c)); (this.target.width !== l || this.target.height !== h) && this.target.setSize(l, h), this.camera.copy(r), this.camera.position.copy(a.position), this.camera.near = .08, this.camera.far = a.surface ? 1400 : 4e4, a.surface || this.camera.quaternion.premultiply(new Ui().setFromEuler(new $e(-i.pitch, i.yaw, 0, "YXZ"))), this.camera.updateProjectionMatrix(), this.camera.updateMatrixWorld(!0); const u = n.getRenderTarget(), d = t.expansion.space.cockpit; d.visible = !1; try {
        if (n.setRenderTarget(this.target), a.surface) {
            t.world.setZone(a.planet === "orren" ? "orren" : "outside");
            for (const f of t.world.hulls)
                f.visible = !1;
            e.update(t.state.data.time, a.position, a.planet === "orren" ? "orren" : "outside"), n.render(e.scene, this.camera);
        }
        else
            t.world.ship.visible = !1, n.render(t.expansion.space.scene, this.camera);
    }
    finally {
        n.setRenderTarget(u);
        for (const f of t.world.hulls)
            f.visible = !0;
        t.world.setZone("ship"), e.update(t.state.data.time, t.player.position, "ship"), d.visible = !0;
    } }
}
const Ul = { fern: { wall: "#c4c5b0", trim: "#597974", floor: "#bdaf91", fabric: "#9db59d" }, sunset: { wall: "#d8b599", trim: "#645653", floor: "#92745f", fabric: "#c7917c" }, ocean: { wall: "#d4dfdb", trim: "#526f88", floor: "#82919c", fabric: "#8bafbd" } };
class i0 {
    surfaces = [];
    current = "";
    constructor(t) { const e = { c4c5b0: "wall", "657d77": "wall", 597974: "trim", "6e8881": "trim", "79918a": "trim", "72877d": "trim", bdaf91: "floor", "7e978a": "fabric", "648d83": "fabric", b58a69: "fabric" }; t.traverse(n => { if (n instanceof qt && n.material instanceof ye) {
        const i = e[n.material.color.getHexString()];
        i && (n.material = n.material.clone(), this.surfaces.push({ material: n.material, token: i }));
    } }); }
    apply(t) { if (t === this.current)
        return; const e = Ul[t] ?? Ul.fern; this.current = t; for (const n of this.surfaces)
        n.material.color.set(e[n.token]); }
}
const de = (s, t, e) => Math.max(t, Math.min(e, s)), s0 = (s, t, e) => s + (t - s) * e, Mi = (s, t, e, n) => s0(s, t, 1 - Math.exp(-e * n)), Bc = (s, t, e, n) => s + Math.atan2(Math.sin(t - s), Math.cos(t - s)) * (1 - Math.exp(-e * n));
function Nn(s) { return () => { s |= 0, s = s + 1831565813 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const us = (s, t) => Math.hypot(s.x - t.x, s.z - t.z), go = [[[0, 20], [0, 0], [-21, -16], [-39, -37], [-63, -60], [-70, -90], [-101, -114], [-106, -137]], [[0, 0], [33, 0], [42, -30], [58, -48], [88, -53], [110, -79], [130, -119]], [[0, 20], [35, 36], [69, 49], [104, 66], [134, 77]], [[-25, 36], [-15, 25], [0, 20]], [[0, 0], [19, -14], [20, -27]], [[-20, -16], [-25, -29]], [[19, -14], [25, -29]], [[0, 0], [0, 13]]];
function qs(s, t) { let e = 1 / 0; for (const n of go)
    for (let i = 1; i < n.length; i++) {
        const [r, a] = n[i - 1], [o, c] = n[i], l = de(((s - r) * (o - r) + (t - a) * (c - a)) / ((o - r) ** 2 + (c - a) ** 2), 0, 1);
        e = Math.min(e, Math.hypot(s - r - (o - r) * l, t - a - (c - a) * l));
    } return e; }
function Ot(s, t, e = "outside") { if (e === "orren")
    return (1.7 * Math.sin(s * .04) * Math.cos(t * .029) + 1.1 * Math.sin(t * .065)) * (1 - Math.exp(-((s + 25) ** 2 + (t - 34) ** 2) / 1100)) + 14 * Math.exp(-((s - 90) ** 2 + (t - 65) ** 2) / 1400); if (e !== "outside")
    return 0; if (s >= 43 && s <= 52.3 && t >= -8.5 && t <= -5.5)
    return -1.35; const n = Math.exp(-(s * s + t * t) / 1700), i = Math.exp(-((s + 25) ** 2 + (t - 35) ** 2) / 550); let r = (Math.sin(s * .034) * Math.cos(t * .028) * 2.7 + Math.sin(t * .047 + s * .018) * 1.1) * (1 - Math.max(n, i)); r += 26 * Math.exp(-((s - 151) ** 2 / 2400 + (t - 90) ** 2 / 1800)), r += 17 * Math.exp(-((s - 144) ** 2 / 1800 + (t + 143) ** 2 / 2100)); const a = Math.sqrt(((s - 76) / 32) ** 2 + ((t + 12) / 23) ** 2); if (a < 1.24) {
    const o = de((1.24 - a) / .35, 0, 1);
    r = r * (1 - o) + (-4.4 + Math.min(1, a) * .5) * o;
} return r; }
function Si(s, t) { return ((s - 76) / 30) ** 2 + ((t + 12) / 21) ** 2 < 1; }
const Nl = [{ id: "repair_shop", label: "Sela’s Workshop", x: -19, z: -11, icon: "⚒" }, { id: "general_store", label: "Oren’s Provisions", x: 15, z: -11, icon: "▤" }, { id: "cafe", label: "The Warm Kettle", x: -1, z: 11, icon: "♨" }, { id: "research_hut", label: "Field Station", x: 20, z: -30, icon: "⚗" }, { id: "ranger_hut", label: "Trail Shelter", x: 32, z: 0, icon: "⌂" }], r0 = [[-19, -17, 9, 8], [15, -18, 10, 8], [-1, 4, 10, 8], [20, -38, 9, 7], [-25, -38, 8, 7], [34, -39, 8, 7], [36, -9, 7, 7]], Fl = [{ id: "orren_landing", name: "Cinderbloom Anchorage", x: -25, z: 34, short: "Anchorage" }, { id: "orren_spring", name: "Stillglass Spring", x: 35, z: 0, short: "Stillglass" }, { id: "orren_garden", name: "The Listening Garden", x: 83, z: -79, short: "Garden" }, { id: "orren_arch", name: "The Petal Arch", x: -75, z: -66, short: "Petal Arch" }, { id: "orren_overlook", name: "Apricot Rise", x: 86, z: 60, short: "Apricot Rise" }], a0 = [[[-25, 34], [0, 20], [15, 0], [37, -35], [83, -79]], [[0, 20], [-26, -17], [-75, -66]], [[0, 20], [40, 42], [86, 60]]];
function Hc(s) { return Math.atan2(Math.sin(s), Math.cos(s)); }
function o0(s, t) { return Math.atan2(t.x - s.x, s.z - t.z); }
function Ol(s, t, e) { return Hc(o0(s, t) - e); }
function l0(s, t) { return t - s > 3 ? "↑" : s - t > 3 ? "↓" : ""; }
const qa = { ship: { width: 12, depth: 18, exit: { x: 0, z: 7.4 }, entry: { x: -18, z: 34 }, name: "SHIP DECK" }, cave: { width: 18, depth: 33, exit: { x: 0, z: 13.5 }, entry: { x: 130, z: -119 }, name: "TUNNEL FLOOR" }, store: { width: 14, depth: 16, exit: { x: 0, z: 6.7 }, entry: { x: 15, z: -11 }, name: "PROVISIONS" }, cafe: { width: 14, depth: 16, exit: { x: 0, z: 6.7 }, entry: { x: -1, z: 11 }, name: "WARM KETTLE" } };
class c0 {
    constructor(t) { this.state = t; }
    state;
    get worldId() { return this.state.data.voyage.planet; }
    get locations() { return this.worldId === "orren" ? Fl : wo; }
    get origin() { const t = this.state.data.player; return t.zone === "outside" || t.zone === "orren" ? { x: t.x, y: t.y, z: t.z } : t.zone === "cave" ? { x: 130, y: Ot(130, -119), z: -119 } : t.zone === "store" ? { x: 15, y: 0, z: -11 } : t.zone === "cafe" ? { x: -1, y: 0, z: 11 } : { x: -18, y: 0, z: 34 }; }
    marker(t, e, n, i, r, a, o = {}) { return { id: t, type: e, label: n, x: i, z: r, y: Ot(i, r, a === "mosslight" ? "outside" : "orren"), worldId: a, icon: "◇", color: "#bcd9c9", priority: 10, discovered: !0, ...o }; }
    all() { const t = this.state.data, e = t.navigation, n = []; for (const [r, a] of [["mosslight", wo], ["orren", Fl]])
        if (e.unlockedWorlds.includes(r))
            for (const o of a) {
                if (o.id === "ship")
                    continue;
                const c = t.discovered.includes(o.id);
                n.push(this.marker(o.id, "landmark", c ? o.name : "Unexplored", o.x, o.z, r, { discovered: c, icon: c ? "✧" : "?", color: c ? "#b2c9bb" : "#718c88" }));
            } n.push(this.marker("ship", "ship", "Your ship · The Little Elsewhere", -18, 34, t.voyage.planet, { icon: "⌁", color: "#a6e2d8", priority: 80 })); for (const r of Nl)
        e.knownServices.includes(r.id) && n.push(this.marker(r.id, "service", r.label, r.x, r.z, "mosslight", { icon: r.icon, color: "#ead3a5", priority: 30 })); for (const r of Ln) {
        if (!e.knownNPCs.includes(r.id))
            continue;
        const a = t.npcs[r.id] ?? { ...r.work, activity: "At work" };
        n.push(this.marker(r.id, "npc", r.name, a.x, a.z, "mosslight", { icon: "●", priority: 25, activity: a.activity, targetEntityId: r.id }));
    } const i = this.questMarker(); return i && n.push(i), e.waypoint && n.push(this.marker("waypoint", "waypoint", e.waypoint.label, e.waypoint.x, e.waypoint.z, e.waypoint.worldId, { priority: 120, icon: "⌖", color: "#f0c08b" })), n; }
    guidance(t) { const e = this.state.data.player.zone; if (e === "outside" || e === "orren" || t.zone === e)
        return t; const n = qa[e]; return { ...t, ...n.exit, y: 1, zone: e, label: (e === "ship" ? "Airlock" : e === "cave" ? "Tunnel exit" : "Harbor door") + " → " + t.label }; }
    mapMarker(t) { const e = qa[t.zone]; return e ? { ...t, ...e.entry } : t; }
    questMarker() { const t = this.state.data, e = t.navigation.trackedQuest; if (!e || !Oe[e])
        return null; const n = t.quests[e] ?? 0; if (n === 3)
        return null; const i = (a, o, c, l = "mosslight", h = {}) => this.marker("quest:" + e, "quest", a, o, c, l, { priority: 100, color: "#f4d096", ...h }), r = a => { const o = Ln[a], c = t.npcs[o.id] ?? o.work; return i(o.name, c.x, c.z, "mosslight", { targetEntityId: o.id }); }; return e === "signal" ? n === 0 || n === 2 ? r(0) : t.discovered.includes("beacon") ? i("Survey Array 04", -106, -137) : i("Search Fernwood for the signal", -88, -110, "mosslight", { searchRadius: 42 }) : e === "research" ? n === 0 || n === 2 ? r(2) : i(t.observed.length < 2 ? "Observe mosslings · keep a little distance" : "Gather three lanterncaps", -62, -72, "mosslight", { searchRadius: 32 }) : e === "cave" ? n === 0 || n === 2 ? r(4) : t.player.zone === "cave" ? i("Surveyor’s recording", 0, -11, "mosslight", { zone: "cave", y: 1 }) : i("The Lantern Tunnel", 130, -119) : e === "garden" ? n === 0 || n === 2 ? r(2) : i("The Listening Garden", 83, -79, "orren", t.discovered.includes("orren_garden") ? {} : { searchRadius: 22 }) : e === "supper" ? n === 0 || n === 2 ? r(3) : this.state.count("fish") === 0 ? i("Fish at Glasswater Jetty", 47, -7) : this.state.count("glowcap") === 0 ? i("Gather a lanterncap", -48, -44, "mosslight", { searchRadius: 18 }) : i("Cook in your ship galley", -18, 34) : null; }
    selected() { const t = this.state.data.navigation, e = this.all(); return e.find(n => n.id === "waypoint") ?? e.find(n => n.id === t.trackedMarker) ?? e.find(n => n.id === "quest:" + t.trackedQuest) ?? null; }
    trackQuest(t) { Oe[t] && (Object.assign(this.state.data.navigation, { trackedQuest: t, trackedMarker: null, waypoint: null }), this.state.touch()); }
    trackMarker(t) { this.all().some(e => e.id === t) && (Object.assign(this.state.data.navigation, { trackedMarker: t, waypoint: null }), this.state.touch()); }
    place(t, e, n = "Your waypoint", i = this.worldId) { !Number.isFinite(t) || !Number.isFinite(e) || (this.state.data.navigation.waypoint = { x: Math.max(-225, Math.min(225, t)), z: Math.max(-215, Math.min(215, e)), label: n, worldId: i }, this.state.touch()); }
    clear() { this.state.data.navigation.waypoint = null, this.state.data.navigation.trackedMarker = null, this.state.touch(); }
    discover() { const t = this.state.data, e = t.player, n = t.navigation, i = []; if (e.zone !== "outside" && e.zone !== "orren")
        return i; for (const r of this.locations)
        Math.hypot(r.x - e.x, r.z - e.z) < 25 && !t.discovered.includes(r.id) && (t.discovered.push(r.id), i.push(r.name)); if (e.zone === "outside") {
        for (const r of Nl)
            Math.hypot(r.x - e.x, r.z - e.z) < 20 && !n.knownServices.includes(r.id) && (n.knownServices.push(r.id), i.push(r.label));
        for (const r of Ln) {
            const a = t.npcs[r.id] ?? r.work;
            Math.hypot(a.x - e.x, a.z - e.z) < 10 && !n.knownNPCs.includes(r.id) && n.knownNPCs.push(r.id);
        }
    } return i.length && this.state.touch(), i; }
    arrive() { const t = this.state.data, e = t.navigation.waypoint; return e && e.worldId === this.worldId && (t.player.zone === "outside" || t.player.zone === "orren") && Math.hypot(t.player.x - e.x, t.player.z - e.z) < 6 ? (t.navigation.waypoint = null, this.state.touch(), !0) : !1; }
}
class h0 {
    constructor(t, e, n, i, r) { this.nav = t, this.ui = e, this.settings = n, this.changed = i, this.system = r; const a = e.root.querySelector("#compass"); a.innerHTML = '<canvas width="660" height="112" aria-label="Navigation compass"></canvas>', this.compass = a.querySelector("canvas"); const o = document.createElement("div"); o.id = "minimap-wrap", o.innerHTML = '<button id="minimap-open" aria-label="Open navigation map"><canvas width="320" height="320" aria-label="Local minimap"></canvas></button><span id="minimap-caption">NORTH UP</span>', e.hud.append(o), this.minimap = o.querySelector("canvas"), o.querySelector("button").addEventListener("click", () => e.actions.open("map")), this.target = document.createElement("button"), this.target.id = "nav-target", this.target.addEventListener("click", () => e.actions.open("map")), e.hud.append(this.target), this.worldLabel = document.createElement("div"), this.worldLabel.id = "world-marker", e.hud.append(this.worldLabel), this.crosshair = document.createElement("div"), this.crosshair.id = "crosshair", this.crosshair.textContent = "·", e.hud.append(this.crosshair), this.region = document.createElement("div"), this.region.id = "region-banner", e.hud.append(this.region); }
    nav;
    ui;
    settings;
    changed;
    system;
    minimap;
    compass;
    target;
    worldLabel;
    crosshair;
    region;
    cache = new Map;
    timer = 0;
    markers = [];
    mapCanvas = null;
    mapCenter = { x: 0, z: 0 };
    mapScale = 1.5;
    mapWorld = "mosslight";
    hits = [];
    lastRegion = "";
    regionTimer = 0;
    notifyRegion(t) { t !== this.lastRegion && (this.lastRegion = t, this.region.textContent = t, this.region.classList.add("show"), clearTimeout(this.regionTimer), this.regionTimer = window.setTimeout(() => this.region.classList.remove("show"), 2800)); }
    base(t) { const e = this.cache.get(t); if (e)
        return e; const n = document.createElement("canvas"); n.width = 1024, n.height = 1024; const i = n.getContext("2d"), r = t === "orren"; for (let o = 0; o < 128; o++)
        for (let c = 0; c < 128; c++) {
            const l = (c / 128 - .5) * 520, h = (o / 128 - .5) * 520, u = Ot(l, h, r ? "orren" : "outside");
            i.fillStyle = r ? `hsl(${25 + u * .4} 29% ${29 + u * .7}%)` : `hsl(${137 + u * .4} 18% ${25 + u * .8}%)`, i.fillRect(c * 8, o * 8, 8, 8);
        } if (i.save(), i.translate(512, 512), i.scale(1024 / 520, 1024 / 520), i.fillStyle = r ? "#5eaaa5" : "#4e8692", i.beginPath(), i.ellipse(r ? 35 : 76, r ? 0 : -12, r ? 17 : 35, r ? 13 : 25, 0, 0, Math.PI * 2), i.fill(), r || (i.fillStyle = "#28493e", i.beginPath(), i.ellipse(-76, -80, 48, 69, -.35, 0, Math.PI * 2), i.fill()), (r ? a0 : go).forEach((o, c) => { i.beginPath(), o.forEach(([l, h], u) => u ? i.lineTo(l, h) : i.moveTo(l, h)), i.strokeStyle = c === 0 ? "#c6ac7c" : c === 1 ? "#95bfcb" : "#94a595", i.lineWidth = 2.1, i.stroke(); }), r)
        i.strokeStyle = "#e2b99d", i.lineWidth = 3, i.strokeRect(73, -88, 20, 17), i.strokeRect(-81, -72, 12, 10);
    else
        for (const [o, c, l, h] of r0)
            i.fillStyle = "#e0c9a1", i.fillRect(o - l / 2, c - h / 2, l, h), i.strokeStyle = "#34413d", i.lineWidth = 1, i.strokeRect(o - l / 2, c - h / 2, l, h); return i.restore(), this.cache.set(t, n), n; }
    geography(t, e, n, i, r, a, o) { t.fillStyle = o === "orren" ? "#493b3a" : "#173d3e", t.fillRect(0, 0, e, n), t.save(), t.translate(e / 2, n / 2), t.rotate(a), t.scale(r, r), t.translate(-i.x, -i.z), t.drawImage(this.base(o), -260, -260, 520, 520), t.restore(); }
    point(t, e, n, i, r, a) { const o = (t.x - e.x) * n, c = (t.z - e.z) * n; return { x: r / 2 + o * Math.cos(i) - c * Math.sin(i), y: a / 2 + o * Math.sin(i) + c * Math.cos(i) }; }
    drawPlayer(t, e, n, i) { t.save(), t.translate(e, n), t.rotate(i), t.beginPath(), t.moveTo(0, -10), t.lineTo(7, 8), t.lineTo(0, 4), t.lineTo(-7, 8), t.closePath(), t.fillStyle = "#f4fcdf", t.strokeStyle = "#18464a", t.lineWidth = 2, t.fill(), t.stroke(), t.restore(); }
    visibleMarkers(t) { const e = this.settings(); return this.markers.filter(n => n.worldId === t && n.discovered && (n.type !== "quest" || e.questMarkers !== "off") && (n.type !== "npc" || n.id === this.nav.state.data.navigation.trackedMarker)); }
    update(t, e, n, i) { const r = this.settings(), a = this.nav.state.data, o = a.voyage.mode !== "landed"; this.timer += t, this.crosshair.hidden = !i || r.perspective !== "first" || o && a.voyage.piloting; const c = this.minimap.parentElement.parentElement; c.hidden = !i || !r.minimap || o; const l = this.nav.selected(), h = l ? this.nav.guidance(l) : null; if (this.target.hidden = !i || o || !h || h.type === "quest" && r.questMarkers === "off", h) {
        const u = h.worldId !== this.nav.worldId, d = Math.round(Math.hypot(h.x - a.player.x, h.z - a.player.z));
        this.target.textContent = `${h.icon} ${h.label}${u ? " · " + h.worldId.toUpperCase() : r.distances ? " · " + d + " m" : ""}`;
    } if (this.compass.parentElement.hidden = !i || o, this.timer >= .18 && (this.timer = 0, this.markers = this.nav.all(), c.hidden || this.drawMini(e)), i && !o && this.drawCompass(e), this.worldLabel.hidden = !0, i && !o && h && h.worldId === this.nav.worldId && (h.type !== "quest" || r.questMarkers === "full") && r.worldMarkers !== "off") {
        const u = a.player;
        let d = { x: h.x, y: h.y + 2, z: h.z };
        const f = new T(d.x, d.y, d.z).project(n), g = Ol(u, d, e), v = f.z < 1 && Math.abs(f.x) < .85 && Math.abs(f.y) < .75 && Math.abs(g) < Math.PI / 2;
        if (v || r.edgeIndicators) {
            this.worldLabel.hidden = !1, this.worldLabel.classList.toggle("edge", !v);
            const m = v ? (f.x * .5 + .5) * innerWidth : g > 0 ? innerWidth - 55 : 55, p = v ? (-f.y * .5 + .5) * innerHeight : innerHeight * .5;
            this.worldLabel.style.left = m + "px", this.worldLabel.style.top = p + "px", this.worldLabel.textContent = `${v ? "◇" : g > 0 ? "◇ ›" : "‹ ◇"} ${l0(u.y, d.y - 2)}${r.distances ? " " + Math.round(Math.hypot(d.x - u.x, d.z - u.z)) + " m" : ""}${h.searchRadius ? " · search" : ""}${r.worldMarkers === "full" && v ? " · " + h.label : ""}`;
        }
    } }
    drawCompass(t) { const e = this.compass.getContext("2d"), n = 660; e.clearRect(0, 0, n, 112), e.font = "22px system-ui", e.textAlign = "center"; const r = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]; for (let l = 0; l < 8; l++) {
        const h = Hc(l * Math.PI / 4 - t);
        if (Math.abs(h) < 1.9) {
            const u = n / 2 + h * 165;
            e.fillStyle = "#d0dfd3", e.fillText(r[l], u, 25), e.fillRect(u, 34, 1, 9);
        }
    } e.fillStyle = "#f5d39d", e.beginPath(), e.moveTo(n / 2 - 4, 0), e.lineTo(n / 2 + 4, 0), e.lineTo(n / 2, 7), e.fill(); const a = this.nav.selected(), o = this.visibleMarkers(this.nav.worldId).filter(l => l.id === a?.id || l.id === "ship").sort((l, h) => h.priority - l.priority), c = []; for (const l of o) {
        if (l.id === "ship" && this.nav.state.data.player.zone === "ship")
            continue;
        const h = this.nav.guidance(l);
        let u = Ol(this.nav.state.data.player, h, t), d = Math.max(20, Math.min(n - 20, n / 2 + u * 165));
        c.some(f => Math.abs(f - d) < 60) && (d = Math.max(22, Math.min(n - 22, d + 65))), c.push(d), e.fillStyle = h.color, e.font = "23px system-ui", e.fillText(h.icon, d, 69), this.settings().distances && (e.font = "18px system-ui", e.fillText(Math.round(Math.hypot(h.x - this.nav.state.data.player.x, h.z - this.nav.state.data.player.z)) + " m", d, 99));
    } }
    drawMini(t) { if (this.nav.state.data.player.zone !== "outside" && this.nav.state.data.player.zone !== "orren") {
        this.drawInterior(t);
        return;
    } const e = this.minimap.getContext("2d"), n = this.settings(), i = this.nav.origin, r = n.minimapOrientation === "rotating" ? -t : 0, a = n.minimapZoom === "near" ? 3.6 : n.minimapZoom === "wide" ? 1 : 2; this.geography(e, 320, 320, i, a, r, this.nav.worldId); const o = this.nav.selected(); for (const c of this.visibleMarkers(this.nav.worldId).filter(l => l.priority >= 30 || l.id === o?.id)) {
        let l = this.point(c, i, a, r, 320, 320);
        (l.x < 14 || l.x > 306 || l.y < 14 || l.y > 306) && c.id !== o?.id && c.type !== "ship" || (l = { x: Math.max(14, Math.min(306, l.x)), y: Math.max(14, Math.min(306, l.y)) }, c.searchRadius && (e.fillStyle = "#eac28a22", e.beginPath(), e.arc(l.x, l.y, c.searchRadius * a, 0, Math.PI * 2), e.fill(), e.strokeStyle = "#eac28a88", e.stroke()), e.font = "bold 24px system-ui", e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#153637", e.beginPath(), e.arc(l.x, l.y, 14, 0, Math.PI * 2), e.fill(), e.fillStyle = c.color, e.fillText(c.icon, l.x, l.y));
    } this.drawPlayer(e, 160, 160, t + r), e.font = "bold 19px system-ui", e.fillStyle = "#faf3dc", e.textAlign = "left", n.minimapOrientation === "north" ? e.fillText("N", 12, 21) : (e.textAlign = "center", e.fillText("N", 160 + Math.sin(-t) * 137, 160 - Math.cos(-t) * 137)), this.ui.root.querySelector("#minimap-caption").textContent = n.minimapOrientation === "north" ? "NORTH UP · " + n.minimapZoom.toUpperCase() : "HEADING UP · " + n.minimapZoom.toUpperCase(); }
    drawInterior(t) { const e = this.minimap.getContext("2d"), n = this.nav.state.data.player, i = qa[n.zone]; if (!i)
        return; e.fillStyle = "#183940", e.fillRect(0, 0, 320, 320); const r = i.depth > 20 ? 8 : 14, a = 160, o = 160; e.fillStyle = "#65776c", e.fillRect(a - i.width * r / 2, o - i.depth * r / 2, i.width * r, i.depth * r), e.strokeStyle = "#c9c7a4", e.lineWidth = 3, e.strokeRect(a - i.width * r / 2, o - i.depth * r / 2, i.width * r, i.depth * r), e.fillStyle = "#e5d3a5", e.font = "22px system-ui", e.textAlign = "center", e.fillText("↗", a + i.exit.x * r, o + i.exit.z * r); const c = this.nav.selected(); if (c) {
        const l = this.nav.guidance(c);
        e.fillStyle = l.color, e.fillText(l.icon, a + l.x * r, o + l.z * r);
    } this.drawPlayer(e, a + n.x * r, o + n.z * r, t), this.ui.root.querySelector("#minimap-caption").textContent = i.name; }
    journalLinks() { for (const t of Array.from(this.ui.panel.querySelectorAll(".journal-quest"))) {
        const e = t.querySelector("h3")?.textContent, n = Object.values(Oe).find(r => r.title === e);
        if (!n || this.nav.state.data.quests[n.id] === 3)
            continue;
        const i = document.createElement("button");
        i.textContent = this.nav.state.data.navigation.trackedQuest === n.id ? "Tracking this quest" : "Track quest", i.className = "track-button", i.addEventListener("click", () => { this.nav.trackQuest(n.id), this.changed(), this.ui.notify("Tracking · " + n.title), this.ui.journal(); }), t.append(i);
    } }
    map(t = this.nav.worldId) { this.mapWorld = t, this.mapCenter = t === this.nav.worldId ? { ...this.nav.origin } : { x: 0, z: 0 }, this.mapScale = 1.5, this.ui.shell(t === "mosslight" ? "Mosslight region" : "Orren · Amber Garden", "LOCAL NAVIGATION", '<div class="map-toolbar"><button id="system-chart">System chart</button><button id="map-minus" aria-label="Zoom map out">−</button><button id="map-plus" aria-label="Zoom map in">＋</button><button id="map-recenter">Recenter</button><button id="clear-waypoint">Clear destination</button></div><div class="navigation-map"><canvas id="navigation-map" width="840" height="630" aria-label="Interactive map. Drag to pan; tap to set a waypoint."></canvas></div><p id="map-selection" role="status">Tap a place to set a waypoint. Drag to pan; pinch or scroll to zoom.</p><div id="map-directory" class="map-directory"></div>', "map"), this.mapCanvas = this.ui.panel.querySelector("canvas"), this.markers = this.nav.all(), this.drawMap(), this.directory(); const e = (n, i) => this.ui.panel.querySelector("#" + n).addEventListener("click", i); e("system-chart", this.system), e("clear-waypoint", () => { this.nav.clear(), this.changed(), this.markers = this.nav.all(), this.drawMap(), this.directory(); }), e("map-plus", () => { this.mapScale = Math.min(6, this.mapScale * 1.3), this.drawMap(); }), e("map-minus", () => { this.mapScale = Math.max(.8, this.mapScale / 1.3), this.drawMap(); }), e("map-recenter", () => { this.mapCenter = { ...this.nav.origin }, this.drawMap(); }), this.bindMap(); }
    directory() { const t = this.ui.panel.querySelector("#map-directory"); if (t) {
        t.innerHTML = "";
        for (const e of this.nav.all().filter(n => n.worldId === this.mapWorld && n.discovered)) {
            const n = document.createElement("button");
            n.textContent = e.icon + " " + e.label + (e.activity ? " · " + e.activity : ""), n.addEventListener("click", () => { this.nav.trackMarker(e.id), this.changed(), this.ui.notify("Destination · " + e.label), this.markers = this.nav.all(), this.drawMap(); }), t.append(n);
        }
    } }
    drawMap() { const t = this.mapCanvas; if (!t || !t.isConnected)
        return; const e = t.getContext("2d"), n = 840, i = 630; this.markers = this.nav.all(), this.geography(e, n, i, this.mapCenter, this.mapScale, 0, this.mapWorld), this.hits = [], e.textAlign = "center", e.textBaseline = "middle"; for (const r of this.visibleMarkers(this.mapWorld)) {
        const a = this.nav.mapMarker(r), o = this.point(a, this.mapCenter, this.mapScale, 0, n, i);
        if (o.x < 0 || o.x > n || o.y < 0 || o.y > i)
            continue;
        a.searchRadius && (e.fillStyle = "#edbd7029", e.strokeStyle = "#e8c388", e.beginPath(), e.arc(o.x, o.y, a.searchRadius * this.mapScale, 0, Math.PI * 2), e.fill(), e.stroke()), this.hits.find(l => Math.hypot(l.x - o.x, l.y - o.y) < 30) && (o.x += 28, o.y += 17), this.hits.push({ x: o.x, y: o.y, m: a }), e.fillStyle = "#17383b", e.strokeStyle = a.color, e.lineWidth = a.id === this.nav.selected()?.id ? 3 : 1, e.beginPath(), e.arc(o.x, o.y, 17, 0, Math.PI * 2), e.fill(), e.stroke(), e.fillStyle = a.color, e.font = "24px system-ui", e.fillText(a.icon, o.x, o.y);
    } if (this.mapWorld === this.nav.worldId) {
        const r = this.point(this.nav.origin, this.mapCenter, this.mapScale, 0, n, i);
        this.drawPlayer(e, r.x, r.y, this.nav.state.data.player.facing - Math.PI);
    } e.fillStyle = "#f5e5c4", e.font = "bold 20px system-ui", e.textAlign = "right", e.fillText("N ↑", 812, 25), e.font = "16px system-ui", e.fillText("100 m", 810, 605), e.fillRect(810 - 100 * this.mapScale, 616, 100 * this.mapScale, 2); }
    bindMap() { const t = this.mapCanvas, e = new Map; let n = { x: 0, y: 0 }, i = { x: 0, y: 0 }, r = !1, a = 0; const o = c => { const l = t.getBoundingClientRect(); return { x: (c.clientX - l.left) * 840 / l.width, y: (c.clientY - l.top) * 630 / l.height }; }; t.addEventListener("pointerdown", c => { c.preventDefault(), t.setPointerCapture(c.pointerId); const l = o(c); if (e.set(c.pointerId, l), n = l, i = l, r = !1, e.size === 2) {
        const [h, u] = [...e.values()];
        a = Math.hypot(h.x - u.x, h.y - u.y), r = !0;
    } }), t.addEventListener("pointermove", c => { if (!e.has(c.pointerId))
        return; const l = o(c); if (e.set(c.pointerId, l), e.size === 2) {
        const [h, u] = [...e.values()], d = Math.hypot(h.x - u.x, h.y - u.y);
        a > 0 && (this.mapScale = Math.max(.8, Math.min(6, this.mapScale * d / a))), a = d, r = !0;
    }
    else
        Math.hypot(l.x - n.x, l.y - n.y) > 7 && (r = !0), r && (this.mapCenter.x -= (l.x - i.x) / this.mapScale, this.mapCenter.z -= (l.y - i.y) / this.mapScale); i = l, this.drawMap(); }), t.addEventListener("pointerup", c => { const l = o(c); if (e.delete(c.pointerId), !r) {
        const h = this.hits.find(u => Math.hypot(u.x - l.x, u.y - l.y) < 24);
        h ? this.nav.trackMarker(h.m.id) : this.nav.place(this.mapCenter.x + (l.x - 420) / this.mapScale, this.mapCenter.z + (l.y - 315) / this.mapScale, "Your waypoint", this.mapWorld), this.changed(), this.ui.panel.querySelector("#map-selection").textContent = h ? "Destination set · " + h.m.label : "Waypoint placed · follow the compass", this.drawMap(), this.directory();
    } r = !0; }), t.addEventListener("pointercancel", () => { e.clear(), r = !0; }), t.addEventListener("wheel", c => { c.preventDefault(), this.mapScale = Math.max(.8, Math.min(6, this.mapScale * Math.exp(-c.deltaY * .001))), this.drawMap(); }, { passive: !1 }); }
}
const rn = { mosslight: { id: "mosslight", name: "Mosslight", subtitle: "THE GREEN HOME", color: "#8eb79a", position: [0, 0, 0], radius: 180, landing: "Mosslight Harbor", description: "Lanterns, familiar voices, and a kettle left on. Land at the harbor to return to Sela and your first trails." }, orren: { id: "orren", name: "Orren", subtitle: "THE AMBER GARDEN", color: "#d9ab81", position: [2400, 420, -1700], radius: 135, landing: "Cinderbloom Anchorage", description: "Apricot dunes, turquoise springs, and enormous flowering stone arches. An old listening garden still has power." } }, u0 = () => ({ planet: "mosslight", mode: "landed", position: [0, 0, 340], yaw: 0, pitch: 0, speed: 0, throttle: 0, destination: null, piloting: !1, visited: ["mosslight"] });
class d0 {
    constructor(t) { this.state = t; }
    state;
    angular = { x: 0, y: 0 };
    beginTakeoff() { return this.data.mode !== "landed" || !this.state.data.flags.repaired || this.data.transit ? !1 : (this.data.transit = { kind: "takeoff", elapsed: 0 }, this.data.piloting = !0, this.state.touch(), !0); }
    beginLanding() { return !this.canLand() || this.data.transit ? !1 : (this.data.transit = { kind: "landing", elapsed: 0 }, this.data.piloting = !0, this.data.speed = 0, this.state.touch(), !0); }
    get data() { return this.state.data.voyage; }
    get target() { return this.data.destination ? rn[this.data.destination] : null; }
    get distance() { const t = this.target, e = this.data.position; return t ? Math.max(0, Math.hypot(e[0] - t.position[0], e[1] - t.position[1], e[2] - t.position[2]) - t.radius - 80) : 0; }
    get eta() { return Math.ceil(this.distance / Math.max(1, this.data.mode === "autopilot" ? 45 : this.data.speed)); }
    setCourse(t) { return this.state.data.navigation.unlockedWorlds.includes(t) ? (this.data.destination = t, this.data.mode === "approach" && (this.data.mode = "manual"), this.state.touch(), !0) : !1; }
    launch() { if (!this.state.data.flags.repaired || this.data.mode !== "landed")
        return !1; const t = rn[this.data.planet]; return this.data.position = [t.position[0], t.position[1] + 35, t.position[2] + t.radius + 170], this.data.mode = "manual", this.data.piloting = !0, this.data.speed = 0, this.data.throttle = 0, this.data.yaw = 0, this.data.pitch = 0, this.state.data.navigation.unlockedWorlds = ["mosslight", "orren"], this.data.destination = this.data.destination ?? (this.data.planet === "mosslight" ? "orren" : "mosslight"), this.state.touch(), !0; }
    autopilot() { return this.data.transit || this.data.mode === "landed" || !this.target ? !1 : (this.data.mode = "autopilot", this.state.touch(), !0); }
    stand() { this.data.transit || (this.data.piloting = !1, this.data.mode === "manual" && (this.data.speed = 0, this.data.throttle = 0), this.state.touch()); }
    brake() { this.data.transit || (this.data.mode !== "landed" && (this.data.mode = "manual"), this.data.throttle = 0, this.data.speed = 0); }
    update(t, e = { x: 0, y: 0 }, n = 0) { t = Math.min(.05, Math.max(0, t)); const i = this.data; if (i.transit) {
        if (i.transit.elapsed += t, i.transit.elapsed >= 18) {
            const r = i.transit.kind;
            delete i.transit, r === "takeoff" ? this.launch() : this.land(), this.state.touch();
        }
        return !1;
    } if (i.mode === "landed")
        return !1; if (i.mode === "autopilot" && this.target) {
        const r = this.target, a = i.position, o = r.position[0] - a[0], c = r.position[1] - a[1], l = r.position[2] - a[2], h = Math.hypot(o, c, l);
        i.yaw = Math.atan2(-o, -l), i.pitch = -Math.asin(c / Math.max(.001, h));
        const u = Math.min(45 * t, this.distance);
        if (i.speed = u / Math.max(t, .001), i.throttle = 1, h > 0 && (a[0] += o / h * u, a[1] += c / h * u, a[2] += l / h * u), this.distance < .1)
            return i.mode = "approach", i.speed = 0, i.throttle = 0, this.state.touch(), !0;
    }
    else if (i.mode === "manual" && i.piloting) {
        const r = o => de(o / Math.max(t, .001) * .0016, -1.1, 1.1);
        this.angular.x += (r(e.x) - this.angular.x) * (1 - Math.exp(-3.5 * t)), this.angular.y += (r(e.y) - this.angular.y) * (1 - Math.exp(-3.5 * t)), i.yaw -= this.angular.x * t, i.pitch = de(i.pitch + this.angular.y * t, -1.45, 1.45), i.throttle = de(i.throttle + n * t * .5, 0, 1), i.speed += (i.throttle * 60 - i.speed) * (1 - Math.exp(-2 * t));
        const a = Math.cos(i.pitch);
        i.position[0] -= Math.sin(i.yaw) * a * i.speed * t, i.position[1] -= Math.sin(i.pitch) * i.speed * t, i.position[2] -= Math.cos(i.yaw) * a * i.speed * t;
        for (const o of Object.values(rn)) {
            const c = i.position.map((u, d) => u - o.position[d]), l = Math.hypot(...c), h = o.radius + 45;
            if (l < h) {
                for (let u = 0; u < 3; u++)
                    i.position[u] = o.position[u] + (l > .001 ? c[u] / l : u === 2 ? 1 : 0) * h;
                i.speed = 0, i.throttle = 0;
            }
        }
        for (let o = 0; o < 3; o++)
            Math.abs(i.position[o]) > 12e3 && (i.position[o] = de(i.position[o], -12e3, 12e3), i.speed = 0, i.throttle = 0);
    } return !1; }
    canLand() { return this.data.mode !== "landed" && this.target !== null && this.distance < 25; }
    land() { if (!this.canLand() || !this.data.destination)
        return !1; const t = this.data; t.planet = t.destination, t.mode = "landed", t.speed = 0, t.throttle = 0, t.piloting = !1, t.visited.includes(t.planet) || t.visited.push(t.planet); const e = t.planet === "mosslight" ? "mosslight_harbor" : "orren_anchorage"; return this.state.data.navigation.knownLandings.includes(e) || this.state.data.navigation.knownLandings.push(e), this.state.touch(), !0; }
}
function f0(s) { const t = new Wt; for (const e of [-6.7, 6.7]) {
    R(t, "box", "#795b49", e, .32, 0, .12, .62, 15.4), R(t, "box", "#e5ccaa", e, 1.15, 0, .16, .09, 15.4);
    for (let n = -7; n < 8; n += 1)
        R(t, "box", "#b89476", e, .72, n, .14, .85, .055);
} for (const e of [-3, 3]) {
    R(t, "box", "#7c9990", e, .025, 2, 3.3, .025, 3.5);
    for (const n of [-1.6, 2.6])
        R(t, "cylinder", "#c4a478", e, 3.2, n, .5, .2, .5), xo(t, new T(e, 4.6, n), new T(e, 3.3, n), .025, "#665e50"), R(t, "round", "#ffe0a9", e, 3.1, n, .28, .1, .28, .7);
    R(t, "cylinder", "#dfd3ad", e, .81, 2, .27, .025, .27), R(t, "round", "#b78a55", e, .88, 2, .19, .065, .16), R(t, "box", "#ddd2bb", e + .35, .82, 2, .2, .02, .27);
} R(t, "box", "#526f68", -2.1, 1.35, -4.4, 1.25, .65, .6), R(t, "cylinder", "#b7c7b7", -2.1, 1.8, -4.4, .28, .25, .28); for (const e of [-2.5, -1.7])
    R(t, "cylinder", "#efe0bf", e, 1.15, -3.95, .09, .18, .09); R(t, "box", "#81968a", 2.1, 1.3, -4.4, 1.8, .6, .8); for (let e = 0; e < 5; e++)
    R(t, "round", "#d5a66f", 1.4 + e * .34, 1.65, -4.3, .13, .08, .17); Ue(t, "TEA · SOUP · SOMETHING SWEET", 0, 2.5, -7.45, 4); for (const e of [-5, 5])
    R(t, "cylinder", "#ba9577", e, .33, 5.5, .35, .6, .35), Li(t, e, .6, 5.5, 1.2, "#799579"); s.add(wi(t)); }
function p0(s, t, e, n) { const i = n / 2; for (const r of [-e * .44, e * .44])
    R(s, "box", "#735e4c", r, 1.7, i + 2, .18, 3.4, .18), R(s, "round", "#dfbc83", r, 3.3, i + 2, .25, .13, .25, .4); if (t.includes("KETTLE")) {
    const r = new Wt;
    r.position.set(-e / 2 - .9, 3.6, i + 1), R(r, "round", "#cfac76", 0, 0, 0, .6, .45, .24), R(r, "round", "#ead0a3", 0, .46, 0, .28, .07, .2), xo(r, new T(.45, .02, 0), new T(.86, .36, 0), .13, "#cfac76");
    const a = new qt(new ps(.38, .07, 6, 16), new ye({ color: "#cfac76" }));
    a.position.x = -.48, r.add(a), s.add(r);
} if (t.includes("SELA")) {
    R(s, "box", "#385c5a", 0, 1.7, i + .3, 3.1, 3.1, .15);
    for (let r = .4; r < 3.1; r += .35)
        R(s, "box", "#8ba49a", 0, r, i + .42, 3.1, .045, .05);
} for (const r of [-e * .3, e * .3])
    R(s, "box", "#e5cfab", r, 3.1, i + .5, 2, .12, .25), R(s, "box", "#e5cfab", r, 2.2, i + .5, 2, .12, .25); }
function m0(s, t, e, n) { const i = new Tc; i.moveTo(-t / 2, 0), i.quadraticCurveTo(-t * .42, 2, 0, 2.2), i.quadraticCurveTo(t * .42, 2, t / 2, 0), i.lineTo(t / 2, -.23), i.quadraticCurveTo(0, 1, -t / 2, -.23), i.closePath(); const r = new fo(i, { depth: e, bevelEnabled: !0, bevelSegments: 2, steps: 1, bevelSize: .12, bevelThickness: .12, curveSegments: 12 }), a = new qt(r, new ye({ color: n, roughness: .67, metalness: .16 })); a.position.set(0, 5.45, -e / 2), a.castShadow = !0, a.receiveShadow = !0, s.add(a); for (let o = -t / 2 + .4; o < t / 2; o += .9) {
    const c = 7.58 - 1.7 * (Math.abs(o) / (t / 2)) ** 2;
    R(s, "box", n, o, c, -.1, .045, .08, e + .05);
} }
function g0(s, t, e, n, i) { p0(s, t, e, n); const r = t.includes("KETTLE"), a = t.includes("OREN"), o = t.includes("SELA"), c = t.includes("FIELD"), l = n / 2; for (const h of [-e / 2 + .15, e / 2 - .15])
    R(s, "box", "#eee0bd", h, 2.8, l + .15, .25, 5.1, .28); for (let h = .9; h < 4.7; h += .65)
    R(s, "box", "#c3b598", 0, h, l + .015, e, .045, .05); for (const h of [-e * .32, e * .32]) {
    R(s, "box", "#78978b", h, 2.1, l + .65, 2.4, .26, .8);
    for (let d = 0; d < 4; d++) {
        const f = h - .7 + d * .46;
        R(s, "round", "#739367", f, 2.37, l + .63, .27, .34, .3), R(s, "round", r ? "#eac0b3" : "#e5d7a0", f, 2.66, l + .7, .15, .1, .15);
    }
    const u = new qt(new dn(1.65, 1.6), new hd({ color: "#b9d4cc", metalness: .12, roughness: .16, transparent: !0, opacity: .42, side: Ge }));
    u.position.set(h, 3.1, l + .41), s.add(u);
} if (r || a) {
    for (let h = 0; h < 12; h++) {
        const u = -e / 2 + h * e / 12 + e / 24, d = R(s, "box", h % 2 ? "#efe0bc" : r ? "#ae6c62" : "#658c75", u, 4.1, l + 1.2, e / 12, .14, 2.5);
        d.rotation.x = -.12, R(s, "round", h % 2 ? "#efe0bc" : r ? "#ae6c62" : "#658c75", u, 3.84, l + 2.39, e / 24, .24, .085);
    }
    if (a)
        for (const h of [-3.3, 3.3]) {
            hn(s, h, 0, l + 3, "#987b59", .8);
            for (let u = 0; u < 5; u++)
                R(s, "round", u % 2 ? "#dbb364" : "#a0ad65", h + (u % 3 - 1) * .25, 1.04, l + 3 + Math.floor(u / 3) * .25, .17, .18, .17);
        }
    else
        for (const h of [-3.5, 3.5]) {
            R(s, "cylinder", "#997b59", h, .95, l + 3.8, 1.05, .18, 1.05), R(s, "cylinder", "#4e6d65", h, .43, l + 3.8, .12, .86, .12), R(s, "cylinder", "#f1dfbc", h, 1.13, l + 3.8, .13, .22, .13);
            for (const u of [-1, 1])
                an(s, h + u * 1.7, 0, l + 3.8);
        }
} if (o) {
    R(s, "cylinder", "#a9b2a5", -e / 2 - 1, 1.5, 0, .8, 3, .8);
    for (const u of [.4, 2.6])
        R(s, "cylinder", "#59797c", -e / 2 - 1, u, 0, .88, .13, .88);
    const h = new qt(new ps(.9, .17, 7, 20), new ye({ color: "#d0a771", metalness: .45, roughness: .45 }));
    h.position.set(e / 2 + 1.3, 2.4, l), s.add(h), R(s, "box", "#627e78", e / 2 + 1.3, .9, l, 2.8, .2, 1.5);
} if (c) {
    const h = new qt(new On(2.1, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), new ye({ color: "#91b8bc", metalness: .25, roughness: .25 }));
    h.position.set(0, 7.3, -1), s.add(h), R(s, "cylinder", "#607d81", e / 2 + 1, 2.4, 0, .09, 4.8, .09), R(s, "round", "#afd4c8", e / 2 + 1, 4.8, 0, .55, .22, .55);
} for (const h of [-e / 2 - .8, e / 2 + .8])
    R(s, "cylinder", "#ba9875", h, .48, l + 1.4, .4, .85, .4), Li(s, h, .9, l + 1.4, .85, "#7eaa83"); }
function v0() { const s = document.createElement("canvas"); s.width = s.height = 128; const t = s.getContext("2d"), e = Nn(337); t.fillStyle = "#d1d3c4", t.fillRect(0, 0, 128, 128); for (let i = 0; i < 1400; i++) {
    const r = 160 + Math.floor(e() * 60);
    t.fillStyle = `rgba(${r},${r + 5},${r - 5},.18)`, t.fillRect(e() * 128, e() * 128, 1 + e() * 3, 1 + e() * 2);
} const n = new vc(s); return n.wrapS = n.wrapT = Ks, n.repeat.set(115, 115), n.colorSpace = De, n; }
function x0(s) { const t = new Wt; for (const [n, i] of [[-34, 23], [24, 25], [-11, -29]]) {
    const r = Ot(n, i);
    R(t, "box", "#8a7258", n, r + .2, i, 5, .4, 2.2), R(t, "box", "#675e49", n, r + .43, i, 4.7, .06, 1.9);
    for (let a = 0; a < 9; a++) {
        const o = n - 2 + a * .5;
        R(t, "round", "#809563", o, r + .72, i, .26, .25, .34), R(t, "round", "#bcac72", o, r + .88, i, .12, .09, .12);
    }
} for (const [n, i] of [[-39, 20], [27, 30], [31, -25]]) {
    const r = Ot(n, i);
    for (let a = 0; a < 4; a++)
        R(t, "box", "#c8b695", n + a * 1.4, r + .68, i, .14, 1.35, .14);
    for (const a of [.5, 1.03])
        R(t, "box", "#c8b695", n + 2.1, r + a, i, 4.4, .13, .13);
} const e = -1.35; for (let n = 0; n < 21; n++)
    R(t, "box", "#b39c78", 43 + n * .45, e - .06, -7, .43, .12, 3); for (const n of [47, 51.5])
    for (const i of [-8.5, -5.5])
        R(t, "cylinder", "#7d7961", n, e - .35, i, .11, 1.5, .11); Ue(t, "GLASSWATER · CAST A WHILE", 45, e + 1.5, -8, 3.7), s.add(wi(t)); }
function kl(s, t) { t && f0(s); const e = t ? "#dfc1a9" : "#c3cbb0"; R(s, "box", "#bbab89", 0, -.15, 0, 14, .3, 16); for (let i = -7; i <= 7; i += .5)
    R(s, "box", "#9e8f72", 0, .013, i, 13, .015, .02); for (const i of [-7, 7])
    R(s, "box", e, i, 2.5, 0, .4, 5, 16); R(s, "box", e, 0, 2.5, -8, 14, 5, .3), R(s, "box", "#688b7b", 0, 4.8, 0, 14, .25, 16); for (const i of [-3, 3])
    R(s, "box", "#5d8076", i, 2.6, -7.8, 3, 2.3, .1), R(s, "box", "#e4cf9e", i, 2.6, -7.7, 2.7, 2, .08, .4), R(s, "box", "#dde0bb", i, 2.6, -7.6, .1, 2.1, .08); R(s, "box", "#876c51", 0, .45, -4.4, 8, .9, 1.6), R(s, "box", "#e0ccaa", 0, .96, -4.4, 8.3, .12, 1.8), Ue(s, t ? "THE WARM KETTLE" : "OREN’S PROVISIONS", 0, 3.95, -7.5, 5.8); for (const i of [-1, 1]) {
    const r = i * 5.9;
    for (let a = 0; a < 3; a++) {
        R(s, "box", "#9d825e", r, .45 + a * .65, -.7, 1.5, .14, 4.8);
        for (let o = 0; o < 5; o++) {
            const c = -2.4 + o * .85;
            R(s, t ? "cylinder" : "box", o % 2 ? "#acc0a0" : "#ddb187", r, .71 + a * .65, c, t ? .19 : .45, .38, t ? .19 : .48);
        }
    }
} if (t)
    for (const i of [-3, 3])
        R(s, "cylinder", "#b3936c", i, .72, 2, .85, .1, .85), R(s, "cylinder", "#678176", i, .4, 2, .13, .8, .13), an(s, i, 0, 3.5), R(s, "cylinder", "#e6d6b5", i, .9, 2, .14, .23, .14);
else
    hn(s, -3, 0, 3.5, "#83a291"), hn(s, 3, 0, 3.5, "#b99975"); R(s, "cylinder", "#ddb980", 0, 4, 0, .8, .12, .8, 1); const n = new hs("#ffe0b1", 20, 16, 2); n.position.set(0, 3.6, 0), s.add(n), Ue(s, "TO THE HARBOR →", 0, 2.4, 7.6, 3).rotation.y = Math.PI; }
const Yi = new T;
function Ye(s, t, e, n, i, r) { const a = 2 * Math.PI * i / 4, o = Math.max(r - 2 * i, 0), c = Math.PI / 4; Yi.copy(t), Yi[n] = 0, Yi.normalize(); const l = .5 * a / (a + o), h = 1 - Yi.angleTo(s) / c; return Math.sign(Yi[e]) === 1 ? h * l : o / (a + o) + l + l * (1 - h); }
class vo extends Oi {
    constructor(t = 1, e = 1, n = 1, i = 2, r = .1) { const a = i * 2 + 1; if (r = Math.min(t / 2, e / 2, n / 2, r), super(1, 1, 1, a, a, a), this.type = "RoundedBoxGeometry", this.parameters = { width: t, height: e, depth: n, segments: i, radius: r }, a === 1)
        return; const o = this.toNonIndexed(); this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv; const c = new T, l = new T, h = new T(t, e, n).divideScalar(2).subScalar(r), u = this.attributes.position.array, d = this.attributes.normal.array, f = this.attributes.uv.array, g = u.length / 6, v = new T, m = .5 / a; for (let p = 0, E = 0; p < u.length; p += 3, E += 2)
        switch (c.fromArray(u, p), l.copy(c), l.x -= Math.sign(l.x) * m, l.y -= Math.sign(l.y) * m, l.z -= Math.sign(l.z) * m, l.normalize(), u[p + 0] = h.x * Math.sign(c.x) + l.x * r, u[p + 1] = h.y * Math.sign(c.y) + l.y * r, u[p + 2] = h.z * Math.sign(c.z) + l.z * r, d[p + 0] = l.x, d[p + 1] = l.y, d[p + 2] = l.z, Math.floor(p / g)) {
            case 0:
                v.set(1, 0, 0), f[E + 0] = Ye(v, l, "z", "y", r, n), f[E + 1] = 1 - Ye(v, l, "y", "z", r, e);
                break;
            case 1:
                v.set(-1, 0, 0), f[E + 0] = 1 - Ye(v, l, "z", "y", r, n), f[E + 1] = 1 - Ye(v, l, "y", "z", r, e);
                break;
            case 2:
                v.set(0, 1, 0), f[E + 0] = 1 - Ye(v, l, "x", "z", r, t), f[E + 1] = Ye(v, l, "z", "x", r, n);
                break;
            case 3:
                v.set(0, -1, 0), f[E + 0] = 1 - Ye(v, l, "x", "z", r, t), f[E + 1] = 1 - Ye(v, l, "z", "x", r, n);
                break;
            case 4:
                v.set(0, 0, 1), f[E + 0] = 1 - Ye(v, l, "x", "y", r, t), f[E + 1] = 1 - Ye(v, l, "y", "x", r, e);
                break;
            case 5:
                v.set(0, 0, -1), f[E + 0] = Ye(v, l, "x", "y", r, t), f[E + 1] = 1 - Ye(v, l, "y", "x", r, e);
                break;
        } }
    static fromJSON(t) { return new vo(t.width, t.height, t.depth, t.segments, t.radius); }
}
function Gc(s, t = !1) { const e = s[0].index !== null, n = new Set(Object.keys(s[0].attributes)), i = new Set(Object.keys(s[0].morphAttributes)), r = {}, a = {}, o = s[0].morphTargetsRelative, c = new _e; let l = 0; for (let h = 0; h < s.length; ++h) {
    const u = s[h];
    let d = 0;
    if (e !== (u.index !== null))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const f in u.attributes) {
        if (!n.has(f))
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + f + '" attribute exists among all geometries, or in none of them.'), null;
        r[f] === void 0 && (r[f] = []), r[f].push(u.attributes[f]), d++;
    }
    if (d !== n.size)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."), null;
    if (o !== u.morphTargetsRelative)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const f in u.morphAttributes) {
        if (!i.has(f))
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."), null;
        a[f] === void 0 && (a[f] = []), a[f].push(u.morphAttributes[f]);
    }
    if (t) {
        let f;
        if (e)
            f = u.index.count;
        else if (u.attributes.position !== void 0)
            f = u.attributes.position.count;
        else
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"), null;
        c.addGroup(l, f, h), l += f;
    }
} if (e) {
    let h = 0;
    const u = [];
    for (let d = 0; d < s.length; ++d) {
        const f = s[d].index;
        for (let g = 0; g < f.count; ++g)
            u.push(f.getX(g) + h);
        h += s[d].attributes.position.count;
    }
    c.setIndex(u);
} for (const h in r) {
    const u = zl(r[h]);
    if (!u)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " attribute."), null;
    c.setAttribute(h, u);
} for (const h in a) {
    const u = a[h][0].length;
    if (u === 0)
        break;
    c.morphAttributes = c.morphAttributes || {}, c.morphAttributes[h] = [];
    for (let d = 0; d < u; ++d) {
        const f = [];
        for (let v = 0; v < a[h].length; ++v)
            f.push(a[h][v][d]);
        const g = zl(f);
        if (!g)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " morphAttribute."), null;
        c.morphAttributes[h].push(g);
    }
} return c; }
function zl(s) { let t, e, n, i = -1, r = 0; for (let l = 0; l < s.length; ++l) {
    const h = s[l];
    if (t === void 0 && (t = h.array.constructor), t !== h.array.constructor)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (e === void 0 && (e = h.itemSize), e !== h.itemSize)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (n === void 0 && (n = h.normalized), n !== h.normalized)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (i === -1 && (i = h.gpuType), i !== h.gpuType)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    r += h.count * e;
} const a = new t(r), o = new Se(a, e, n); let c = 0; for (let l = 0; l < s.length; ++l) {
    const h = s[l];
    if (h.isInterleavedBufferAttribute) {
        const u = c / e;
        for (let d = 0, f = h.count; d < f; d++)
            for (let g = 0; g < e; g++) {
                const v = h.getComponent(d, g);
                o.setComponent(d + u, g, v);
            }
    }
    else
        a.set(h.array, c);
    c += h.count * e;
} return i !== void 0 && (o.gpuType = i), o; }
const Bl = new Map;
function _0(s, t = 0) { const e = s + t; let n = Bl.get(e); return n || (n = new ye({ color: s, roughness: t > 0 ? .38 : .76, metalness: t > 0 ? .16 : .06, emissive: s, emissiveIntensity: t }), Bl.set(e, n)), n; }
const y0 = new vo(1, 1, 1, 2, .13), M0 = new lr(1, 1), S0 = new On(1, 12, 8), b0 = new fs(1, 1, 1, 10), E0 = new or(1, 1, 9);
function R(s, t, e, n, i, r, a = 1, o = a, c = a, l = 0) { const h = new qt(t === "box" ? y0 : t === "ball" ? M0 : t === "round" ? S0 : t === "cone" ? E0 : b0, _0(e, l)); return h.position.set(n, i, r), h.scale.set(a, o, c), h.castShadow = !0, h.receiveShadow = !0, s.add(h), h; }
function xo(s, t, e, n, i) { const r = R(s, "cylinder", i, 0, 0, 0, n, t.distanceTo(e), n); return r.position.copy(t).add(e).multiplyScalar(.5), r.quaternion.setFromUnitVectors(new T(0, 1, 0), e.clone().sub(t).normalize()), r; }
function wi(s) { s.updateMatrixWorld(!0); const t = new Map; s.traverse(n => { if (n instanceof qt && !Array.isArray(n.material)) {
    let i = n.geometry.clone();
    i.applyMatrix4(n.matrixWorld), i.index && (i = i.toNonIndexed());
    for (const a of Object.keys(i.attributes))
        ["position", "normal", "uv"].includes(a) || i.deleteAttribute(a);
    const r = t.get(n.material) ?? [];
    r.push(i), t.set(n.material, r);
} }); const e = new Wt; for (const [n, i] of t) {
    const r = Gc(i, !1);
    for (const o of i)
        o.dispose();
    if (!r)
        continue;
    r.computeBoundingSphere();
    const a = new qt(r, n);
    a.castShadow = !0, a.receiveShadow = !0, e.add(a);
} return e; }
const w0 = new ye({ vertexColors: !0, roughness: .87 });
function ms(s) { for (const e of [...s.children])
    e instanceof Wt && ms(e); const t = []; for (const e of [...s.children])
    if (e instanceof qt && e.material instanceof ye) {
        e.updateMatrix();
        let n = e.geometry.clone();
        n.index && (n = n.toNonIndexed()), n.applyMatrix4(e.matrix);
        const i = new Float32Array(n.attributes.position.count * 3);
        for (let r = 0; r < i.length; r += 3)
            i[r] = e.material.color.r, i[r + 1] = e.material.color.g, i[r + 2] = e.material.color.b;
        n.setAttribute("color", new Se(i, 3)), t.push(n), s.remove(e);
    } if (t.length) {
    const e = Gc(t);
    if (e) {
        const n = new qt(e, w0);
        n.castShadow = !0, n.receiveShadow = !0, s.add(n);
    }
    t.forEach(n => n.dispose());
} }
function Ue(s, t, e, n, i, r = 3.5, a = "#d5bf8f") { const o = document.createElement("canvas"); o.width = 512, o.height = 128; const c = o.getContext("2d"); c.fillStyle = "#183e43", c.beginPath(), c.roundRect(0, 0, 512, 128, 16), c.fill(), c.strokeStyle = a, c.lineWidth = 6, c.stroke(), c.fillStyle = a, c.font = "bold 42px system-ui", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, 256, 66, 470); const l = new vc(o); l.colorSpace = De; const h = new qt(new dn(r, r / 4), new bn({ map: l, side: En, depthTest: !0, depthWrite: !0 })); return h.position.set(e, n, i), s.add(h), h; }
function T0(s, t, e, n, i, r, a = 9, o = 8) { const c = new Wt; c.position.set(t, e, n), s.add(c), R(c, "box", "#566966", 0, .22, 0, a + .8, .6, o + .8), R(c, "box", "#d7cdb1", 0, 2.8, 0, a, 5.2, o), m0(c, a + .9, o + 1.1, r), R(c, "box", "#315761", 0, 2.1, o / 2 + .05, 1.8, 3.6, .2), R(c, "box", "#c3dcd4", .45, 2, o / 2 + .22, .13, .13, .12, .4); for (const l of [-a * .32, a * .32])
    R(c, "box", "#657e73", l, 3.1, o / 2 + .13, 2.1, 2, .22), R(c, "box", "#edcf96", l, 3.1, o / 2 + .28, 1.7, 1.6, .09, .45), R(c, "box", "#6f877a", l, 3.1, o / 2 + .36, .1, 1.7, .06); R(c, "box", r, 0, 4.1, o / 2 + 1.15, a + 1, .35, 2.7); for (const l of [-a / 2, a / 2])
    R(c, "cylinder", "#607669", l, 1.9, o / 2 + 2.15, .15, 3.8, .15); return R(c, "box", "#c4b18c", 0, .35, o / 2 + 1.6, a + .3, .32, 2.9), Ue(c, i, 0, 5.37, o / 2 + .77, a * .64), R(c, "cylinder", "#748c87", a * .27, 6.8, -1, .4, 1.4, .4), R(c, "ball", "#adc3b1", -a * .2, 6.35, -1, 1.1, .13, 1.6), g0(c, i, a, o), c; }
function hn(s, t, e, n, i = "#b49c7a", r = 1) { R(s, "box", i, t, e + r * .6, n, r * 1.4, r * 1.2, r * 1.2); for (const a of [-.4, .4])
    R(s, "box", "#5d7773", t + a * r, e + r * .6, n + r * .61, r * .12, r * 1.13, .03); }
function an(s, t, e, n) { R(s, "box", "#ba986b", t, e + .8, n, 2.8, .2, .9), R(s, "box", "#ba986b", t, e + 1.45, n - .42, 2.8, .65, .16); for (const i of [-1, 1])
    R(s, "box", "#485e5c", t + i, e + .4, n, .15, .8, .72); }
function Mn(s, t, e, n, i = "#eed3a0", r = 3.6) { R(s, "cylinder", "#3d5e5c", t, e + r / 2, n, .1, r, .1), R(s, "box", "#3d5e5c", t, e + r, n, .7, .13, .7), R(s, "box", i, t, e + r - .4, n, .4, .65, .4, 1.2), R(s, "box", "#3d5e5c", t, e + r - .77, n, .63, .12, .63); }
function Li(s, t, e, n, i = 1, r = "#88c3b9") { R(s, "cylinder", "#bcb8a0", t, e + .35 * i, n, .13 * i, .7 * i, .13 * i), R(s, "round", r, t, e + .7 * i, n, .62 * i, .26 * i, .6 * i, .2), R(s, "round", "#e5e6b9", t + .16 * i, e + .86 * i, n - .05 * i, .1 * i, .04 * i, .1 * i, .15); }
class A0 {
    yoke = new Wt;
    throttle = new Wt;
    scene = new gc;
    cockpit = new Wt;
    constructor(t) { this.scene.background = new Pt("#0d182b"), this.scene.add(new Ic("#b3c3ed", "#162738", 2)); const e = new Uc("#ffdfbd", 3); e.position.set(-300, 400, 200), this.scene.add(e); const n = Nn(712), i = new Float32Array(1600 * 3); for (let a = 0; a < 1600; a++) {
        const o = n() * Math.PI * 2, c = Math.acos(n() * 2 - 1), l = 19e3;
        i.set([Math.sin(c) * Math.cos(o) * l, Math.cos(c) * l, Math.sin(c) * Math.sin(o) * l], a * 3);
    } const r = new _e; r.setAttribute("position", new Se(i, 3)), this.scene.add(new lo(r, new rr({ color: "#d4dfef", size: 12, sizeAttenuation: !0, fog: !1 }))); for (const a of Object.values(rn)) {
        const o = new On(a.radius, 48, 32), c = o.attributes.position, l = new Float32Array(c.count * 3);
        for (let d = 0; d < c.count; d++) {
            const f = c.getX(d) / a.radius, g = c.getY(d) / a.radius, v = c.getZ(d) / a.radius, m = Math.sin(f * 13 + Math.cos(g * 7)) * Math.cos(v * 11 + g * 4), p = new Pt(a.id === "mosslight" ? m > .15 ? "#91ac85" : "#558eac" : m > .2 ? "#dbb5a0" : "#bc927d");
            Math.abs(g) > .85 && p.set("#e7e2cc"), l.set([p.r, p.g, p.b], d * 3);
        }
        o.setAttribute("color", new Se(l, 3));
        const h = new qt(o, new ye({ vertexColors: !0, roughness: .92 }));
        h.position.fromArray(a.position), this.scene.add(h);
        const u = new qt(new On(a.radius * 1.025, 32, 24), new bn({ color: a.id === "mosslight" ? "#82bfd5" : "#e5b6bd", transparent: !0, opacity: .1, side: Re }));
        if (u.position.copy(h.position), this.scene.add(u), a.id === "orren") {
            const d = new qt(new cr(a.radius * 1.45, a.radius * 1.9, 96), new ye({ color: "#c8b29f", side: Ge, transparent: !0, opacity: .48 }));
            d.position.copy(h.position), d.rotation.x = 1.15, this.scene.add(d);
        }
    } R(this.cockpit, "box", "#344c54", 0, -1.15, -1.65, 4.6, .42, 1.2); for (const a of [-1.65, 1.65])
        R(this.cockpit, "box", "#657e79", a, .2, -1.8, .1, 2.8, .1).rotation.z = a > 0 ? -.13 : .13; R(this.cockpit, "box", "#788f84", 0, 1.48, -1.8, 3.8, .1, .1); for (const a of [-.6, 0, .6])
        R(this.cockpit, "box", "#91c9bd", a, -.91, -1.6, .36, .02, .23, .6); this.scene.add(this.cockpit), this.yoke.position.set(0, -.6, -1.15), this.cockpit.add(this.yoke), R(this.yoke, "cylinder", "#b5c3b5", 0, -.2, 0, .055, .4, .055), R(this.yoke, "box", "#d2b589", 0, 0, 0, .62, .07, .08); for (const a of [-.3, .3])
        R(this.yoke, "box", "#5e827b", a, .07, 0, .085, .22, .12); this.throttle.position.set(.8, -.75, -1.2), this.cockpit.add(this.throttle), R(this.throttle, "cylinder", "#b5c3b5", 0, .12, 0, .025, .3, .025), R(this.throttle, "box", "#d5a56e", 0, .3, 0, .19, .08, .13), this.cockpit.position.set(0, 2.15, -5.4), t.add(this.cockpit); }
    pilot(t, e) { this.yoke.rotation.z = -e.angular.x * .4, this.yoke.rotation.x = e.angular.y * .35, this.throttle.rotation.x = .6 - e.data.throttle * 1.2, t.far = 1e3, t.near = .04, t.updateProjectionMatrix(), t.position.set(0, 2.15, -5.4), t.rotation.order = "YXZ", t.rotation.set(e.data.transit ? -.28 : 0, 0, 0); }
    updateWindow(t, e) { }
}
const Xa = [{ id: "chowder", name: "Harbor chowder", ingredients: [{ id: "fish", count: 1 }, { id: "glowcap", count: 1 }], output: "stew" }, { id: "tea", name: "Sunplum infusion", ingredients: [{ id: "moonfruit", count: 1 }], output: "tea" }];
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
const P0 = () => ({ waypoint: null, trackedQuest: "signal", trackedMarker: null, knownServices: [], knownNPCs: [], knownLandings: ["mosslight_harbor"], unlockedWorlds: ["mosslight"] }), Ya = 3;
function ir() { return { saveSchemaVersion: Ya, timestamp: Date.now(), navigation: P0(), voyage: u0(), activities: { fishCaught: 0, lastCatch: -100, cooked: 0, gardenPlanted: null, decor: "fern", storage: [] }, player: { x: -18, y: 0, z: 42, facing: Math.PI, zone: "outside", stamina: 100 }, inventory: [{ id: "ration", count: 2 }, { id: "battery", count: 1 }], credits: 30, quests: { signal: 0, research: 0, cave: 0, garden: 0, supper: 0 }, flags: {}, collected: [], observed: [], discovered: ["harbor", "ship"], time: 8.2, day: 1, npcs: {} }; }
function Hl() { return { pointerMode: "auto", quality: typeof navigator < "u" && navigator.maxTouchPoints > 0 ? "medium" : "high", sensitivity: 1, master: .55, music: .22, effects: .65, debug: !1, touch: "auto", perspective: "first", fov: 72, headBob: !1, trackpadLook: typeof navigator < "u" && navigator.maxTouchPoints > 0, minimap: !0, minimapOrientation: "north", minimapZoom: "standard", questMarkers: "full", worldMarkers: "minimal", distances: !0, edgeIndicators: !0 }; }
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
function Vc(s) { if (!s || typeof s != "object")
    throw new Error("The save file could not be read."); const t = s, e = t.saveSchemaVersion ?? 1; if (e > Ya)
    throw new Error("This save belongs to a newer version of the game."); if (!t.player || !t.inventory || !Array.isArray(t.inventory))
    throw new Error("Incomplete save data."); const n = ir(), i = { ...n, ...t, navigation: { ...n.navigation, ...t.navigation }, voyage: { ...n.voyage, ...t.voyage }, activities: { ...n.activities, ...t.activities }, player: { ...n.player, ...t.player }, flags: { ...t.flags }, quests: { ...n.quests, ...t.quests }, npcs: { ...t.npcs }, saveSchemaVersion: Ya }, r = u => typeof u == "number" && Number.isFinite(u), a = () => { throw new Error("Invalid save data. Your current journey has not been replaced."); }; (!Number.isInteger(e) || e < 1) && a(), (!["outside", "ship", "cave", "orren", "store", "cafe"].includes(i.player.zone) || ![i.player.x, i.player.y, i.player.z, i.player.facing, i.player.stamina, i.credits, i.time, i.timestamp].every(r)) && a(), (i.credits < 0 || i.player.stamina < 0 || i.player.stamina > 100 || i.time < 0 || i.time >= 24 || !Number.isInteger(i.day) || i.day < 1) && a(); const o = i.player.zone === "outside" || i.player.zone === "orren" ? [235, 225] : i.player.zone === "ship" ? [5.3, 7.6] : i.player.zone === "store" || i.player.zone === "cafe" ? [6.3, 7.3] : [8.3, 16]; (Math.abs(i.player.x) > o[0] || Math.abs(i.player.z) > o[1] || i.player.y < -10 || i.player.y > 100) && a(), (i.inventory.length > 24 || i.inventory.some(u => !u || !ee[u.id] || !Number.isInteger(u.count) || u.count < 1 || u.count > ee[u.id].stackSize)) && a(); for (const u of [i.collected, i.observed, i.discovered])
    (!Array.isArray(u) || u.length > 1e4 || u.some(d => typeof d != "string" || d.length > 160)) && a(); for (const u of Object.keys(Oe))
    (!Number.isInteger(i.quests[u]) || i.quests[u] < 0 || i.quests[u] > 3) && a(); Object.values(i.flags).some(u => typeof u != "boolean") && a(), Object.values(i.npcs).some(u => !u || ![u.x, u.z, u.relationship].every(r) || typeof u.activity != "string") && a(); const c = i.navigation, l = i.voyage, h = i.activities; l.transit && (!["takeoff", "landing"].includes(l.transit.kind) || !r(l.transit.elapsed) || l.transit.elapsed < 0 || l.transit.elapsed > 18 || i.player.zone !== "ship") && a(); for (const u of [c.knownServices, c.knownNPCs, c.knownLandings, c.unlockedWorlds, l.visited])
    (!Array.isArray(u) || u.some(d => typeof d != "string")) && a(); return (!["mosslight", "orren"].includes(l.planet) || !["landed", "manual", "autopilot", "approach"].includes(l.mode) || !Array.isArray(l.position) || l.position.length !== 3 || !l.position.every(r) || l.position.some(u => Math.abs(u) > 13e3)) && a(), (![l.yaw, l.pitch, l.speed, l.throttle].every(r) || l.speed < 0 || l.speed > 100 || l.throttle < 0 || l.throttle > 1 || typeof l.piloting != "boolean") && a(), l.destination !== null && !["mosslight", "orren"].includes(l.destination) && a(), (l.mode === "autopilot" || l.mode === "approach") && !l.destination && a(), [...c.unlockedWorlds, ...l.visited].some(u => !["mosslight", "orren"].includes(u)) && a(), c.trackedQuest !== null && !Oe[c.trackedQuest] && a(), c.trackedMarker !== null && typeof c.trackedMarker != "string" && a(), c.waypoint && (![c.waypoint.x, c.waypoint.z].every(r) || Math.abs(c.waypoint.x) > 235 || Math.abs(c.waypoint.z) > 225 || !["mosslight", "orren"].includes(c.waypoint.worldId) || typeof c.waypoint.label != "string" || c.waypoint.label.length > 160) && a(), (![h.fishCaught, h.lastCatch, h.cooked].every(r) || h.fishCaught < 0 || h.cooked < 0 || h.gardenPlanted !== null && !r(h.gardenPlanted) || !["fern", "sunset", "ocean"].includes(h.decor)) && a(), (!Array.isArray(h.storage) || h.storage.length > 12 || h.storage.some(u => !u || !ee[u.id] || !Number.isInteger(u.count) || u.count < 1 || u.count > ee[u.id].stackSize)) && a(), l.mode !== "landed" && i.player.zone !== "ship" && a(), i.player.zone === "orren" && l.planet !== "orren" && a(), i.flags.repaired && !c.unlockedWorlds.includes("orren") && c.unlockedWorlds.push("orren"), i; }
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
class D0 {
    active = !1;
    anchor = { x: 0, y: 0 };
    offset = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    begin(t, e) { this.cancel(), this.active = !0, this.anchor = { x: t, y: e }; }
    move(t, e) { this.active && (this.offset = { x: t - this.anchor.x, y: e - this.anchor.y }); }
    cancel() { this.active = !1, this.offset = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }; }
    step(t) { t = Math.min(.05, Math.max(0, t)); const e = n => { const i = Math.min(1, Math.max(0, (Math.abs(n) - 7) / 110)); return Math.sign(n) * i * i * 800; }; for (const n of ["x", "y"])
        this.velocity[n] += (this.active ? e(this.offset[n]) - this.velocity[n] : -this.velocity[n]) * (1 - Math.exp(-12 * t)); return { x: this.velocity.x * t, y: this.velocity.y * t }; }
}
const Gl = { KeyW: "MOVE_FORWARD", ArrowUp: "MOVE_FORWARD", KeyS: "MOVE_BACK", ArrowDown: "MOVE_BACK", KeyA: "MOVE_LEFT", ArrowLeft: "MOVE_LEFT", KeyD: "MOVE_RIGHT", ArrowRight: "MOVE_RIGHT", ShiftLeft: "SPRINT", ShiftRight: "SPRINT", Space: "JUMP", KeyE: "INTERACT", Tab: "INVENTORY", KeyI: "INVENTORY", KeyJ: "JOURNAL", KeyM: "MAP", Escape: "PAUSE", KeyV: "PERSPECTIVE" };
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
const Xs = { low: { scale: .7, ratio: 1, shadow: 0, distance: 160 }, medium: { scale: 1, ratio: 1.5, shadow: 1024, distance: 260 }, high: { scale: 1, ratio: 2, shadow: 2048, distance: 390 } };
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
    constructor(t) { this.renderer = new t0({ canvas: t, antialias: !0, powerPreference: "high-performance", alpha: !1 }), this.renderer.outputColorSpace = De, this.renderer.toneMapping = jl, this.renderer.toneMappingExposure = 1.12, this.renderer.shadowMap.type = Yl, this.scene.add(this.sun, this.sun.target, this.hemi, this.ambient), this.sun.castShadow = !0, this.sun.shadow.camera.left = -42, this.sun.shadow.camera.right = 42, this.sun.shadow.camera.top = 42, this.sun.shadow.camera.bottom = -42, this.sun.shadow.camera.near = 1, this.sun.shadow.camera.far = 190, this.sun.shadow.bias = -4e-4, this.sun.shadow.normalBias = .07, this.scene.fog = new ao("#b7d4cb", 100, 360); const e = new en({ side: Re, depthWrite: !1, uniforms: { top: { value: new Pt("#6dadaf") }, bottom: { value: new Pt("#dce4c0") }, sun: { value: new T(1, 1, 0) }, warm: { value: 0 } }, vertexShader: "varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", fragmentShader: "varying vec3 vDir;uniform vec3 top;uniform vec3 bottom;uniform vec3 sun;uniform float warm;void main(){vec3 d=normalize(vDir);float h=pow(max(0.,d.y),.62);vec3 col=mix(bottom,top,h);float horizon=pow(1.-abs(clamp(d.y,-1.,1.)),5.);col+=horizon*vec3(.10,.12,.08)*(0.35+warm*.65);float spot=pow(max(0.,dot(d,normalize(sun))),110.);float halo=pow(max(0.,dot(d,normalize(sun))),18.);col+=spot*vec3(.72,.48,.24)*warm+halo*vec3(.09,.07,.04)*warm;gl_FragColor=vec4(col,1.);}" }); this.sky = new qt(new On(800, 24, 12), e), this.scene.add(this.sky); const n = Nn(381), i = new Float32Array(650 * 3); for (let c = 0; c < 650; c++) {
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
function Wc(s) { const t = new Wt; t.position.set(-25, 0, 34), s.add(t), R(t, "box", "#d4c8ac", 0, 3.2, 0, 6.5, 3.6, 11.7), R(t, "round", "#d4c8ac", 0, 3.05, -5.3, 3.12, 1.75, 2.7), R(t, "box", "#698c86", 0, 4.94, .1, 5.5, .24, 9), R(t, "box", "#315362", 0, 4.07, -5.74, 4.6, 1.5, .48).rotation.x = -.3; for (const e of [-1.26, 1.26])
    R(t, "box", "#76aeb5", e, 4.17, -5.98, 2.03, 1.01, .11, .12).rotation.x = -.3; for (const e of [-4.1, 4.1]) {
    R(t, "box", "#64827d", e, 2.65, .5, 2.35, 2.4, 7.8), R(t, "cylinder", "#304956", e, 2.7, 4.61, .95, .7, .95).rotation.x = Math.PI / 2, R(t, "cylinder", "#a9d4c7", e, 2.7, 5.01, .61, .08, .61, .7).rotation.x = Math.PI / 2, R(t, "box", "#b69365", e, 3.91, .4, 1.75, .1, 4.8);
    for (const n of [-2.5, 3.4])
        xo(t, new T(e * .86, 2, n), new T(e * 1.05, .47, n + .3), .15, "#465b5f"), R(t, "box", "#576e6b", e * 1.05, .27, n + .3, 1.15, .23, 1.55);
} R(t, "box", "#4d6b6d", 3.3, 2.6, .1, .16, 2.5, 2.2), R(t, "box", "#a5cfc1", 3.43, 2.6, .1, .07, 1.88, 1.38, .16); for (let e = 0; e < 4; e++)
    R(t, "box", "#99a69a", 3.8 + e * .38, 1.45 - e * .36, .1, .9, .18, 2.1); for (const e of [-3, 2.4])
    R(t, "box", "#86bac1", -3.29, 3.4, e, .12, .9, 1.7, .2); R(t, "cylinder", "#4f6d6b", 0, 5.5, 2, .13, 1.2, .13), R(t, "round", "#91b9b1", 0, 6.12, 2, .8, .1, .8).rotation.z = .3, Ue(t, "ELSEWHERE · 07", 0, 3.5, 6.03, 4), R(t, "box", "#f2d997", 2.8, 2.1, -6.6, .45, .32, .18, 1.1); }
function F0(s) { R(s, "box", "#354f55", 0, -.3, 0, 12, .6, 18), R(s, "box", "#bdaf91", 0, .05, 0, 10.8, .12, 16.1); for (const e of [-6, 6]) {
    R(s, "box", "#c4c5b0", e, 2.3, 0, .5, 4.6, 18), R(s, "box", "#597974", e * .965, .65, 0, .12, 1.2, 17.8);
    for (const n of [-5, 0, 5])
        R(s, "box", "#e7ce99", e * .958, 3.7, n, .12, .25, 2.5, 1.3);
} R(s, "box", "#657d77", 0, 2.3, -9, 12, 4.6, .45), R(s, "box", "#1f4657", 0, 2.75, -8.73, 9, 2.8, .09), R(s, "box", "#8fbbc3", 0, 2.75, -8.65, 8.6, 2.4, .04, .18), R(s, "box", "#627e79", 0, 2.8, -8.58, .16, 2.5, .1), R(s, "box", "#6e8881", 0, 1.1, -6.8, 6.8, 1.1, 1.2); for (const e of [-1.7, 0, 1.7])
    R(s, "box", "#293f47", e, 1.74, -6.72, 1.32, .16, .82), R(s, "box", "#9ac9b9", e, 1.84, -6.72, .96, .02, .51, .6); R(s, "box", "#324951", 0, .75, -4.4, 1.4, .28, 1.5), R(s, "box", "#648d83", 0, 1.65, -3.87, 1.45, 1.6, .32), R(s, "cylinder", "#4c625e", 0, .34, -4.4, .18, .7, .18), R(s, "box", "#72877d", -4.65, .7, 1.4, 2.25, 1.3, 4.6), R(s, "box", "#d4cfaf", -4.65, 1.46, 1.4, 2.1, .4, 4.4), R(s, "box", "#b58a69", -4.65, 1.72, 2.3, 2.12, .2, 2.6), R(s, "box", "#eee0bf", -4.65, 1.77, -.13, 1.68, .3, .85), R(s, "box", "#79918a", 4.75, 1.55, 4.5, 1.7, 3.1, 2.3), R(s, "box", "#b9c3a4", 3.86, 1.8, 4.5, .1, 2.1, 1.9), R(s, "box", "#344f57", 3.77, 1.8, 4.4, .08, .13, .6), R(s, "box", "#af906b", 4.6, 1.4, .15, 2.3, .27, 3); for (const e of [-1, 1.3])
    R(s, "box", "#53726a", 4.6, .67, e, 1.65, 1.34, .18); hn(s, 4.6, 1.55, .4, "#708e84", .43), R(s, "box", "#35545b", -4.5, 1.9, -4.7, 2.2, 2.5, .7), R(s, "box", "#87c7b3", -4.5, 2.3, -4.28, 1.7, 1.2, .1, .5), Ue(s, "SHIP STATUS", -4.5, 3.35, -4.18, 2.2), R(s, "box", "#7e978a", 0, .13, 3.7, 3.5, .04, 4), R(s, "round", "#ccad7e", -3.9, 2.1, 3.7, .24, .32, .24), Mn(s, -4.7, 1.3, 3.35, "#f0d3a0", 1.4), Ue(s, "THE LITTLE ELSEWHERE", 0, 2.8, 7.7, 3.5).rotation.y = Math.PI, R(s, "box", "#476c69", 0, .1, 7.5, 2.6, .2, .9); const t = new hs("#ffdb9d", 18, 16, 2); t.position.set(0, 3.5, 0), s.add(t); }
function O0(s) { R(s, "box", "#3c5158", 0, -.3, -1, 19, .6, 33); for (const n of [-9.2, 9.2])
    for (let i = 0; i < 8; i++)
        R(s, "ball", i % 2 ? "#4a6065" : "#53666a", n, 2.5, -14 + i * 4, 2.3, 4.7, 3.7), R(s, "cone", "#43575e", n * .83, 5.5, -13 + i * 4, .7, 3, .7).rotation.z = .2; R(s, "ball", "#43565e", 0, 3.2, -17.6, 10, 5, 2.4), R(s, "box", "#776f5c", 0, 1.1, -12, 4, .18, 1.7); for (const n of [-1.4, 1.4])
    R(s, "box", "#546467", n, .5, -12, .2, 1, 1.3); R(s, "box", "#aecbc0", 0, 1.3, -11.8, .9, .24, .65, .3), Ue(s, "SURVEY 01 · E. WREN", 0, 3.3, -15.5, 4.8), hn(s, -5, 0, -9), hn(s, -5.9, 0, -6.9, "#817b6b"), an(s, 4, 0, -11); for (let n = 0; n < 13; n++) {
    const i = (n % 2 ? -1 : 1) * (5.9 + n % 3 * .3), r = -12 + n * 2;
    R(s, "cone", "#96bdc9", i, .8, r, .34, 1.7 + n % 3 * .5, .34, .6).rotation.z = n % 2 ? .23 : -.2;
} Mn(s, 0, 0, 8, "#b4d4c4", 2.8), Mn(s, -3, 0, -11, "#efd3a1", 2.6); const t = new hs("#83c6d7", 25, 26, 2); t.position.set(0, 3, -1), s.add(t); const e = new hs("#f4d1a0", 12, 12, 2); e.position.set(-3, 2, -11), s.add(e), Ue(s, "DAYLIGHT →", 0, 2.4, 13.8, 3.2).rotation.y = Math.PI; }
function k0(s) { const t = s.orren, e = new Wt, n = Nn(981), i = new dn(520, 520, 100, 100); i.rotateX(-Math.PI / 2); const r = i.attributes.position, a = new Float32Array(r.count * 3); for (let u = 0; u < r.count; u++) {
    const d = r.getX(u), f = r.getZ(u), g = Ot(d, f, "orren");
    r.setY(u, g);
    const v = new Pt(g > 7 ? "#be916f" : u % 3 ? "#d6b28d" : "#c7a98b");
    a.set([v.r, v.g, v.b], u * 3);
} i.setAttribute("color", new Se(a, 3)), i.computeVertexNormals(); const o = new qt(i, new ye({ vertexColors: !0, roughness: .96 })); o.receiveShadow = !0, t.add(o); const c = new Wt; Wc(c), t.add(c), s.hulls.push(c), s.colliders.push({ x: -25, z: 34, radius: 5.6, height: 5.8, zone: "orren" }), s.addInteraction("orren_ship", "Enter your ship", -18, 0, 34, "orren", "ship", 5, 5); const l = new qt(new ar(1, 48), new ye({ color: "#73bfc1", metalness: .28, roughness: .22, transparent: !0, opacity: .87 })); l.rotation.x = -Math.PI / 2, l.position.set(35, Ot(35, 0, "orren") + .1, 0), l.scale.set(17, 13, 1), t.add(l), s.colliders.push({ x: 35, z: 0, radius: 12, height: 10, zone: "orren" }); for (const [u, d, f] of [[-75, -66, 1], [83, -79, .7], [138, -102, 1.2]]) {
    const g = Ot(u, d, "orren"), v = new yc([new T(-12, 0, 0), new T(-11, 14, -1), new T(0, 23, 0), new T(11, 14, 1), new T(12, 0, 0)]), m = new qt(new po(v, 36, 1.55, 8, !1), new ye({ color: "#d8aa94", roughness: .79 }));
    m.position.set(u, g, d), m.scale.setScalar(f), m.castShadow = !0, e.add(m);
    for (const p of [-1, 1])
        s.colliders.push({ x: u + p * 12 * f, z: d, radius: 1.8 * f, height: 18, zone: "orren" });
} const h = Ot(83, -79, "orren"); R(e, "cylinder", "#7a9187", 83, h + .17, -79, 7, .34, 7); for (const u of [78, 88])
    for (const d of [-84, -74])
        R(e, "cylinder", "#678a84", u, h + 2, d, .17, 4, .17), R(e, "round", "#d9c9a0", u, h + 4, d, .38, .2, .38); R(e, "box", "#e0c19b", 83, h + 1, -79, 3, 1.7, 1.8), Li(e, 83, h + 2, -79, 2.7, "#dfa8bd"), Ue(e, "LISTENING GARDEN · 02", 83, h + 3.7, -82, 6), an(e, 78, h, -72), Mn(e, 89, h, -72, "#c2dfd0"), s.addInteraction("orren_seed", "Examine the cinderbloom", 83, h + 1, -79, "orren", "seed", 4, 5), s.addInteraction("orren_post", "Read the garden log", 78, h, -72, "orren", "orren_log", 3, 3), s.addInteraction("orren_seat", "Sit beneath the petal arch", -75, Ot(-75, -66, "orren"), -66, "orren", "sit", 5, 2), Ue(e, "CINDERBLOOM ANCHORAGE", -13, 2.8, 24, 6), Mn(e, -14, 0, 28), hn(e, -12, 0, 22, "#8eaaa0"); for (let u = 0; u < 75; u++) {
    const d = (n() - .5) * 370, f = (n() - .5) * 350;
    if (Math.hypot(d + 25, f - 34) < 20 || Math.hypot(d - 83, f + 79) < 13 || Math.hypot(d - 35, f) < 23)
        continue;
    const g = Ot(d, f, "orren"), v = 3 + n() * 5;
    R(e, "cylinder", "#827569", d, g + v / 2, f, .16, v, .16);
    for (let m = 0; m < 3; m++)
        R(e, "round", u % 3 ? "#d3a8ad" : "#e0bd82", d + (m - 1) * 1.1, g + v - .2 * Math.abs(m - 1), f, 1.5, .65, 1.7);
    s.colliders.push({ x: d, z: f, radius: .24, height: v, zone: "orren" });
} for (let u = 0; u < 22; u++) {
    const d = -8 + n() * 120, f = 12 - n() * 125, g = Ot(d, f, "orren"), v = "orren_fruit_" + u, m = new Wt;
    m.position.set(d, g, f), Li(m, 0, 0, 0, 1.3, "#acb9a1"), R(m, "round", "#f0b86f", 0, 1.2, 0, .24, .28, .24), ms(m), t.add(m), s.pickups.set(v, m), s.addInteraction(v, "Gather sunplum", d, g, f, "orren", "pickup", 2.8, 2, "moonfruit").enabled = () => !s.state.data.collected.includes(v);
} t.add(wi(e)); }
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
    } t.setAttribute("color", new Se(n, 3)), t.computeVertexNormals(); const a = new qt(t, new ye({ vertexColors: !0, roughness: .88, map: v0() })); a.receiveShadow = !0, this.outside.add(a); const o = new en({ transparent: !0, depthWrite: !1, side: Ge, uniforms: { time: { value: 0 }, light: { value: 1 } }, vertexShader: "varying vec2 vUv; varying vec3 vWorld; uniform float time; void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*.6+time*.9)*.045+cos(p.y*.5+time)*.035;vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}", fragmentShader: "varying vec2 vUv;varying vec3 vWorld;uniform float time;uniform float light;void main(){float w=sin(vWorld.x*1.1+vWorld.z*.65+time*.6)*sin(vWorld.z*1.45-time*.9);float r=smoothstep(.76,.96,w);float edge=smoothstep(.38,.5,length(vUv-.5));vec3 col=mix(vec3(.20,.46,.49),vec3(.55,.76,.69),.35+.15*sin(vWorld.z*.18+time*.35));col+=r*.19+edge*.13;gl_FragColor=vec4(col*(.3+.7*light),.78);}" }); this.water = new qt(new ar(1, 72), o), this.water.rotation.x = -Math.PI / 2, this.water.position.set(76, -2, -12), this.water.scale.set(35, 25, 1), this.outside.add(this.water); }
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
        i.forEach((h, u) => { e.position.set(h.x, h.y + h.h / 2, h.z), e.scale.set(h.s, h.h, h.s), e.rotation.set(0, h.x, 0), e.updateMatrix(), a.setMatrixAt(u, e.matrix); }), a.castShadow = !0, a.receiveShadow = !0, this.outside.add(a), this.trees = new Fr(new On(1, 10, 7), new ye({ roughness: .78 }), n.length);
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
        const s = new Wt;
        for (let h = 0; h < 54; h++) {
            const u = t() * Math.PI * 2, d = 30 + t() * 58, f = Math.cos(u) * d, g = Math.sin(u) * d;
            if (Si(f, g) || qs(f, g) < 4 || Math.hypot(f + 25, g - 34) < 13)
                continue;
            const v = Ot(f, g), m = .55 + t() * .7;
            R(s, "ball", h % 4 === 0 ? "#9fb987" : h % 3 === 0 ? "#6f9875" : "#7fa47a", f, v + .42 * m, g, 1.05 * m, .72 * m, .95 * m);
            if (h % 3 === 0) {
                const p = h % 2 ? "#e5c28d" : "#d7a6a6";
                for (let y = 0; y < 3; y++)
                    R(s, "round", p, f + (y - 1) * .28 * m, v + .9 * m + (y % 2) * .12, g + .08, .11 * m, .11 * m, .11 * m);
            }
        }
        for (let h = 0; h < 34; h++) {
            const u = (t() - .5) * 72, d = (t() - .5) * 72;
            if (Math.hypot(u, d) < 13 || Si(u, d))
                continue;
            const f = Ot(u, d), g = .8 + t() * .8;
            R(s, "round", h % 2 ? "#799a75" : "#8cab78", u, f + .24, d, .72 * g, .32 * g, .62 * g);
        }
        this.outside.add(wi(s));
    }
    makeHarbor() { const t = new Wt, e = [[-19, -17, "SELA · REPAIRS", "#628d88", 9, 8], [15, -18, "OREN · PROVISIONS", "#b28b62", 10, 8], [-1, 4, "THE WARM KETTLE", "#b28479", 10, 8], [20, -38, "FIELD STATION", "#7894a1", 9, 7], [-25, -38, "HOMESTEAD 01", "#7e9982", 8, 7], [34, -39, "HOMESTEAD 02", "#b99977", 8, 7], [36, -9, "TRAIL SHELTER", "#739287", 7, 7]]; for (const [r, a, o, c, l, h] of e) {
        const u = Ot(r, a);
        T0(t, r, u, a, o, c, l, h), R(t, "box", "#c7b895", r, u + .12, a + h / 2 + .62, Math.min(3.1, l * .42), .24, 1.35), R(t, "box", "#6d8478", r - l * .28, u + 1.35, a + h / 2 + .12, 1.65, .28, .34), R(t, "box", "#6d8478", r + l * .28, u + 1.35, a + h / 2 + .12, 1.65, .28, .34), R(t, "ball", "#7fa079", r - l * .28, u + 1.68, a + h / 2 + .18, .62, .42, .34), R(t, "ball", "#8dae80", r + l * .28, u + 1.68, a + h / 2 + .18, .62, .42, .34), this.colliders.push({ x: r, z: a, radius: Math.max(l, h) * .53, halfX: l / 2, halfZ: h / 2, zone: "outside", height: 6.6 });
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
const jr = { radius: .4 };
function $a(s, t, e, n, i) { return i.some(r => r.zone === n && e < Ot(r.x, r.z, n) + r.height && (r.halfX !== void 0 ? Math.abs(s - r.x) < r.halfX + jr.radius && Math.abs(t - r.z) < (r.halfZ ?? r.radius) + jr.radius : Math.hypot(s - r.x, t - r.z) < r.radius + jr.radius)); }
function Vl(s, t, e, n) { for (let i = 0; i <= 12; i += .5)
    for (let r = 0; r < Math.PI * 2; r += Math.PI / 12) {
        const a = s + Math.cos(r) * i, o = t + Math.sin(r) * i;
        if (!$a(a, o, Ot(a, o, e), e, n))
            return { x: a, z: o };
    } return { x: 0, z: e === "ship" ? 5 : 10 }; }
function B0(s, t, e, n, i, r, a) { const o = Math.max(1, Math.ceil(Math.hypot(e, n) / .16)); for (let c = 0; c < o; c++)
    $a(s + e / o, t, i, r, a) || (s += e / o), $a(s, t + n / o, i, r, a) || (t += n / o); return { x: s, z: t }; }
class qc {
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
    constructor(t) { this.blinkClock = t.height * 2, this.root.add(this.body), this.root.scale.setScalar(t.height), R(this.body, "box", t.color, 0, 1.3, 0, .79, .82, .44), R(this.body, "box", "#455a63", 0, .86, 0, .69, .25, .42), R(this.body, "box", "#b7d5cc", 0, 1.58, .237, .15, .2, .04, .2), R(this.body, "box", "#e9dbb8", .21, 1.46, .24, .15, .05, .035), this.head.position.set(0, 1.91, 0), this.body.add(this.head), R(this.head, "round", t.skin, 0, .16, 0, .39, .44, .34); for (const e of [-.14, .14])
        R(this.head, "round", "#f5e5cf", e, .2, .304, .085, .09, .036), R(this.head, "round", "#273c3a", e, .2, .337, .044, .063, .019); R(this.head, "round", t.skin, 0, .08, .344, .072, .07, .074), this.mouth = R(this.head, "round", "#965d52", 0, -.04, .325, .09, .018, .025); for (const e of [-1, 1])
        R(this.head, "round", t.skin, e * .38, .14, 0, .09, .14, .09), R(this.head, "round", "#d0937b", e * .24, .01, .265, .075, .045, .025), this.brows.push(R(this.head, "box", t.hair, e * .14, .32, .3, .13, .025, .025)); if (R(this.head, "round", t.hair, 0, .45, -.035, .405, .25, .35), R(this.head, "box", t.hair, -.2, .32, .23, .3, .16, .22).rotation.z = -.18, t.style === "bun" && R(this.head, "ball", t.hair, 0, .5, -.36, .24, .27, .23), t.style === "puff")
        for (const e of [-.24, 0, .24])
            R(this.head, "ball", t.hair, e, .55, -.08, .24, .25, .25); if (t.style === "bob")
        for (const e of [-.32, .32])
            R(this.head, "box", t.hair, e, .08, -.03, .19, .63, .47); if (t.style === "cap" && (R(this.head, "round", "#aebfa4", 0, .47, -.025, .44, .24, .4), R(this.head, "box", "#617b70", 0, .44, .32, .8, .09, .47)), t.accessory === "goggles")
        for (const e of [-.16, .16])
            R(this.head, "cylinder", "#9fbebb", e, .49, .26, .11, .06, .11).rotation.x = Math.PI / 2; t.accessory === "apron" && R(this.body, "box", "#eee0b8", 0, 1.15, .25, .55, .68, .045), t.accessory === "pack" && (R(this.body, "box", "#caab78", 0, 1.32, -.36, .64, .73, .3), R(this.body, "box", "#778d83", 0, 1.32, -.53, .48, .12, .08)); for (const e of [-1, 1]) {
        const n = new Wt;
        n.position.set(e * .51, 1.61, 0), this.body.add(n), R(n, "box", t.color, 0, -.22, 0, .28, .54, .31), R(n, "round", t.skin, 0, -.54, 0, .16, .17, .16), this.arms.push(n);
        const i = new Wt;
        i.position.set(e * .21, .88, 0), this.body.add(i), R(i, "box", "#465b68", 0, -.32, 0, .3, .61, .31), R(i, "box", "#343f45", 0, -.72, .07, .34, .28, .48), this.legs.push(i);
    } for (const e of [-.14, .14]) {
        const n = new Wt;
        n.position.set(e, .2, .343), this.head.add(n), R(n, "round", t.skin, 0, 0, 0, .09, .098, .025), n.visible = !1, this.lids.push(n);
    } ms(this.body); }
    animate(t, e, n, i, r = 0) { this.blinkClock += t; const a = this.blinkClock % 4.7 > 4.54; this.lids.forEach(c => c.visible = a), this.facing = Bc(this.facing, i, 13, t), this.root.rotation.y = this.facing, this.phase += t * (e > .1 ? e * 2.45 : 1.8); const o = Math.min(.85, e * .105); for (let c = 0; c < 2; c++) {
        const l = Math.sin(this.phase + c * Math.PI);
        this.legs[c].rotation.x = Mi(this.legs[c].rotation.x, n ? l * o : -.3, 15, t), this.arms[c].rotation.x = Mi(this.arms[c].rotation.x, n ? -l * o : .65, 15, t), this.arms[c].rotation.z = Mi(this.arms[c].rotation.z, 0, 9, t), this.arms[c].rotation.y = Mi(this.arms[c].rotation.y, 0, 9, t);
    } this.body.position.y = n ? e > .1 ? Math.abs(Math.sin(this.phase)) * .065 : Math.sin(this.phase) * .013 : 0, this.body.rotation.z = Mi(this.body.rotation.z, n ? Math.sin(this.phase) * o * .022 : 0, 5, t), this.head.rotation.y = Mi(this.head.rotation.y, Math.max(-.65, Math.min(.65, r)), 4, t), this.head.rotation.z = Mi(this.head.rotation.z, 0, 7, t), this.head.rotation.x = Mi(this.head.rotation.x, 0, 7, t), this.mouth && (this.mouth.scale.x = Mi(this.mouth.scale.x, 1, 10, t), this.mouth.scale.y = Mi(this.mouth.scale.y, 1, 10, t), this.mouth.position.y = Mi(this.mouth.position.y, -.04, 10, t)), this.brows.forEach(c => { c.position.y = Mi(c.position.y, .32, 10, t), c.rotation.z = Mi(c.rotation.z, 0, 10, t); }); }
    socialPose(t, e, n = 1) {
        const i = de(n, 0, 1), r = this.arms[1], a = Math.sin(this.phase * 5.2);
        if (this.mouth) this.mouth.scale.x = Mi(this.mouth.scale.x, 1 + .22 * i, 12, t), this.mouth.scale.y = Mi(this.mouth.scale.y, .78, 12, t), this.mouth.position.y = Mi(this.mouth.position.y, -.025, 12, t);
        this.brows.forEach((o, c) => { o.position.y = Mi(o.position.y, .35, 12, t), o.rotation.z = Mi(o.rotation.z, (c === 0 ? -.08 : .08) * i, 12, t); });
        if (e === "wave") {
            r.rotation.z = Mi(r.rotation.z, 2.38, 10, t), r.rotation.x = Mi(r.rotation.x, -.08 + a * .16, 12, t), r.rotation.y = Mi(r.rotation.y, .05, 10, t), this.head.rotation.z = Mi(this.head.rotation.z, -.055, 8, t);
        } else if (e === "nod") {
            this.head.rotation.x = Mi(this.head.rotation.x, .04 + Math.sin(this.phase * 2.5) * .055 * i, 8, t);
        } else if (e === "grin") {
            this.head.rotation.z = Mi(this.head.rotation.z, .035, 8, t);
        }
    }
}
class H0 {
    constructor(t, e) { this.input = t, this.colliders = e; }
    input;
    colliders;
    avatar = new qc({ color: "#e5b581", skin: "#d7a07d", hair: "#443a35", style: "short", height: 1, accessory: "pack" });
    position = new T;
    velocity = new T;
    facing = Math.PI;
    grounded = !0;
    stamina = 100;
    zone = "outside";
    foodTimer = 0;
    speed = 0;
    step = 0;
    onStep = () => { };
    onJump = () => { };
    load(t) { this.zone = t.zone, this.position.set(t.x, Math.max(t.y, Ot(t.x, t.z, t.zone)), t.z); const e = Vl(this.position.x, this.position.z, this.zone, this.colliders); this.position.x = e.x, this.position.z = e.z, this.facing = t.facing, this.stamina = t.stamina, this.velocity.set(0, 0, 0), this.grounded = !0, this.foodTimer = 0, this.avatar.facing = t.facing, this.avatar.root.position.copy(this.position); }
    snapshot() { return { x: this.position.x, y: this.position.y, z: this.position.z, facing: this.facing, zone: this.zone, stamina: this.stamina }; }
    teleport(t, e, n = this.zone) { this.zone = n; const i = Vl(t, e, n, this.colliders); t = i.x, e = i.z, this.position.set(t, Ot(t, e, n), e), this.velocity.set(0, 0, 0), this.avatar.root.position.copy(this.position); }
    update(t, e) { const n = this.input.movement(), i = Math.hypot(n.x, n.y) > .04, r = this.input.down("SPRINT") && this.stamina > 1 && i, a = this.zone === "outside" || this.zone === "orren" ? r ? 10 : 5.7 : r ? 5.7 : 3.8; this.foodTimer = Math.max(0, this.foodTimer - t), this.stamina = de(this.stamina + (r && this.foodTimer === 0 ? -12 : 17) * t, 0, 100); const o = Math.cos(e) * n.x - Math.sin(e) * n.y, c = -Math.sin(e) * n.x - Math.cos(e) * n.y; this.velocity.x = Mi(this.velocity.x, o * a, this.grounded ? 13 : 4, t), this.velocity.z = Mi(this.velocity.z, c * a, this.grounded ? 13 : 4, t), this.input.pop("JUMP") && this.grounded && (this.velocity.y = 7.6, this.grounded = !1, this.onJump()), this.velocity.y -= 22 * t; let l = this.position.x + this.velocity.x * t, h = this.position.z + this.velocity.z * t; if (this.zone === "outside" || this.zone === "orren") {
        if (l = de(l, -235, 235), h = de(h, -225, 220), this.zone === "outside" && Si(l, h) && !(l >= 43 && l <= 52.3 && h >= -8.5 && h <= -5.5)) {
            const v = Math.atan2((h + 12) / 21, (l - 76) / 30);
            l = 76 + Math.cos(v) * 30.3, h = -12 + Math.sin(v) * 21.3;
        }
    }
    else {
        const v = this.zone === "store" || this.zone === "cafe";
        l = de(l, this.zone === "ship" ? -5.3 : v ? -6.3 : -8.3, this.zone === "ship" ? 5.3 : v ? 6.3 : 8.3), h = de(h, this.zone === "ship" ? -7.6 : v ? -7.3 : -16, this.zone === "ship" ? 7.6 : v ? 7.3 : 14);
    } const u = B0(this.position.x, this.position.z, l - this.position.x, h - this.position.z, this.position.y, this.zone, this.colliders); l = u.x, h = u.z; const d = Ot(this.position.x, this.position.z, this.zone); Ot(l, h, this.zone) - d > Math.max(.5, Math.hypot(this.velocity.x, this.velocity.z) * t * .92) && this.grounded && (l = this.position.x, h = this.position.z), this.position.x = l, this.position.z = h, this.position.y += this.velocity.y * t, (this.zone === "ship" || this.zone === "store" || this.zone === "cafe") && this.position.y > 2.2 && (this.position.y = 2.2, this.velocity.y = Math.min(0, this.velocity.y)); const g = Ot(l, h, this.zone); this.position.y <= g && (this.position.y = g, this.velocity.y = 0, this.grounded = !0), this.speed = Math.hypot(this.velocity.x, this.velocity.z), i && (this.facing = Math.atan2(o, c)), this.avatar.root.position.copy(this.position), this.avatar.animate(t, this.speed, this.grounded, this.facing), this.grounded && this.speed > 1 && (this.step += t * this.speed, this.step > 2.8 && (this.step = 0, this.onStep())); }
}
class G0 {
    constructor(t, e, n) { this.camera = t, this.input = e, this.colliders = n; }
    camera;
    input;
    colliders;
    yaw = .24;
    pitch = 0;
    distance = 9;
    target = new T;
    firstPerson = !0;
    headBob = !1;
    speed = 0;
    bob = 0;
    desired = new T;
    actualDistance = 9;
    update(t, e, n, i, r = !1) { if (this.yaw -= this.input.look.x * .003 * i, this.pitch = de(this.pitch + this.input.look.y * .0025 * i, this.firstPerson ? -1.35 : -.13, this.firstPerson ? 1.35 : 1.15), this.distance = de(this.distance + this.input.zoom, 3, 17), this.input.look.x = 0, this.input.look.y = 0, this.input.zoom = 0, this.target.copy(e), this.target.y += Math.min(1.68, n === "ship" || n === "store" || n === "cafe" ? Math.max(.3, 3.9 - e.y) : 1.68), this.camera.near = .04, this.camera.updateProjectionMatrix(), this.firstPerson) {
        this.bob += t * this.speed * 1.7, this.camera.position.copy(this.target), this.headBob && this.speed > 1 && (this.camera.position.y += Math.sin(this.bob) * .025), this.camera.rotation.order = "YXZ", this.camera.rotation.set(-this.pitch, this.yaw, 0);
        return;
    } const a = n === "outside" || n === "orren", o = a ? this.distance : Math.min(this.distance, 5.2), c = new T(Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), Math.cos(this.yaw) * Math.cos(this.pitch)); let l = o; for (let h = .6; h < o; h += .35) {
        const u = this.target.clone().addScaledVector(c, h);
        let d = u.y < Ot(u.x, u.z, n) + .25;
        a || (d = d || Math.abs(u.x) > (n === "ship" ? 5.6 : n === "cave" ? 8.7 : 6.5) || u.z > (n === "ship" ? 8 : n === "cave" ? 14.5 : 7.5) || u.z < (n === "ship" ? -8 : n === "cave" ? -16.5 : -7.5));
        for (const f of this.colliders)
            if (f.zone === n && u.y < Ot(f.x, f.z, n) + f.height && (f.halfX !== void 0 ? Math.abs(u.x - f.x) < f.halfX + .18 && Math.abs(u.z - f.z) < (f.halfZ ?? f.radius) + .18 : Math.hypot(u.x - f.x, u.z - f.z) < f.radius + .18)) {
                d = !0;
                break;
            }
        if (d) {
            l = Math.max(.6, h - .35);
            break;
        }
    } this.actualDistance = l < this.actualDistance ? l : Ba.lerp(this.actualDistance, l, 1 - Math.exp(-4 * t)), this.desired.copy(this.target).addScaledVector(c, this.actualDistance), r ? this.camera.position.copy(this.desired) : this.camera.position.lerp(this.desired, 1 - Math.exp(-14 * t)), this.camera.lookAt(this.target); }
}
function Zr(s, t) { const e = Ln[t]; return s < 6 || s >= 22 ? { x: e.home.x + (t % 2 ? 2 : -2), z: e.home.z + 6, activity: "Off duty" } : s < 8 ? { x: e.work.x, z: e.work.z + 3, activity: "Starting the day" } : s >= 12 && s < 14 ? { x: -7 + t % 3 * 5, z: 17 + Math.floor(t / 3) * 3, activity: "Lunch at the café" } : s >= 18 && s < 22 ? { x: -9 + t * 4.8, z: 2 + t % 2 * 3, activity: "Evening in the square" } : { x: e.work.x, z: e.work.z, activity: ["Tuning field equipment", "Tending the shop", "Taking field notes", "Putting the kettle on", "Checking the trails"][t] }; }
class V0 {
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
}
function W0(s, t) { return s < 3.3 ? "Fleeing" : s < 8 ? "Curious" : t ? "Wandering" : "Grazing"; }
class q0 {
    constructor(t, e, n) { this.state = e, [[-34, 4], [-47, -53], [-74, -80], [-93, -104], [46, 9], [59, -39], [100, -36], [69, 38]].forEach(([o, c], l) => { const h = new Wt, u = new Wt, d = new Wt, f = []; h.add(u); const g = l % 2 ? "#bbbea0" : "#93b5a0"; R(u, "round", g, 0, .86, 0, .68, .65, 1.06), R(u, "round", "#d9d6b1", 0, .75, .65, .46, .4, .44), R(u, "round", g, 0, 1.02, -1.06, .19, .22, .35), d.position.set(0, 1.26, .82), u.add(d), R(d, "round", g, 0, 0, 0, .41, .42, .47), R(d, "round", "#dddcb8", 0, -.11, .37, .3, .22, .21); for (const p of [-1, 1]) {
        R(d, "round", g, p * .27, .54, -.05, .17, .61, .14).rotation.z = -p * .23, R(d, "round", "#caccaa", p * .27, .53, .075, .088, .41, .024).rotation.z = -p * .23, R(d, "round", "#2a4142", p * .32, .05, .28, .065, .085, .044);
        for (const E of [-.6, .57]) {
            const S = new Wt;
            S.position.set(p * .4, .6, E), h.add(S), R(S, "box", "#647f74", 0, -.28, 0, .19, .55, .24), f.push(S);
        }
    } for (let p = 0; p < 4; p++)
        R(u, "round", "#d8e4af", (p % 2 ? -1 : 1) * .59, 1.05, -.58 + Math.floor(p / 2) * .65, .09, .12, .14, .25); ms(h), h.position.set(o, Ot(o, c), c), h.scale.setScalar(l % 3 === 0 ? .83 : 1), t.add(h); const v = "creature_mossling_" + l.toString().padStart(3, "0"), m = { id: v, label: "Observe mossling", x: o, y: 0, z: c, zone: "outside", radius: 7.5, priority: 1, kind: "observe", enabled: () => !e.data.observed.includes(v) }; n.push(m), this.creatures.push({ id: v, root: h, head: d, legs: f, home: { x: o, z: c }, target: { x: o, z: c }, mood: "Grazing", facing: 0, phase: l, timer: 1 + l * .3, interaction: m }); }); const r = new _e, a = new Float32Array(270); for (let o = 0; o < 90; o++) {
        const c = -40 - this.random() * 75, l = -30 - this.random() * 110;
        a.set([c, Ot(c, l) + 1 + this.random() * 4, l], o * 3);
    } r.setAttribute("position", new Se(a, 3)), this.motes = new lo(r, new rr({ color: "#c8efb1", size: .19, transparent: !0, opacity: .85, blending: Qr, depthWrite: !1 })), t.add(this.motes); }
    state;
    creatures = [];
    motes;
    random = Nn(372);
    tick = 0;
    update(t, e, n) { this.tick += t, this.motes.visible = n < 6.5 || n > 18.5, this.motes.position.y = Math.sin(this.tick * .3) * .35; for (const i of this.creatures) {
        const r = i.root.position, a = us(r, e);
        if (a > 100) {
            i.root.visible = !1;
            continue;
        }
        i.root.visible = !0, i.timer -= t, i.timer < 0 && (i.target = { x: i.home.x + (this.random() - .5) * 16, z: i.home.z + (this.random() - .5) * 16 }, i.timer = 3 + this.random() * 6);
        const o = us(r, i.target);
        i.mood = W0(a, o > 1 && i.timer < 4);
        let c = 0, l = 0, h = 0;
        i.mood === "Fleeing" ? (c = r.x - e.x, l = r.z - e.z, h = 4.3, i.timer = 1) : i.mood === "Curious" ? i.facing = Math.atan2(e.x - r.x, e.z - r.z) : i.mood === "Wandering" && (c = i.target.x - r.x, l = i.target.z - r.z, h = .85);
        const u = Math.hypot(c, l);
        if (h && u > .01) {
            const d = de(r.x + c / u * h * t, i.home.x - 24, i.home.x + 24), f = de(r.z + l / u * h * t, i.home.z - 24, i.home.z + 24);
            Si(d, f) || (r.x = d, r.z = f), i.facing = Math.atan2(c, l);
        }
        i.phase += t * (h ? h * 4.5 : 1.7), r.y = Ot(r.x, r.z) + (h ? Math.abs(Math.sin(i.phase)) * .07 : 0), i.root.rotation.y = Bc(i.root.rotation.y, i.facing, 5, t), i.head.rotation.x = i.mood === "Grazing" ? Math.sin(this.tick * .7) * .13 + .28 : Math.sin(this.tick) * .025, i.legs.forEach((d, f) => d.rotation.x = Math.sin(i.phase + (f === 0 || f === 3 ? 0 : Math.PI)) * Math.min(.7, h * .3)), i.interaction.x = r.x, i.interaction.z = r.z, i.interaction.y = r.y, i.interaction.label = i.mood === "Fleeing" ? "Let the mossling settle" : "Observe mossling";
    } }
}
function X0(s, t) { return (ja[s] ?? []).find(e => t.conditions(tn[e].conditions)) ?? null; }
function Xc(s, t) { return tn[s].responses.filter(e => t.conditions(e.conditions)); }
const $i = s => s.replace(/[&<>"']/g, t => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
class Y0 {
    constructor(t, e, n) {
        this.state = t, this.actions = e, this.settings = n, this.root = document.getElementById("ui"), this.root.innerHTML = `<div id="title" class="title-screen"><div class="title-shade"></div><div class="title-copy"><div class="eyebrow"><span class="orbit-mark">✧</span> A SMALL PLACE BENEATH A BIG SKY</div><h1>Mosslight<br><em>Harbor</em></h1><p class="intro">Your ship can wait.<br>Something in the forest is calling.</p><div class="title-buttons"><button id="continue" class="primary" disabled>Continue your journey <span>↗</span></button><button id="new-game">Begin a new journey <span>＋</span></button><button id="title-settings" class="quiet">Settings & controls</button><button id="title-fullscreen" class="quiet title-fullscreen">⛶ Full screen</button></div></div><div class="title-footer"><span>AN EXPLORATION RPG <b>·</b> EARLY DEMO ${Jr}</span><span>Made for wandering.</span></div><div class="title-location"><span class="eyebrow">YOUR FIRST LANDING</span><strong>Mosslight Harbor</strong><span>Weather fair · Navigation uncertain</span></div></div>
  <div id="hud" hidden><div class="top-left"><div class="wordmark">✧ <b>MOSSLIGHT</b> / HARBOR</div><div id="location">THE LANDING MEADOW</div><button id="quest-pin" class="quest-pin"><span class="eyebrow">EXPLORER’S LOG</span><strong>A signal among the leaves</strong><span id="objective">Find Sela at the workshop.</span></button></div><div class="top-right"><div class="time"><span id="clock">08:12</span><span id="day">DAY 1</span></div><nav><button data-panel="inventory" title="Inventory (Tab)">▦ <span>Pack</span></button><button data-panel="journal" title="Journal (J)">☷ <span>Journal</span></button><button data-panel="map" title="Map (M)">⌖ <span>Map</span></button><button id="pause-button" aria-label="Pause">Ⅱ</button></nav></div><button id="fullscreen-fab" class="fullscreen-fab" aria-label="Toggle fullscreen">⛶ <span>Full screen</span></button><div id="compass">N · · · E</div><button id="interaction" class="interaction" hidden><kbd>E</kbd><span>Interact</span><small>↗</small></button><div class="bottom-strip"><div class="stamina-label"><span id="stamina-name">BREATH</span><div class="stamina-track"><i id="stamina-bar"></i></div></div><span id="credits">30 cr</span><span class="divider"></span><span id="save-status">AUTOSAVE ON</span></div><div id="control-hint" class="control-hint"><span><kbd>W A S D</kbd> move</span><span>Drag / click · look</span><span><kbd>Space</kbd> jump</span><span><kbd>Shift</kbd> run</span></div></div>
  <div id="touch-controls" hidden><div id="stick" aria-label="Move"><span></span></div><div class="touch-right"><button data-action="SPRINT" aria-label="Toggle sprint">Run</button><button data-action="JUMP" aria-label="Jump">Jump ↑</button></div><span class="touch-look-hint">Drag the world to look</span></div><div id="panel-layer" hidden></div><div id="toast" role="status" aria-live="polite"></div><pre id="debug-overlay" hidden></pre>`, this.panel = this.root.querySelector("#panel-layer"), this.hud = this.root.querySelector("#hud"), this.titleLayer = this.root.querySelector("#title"), this.touch = this.root.querySelector("#touch-controls"), this.prompt = this.root.querySelector("#interaction"), this.toast = this.root.querySelector("#toast"), this.debug = this.root.querySelector("#debug-overlay"), this.root.querySelector("#new-game").addEventListener("click", e.newGame), this.root.querySelector("#continue").addEventListener("click", e.continueGame), this.root.querySelector("#title-settings").addEventListener("click", e.settings), this.root.querySelector("#title-fullscreen").addEventListener("click", () => this.toggleFullscreen()), this.root.querySelector("#pause-button").addEventListener("click", e.pause), this.root.querySelector("#fullscreen-fab").addEventListener("click", () => this.toggleFullscreen()), document.addEventListener("fullscreenchange", () => this.updateFullscreenButton()), document.addEventListener("webkitfullscreenchange", () => this.updateFullscreenButton()), this.prompt.addEventListener("click", e.interact), this.root.querySelector("#quest-pin").addEventListener("click", () => e.open("journal")), this.root.querySelectorAll("[data-panel]").forEach(i => i.addEventListener("click", () => e.open(i.dataset.panel))), this.panel.addEventListener("keydown", i => { if (i.key !== "Tab")
            return; const r = Array.from(this.panel.querySelectorAll('button:not([disabled]),input,select,[tabindex="0"]')), a = r[0], o = r[r.length - 1]; i.shiftKey && document.activeElement === a ? (o?.focus(), i.preventDefault()) : !i.shiftKey && document.activeElement === o && (a?.focus(), i.preventDefault()); });
    }
    state;
    actions;
    navigation;
    root;
    panel;
    hud;
    titleLayer;
    touch;
    prompt;
    toast;
    debug;
    currentPanel = "";
    dialogueId = "";
    selectedItem = "";
    lastHUD = 0;
    toastTimer = 0;
    immersiveFallback = !1;
    settings;
    fullscreenActive() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
    updateFullscreenButton() { const t = this.root.querySelector("#fullscreen-fab"); if (!t) return; const e = this.fullscreenActive() || this.immersiveFallback; t.innerHTML = e ? "↙ <span>Exit full screen</span>" : "⛶ <span>Full screen</span>", t.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen"), document.documentElement.classList.toggle("mosslight-immersive", this.immersiveFallback); }
    async toggleFullscreen() { const t = document.documentElement, e = document.exitFullscreen?.bind(document), n = document.webkitExitFullscreen?.bind(document), i = t.requestFullscreen?.bind(t), r = t.webkitRequestFullscreen?.bind(t); try { if (this.fullscreenActive()) e ? await e() : n && n(); else if (i) await i({ navigationUI: "hide" }); else if (r) r(); else this.immersiveFallback = !this.immersiveFallback, this.updateFullscreenButton(), this.notify(this.immersiveFallback ? "Immersive view on. Your browser does not expose true fullscreen here." : "Immersive view off."); } catch (a) { this.immersiveFallback = !this.immersiveFallback, this.updateFullscreenButton(), this.notify(this.immersiveFallback ? "Immersive view on. Browser fullscreen was unavailable." : "Immersive view off."); } }
    transition(t) { this.root.querySelector(".scene-transition")?.remove(); const e = document.createElement("div"); e.className = "scene-transition", e.textContent = t, this.root.append(e), e.addEventListener("animationend", () => e.remove(), { once: !0 }); }
    showTitle(t) { this.titleLayer.hidden = !1, this.hud.hidden = !0, this.touch.hidden = !0, this.panel.hidden = !0, this.currentPanel = "", this.root.querySelector("#continue").disabled = !t; }
    showGame() { this.titleLayer.hidden = !0, this.hud.hidden = !1, this.panel.hidden = !0, this.currentPanel = ""; }
    notify(t) { this.toast.textContent = t, this.toast.classList.add("visible"), clearTimeout(this.toastTimer), this.toastTimer = window.setTimeout(() => this.toast.classList.remove("visible"), 3900); }
    controls(t) { this.touch.hidden = !t || !this.titleLayer.hidden || !this.panel.hidden, this.root.querySelector("#control-hint").hidden = t, this.prompt.querySelector("kbd").textContent = t ? "↗" : "E"; }
    shell(t, e, n, i = "standard") { this.currentPanel = i, this.panel.hidden = !1, this.touch.hidden = !0, this.panel.innerHTML = `<section class="panel ${i}" role="dialog" aria-modal="true" aria-label="${$i(t)}"><header><div><div class="eyebrow">${e}</div><h2>${t}</h2></div><button class="close-panel" aria-label="Close">×</button></header>${n}</section>`, this.panel.querySelector(".close-panel").addEventListener("click", this.actions.close), queueMicrotask(() => this.panel.querySelector("button:not([disabled])")?.focus()); }
    close() { this.panel.hidden = !0, this.currentPanel = ""; }
    confirmNew() { this.shell("Begin again?", "A NEW JOURNEY", '<p>This will replace your current autosave on this browser. You can export it from the pause menu first.</p><div class="button-row"><button id="confirm-new" class="primary">Begin new journey</button><button id="cancel-new">Keep my journey</button></div>', "confirm"), this.panel.querySelector("#confirm-new").addEventListener("click", this.actions.continueGame), this.panel.querySelector("#cancel-new").addEventListener("click", this.actions.close); }
    pause() { this.shell("A quiet moment", "JOURNEY PAUSED", '<div class="menu-list"><button id="resume" class="primary">Return to the world <span>↗</span></button><button id="manual-save">Save your journey</button><button id="settings">Settings & controls</button><button id="pause-fullscreen">Toggle fullscreen</button><div class="split"><button id="export-save">Export save</button><button id="import-save">Import save</button><input id="import-file" type="file" accept="application/json,.json" hidden></div><button id="return-title" class="quiet">Save & return to title</button></div><p class="fine-print">Progress saves every 20 seconds, after important actions, and when you leave the game. Saves belong to this browser. Export to move between devices.</p>', "pause"); const t = (e, n) => this.panel.querySelector(e).addEventListener("click", n); t("#resume", this.actions.close), t("#manual-save", this.actions.save), t("#settings", this.actions.settings), t("#pause-fullscreen", () => this.toggleFullscreen()), t("#export-save", this.actions.exportSave), t("#import-save", () => this.panel.querySelector("#import-file").click()), this.panel.querySelector("#import-file").addEventListener("change", e => { const n = e.target.files?.[0]; n && this.actions.importSave(n); }), t("#return-title", this.actions.title); }
    showSettings(t) { this.settings = t, this.shell("Make yourself comfortable", "SETTINGS", `<div class="settings-grid"><label>Graphics quality<select id="quality"><option value="low">Low · lighter rendering</option><option value="medium">Medium · balanced</option><option value="high">High · richer rendering</option></select></label><label>Camera sensitivity <output id="sensitivity-value">${t.sensitivity.toFixed(1)}</output><input id="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${t.sensitivity}"></label><label>Master volume<input id="master" type="range" min="0" max="1" step="0.05" value="${t.master}"></label><label>Music<input id="music" type="range" min="0" max="1" step="0.05" value="${t.music}"></label><label>Effects & ambience<input id="effects" type="range" min="0" max="1" step="0.05" value="${t.effects}"></label><label>Touch controls<select id="touch"><option value="auto">Automatic</option><option value="on">Always show</option><option value="off">Hide</option></select></label><label class="check"><input id="debug" type="checkbox" ${t.debug ? "checked" : ""}> Show performance information</label></div><div class="settings-grid extra-settings"><label>Perspective<select id="perspective"><option value="first">First person</option><option value="third">Third person</option></select></label><label>Field of view<input id="fov" type="range" min="55" max="95" step="1" value="${t.fov}"></label><label class="check"><input id="headBob" type="checkbox" ${t.headBob ? "checked" : ""}> Gentle head bob</label><label>Pointer camera mode<select id="pointerMode"><option value="auto">Auto · iPad rate / desktop lock</option><option value="lock">Pointer lock</option><option value="drag">Drag look</option><option value="rate">iPad rate look · unlimited turning</option></select></label><label class="check"><input id="minimap" type="checkbox" ${t.minimap ? "checked" : ""}> Show minimap</label><label>Minimap orientation<select id="minimapOrientation"><option value="north">North up</option><option value="rotating">Rotate with heading</option></select></label><label>Minimap zoom<select id="minimapZoom"><option value="near">Near</option><option value="standard">Standard</option><option value="wide">Wide</option></select></label><label>Quest markers<select id="questMarkers"><option value="full">Full</option><option value="minimal">Minimal</option><option value="off">Off</option></select></label><label>World markers<select id="worldMarkers"><option value="full">On</option><option value="minimal">Minimal</option><option value="off">Off</option></select></label><label class="check"><input id="distances" type="checkbox" ${t.distances ? "checked" : ""}> Show target distances</label><label class="check"><input id="edgeIndicators" type="checkbox" ${t.edgeIndicators ? "checked" : ""}> Off-screen target indicator</label></div><div class="controls-guide"><b>KEYBOARD & MOUSE</b><p>WASD / arrows to move · Shift to run · Space to jump · E to interact · Tab to open pack · J for journal · M for map · Esc to pause.</p><p>Click the world for mouse look, or drag to look around. V changes perspective. In iPad rate look, hold and move away from the starting point to keep turning—even at the screen edge. Release to stop; hold again anywhere to reset the anchor. Menus cancel look. Scroll to zoom. On touch, use the left stick to walk and drag the open world to look.</p></div><button id="settings-done" class="primary wide">Done</button>`, "settings"), this.panel.querySelector("#quality").value = t.quality, this.panel.querySelector("#touch").value = t.touch; for (const e of ["perspective", "minimapOrientation", "minimapZoom", "questMarkers", "worldMarkers"])
        this.panel.querySelector("#" + e).value = t[e]; this.panel.querySelector("#pointerMode").value = t.pointerMode, this.panel.querySelectorAll("input,select").forEach(e => e.addEventListener("input", () => { const n = { ...this.settings }; e.id === "quality" ? n.quality = e.value : e.id === "touch" ? n.touch = e.value : e.id === "debug" ? n.debug = e.checked : e instanceof HTMLInputElement && e.type === "checkbox" ? Object.assign(n, { [e.id]: e.checked }) : e instanceof HTMLSelectElement ? Object.assign(n, { [e.id]: e.value }) : Object.assign(n, { [e.id]: Number(e.value) }), this.settings = n, this.panel.querySelector("#sensitivity-value").textContent = n.sensitivity.toFixed(1), this.actions.setSettings(n); })), this.panel.querySelector("#settings-done").addEventListener("click", this.actions.close); }
    dialogue(t) { this.dialogueId = t; const e = tn[t], n = Ln.find(i => i.name === e.speaker); this.shell(e.speaker, n?.role.toUpperCase() ?? "A CONVERSATION", `<div class="dialogue-text">${$i(e.text)}</div><div class="dialogue-responses">${Xc(t, this.state).map((i, r) => `<button data-response="${r}"><span class="choice-number">${r + 1}</span>${$i(i.text)}<span>↗</span></button>`).join("")}</div>`, "dialogue"), this.panel.querySelectorAll("[data-response]").forEach(i => i.addEventListener("click", () => this.actions.dialogue(Number(i.dataset.response)))); }
    inventory() { const t = this.state.data.inventory, e = this.selectedItem && this.state.count(this.selectedItem) > 0 ? this.selectedItem : t[0]?.id; this.selectedItem = e ?? ""; const n = ee[e]; this.shell("Your field pack", `${t.length} / 24 SLOTS · ${this.state.data.credits} CREDITS`, `<div class="inventory-layout"><div class="inventory-grid">${Array.from({ length: 24 }, (i, r) => { const a = t[r]; return a ? `<button class="item-slot ${a.id === e ? "selected" : ""}" data-item="${a.id}" aria-label="${ee[a.id].name}, ${a.count}" title="${$i(ee[a.id].description)}"><span style="color:${ee[a.id].color}">${ee[a.id].icon}</span><small>${a.count}</small><em>${ee[a.id].name}</em></button>` : '<div class="item-slot empty"></div>'; }).join("")}</div><aside class="item-detail">${n ? `<div class="item-symbol" style="color:${n.color}">${n.icon}</div><div class="eyebrow">${n.category} · ${n.rarity}</div><h3>${n.name}</h3><p>${n.description}</p><span class="price">${n.category === "Quest" ? "A keepsake for your journey" : n.value + " cr · base value"}</span>${n.category === "Food" ? '<button id="use-item" class="primary wide">Enjoy ' + n.name + "</button>" : ""}` : "<p>Your pack is empty. Good things turn up along the trail.</p>"}</aside></div>`, "inventory"), this.panel.querySelectorAll("[data-item]").forEach(i => i.addEventListener("click", () => { this.selectedItem = i.dataset.item, this.inventory(); })), this.panel.querySelector("#use-item")?.addEventListener("click", () => this.actions.use(e)); }
    journal() { this.shell("The explorer’s log", "A FEW REASONS TO WANDER", `<div class="quest-list">${Object.values(Oe).map(t => { const e = this.state.data.quests[t.id]; return `<article class="journal-quest ${e === 3 ? "complete" : ""}"><div class="quest-number">${e === 3 ? "✓" : t.id === "signal" ? "01" : t.id === "research" ? "02" : t.id === "cave" ? "03" : t.id === "supper" ? "04" : "05"}</div><div><div class="eyebrow">${e === 0 ? "NOT YET ACCEPTED" : e === 3 ? "COMPLETE" : "IN PROGRESS"} · ${t.reward} CR</div><h3>${t.title}</h3><p>${t.description}</p><div class="current-objective">${t.stages[e]}</div>${t.id === "research" && e > 0 && e < 3 ? `<div class="progress-tags"><span>${Math.min(2, this.state.data.observed.length)} / 2 mosslings observed</span><span>${Math.min(3, this.state.count("glowcap"))} / 3 lanterncaps</span></div>` : ""}</div></article>`; }).join("")}</div>`, "journal"), this.navigation?.journalLinks(); }
    shop() { const t = this.state.data.inventory.filter(e => ee[e.id].category !== "Quest"); this.shell("Oren’s provisions", `${this.state.data.credits} CREDITS IN YOUR PACK`, `<div class="shop-layout"><div><h3>For the trail</h3>${Kr.stock.map(e => { const n = ee[e]; return `<div class="shop-row"><span class="shop-icon" style="color:${n.color}">${n.icon}</span><div><b>${n.name}</b><small>${n.description}</small></div><button data-buy="${e}" ${this.state.data.credits < n.value || !this.state.canAdd(e, 1) ? "disabled" : ""}>${n.value} cr <span>＋</span></button></div>`; }).join("")}</div><div><h3>From your pack</h3><p class="fine-print">Oren buys supplies for half their base value. Quest items stay with you.</p>${t.length ? t.map(e => `<div class="sell-row"><span>${ee[e.id].icon} ${ee[e.id].name} <small>×${e.count}</small></span><button data-sell="${e.id}">Sell 1 · ${Math.max(1, Math.floor(ee[e.id].value * .5))} cr</button></div>`).join("") : "<p>Nothing to sell just yet.</p>"}</div></div>`, "shop"), this.panel.querySelectorAll("[data-buy]").forEach(e => e.addEventListener("click", () => this.actions.buy(e.dataset.buy))), this.panel.querySelectorAll("[data-sell]").forEach(e => e.addEventListener("click", () => this.actions.sell(e.dataset.sell))); }
    info(t, e, n, i = []) { this.shell(t, e, `<div class="info-text">${n}</div><div class="button-row">${i.map((r, a) => `<button data-info="${a}" class="${r.primary ? "primary" : ""}">${$i(r.label)}</button>`).join("")}<button id="info-close">Back to the world</button></div>`, "info"), this.panel.querySelectorAll("[data-info]").forEach(r => r.addEventListener("click", () => i[Number(r.dataset.info)].action())), this.panel.querySelector("#info-close").addEventListener("click", this.actions.close); }
    map() { this.navigation?.map(); }
    updateHUD(t, e, n, i, r, a, o, c, l) { if (t - this.lastHUD < .12)
        return; this.lastHUD = t, this.root.querySelector("#clock").textContent = `${String(Math.floor(e)).padStart(2, "0")}:${String(Math.floor(e % 1 * 60)).padStart(2, "0")}`, this.root.querySelector("#day").textContent = "DAY " + n, this.root.querySelector("#location").textContent = a.toUpperCase(), this.root.querySelector("#credits").textContent = this.state.data.credits + " cr", this.root.querySelector("#stamina-bar").style.width = i + "%", this.root.querySelector("#stamina-name").textContent = r ? "WELL FED" : "BREATH", this.root.querySelector("#save-status").textContent = l === "Saved" ? "JOURNEY SAVED" : l === "Saving…" ? "SAVING…" : l === "Save failed" ? "SAVE FAILED" : "AUTOSAVE ON"; const h = this.state.data.navigation.trackedQuest ?? Object.keys(Oe).find(f => this.state.data.quests[f] > 0 && this.state.data.quests[f] < 3) ?? "signal", u = this.state.data.quests[h], d = Object.keys(Oe).every(f => this.state.data.quests[f] === 3); this.root.querySelector("#quest-pin strong").textContent = d ? "A light left burning" : Oe[h].title, this.root.querySelector("#objective").textContent = d ? this.state.data.flags.repaired ? "Your ship is home. Take the long way back." : "Return to your ship. Fit the navigation couplings." : Oe[h].stages[u], this.prompt.hidden = !o || !this.panel.hidden, o && (this.prompt.querySelector("span").textContent = o.label); }
}
class $0 {
    context = null;
    master = null;
    music = null;
    fx = null;
    ambience = null;
    nextChord = 0;
    musicStep = 0;
    zone = "outside";
    settings;
    constructor(t) { this.settings = t; }
    async start() { if (!this.context) {
        const t = window.AudioContext || window.webkitAudioContext;
        if (!t)
            return;
        this.context = new t;
        const e = this.context;
        this.master = e.createGain(), this.music = e.createGain(), this.fx = e.createGain(), this.ambience = e.createGain(), this.master.connect(e.destination), this.music.connect(this.master), this.fx.connect(this.master), this.ambience.connect(this.fx);
        const n = e.createBuffer(1, e.sampleRate * 4, e.sampleRate), i = n.getChannelData(0);
        let r = 0;
        for (let c = 0; c < i.length; c++)
            r = (r + Math.random() * .035 - .0175) / 1.015, i[c] = r;
        const a = e.createBufferSource();
        a.buffer = n, a.loop = !0;
        const o = e.createBiquadFilter();
        o.type = "lowpass", o.frequency.value = 800, a.connect(o), o.connect(this.ambience), a.start(), this.apply(this.settings);
    } await this.context.resume(); }
    apply(t) { this.settings = t, this.context && (this.master.gain.value = t.master, this.music.gain.value = t.music * .16, this.fx.gain.value = t.effects * .4, this.ambience.gain.value = .2); }
    tone(t, e = .12, n = "sine", i = .2, r = !1, a = 0) { const o = this.context; if (!o || o.state !== "running")
        return; const c = o.createOscillator(), l = o.createGain(), h = o.currentTime + Math.max(0, a); c.type = n, c.frequency.setValueAtTime(t, h), l.gain.setValueAtTime(1e-4, h), l.gain.exponentialRampToValueAtTime(Math.max(.001, i), h + .025), l.gain.exponentialRampToValueAtTime(1e-4, h + e), c.connect(l), l.connect(r ? this.music : this.fx), c.start(h), c.stop(h + e + .06), c.onended = () => { c.disconnect(), l.disconnect(); }; }
    musicPhrase(t, e) {
        const n = {
            outside: [
                [392, 329.63, 293.66, 246.94, 329.63],
                [440, 392, 329.63, 293.66, 392],
                [329.63, 392, 493.88, 440, 329.63],
                [293.66, 329.63, 392, 329.63, 246.94]
            ],
            night: [
                [329.63, 293.66, 246.94, 220, 293.66],
                [392, 329.63, 293.66, 246.94, 220],
                [293.66, 246.94, 220, 196, 246.94]
            ],
            cafe: [
                [329.63, 392, 440, 392, 329.63, 261.63],
                [349.23, 440, 523.25, 440, 349.23, 293.66],
                [392, 329.63, 261.63, 329.63, 440, 392]
            ],
            store: [
                [392, 329.63, 293.66, 329.63, 392],
                [440, 349.23, 293.66, 349.23, 440],
                [329.63, 392, 329.63, 261.63, 293.66]
            ],
            ship: [
                [293.66, 369.99, 329.63, 246.94, 293.66],
                [329.63, 415.3, 369.99, 293.66, 246.94],
                [246.94, 293.66, 369.99, 329.63, 293.66]
            ],
            orren: [
                [349.23, 440, 523.25, 440, 392],
                [392, 493.88, 587.33, 493.88, 440],
                [329.63, 392, 493.88, 440, 349.23]
            ],
            cave: [
                [261.63, 196, 246.94, 220],
                [293.66, 220, 261.63, 196],
                [246.94, 185, 220, 164.81]
            ]
        };
        const i = t === "outside" && e > 18 ? "night" : t, r = n[i] ?? n.outside, a = r[this.musicStep++ % r.length], o = i === "cafe" ? [0, .56, 1.22, 2.05, 2.7, 3.45] : i === "cave" ? [0, 1.05, 2.15, 3.35] : [0, .72, 1.5, 2.45, 3.2], c = i === "cave" ? "sine" : i === "ship" ? "sine" : "triangle";
        a.forEach((l, h) => this.tone(l, h === a.length - 1 ? 1.25 : .48 + (h % 3) * .12, c, i === "cave" ? .075 : .11, !0, o[h] ?? h * .72));
        if (i !== "cave") {
            const l = a[0] / 2;
            this.tone(l, 1.35, "sine", .032, !0, .04), this.tone(l * 1.5, 1.1, "sine", .022, !0, 2.45);
        }
        if (i === "cafe" && this.musicStep % 2 === 0)
            this.tone(a[1] * 2, .55, "sine", .045, !0, 1.78);
    }
    ui() { this.tone(660, .08, "sine", .18); }
    pickup() { this.tone(740, .2, "sine", .22), this.tone(1110, .33, "sine", .09); }
    step() { this.tone(this.zone === "ship" ? 100 : this.zone === "cave" ? 135 : 85, .075, "triangle", .16); }
    update(t, e, n) { this.zone = e, this.context && (this.nextChord -= t, this.nextChord < 0 && (this.nextChord = (e === "cave" ? 9.5 : 8) + Math.random() * 3.2, this.musicPhrase(e, n), e === "outside" && n < 19 && Math.random() < .5 && (this.tone(1050 + Math.random() * 450, .16, "sine", .022, !1, .3), this.tone(1280 + Math.random() * 520, .11, "sine", .015, !1, .5)))); }
}
function Wl(s, t, e, n) { let i = null, r = -1 / 0; for (const a of s) {
    if (a.zone !== n || a.enabled && !a.enabled())
        continue;
    const o = a.x - t.x, c = a.z - t.z, l = Math.hypot(o, c);
    if (l > a.radius || Math.abs(a.y - t.y) > 4)
        continue;
    const h = l < .2 ? 1 : (Math.sin(e) * o + Math.cos(e) * c) / l;
    if (h < -.5 && l > 1.8)
        continue;
    const u = a.priority * 1.25 + h * 2 + (1 - l / a.radius) * 4;
    u > r && (i = a, r = u);
} return i; }
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
    constructor() { const t = document.getElementById("world"); this.render = new N0(t), this.input = new U0(t), this.world = new z0(this.render.scene, this.state), this.player = new H0(this.input, this.world.colliders), this.player.load(this.state.data.player), this.render.scene.add(this.player.avatar.root), this.camera = new G0(this.render.camera, this.input, this.world.colliders), this.npcs = new V0(this.world.outside, this.state, this.world.interactions, this.render.camera), this.creatures = new q0(this.world.outside, this.state, this.world.interactions), this.audio = new $0(this.settings), this.ui = new Y0(this.state, { newGame: () => this.newGame(), continueGame: () => this.continueGame(), close: () => this.closePanel(), pause: () => this.pause(), save: () => { this.saveNow(!0); }, title: () => { this.returnTitle(); }, settings: () => this.openSettings(), setSettings: e => this.setSettings(e), interact: () => this.interact(), dialogue: e => this.chooseDialogue(e), buy: e => this.buy(e), sell: e => this.sell(e), use: e => this.use(e), open: e => this.openPanel(e), exportSave: () => this.exportSave(), importSave: e => { this.importSave(e); } }, this.settings), this.expansion = new C0(this), this.state.onNotify = e => this.ui.notify(e), this.input.bindTouch(this.ui.touch), this.input.onMode = () => this.updateControls(), this.player.onStep = () => this.audio.step(), this.player.onJump = () => this.audio.tone(180, .12, "triangle", .1), window.addEventListener("pagehide", () => { this.running && this.saveNow(); }), document.addEventListener("visibilitychange", () => { document.hidden && this.running && (this.saveNow(), this.paused || this.pause()), this.last = performance.now(); }), t.addEventListener("webglcontextlost", e => { e.preventDefault(), this.pause(), this.saveNow(), this.ui.notify("Graphics paused. Your journey is being saved. Reload to resume."); }), t.addEventListener("webglcontextrestored", () => location.reload()), this.installDebug(), this.installWebMCP(); }
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
    freeze() { this.npcs.hideBubbles(), this.paused = !0, this.input.enabled = !1, this.input.release(), this.currentInteraction = null, this.ui.prompt.hidden = !0; }
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
try {
    new j0().init().catch(t => ql(t));
}
catch (s) {
    ql(s);
}
function ql(s) { console.error(s); const t = document.getElementById("boot"); t.innerHTML = '<div class="error-box"><h2>We couldn’t open the harbor.</h2><p id="boot-reason"></p><p>Try reloading. If graphics are unavailable, use a browser with WebGL2 enabled.</p><button onclick="location.reload()">Try again</button></div>', document.getElementById("boot-reason").textContent = s instanceof Error ? s.message : "An unexpected error occurred."; }
