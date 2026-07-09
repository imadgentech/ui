import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Table.module.css';

export interface TableProps {
    /**
     * Column headers
     */
    headers: readonly string[];
    rows: readonly (readonly React.ReactNode[])[];

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Zebra striping
     * @default false
     */
    striped?: boolean;

    /**
     * Derives a stable React key per row instead of the array index —
     * needed if rows can be sorted, filtered, or reordered, since index
     * keys otherwise cause stale cell state across re-renders. Given the
     * row (and its index, as a fallback) and expected to return something
     * unique per row, e.g. `(row) => row[0]` when the first cell is an id.
     * @default (row, index) => index
     */
    getRowKey?: (row: readonly React.ReactNode[], index: number) => React.Key;
}

/**
 * Table component for displaying structured tabular data.
 */
export function Table({
    headers,
    rows,
    className,
    style,
    striped = false,
    getRowKey,
}: TableProps) {
    return (
        <div className={cn(styles.wrapper, className)} style={style}>
            <table className={cn(styles.table, striped && styles.striped)}>
                <thead>
                    <tr>
                        {headers.map((header, headerIndex) => (
                            <th key={`${header}-${headerIndex}`} className={styles.th}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={getRowKey ? getRowKey(row, rowIndex) : rowIndex} className={styles.tr}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={styles.td}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

