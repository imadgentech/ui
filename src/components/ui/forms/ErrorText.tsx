import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './ErrorText.module.css';

export interface ErrorTextProps {
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
export function ErrorText({ className, style, children }: ErrorTextProps) {
    return (
        <p className={cn(styles.errorText, className)} style={style} role="alert">
            {children}
        </p>
    );
}

