'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/cn';
import { useChatContext } from './ChatContext';
import { ChatBox, ChatBoxProps } from './ChatBox';
import styles from './ChatPill.module.css';

export interface ChatPillProps {
    placeholder?: string;

    className?: string;

    /**
     * Passed through to the `ChatBox` panel once the pill has been
     * submitted and it pops out (header title/subtitle, session/save
     * callbacks, etc.). `onClose` and `variant` aren't accepted here —
     * `ChatPill` supplies both itself.
     */
    chatBoxProps?: Omit<ChatBoxProps, 'onClose' | 'variant'>;
}

/**
 * Standalone floating pill input — a hero-section or command-bar entry
 * point. Must render inside a `ChatProvider` (shares its `input`/messages
 * state with the `ChatBox` panel it pops out). Submitting it (Enter or the
 * send button) sends the message and portals a full `ChatBox` panel over
 * the page as an overlay — the same interaction as imadgen.ai's homepage.
 *
 * @example
 * <ChatProvider>
 *   <ChatPill placeholder="What would you like to build today?" />
 * </ChatProvider>
 */
export function ChatPill({ placeholder = 'Ask anything…', className, chatBoxProps }: ChatPillProps) {
    const { input, handleInputChange, handleSubmit, isDisabled } = useChatContext();
    const [expanded, setExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    // Escape closes the overlay; body scroll is locked while it's open —
    // it's a full-viewport portal, so the page behind it shouldn't scroll.
    useEffect(() => {
        if (!expanded) return;

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') setExpanded(false);
        }

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [expanded]);

    const hasText = input.trim().length > 0;

    function submit() {
        if (!hasText || isDisabled) return;
        setExpanded(true);
        handleSubmit();
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
        }
    }

    return (
        <>
            <div className={cn(styles.wrapper, className)}>
                <div className={styles.container}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder={placeholder}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        disabled={isDisabled}
                    />
                    <button
                        type="button"
                        className={cn(styles.send, !hasText && styles.sendHidden)}
                        onClick={submit}
                        disabled={isDisabled || !hasText}
                        tabIndex={hasText ? undefined : -1}
                        aria-label="Send"
                    >
                        <svg
                            className={styles.icon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 19V5" />
                            <path d="M5 12l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {expanded && mounted && createPortal(
                <div className={styles.overlay}>
                    <div className={styles.overlayBackdrop} onClick={() => setExpanded(false)} />
                    <ChatBox
                        {...chatBoxProps}
                        className={styles.overlayPanel}
                        onClose={() => setExpanded(false)}
                    />
                </div>,
                document.body
            )}
        </>
    );
}
