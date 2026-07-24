# Changelog

All notable changes to `@imadgentech/ui` are documented here, newest first. Entries are grouped **Breaking** / **Added** / **Changed** / **Fixed**. If you're upgrading, read the **Breaking** subsection of every version between your current one and the target before bumping.

## [2.0.13] — 2026-07-24

### Fixed

- `Navbar`: desktop (`>=1024px`) side padding was `--space-80` (80px), and `--space-32` (32px) below that — both wider than `Container`'s own `--space-24` (24px), despite the `maxWidth` prop's own doc comment stating the navbar is meant to "line up with page content automatically." In practice the logo/actions sat visibly further inset than the Hero/CTA/etc. content edges below them, reading as everything bunched toward the middle instead of pinned to the actual left/right content edges. Now matches `Container` exactly (16px `<=640px`, 24px above).

## [2.0.12] — 2026-07-24

### Changed

- `Hero`, `CTA`: `.description`'s `max-width` widened further, from 800px (2.0.11) to 1000px on both.

## [2.0.11] — 2026-07-24

### Changed

- `Hero`, `CTA`: `.description`'s `max-width` widened from 640px/600px to 800px on both — both are centered heading+description+actions bands meant to use a page-width (1400px `--max`) section, and the description text was capped narrower than it needed to be for no real reason.

## [2.0.10] — 2026-07-20

### Breaking

