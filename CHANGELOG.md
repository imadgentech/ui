# Changelog

All notable changes to `@imadgentech/ui` are documented here, newest first. Entries are grouped **Breaking** / **Added** / **Changed** / **Fixed**. If you're upgrading, read the **Breaking** subsection of every version between your current one and the target before bumping.

## [Unreleased] — 2026-07-06

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
