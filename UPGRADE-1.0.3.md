# Upgrade to @imadgentech/ui 1.0.4

## What changed

`1.0.4` fixes the CSS class collision issue.

Before, the package shipped generic global classes like:

```css
.content
.button
.overlay
```

Now package classes are scoped with an `imui_` prefix:

```css
.imui_Button_content__lLqfXZ
.imui_Button_button___-kjOB
.imui_Dialog_content__9ciCTy
```

This prevents UI package styles from mixing with project classes.

## What projects need to do

Update the package:

```bash
npm install @imadgentech/ui@1.0.4
```

Keep the CSS import:

```tsx
import '@imadgentech/ui/dist/index.css';
```

If tokens are used, keep them before the component CSS:

```tsx
import '@imadgentech/ui/tokens.css';
import '@imadgentech/ui/dist/index.css';
```

Then restart or rebuild the frontend:

```bash
npm run dev
# or
npm run build
```

No component code or app class names need to be changed.
