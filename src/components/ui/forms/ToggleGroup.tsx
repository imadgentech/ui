'use client';

import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '../../../lib/cn';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupItem {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}

export interface ToggleGroupSingleProps {
    type?: 'single';
    items: ToggleGroupItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /**
     * Size — pinned to the same min-height scale as Input/Select/Combobox
     * (32/40/48px) so a ToggleGroup renders at the same real height as a
     * sibling form control at the same size.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export interface ToggleGroupMultipleProps {
    type: 'multiple';
    items: ToggleGroupItem[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    /**
     * Size — pinned to the same min-height scale as Input/Select/Combobox
     * (32/40/48px) so a ToggleGroup renders at the same real height as a
     * sibling form control at the same size.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

/**
 * Segmented control — button-group single/multi select, lighter than
 * `Tabs`. For view switchers, filter pills, and time-range pickers.
 *
 * @example
 * <ToggleGroup
 *   items={[{ value: '7d', label: '7D' }, { value: '30d', label: '30D' }]}
 *   value={range}
 *   onValueChange={setRange}
 * />
 */
export function ToggleGroup(props: ToggleGroupProps) {
    const { items, className, size = 'md' } = props;
    const groupClassName = cn(styles.group, styles[`size-${size}`], className);

    if (props.type === 'multiple') {
        return (
            <ToggleGroupPrimitive.Root
                type="multiple"
                className={groupClassName}
                value={props.value}
                defaultValue={props.defaultValue}
                onValueChange={props.onValueChange}
            >
                {items.map((item) => (
                    <ToggleGroupPrimitive.Item
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        className={styles.item}
                    >
                        {item.label}
                    </ToggleGroupPrimitive.Item>
                ))}
            </ToggleGroupPrimitive.Root>
        );
    }

    return (
        <ToggleGroupPrimitive.Root
            type="single"
            className={groupClassName}
            value={props.value}
            defaultValue={props.defaultValue}
            onValueChange={props.onValueChange}
        >
            {items.map((item) => (
                <ToggleGroupPrimitive.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className={styles.item}
                >
                    {item.label}
                </ToggleGroupPrimitive.Item>
            ))}
        </ToggleGroupPrimitive.Root>
    );
}
