import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './HelperText.module.css';

export interface HelperTextProps {
    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Helper text content
     */
    children: React.ReactNode;
}

/**
 * HelperText component for provided hints or information.
 */
export function HelperText({ className, style, children }: HelperTextProps) {
    return (
        <p className={cn(styles.helperText, className)} style={style}>
            {children}
        </p>
    );
}

