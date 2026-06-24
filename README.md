# @imadgentech/ui

Shared React component library for all IMADGEN Next.js projects. Built on CSS Modules + Radix UI primitives, published to GitHub Packages.

---

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Token System](#token-system)
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
- [Changelog](#changelog)

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
| `--color-bg-surface` | `rgba(255,255,255,0.05)` | Card / elevated container |
| `--color-bg-surface-hover` | `rgba(255,255,255,0.07)` | Hover state of surface |
| `--color-bg-surface-subtle` | `rgba(255,255,255,0.04)` | Nested surface |
| `--color-bg-code` | `rgba(255,255,255,0.08)` | Inline code background |
| `--color-text-default` | `rgba(255,255,255,0.92)` | Primary text |
| `--color-text-muted` | `rgba(255,255,255,0.68)` | Secondary text |
| `--color-text-subtle` | `rgba(255,255,255,0.52)` | Placeholder / tertiary text |
| `--color-text-inverted` | `rgba(10,10,10,0.92)` | Text on brand-colored surfaces |
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
| `--radius-md` | `0.75rem` | 12px |
| `--radius-lg` | `1.125rem` | 18px |
| `--radius-xl` | `1.625rem` | 26px |
| `--radius-full` | `9999px` | pill |

### Shadows

`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-focus`

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

**Font sizes:** `--text-xs` → `--text-xl` (12px → 20px)

**Heading sizes** (fluid/responsive): `--heading-sm` through `--heading-display`

**Font weights:** `--font-light (350)`, `--font-normal (400)`, `--font-medium (425)`, `--font-semibold (450)`, `--font-bold (500)`

**Line heights:** `--leading-tight` → `--leading-loose`

**Letter spacing:** `--tracking-tight (-0.02em)`, `--tracking-normal (0)`, `--tracking-wide (0.025em)`, `--tracking-widest (0.1em)`

### Layout

| Token | Default | Description |
|---|---|---|
| `--navbar-height` | `67px` | Reserve space below fixed navbar |
| `--navbar-bg` | `rgba(5,5,5,0.85)` | Navbar background |
| `--sidebar-width` | `0px` | Override in apps that have a sidebar |

### Customizing Tokens

Override any token by targeting `:root` in your global CSS **after** importing `styles.css`:

```css
/* app/globals.css */
:root {
  --color-brand-primary: #7c3aed; /* swap brand color */
  --sidebar-width: 240px;         /* inform footer/layout */
}
```

---

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
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger' \| 'brand' \| 'subtle'` | `'primary'` | |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | |
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

#### Switch

Same API shape as Checkbox but renders a toggle slider. Props: `id?`, `aria-label?`, `checked?`, `defaultChecked?`, `onCheckedChange?`, `disabled?`.

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

Error takes precedence over hint when both are provided.

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
| `submitVariant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger'` | `'primary'` |
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

Horizontal flex with full control.

```tsx
<Flex direction="row" justify="between" align="center" gap="12">
  <Logo />
  <Nav />
</Flex>
```

| Prop | Type | Default |
|---|---|---|
| `direction` | `'row' \| 'column'` | `'row'` |
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
| `'layout'` | Site default (default) |
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

| Prop | Type | Default |
|---|---|---|
| `brand` | `ReactNode` | **Required** |
| `links` | `Array<{ label: string; href: string }>` | **Required** |
| `actions` | `ReactNode` | — |
| `sticky` | `boolean` | `true` |

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

`MobileMenuContent` includes the IMADGEN logo and a Home link by default.

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

Disables Prev at page 1, Next at last page.

---

### Data Display

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

#### StatCard

```tsx
<StatCard
  label="Total Revenue"
  value="$24,500"
  note="+12% from last month"
  variant="success"
/>
```

`variant`: `'neutral' | 'success' | 'warning' | 'danger'` (default `'neutral'`)

#### Badge

```tsx
<Badge variant="brand">New</Badge>
```

`variant`: `'neutral' | 'brand' | 'success' | 'warning' | 'danger'`

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

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | **Required** |
| `trigger` | `ReactNode` | — |
| `description` | `string` | — |
| `open` | `boolean` | — |
| `onOpenChange` | `(open: boolean) => void` | — |

Includes overlay, close button, focus trap, and ESC key support. Uses `--z-overlay` (1050) for the backdrop and `--z-modal` (1100) for the content.

#### Tooltip

```tsx
<Tooltip content="Save your work" side="top">
  <IconButton aria-label="Save"><SaveIcon /></IconButton>
</Tooltip>
```

`side`: `'top' | 'right' | 'bottom' | 'left'` (default `'top'`). 300ms delay, arrow included.

#### Popover

```tsx
<Popover trigger={<Button>Options</Button>}>
  <Stack gap="8">
    <Button variant="ghost">Edit</Button>
    <Button variant="ghost">Delete</Button>
  </Stack>
</Popover>
```

Controlled via `open` / `onOpenChange`. `sideOffset={8}`.

#### Toast

Wrap your app (or a page) in `ToastProvider`, then call `addToast` from any child:

```tsx
// layout.tsx
import { ToastProvider } from '@imadgentech/ui';
<ToastProvider>{children}</ToastProvider>
```

```tsx
// anywhere inside
import { useToast } from '@imadgentech/ui';

const { addToast } = useToast();
addToast('Saved successfully', 'success');
```

`addToast(message, type?)` — type: `'success' | 'error' | 'info' | 'warning'`

Toasts auto-dismiss after 5 seconds. Clickable to dismiss early.

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
| `tone` | `'default' \| 'muted' \| 'brand' \| 'danger'` | `'default'` |
| `weight` | `'normal' \| 'medium' \| 'semibold'` | `'normal'` |
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

`columns`: `1 | 2 | 3 | 4` (default `3`). Responsive: collapses to 1 on mobile, 2 on tablet.

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

`featured`: adds "Recommended" badge and higher visual elevation.

#### Testimonial

```tsx
<Testimonial
  quote="This saved us weeks of work."
  author="Jane Doe"
  role="CTO at Acme"
  avatarSrc="/jane.jpg"
/>
```

#### LogoCloud

```tsx
<LogoCloud
  title="Trusted by teams at"
  logos={[
    { src: '/logos/company-a.svg', alt: 'Company A' },
  ]}
/>
```

Uses `next/image` at 120×40px. Images are grayscale by default, color on hover.

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

`ChatProvider` internally calls `useChat` from `@ai-sdk/react`. Your Next.js app must expose an `/api/chat` route (or configure via `useChat`'s `api` option — inject via context if needed).

Auto-disables after 3 consecutive failures to prevent abuse.


#### ChatPage Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `'full' \| 'compact' \| 'minimal'` | `'full'` |
| `placeholder` | `string` | `'Ask anything...'` |
| `initialMessages` | `Message[]` | — |
| `onClose` | `() => void` | — |
| `isFullPage` | `boolean` | — |
| `onSessionCreate` | `(sessionId: string, meta: { started_at: string }) => Promise<void>` | — |
| `onSaveConversation` | `(data: { session_id: string; messages: ConversationMessage[] }) => Promise<void>` | — |

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

All effects are `'use client'`, render at fixed `z-index: -1`, and have no props. Drop them in a layout and they fill the background.

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

Available server exports: `cn`, `Providers` *(note: Providers itself is a client component but is safe to re-export)*, all **Layout** components, all **Typography** components, and all **Marketing** components.

**Not available** from `/server`: forms, overlays (Dialog, Tooltip, Popover, Toast), navigation (Navbar, MobileMenu, NavLink, Tabs, Pagination), data display with interactive state (Accordion, Checkbox, etc.), ChatPage, effects.

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

### v1.0.17

**Fixes (RSC / webpack compatibility):**
- Split `ChatPage`, `ChatProvider`, and `useChatContext` into a dedicated `@imadgentech/ui/chat` entry — apps that don't use chat no longer pull in `@ai-sdk/react`, `ai`, or `swr`
- Added top-level `'use client'` directive to the main and chat bundle outputs — prevents `createContext` errors when importing from React Server Components in Next.js
- Added `./chat` to `package.json` exports map

### v1.0.13 — 2026-06-22

**Fixes (React imports in effect components):**
- Fixed `ReferenceError: React is not defined` in compiled ESM/CJS output from background effect components
- `ImBgAurora.tsx` — added missing `import React from 'react'`
- `LightTheme.tsx` — updated import to include React namespace: `import React, { useState, useEffect } from 'react'`
- Both components were using JSX without explicitly importing React, causing compiled `React.createElement` calls to have no definition. This affected Next.js apps consuming the package when these components were rendered (especially server-side or in RSC contexts where React wasn't bound in the bundle).

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

### v1.0.5

- Added `style` prop to all remaining components that were missing it

### v1.0.4 and earlier

Internal development. Tokens were migrated from the v0.x naming system (`--card`, `--btnBg`, `--orange`, etc.) to the current `--color-*` / `--space-*` / `--radius-*` system. Some components (Form, Footer, ChatPage) were not fully migrated until v1.0.6.
