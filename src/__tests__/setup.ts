import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// next/link — plain <a> in tests
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) =>
    React.createElement('a', { href, ...rest }, children),
}));

// next/image — plain <img> in tests
vi.mock('next/image', () => ({
  default: ({ src, alt, ...rest }: any) =>
    React.createElement('img', { src, alt, ...rest }),
}));

// next/navigation stubs
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// next-themes stub
vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }: any) => children,
  useTheme: () => ({ theme: 'dark', setTheme: vi.fn(), resolvedTheme: 'dark' }),
}));

// @ai-sdk/react stub — prevents real network calls in smoke tests
vi.mock('@ai-sdk/react', () => ({
  useChat: () => ({
    messages: [],
    sendMessage: vi.fn().mockResolvedValue(undefined),
    status: 'ready',
    setMessages: vi.fn(),
  }),
}));

// Stub canvas context so canvas-based effect components don't crash in jsdom
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => null,
});
