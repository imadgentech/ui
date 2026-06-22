# Auth UI Components — Design Spec
**Date:** 2026-06-22  
**Status:** Approved

## Overview

Three deliverables to satisfy the auth service prerequisites for `@imadgentech/ui`:

1. `LoginForm` — combined login/signup form component
2. `OtpForm` — 6-box OTP verification component
3. `ChatProvider` — add optional `getToken` prop for per-message auth headers

All components are pure UI. No auth SDK (Firebase, Supabase, or otherwise) is imported or referenced in this package. All async work lives in the consuming project via handler props.

---

## 1. LoginForm

**File:** `src/components/ui/forms/LoginForm.tsx`  
**CSS Module:** `src/components/ui/forms/LoginForm.module.css`  
**Export:** added to `src/index.ts`

### Props

```typescript
export interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => Promise<void> | void;
  onSignup: (data: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    password: string;
  }) => Promise<void> | void;
  onForgotPassword: (email: string) => void;
  loading?: boolean;
  error?: string | null;
  defaultMode?: 'login' | 'signup';
}
```

### Behavior

**Internal state:** `mode: 'login' | 'signup'` (defaults to `defaultMode ?? 'login'`), plus `confirmPassword` and `passwordMismatch` for signup validation.

**Login mode:**
- Email input (type `email`, required)
- Password input (type `password`, required)
- "Forgot password?" link — calls `onForgotPassword(email)` with the current email field value
- Submit button labeled "Sign In" — shows `loading` spinner, disabled while loading
- `error` prop rendered via `ErrorText` below the button
- "Don't have an account? Sign up" toggle link at the bottom

**Signup mode:**
- First Name + Last Name inputs side by side (`Grid columns={2}`)
- Company Name input
- Email input
- Password input
- Confirm Password input — client-side match check against Password; shows inline `ErrorText` on mismatch; does not call `onSignup` if passwords don't match
- Submit button labeled "Create Account" — shows `loading` spinner, disabled while loading or passwords mismatch
- `error` prop rendered via `ErrorText` below the button
- "Already have an account? Sign in" toggle link at the bottom

**Mode toggle:** resets all local field values and the `passwordMismatch` flag on switch. The `error` prop is controlled by the consuming project — it continues to display until the parent sets it to `null`.

### Building blocks used
`Input`, `Button`, `FormField`, `Label`, `ErrorText`, `Stack`, `Grid`, `Text`

---

## 2. OtpForm

**File:** `src/components/ui/forms/OtpForm.tsx`  
**CSS Module:** `src/components/ui/forms/OtpForm.module.css`  
**Export:** added to `src/index.ts`

### Props

```typescript
export interface OtpFormProps {
  onSubmit: (otp: string) => Promise<void> | void;
  onResend: () => Promise<void> | void;
  loading?: boolean;
  error?: string | null;
  length?: number;
}
```

`length` defaults to `6`.

### Behavior

- Renders `length` individual `<input maxLength={1}>` boxes in a row
- Only numeric input accepted — non-digit keypresses are ignored via `onKeyDown`
- Typing a digit auto-advances focus to the next box
- Backspace on an empty box moves focus to the previous box
- Pasting a full OTP code fills all boxes in sequence and advances focus to the last box
- "Verify" submit button — disabled until all boxes are filled and `loading` is false
- `error` rendered via existing `ErrorText` component below the boxes
- "Resend code" ghost text button below the submit — calls `onResend`; debouncing is the consuming project's responsibility
- `onSubmit` receives the joined string (e.g. `"123456"`)

### Building blocks used
`Button`, `ErrorText`, `Stack`, `Text`, individual `<input>` elements styled via CSS module

---

## 3. ChatProvider — `getToken` prop

**File:** `src/components/ui/chatbox/ChatContext.tsx`

### Change

`ChatProvider` gains an optional `getToken` prop:

```typescript
export interface ChatProviderProps {
  children: React.ReactNode;
  getToken?: () => Promise<string>;
}

export function ChatProvider({ children, getToken }: ChatProviderProps)
```

### How it works

Inside `handleSubmit` and `append`, before calling `sdkSendMessage`, the token is fetched and attached as a header on the existing request:

```typescript
const headers = getToken
  ? { Authorization: `Bearer ${await getToken()}` }
  : undefined;

await sdkSendMessage({ text: messageText, headers });
```

Firebase's `user.getIdToken()` returns a cached in-memory token for up to 1 hour — no extra network request in the common case. Expiry refresh happens transparently inside the Firebase SDK.

**No breaking change** — `getToken` is optional. Existing consumers pass nothing and behavior is unchanged.

### Tier identification

The backend reads the JWT to determine user tier:

| Token present | Claim | Tier |
|---|---|---|
| No | — | Site visitor |
| Yes | standard user | Signed-up user |
| Yes | custom claim (e.g. `client: true`) | Paid client |

Rate limiting and token budgets are enforced on the backend (chat service). This package is not involved.

### Export addition

`ChatProviderProps` is exported from `src/index.ts` so consuming projects can type their wrappers.

### Usage in consuming project

```tsx
// Authenticated user
<ChatProvider getToken={() => firebaseUser.getIdToken()}>
  <ChatPage ... />
</ChatProvider>

// Visitor (not logged in)
<ChatProvider>
  <ChatPage ... />
</ChatProvider>
```

---

## File changes summary

| File | Change |
|---|---|
| `src/components/ui/forms/LoginForm.tsx` | New |
| `src/components/ui/forms/LoginForm.module.css` | New |
| `src/components/ui/forms/OtpForm.tsx` | New |
| `src/components/ui/forms/OtpForm.module.css` | New |
| `src/components/ui/chatbox/ChatContext.tsx` | Add `getToken` prop |
| `src/index.ts` | Export `LoginForm`, `LoginFormProps`, `OtpForm`, `OtpFormProps`, `ChatProviderProps` |

---

## Out of scope

- Backend rate limiting logic
- Firebase SDK setup in consuming projects
- Token refresh scheduling
- Any Supabase references (confirmed none exist in the codebase)
