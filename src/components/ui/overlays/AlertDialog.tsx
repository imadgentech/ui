'use client';

import React, { useState } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button, type ButtonProps } from '../forms/Button';
import { ErrorText } from '../forms/ErrorText';
import { cn } from '../../../lib/cn';
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
     * If it throws/rejects, the dialog stays open and the rejection reason
     * is shown via `ErrorText` instead of surfacing as an unhandled promise
     * rejection.
     */
    onConfirm: () => void | Promise<void>;

    /**
     * Additional class name applied to the dialog's content surface.
     */
    className?: string;
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
    className,
}: AlertDialogProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isOpen = open ?? uncontrolledOpen;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function setOpen(next: boolean) {
        if (next) setError(null);
        setUncontrolledOpen(next);
        onOpenChange?.(next);
    }

    async function handleConfirm() {
        try {
            setLoading(true);
            setError(null);
            await onConfirm();
            setOpen(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setOpen}>
            {trigger && <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>}
            <AlertDialogPrimitive.Portal>
                <AlertDialogPrimitive.Overlay className={styles.overlay} />
                <AlertDialogPrimitive.Content
                    className={cn(styles.content, className)}
                    onEscapeKeyDown={(e) => { if (loading) e.preventDefault(); }}
                >
                    <AlertDialogPrimitive.Title className={styles.title}>{title}</AlertDialogPrimitive.Title>
                    {description && (
                        <AlertDialogPrimitive.Description className={styles.description}>
                            {description}
                        </AlertDialogPrimitive.Description>
                    )}
                    {children && <div className={styles.body}>{children}</div>}
                    {error && <ErrorText>{error}</ErrorText>}
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
