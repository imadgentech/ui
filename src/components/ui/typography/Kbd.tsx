import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Kbd.module.css';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
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
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
    ({ className, style, children, ...rest }, ref) => {
        return (
            <kbd ref={ref} className={cn(styles.kbd, className)} style={style} {...rest}>
                {children}
            </kbd>
        );
    }
);

Kbd.displayName = 'Kbd';

