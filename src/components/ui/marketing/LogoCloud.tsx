import React from 'react';
import { cn } from '../../../lib/cn';
import { Flex } from '../layout/Flex';
import Image from 'next/image';
import styles from './LogoCloud.module.css';

export interface LogoCloudProps {
    /**
     * Section title
     */
    title?: string;

    /**
     * Array of logo elements or image props
     */
    logos: readonly {
        src: string;
        alt: string;
        /**
         * @default 120
         */
        width?: number;
        /**
         * @default 40
         */
        height?: number;
    }[];

    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * LogoCloud component for social proof and brand trust.
 */
export function LogoCloud({ title, logos, className }: LogoCloudProps) {
    return (
        <div className={cn(styles.logoCloud, className)}>
            {title && (
                <p className={styles.title}>
                    {title}
                </p>
            )}
            <Flex wrap="wrap" gap="32" justify="center" align="center">
                {logos.map((logo, index) => (
                    <div key={index} className={styles.logoWrapper}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width ?? 120}
                            height={logo.height ?? 40}
                            className={styles.logo}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </Flex>
        </div>
    );
}
