import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Kbd.module.css';

export interface KbdProps {
    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Content (keyboard key)
     */
    children: React.ReactNode;
}

/**
 * Kbd component for displaying keyboard shortcuts and keys.
 * 
 * @example
 * <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
 * <Kbd>âŒ˜</Kbd><Kbd>K</Kbd>
 */
export function Kbd({ className, style, children }: KbdProps) {
    return (
        <kbd className={cn(styles.kbd, className)} style={style}>
            {children}
        </kbd>
    );
}

