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

## V3R3 development — visual + music foundation

- Reworked the procedural music system from long static sustained chords into gentle changing phrases, broken chords, rests, and zone-specific progressions.
- Preserved the existing low-passed ambient noise bed that gives Mosslight its soft environmental hush.
- Added different musical palettes for Mosslight daytime/night, café, provisions shop, ship, Orren, and cave.
- Replaced pointed tree foliage with layered rounded canopies for a softer handcrafted silhouette.
- Added shrubs, small flowering clusters, and low ground cover around the harbor region.
- Added porch steps, window boxes, and planted façade details to settlement buildings without changing collision boundaries.
- Improved terrain material response, sky horizon depth, sunset halo, and overall exposure.
- Kept gameplay, saves, quests, economy, navigation, flight, and interaction coordinates unchanged.

## V3R4 development hotfix — social animation + audible music variation

- Replaced the awkward NPC arm pose with a safer raised whole-arm wave.
- Removed exaggerated mouth stretching and switched expressions to subtle mouth, brow, nod, and head-tilt motion.
- Added automatic pose reset so social expressions return cleanly to idle animations.
- Reworked music again with clearly separated melodic notes, changing motifs, rhythmic spacing, and real rests instead of a nearly continuous sustained tone.
- Raised the musical layer enough to be audible while preserving the existing filtered ambient noise bed.
- Added a dev-build cache-buster so Safari reliably loads the new runtime and stylesheet.

## V3R5 development — fullscreen toggle

- Added a fullscreen toggle button to the top-right gameplay HUD.
- Added a second fullscreen toggle inside the pause menu.
- Uses the browser Fullscreen API where available, including Safari's prefixed fallback.
- Adds an immersive-layout fallback when a browser does not expose true fullscreen for web apps.
- Fullscreen button icon and accessibility label update automatically when entering or leaving fullscreen.
- Added a Safari cache-buster for the updated runtime and stylesheet.

## V3R5.1 development — fullscreen visibility hotfix

- Added a clearly labeled Full screen button directly on the title screen.
- The existing in-game HUD and pause-menu fullscreen controls remain available.
- Updated cache-busting so Safari loads the new control immediately.

## V3R5.2 development — fullscreen visibility + iPad standalone support

- Added a clearly labeled floating Full screen pill inside gameplay so the control is impossible to confuse with the other HUD icons.
- Kept the icon-only HUD control and pause-menu control.
- Added iPad/iPhone standalone web-app metadata and a web manifest for a browser-chrome-free Home Screen launch where Safari does not permit page fullscreen.
- Bumped Safari cache version again.

## V3R5.3 development — fullscreen UI cleanup

- Removed the duplicate icon-only fullscreen button from the in-game HUD.
- Kept one clearly labeled Full screen control during gameplay.
- Kept fullscreen access on the title screen and in the pause menu.
- Bumped the Safari cache version so the duplicate disappears immediately.

## V3R6 development — Character Cute Pass

- Redesigned the shared player/NPC character model with larger heads, shorter softer bodies, rounder limbs, chunkier shoes, and a more toy-like silhouette.
- Enlarged and refined eyes with visible highlights, softened brows, clearer mouths, and warmer cheek blush.
- Reworked hair into more rounded layered silhouettes for bun, puff, bob, cap, and short styles.
- Added more dimensional apron, backpack, straps, badges, and clothing details without introducing external model dependencies.
- Softened idle bounce and walk movement while preserving the repaired social-wave behavior.
- Kept NPC identities, dialogue, schedules, quest hooks, interaction radii, saves, and gameplay state unchanged.
- The same character system continues to power the optional third-person player avatar, keeping the art direction consistent.

