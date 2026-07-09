import React from 'react';
import { cn } from '../../../lib/cn';
import styles from './Footer.module.css';

export interface FooterSocial {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export interface FooterProps {
    /**
     * Site identifier (logo/name)
     */
    brand: React.ReactNode;

    /**
     * Brand name text
     */
    brandName?: string;

    /**
     * Primary copyright text
     */
    copyright: string;

    /**
     * Secondary message (e.g. "Built in India")
     */
    message?: string;

    /**
     * Social links
     */
    socials?: FooterSocial[];

    /**
     * Raw CSS max-width for the footer's inner content row. Defaults to the
     * same `--max` token `Container`/`Navbar` use, so the footer lines up
     * with page content automatically.
     */
    maxWidth?: string;

    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Footer component refactored to match production "finebar" style.
 */
export function Footer({
    brand,
    brandName,
    copyright,
    message,
    socials,
    maxWidth,
    className,
}: FooterProps) {
    return (
        <footer className={cn(styles.footer, className)}>
            <div className={styles.wrap} style={maxWidth ? { maxWidth } : undefined}>
                <div className={styles.finebar}>
                    <div className={styles.fineLeft}>
                        <div>{copyright}</div>
                        {message && <div>{message}</div>}
                    </div>

                    <div className={styles.fineRight}>
                        {socials && (
                            <div className={styles.socials}>
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className={styles.iconBtn}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        )}

                        <div className={styles.footmark}>
                            <div className={styles.logo}>
                                {brand}
                            </div>
                            {brandName && <span className={styles.brandName}>{brandName}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
