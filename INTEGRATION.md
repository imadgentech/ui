# @imadgentech/ui — Integration Guide

Everything a new project needs to consume this package correctly from day one.

---

## Requirements

| Dependency    | Minimum |
|---------------|---------|
| React         | 18      |
| React DOM     | 18      |
| Next.js       | 14      |
| next-themes   | 0.4     |

For the AI chat components only:

| Dependency    | Minimum |
|---------------|---------|
| ai            | 6       |
| @ai-sdk/react | 3       |

---

## Installation

### 1. Authenticate with GitHub Packages

Create or update `.npmrc` in the project root:

```
@imadgentech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

The PAT must have the `read:packages` scope.  
Add `.npmrc` to `.gitignore` — never commit auth tokens.

### 2. Install the package

```bash
npm install @imadgentech/ui
```

---

## Setup

### 1. Import the CSS

In your root layout (`app/layout.tsx`):

```tsx
import '@imadgentech/ui/dist/index.css';
```

This file includes component styles and design tokens. Without it, components will render unstyled.

### 2. Wrap the app in Providers

`Providers` sets up the theme provider (dark by default):

```tsx
// app/layout.tsx
import { Providers } from '@imadgentech/ui';
import '@imadgentech/ui/dist/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

`suppressHydrationWarning` on `<html>` is required because `next-themes` adds a `data-theme` attribute server-side.

---

## Importing components

### Client components (default import path)

Use this for interactive components — forms, overlays, navigation, chat, effects:

```tsx
import { Button, Input, Dialog, Tabs, ChatPage } from '@imadgentech/ui';
```

The entire `@imadgentech/ui` barrel has a `"use client"` directive, so it's safe to import anywhere in the Next.js App Router.

### Server-safe import path

Use `@imadgentech/ui/server` in React Server Components to avoid triggering an unnecessary client boundary. This entry exports only purely presentational components: layout, typography, and marketing.

```tsx
// app/page.tsx — a Server Component
import { Hero, Stack, Text, Container } from '@imadgentech/ui/server';

export default function HomePage() {
  return (
    <Container>
      <Hero
        title="Build faster"
        description="The imadgen design system."
        actions={<a href="/start">Get started</a>}
      />
    </Container>
  );
}
```

Available in `@imadgentech/ui/server`:
- **Layout**: AspectRatio, Cluster, Container, Divider, Flex, Grid, GridItem, Section, Spacer, Stack, Surface  
- **Typography**: Code, Heading, Kbd, Link, Text  
- **Marketing**: CTA, FeatureGrid, Footer, Hero, LogoCloud, PricingCard, Testimonial, ThemeImage  
- **Utility**: `cn`

---

## Design tokens

The package exposes raw CSS custom properties you can import separately if you need access to the token values in your own styles:

```tsx
import '@imadgentech/ui/tokens.css';
```

Variables follow the pattern `--im-*`. See `THEME.md` in this repo for the full reference.

---

## Theming

The default theme is **dark**. To switch themes:

```tsx
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

Themes are applied via the `data-theme` attribute on the `<html>` element.

---

## Component quick reference

### Button

```tsx
<Button variant="primary" size="md" loading={false}>Submit</Button>
<Button variant="secondary" leftIcon={<PlusIcon />}>Add item</Button>
<Button variant="danger" as="a" href="/delete">Delete</Button>
```

Variants: `primary` | `secondary` | `ghost` | `danger` | `brand` | `subtle`  
Sizes: `sm` | `md` | `lg`

### Layout

```tsx
<Stack gap="24">
  <Heading as="h2" size="xl">Section</Heading>
  <Text tone="muted">Description text.</Text>
</Stack>

<Flex align="center" justify="between" gap="16">
  <Logo />
  <nav>...</nav>
</Flex>

<Grid columns={{ base: 1, md: 2, lg: 3 }} gap="24">
  {items.map(item => <GridItem key={item.id}>...</GridItem>)}
</Grid>
```

### Form

```tsx
<FormField id="email" label="Email" error={errors.email} hint="Used for login.">
  <Input id="email" type="email" placeholder="you@example.com" />
