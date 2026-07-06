import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Spinner.module.css';

export interface SpinnerProps {
    /**
     * Spinner size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Color
     * @default 'brand'
     */
    tone?: 'brand' | 'muted' | 'current';

    /**
     * Accessible label
     * @default 'Loading'
     */
    label?: string;

    className?: string;

    style?: React.CSSProperties;
}

/**
 * Standalone loading spinner, for full-page or section-level loading states.
 * `Button`/`IconButton` have their own built-in spinner for inline button
 * loading — use this one anywhere else.
 *
 * @example
 * <Spinner size="lg" />
 */
export function Spinner({
    size = 'md',
    tone = 'brand',
    label = 'Loading',
    className,
    style,
}: SpinnerProps) {
    return (
        <span
            role="status"
            aria-label={label}
            className={cn(styles.spinner, styles[`size-${size}`], styles[`tone-${tone}`], className)}
            style={style}
        />
    );
}
