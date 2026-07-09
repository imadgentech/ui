'use client';

import React from 'react';
import { cn } from '../../../lib/cn';
import { Button } from '../forms/Button';
import styles from './Pagination.module.css';

export interface PaginationProps {
    /**
     * Current active page
     */
    currentPage: number;

    /**
     * Total number of pages
     */
    totalPages: number;

    /**
     * Callback when page changes
     */
    onPageChange: (page: number) => void;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Label for the "previous page" button.
     * @default 'Previous'
     */
    prevLabel?: string;

    /**
     * Label for the "next page" button.
     * @default 'Next'
     */
    nextLabel?: string;

    /**
     * Customize the "Page X of Y" text.
     * @default (current, total) => <>Page <span>{current}</span> of {total}</>
     */
    renderPageInfo?: (current: number, total: number) => React.ReactNode;
}

/**
 * Pagination component for navigating through paged data.
 */
export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className,
    style,
    prevLabel = 'Previous',
    nextLabel = 'Next',
    renderPageInfo,
}: PaginationProps) {
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <nav
            className={cn(styles.pagination, className)}
            style={style}
            aria-label="Pagination"
        >
            <Button
                variant="secondary"
                size="sm"
                disabled={!canGoPrev}
                onClick={() => onPageChange(currentPage - 1)}
                className={styles.prev}
            >
                {prevLabel}
            </Button>

            <div className={styles.info}>
                {renderPageInfo ? (
                    renderPageInfo(currentPage, totalPages)
                ) : (
                    <>
                        Page <span className={styles.current}>{currentPage}</span> of {totalPages}
                    </>
                )}
            </div>

            <Button
                variant="secondary"
                size="sm"
                disabled={!canGoNext}
                onClick={() => onPageChange(currentPage + 1)}
                className={styles.next}
            >
                {nextLabel}
            </Button>
        </nav>
    );
}

