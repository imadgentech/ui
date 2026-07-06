'use client';

import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '../../../lib/cn';
import styles from './DropdownMenu.module.css';

export interface DropdownMenuItem {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    variant?: 'default' | 'danger';
    disabled?: boolean;
    shortcut?: string;
}

export type DropdownMenuEntry = DropdownMenuItem | { separator: true };

export interface DropdownMenuProps {
    trigger: React.ReactNode;
    items: DropdownMenuEntry[];
    align?: 'start' | 'center' | 'end';
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

function isSeparator(entry: DropdownMenuEntry): entry is { separator: true } {
    return 'separator' in entry;
}

/**
 * Actions menu — table row "..." actions, overflow menus, account menus.
 * Built on Radix for keyboard navigation and typeahead.
 *
 * @example
 * <DropdownMenu
 *   trigger={<IconButton aria-label="Actions"><DotsIcon /></IconButton>}
 *   items={[
 *     { label: 'Edit', onClick: onEdit },
 *     { separator: true },
 *     { label: 'Delete', variant: 'danger', onClick: onDelete },
 *   ]}
 * />
 */
export function DropdownMenu({
    trigger,
    items,
    align = 'end',
    open,
    onOpenChange,
    className,
}: DropdownMenuProps) {
    return (
        <DropdownMenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
            <DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content
                    className={cn(styles.content, className)}
                    align={align}
                    sideOffset={6}
                >
                    {items.map((entry, i) =>
                        isSeparator(entry) ? (
                            <DropdownMenuPrimitive.Separator key={i} className={styles.separator} />
                        ) : (
                            <DropdownMenuPrimitive.Item
                                key={i}
                                disabled={entry.disabled}
                                onSelect={() => entry.onClick?.()}
                                className={cn(styles.item, entry.variant === 'danger' && styles.itemDanger)}
                            >
                                {entry.icon && <span className={styles.icon}>{entry.icon}</span>}
                                <span className={styles.label}>{entry.label}</span>
                                {entry.shortcut && <span className={styles.shortcut}>{entry.shortcut}</span>}
                            </DropdownMenuPrimitive.Item>
                        )
                    )}
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    );
}
