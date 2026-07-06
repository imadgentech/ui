import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Text.module.css';

export interface TextProps {
    /**
     * HTML element to render
     * @default 'p'
     */
    as?: 'p' | 'span';

    /**
     * Text size
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /**
     * Text tone/color
     * @default 'default'
     */
    tone?: 'default' | 'muted' | 'brand' | 'success' | 'danger';

    /**
     * Font weight
     * @default 'normal'
     */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';

    /**
     * Text alignment
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Content
     */
    children: React.ReactNode;
}

/**
 * Text component for body text and inline text elements.
 *
 * @example
 * <Text size="lg" tone="brand">This is brand text</Text>
 * <Text as="span" size="sm" tone="muted">Small muted text</Text>
 */
export function Text({
    as: Component = 'p',
    size = 'md',
    tone = 'default',
    weight = 'normal',
    align,
    className,
    style,
    children,
}: TextProps) {
    return (
        <Component
            className={cn(
                styles.text,
                styles[`size-${size}`],
                styles[`tone-${tone}`],
                styles[`weight-${weight}`],
                align && styles[`align-${align}`],
                className
            )}
            style={style}
        >
            {children}
        </Component>
    );
}

