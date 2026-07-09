import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './HelperText.module.css';

export interface HelperTextProps {
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
     * Helper text content
     */
    children: React.ReactNode;
}

/**
 * HelperText component for provided hints or information.
 */
export function HelperText({ id, className, style, children }: HelperTextProps) {
    return (
        <p id={id} className={cn(styles.helperText, className)} style={style}>
            {children}
        </p>
    );
}

