'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '../../lib/cn'
import styles from './LightTheme.module.css'

export interface LightThemeProps {
    /**
     * `compact` — square icon button matching `IconButton`'s `sm` size.
     * `wide` — same height, but with `Button`-style horizontal padding
     * instead of being square, so it holds visual weight next to a
     * text-labeled `Button` in the same row (e.g. navbar actions).
     * `mobile` — bigger touch-target box, for use inside `MobileMenu`/
     * `MobileMenuContent` where the context is inherently touch-driven even
     * without a `pointer: coarse` match (e.g. viewed via devtools device
     * emulation).
     * @default 'compact'
     */
    variant?: 'compact' | 'wide' | 'mobile'

    className?: string
}

export default function LightTheme({ variant = 'compact', className }: LightThemeProps) {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setMounted(true)
        })

        return () => cancelAnimationFrame(frame)
    }, [])

    if (!mounted) {
        return <div className={cn(styles.togglePlaceholder, styles[`variant-${variant}`], className)} />
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    // Use resolvedTheme for accurately showing the icon even if mode is 'system'
    const isDark = resolvedTheme === 'dark'

    return (
        <button
            className={cn(styles.toggle, styles[`variant-${variant}`], className)}
            id="themeToggle"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
        >
            <span aria-hidden="true" dangerouslySetInnerHTML={{
                __html: isDark ?
                    `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="currentColor" opacity=".9"/><path d="M12 2.8v2.1M12 19.1v2.1M3.2 12h2.1M18.7 12h2.1M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M19.2 4.8l-1.5 1.5M6.3 17.7l-1.5 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".9"/></svg>` :
                    `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 13.2A7.7 7.7 0 1 1 10.8 3a6.9 6.9 0 0 0 10.2 10.2Z" fill="currentColor" opacity=".9"/></svg>`
            }}></span>
        </button>
    )
}
