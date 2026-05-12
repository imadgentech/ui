# Upgrading to @imadgentech/ui 1.0.3

## What was broken

CSS module class-name maps in the compiled output were empty objects:

```js
// dist/index.js (before 1.0.3)
var Button_default = {};          // ← all class lookups returned undefined
var Stack_default  = {};          // ← no className ever applied to DOM elements
```

Components called `styles.button`, `styles.stack`, etc., but all returned `undefined`,
so no className was written to the DOM and no styles were applied — even though the
CSS itself was correct inside `dist/index.css`.

## What changed

The build pipeline was fixed. The same file now correctly outputs:

```js
// dist/index.js (1.0.3+)
var Button_default = { button: "button", "variant-primary": "variant-primary", ... };
var Stack_default  = { stack: "stack", "gap-4": "gap-4", ... };
```

No component API changed. No props changed. It is a pure build fix.

---

## What you need to do in consuming projects

### 1 — Update the package

```bash
npm install @imadgentech/ui@1.0.3
# or
yarn add @imadgentech/ui@1.0.3
# or
pnpm add @imadgentech/ui@1.0.3
```

### 2 — Confirm the CSS is imported (required — do this once)

The package does **not** inject CSS automatically. You must import it globally.

**Next.js App Router** — in `app/layout.tsx`:
```tsx
import '@imadgentech/ui/dist/index.css';
```

**Next.js Pages Router** — in `pages/_app.tsx`:
```tsx
import '@imadgentech/ui/dist/index.css';
```

If you already had this import from a previous version, you do not need to add it again.

### 3 — (Optional) import design tokens

If you use the package's CSS custom properties (`--color-brand-primary`, etc.), also
import the tokens file once, before the component CSS:

```tsx
import '@imadgentech/ui/tokens.css';
import '@imadgentech/ui/dist/index.css';
```

---

## Do I need to change any component code?

**No.** Every component (`<Button>`, `<Stack>`, `<Input>`, etc.) keeps the same props
and the same import path. You do not need to touch any JSX or TypeScript files.

---

## Why components looked unstyled before

Without class names on DOM elements, browser DevTools showed elements like:

```html
<button class="">Click me</button>   <!-- className was undefined → empty string -->
```

After the fix:

```html
<button class="button variant-primary size-md">Click me</button>
```

The CSS in `dist/index.css` was always correct — it just had no elements to match.
