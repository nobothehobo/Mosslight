# Mosslight Harbor V3R1 — Reconstructed Source Baseline

This repository is the durable recovery home for the Mosslight Harbor V3 game recovered from the deployed Safari web archive after the original Work workspace became unavailable.

## Recovery rule

The recovered V3 baseline is the stability reference. Do not destructively overwrite the baseline while reconstruction is underway.

The source recovery preserves the shipped production behavior first, then progressively replaces the recovered production runtime with clean maintainable modules while preserving save compatibility, iPad/PC controls, Mosslight/Orren content, quests, NPCs, ship systems, navigation, activities, and space travel.

## Repository plan

- `baseline/` — immutable captured V3 production files.
- `working/` — browser-ready reconstructed playtest.
- `source/legacy/` — readable recovered production runtime during migration.
- `source/data/` — recovered editable game content.
- `source/recovered-systems/` — extracted major systems used as reconstruction references.
- `docs/` — recovery maps and documentation.
- `archives/` — exact downloadable recovery snapshots.

## iPad-first development rule

Every future milestone must preserve a browser-playable build and a downloadable full-source backup. The project owner should never be required to run npm, Node, a terminal, Xcode, Blender, Unreal, Unity, or a desktop computer merely to playtest a milestone.

## Current state

V3 production behavior is the reference. The next reconstruction work should preserve the game exactly before adding new gameplay changes.
