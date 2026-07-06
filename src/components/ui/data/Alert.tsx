'use client';

import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Alert.module.css';

export interface AlertProps {
    /**
     * Color/semantic tone
     * @default 'neutral'
     */
    tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';

    /**
     * Bold lead-in line above the message
     */
    title?: string;

    /**
     * Optional action element (e.g. a `Button`), rendered next to the
     * dismiss button
     */
    action?: React.ReactNode;

    /**
     * If provided, renders a dismiss (×) button that calls this on click.
     * Omit for a persistent alert.
     */
    onDismiss?: () => void;

    className?: string;

    style?: React.CSSProperties;

    /**
     * Message body
     */
    children: React.ReactNode;
}

/**
 * Persistent inline message box — for form-level errors, empty-state
 * notices, and standing warnings. For ephemeral feedback that disappears on
 * its own, use `Toast` instead.
 *
 * @example
 * <Alert tone="danger" title="Couldn't save changes">
 *   Check the highlighted fields and try again.
 * </Alert>
 */
export function Alert({
    tone = 'neutral',
    title,
    action,
    onDismiss,
    className,
    style,
    children,
}: AlertProps) {
    return (
        <div
            className={cn(styles.alert, styles[`tone-${tone}`], className)}
            style={style}
            role={tone === 'danger' || tone === 'warning' ? 'alert' : 'status'}
        >
            <div className={styles.body}>
                {title && <p className={styles.title}>{title}</p>}
                <p className={styles.message}>{children}</p>
            </div>
            {(action || onDismiss) && (
                <div className={styles.actions}>
                    {action}
                    {onDismiss && (
                        <button type="button" className={styles.close} onClick={onDismiss} aria-label="Dismiss">
                            ×
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
