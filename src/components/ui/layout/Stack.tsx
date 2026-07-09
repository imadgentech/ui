import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Stack.module.css';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Gap between children (maps to spacing tokens)
     * @default '16'
     */
    gap?: '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';

    /**
     * Cross-axis alignment
     * @default 'stretch'
     */
    align?: 'start' | 'center' | 'end' | 'stretch';

    /**
     * HTML element to render
     * @default 'div'
     */
    as?: keyof JSX.IntrinsicElements;

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
 * Stack component for vertical layouts with gap-based spacing.
 * Uses CSS flexbox gap property - no wrapper elements per child.
 *
 * @example
 * <Stack gap="24">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </Stack>
 */
export const Stack = React.forwardRef<HTMLElement, StackProps>(
    (
        {
            gap = '16',
            align = 'stretch',
            as: Component = 'div',
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        // Rendered via createElement rather than JSX: `Component` is typed as
        // `keyof JSX.IntrinsicElements`, a union broad enough to include
        // elements like `symbol` whose prop types (SVGProps) are structurally
        // incompatible with the HTMLAttributes-shaped props this component
        // actually passes. JSX would force TypeScript to check props against
        // every member of that union; createElement with an explicit `any`
        // cast checks the props object once against a permissive signature
        // instead, without weakening any of this component's own prop types.
        return React.createElement(
            Component as React.ElementType,
            {
                ref,
                className: cn(styles.stack, styles[`gap-${gap}`], styles[`align-${align}`], className),
                style,
                ...rest,
            },
            children
        );
    }
);

Stack.displayName = 'Stack';

