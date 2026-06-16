'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export interface ProvidersProps {
    children: React.ReactNode;
    defaultTheme?: string;
    enableSystem?: boolean;
}

export function Providers({ children, defaultTheme = 'dark', enableSystem = true }: ProvidersProps) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme={defaultTheme} enableSystem={enableSystem}>
            {children}
        </ThemeProvider>
    )
}
