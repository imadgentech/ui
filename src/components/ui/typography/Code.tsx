import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Code.module.css';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Variant: inline or block
     * @default 'inline'
     */
    variant?: 'inline' | 'block';

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
 * Code component for displaying code inline or in blocks.
 *
 * @example
 * <Code>const foo = 'bar';</Code>
 * <Code variant="block">{`function hello() {\n  return 'world';\n}`}</Code>
 */
export const Code = React.forwardRef<HTMLElement, CodeProps>(
    ({ variant = 'inline', className, style, children, ...rest }, ref) => {
        if (variant === 'block') {
            return (
                <pre ref={ref as React.Ref<HTMLPreElement>} className={cn(styles.block, className)} style={style} {...rest}>
                    <code>{children}</code>
                </pre>
            );
        }

        return (
            <code ref={ref} className={cn(styles.inline, className)} style={style} {...rest}>
                {children}
            </code>
        );
    }
);

Code.displayName = 'Code';

