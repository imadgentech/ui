# @imadgentech/ui — Integration Instructions

## Installation

```bash
npm install @imadgentech/ui
# or
pnpm add @imadgentech/ui
```

The package ships pre-compiled — no `transpilePackages` needed in `next.config`.

---

## CSS Setup

Add to your root `layout.tsx` (or `globals.css`):

```tsx
// layout.tsx
import '@imadgentech/ui/styles.css';      // component styles
import '@imadgentech/ui/tokens.css';      // design tokens (CSS variables)
```

If you use only server components from `/server`, import the lighter CSS bundle:

```tsx
import '@imadgentech/ui/server.css';      // server-component styles only
import '@imadgentech/ui/tokens.css';      // design tokens
```

---

## Theme Provider

Wrap your app root with `Providers` in `layout.tsx`:

```tsx
import { Providers } from '@imadgentech/ui';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
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
| `defaultTheme` | `string` | `"dark"` | Initial theme (`"dark"` or `"light"`) |
| `enableSystem` | `boolean` | `true` | Respect OS theme preference |

Switch themes by setting `data-theme="light"` on `<html>`. `next-themes` handles this automatically.

---

## Server vs Client Imports

| Import | Use in | Includes |
|---|---|---|
| `@imadgentech/ui` | Client Components | All components (forms, overlays, chat, effects, nav, layout, typography, marketing) |
| `@imadgentech/ui/server` | React Server Components | Layout, Typography, Marketing only |

```tsx
// ✅ Server Component (RSC)
import { Container, Stack, Heading } from '@imadgentech/ui/server';

