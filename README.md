# @imadgentech/ui

Shared React component library for all IMADGEN Next.js projects. Built on CSS Modules + Radix UI primitives, published to GitHub Packages.

> **Upgrading?** Check [CHANGELOG.md](./CHANGELOG.md) first — the top entry lists every breaking change since your installed version, with the exact call sites that need attention. This README always documents the current API only; it does not carry "as of version X" notes, so it can go out of sync with what you have installed until you upgrade.

---

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Token System](#token-system)
- [Design Principles](#design-principles)
- [Mobile & Responsive Behavior](#mobile--responsive-behavior)
- [Components](#components)
  - [Forms](#forms)
  - [Layout](#layout)
  - [Navigation](#navigation)
  - [Data Display](#data-display)
  - [Overlays](#overlays)
  - [Typography](#typography)
  - [Marketing](#marketing)
  - [AI Chat](#ai-chat)
  - [Background Effects](#background-effects)
- [Server Components](#server-components)
- [Theming](#theming)
- [Changelog](CHANGELOG.md)

---

## Installation

This package is published to GitHub Packages under the `@imadgentech` scope. Add an `.npmrc` file to the consuming project:

```
@imadgentech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Then install:

```bash
npm install @imadgentech/ui
```

Peer dependencies required:

| Peer | Version | Required? |
|---|---|---|
| `react` | `>=18` | Always |
| `react-dom` | `>=18` | Always |
| `next` | `>=14` | Always |
| `next-themes` | `>=0.4` | Always |
| `@ai-sdk/react` | `>=3` | Only if using `@imadgentech/ui/chat` |
| `ai` | `>=6` | Only if using `@imadgentech/ui/chat` |

**If you are not using the AI chat widget**, you do not need `@ai-sdk/react` or `ai`. These packages (and their transitive dependency `swr`) are isolated to the `@imadgentech/ui/chat` entry and will not be pulled into your bundle otherwise.

### Entry points

| Import path | Contents | `'use client'`? |
|---|---|---|
| `@imadgentech/ui` | All interactive UI components | Yes (bundle-level) |
| `@imadgentech/ui/chat` | ChatPage, ChatProvider, useChatContext | Yes (bundle-level) |
| `@imadgentech/ui/server` | Layout, typography, marketing — server-safe | No |

> The main and chat bundles both carry a top-level `'use client'` directive, so importing them directly inside a React Server Component is safe — Next.js will treat them as a client boundary automatically.

---

## Setup

### 1. Import the stylesheet

In your root layout (`app/layout.tsx`):

```tsx
import '@imadgentech/ui/styles.css';
```

> **Note:** The legacy path `@imadgentech/ui/dist/index.css` is kept as a deprecated alias that resolves to the same file. Prefer `styles.css` going forward.

You can also import the raw design tokens standalone (useful for admin panels or apps that need the token variables but not the full component CSS):

```tsx
import '@imadgentech/ui/tokens.css';
```

### 2. Wrap your app in Providers

`Providers` sets up `next-themes` with `data-theme` attribute support.

```tsx
// app/layout.tsx
import { Providers } from '@imadgentech/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers defaultTheme="dark" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultTheme` | `string` | `'dark'` | Initial theme before user preference is detected |
| `enableSystem` | `boolean` | `true` | Respect OS preference |
| `children` | `ReactNode` | — | Required |

### 3. Add CursorGlow (recommended)

`CursorGlow` tracks the mouse and writes `--mx`, `--my`, `--mxpx`, `--mypx` as CSS custom properties on `<html>`. Several components (`Form`, `Surface`) use these for interactive gradient effects.

```tsx
// app/layout.tsx
import { CursorGlow } from '@imadgentech/ui';

// Inside layout body:
<CursorGlow />
```

Renders nothing to the DOM. Safe to include once globally.

---

## Token System

Tokens are CSS custom properties defined in `src/tokens/tokens.css` and shipped at `@imadgentech/ui/tokens.css`. All components reference these variables — **never hardcoded values.**

### Colors

| Token | Dark value | Description |
|---|---|---|
| `--color-bg-base` | `#050505` | Page background |
| `--color-bg-surface` | `rgba(255,255,255,0.05)` | Card / elevated container — translucent by design |
| `--color-bg-surface-hover` | `rgba(255,255,255,0.07)` | Hover state of surface |
| `--color-bg-surface-subtle` | `rgba(255,255,255,0.04)` | Nested surface |
| `--color-bg-surface-solid` | `#17181b` | Opaque counterpart of `--color-bg-surface`, used by large overlay surfaces (`Dialog`, `AlertDialog`, `Drawer`, `Toast`) where translucency-with-no-blur would read as unfinished rather than deliberate |
| `--color-bg-code` | `rgba(255,255,255,0.08)` | Inline code background |
| `--color-text-default` | `rgba(255,255,255,0.92)` | Primary text |
| `--color-text-muted` | `rgba(255,255,255,0.68)` | Secondary text |
| `--color-text-subtle` | `rgba(255,255,255,0.52)` | Placeholder / tertiary text |
| `--color-text-inverted` | `rgba(10,10,10,0.92)` | Flips per theme — text for a surface whose own color also flips with the theme |
| `--color-text-on-brand` | `#fff` | Deliberately theme-invariant — text/icons on a solid brand-orange fill (`Button`'s `brand-solid`, `DatePicker`'s selected day), since the orange itself doesn't change between themes |
| `--color-brand-primary` | `#ff6a00` | Brand orange |
| `--color-brand-primary-hover` | `#ff8a1f` | Hover state |
| `--color-brand-secondary` | `#ff8a1f` | Gradient partner |
| `--color-brand-accent` | `#ffae00` | Amber accent |
| `--color-success` | `#22c55e` | |
| `--color-warning` | `#f59e0b` | |
| `--color-error` | `#ef4444` | |
| `--color-border-default` | `rgba(255,255,255,0.12)` | Standard border |
| `--color-border-hover` | `rgba(255,255,255,0.16)` | Border on hover |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | Divider / separator |
| `--color-focus-ring` | `rgba(255,106,0,0.4)` | Keyboard focus outline |

Light theme overrides are applied automatically under `[data-theme="light"]`.

**Short aliases** — fall back to the canonical tokens above, for the shorter names people tend to reach for from memory. A typo in a CSS custom property fails silently (the property resolves to nothing, no error), so these exist to make the "obvious" name work too:

| Alias | Resolves to |
|---|---|
| `--color-brand` | `--color-brand-primary` |
| `--color-text` | `--color-text-default` |
| `--color-border` | `--color-border-default` |
| `--color-danger` | `--color-error` |

**RGB triplets** — for tinted backgrounds that need a custom alpha (`rgba(var(--color-brand-primary-rgb), .15)`), rather than a hardcoded literal that stops following the hex token above once a project rebrands:

| Token | Value |
|---|---|
| `--color-brand-primary-rgb` | `255, 106, 0` |
| `--color-brand-accent-rgb` | `255, 174, 0` |
| `--color-success-rgb` | `34, 197, 94` |
| `--color-warning-rgb` | `245, 158, 11` |
| `--color-error-rgb` | `239, 68, 68` |

### Spacing

Base-8 scale. All values are `rem`.

| Token | Value |
|---|---|
| `--space-2` | `0.125rem` |
| `--space-4` | `0.25rem` |
| `--space-8` | `0.5rem` |
| `--space-12` | `0.75rem` |
| `--space-16` | `1rem` |
| `--space-20` | `1.25rem` |
| `--space-24` | `1.5rem` |
| `--space-32` | `2rem` |
| `--space-40` | `2.5rem` |
| `--space-48` | `3rem` |
| `--space-64` | `4rem` |
| `--space-80` | `5rem` |

### Border Radius

| Token | Value | Equivalent to |
|---|---|---|
| `--radius-sm` | `0.25rem` | 4px |
| `--radius-md` | `0.625rem` | 10px |
| `--radius-lg` | `1.125rem` | 18px |
| `--radius-xl` | `1.625rem` | 26px |
| `--radius-full` | `9999px` | pill |

### Shadows

`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-focus`

### Motion

`--duration-fast` (0.15s), `--duration-base` (0.2s), `--duration-slow` (0.3s), `--easing-standard` (`ease`), `--easing-in` (`ease-in`), `--easing-out` (`ease-out`). These are the foundation for the durations/easings already used across the kit (`0.2s ease` is the most common pairing today) — existing component CSS isn't retrofitted to consume them yet, but new or updated component CSS should reach for these instead of another one-off value. Every animated component already respects `prefers-reduced-motion` independent of this.

### Z-Index

| Token | Value | Used by |
|---|---|---|
| `--z-background` | `-1` | Background effects |
| `--z-base` | `0` | |
| `--z-popover` | `300` | Popover, Tooltip |
| `--z-tooltip` | `400` | Tooltip |
| `--z-navbar` | `1000` | Navbar |
| `--z-sticky` | `1000` | Sticky elements |
| `--z-overlay` | `1050` | Dialog backdrop, MobileMenu overlay |
| `--z-modal` | `1100` | Dialog content, MobileMenu content |
| `--z-toast` | `1200` | Toast notifications |

### Typography

**Font families:** `--font-sans`, `--font-mono`

**Font sizes:** `--text-xs` → `--text-xl` (12px → 20px). `--text-xs`/`--text-sm` bump slightly (13px/15px) under `@media (max-width: 640px)` — never use them for primary/body content regardless of viewport; `--text-md` (16px) is the floor for anything a user is meant to actually read.

**Heading sizes** (fluid/responsive): `--heading-sm` through `--heading-display`

**Font weights:** `--font-light (350)`, `--font-normal (400)`, `--font-medium (425)`, `--font-semibold (450)`, `--font-bold (500)`, `--font-extrabold (700)`

**Line heights:** `--leading-tight` → `--leading-loose`

**Letter spacing:** `--tracking-tight (-0.02em)`, `--tracking-normal (0)`, `--tracking-wide (0.025em)`, `--tracking-widest (0.1em)`

### Layout

| Token | Default | Description |
|---|---|---|
| `--navbar-height` | `67px` | Reserve space below fixed navbar |
| `--navbar-bg` | `rgba(5,5,5,0.85)` | Navbar background |
| `--sidebar-width` | `0px` | Override in apps that have a sidebar |
| `--max` | `87.5rem` (1400px) | `Container`'s `maxWidth="layout"` default and `Navbar`/`Footer`'s inner content width — the company-wide desktop content width. Override once to change it everywhere those three read it. |
| `--overlay-center-offset` | `0px` | `Dialog`/`AlertDialog` center on the full viewport by default. Set this to your fixed navbar's height (often the same value as `--navbar-height`) so modals center in the content area below it instead of sitting visibly low. No effect on sidebar-only layouts that leave it at `0px`. |

### Customizing Tokens

Override any token by targeting `:root` in your global CSS **after** importing `styles.css`:

```css
/* app/globals.css */
:root {
  --color-brand-primary: #7c3aed; /* swap brand color */
  --sidebar-width: 240px;         /* inform footer/layout */
}
```

### Density

Every spacing, radius, and font-size token in this file is defined in `rem`. That means a single root font-size override scales the entire system — spacing, type, and radii together — with zero component-level changes:

```css
/* app/globals.css, after importing tokens.css/styles.css */
html {
  font-size: 17px; /* browser default is 16px; every rem token now scales up ~6% */
}
```

This is the sanctioned way to make an app read "bigger and more readable" without hardcoding font sizes anywhere in your own page code — keep using `Heading`/`Text`'s `size` props, and the density change happens once, at the root. 16–18px is a reasonable range; don't go outside it without checking touch-target and line-length effects. Two apps on the same design system with different (or no) root override will visibly differ in density — treat this as a deliberate per-app choice, not something to leave at the browser default by accident.

---

## Design Principles

A few conventions worth knowing before you start composing screens — none of these are enforced by the compiler, they're judgment calls the components are built to support.

**Reach for the highest-level piece that fits.** Components fall into three rough tiers:

- **Primitives** — `Button`, `Input`, `Text`, `Heading`, `Badge`, `Checkbox`, etc. The smallest useful unit; almost everything else is built from these.
- **Layout shells** — `Navbar`, `Container`, `Section`, `Grid`/`GridItem`, `Stack`/`Flex`. Own page structure and spacing, not content.
- **Composite patterns** — `Surface` (a styled card container), `Table`, `FormField`, `EmptyState`, `PricingCard`, `Dialog`. Assemble primitives into a recognizable, reusable unit so nobody hand-rolls the same "label + input + error" grouping twice.

Before reaching for a raw `<div>`/`<a>`/`<button>`, check whether a primitive already covers it — that's where visual/behavioral inconsistency (missing focus states, wrong spacing scale, untracked hardcoded colors) creeps back in fastest.

**Dense data reads as rows, not cards.** `Surface`/card-style wrapping is for widgets, galleries, and settings groups — discrete, self-contained things. A list of many similar items (a table of invoices, a settings list, a log) should use `Table` or a plain row layout instead; wrapping every row in its own card just to "look consistent" makes dense data visually noisy and harder to scan.

**Pick the page frame before the content.** Decide the shell — navbar vs. sidebar, `Container`'s width, whether the page is full-bleed — before composing what goes inside it. The company standard is a fixed top `Navbar` (not a sidebar) over a 1400px-wide `Container` (the `--max` token's default) — see Mobile & Responsive Behavior below and the `Navbar`/`Container`/`Dialog` entries in Components for the tokens that keep them aligned.

---

## Mobile & Responsive Behavior

The kit's breakpoint scale is `sm` 640px / `md` 768px / `lg` 1024px, used consistently by `Grid`, `GridItem`, `Flex`, and `Navbar`. `tokens.css` also defines `--breakpoint-sm/md/lg/xl` for reference — these exist for readability in the source and in case a future build step can consume them, but CSS custom properties cannot be used inside `@media` conditions in any browser today, so overriding them in a consuming app's `:root` has no effect on any component's actual responsive behavior. Changing a breakpoint means forking the relevant `.module.css` file.

- **Touch targets.** Interactive controls that render below the ~44px accessibility floor at their `sm` size (`Button`, `IconButton`, `Input`, `Select`, `Combobox`) automatically grow to 44px under `@media (pointer: coarse)` — i.e. on touch devices — while keeping the denser desktop sizing for mouse/trackpad. `Checkbox`, `RadioGroup`, and `Switch` expand their tappable hit area via an invisible `::before` overlay without growing the visible control.
- **Responsive layout props.** `Grid.columns`, `GridItem.span`/`start`, and `Flex.direction` all accept either a single value or a breakpoint map (`{ base, sm, md, lg }`), e.g. `<Flex direction={{ base: 'column', md: 'row' }}>` to stack on phones and go side-by-side on tablet+.
- **Overflow-prone components.** `Table` scrolls horizontally instead of breaking layout; `Tabs` scrolls its trigger row horizontally (scrollbar hidden) instead of wrapping or overflowing; `Combobox`'s portal-rendered dropdown clamps its position and width to the viewport so it can't render off-screen near a screen edge.
- **Dialog/Drawer/AlertDialog** are viewport-relative (`min(…, 90vw)`-style widths), so they fit down to ~320px-wide phone screens without extra configuration.
- **Navbar** switches from the burger `MobileMenu` to the desktop nav at 1024px (the `lg` breakpoint) — fixed by design for consistency with the rest of the scale. The elements gated by that breakpoint are internal to `Navbar.module.css`, so a `className` on `Navbar` itself can't reach them — there's currently no supported way to change the cutover point short of forking the component's CSS.
- **Container's `maxWidth="layout"` default, and `Navbar`/`Footer`'s content width**, all resolve to the same `--max` token (1400px) — set it once to change the standard page width everywhere at once. `Navbar`/`Footer` also each accept their own `maxWidth` prop for a one-off override.
- **`GridItem`'s `span`/`start` props** are responsive at all four breakpoints (`base`/`sm`/`md`/`lg`), matching `Grid.columns` and `Flex.direction`.

## Components

### Forms

#### Button

```tsx
import { Button } from '@imadgentech/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Save changes
</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger' \| 'brand' \| 'brand-solid' \| 'subtle'` | `'primary'` | `brand` is a ghost/tinted orange; `brand-solid` is solid-filled — use it for primary actions that need to read as filled |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding/font-size are on the same `rem` scale as `Input`/`Select`, so a `Button` height-matches a sibling field at the same size |
| `loading` | `boolean` | `false` | Shows spinner, disables button |
| `leftIcon` | `ReactNode` | — | Icon before label |
| `rightIcon` | `ReactNode` | — | Icon after label |
| `fullWidth` | `boolean` | `false` | Stretch to container width |
| `rounded` | `boolean` | `false` | Pill shape |
| `as` | `ElementType` | `'button'` | Render as another element (e.g. `'a'`) |
| `disabled` | `boolean` | — | Inherited from `ButtonHTMLAttributes` |

#### IconButton

```tsx
<IconButton aria-label="Close" variant="ghost" size="md">
  <XIcon />
</IconButton>
```

| Prop | Type | Default |
|---|---|---|
| `aria-label` | `string` | **Required** |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `shape` | `'square' \| 'circle'` | `'square'` |
| `loading` | `boolean` | `false` |

#### Input

```tsx
<Input
  type="email"
  placeholder="you@example.com"
  inputSize="md"
  startAdornment={<MailIcon />}
/>
```

| Prop | Type | Default |
|---|---|---|
| `inputSize` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `invalid` | `boolean` | `false` |
| `startAdornment` | `ReactNode` | — |
| `endAdornment` | `ReactNode` | — |

Extends all `<input>` HTML attributes. Use `ref` for imperative focus.

#### DatePicker

A calendar date picker — not a styled wrapper around the browser's native `<input type="date">` popup (which can't be restyled with CSS). The calendar itself is portal-rendered to `document.body` and themed via CSS variables, so it follows the app's theme instead of falling back to OS chrome.

```tsx
<DatePicker
  value={dueDate}
  onChange={setDueDate}
  placeholder="Choose date"
  size="md"
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | **Required** | ISO date string (`yyyy-mm-dd`), matching native `<input type="date">` |
| `onChange` | `(value: string) => void` | **Required** | |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Matches `Input`'s size scale |
| `min` / `max` | `string` | — | ISO date strings; out-of-range days render disabled |
| `format` | `(date: Date) => string` | `dd-mm-yyyy` | Customize the trigger's display text |
| `weekdayLabels` | `string[]` (7, Sunday-first) | English short labels | Localize the calendar's weekday header row |
| `monthLabels` | `string[]` (12) | English month names | Localize the month name shown in the calendar header |
| `weekStartsOn` | `0 \| 1` | `0` (Sunday) | `1` starts the week on Monday |
| `name`, `required`, `disabled`, `invalid`, `id` | — | — | A visually-hidden native `<input type="date">` mirrors `value`, so `required`/`name` still participate in native form validation and `FormData` |

#### Textarea

| Prop | Type | Default |
|---|---|---|
| `textareaSize` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `invalid` | `boolean` | `false` |
| `resize` | `'none' \| 'vertical' \| 'both'` | `'vertical'` |

#### Select

```tsx
<Select
  selectSize="md"
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ]}
/>
```

| Prop | Type | Default |
|---|---|---|
| `selectSize` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `invalid` | `boolean` | `false` |
| `options` | `Array<{ label: string; value: string \| number }>` | — |

If `options` is omitted, render `<option>` elements as `children`.

#### Combobox

Searchable/filterable select — for option lists a plain `<select>` makes tedious to scan, or where each option needs a secondary line (e.g. a PO number under a project name). The trigger matches `Input`/`Select`'s sizing; the dropdown is portal-rendered to `document.body` and positioned off the trigger's bounding rect, so it isn't clipped by a parent `overflow` container like a scrollable table.

```tsx
<Combobox
  value={projectId}
  onChange={setProjectId}
  options={projects.map(p => ({ value: p.id, label: p.name, sub: p.poNumber }))}
  placeholder="Select project…"
  size="md"
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | **Required** | |
| `onChange` | `(value: string) => void` | **Required** | |
| `options` | `Array<{ value, label, sub? }>` | **Required** | `sub` renders as a smaller muted line under `label`; both are matched against the search query |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Matches `Input`'s size scale |
| `placeholder` | `string` | `'Select…'` | |
| `searchable` | `boolean` | `true` | `false` renders a plain listbox with no search input — arrow keys move a highlighted option, Enter selects it |
| `invalid` | `boolean` | `false` | |
| `disabled` | `boolean` | `false` | |
| `name`, `required`, `id` | — | — | Setting `name` renders a visually-hidden native `<select>` mirroring `value`, so the field participates in `FormData`/native form submission; additionally setting `required` makes that hidden control participate in native HTML5 validation too |

Filtering is client-side substring match (case-insensitive). `Escape` closes; `Enter` selects the highlighted/single-matching option. Full `role="listbox"`/`role="option"` ARIA wiring either way.

#### Checkbox

```tsx
<Checkbox
  id="accept"
  label="Accept terms"
  checked={checked}
  onCheckedChange={setChecked}
/>
```

| Prop | Type | Default |
|---|---|---|
| `id` | `string` | **Required** |
| `label` | `string` | — |
| `checked` | `boolean` | — |
| `defaultChecked` | `boolean` | — |
| `onCheckedChange` | `(checked: boolean) => void` | — |
| `disabled` | `boolean` | — |

`label` accepts `ReactNode` (not just `string`), so a label with an embedded link (e.g. "Accept the [Terms](/terms)") works without forking. Extends the underlying Radix `Checkbox.Root` props — `name`, `value`, `required`, `data-*`, and other native/ARIA attributes all pass through.

#### Switch

Same API shape as Checkbox but renders a toggle slider. Props: `id?`, `aria-label?`, `checked?`, `defaultChecked?`, `onCheckedChange?`, `disabled?`. Extends the underlying Radix `Switch.Root` props, same as `Checkbox`.

#### RadioGroup

```tsx
<RadioGroup
  value={selected}
  onValueChange={setSelected}
  items={[
    { id: 'r1', value: 'a', label: 'Option A' },
    { id: 'r2', value: 'b', label: 'Option B' },
  ]}
  orientation="vertical"
/>
```

| Prop | Type | Default |
|---|---|---|
| `items` | `Array<{ id, value, label, disabled? }>` | **Required** |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` |
| `value` | `string` | — |
| `defaultValue` | `string` | — |
| `onValueChange` | `(value: string) => void` | — |

`items[].label` accepts `ReactNode`. Extends the underlying Radix `RadioGroup.Root` props.

#### ToggleGroup

Segmented control — button-group single/multi select, lighter weight than `Tabs`. For view switchers, filter pills, time-range pickers.

```tsx
<ToggleGroup
  items={[
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
    { value: '90d', label: '90D' },
  ]}
  value={range}
  onValueChange={setRange}
/>

<ToggleGroup
  type="multiple"
  items={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
  value={selected}
  onValueChange={setSelected}
/>
```

| Prop | Type | Default |
|---|---|---|
| `type` | `'single' \| 'multiple'` | `'single'` |
| `items` | `Array<{ value, label, disabled? }>` | **Required** |
| `value` | `string` (single) \| `string[]` (multiple) | — |
| `defaultValue` | `string` (single) \| `string[]` (multiple) | — |
| `onValueChange` | `(value: string) => void` (single) \| `(value: string[]) => void` (multiple) | — |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |

`type` discriminates the TypeScript shape of `value`/`onValueChange` — set it to `'multiple'` to get array-typed props.

`size` is pinned to the same 32/40/48px min-height scale as `Input`/`Select`/`Combobox`, so a `ToggleGroup` lines up with a sibling form control at the same size (e.g. next to a search `Input` in a toolbar row).

For `type="single"`, clicking the currently-selected item deselects it, firing `onValueChange('')` — this is Radix's underlying `ToggleGroup` behavior (which this component passes through unmodified), not something specific to this package. Guard against it in your handler if a selection must always stay non-empty.

#### Label

```tsx
<Label htmlFor="email" required>Email</Label>
```

Extends `<label>` HTML attributes. Adds `required` prop that appends `*`.

#### FormField

Composes a label + control + error/hint into an accessible unit.

```tsx
<FormField id="email" label="Email" error={errors.email} required>
  <Input type="email" id="email" invalid={!!errors.email} />
</FormField>
```

| Prop | Type | Default |
|---|---|---|
| `id` | `string` | **Required** |
| `label` | `string` | — |
| `error` | `string` | — |
| `hint` | `string` | — |
| `required` | `boolean` | — |

Error takes precedence over hint when both are provided. When the single child control is a valid React element, `FormField` clones it with `aria-describedby` pointing at whichever of the error/hint text is rendered and `aria-invalid={!!error}`, so screen readers announce the error/hint as belonging to the field automatically — no manual wiring needed. `ErrorText`/`HelperText` both accept an optional `id` prop if you need to reference them directly.

#### Form

Higher-level form with declarative field definitions and mouse-tracking gradient effect.

```tsx
<Form
  fields={[
    { type: 'text', name: 'name', placeholder: 'Your name', required: true },
    { type: 'email', name: 'email', placeholder: 'Email', required: true },
    { type: 'textarea', name: 'message', placeholder: 'Message', rows: 4 },
  ]}
  onSubmit={(e, data) => console.log(data)}
  submitLabel="Send message"
/>
```

| Prop | Type | Default |
|---|---|---|
| `fields` | `FormField[]` | **Required** |
| `onSubmit` | `(e, data: Record<string, FormDataEntryValue>) => void` | **Required** |
| `submitLabel` | `string` | `'Submit'` |
| `submitVariant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` |
| `showSubmit` | `boolean` | `true` |
| `children` | `ReactNode` | — |

Requires `CursorGlow` to be mounted globally for the gradient effect.

#### LoginForm

Combined login and signup form with an internal mode toggle. All auth calls happen in your handlers — no SDK is imported.

```tsx
import { LoginForm } from '@imadgentech/ui';

<LoginForm
  onLogin={async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  }}
  onSignup={async ({ firstName, lastName, companyName, email, password }) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile(cred.user.uid, { firstName, lastName, companyName });
  }}
  onForgotPassword={(email) => {
    sendPasswordResetEmail(auth, email);
  }}
  loading={isSubmitting}
  error={authError}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `onLogin` | `(data: { email, password }) => Promise<void> \| void` | **Required** | Called on login submit |
| `onSignup` | `(data: { firstName, lastName, companyName, email, password }) => Promise<void> \| void` | **Required** | Called on signup submit |
| `onForgotPassword` | `(email: string) => void` | **Required** | Called when "Forgot password?" is clicked; receives current email field value |
| `loading` | `boolean` | `false` | Disables inputs and shows spinner on submit button |
| `error` | `string \| null` | — | Error message rendered below the submit button |
| `defaultMode` | `'login' \| 'signup'` | `'login'` | Initial mode |

**Login mode** renders: email, password, "Forgot password?" link, "Sign In" button, "Sign up" toggle at the bottom.

**Signup mode** renders: first name + last name (side by side), company name, email, password, confirm password (with client-side match validation), "Create Account" button, "Sign in" toggle at the bottom.

#### OtpForm

6-digit OTP verification with individual input boxes, auto-advance, backspace navigation, and paste support.

```tsx
import { OtpForm } from '@imadgentech/ui';

<OtpForm
  onSubmit={async (otp) => {
    await verifyOtp(otp);
  }}
  onResend={async () => {
    await resendCode();
  }}
  loading={isVerifying}
  error={otpError}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `onSubmit` | `(otp: string) => Promise<void> \| void` | **Required** | Called with the joined digit string (e.g. `"123456"`) when Verify is clicked |
| `onResend` | `() => Promise<void> \| void` | **Required** | Called when "Resend code" is clicked |
| `loading` | `boolean` | `false` | Disables inputs and shows spinner |
| `error` | `string \| null` | — | Error message rendered below the boxes |
| `length` | `number` | `6` | Number of digit boxes |

Verify button is disabled until all boxes are filled. Paste a full code to auto-fill all boxes.

#### ErrorText / HelperText

Simple wrappers for consistent form feedback text. `ErrorText` renders with `role="alert"`.

---

### Layout

#### Stack

Vertical flex stack. The most-used layout primitive.

```tsx
<Stack gap="16" align="stretch">
  <Card />
  <Card />
</Stack>
```

| Prop | Type | Default |
|---|---|---|
| `gap` | `'0' \| '2' \| '4' \| '8' \| '12' \| '16' \| '24' \| '32' \| '48' \| '64'` | `'16'` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` |

#### Flex

Horizontal flex with full control. `direction` accepts a responsive map
(`{ base, sm, md, lg }`) the same way `Grid`'s `columns` does, so a row can
collapse to a column below a breakpoint.

```tsx
<Flex direction="row" justify="between" align="center" gap="12">
  <Logo />
  <Nav />
</Flex>

<Flex direction={{ base: 'column', md: 'row' }} gap="16">
  <Sidebar />
  <MainContent />
</Flex>
```

| Prop | Type | Default |
|---|---|---|
| `direction` | `'row' \| 'column' \| { base?, sm?, md?, lg? }` | `'row'` |
| `wrap` | `'nowrap' \| 'wrap'` | `'nowrap'` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'stretch'` |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | `'start'` |
| `gap` | `(spacing token)` | `'0'` |
| `fullWidth` | `boolean` | `false` |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` |

#### Cluster

Inline wrapping flex — useful for tag clouds, button groups, icon rows.

| Prop | Type | Default |
|---|---|---|
| `gap` | `'2' \| '4' \| '8' \| '12' \| '16' \| '24'` | `'8'` |
| `justify` | `'start' \| 'center' \| 'end' \| 'between'` | `'start'` |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` |

#### Grid / GridItem

12-column CSS grid with responsive column and span values.

```tsx
<Grid columns={{ base: 1, md: 2, lg: 3 }} gap="24">
  <GridItem span={{ base: 1, lg: 2 }}>
    <FeaturedCard />
  </GridItem>
  <GridItem>
    <Card />
  </GridItem>
</Grid>
```

`Grid` props: `columns` (responsive 1–12, default 12), `gap`, `align`.

`GridItem` props: `span` (responsive 1–12), `start` (responsive 1–12).

#### Container

Constrains content width and centers it.

```tsx
<Container maxWidth="lg">
  {children}
</Container>
```

| `maxWidth` value | Max width |
|---|---|
| `'sm'` | 640px |
| `'md'` | 768px |
| `'lg'` | 1024px |
| `'xl'` | 1280px |
| `'layout'` | `var(--max)` — 1400px by default, the company-wide desktop width (default) |
| `'full'` | 100% |

#### Section

Adds consistent vertical padding to page sections.

```tsx
<Section size="lg">
  <Hero />
</Section>
```

`size`: `'sm' | 'md' | 'lg'` (default `'md'`). `as` prop for semantic element override.

#### Surface

Elevated card container.

```tsx
<Surface padding="lg" elevation="md" radius="lg">
  <p>Content</p>
</Surface>
```

| Prop | Type | Default |
|---|---|---|
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `elevation` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'` |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `as` | `ElementType` | `'div'` |

#### Spacer

Explicit whitespace. `axis`: `'horizontal' | 'vertical'` (default `'vertical'`). `size`: spacing token (default `'16'`). Has `aria-hidden`.

#### Divider

Visual separator line.

| Prop | Type | Default |
|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `opacity` | `number` | `0.2` |
| `color` | `string` | `'currentColor'` |
| `length` | `string \| number` | `'100%'` |
| `scale` | `number` | `1` |

#### AspectRatio

Wraps children in a fixed aspect ratio box.

```tsx
<AspectRatio ratio="16/9">
  <video src="..." />
</AspectRatio>
```

`ratio`: any valid CSS `aspect-ratio` value (default `'1/1'`).

---

### Navigation

#### Navbar

Full responsive navbar with desktop nav links + mobile hamburger menu.

```tsx
<Navbar
  brand={<Link href="/"><Logo /></Link>}
  links={[
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
  ]}
  actions={<Button variant="brand">Get started</Button>}
  sticky
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `brand` | `ReactNode` | **Required** | |
| `links` | `Array<{ label: string; href: string }>` | **Required** | |
| `actions` | `ReactNode` | — | |
| `sticky` | `boolean` | `true` | |
| `maxWidth` | `string` | — | Raw CSS max-width for the navbar's inner content row. Defaults to the `--max` token (same one `Container` uses), so the navbar lines up with page content automatically |
| `mobileMenuLogo` | `ReactNode` | — | Custom logo/brand block for the mobile menu, passed through to `MobileMenuContent`'s `logo` prop. Defaults to the IMADGEN logo when omitted — pass this in any other project |
| `mobileMenuShowHome` | `boolean` | `true` | Whether to render the "Home" link in the mobile menu |
| `mobileMenuHomeHref` | `string` | `'/'` | Href for the mobile menu's "Home" link |

The mobile menu is handled internally by `MobileMenu` + `MobileMenuContent`.

#### NavLink

Active-aware link for use inside custom navs.

```tsx
<NavLink href="/settings">Settings</NavLink>
```

Auto-detects active state from `usePathname()`. Override with `isActive` prop.

#### MobileMenu / MobileMenuContent

Use these if building a custom mobile nav outside of `Navbar`.

```tsx
<MobileMenu trigger={<BurgerButton />} title="Menu">
  <MobileMenuContent
    links={[{ label: 'Home', href: '/' }]}
    actions={<LightTheme />}
  />
</MobileMenu>
```

`MobileMenuContent` includes the IMADGEN logo and a Home link by default — pass `logo` (a `ReactNode`) to replace the logo block, or `showHome={false}` to omit the Home link, or `homeHref`/`homeLabel` to repoint/relabel it. Any project other than IMADGEN's own site should set at least `logo`, since the default logo is a fixed image path (`/media/logo/imadgen-logo-dark.png`) that only resolves in IMADGEN's own `public/` folder.

#### Breadcrumbs

```tsx
<Breadcrumbs
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },
  ]}
/>
```

Last item is rendered as plain text with `aria-current="page"`. Separator defaults to `/`.

#### Tabs

```tsx
<Tabs
  defaultValue="overview"
  items={[
    { value: 'overview', label: 'Overview', content: <OverviewPanel /> },
    { value: 'settings', label: 'Settings', content: <SettingsPanel /> },
  ]}
/>
```

Controlled via `value` + `onValueChange`. Powered by Radix UI.

#### Pagination

```tsx
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

Disables Prev at page 1, Next at last page. Accepts optional `prevLabel`/`nextLabel` (default `'Previous'`/`'Next'`) and `renderPageInfo?: (current, total) => ReactNode` (default renders "Page X of Y") for non-English or custom copy.

---

### Data Display

#### Alert

Persistent inline message box — form-level errors, empty-state notices, standing warnings. For ephemeral feedback that disappears on its own, use `Toast` instead.

```tsx
<Alert tone="danger" title="Couldn't save changes">
  Check the highlighted fields and try again.
</Alert>

<Alert tone="warning" onDismiss={() => setDismissed(true)}>
  Moderation adds ~50–150ms to every message.
</Alert>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `'neutral' \| 'info' \| 'success' \| 'warning' \| 'danger' \| 'custom'` | `'neutral'` | `custom` applies no built-in color/background, for full re-theming via `className` |
| `title` | `string` | — | Bold lead-in line above the message |
| `children` | `ReactNode` | **Required** | Message body |
| `action` | `ReactNode` | — | e.g. a `Button`, rendered next to the dismiss button |
| `onDismiss` | `() => void` | — | Renders a × dismiss button only if provided; omit for a persistent alert |

#### Accordion

```tsx
<Accordion
  items={[
    { value: 'q1', title: 'What is this?', content: <p>Answer</p> },
    { value: 'q2', title: 'How do I start?', content: <p>Answer</p>, disabled: true },
  ]}
  type="single"
  collapsible
/>
```

| Prop | Type | Default |
|---|---|---|
| `items` | `AccordionItem[]` | **Required** |
| `type` | `'single' \| 'multiple'` | `'single'` |
| `collapsible` | `boolean` | `true` |

#### Table

```tsx
<Table
  headers={['Name', 'Status', 'Date']}
  rows={[
    ['Alice', <Badge variant="success">Active</Badge>, '2026-01-01'],
  ]}
  striped
/>
```

| Prop | Type | Default |
|---|---|---|
| `headers` | `string[]` | **Required** |
| `rows` | `ReactNode[][]` | **Required** |
| `striped` | `boolean` | `false` |
| `getRowKey` | `(row, index) => React.Key` | `(row, index) => index` | Derives a stable React key per row — pass this if rows can be sorted/filtered/reordered, since the array-index default otherwise causes stale cell state across re-renders |

#### StatCard

```tsx
<StatCard
  label="Total Revenue"
  value="$24,500"
  note="+12% from last month"
  variant="success"
/>
```

`variant`: `'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'custom'` (default `'neutral'`). `neutral` renders the value in the default text color; use `brand` for the orange accent treatment. `custom` applies no built-in color/background — pair it with `className` to fully re-theme a single instance without forking.

#### Badge

```tsx
<Badge variant="brand">New</Badge>
```

`variant`: `'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'custom'`

#### Tag

Removable/interactive pill — filters, multi-select summaries, keyword lists. For a static label, use `Badge` instead.

```tsx
<Tag variant="brand" onRemove={() => removeFilter(id)}>Overdue</Tag>
<Tag>Static label</Tag>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'neutral' \| 'brand' \| 'success' \| 'warning' \| 'danger' \| 'custom'` | `'neutral'` | Same set as `Badge` |
| `onRemove` | `() => void` | — | Renders a × remove button only if provided; omit for a static tag |

#### Avatar

```tsx
<Avatar src="/user.jpg" alt="Alice" fallback="AL" size="md" shape="circle" />
```

Falls back to initials text if image fails to load.

| Prop | Type | Default |
|---|---|---|
| `fallback` | `string` | **Required** |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `shape` | `'circle' \| 'square'` | `'circle'` |

#### Skeleton

```tsx
<Skeleton width="100%" height="2rem" radius="md" shimmer />
```

| Prop | Type | Default |
|---|---|---|
| `width` | `string \| number` | `'100%'` |
| `height` | `string \| number` | `'1em'` |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` |
| `shimmer` | `boolean` | `true` |

#### Progress

Determinate or indeterminate progress bar.

```tsx
<Progress value={uploadPct} tone="brand" />
<Progress /> {/* indeterminate — omit value for unknown-duration work */}
```

| Prop | Type | Default |
|---|---|---|
| `value` | `number` | — (omit for indeterminate) |
| `max` | `number` | `100` |
| `tone` | `'brand' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'brand'` |
| `size` | `'sm' \| 'md'` | `'md'` |
| `label` | `string` | — (aria-label) |

#### Spinner

Standalone loading indicator, for full-page or section-level loading. `Button`/`IconButton` already have a built-in spinner for inline button loading — use this one everywhere else.

```tsx
<Spinner size="lg" />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `tone` | `'brand' \| 'muted' \| 'current'` | `'brand'` |
| `label` | `string` | `'Loading'` (aria-label) |

#### EmptyState

```tsx
<EmptyState
  icon={<InboxIcon />}
  title="No results"
  description="Try adjusting your filters."
  action={<Button>Clear filters</Button>}
/>
```

---

### Overlays

#### Dialog

```tsx
<Dialog
  trigger={<Button>Open modal</Button>}
  title="Confirm action"
  description="This cannot be undone."
>
  <p>Modal body content</p>
  <Button onClick={() => {}}>Confirm</Button>
</Dialog>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | **Required** | |
| `trigger` | `ReactNode` | — | |
| `description` | `string` | — | |
| `open` | `boolean` | — | |
| `onOpenChange` | `(open: boolean) => void` | — | |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | `sm` ≈ 480px, `md` = 500px (the same as the unsized default), `lg` ≈ 1000px capped at 88vw |
| `maxWidth` | `string` | — | Raw CSS value, for widths the size scale doesn't cover. Takes precedence over `size` |
| `background` | `'solid' \| 'translucent'` | `'solid'` | `'solid'` gives the content surface an opaque background — the right choice for most modals, since translucency over a large area reads as unfinished rather than deliberate. `'translucent'` restores the previous frosted (but unblurred) surface |
| `className` | `string` | — | Applied to the dialog's content surface |

Includes overlay, close button, focus trap, and ESC key support. Uses `--z-overlay` (1050) for the backdrop and `--z-modal` (1100) for the content. Centers via `top: calc(50% + var(--overlay-center-offset) / 2)` — set the `--overlay-center-offset` token (see Token System → Layout) to your fixed navbar's height if you have one, so the dialog centers in the content area below it instead of the full viewport.

#### AlertDialog

Confirm/destructive-action dialog. Unlike `Dialog`, it isn't dismissed by clicking outside and focuses Cancel by default (Radix's alert-dialog accessibility model) — built-in Cancel/Confirm buttons, no hand-composed footer needed.

```tsx
<AlertDialog
  trigger={<Button variant="danger">Delete</Button>}
  title="Delete this project?"
  description="This cannot be undone."
  onConfirm={async () => {
    await deleteProject(id);
  }}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | **Required** | |
| `description` | `string` | — | |
| `trigger` | `ReactNode` | — | |
| `children` | `ReactNode` | — | Extra content below the description (e.g. a confirmation input) |
| `onConfirm` | `() => void \| Promise<void>` | **Required** | May be async — the confirm button shows a loading state and the dialog only closes once it resolves. If it throws/rejects, the dialog stays open and the error message is shown via `ErrorText` instead of surfacing as an unhandled promise rejection |
| `confirmLabel` | `string` | `'Confirm'` | |
| `cancelLabel` | `string` | `'Cancel'` | |
| `confirmVariant` | `ButtonProps['variant']` | `'danger'` | Override for non-destructive confirms |
| `open` / `onOpenChange` | `boolean` / `(open: boolean) => void` | — | Optional — works uncontrolled with just `trigger` |
| `className` | `string` | — | Applied to the dialog's content surface |

Pressing Escape while `onConfirm` is in flight is ignored, so a slow confirm action can't be interrupted out from under itself. Content surface uses the same opaque `--color-bg-surface-solid` background as `Dialog`, and centers using `--overlay-center-offset` the same way.

#### Drawer

Side panel — filters, side-form editors, and similar content that doesn't need a full-screen takeover. For full-screen mobile navigation, use `MobileMenu` instead.

```tsx
<Drawer trigger={<Button>Filters</Button>} title="Filters" side="right">
  <FilterForm />
</Drawer>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | |
| `description` | `string` | — | |
| `trigger` | `ReactNode` | — | |
| `side` | `'left' \| 'right' \| 'bottom'` | `'right'` | |
| `width` | `string` | — | Raw CSS width override for `left`/`right`; ignored for `bottom` |
| `height` | `string` | — | Raw CSS max-height override for `bottom`; ignored for `left`/`right` |
| `background` | `'solid' \| 'translucent'` | `'solid'` | Same as `Dialog`'s `background` prop — `'solid'` is an opaque panel, `'translucent'` restores the previous frosted (unblurred) surface |
| `open` / `onOpenChange` | `boolean` / `(open: boolean) => void` | — | |

Default width (~400px, capped at 90vw) for `left`/`right`; default capped height (~500px, 85vh) for `bottom` — override with `width`/`height` — unlike `MobileMenu`, which always takes the full screen.

#### DropdownMenu

Actions menu — table row "..." actions, overflow menus, account menus. Built on Radix for keyboard navigation and typeahead.

```tsx
<DropdownMenu
  trigger={<IconButton aria-label="Actions"><DotsIcon /></IconButton>}
  items={[
    { label: 'Edit', icon: <EditIcon />, onClick: onEdit },
    { separator: true },
    { label: 'Delete', variant: 'danger', onClick: onDelete },
  ]}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `trigger` | `ReactNode` | **Required** | |
| `items` | `Array<{ label, icon?, onClick?, variant?, disabled?, shortcut? } \| { separator: true }>` | **Required** | `variant: 'danger'` renders the item in red |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | |
| `open` / `onOpenChange` | `boolean` / `(open: boolean) => void` | — | |
| `className` | `string` | — | Applied to the menu's content surface |

Content surface pairs its translucent background with `backdrop-filter: blur(12px)`, same as `Combobox`/`DatePicker`'s popovers.

#### Tooltip

```tsx
<Tooltip content="Save your work" side="top">
  <IconButton aria-label="Save"><SaveIcon /></IconButton>
</Tooltip>
```

`side`: `'top' | 'right' | 'bottom' | 'left'` (default `'top'`). 300ms delay, arrow included. Accepts `className`. Content surface pairs its translucent background with `backdrop-filter: blur(12px)`, same as `Combobox`/`DatePicker`'s popovers.

#### Popover

```tsx
<Popover trigger={<Button>Options</Button>}>
  <Stack gap="8">
    <Button variant="ghost">Edit</Button>
    <Button variant="ghost">Delete</Button>
  </Stack>
</Popover>
```

Controlled via `open` / `onOpenChange`. `sideOffset={8}`. Accepts `className`. Content surface pairs its translucent background with `backdrop-filter: blur(12px)`, same as `Combobox`/`DatePicker`'s popovers.

#### Toast

Wrap your app (or a page) in `ToastProvider`, then call `addToast` from any child:

```tsx
// layout.tsx
import { ToastProvider } from '@imadgentech/ui';
<ToastProvider position="bottom-right">{children}</ToastProvider>
```

```tsx
// anywhere inside
import { useToast } from '@imadgentech/ui';

const { addToast } = useToast();
addToast('Saved successfully', 'success');
addToast('This stays until dismissed', 'error', { duration: 0 });
```

| `ToastProvider` prop | Type | Default | Description |
|---|---|---|---|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| 'top-center' \| 'bottom-center'` | `'bottom-right'` | Corner (or edge-center) toasts render in |

`addToast(message, type?, options?)` — type: `'success' | 'error' | 'info' | 'warning'`. `options.duration` (ms) overrides the default 5000ms auto-dismiss; pass `0` to disable auto-dismiss entirely (the toast then stays until clicked).

Clickable to dismiss early.

---

### Typography

#### Heading

```tsx
<Heading as="h1" size="display" weight="bold" align="center">
  Welcome
</Heading>
```

| Prop | Type | Default |
|---|---|---|
| `as` | `'h1'–'h6'` | `'h2'` |
| `size` | `'display' \| 'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm'` | derived from `as` |
| `weight` | `'light' \| 'medium' \| 'semibold' \| 'bold'` | `'semibold'` |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` |

Default size mapping: `h1→xxl`, `h2→xl`, `h3→lg`, `h4→md`, `h5/h6→sm`.

#### Text

```tsx
<Text size="sm" tone="muted" weight="medium">
  Last updated 2 hours ago
</Text>
```

| Prop | Type | Default |
|---|---|---|
| `as` | `'p' \| 'span'` | `'p'` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `tone` | `'default' \| 'muted' \| 'brand' \| 'success' \| 'danger'` | `'default'` |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` |
| `align` | `'left' \| 'center' \| 'right'` | — |

#### Link

```tsx
<Link href="/docs" tone="brand" underline="hover">
  Read the docs
</Link>
```

| Prop | Type | Default |
|---|---|---|
| `underline` | `'always' \| 'hover' \| 'never'` | `'hover'` |
| `tone` | `'default' \| 'brand' \| 'muted'` | `'default'` |
| `external` | `boolean` | auto-detected from `http` prefix |

External links get `target="_blank" rel="noopener noreferrer"`. Internal links use `next/link`.

#### Code

```tsx
<Code variant="inline">npm install</Code>
<Code variant="block">{'const x = 1;\nconsole.log(x);'}</Code>
```

`variant`: `'inline' | 'block'` (default `'inline'`)

#### Kbd

```tsx
Press <Kbd>⌘K</Kbd> to open search.
```

Renders `<kbd>` with appropriate styling.

---

### Marketing

#### Hero

```tsx
<Hero
  badge={<Badge variant="brand">New</Badge>}
  title={<>Build faster with <span>IMADGEN</span></>}
  description="The complete toolkit for modern web apps."
  actions={<><Button variant="brand">Get started</Button><Button variant="ghost">Learn more</Button></>}
  align="center"
/>
```

| Prop | Type | Default |
|---|---|---|
| `title` | `ReactNode` | **Required** |
| `description` | `ReactNode` | **Required** |
| `badge` | `ReactNode` | — |
| `actions` | `ReactNode` | — |
| `visual` | `ReactNode` | — |
| `align` | `'left' \| 'center'` | `'center'` |
| `titleWeight` | Heading weight | — |

#### CTA

```tsx
<CTA
  title="Ready to ship?"
  description="Start building today."
  actions={<Button variant="secondary">Get started free</Button>}
  variant="brand"
/>
```

`variant`: `'brand'` (orange gradient) or `'surface'` (glass card)

#### FeatureGrid

```tsx
<FeatureGrid
  columns={3}
  features={[
    { icon: <ZapIcon />, title: 'Fast', description: 'Built for performance.' },
  ]}
/>
```

`columns`: `1 | 2 | 3 | 4` (default `3`). Responsive: collapses to 1 on mobile, 2 on tablet. Accepts `className`.

#### PricingCard

```tsx
<PricingCard
  name="Pro"
  price="$49"
  frequency="/mo"
  description="For growing teams"
  features={['Unlimited projects', 'Priority support']}
  action={<Button variant="brand" fullWidth>Subscribe</Button>}
  featured
/>
```

`featured`: adds a "Recommended" badge (override its text with `featuredLabel`) and higher visual elevation. Accepts `className`.

#### Testimonial

```tsx
<Testimonial
  quote="This saved us weeks of work."
  author="Jane Doe"
  role="CTO at Acme"
  avatarSrc="/jane.jpg"
/>
```

Accepts `className`.

#### LogoCloud

```tsx
<LogoCloud
  title="Trusted by teams at"
  logos={[
    { src: '/logos/company-a.svg', alt: 'Company A' },
  ]}
/>
```

Uses `next/image` at 120×40px by default. Images are grayscale by default, color on hover. Each `logos` entry accepts optional per-logo `width`/`height` (in px) to override the box for logos that aren't ~3:1. Accepts `className`.

#### Footer

```tsx
<Footer
  brand={<Logo />}
  brandName="IMADGEN"
  copyright="© 2026 imadgen.ai"
  message="Building the future, one pixel at a time."
  socials={[
    { label: 'Twitter', href: 'https://twitter.com/...', icon: <TwitterIcon /> },
  ]}
/>
```

Accepts an optional `maxWidth` prop (raw CSS value) for the footer's inner content row — defaults to the `--max` token, same as `Container`/`Navbar`, so the footer lines up with page content automatically.

#### ThemeImage

Renders two images — one for light, one for dark — with no flash or layout shift. Preferred over manual `useTheme()` checks for images.

```tsx
<ThemeImage
  lightSrc="/screenshot-light.png"
  darkSrc="/screenshot-dark.png"
  alt="App screenshot"
  width={1200}
  height={800}
/>
```

---

### AI Chat

`ChatPage` is a full AI chat widget powered by `@ai-sdk/react`. It must be wrapped in `ChatProvider`.

#### Setup

Install optional peer deps first:

```bash
npm install @ai-sdk/react ai
```

Import the chat stylesheet alongside the component (it is not included in `styles.css`):

```tsx
import '@imadgentech/ui/chat.css';
```

```tsx
// In your page or layout — import from the /chat entry, not the main entry
import { ChatProvider, ChatPage } from '@imadgentech/ui/chat';

function AIChatSection() {
  return (
    <ChatProvider>
      <ChatPage
        variant="full"
        placeholder="Ask me anything..."
        onSessionCreate={async (sessionId, meta) => {
          await logChatSession(sessionId, meta.started_at);
        }}
        onSaveConversation={async ({ session_id, messages }) => {
          await saveToDatabase(session_id, messages);
        }}
      />
    </ChatProvider>
  );
}
```

`ChatProvider` internally calls `useChat` from `@ai-sdk/react`. Your Next.js app must expose an `/api/chat` route by default — or point it elsewhere with the `api` prop:

```tsx
<ChatProvider api="/api/ai/assistant" maxFailures={5}>
  <ChatPage />
</ChatProvider>
```

| `ChatProvider` prop | Type | Default | Description |
|---|---|---|---|
| `api` | `string` | `/api/chat` (the `@ai-sdk/react` default) | Endpoint `useChat` sends messages to |
| `maxFailures` | `number` | `3` | Consecutive send failures before the chat auto-disables |

Auto-disables after `maxFailures` consecutive failures to prevent abuse.


#### ChatPage Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'full' \| 'compact' \| 'minimal'` | `'full'` | |
| `title` | `string` | `'Imadgen AI'` | Header title — override for any project other than IMADGEN's own |
| `subtitle` | `string` | `'Quantum-V2 Core'` | Header subtitle |
| `placeholder` | `string` | `'Ask anything...'` | |
| `initialMessages` | `Message[]` | — | |
| `onClose` | `() => void` | — | |
| `isFullPage` | `boolean` | — | |
| `onSessionCreate` | `(sessionId: string, meta: { started_at: string }) => Promise<void>` | — | |
| `onSaveConversation` | `(data: { session_id: string; messages: ConversationMessage[] }) => Promise<void>` | — | |

#### Variants

- `full` — 650px tall, max 800px wide. Shows header, messages, input.
- `compact` — 500px tall, max 600px wide.
- `minimal` — No chrome (no header, no message area). Just the input strip.

#### Exported Types

```ts
import type { ChatPageProps, ConversationMessage, ChatMessage } from '@imadgentech/ui/chat';
```

#### useChatContext

If you need to control the chat from a sibling component:

```tsx
import { useChatContext } from '@imadgentech/ui/chat';

const { messages, addToast, resetChat, isDisabled } = useChatContext();
```

Available: `messages`, `input`, `handleInputChange`, `handleSubmit`, `append`, `status`, `isLoading`, `setMessages`, `setInput`, `isChatActive`, `setIsChatActive`, `isDisabled`, `failureCount`, `reportFailure`, `resetChat`.

---

### Background Effects

All effects are `'use client'`, render at fixed `z-index: -1`, and have no props. All four canvas effects (`EmbersBGE`, `NetBGE`, `SwarmsBGE`, `WaveformBackground`) read `--color-brand-primary` from CSS at draw time rather than hardcoding it, so overriding that token to rebrand also recolors the background effects — and all four respect `prefers-reduced-motion`, rendering a single static frame instead of animating when the user has that preference set. Drop them in a layout and they fill the background.

> **Note:** Effect components expect `React` to be available as a global default import in the consuming project's bundle. This is always the case in Next.js + TypeScript projects.

| Component | Description |
|---|---|
| `EmbersBGE` | Floating orange ember particles (canvas) |
| `NetBGE` | Network-graph node animation (canvas) |
| `SwarmsBGE` | Swarm/particle network (canvas) |
| `WaveformBackground` | Pulsing 3-orb waveform (canvas) |
| `ImBgAurora` | CSS-only aurora gradient blobs |

```tsx
import { EmbersBGE } from '@imadgentech/ui';

// Place in a layout with `position: relative; overflow: hidden`:
<div style={{ position: 'relative', minHeight: '100vh' }}>
  <EmbersBGE />
  <main>{children}</main>
</div>
```

#### LightTheme

A ready-made theme toggle button. Renders sun (dark mode) / moon (light mode) icons.

```tsx
import { LightTheme } from '@imadgentech/ui';
<LightTheme />
```

Uses `next-themes`. Includes SSR hydration guard (renders placeholder until mounted).

---

## Server Components

The package exposes a server-safe entry point that excludes all `'use client'` components and Radix UI dependencies. Use this in RSC-only modules to avoid `React.createContext` errors.

```tsx
import { Container, Stack, Heading, Text, Surface } from '@imadgentech/ui/server';
```

Available server exports: `cn`, all **Layout** components, all **Typography** components, all **Marketing** components, and `Breadcrumbs` (the only navigation component with no client-side dependencies).

**Not available** from `/server`: forms, overlays (Dialog, Tooltip, Popover, Toast), navigation (Navbar, MobileMenu, NavLink, Tabs, Pagination, Breadcrumbs is the exception), data display with interactive state (Accordion, Checkbox, etc.), ChatPage, effects, Providers.

**If your app also imports `@imadgentech/ui/styles.css` anywhere** (the common case — most apps mix RSC pages with client-interactive ones), don't additionally import `@imadgentech/ui/server.css`. `server.css` is a strict subset of `styles.css` — every class it defines is already present, byte-for-byte, in the main stylesheet — so loading both means downloading the same ~39KB of CSS twice for no visual difference. Only reach for `server.css` on its own in an app (or a standalone RSC-only module) that never loads `styles.css` at all.

---

## Theming

The package uses `[data-theme="light"]` attribute on `<html>` (set by `next-themes` via `Providers`). Dark is the default.

### Toggling Theme

`LightTheme` handles this out of the box. To build a custom toggle:

```tsx
'use client';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle
    </button>
  );
}
```

### Theme-aware Images

Use `ThemeImage` instead of manually switching image sources. It renders both images and CSS handles the show/hide — no hydration mismatch.

### Extending the Token System

The token file defines the full set of CSS custom properties. To add custom tokens that integrate with the system (e.g., for a specific app), define them in your own global CSS:

```css
/* These extend the token system without forking the package */
:root {
  --dashboard-sidebar-bg: rgba(255, 255, 255, 0.03);
  --dashboard-card-glow: rgba(255, 106, 0, 0.06);
}
```

---

## Changelog

Version history, migration notes, and — most importantly — **every breaking change**, lives in [CHANGELOG.md](./CHANGELOG.md), not here. This README documents the current API only; it's updated in the same commit as any code change, so it never lags behind what's actually shipped in `src/`.
