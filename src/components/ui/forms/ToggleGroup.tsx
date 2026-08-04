'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
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
                        className={cn(styles.item, styles.itemMultiple)}
                    >
                        {item.label}
                    </ToggleGroupPrimitive.Item>
                ))}
            </ToggleGroupPrimitive.Root>
        );
    }

    return (
        <SingleToggleGroup
            items={items}
            groupClassName={groupClassName}
            value={props.value}
            defaultValue={props.defaultValue}
            onValueChange={props.onValueChange}
        />
    );
}

interface SingleToggleGroupProps {
    items: ToggleGroupItem[];
    groupClassName: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}

/**
 * Single-select variant only — a sliding thumb only makes sense when
 * exactly one item can be active, so this is split out from the
 * `type="multiple"` branch above.
 */
function SingleToggleGroup({ items, groupClassName, value, defaultValue, onValueChange }: SingleToggleGroupProps) {
    const groupRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const hasPositionedRef = useRef(false);
    // Only holds the value for uncontrolled usage — when `value` is passed,
    // it drives `activeValue` directly (computed below) instead of being
    // mirrored into state via an effect, so a controlled value change slides
    // the thumb on the very render that changed it rather than one render
    // later.
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const activeValue = value !== undefined ? value : uncontrolledValue;

    useLayoutEffect(() => {
        const group = groupRef.current;
        const thumb = thumbRef.current;
        if (!group || !thumb) return;

        const activeEl = activeValue !== undefined
            ? group.querySelector<HTMLElement>(`[data-value="${CSS.escape(activeValue)}"]`)
            : null;

        if (!activeEl) {
            thumb.style.opacity = '0';
            return;
        }

        // Snap into place on first paint — only animate slides that happen
        // after that, so the control doesn't glide in from the edge on mount.
        if (!hasPositionedRef.current) {
            thumb.style.transition = 'none';
        }

        thumb.style.opacity = '1';
        thumb.style.width = `${activeEl.offsetWidth}px`;
        thumb.style.transform = `translateX(${activeEl.offsetLeft}px)`;

        if (!hasPositionedRef.current) {
            // Force layout so the transition:none above actually applies
            // before it's cleared, then restore normal animated transitions.
            void thumb.offsetWidth;
            thumb.style.transition = '';
            hasPositionedRef.current = true;
        }
    }, [activeValue, items]);

    // Item widths can change on resize (wrapping/responsive layouts) — keep
    // the thumb aligned without waiting for the next selection change.
    useLayoutEffect(() => {
        const group = groupRef.current;
        if (!group || typeof ResizeObserver === 'undefined') return;
        const resizeObserver = new ResizeObserver(() => {
            const thumb = thumbRef.current;
            const activeEl = activeValue !== undefined
                ? group.querySelector<HTMLElement>(`[data-value="${CSS.escape(activeValue)}"]`)
                : null;
            if (!thumb || !activeEl) return;
            thumb.style.transition = 'none';
            thumb.style.width = `${activeEl.offsetWidth}px`;
            thumb.style.transform = `translateX(${activeEl.offsetLeft}px)`;
            void thumb.offsetWidth;
            thumb.style.transition = '';
        });
        resizeObserver.observe(group);
        return () => resizeObserver.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ToggleGroupPrimitive.Root
            ref={groupRef}
            type="single"
            className={groupClassName}
            value={value}
            defaultValue={defaultValue}
            onValueChange={(v) => {
                if (!v) return;
                setUncontrolledValue(v);
                onValueChange?.(v);
            }}
        >
            <div ref={thumbRef} className={styles.thumb} aria-hidden="true" />
            {items.map((item) => (
                <ToggleGroupPrimitive.Item
                    key={item.value}
                    value={item.value}
                    data-value={item.value}
                    disabled={item.disabled}
                    className={styles.item}
                >
                    {item.label}
                </ToggleGroupPrimitive.Item>
            ))}
        </ToggleGroupPrimitive.Root>
    );
}
