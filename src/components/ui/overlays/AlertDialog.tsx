'use client';

import React, { useState } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button, type ButtonProps } from '../forms/Button';
import styles from './AlertDialog.module.css';

export interface AlertDialogProps {
    /**
     * Open state (controlled). If omitted, state is managed internally —
     * required when using `trigger`.
     */
    open?: boolean;

    onOpenChange?: (open: boolean) => void;

    /**
     * Trigger element (optional)
     */
    trigger?: React.ReactNode;

    title: string;

    description?: string;

    /**
     * Extra content below the description (e.g. a confirmation input)
     */
    children?: React.ReactNode;

    /**
     * @default 'Confirm'
     */
    confirmLabel?: string;

    /**
     * @default 'Cancel'
     */
    cancelLabel?: string;

    /**
     * @default 'danger'
     */
    confirmVariant?: ButtonProps['variant'];

    /**
     * Called when Confirm is clicked. May be async — the confirm button
     * shows a loading state and the dialog only closes after it resolves.
     */
    onConfirm: () => void | Promise<void>;
}

/**
 * Confirm/destructive-action dialog — unlike `Dialog`, isn't dismissed by
 * clicking outside, and focuses Cancel by default (Radix's alert-dialog
 * accessibility model).
 *
 * @example
 * <AlertDialog
 *   trigger={<Button variant="danger">Delete</Button>}
 *   title="Delete this project?"
 *   description="This cannot be undone."
 *   onConfirm={() => deleteProject(id)}
 * />
 */
export function AlertDialog({
    open,
    onOpenChange,
    trigger,
    title,
    description,
    children,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    confirmVariant = 'danger',
    onConfirm,
}: AlertDialogProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isOpen = open ?? uncontrolledOpen;
    const [loading, setLoading] = useState(false);

    function setOpen(next: boolean) {
        setUncontrolledOpen(next);
        onOpenChange?.(next);
    }

    async function handleConfirm() {
        try {
            setLoading(true);
            await onConfirm();
            setOpen(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setOpen}>
            {trigger && <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>}
            <AlertDialogPrimitive.Portal>
                <AlertDialogPrimitive.Overlay className={styles.overlay} />
                <AlertDialogPrimitive.Content className={styles.content}>
                    <AlertDialogPrimitive.Title className={styles.title}>{title}</AlertDialogPrimitive.Title>
                    {description && (
                        <AlertDialogPrimitive.Description className={styles.description}>
                            {description}
                        </AlertDialogPrimitive.Description>
                    )}
                    {children && <div className={styles.body}>{children}</div>}
                    <div className={styles.actions}>
                        <AlertDialogPrimitive.Cancel asChild>
                            <Button variant="secondary" disabled={loading}>
                                {cancelLabel}
                            </Button>
                        </AlertDialogPrimitive.Cancel>
                        <Button variant={confirmVariant} loading={loading} onClick={handleConfirm}>
                            {confirmLabel}
                        </Button>
                    </div>
                </AlertDialogPrimitive.Content>
            </AlertDialogPrimitive.Portal>
        </AlertDialogPrimitive.Root>
    );
}
