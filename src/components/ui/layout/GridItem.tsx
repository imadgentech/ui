import React from 'react';
import { cn } from '../../../lib/cn';
import { getResponsiveClasses, type ResponsiveValue } from '../../../lib/responsive';
import styles from './GridItem.module.css';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Column span (1-12)
     * @default 1
     */
    span?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

    /**
     * Column start position (1-12)
     */
    start?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

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
 * Grid item with responsive span and start position.
 *
 * @example
 * <GridItem span={{ base: 12, md: 6, lg: 4 }}>
 *   Content
 * </GridItem>
 */
export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
    ({ span, start, className, style, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    getResponsiveClasses(span, 'span', styles),
                    getResponsiveClasses(start, 'start', styles),
                    className
                )}
                style={style}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

GridItem.displayName = 'GridItem';

