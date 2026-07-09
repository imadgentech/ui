'use client';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../../lib/cn';
import styles from './Drawer.module.css';

export interface DrawerProps {
    open?: boolean;

    onOpenChange?: (open: boolean) => void;

    trigger?: React.ReactNode;

    title?: string;

    description?: string;

    /**
     * Edge the panel slides in from
     * @default 'right'
     */
    side?: 'left' | 'right' | 'bottom';

    /**
     * Raw CSS width, for `side="left" | "right"` panels that need to be
     * narrower or wider than the default (`min(400px, 90vw)`).
     * Ignored for `side="bottom"` — use `height` instead.
     */
    width?: string;

    /**
     * Raw CSS max-height, for `side="bottom"` panels that need to be
     * shorter or taller than the default (`min(500px, 85vh)`).
     * Ignored for `side="left" | "right"`.
     */
    height?: string;

    /**
     * 'solid' gives the panel an opaque background — the right choice for
     * most drawers, since translucency over a large area reads as unfinished
     * rather than deliberate. 'translucent' restores the prior frosted (but
     * unblurred) surface for cases that want it.
     * @default 'solid'
     */
    background?: 'solid' | 'translucent';

    children: React.ReactNode;

    className?: string;
}

/**
 * Side panel — for filters, side-form editors, and similar content that
 * doesn't need a full-screen takeover. For full-screen mobile navigation,
 * use `MobileMenu` instead.
 *
 * @example
 * <Drawer trigger={<Button>Filters</Button>} title="Filters" side="right">
 *   <FilterForm />
 * </Drawer>
 */
export function Drawer({
    open,
    onOpenChange,
    trigger,
    title,
    description,
    side = 'right',
    width,
    height,
    background = 'solid',
    children,
    className,
}: DrawerProps) {
    const sizeStyle =
        side === 'bottom'
            ? (height ? { maxHeight: height } : undefined)
            : (width ? { width } : undefined);

    return (
        <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className={styles.overlay} />
                <DialogPrimitive.Content
                    className={cn(
                        styles.content,
                        styles[`side-${side}`],
                        background === 'translucent' && styles['bg-translucent'],
                        className
                    )}
                    style={sizeStyle}
                >
                    <div className={styles.header}>
                        <DialogPrimitive.Title className={title ? styles.title : styles.srOnly}>
                            {title || 'Panel'}
                        </DialogPrimitive.Title>
                        {description ? (
                            <DialogPrimitive.Description className={styles.description}>
                                {description}
                            </DialogPrimitive.Description>
                        ) : (
                            <DialogPrimitive.Description className={styles.srOnly}>
                                Panel content
                            </DialogPrimitive.Description>
                        )}
                        <DialogPrimitive.Close className={styles.close} aria-label="Close">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </DialogPrimitive.Close>
                    </div>
                    <div className={styles.body}>{children}</div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
}