- **`Input`, `Select`, `Combobox`, `DatePicker`, `Textarea`, `Button` all overshot their own declared 32/40/48px `min-height` scale** — vertical padding (8/12/16px) plus 1px border plus text line-height summed to *more* than the declared min-height at every tier (measured: `md` rendered ~47.5px against a declared 40px, `sm` ~35px against 32px, `lg` ~56px against 48px), so `min-height` was silently a no-op everywhere except `ToggleGroup` (2.0.8's smaller item padding happened to fit under the target, which is what first surfaced this — `ToggleGroup` was the one control actually hitting 32/40/48px while everything else quietly ran taller). Vertical padding is now 2/4/8px per tier (horizontal padding unchanged) on all six components, so `min-height` is the real, enforced height everywhere for the first time. **Every sized form control in every consuming app renders visibly shorter/more compact** — re-check form-heavy screens after upgrading. This also means these controls are now genuinely height-matched to `ToggleGroup` and each other, rather than only nominally sharing a "scale" that most of them never actually reached.

## [2.0.9] — 2026-07-20

### Breaking

- **`Button`'s default (`variant="primary"`) is now the gradient/glow CTA look, and `variant="og"` (added in 2.0.5) is removed** — the gradient/glow treatment turned out to be the company's actual core button theme rather than a one-off opt-in, so it now lives on `primary` directly instead of a separate variant name. The former flat `primary` look (transparent bg, brand-tinted border, no gradient/glow) is preserved under a new `variant="plain"`. **Any `Button` using the implicit or explicit `primary` default will change appearance app-wide** — pass `variant="plain"` to keep the old look. **Any `Button`/`Form.submitVariant` explicitly using `variant="og"` (2.0.5–2.0.8) must switch to `variant="primary"` (now the default) or drop the prop entirely.**

## [2.0.8] — 2026-07-20

### Fixed

- `ToggleGroup`: `.item`'s font-size stayed at `var(--text-sm)` (14px) for both `sm` and `md` sizes, and `size-lg` was pinned to `var(--text-md)` (16px) instead of `var(--text-lg)` (18px) — every other sized control (`Input`, `Select`, `Combobox`, `Textarea`) scales font-size 14/16/18px per tier, so a `ToggleGroup` at the shared `md` default read visibly smaller/lighter than a sibling `Input` despite matching the same 40px `min-height`. Now scales 14/16/18px per tier like the rest of the kit. Also gave `.item` its own small vertical padding per tier instead of depending solely on `.group`'s `align-items: stretch` to fill the height — stretch still applies as the final authority, this just stops the active pill from centering with zero padding baked into the item itself, matching how `Input`/`Select`/`Combobox` size their own element directly.

## [2.0.7] — 2026-07-15

### Fixed

- **`@imadgentech/ui/server` shipped with no type declarations** — `dist/server.d.ts`/`dist/server.d.mts` were missing from the published 2.0.6 tarball (confirmed via `npm pack --dry-run`), even though the exports map's `"./server"` entry still pointed at `./dist/server.d.ts`, breaking every server-safe import (`Container`, `Stack`, `Hero`, etc.) for any consumer using that entry point. Root cause: `tsup.config.ts` builds `index`/`chat` and `server` as two separate, concurrently-spawned child processes sharing one `outDir`, and the `index`/`chat` config's `clean: true` raced `server`'s much-slower DTS generation phase (5.5s vs. 14s) — `server.js`/`.mjs`/`.css` (written in the fast JS/CSS phase) survived, but `server.d.ts`/`.d.mts` (written later) were reliably wiped, 100% reproducible locally across repeated clean builds. Fixed by removing `clean: true` from both tsup configs and cleaning `dist/` once, synchronously, in the `build` npm script before either tsup process starts, instead of leaving it to one of the two racing processes.

## [2.0.6] — 2026-07-15

### Fixed

- `Form`: `submitVariant` was typed as its own hardcoded `'primary' | 'secondary' | 'ghost' | 'danger'` union, independent of `Button`'s actual variant list and already missing `'brand'`/`'brand-solid'` before 2.0.5 added `'og'` too — a consumer couldn't set `submitVariant="brand"` (or `"og"`) without a type error even though `Button` supported it. Now typed as `ButtonProps['variant']`, so it can't drift out of sync with `Button` again.

## [2.0.5] — 2026-07-15

### Added

- `Button`: new `variant="og"` — restores the original pre-Next.js CTA look (translucent diagonal gradient + colored glow shadow, hand-tuned per theme: dark uses `.22`/`.12` alpha, light uses `.16`/`.10` — these were never the same value re-themed). None of the existing variants reproduced it: `primary` has no fill at all, `brand` is a flat single-alpha tint, `brand-solid` overshoots to a 100%-fill solid button. Sizing is unaffected — `size="sm" | "md" | "lg"` still drives padding/font-size/min-height exactly like every other variant.
- `--color-brand-secondary-rgb` token (`255, 138, 31`), matching the existing RGB-triplet pattern, used by `og`'s gradient second stop.

### Fixed

- `Textarea`: `min-height` was hardcoded `80px` on the base class regardless of `textareaSize`, so `sm`/`md`/`lg` all rendered at the same height while every other sized control (`Input`, `Select`, `Combobox`, `DatePicker`) scales 32/40/48px. Moved onto the `size-*` classes to match; also added the `@media (pointer: coarse)` 44px touch-target bump the other controls already had.

## [2.0.4] — 2026-07-14

### Breaking

- **`--radius-md` token** (`tokens.css`) — changed from `0.75rem` (12px) to `0.625rem` (10px), and `Button`'s previously-hardcoded `8px` corner now reads from this token too, so both moved to the same 10px value. `Select`, `Input`, `Combobox`, `DropdownMenu`, `Popover`, `DatePicker`, `Toast`, `Alert`, `Accordion`, `Drawer`'s close button, `Table`, `Textarea`, and `IconButton` all consume `--radius-md` and will render with visibly tighter corners. `Dialog`, `AlertDialog`, `Drawer`'s bottom-sheet corners, `PricingCard`, and `CTA` moved from `--radius-lg` (18px) to `--radius-md`; the contact `Form`'s outer container and inputs moved from `--radius-xl`/hardcoded `20px` to `--radius-md`. **Any consuming app relying on the previous 12px/18px/26px look for these components will see a visibly less-rounded UI** — re-check card- and modal-heavy screens after upgrading.

### Fixed

- `ToggleGroup`: the active item's corner radius (`--radius-sm`, 4px) didn't nest inside the group's rounded container (`--radius-md`) at its 2px padding, leaving a visible sliver of the outer background at each corner. Now `calc(var(--radius-md) - var(--space-2))` so the active box stays concentric with the outer pill.
- `DropdownMenu`: same nested-radius mismatch between `.content`'s 4px padding/`--radius-md` corner and `.item`'s `--radius-sm` corner. Now `calc(var(--radius-md) - var(--space-4))`.
- `StatCard`, `EmptyState`: hardcoded `radius="lg"` (18px), inconsistent with every other flat card-style surface in the kit defaulting to `--radius-md`. Now `radius="md"`.
- `ToggleGroup`: unlike `Button`/`Input`/`Select`/`Combobox`/`DatePicker`/`IconButton`, it had no `min-height` at all, so it rendered a few pixels shorter than a sibling `Input` at the default size — visibly uneven when the two sit in the same toolbar row (e.g. a search `Input` next to a status filter `ToggleGroup`). Added a `size` prop (`'sm' | 'md' | 'lg'`, default `'md'`) pinned to the same 32/40/48px scale as the rest of the kit; see Added below.
- `Dialog`, `AlertDialog`: `.content` set `width: calc(100vw - 32px)` plus `padding: 24px` and a `1px` border with no `box-sizing`, so (browser default `content-box`) the padding/border added on top of that width instead of being absorbed inside it — the modal rendered ~18px wider than the viewport, clipping content off the right edge. Added `box-sizing: border-box`. `Popover`, `DropdownMenu`, and `Toast` had the same missing `box-sizing` alongside a `max-width`/`min-width` + padding + border combo (same bug, less visible since none of them pin to a `100vw`-derived width) — fixed the same way.
- **`tokens.css` z-index scale**: `--z-popover` (300) and `--z-tooltip` (400) sat *below* `--z-navbar`/`--z-overlay`/`--z-modal` (1000/1050/1100). `Popover`, `DropdownMenu`, `Combobox`, `Select`, and `DatePicker` all portal to `document.body` just like `Dialog`/`Drawer` — so any of them opened from inside a `Dialog` painted visually (still portalled on top in DOM order) but sat *under* the Dialog's own overlay/content in stacking order, silently eating all clicks. Reordered to `--z-overlay` (1050) < `--z-modal` (1100) < `--z-popover` (1150) < `--z-tooltip` (1200) < `--z-toast` (1300) so anything that can open from within a modal now outranks it.
- `Combobox`, `DatePicker`: fixing the z-index ordering above wasn't enough inside a `Dialog`/`AlertDialog` — Radix's `DismissableLayer` sets `pointer-events: none` on `<body>` while a modal is open and only re-enables it for layers it manages itself (its own Popover/DropdownMenu/Select stack). `Combobox`'s dropdown and `DatePicker`'s calendar popup are hand-rolled `createPortal(..., document.body)` nodes, not Radix layers, so they inherited `pointer-events: none` from `<body>` and stayed genuinely unclickable — visible, but every option/day silently ate clicks — whenever their trigger sat inside a Dialog. Both now set `pointer-events: auto` explicitly on the portaled element.

### Added

- `ToggleGroup`: new `size` prop (`'sm' | 'md' | 'lg'`, default `'md'`), matching `Input`/`Select`/`Combobox`'s min-height scale (32/40/48px, with the usual 44px `@media (pointer: coarse)` bump on `sm`). Non-breaking — existing usages render identically at the new `'md'` default.

- `Combobox`: new `searchable` prop (default `true`, non-breaking). Set `false` for a plain listbox with no search input — arrow keys move a highlighted option, Enter selects it, Escape closes. Added `role="listbox"`/`role="option"`/`aria-selected`/`aria-activedescendant` wiring and `aria-haspopup`/`aria-expanded` on the trigger regardless of this prop, since that ARIA gap existed either way.
- `Flex`: `direction` now accepts a responsive breakpoint map (`{ base, sm, md, lg }`), the same pattern `Grid.columns`/`GridItem.span` already use, so a row can collapse to a column below a breakpoint (e.g. `direction={{ base: 'column', md: 'row' }}`). Plain `'row' | 'column'` still works unchanged.
- New shared `lib/responsive.ts` (`ResponsiveValue`, `getResponsiveClasses`) extracted from `Grid`'s existing implementation and reused by `Flex`; no behavior change for `Grid`.
- Mobile/touch-target pass across the kit — see new [Mobile & Responsive Behavior](README.md#mobile--responsive-behavior) README section. Summary below under Fixed/Changed.

### Fixed

- `Combobox`: clicking the clear (`×`) button also toggled the dropdown open/closed. The clear handler only stopped propagation on `mousedown`; the browser's subsequent `click` event still bubbled from the clear button up through the trigger `<button>` and fired its `onClick`, silently reopening (or closing) the dropdown right after clearing. Now stops the `click` event too.
- `Combobox`: the portal-rendered dropdown could render partially off-screen when the trigger sat near the right/bottom edge of a narrow (e.g. phone-width) viewport — its position and max-width are now clamped to `window.innerWidth`.
- Touch targets below the ~44px accessibility floor: `Checkbox`, `RadioGroup`, and `Switch` had 20–24px hit boxes with no expanded click area; `Tag`'s remove button was 14×14px. All four now expand their tappable area via an invisible `::before` overlay without changing the visible control size. `Tag`'s remove hit area grows to ~32px (a full 44px would overlap neighboring tags in a dense `Cluster`).
- `Button`, `IconButton`, `Input`, `Select`, `Combobox`: `sm` size now grows to a 44px tap target under `@media (pointer: coarse)` (i.e. touch devices), while keeping the existing denser sizing for mouse/trackpad. `Select`/`Combobox`/`Input`'s `sm`/`md`/`lg` `min-height`s are now pinned identically so all three stay height-matched at every size, including the new touch bump.
- `Tabs`: the trigger row had no overflow handling — many tabs would run off the edge of a narrow container with no way to reach them. Now scrolls horizontally (scrollbar hidden) instead.
- `Pagination`: prev/info/next could overflow a narrow (~320px) container since the row never wrapped. Now wraps, with "Page X of Y" moving to its own centered row below Prev/Next under 480px.
- `PricingCard`: the name + "Recommended" badge header could overflow on a narrow card; now wraps. Price font-size scales down under 640px viewports.
- Removed a stray leftover comment (`/* removed invalid extra closing brace */`) in `Navbar.module.css`.

### Changed

- Unicode glyph icons (`×`, `▼`/`▾`) across `Select`, `Combobox`, `Dialog`, `Drawer`, `Tag`, and `Alert` replaced with inline SVG icons (matching the stroke-based convention already used by `Accordion`/`Checkbox`/`DatePicker`) — crisper and more visibly sized than the tiny/inconsistently-rendered text glyphs, and immune to source-encoding mishaps like the mojibake fixed in 1.0.20.

---

This next block resulted from a full audit of the package for reuse-blocking rigidity and correctness bugs — everything the package would need to work as well in a second, differently-branded project as it does in IMADGEN's own. See the "Field report: POcket" and "Navbar / 1400px / mobile type" sections of that audit for the reasoning behind the layout-related changes specifically.

### Breaking

- **Overlay content surfaces default to solid instead of translucent** — `Dialog`, `AlertDialog`, `Drawer`, and `Toast` all used the same translucent `--color-bg-surface` token with no `backdrop-filter`, which read as a washed-out, half-see-through panel rather than deliberate frosted glass (that treatment only works, and was only ever paired with a blur, on small popups like `Combobox`/`DatePicker`). They now default to a new opaque `--color-bg-surface-solid` token. `Dialog` and `Drawer` gained a `background="solid" | "translucent"` prop if you specifically want the old look back; `AlertDialog`/`Toast` don't have a translucent option since there was no design case for it. **Re-check any custom CSS overrides targeting these components' previous translucency.**
- **`Container`'s default (`maxWidth="layout"`) now actually constrains width** — it was silently resolving to an undefined CSS variable (`var(--max)`, never defined anywhere in the package) and rendering edge-to-edge with no max-width at all. `--max` is now defined (1400px, the company-wide desktop content width) and the CSS has a `75rem` fallback besides. **Any project that was unknowingly relying on the previous no-op behavior for full-bleed layout will now see default-configured `Container`s width-constrained to 1400px** — pass `maxWidth="full"` explicitly if that's actually what you want.
- **`Button`'s open `[key: string]: any` index signature removed** — it silently accepted (and type-checked) any prop name, including typos (`varaint`, `onClik`, etc.). Explicit `href`/`target`/`rel` props were added to keep the documented `as="a" href="..."` pattern working. **Any code that was relying on passing an unrecognized prop name through `Button` (typo or otherwise) will now fail to type-check.**
- **`Form`'s `submitVariant` no longer accepts `'tertiary'`** — it was never a real `Button` variant (a pre-existing, unrelated latent bug — `Button` only ever had `'ghost'`/`'subtle'` in that weight class). Use `'ghost'` instead.
- **`GridItem`'s `span`/`start` behavior changes** — it never imported its own compiled stylesheet; the classnames it generated (`"span-6"`, etc.) were plain, unscoped strings that could never match this package's actual hashed build output (confirmed empirically: `grid-column` didn't appear anywhere in the shipped `dist/index.css` before this fix). In practice, `GridItem`'s column span/start positioning has likely never applied any styling in the published package, at any breakpoint. It's fixed now (and gained the previously-missing `sm` breakpoint tier as a side effect) — **any layout that was silently falling back to implicit grid auto-placement because of this bug will visually change** once `span`/`start` actually take effect.

### Added

- **New tokens** (`tokens.css`): `--max` (1400px, `Container`/`Navbar`/`Footer`'s shared content-width token), `--overlay-center-offset` (0px default; set to your fixed navbar's height so `Dialog`/`AlertDialog` center in the content area below it instead of the full viewport), `--color-bg-surface-solid` (opaque surface for large overlays), `--color-brand-primary-rgb`/`--color-success-rgb`/`--color-warning-rgb`/`--color-error-rgb` (for `rgba(var(--...-rgb), alpha)` tints that actually follow a rebrand). `--text-xs`/`--text-sm` now bump slightly (13px/15px) under `@media (max-width: 640px)` for phone-screen readability.
- `Dialog`, `Drawer`: `background` prop (`'solid' | 'translucent'`, default `'solid'`).
- `Dialog`, `AlertDialog`: `className` prop (previously only `Drawer`/`Popover`/`DropdownMenu`/`Tooltip` had one).
- `AlertDialog`: a thrown/rejected `onConfirm` now surfaces inline via `ErrorText` instead of becoming an unhandled promise rejection with no UI; Escape is now ignored while `onConfirm` is in flight instead of unmounting the dialog mid-confirm.
- `ToastProvider`: `position` prop (`'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'top-center' | 'bottom-center'`, default `'bottom-right'`, matching the previous hardcoded corner). `addToast(message, type?, { duration })` — `duration: 0` disables auto-dismiss.
- `DropdownMenu`, `Popover`, `Tooltip`: content surfaces now pair their translucent background with `backdrop-filter: blur(12px)`, matching `Combobox`/`DatePicker`'s existing small-popup treatment (their `className` prop already existed in code but wasn't documented — now is).
- `Navbar`: `maxWidth` (defaults to the `--max` token, so the navbar's content row lines up with `Container`-based page content automatically), `mobileMenuLogo`, `mobileMenuShowHome`, `mobileMenuHomeHref` (threaded through to `MobileMenuContent`).
- `MobileMenuContent`: `logo` (ReactNode slot, replaces the hardcoded IMADGEN logo when provided), `showHome` (default `true`), `homeHref` (default `'/'`), `homeLabel` (default `'Home'`).
- `Footer`: `maxWidth` (same `--max` token as `Navbar`/`Container`), `className`.
- `FeatureGrid`, `Testimonial`, `LogoCloud`: `className` (bringing them in line with `Hero`/`CTA`/`PricingCard`).
- `PricingCard`: `featuredLabel` (override the "Recommended" badge text), `className`.
- `LogoCloud`: per-logo `width`/`height` (default 120×40), for logos that aren't ~3:1.
- `Pagination`: `prevLabel`, `nextLabel`, `renderPageInfo?: (current, total) => ReactNode`.
- `DatePicker`: `weekdayLabels`, `monthLabels`, `weekStartsOn` (`0 | 1`, default `0`/Sunday) for non-English/Monday-start calendars.
- `Badge`, `Tag`, `Alert`, `StatCard`: `'custom'` variant/tone — applies no built-in color/background, for full re-theming of a single instance via `className`.
- `Table`: `getRowKey?: (row, index) => React.Key` — derive a stable row key instead of the array-index default, for tables whose rows can be sorted/filtered/reordered.
- `Checkbox`, `Switch`, `RadioGroup`: now extend the underlying Radix primitive's own props and spread the rest onto it — `name`, `value`, `required`, `data-*`, and other native/ARIA attributes all reach the primitive now. `Checkbox`'s `label` and `RadioGroup`'s `items[].label` widened from `string` to `ReactNode` (matching `ToggleGroup`'s existing `label` type), so a label with an embedded link now works.
- `FormField`: automatically wires `aria-describedby` (pointing at whichever of the error/hint text is rendered) and `aria-invalid` onto its child control, when that child is a single valid element. `ErrorText`, `HelperText`: new `id` prop.
- `ChatPage`: `title` (default `'Imadgen AI'`), `subtitle` (default `'Quantum-V2 Core'`) — previously hardcoded with no override.
- `ChatProvider`: `maxFailures` (default `3`, previously a hardcoded constant), `api` (points `useChat` at a different endpoint than the `@ai-sdk/react` default of `/api/chat`).
- `forwardRef` added across every layout/typography primitive (`Stack`, `Flex`, `Cluster`, `Grid`, `GridItem`, `Section`, `Surface`, `Container`, `Divider`, `Spacer`, `AspectRatio`, `Heading`, `Text`, `Link`, `Code`, `Kbd`), each now properly extending the relevant `React.HTMLAttributes` and spreading rest props (`Surface` previously used an open `[key: string]: any` instead) — `id`, `onClick`, `data-testid`, `aria-*`, and a DOM `ref` all reach the rendered element now.
- `EmbersBGE`, `NetBGE`, `SwarmsBGE`, `WaveformBackground`: now respect `prefers-reduced-motion` (render one static frame instead of animating), and derive their brand-colored particles/orbs from `--color-brand-primary`/`--color-brand-primary-rgb` at draw time instead of a hardcoded hex/rgba — overriding those tokens to rebrand now recolors the background effects too.
- `LightTheme`: moved from unscoped global class names (`"toggle"`, `"toggle-placeholder"`) to a proper CSS Module — previously only rendered correctly if the host app happened to define matching global selectors.

### Fixed

- `Combobox`: `name` only mirrored into a hidden native `<select>` when `required` was also set, so a `name`-only field silently dropped out of `FormData` with no warning. Now renders whenever `name` is set; `required` only gates the HTML `required` attribute.
- `WaveformBackground`: its `requestAnimationFrame` loop was never cancelled on unmount (the other three canvas effects already did this correctly) — a real, unbounded animation leak on every mount in an app with client-side navigation.
- `OtpForm`: digit inputs had `maxLength={2}`, only behaving correctly today because the change handler manually slices to the last character. Now `maxLength={1}`.
- `Navbar`, `Footer`: both rendered `className="wrap"` — a literal, non-module class name matching nothing anywhere in this package — so content-width centering silently did nothing in a fresh project unless it happened to define an unrelated global `.wrap` class. Now real CSS Module classes reading the new `--max` token.
- `Table`: header cells were keyed by their own label text, causing duplicate-key warnings for two blank/identical headers (e.g. adjacent icon-only action columns). Now keyed by label + index.
- `Dialog`: `size="md"` was a byte-for-byte duplicate of the unsized default (both set `max-width: 500px`) — a no-op preset that suggested the three-tier size system wasn't fully reasoned through. Removed the redundant rule.
- `Badge`, `Tag`, `Alert`, `DropdownMenu` (danger-hover): tint backgrounds were hardcoded `rgba()` literals matching today's brand/semantic hex values — overriding the corresponding token (the package's own documented rebrand path) recolored text but not these backgrounds. Now derived from the new `-rgb` tokens.
- `Button`: resting/hover `box-shadow` was a flat literal ignoring the theme-aware `--shadow-md`/`--shadow-lg` tokens (which have different opacities per theme) — now uses them, so the shadow lightens correctly under the light theme.
- `Form`: the `CursorGlow`-driven mouse gradient (`var(--mx)`/`var(--my)`, no fallback) silently failed to render *at all* if `CursorGlow` wasn't mounted, since an unresolvable `var()` invalidates the whole `background` declaration. Now falls back to `50%`.
- `Link`: external-link detection only matched `http://`/`https://`, so `mailto:`, `tel:`, and protocol-relative (`//…`) hrefs fell through to `next/link`, which tried to client-side-route to them instead of letting the browser open the mail client/dialer/host. Now detects any URI scheme or protocol-relative URL, special-casing `mailto:`/`tel:` to render as a plain anchor without `target="_blank"`.
- `AlertDialog`: see Added above (ESC-during-loading and unhandled-rejection fixes are behavior changes, but non-breaking).
- `Toast`: the auto-dismiss `setTimeout` was never cleared on manual (click) dismiss or on `ToastProvider` unmount. Timers are now tracked per toast and cleared in both places.

### Docs

- Corrected the claim that `Navbar`'s 1024px mobile/desktop cutover can be overridden via a `className` with higher specificity — it can't; the elements gated by that breakpoint are internal to the CSS Module and never exposed. Changing it means forking the component's CSS.
- Documented `--breakpoint-sm/md/lg/xl` as reference-only — CSS custom properties can't be used inside `@media` conditions in any browser, so overriding them has no effect on any component's actual responsive behavior.
- Documented the `html { font-size }` rem-cascade trick (Token System → Density) as the sanctioned, company-wide way to make an app read "bigger" without touching component code.
- Documented `--max`/`--overlay-center-offset` and the `Navbar`/`Footer`/`Dialog`/`AlertDialog` props that consume them, for the navbar-first, 1400px-desktop company standard.
- Added `className` to the `Popover`/`DropdownMenu`/`Tooltip` prop tables (already accepted in code, previously undocumented) and documented `Toast`'s default position.
- Added a **Design Principles** section (component tiers — primitives / layout shells / composite patterns; dense data as rows, not cards; pick the page frame before the content) — conventions the components are built to support but that weren't written down anywhere.

---

A short follow-up pass against a general "design system foundations" checklist, done before the above was released:

### Added

- **Motion tokens** (`tokens.css`): `--duration-fast` (0.15s), `--duration-base` (0.2s), `--duration-slow` (0.3s), `--easing-standard`/`--easing-in`/`--easing-out`. The package had color/spacing/radius/shadow tokens but nothing for animation — every component hardcoded its own duration/easing, with real drift between them (`0.2s ease` vs `0.3s ease` vs `0.18s ease` vs inconsistently-formatted `.2s ease` for components using literally the same value). These are foundation tokens only — existing component CSS is **not** retrofitted to consume them in this pass; new/updated component CSS should reach for these instead of another ad hoc value.
- `--color-brand-accent-rgb` (255, 174, 0) — closes the last remaining hardcoded-hex gap in `Alert`'s `info` tone, `ChatPage`'s premium-glow gradient, and `ImBgAurora`'s third blob, all of which previously left `--color-brand-accent` (`#ffae00`) as a literal specifically because this token didn't exist yet.
- `--color-text-on-brand` (`#fff`) — dedicated, deliberately theme-invariant token for text/icons on a solid brand-orange fill (`Button`'s `brand-solid` variant, `DatePicker`'s selected day). Previously hardcoded `#fff` directly; `--color-text-inverted` was the wrong existing token to reach for here since it flips to near-black in dark mode, which a constant-orange fill doesn't want in either theme.

### Fixed

- `Button`'s `danger` variant used `#ff4d4d`/`rgba(255,50,50,…)` — a **different red than `--color-error` (#ef4444)** used everywhere else in the kit (`Alert`, `Badge`, `Tag`, `DropdownMenu`'s danger item). Now derived from `--color-error`/`--color-error-rgb`, so a danger `Button` matches the rest of the system's danger color exactly.

