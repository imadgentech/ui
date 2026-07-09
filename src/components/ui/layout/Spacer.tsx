import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Spacer.module.css';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Spacing axis
     * @default 'vertical'
     */
    axis?: 'horizontal' | 'vertical';

    /**
     * Spacing size from tokens
     * @default '16'
     */
    size?: '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48' | '64';

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;
}

/**
 * Spacer component for fixed spacing between elements.
 */
export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
    ({ axis = 'vertical', size = '16', className, style, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    styles.spacer,
                    styles[`axis-${axis}`],
                    styles[`size-${size}`],
                    className
                )}
                style={style}
                aria-hidden="true"
                {...rest}
            />
        );
    }
);

Spacer.displayName = 'Spacer';

