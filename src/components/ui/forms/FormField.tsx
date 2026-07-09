import React from 'react';
import { cn } from '../../../lib/cn';
import { Label } from './Label';
import { HelperText } from './HelperText';
import { ErrorText } from './ErrorText';
import styles from './FormField.module.css';

export interface FormFieldProps {
    /**
     * Control ID (links label to control)
     */
    id: string;

    /**
     * Label content
     */
    label?: string;

    /**
     * Hint content
     */
    hint?: string;

    /**
     * Error message content
     */
    error?: string;

    /**
     * Required indicator
     */
    required?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * The form control (Input, Select, etc.)
     */
    children: React.ReactNode;
}

/**
 * FormField wrapper that composes Label, Control, and feedback text.
 */
export function FormField({
    id,
    label,
    hint,
    error,
    required,
    className,
    style,
    children,
}: FormFieldProps) {
    const errorId = error ? `${id}-error` : undefined;
    const hintId = hint ? `${id}-hint` : undefined;
    // Error takes precedence over hint when both are provided.
    const describedById = errorId ?? hintId;

    const control =
        React.isValidElement(children)
            ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
                  'aria-invalid': !!error,
                  'aria-describedby': [
                      describedById,
                      (children.props as { 'aria-describedby'?: string })['aria-describedby'],
                  ]
                      .filter(Boolean)
                      .join(' ') || undefined,
              })
            : children;

    return (
        <div className={cn(styles.formField, className)} style={style}>
            {label && (
                <Label htmlFor={id} required={required}>
                    {label}
                </Label>
            )}

            {control}

            {error ? (
                <ErrorText id={errorId}>{error}</ErrorText>
            ) : hint ? (
                <HelperText id={hintId}>{hint}</HelperText>
            ) : null}
        </div>
    );
}

