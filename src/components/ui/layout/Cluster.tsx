import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Cluster.module.css';

export interface ClusterProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Gap between items
     * @default '8'
     */
    gap?: '2' | '4' | '8' | '12' | '16' | '24';

    /**
     * Horizontal alignment
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between';

    /**
     * Vertical alignment
     * @default 'center'
     */
    align?: 'start' | 'center' | 'end';

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
 * Cluster component for inline wrapping layouts (badges, buttons, tags).
 * Uses CSS flexbox with wrap and gap.
 *
 * @example
 * <Cluster gap="12" justify="center">
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 * </Cluster>
 */
export const Cluster = React.forwardRef<HTMLElement, ClusterProps>(
    (
        {
            gap = '8',
            justify = 'start',
            align = 'center',
            as: Component = 'div',
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        // See Stack.tsx for why this uses createElement instead of JSX: `as`
        // is typed as `keyof JSX.IntrinsicElements`, and JSX would check this
        // component's HTMLAttributes-shaped props against every element in
        // that union (including SVG elements with incompatible prop types).
        return React.createElement(
            Component as React.ElementType,
            {
                ref,
                className: cn(
                    styles.cluster,
                    styles[`gap-${gap}`],
                    styles[`justify-${justify}`],
                    styles[`align-${align}`],
                    className
                ),
                style,
                ...rest,
            },
            children
        );
    }
);

Cluster.displayName = 'Cluster';

