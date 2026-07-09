import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Aspect ratio (e.g., "16/9" or 1.777)
     * @default '1/1'
     */
    ratio?: string | number;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Content to maintain aspect ratio
     */
    children: React.ReactNode;
}

/**
 * AspectRatio component for maintaining consistent proportions for media or containers.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ ratio = '1/1', className, style, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(styles.aspectRatio, className)}
                style={{ aspectRatio: ratio, ...style } as React.CSSProperties}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

AspectRatio.displayName = 'AspectRatio';