// ✅ Client Component
'use client';
import { Button, Input, Dialog } from '@imadgentech/ui';
```

Do not import interactive components (forms, overlays, effects) from `/server` — they are not exported there intentionally.

---

## Brand Colors

| Token | Value |
|---|---|
| `--color-brand-primary` | #ff6a00 (orange) |
| `--color-brand-primary-hover` | #ff8a1f |
| `--color-brand-secondary` | #ff8a1f |
| `--color-brand-accent` | #ffae00 |

Shorthand aliases: `--orange` = #ff6a00, `--orange2` = #ff8a1f

---

## Backgrounds

| Token | Dark | Light |
|---|---|---|
| `--color-bg-base` | #050505 | #fbf7f3 |
| `--color-bg-surface` | rgba(255,255,255, 0.05) | rgba(255,255,255, 0.70) |
| `--color-bg-surface-hover` | rgba(255,255,255, 0.07) | rgba(255,255,255, 0.85) |
| `--color-bg-surface-subtle` | rgba(255,255,255, 0.04) | rgba(255,255,255, 0.55) |
| `--color-bg-code` | rgba(255,255,255, 0.08) | rgba(10,10,10, 0.06) |
| `--navbar-bg` | rgba(5,5,5, 0.85) | rgba(244,230,221, 0.85) |

Shorthand: `--bg` (page bg), `--card` (surface), `--card2` (subtle surface)

---

## Text

| Token | Dark | Light |
|---|---|---|
| `--color-text-default` | rgba(255,255,255, 0.92) | rgba(10,10,10, 0.92) |
| `--color-text-muted` | rgba(255,255,255, 0.68) | rgba(10,10,10, 0.62) |
| `--color-text-subtle` | rgba(255,255,255, 0.52) | rgba(10,10,10, 0.48) |
| `--color-text-inverted` | rgba(10,10,10, 0.92) | rgba(255,255,255, 0.92) |

Shorthand: `--text`, `--muted`, `--muted2`

---

## Borders

| Token | Dark | Light |
|---|---|---|
| `--color-border-default` | rgba(255,255,255, 0.12) | rgba(10,10,10, 0.12) |
| `--color-border-hover` | rgba(255,255,255, 0.16) | rgba(10,10,10, 0.20) |
| `--color-border-subtle` | rgba(255,255,255, 0.08) | rgba(10,10,10, 0.08) |

Shorthand: `--line`

---

## Spacing Scale (8px base)

| Token | Value | px |
|---|---|---|
| `--space-2` | 0.125rem | 2px |
| `--space-4` | 0.25rem | 4px |
| `--space-8` | 0.5rem | 8px |
| `--space-12` | 0.75rem | 12px |
| `--space-16` | 1rem | 16px |
| `--space-24` | 1.5rem | 24px |
| `--space-32` | 2rem | 32px |
| `--space-48` | 3rem | 48px |
| `--space-64` | 4rem | 64px |

---

## Border Radius

| Token | Value | px |
|---|---|---|
| `--radius-sm` | 0.25rem | 4px |
| `--radius-md` | 0.75rem | 12px |
| `--radius-lg` | 1.125rem | 18px |
| `--radius-xl` | 1.625rem | 26px |
| `--radius-full` | 9999px | pill |

Shorthand: `--radius` = 18px, `--radius2` = 26px

---

## Shadows

| Token | Dark | Light |
|---|---|---|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,.25) | 0 1px 2px rgba(0,0,0,.12) |
| `--shadow-md` | 0 4px 6px rgba(0,0,0,.35) | 0 4px 6px rgba(0,0,0,.15) |
| `--shadow-lg` | 0 10px 15px rgba(0,0,0,.45) | 0 10px 15px rgba(0,0,0,.18) |
| `--shadow-xl` | 0 20px 25px rgba(0,0,0,.50) | 0 20px 25px rgba(0,0,0,.20) |
| `--shadow` | 0 18px 50px rgba(0,0,0,.55) | 0 18px 50px rgba(0,0,0,.12) |
| `--shadow-focus` | 0 0 0 3px rgba(255,106,0, 0.4) | same |

---

## Typography

### Font Families
- `--font-sans` — Montserrat + system fallbacks (default)
- `--font-mono` — SF Mono, Monaco, Consolas, monospace

### Font Sizes

| Token | Value | px |
|---|---|---|
| `--text-xs` | 0.75rem | 12px |
| `--text-sm` | 0.875rem | 14px |
| `--text-md` | 1rem | 16px |
| `--text-lg` | 1.125rem | 18px |
| `--text-xl` | 1.25rem | 20px |

### Heading Sizes (fluid)

| Token | Range |
|---|---|
| `--heading-sm` | 14–16px |
| `--heading-md` | 18–24px |
| `--heading-lg` | 24–32px |
| `--heading-xl` | 32–48px |
| `--heading-xxl` | 40–64px |
| `--heading-display` | 48–80px |

Site shorthand: `--h1Size` = clamp(42px, 6.2vw, 74px), `--h2Size` = 28px

### Font Weights

| Token | Value |
|---|---|
| `--font-light` | 350 |
| `--font-normal` | 400 |
| `--font-medium` | 425 |
| `--font-semibold` | 450 |
| `--font-bold` | 500 |

### Line Heights

| Token | Value |
|---|---|
| `--leading-tight` | 1.1 |
| `--leading-snug` | 1.375 |
| `--leading-normal` | 1.5 |
| `--leading-relaxed` | 1.625 |
| `--leading-loose` | 2 |

### Letter Spacing

| Token | Value |
|---|---|
| `--tracking-tight` | -0.02em |
| `--tracking-normal` | 0 |
| `--tracking-wide` | 0.025em |

---

## Semantic Colors

| Token | Value |
|---|---|
| `--color-success` | #22c55e |
| `--color-warning` | #f59e0b |
| `--color-error` | #ef4444 |
| `--color-info` | #ffae00 |
| `--color-focus-ring` | rgba(255,106,0, 0.4) |

---

## Z-Index Scale

| Token | Value |
|---|---|
| `--z-background` | -1 |
| `--z-base` | 0 |
| `--z-popover` | 300 |
| `--z-tooltip` | 400 |
| `--z-navbar` | 1000 |
| `--z-sticky` | 1000 |
| `--z-modal` | 1100 |
| `--z-toast` | 1200 |

---

## Breakpoints

| Token | Value | px |
|---|---|---|
| `--breakpoint-sm` | 40rem | 640px |
| `--breakpoint-md` | 48rem | 768px |
| `--breakpoint-lg` | 64rem | 1024px |
| `--breakpoint-xl` | 80rem | 1280px |

---

## Layout Globals

| Token | Value |
|---|---|
| `--navbar-height` | 67px |
| `--max` | 1400px |
| `--gap` | 14px |
