import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Maximum width preset. `'layout'` resolves to the `--max` token
     * (defaults to 1400px — the company-wide desktop content width).
     * @default 'layout'
     */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'layout';

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
 * Container component for constraining content width with responsive padding.
 *
 * @example
 * <Container maxWidth="md">
 *   <Heading>Contained Content</Heading>
 * </Container>
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ maxWidth = 'layout', className, style, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(styles.container, styles[`max-${maxWidth}`], className)}
                style={style}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = 'Container';