</FormField>
```

### Navigation

```tsx
<Navbar
  brand={<Logo />}
  links={[
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
  ]}
  actions={<Button variant="primary" size="sm">Sign up</Button>}
/>
```

### Data display

```tsx
<Table
  headers={['Name', 'Status', 'Date']}
  rows={data.map(row => [row.name, <Badge variant="success">{row.status}</Badge>, row.date])}
/>
```

### Overlays

```tsx
<Dialog
  title="Confirm delete"
  description="This action cannot be undone."
  trigger={<Button variant="danger">Delete</Button>}
>
  <Flex gap="8">
    <Button variant="danger" onClick={onConfirm}>Delete</Button>
    <Button variant="ghost" onClick={onCancel}>Cancel</Button>
  </Flex>
</Dialog>
```

### Toast

Wrap your root layout (inside `Providers`) with `ToastProvider`, then use the hook anywhere:

```tsx
// layout.tsx
import { ToastProvider } from '@imadgentech/ui';
<Providers><ToastProvider>{children}</ToastProvider></Providers>

// In a component
import { useToast } from '@imadgentech/ui';
const { addToast } = useToast();
addToast('Saved successfully', 'success');
```

---

## AI Chat (optional dependency)

The chat components require `ai` and `@ai-sdk/react` to be installed in your project:

```bash
npm install ai @ai-sdk/react
```

### Basic setup

```tsx
// app/layout.tsx
import { Providers, ChatProvider } from '@imadgentech/ui';

<Providers>
  <ChatProvider>
    {children}
  </ChatProvider>
</Providers>
```

```tsx
// app/chat/page.tsx
'use client';
import { ChatPage } from '@imadgentech/ui';

export default function ChatRoute() {
  return (
    <ChatPage
      variant="full"
      placeholder="Ask me anything..."
      onSessionCreate={async (sessionId, meta) => {
        // Persist the session in your own backend
        await fetch('/api/sessions', {
          method: 'POST',
          body: JSON.stringify({ sessionId, ...meta }),
        });
      }}
      onSaveConversation={async (data) => {
        // Persist conversation when the user ends the chat
        await fetch('/api/conversations', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      }}
    />
  );
}
```

`ChatPage` props:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `variant` | `'full' \| 'compact' \| 'minimal'` | No | Visual layout |
| `placeholder` | `string` | No | Input placeholder text |
| `onSessionCreate` | `(id, meta) => Promise<void>` | No | Called on mount with the session ID |
| `onSaveConversation` | `(data) => Promise<void>` | No | Called when user ends the chat |
| `onClose` | `() => void` | No | Called when the close button is clicked |

If `onSessionCreate` / `onSaveConversation` are omitted, the chat works without persistence.

`useChat` (from `@ai-sdk/react`) must be configured with an API endpoint in your app; see the [Vercel AI SDK docs](https://sdk.vercel.ai) for how to set up the route handler.

---

## Background effects

Effect components are pure decorative — they render a canvas or DOM element that fills the page. Place them near the root of a layout:

```tsx
import { ImBgAurora, CursorGlow } from '@imadgentech/ui';

export default function Layout({ children }) {
  return (
    <>
      <ImBgAurora />
      <CursorGlow />
      {children}
    </>
  );
}
```

Available effects: `CursorGlow`, `EmbersBGE`, `ImBgAurora`, `LightTheme`, `NetBGE`, `SwarmsBGE`, `WaveformBackground`.

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Components render unstyled | Import `@imadgentech/ui/dist/index.css` in root layout |
| Hydration mismatch on `<html>` | Add `suppressHydrationWarning` to the `<html>` element |
| Chat components crash | Install `ai` and `@ai-sdk/react` and wrap with `<ChatProvider>` |
| `Module not found: @imadgentech/ui` | Check `.npmrc` has the GitHub Packages registry and a valid token |
| Server component error on import | Use `@imadgentech/ui/server` for layout/typography in Server Components |
