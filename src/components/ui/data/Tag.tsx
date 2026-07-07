'use client';

import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Tag.module.css';

export interface TagProps {
    /**
     * Color variant, matching `Badge`'s variant set.
     * @default 'neutral'
     */
    variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

    /**
     * If provided, renders a remove (×) button that calls this on click.
     * Omit for a static, non-removable tag.
     */
    onRemove?: () => void;

    className?: string;

    style?: React.CSSProperties;

    children: React.ReactNode;
}

/**
 * Removable/interactive pill — for filters, multi-select summaries, and
 * keyword lists. For a static label, use `Badge` instead.
 *
 * @example
 * <Tag variant="brand" onRemove={() => removeFilter(id)}>Overdue</Tag>
 */
export function Tag({
    variant = 'neutral',
    onRemove,
    className,
    style,
    children,
}: TagProps) {
    return (
        <span className={cn(styles.tag, styles[`variant-${variant}`], className)} style={style}>
            <span className={styles.label}>{children}</span>
            {onRemove && (
                <button type="button" className={styles.remove} onClick={onRemove} aria-label="Remove">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            )}
        </span>
    );
}
