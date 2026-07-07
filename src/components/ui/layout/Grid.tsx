import React from 'react';
import { cn } from '../../../lib/cn';
import { getResponsiveClasses, type ResponsiveValue } from '../../../lib/responsive';
import styles from './Grid.module.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns (1-12)
     * @default 12
     */
    columns?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

    /**
     * Gap between items
     * @default '16'
     */
    gap?: '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';

    /**
     * Vertical alignment of items
     */
    align?: 'start' | 'center' | 'end' | 'stretch';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Content
     */
    children: React.ReactNode;
}

/**
 * Grid container with 12-column system and responsive behavior.
 * 
 * @example
 * <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="24" align="center">
 *   <GridItem>Content</GridItem>
 * </Grid>
 */
export function Grid({
    columns = 12,
    gap = '16',
    align,
    className,
    children,
    ...props
}: GridProps) {
    const columnClasses = getResponsiveClasses(columns, 'columns', styles);

    return (
        <div
            {...props}
            className={cn(
                styles.grid,
                columnClasses,
                styles[`gap-${gap}`],
                align && styles[`align-${align}`],
                className
            )}
        >
            {children}
        </div>
    );
}

