# Mosslight Harbor V3R1 — Reconstructed Source Baseline

This is the first durable source-recovery milestone created from the Safari webarchive of the deployed Mosslight Harbor V3 build.

## What is preserved

- **baseline/** — byte-for-byte captured production app assets from V3. Do not edit.
- **working/** — browser-ready reconstruction baseline using a readable formatted runtime. This folder is ready for static HTTPS hosting and requires no npm at runtime.
- **source/legacy/** — editable readable legacy runtime and stylesheet. This is the current authoritative code recovery source while modules are split out.
- **source/data/** — recovered editable game content: items, quests, NPCs, dialogue, locations, shop data, and social/personality profiles.
- **source/recovered-systems/** — major gameplay classes extracted and pretty-printed with friendly recovery names. These are reference slices and still depend on legacy minified symbols.
- **docs/SYSTEM_MAP.md** — map from minified class names to recovered systems.

## iPad development rule

You do not need Node, npm, VS Code, a Mac, or a PC to playtest the current recovered build. The **working/** folder is already a static web game. It can be deployed as-is to any static HTTPS host.

The included GitHub Pages workflow deploys **working/** directly; GitHub performs the hosting workflow in the cloud.

## Why this is not yet the original TypeScript tree

The webarchive contains the production JavaScript bundle but no source map. Exact TypeScript types, comments, module filenames, and original symbol names were removed during production bundling. They cannot be restored exactly.

Instead, this recovery preserves the shipped behavior first, extracts game content and recognizable systems, and gives us a stable path to progressively replace the legacy runtime with clean TypeScript modules.

## Recovery strategy

1. Keep **baseline/** immutable.
2. Make targeted fixes in **source/legacy/mosslight-v3-runtime.js** and mirror them to **working/assets/mosslight-v3-readable.js** while reconstruction is underway.
3. Move recovered data out of the runtime into typed modules.
4. Rebuild major systems one at a time: persistence/input → UI/navigation → gameplay/NPC/dialogue → world → ship/flight/rendering.
5. Compare behavior against baseline after each migration.
6. Never overwrite the stable live site until a recovered build has passed device QA.

## First recovered content

The data extraction already recovered the current named NPCs (Sela Venn, Oren Vale, Ivo Quill, Neri Bloom, Tamsin Reed), quests, inventory items, dialogue graph, locations, shop configuration, and the newer warmth/hospitality personality profiles from V3.

## Next reconstruction pass

The next safest coding step is to extract and clean **PersistenceStore**, **InputSystem/RateLookController**, and the pure game-data/state layer first. Those systems have relatively clear boundaries and are crucial for save compatibility. After that, NPC/dialogue is a good early target because its data is already recovered cleanly.
