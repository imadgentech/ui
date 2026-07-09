import React from 'react';
import { cn } from '../../../lib/cn';
import { getResponsiveClasses, type ResponsiveValue } from '../../../lib/responsive';
import styles from './Flex.module.css';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Layout direction. Accepts a single value or a breakpoint map (e.g.
     * `{ base: 'column', md: 'row' }`) to collapse a row layout to a column
     * on narrow viewports.
     * @default 'row'
     */
    direction?: ResponsiveValue<'row' | 'column'>;

    /**
     * Flex wrap
     * @default 'nowrap'
     */
    wrap?: 'nowrap' | 'wrap';

    /**
     * Align items
     * @default 'stretch'
     */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

    /**
     * Justify content
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';

    /**
     * Gap between items
     * @default '0'
     */
    gap?: '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';

    /**
     * HTML element to render
     * @default 'div'
     */
    as?: keyof JSX.IntrinsicElements;

    /**
     * Full width
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Children content
     */
    children?: React.ReactNode;
}

/**
 * Flex component for flexible layouts.
 */
export const Flex = React.forwardRef<HTMLElement, FlexProps>(
    (
        {
            direction = 'row',
            wrap = 'nowrap',
            align = 'stretch',
            justify = 'start',
            gap = '0',
            as: Component = 'div',
            fullWidth = false,
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        const directionClasses = getResponsiveClasses(direction, 'direction', styles);

        // See Stack.tsx for why this uses createElement instead of JSX: `as`
        // is typed as `keyof JSX.IntrinsicElements`, and JSX would check this
        // component's HTMLAttributes-shaped props against every element in
        // that union (including SVG elements with incompatible prop types).
        return React.createElement(
            Component as React.ElementType,
            {
                ref,
                className: cn(
                    styles.flex,
                    directionClasses,
                    styles[`wrap-${wrap}`],
                    styles[`align-${align}`],
                    styles[`justify-${justify}`],
                    styles[`gap-${gap}`],
                    fullWidth && styles.fullWidth,
                    className
                ),
                style,
                ...rest,
            },
            children
        );
    }
);

Flex.displayName = 'Flex';

