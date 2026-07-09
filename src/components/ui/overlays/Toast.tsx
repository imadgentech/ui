'use client';

import React, { createContext, useContext, useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { cn } from '../../../lib/cn';
import styles from './Toast.module.css';

type ToastType = 'success' | 'error' | 'info' | 'warning';
type ToastPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'top-center' | 'bottom-center';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface AddToastOptions {
    /**
     * Auto-dismiss duration in ms. Pass 0 to disable auto-dismiss —
     * the toast then stays until clicked.
     * @default 5000
     */
    duration?: number;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType, options?: AddToastOptions) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Hook to use the toast system.
 */
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
};

export interface ToastProviderProps {
    children: React.ReactNode;

    /**
     * Corner (or edge-center) toasts render in.
     * @default 'bottom-right'
     */
    position?: ToastPosition;
}

/**
 * ToastProvider component to manage and display toast messages.
 */
export function ToastProvider({ children, position = 'bottom-right' }: ToastProviderProps) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

    const clearTimer = useCallback((id: string) => {
        const timer = timers.current.get(id);
        if (timer) {
            clearTimeout(timer);
            timers.current.delete(id);
        }
    }, []);

    const removeToast = useCallback((id: string) => {
        clearTimer(id);
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, [clearTimer]);

    const addToast = useCallback((message: string, type: ToastType = 'info', options?: AddToastOptions) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        const duration = options?.duration ?? 5000;
        if (duration > 0) {
            timers.current.set(id, setTimeout(() => removeToast(id), duration));
        }
    }, [removeToast]);

    useEffect(() => {
        const timerMap = timers.current;
        return () => {
            timerMap.forEach((timer) => clearTimeout(timer));
            timerMap.clear();
        };
    }, []);

    // Otherwise every toast add/remove re-renders every consumer that reads
    // only `addToast` (e.g. a persistent header button), since a new object
    // would be created on every ToastProvider render even though addToast/
    // removeToast are themselves already stable.
    const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

    return (
        <ToastContext.Provider value={value}>
            {children}
            <div className={cn(styles.container, styles[`position-${position}`])}>
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={cn(styles.toast, styles[toast.type])}
                        onClick={() => removeToast(toast.id)}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