---

A performance and security pass, done before release: a security audit (ReDoS, XSS/injection sinks, prototype pollution, dependency pinning, storage) came back clean except for one real finding below; rendering-performance and bundle/runtime-cost audits surfaced the fixes that follow.

### Fixed

- **Security**: `Link.tsx` rendered any `href` — including `javascript:`/`data:`/`vbscript:` schemes — as a real, clickable, code-executing anchor. Low severity (requires a click, and `href` is normally developer-authored config, not end-user input) but cheap to close: a dangerous-scheme `href` now renders its children as inert text instead of a navigable link.
- **Performance — `ChatPage`**: the entire message history re-rendered on every streamed token while an assistant reply was generating (no per-message memoization), the most visible jank source found in the audit. Extracted a `React.memo`'d message-bubble component with a content-based (not reference-based) equality check, so only the message actually changing re-renders.
- **Performance — `Toast`**: `ToastContext`'s value object was rebuilt on every `ToastProvider` render (i.e. every toast add/remove anywhere in the app), even though `addToast`/`removeToast` were already stable — any component reading only `addToast` re-rendered on every unrelated toast. Now memoized.
- **Performance — `Combobox`**: the search filter and selected-option lookup ran unconditionally in the render body, including on `highlightedIndex` updates from mouse hover — moving the mouse over a large option list re-filtered the whole list on every hovered item. Now memoized against `options`/`query`/`value`.
- **Performance — `DatePicker`**: the calendar grid (42 `Date` allocations + formatting) rebuilt on every render, including ones unrelated to the calendar (e.g. the scroll/resize reposition handler). Now memoized against `viewDate`/`weekStartsOn`.
- **Performance — `CursorGlow`**: wrote 4 CSS custom properties directly inside the raw `mousemove`/`touchmove` handler with no coalescing — `mousemove` can fire far faster than the display refresh rate, forcing a style recalculation on every event. Now coalesces to at most once per animation frame, matching the pattern the canvas effects already use.
- **Performance — canvas effects** (`NetBGE`, `EmbersBGE`, `SwarmsBGE`, `WaveformBackground`): all four called `getComputedStyle` to read the brand color on every animation frame (`NetBGE` twice per frame) even though it only changes on a theme toggle. Now cached and only re-read via a `MutationObserver` watching the `data-theme` attribute.
- **Performance — `EmbersBGE`/`SwarmsBGE`**: both built a fresh `createRadialGradient` per particle per frame (~90 and ~80 particles respectively, at 60fps — the dominant per-frame cost in these two effects, more than their O(n²) particle-link loops). Now bake the glow into an offscreen-canvas sprite once (rebuilt only on a theme change) and reuse it via `drawImage`.
- **Performance — `ChatPage`**: `.container`/`.premiumWrapper`'s `backdrop-filter` blur radii (32px/36px — 3x+ the 12px used by small popups elsewhere in the kit) reduced to 18px. `backdrop-filter` cost scales with blur radius, and `.premiumWrapper` also animates its own transform on focus, forcing the browser to recompute the blur every frame of that transition.

