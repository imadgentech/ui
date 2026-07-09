'use client';

import React from 'react';
import { Flex } from '../layout/Flex';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { MobileMenuContent } from './MobileMenuContent';
import { IconButton } from '../forms/IconButton';
import { cn } from '../../../lib/cn';
import styles from './Navbar.module.css';

export interface NavbarProps {
    brand: React.ReactNode;
    links: Array<{ label: string; href: string }>;
    actions?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    sticky?: boolean;

    /**
     * Raw CSS max-width for the navbar's inner content row. Defaults to the
     * same `--max` token `Container` uses, so the navbar lines up with page
     * content automatically without hand-copying a width into both places.
     */
    maxWidth?: string;

    /**
     * Custom logo/brand block for the mobile menu. Passed through to
     * `MobileMenuContent`'s `logo` prop. Defaults to the IMADGEN logo when
     * omitted.
     */
    mobileMenuLogo?: React.ReactNode;

    /**
     * Whether to render the "Home" nav link in the mobile menu.
     * @default true
     */
    mobileMenuShowHome?: boolean;

    /**
     * Href for the "Home" nav link in the mobile menu.
     * @default '/'
     */
    mobileMenuHomeHref?: string;
}

export function Navbar({
    brand,
    links,
    actions,
    className,
    style,
    sticky = true,
    maxWidth,
    mobileMenuLogo,
    mobileMenuShowHome,
    mobileMenuHomeHref,
}: NavbarProps) {
    return (
        <header className={cn(styles.navbar, sticky && styles.sticky, className)} style={style}>
            <div className={styles.container} style={maxWidth ? { maxWidth } : undefined}>
                <Flex align="center" justify="between" className={styles.flex}>
                    <div className={styles.brand}>
                        {brand}
                    </div>

                    <nav className={styles.desktopNav}>
                        <Flex gap="24" align="center">
                            {links.map((link) => (
                                <NavLink key={link.label} href={link.href}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </Flex>
                    </nav>

                    <div className={styles.rightSection}>
                        {actions && (
                            <div className={styles.actions}>
                                {actions}
                            </div>
                        )}

                        <div className={styles.mobileNav}>
                            <MobileMenu
                                trigger={
                                    <IconButton
                                        variant="ghost"
                                        aria-label="Toggle menu"
                                        className={styles.burger}
                                    >
                                        {/* Hamburger SVG icon */}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
                                            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                                            <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
                                        </svg>
                                    </IconButton>
                                }
                            >
                                <MobileMenuContent
                                    logo={mobileMenuLogo}
                                    showHome={mobileMenuShowHome}
                                    homeHref={mobileMenuHomeHref}
                                    links={links}
                                    actions={actions}
                                />
                            </MobileMenu>
                        </div>
                    </div>
                </Flex>
            </div>
        </header>
    );
}

