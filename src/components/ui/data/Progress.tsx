import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Progress.module.css';

export interface ProgressProps {
    /**
     * Current value. Omit for an indeterminate (unknown-duration) bar.
     */
    value?: number;

    /**
     * Value representing 100%
     * @default 100
     */
    max?: number;

    /**
     * Color
     * @default 'brand'
     */
    tone?: 'brand' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * Track height
     * @default 'md'
     */
    size?: 'sm' | 'md';

    /**
     * Accessible label
     */
    label?: string;

    className?: string;

    style?: React.CSSProperties;
}

/**
 * Determinate or indeterminate progress bar.
 *
 * @example
 * <Progress value={uploadPct} />
 * <Progress /> // indeterminate
 */
export function Progress({
    value,
    max = 100,
    tone = 'brand',
    size = 'md',
    label,
    className,
    style,
}: ProgressProps) {
    const pct = value === undefined ? undefined : Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
            className={cn(styles.track, styles[`size-${size}`], className)}
            style={style}
        >
            <div
                className={cn(styles.fill, styles[`tone-${tone}`], pct === undefined && styles.indeterminate)}
                style={pct === undefined ? undefined : { width: `${pct}%` }}
            />
        </div>
    );
}
