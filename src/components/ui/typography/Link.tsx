import React from 'react';
import NextLink from 'next/link';
import { cn } from '../../../lib/cn';
import styles from './Link.module.css';

export interface LinkProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'style' | 'children'> {
    /**
     * Link destination
     */
    href: string;

    /**
     * Underline behavior
     * @default 'hover'
     */
    underline?: 'always' | 'hover' | 'never';

    /**
     * Link color tone
     * @default 'default'
     */
    tone?: 'default' | 'brand' | 'muted';

    /**
     * Whether this is an external link. Auto-detected from `href`: any
     * scheme (`https:`, `mailto:`, `tel:`, …) or a protocol-relative
     * (`//…`) URL counts, so this only needs to be set explicitly to
     * override the detection.
     */
    external?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    style?: React.CSSProperties;

    /**
     * Content
     */
    children: React.ReactNode;
}

/**
 * Link component that wraps Next.js Link for internal navigation
 * and <a> for external links. Includes focus-visible styling.
 *
 * @example
 * <Link href="/about">About Us</Link>
 * <Link href="https://example.com" external>External Site</Link>
 * <Link href="/contact" tone="brand" underline="always">Contact</Link>
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (
        {
            href,
            underline = 'hover',
            tone = 'default',
            external: externalProp,
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        // Any URI scheme (http:, https:, mailto:, tel:, …) or a protocol-relative
        // (//…) URL isn't an internal app route — next/link would try to
        // client-side-route to it literally instead of letting the browser
        // handle it (open the host, mail client, or dialer).
        const hasScheme = /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
        const isSpecialProtocol = /^(mailto|tel):/i.test(href);
        const isExternal = externalProp ?? (hasScheme && !isSpecialProtocol);
        const isNativeAnchor = isExternal || isSpecialProtocol;

        const linkClasses = cn(
            styles.link,
            styles[`underline-${underline}`],
            styles[`tone-${tone}`],
            className
        );

        // A javascript:/data:/vbscript: href would render a clickable,
        // code-executing link — most plausible if an app ever plumbs
        // less-trusted text (a CMS field, a user-submitted profile link)
        // straight into `href`. Render the content without turning it into
        // a navigable anchor rather than trusting the scheme.
        const isDangerousScheme = /^(javascript|data|vbscript):/i.test(href);
        if (isDangerousScheme) {
            return (
                <span ref={ref as React.Ref<HTMLSpanElement>} className={linkClasses} style={style} {...rest}>
                    {children}
                </span>
            );
        }

        if (isNativeAnchor) {
            return (
                <a
                    ref={ref}
                    href={href}
                    className={linkClasses}
                    style={style}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...rest}
                >
                    {children}
                </a>
            );
        }

        return (
            <NextLink ref={ref} href={href} className={linkClasses} style={style} {...rest}>
                {children}
            </NextLink>
        );
    }
);

Link.displayName = 'Link';

