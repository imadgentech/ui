'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FocusScope } from '@radix-ui/react-focus-scope';
import { RemoveScroll } from 'react-remove-scroll';
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
     * When `name` is set, a hidden native `<select>` mirrors `value` so the
     * field still participates in `FormData`/native form submission (the
     * visible control is a `<button>`, not a real form control). Setting
     * `required` additionally makes that hidden control participate in
     * native HTML5 validation.
     */
    required?: boolean;

    disabled?: boolean;

    invalid?: boolean;

    /**
     * Trigger size, matching Input/Select's size scale.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Show a search input at the top of the dropdown for client-side
     * filtering. When `false`, the dropdown is a plain listbox — arrow
     * keys move a highlighted option, Enter selects it.
     * @default true
     */
    searchable?: boolean;

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
    searchable = true,
    className,
}: ComboboxProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [dropPos, setDropPos] = useState<{ top?: number; bottom?: number; left: number; width: number; maxHeight: number } | null>(null);
    const [insideDialog, setInsideDialog] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    // Recomputing these on every render (not just when value/options/query
    // change) means moving the mouse over the list — which updates
    // highlightedIndex via onMouseEnter below — re-filters the whole option
    // list on every hovered item. Memoized so that only actually re-runs.
    const selected = useMemo(() => options.find((o) => o.value === value), [options, value]);
    const filtered = useMemo(() => (
        searchable && query
            ? options.filter(
                  (o) =>
                      o.label.toLowerCase().includes(query.toLowerCase()) ||
                      (o.sub ?? '').toLowerCase().includes(query.toLowerCase())
              )
            : options
    ), [options, query, searchable]);

    useEffect(() => {
        if (!open) return;

        function reposition() {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const viewportMargin = 8;
            const gap = 4;
            // Matches the trigger's own width exactly — only clamped down
            // when the trigger itself is wider than the viewport.
            const width = Math.min(rect.width, window.innerWidth - viewportMargin * 2);
            const left = Math.min(
                Math.max(viewportMargin, rect.left),
                window.innerWidth - width - viewportMargin
            );

            // This is `position: fixed`, so page scroll can't reveal content
            // that's clipped by the viewport edge — unlike an in-flow
            // element, there's nothing to scroll TO. Below is the default,
            // but when there isn't enough room there and there's more room
            // above the trigger, flip upward instead of just getting cut
            // off. Either way, height is clamped to whatever room actually
            // exists (floor of 120px) so the list's own overflow-y:auto
            // scrolls the remainder into view instead of it being clipped.
            const spaceBelow = window.innerHeight - rect.bottom - gap - viewportMargin;
            const spaceAbove = rect.top - gap - viewportMargin;
            const openUpward = spaceBelow < 160 && spaceAbove > spaceBelow;
            const maxHeight = Math.max(120, Math.min(220, openUpward ? spaceAbove : spaceBelow));

            setDropPos(
                openUpward
                    ? { bottom: window.innerHeight - rect.top + gap, left, width, maxHeight }
                    : { top: rect.bottom + gap, left, width, maxHeight }
            );
        }

        function handleOutside(e: MouseEvent) {
            const target = e.target as Node;
            if (triggerRef.current?.contains(target)) return;
            const dropdown = document.getElementById(`${id ?? 'imui-combobox'}-dropdown`);
            if (dropdown?.contains(target)) return;
            setOpen(false);
            setQuery('');
        }

        // A Radix Dialog/AlertDialog ancestor traps focus and locks background
        // scroll for its own content subtree only. This dropdown is portaled
        // to document.body (outside that subtree, see the `dropdown` JSX
        // below), so inside a dialog it needs FocusScope/RemoveScroll of its
        // own to be recognized rather than fought by the ancestor's trap/lock.
        setInsideDialog(!!triggerRef.current?.closest('[role="dialog"], [role="alertdialog"]'));

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
        // Depends on dropPos (not just `open`) because the listbox/search
        // input don't exist in the DOM until dropPos is set — it's computed
        // by reposition() in the effect above, which lands one render after
        // `open` flips true. Keying this on `open` alone (with a
        // requestAnimationFrame guess at the timing) meant listRef/inputRef
        // were still null when the callback ran, so .focus() silently did
        // nothing and arrow keys/Enter never worked in the non-searchable
        // (plain listbox) mode.
        if (!open || !dropPos) return;
        if (searchable) {
            inputRef.current?.focus();
        } else {
            const initialIndex = filtered.findIndex((o) => o.value === value);
            // Bundled with the imperative .focus() call below — both need to
            // fire at the same DOM-ready moment this effect exists to catch,
            // not computed during render.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHighlightedIndex(initialIndex >= 0 ? initialIndex : 0);
            listRef.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, searchable, dropPos]);

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

    function handleListKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Escape') {
            setOpen(false);
            return;
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((i) => (filtered.length === 0 ? -1 : (i + 1) % filtered.length));
            return;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((i) => (filtered.length === 0 ? -1 : (i - 1 + filtered.length) % filtered.length));
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0 && filtered[highlightedIndex]) select(filtered[highlightedIndex]);
        }
    }

    const dropdownId = `${id ?? 'imui-combobox'}-dropdown`;
    const listboxId = `${id ?? 'imui-combobox'}-listbox`;

    const dropdownContent = dropPos && (
        <div
            id={dropdownId}
            className={styles.dropdown}
            style={{
                position: 'fixed',
                top: dropPos.top,
                bottom: dropPos.bottom,
                left: dropPos.left,
                width: dropPos.width,
                maxHeight: dropPos.maxHeight,
            }}
        >
            {searchable && (
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
            )}
            <div
                ref={listRef}
                id={listboxId}
                role="listbox"
                className={styles.list}
                tabIndex={searchable ? -1 : 0}
                onKeyDown={searchable ? undefined : handleListKeyDown}
                aria-activedescendant={
                    !searchable && highlightedIndex >= 0 ? `${listboxId}-option-${highlightedIndex}` : undefined
                }
            >
                {filtered.length === 0 && (
                    <div className={styles.empty}>{searchable ? 'No results' : 'No options'}</div>
                )}
                {filtered.map((o, i) => (
                    <div
                        key={o.value}
                        id={`${listboxId}-option-${i}`}
                        role="option"
                        aria-selected={o.value === value}
                        className={cn(
                            styles.option,
                            o.value === value && styles.optionActive,
                            !searchable && i === highlightedIndex && styles.optionHighlighted
                        )}
                        onMouseDown={() => select(o)}
                        onMouseEnter={() => !searchable && setHighlightedIndex(i)}
                    >
                        <span className={styles.optionLabel}>{o.label}</span>
                        {o.sub && <span className={styles.optionSub}>{o.sub}</span>}
                    </div>
                ))}
            </div>
        </div>
    );

    // Inside a Radix Dialog/AlertDialog, its FocusScope traps focus and its
    // RemoveScroll instance locks background scroll — both only recognize
    // content inside the dialog's own DOM subtree or content that registers
    // itself the same way (this is how Popover/DropdownMenu, built on Radix
    // primitives, already cooperate correctly). Since this dropdown is
    // portaled to document.body as a sibling of the dialog, without its own
    // FocusScope/RemoveScroll it's invisible to both: the dialog's trap
    // yanks focus back out of the search input, and the dialog's scroll lock
    // unconditionally blocks wheel/touch scrolling over the option list
    // (dragging the native scrollbar thumb still works, since that isn't a
    // wheel/touch event). Only applied inside a dialog — outside one, no
    // ancestor is locking anything, so this would just add an unnecessary
    // background-scroll lock to an otherwise plain dropdown.
    const dropdown = insideDialog && dropdownContent ? (
        <FocusScope onMountAutoFocus={(e) => e.preventDefault()} onUnmountAutoFocus={(e) => e.preventDefault()}>
            <RemoveScroll forwardProps allowPinchZoom removeScrollBar={false}>
                {dropdownContent}
            </RemoveScroll>
        </FocusScope>
    ) : dropdownContent;

    return (
        <div className={cn(styles.root, className)}>
            {name && (
                <select
                    required={required}
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
                aria-haspopup="listbox"
                aria-expanded={open}
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
                        <span
                            className={styles.clearBtn}
                            onMouseDown={clear}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </span>
                    )}
                    <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            {open && mounted && createPortal(dropdown, document.body)}
        </div>
    );
}
