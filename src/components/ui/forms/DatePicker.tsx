'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/cn';
import styles from './DatePicker.module.css';

export interface DatePickerProps {
    id?: string;

    name?: string;

    /**
     * ISO date string (`yyyy-mm-dd`), matching native `<input type="date">`.
     */
    value: string;

    onChange: (value: string) => void;

    disabled?: boolean;

    required?: boolean;

    invalid?: boolean;

    placeholder?: string;

    /**
     * Earliest/latest selectable dates, as ISO strings.
     */
    min?: string;

    max?: string;

    /**
     * Trigger size, matching Input's size scale.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Customize the trigger's display text.
     * @default dd-mm-yyyy
     */
    format?: (date: Date) => string;

    className?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

function parseISODate(value: string): Date | null {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return isNaN(date.getTime()) ? null : date;
}

function toISODate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function defaultFormat(date: Date): string {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    return `${dd}-${mm}-${date.getFullYear()}`;
}

function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function buildGrid(viewDate: Date): Date[] {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const startOffset = firstOfMonth.getDay();
    const gridStart = new Date(year, month, 1 - startOffset);

    return Array.from({ length: 42 }, (_, i) => new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i));
}

function CalendarIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

/**
 * Calendar date picker. Trigger is sized to match Input at each size; the
 * calendar popup is portal-rendered to `document.body` and positioned off
 * the trigger's bounding rect (same approach as `Combobox`), so it inherits
 * the app's theme via CSS variables instead of falling back to the native,
 * OS-styled date picker.
 *
 * @example
 * <DatePicker value={dueDate} onChange={setDueDate} placeholder="Choose date" />
 */
export function DatePicker({
    id,
    name,
    value,
    onChange,
    disabled,
    required,
    invalid,
    placeholder = 'Choose date',
    min,
    max,
    size = 'md',
    format = defaultFormat,
    className,
}: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [dropPos, setDropPos] = useState<{ top: number; left: number } | null>(null);
    const selectedDate = value ? parseISODate(value) : null;
    const [viewDate, setViewDate] = useState(() => selectedDate ?? new Date());
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (!open) return;
        const frame = requestAnimationFrame(() => setViewDate(selectedDate ?? new Date()));
        return () => cancelAnimationFrame(frame);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        if (!open) return;

        function reposition() {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (rect) setDropPos({ top: rect.bottom + 4, left: rect.left });
        }

        function handleOutside(e: MouseEvent) {
            const target = e.target as Node;
            if (triggerRef.current?.contains(target)) return;
            const popup = document.getElementById(`${id ?? 'imui-datepicker'}-popup`);
            if (popup?.contains(target)) return;
            setOpen(false);
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }

        reposition();
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('keydown', handleEscape);
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('keydown', handleEscape);
            window.removeEventListener('resize', reposition);
            window.removeEventListener('scroll', reposition, true);
        };
    }, [open, id]);

    const minDate = min ? parseISODate(min) : null;
    const maxDate = max ? parseISODate(max) : null;
    const today = new Date();

    function isDisabled(date: Date): boolean {
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    }

    function selectDay(date: Date) {
        if (isDisabled(date)) return;
        onChange(toISODate(date));
        setOpen(false);
    }

    const popupId = `${id ?? 'imui-datepicker'}-popup`;

    const popup = dropPos && (
        <div id={popupId} className={styles.popup} style={{ position: 'fixed', top: dropPos.top, left: dropPos.left }}>
            <div className={styles.header}>
                <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                    aria-label="Previous month"
                >
                    ‹
                </button>
                <span className={styles.monthLabel}>
                    {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
                </span>
                <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                    aria-label="Next month"
                >
                    ›
                </button>
            </div>

            <div className={styles.weekdays}>
                {WEEKDAYS.map((w) => (
                    <span key={w} className={styles.weekday}>{w}</span>
                ))}
            </div>

            <div className={styles.grid}>
                {buildGrid(viewDate).map((date) => {
                    const outside = date.getMonth() !== viewDate.getMonth();
                    const dayDisabled = isDisabled(date);
                    return (
                        <button
                            type="button"
                            key={date.toISOString()}
                            className={cn(
                                styles.day,
                                outside && styles.dayOutside,
                                isSameDay(date, today) && styles.dayToday,
                                selectedDate && isSameDay(date, selectedDate) && styles.daySelected,
                                dayDisabled && styles.dayDisabled
                            )}
                            disabled={dayDisabled}
                            onClick={() => selectDay(date)}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <span className={cn(styles.wrap, className)}>
            <input
                type="date"
                name={name}
                value={value}
                required={required}
                disabled={disabled}
                onChange={() => {}}
                tabIndex={-1}
                aria-hidden="true"
                className={styles.hiddenInput}
            />
            <button
                id={id}
                ref={triggerRef}
                type="button"
                disabled={disabled}
                aria-label={selectedDate ? `Change date, currently ${format(selectedDate)}` : 'Choose date'}
                className={cn(
                    styles.trigger,
                    styles[`size-${size}`],
                    open && styles.triggerOpen,
                    invalid && styles.invalid
                )}
                onClick={() => setOpen((o) => !o)}
            >
                <CalendarIcon />
                <span className={cn(styles.dateText, !selectedDate && styles.placeholder)}>
                    {selectedDate ? format(selectedDate) : placeholder}
                </span>
            </button>

            {open && mounted && createPortal(popup, document.body)}
        </span>
    );
}
