'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/cn';
import styles from './Combobox.module.css';

export interface ComboboxOption {
    value: string;
    label: string;
    /**
     * Smaller muted line rendered under the label (e.g. a PO number under a
     * project name). Also searched against.
     */
    sub?: string;
}

export interface ComboboxProps {
    id?: string;

    name?: string;

    value: string;

    onChange: (value: string) => void;

    options: ComboboxOption[];

    placeholder?: string;

    /**
     * Renders a hidden native `<select required>` mirroring `value` so
     * native HTML5 form validation still fires (the visible control is a
     * `<button>`, not a real form control).
     */
    required?: boolean;

    disabled?: boolean;

    invalid?: boolean;

    /**
     * Trigger size, matching Input/Select's size scale.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    className?: string;
}

/**
 * Searchable combobox / async-filterable select. Trigger is sized to match
 * Input/Select at each size out of the box; the dropdown is portal-rendered
 * to `document.body` and positioned off the trigger's bounding rect, so it
 * isn't clipped by parent `overflow` containers (e.g. a scrollable table).
 *
 * @example
 * <Combobox
 *   value={projectId}
 *   onChange={setProjectId}
 *   options={projects.map(p => ({ value: p.id, label: p.name, sub: p.poNumber }))}
 *   placeholder="Select project…"
 * />
 */
export function Combobox({
    id,
    name,
    value,
    onChange,
    options,
    placeholder = 'Select…',
    required,
    disabled,
    invalid,
    size = 'md',
    className,
}: ComboboxProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [dropPos, setDropPos] = useState<{ top: number; left: number; width: number } | null>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    const selected = options.find((o) => o.value === value);
    const filtered = query
        ? options.filter(
              (o) =>
                  o.label.toLowerCase().includes(query.toLowerCase()) ||
                  (o.sub ?? '').toLowerCase().includes(query.toLowerCase())
          )
        : options;

    useEffect(() => {
        if (!open) return;

        function reposition() {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (rect) {
                setDropPos({ top: rect.bottom + 4, left: rect.left, width: rect.width });
            }
        }

        function handleOutside(e: MouseEvent) {
            const target = e.target as Node;
            if (triggerRef.current?.contains(target)) return;
            const dropdown = document.getElementById(`${id ?? 'imui-combobox'}-dropdown`);
            if (dropdown?.contains(target)) return;
            setOpen(false);
            setQuery('');
        }

        reposition();
        document.addEventListener('mousedown', handleOutside);
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            window.removeEventListener('resize', reposition);
            window.removeEventListener('scroll', reposition, true);
        };
    }, [open, id]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 0);
    }, [open]);

    function select(opt: ComboboxOption) {
        onChange(opt.value);
        setOpen(false);
        setQuery('');
    }

    function clear(e: React.MouseEvent) {
        e.stopPropagation();
        onChange('');
        setQuery('');
    }

    const dropdownId = `${id ?? 'imui-combobox'}-dropdown`;

    const dropdown = dropPos && (
        <div
            id={dropdownId}
            className={styles.dropdown}
            style={{ position: 'fixed', top: dropPos.top, left: dropPos.left, minWidth: dropPos.width }}
        >
            <input
                ref={inputRef}
                className={styles.searchInput}
                placeholder="Search…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        setOpen(false);
                        setQuery('');
                    }
                    if (e.key === 'Enter' && filtered.length === 1) select(filtered[0]);
                }}
            />
            <div className={styles.list}>
                {filtered.length === 0 && <div className={styles.empty}>No results</div>}
                {filtered.map((o) => (
                    <div
                        key={o.value}
                        className={cn(styles.option, o.value === value && styles.optionActive)}
                        onMouseDown={() => select(o)}
                    >
                        <span className={styles.optionLabel}>{o.label}</span>
                        {o.sub && <span className={styles.optionSub}>{o.sub}</span>}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={cn(styles.root, className)}>
            {required && (
                <select
                    required
                    name={name}
                    value={value}
                    onChange={() => {}}
                    className={styles.hidden}
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <option value="" />
                    {value && <option value={value} />}
                </select>
            )}
            <button
                id={id}
                ref={triggerRef}
                type="button"
                disabled={disabled}
                className={cn(
                    styles.trigger,
                    styles[`size-${size}`],
                    open && styles.triggerOpen,
                    invalid && styles.invalid,
                    disabled && styles.disabled
                )}
                onClick={() => setOpen((o) => !o)}
            >
                {selected ? (
                    <span className={styles.selectedLabel}>{selected.label}</span>
                ) : (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}
                <span className={styles.icons}>
                    {selected && !disabled && (
                        <span className={styles.clearBtn} onMouseDown={clear}>
                            ×
                        </span>
                    )}
                    <span className={styles.arrow}>▾</span>
                </span>
            </button>

            {open && mounted && createPortal(dropdown, document.body)}
        </div>
    );
}
