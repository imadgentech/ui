import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Text.module.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
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
export const Text = React.forwardRef<HTMLElement, TextProps>(
    (
        {
            as: Component = 'p',
            size = 'md',
            tone = 'default',
            weight = 'normal',
            align,
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        // Rendered via createElement rather than JSX: `as` narrows to a
        // specific tag ('p' | 'span'), which makes JSX infer a concrete
        // element-specific ref type (e.g. HTMLParagraphElement) that doesn't
        // match the broader `HTMLElement` ref this component forwards.
        // createElement checks the props object once against a permissive
        // signature instead of per-branch.
        return React.createElement(
            Component as React.ElementType,
            {
                ref,
                className: cn(
                    styles.text,
                    styles[`size-${size}`],
                    styles[`tone-${tone}`],
                    styles[`weight-${weight}`],
                    align && styles[`align-${align}`],
                    className
                ),
                style,
                ...rest,
            },
            children
        );
    }
);

Text.displayName = 'Text';