### Docs

- Documented that `@imadgentech/ui/server.css` is a strict subset of `@imadgentech/ui/styles.css` (confirmed: 100% of `server.css`'s classes already exist in `index.css`) — apps that load both (the common pattern when mixing RSC and client components) are shipping the same ~39KB of CSS twice for no benefit; only load `server.css` on its own if `styles.css` is never loaded at all.

## [1.0.20] — 2026-07-06

### Breaking

- **`Button` sizing** (`Button.module.css`) — `sm`/`md`/`lg` padding and font-size moved from fixed `px` to the same `rem`-based tokens `Select` already uses (`--space-*`, `--text-*`), plus a `min-height` per size. A `Button` now renders at the same real height as a sibling `Input`/`Select` at any root font-size — previously they only lined up by coincidence at a 16px root, and silently drifted apart at any other root font-size. **Every `Button` in every consuming app will render at a different (generally tighter) size.** Re-check button-heavy screens after upgrading.
- **`StatCard` `variant="neutral"`** (`StatCard.tsx`, `StatCard.module.css`) — `neutral` no longer colors the value orange; it now renders the default text color, matching its name. A new `variant="brand"` carries the old orange treatment forward. **Any `StatCard` relying on the default (`neutral`) variant to render orange needs `variant="brand"` added explicitly**, including anywhere a `'neutral'` branch of conditional variant logic assumed orange.

### Added

- `Text`: `weight` accepts `'bold'` (new `--font-extrabold: 700` token); `tone` accepts `'success'` (`var(--color-success)`), bringing it in line with `Badge`'s variant set.
- `tokens.css`: short alias custom properties — `--color-brand`, `--color-text`, `--color-border`, `--color-danger` — falling back to the canonical `--color-brand-primary` / `--color-text-default` / `--color-border-default` / `--color-error` tokens. These are the shorter names people tend to reach for from memory; a typoed token used to fail silently (the property just resolves to nothing, no error anywhere), so the alias makes the "obvious" name work too.
- `Button`: new `variant="brand-solid"` — a solid-filled orange button (`#c85c0e`, hover `#b35209`, faded fill when disabled) for primary actions, alongside the existing ghost-tint `brand` variant.
- `Dialog`: new `size` prop (`'sm' | 'md' | 'lg'`, default `'md'` — unchanged 500px) and a `maxWidth` escape hatch accepting a raw CSS value. Previously every `Dialog` was capped at a hardcoded 500px with no way to override it.
- `Combobox` (new component, Forms) — searchable/filterable select. The trigger is sized to match `Input`/`Select` at each size out of the box; the dropdown is portal-rendered to `document.body` and positioned off the trigger's bounding rect, so it isn't clipped by a parent `overflow` container (e.g. a scrollable table). Options are `{ value, label, sub? }` — `sub` renders as a smaller muted line under the label. Renders a visually-hidden native `<select required>` alongside the trigger so native HTML5 validation still fires.
- `DatePicker` (new component, Forms) — a real calendar popup (month grid, prev/next navigation, today/selected states, optional `min`/`max`), portal-rendered and themed via CSS variables — replacing the pattern of styling a trigger around the browser's native, unstylable `<input type="date">` picker. A hidden native date input still backs it for form participation (`name`, `required`, `FormData`).
- `Alert` (new component, Data Display) — persistent inline message box (`tone: 'neutral'|'info'|'success'|'warning'|'danger'`), optional `title`, `action`, and `onDismiss` (renders a × only if provided). For form-level errors and standing notices; `Toast` remains the ephemeral option.
- `Tag` (new component, Data Display) — removable/interactive pill (`variant` matches `Badge`'s set), optional `onRemove` (renders a × only if provided). For filters, multi-select summaries, and keyword lists — `Badge` remains for static labels.
- `Progress` (new component, Data Display) — determinate (`value`/`max`) or indeterminate (omit `value`) progress bar, `tone` matching semantic colors, `size: 'sm'|'md'`.
- `Spinner` (new component, Data Display) — standalone loading indicator (`size`, `tone`) for full-page/section loading, extracted from `Button`'s existing inline spinner pattern. `Button`/`IconButton` keep their own internal spinner unchanged — no behavior change there.
- `DropdownMenu` (new component, Overlays, built on new dep `@radix-ui/react-dropdown-menu`) — actions menu with `items: { label, icon?, onClick?, variant?, disabled?, shortcut? }[]` plus `{ separator: true }` entries, keyboard nav and typeahead via Radix. `variant: 'danger'` renders an item in red.
- `AlertDialog` (new component, Overlays, built on new dep `@radix-ui/react-alert-dialog`) — confirm/destructive-action dialog with built-in Cancel/Confirm buttons. `onConfirm` may be async; the confirm button shows a loading state and the dialog closes only after it resolves. `confirmVariant` defaults to `'danger'`.
- `Drawer` (new component, Overlays, reuses existing dep `@radix-ui/react-dialog` — same primitive `MobileMenu` already uses) — side panel (`side: 'left'|'right'|'bottom'`) for filters/side-forms, fixed-width rather than full-screen.
- `ToggleGroup` (new component, Forms, built on new dep `@radix-ui/react-toggle-group`) — segmented control supporting both `type="single"` and `type="multiple"` off one component; `items: { value, label, disabled? }[]`.

### Fixed

- `Dialog`'s close icon and `Select`'s dropdown arrow were mojibake **in the package's own source** (`Dialog.tsx`, `Select.tsx`) — not a build-step encoding issue. Already-double-encoded characters had been pasted into JSX at some point, so every consumer got garbled glyphs (`\xC3—`-style garbage) instead of `×` / `▼`. Fixed at the source; now compiles to the correct `\xD7` / `▼`.

## [1.0.19] · [1.0.18] · [1.0.17]

### Added

- `@imadgentech/ui/chat` — split `ChatPage`, `ChatProvider`, and `useChatContext` out of the main entry into a dedicated entry point. Apps that don't use chat no longer pull in `@ai-sdk/react`, `ai`, or `swr`. Import its stylesheet separately via `@imadgentech/ui/chat.css`.
- `Breadcrumbs` added to `@imadgentech/ui/server` (no client-side dependencies, RSC-safe); exports `BreadcrumbItem`/`BreadcrumbsProps` types from the server entry too.

### Fixed

- Added a top-level `'use client'` directive to the main and chat bundle outputs — prevents `createContext` errors when importing either entry directly from a React Server Component.
- Added missing `import React from 'react'` to `Divider`, `EmbersBGE`, `NetBGE`, and `SwarmsBGE` — same class of bug as the `ImBgAurora`/`LightTheme` fix in 1.0.13, just missed on the first pass.

## [1.0.15] · [1.0.14]

No changelog entries were recorded for these releases.

## [1.0.13] — 2026-06-22

### Fixed

- `ReferenceError: React is not defined` in compiled ESM/CJS output from background effect components.
- `ImBgAurora.tsx` — added missing `import React from 'react'`.
- `LightTheme.tsx` — updated import to include the React namespace: `import React, { useState, useEffect } from 'react'`.
- Both components used JSX without explicitly importing React, so compiled `React.createElement` calls had nothing bound. This affected consuming apps rendering these components, especially in server-side/RSC contexts where React wasn't otherwise bound in the bundle.

## [1.0.6] — 2026-06-18

### Added

- `--space-20`, `--space-40`, `--space-80` to the spacing scale — fixes `Accordion` trigger padding, `Select` size-lg icon clearance, and `Navbar` desktop container padding.
- `--z-overlay: 1050` — fixes `Dialog` backdrop and `MobileMenu` overlay stacking relative to the navbar.
- `--tracking-widest: 0.1em` — fixes `LogoCloud` title letter-spacing.
- `--noise-texture` CSS custom property — moves `CTA`'s SVG grain texture into global token scope, preventing CSS Modules builds from corrupting the SVG namespace URI.

### Changed

- `Form.module.css` — migrated all v0.x tokens (`--card`, `--btnBg`, `--radius2`, `--shadow`, etc.) to the `--color-*` / `--radius-*` / `--shadow-*` system.
- `Footer.module.css` — migrated `--muted`, `--muted2`, `--btnBorder`, `--btnBg`, `--btnHover`, `--line`.
- `ChatPage.module.css` — migrated widget-specific tokens (`--surfaceBg`, `--surfaceBorder`, `--surfaceRadius`, `--surfaceShadow`, `--richLine`, `--text`, `--muted2`).

### Fixed

- Added `"./dist/index.css"` as a deprecated export alias in `package.json` alongside `"./styles.css"`, for backward compatibility.

## [1.0.5]

### Added

- `style` prop to all remaining components that were missing it.

## [1.0.4] and earlier

Internal development. Tokens were migrated from the v0.x naming system (`--card`, `--btnBg`, `--orange`, etc.) to the current `--color-*` / `--space-*` / `--radius-*` system. Some components (`Form`, `Footer`, `ChatPage`) weren't fully migrated until 1.0.6.
