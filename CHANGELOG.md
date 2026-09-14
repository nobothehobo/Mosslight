# Changelog

## V3R1 recovery baseline

- Preserved exact captured V3 production build.
- Created readable browser-ready working runtime.
- Extracted game version, items, shop data, quests, locations, NPC definitions, dialogue graph, dialogue routing, and social/personality profiles into editable JSON.
- Extracted 15 major gameplay classes into readable recovery slices.
- Added minified-symbol → friendly-system map.
- Added static GitHub Pages deployment workflow requiring no local build.
- Added future Vite/TypeScript scaffold without making it a requirement for iPad playtesting.

No gameplay behavior has intentionally been changed in this baseline.
## V3R2 development — NPC social greeting pass

- Added proximity-based ambient NPC greetings with cooldowns and re-entry hysteresis.
- Added warm NPC speech bubbles projected above characters in the 3D world.
- Added visible social poses: waves, grins, nods, head tilts, and friendlier eye/head tracking.
- NPCs briefly stop their routine to acknowledge the player, then resume schedules.
- Return greetings can acknowledge a trip to Orren without changing save schema.
- Reworked several dialogue lines for shorter, more conversational delivery while preserving quest logic.
- Added named social-profile data for future clean TypeScript reconstruction.
- No changes to save schema, quests, inventory, economy, world layout, navigation, or flight.

