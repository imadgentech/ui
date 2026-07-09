import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './ErrorText.module.css';

export interface ErrorTextProps {
    /**
     * Element ID (used to associate this text with a control via
     * `aria-describedby`)
     */
    id?: string;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Error message content
     */
    children: React.ReactNode;
}

/**
 * ErrorText component for validation feedback.
 */
export function ErrorText({ id, className, style, children }: ErrorTextProps) {
    return (
        <p id={id} className={cn(styles.errorText, className)} style={style} role="alert">
            {children}
        </p>
    );
}

