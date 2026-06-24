# Changelog

All notable changes to `@imadgentech/ui` are documented here.

---

### v1.0.17

**Fixes (RSC / webpack compatibility):**
- Split `ChatPage`, `ChatProvider`, and `useChatContext` into a dedicated `@imadgentech/ui/chat` entry — apps that don't use chat no longer pull in `@ai-sdk/react`, `ai`, or `swr`
- Added top-level `'use client'` directive to the main and chat bundle outputs — prevents `createContext` errors when importing from React Server Components in Next.js
- Added `./chat` and `./chat.css` to `package.json` exports map
- Added `Breadcrumbs` to `@imadgentech/ui/server` entry (no client-side dependencies, RSC-safe)
- Export `BreadcrumbItem` and `BreadcrumbsProps` types from the server entry

---

### v1.0.13 — 2026-06-22

**Fixes (React imports in effect components):**
- Fixed `ReferenceError: React is not defined` in compiled ESM/CJS output from background effect components
- `ImBgAurora.tsx` — added missing `import React from 'react'`
- `LightTheme.tsx` — updated import to include React namespace: `import React, { useState, useEffect } from 'react'`
- Both components were using JSX without explicitly importing React, causing compiled `React.createElement` calls to have no definition. This affected Next.js apps consuming the package when these components were rendered (especially server-side or in RSC contexts where React wasn't bound in the bundle).

---

### v1.0.6 — 2026-06-18

**Fixes (token system):**
- Added `--space-20`, `--space-40`, `--space-80` to spacing scale — fixes Accordion trigger padding, Select size-lg icon clearance, and Navbar desktop container padding
- Added `--z-overlay: 1050` — fixes Dialog backdrop and MobileMenu overlay stacking relative to navbar
- Added `--tracking-widest: 0.1em` — fixes LogoCloud title letter-spacing
- Added `--noise-texture` CSS custom property — moves CTA's SVG grain texture into global token scope to prevent CSS modules build corruption of the SVG namespace URI

**Fixes (component token migration):**
- `Form.module.css` — migrated all v0.x tokens (`--card`, `--btnBg`, `--radius2`, `--shadow`, etc.) to new `--color-*` / `--radius-*` / `--shadow-*` system
- `Footer.module.css` — migrated `--muted`, `--muted2`, `--btnBorder`, `--btnBg`, `--btnHover`, `--line`
- `ChatPage.module.css` — migrated widget-specific tokens (`--surfaceBg`, `--surfaceBorder`, `--surfaceRadius`, `--surfaceShadow`, `--richLine`, `--text`, `--muted2`)

**Fixes (package):**
- Added `"./dist/index.css"` as a deprecated export alias in `package.json` alongside `"./styles.css"` for backward compatibility

---

### v1.0.5

- Added `style` prop to all remaining components that were missing it

---

### v1.0.4 and earlier

Internal development. Tokens were migrated from the v0.x naming system (`--card`, `--btnBg`, `--orange`, etc.) to the current `--color-*` / `--space-*` / `--radius-*` system. Some components (Form, Footer, ChatPage) were not fully migrated until v1.0.6.
