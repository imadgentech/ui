'use client';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { NavLink } from './NavLink';
import styles from './MobileMenuContent.module.css';

interface MobileMenuContentProps {
    links: Array<{ label: string; href: string }>;
    actions?: React.ReactNode;

    /**
     * Custom logo/brand block rendered at the top of the mobile menu.
     * Defaults to the IMADGEN logo + wordmark used by this package's own
     * site when omitted.
     */
    logo?: React.ReactNode;

    /**
     * Whether to render the "Home" nav link.
     * @default true
     */
    showHome?: boolean;

    /**
     * Href for the "Home" nav link.
     * @default '/'
     */
    homeHref?: string;

    /**
     * Label for the "Home" nav link.
     * @default 'Home'
     */
    homeLabel?: string;
}

export function MobileMenuContent({
    links,
    actions,
    logo,
    showHome = true,
    homeHref = '/',
    homeLabel = 'Home',
}: MobileMenuContentProps) {
    return (
        <div className={styles.content}>
            <div className={styles.logoArea}>
                {logo ?? (
                    <>
                        <img className="logo-dark" src="/media/logo/imadgen-logo-dark.png" alt="IMADGEN" />
                        <img className="logo-light" src="/media/logo/imadgen-logo-light.png" alt="IMADGEN" />
                        <span>IMADGEN</span>
                    </>
                )}
            </div>

            <nav className={styles.linksStack}>
                {showHome && (
                    <DialogPrimitive.Close asChild>
                        <NavLink
                            href={homeHref}
                            className={styles.navLink}
                        >
                            {homeLabel}
                        </NavLink>
                    </DialogPrimitive.Close>
                )}
                {links.map((link) => (
                    <DialogPrimitive.Close key={link.href} asChild>
                        <NavLink
                            href={link.href}
                            className={styles.navLink}
                        >
                            {link.label}
                        </NavLink>
                    </DialogPrimitive.Close>
                ))}
            </nav>

            {actions && (
                <div className={styles.actions}>
                    {actions}
                </div>
            )}
        </div>
    );
}
