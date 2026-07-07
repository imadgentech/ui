export type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T };

export function getResponsiveClasses<T extends string | number>(
    value: ResponsiveValue<T> | undefined,
    prefix: string,
    styles: Record<string, string>
): string {
    if (!value) return '';

    if (typeof value === 'object') {
        const classes: string[] = [];
        if (value.base) classes.push(styles[`${prefix}-${value.base}`]);
        if (value.sm) classes.push(styles[`${prefix}-sm-${value.sm}`]);
        if (value.md) classes.push(styles[`${prefix}-md-${value.md}`]);
        if (value.lg) classes.push(styles[`${prefix}-lg-${value.lg}`]);
        return classes.filter(Boolean).join(' ');
    }

    return styles[`${prefix}-${value}`] || '';
}
