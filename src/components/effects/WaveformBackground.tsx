'use client';

import React, { useEffect, useRef } from 'react';
import styles from './WaveformBackground.module.css';

/**
 * Animated waveform background effect for hero sections.
 * Creates subtle pulsing orbs that animate continuously.
 */
export default function WaveformBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size — measures its own rendered box, not
        // window.innerWidth/innerHeight (see SwarmsBGE/EmbersBGE's resize()
        // for why: this canvas fills whatever containing block it resolves
        // against, which can be a much smaller box than the viewport, e.g. a
        // preview tile, once an ancestor establishes CSS containment).
        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = Math.floor(rect.width);
            canvas.height = Math.floor(rect.height);
        };
        resize();
        window.addEventListener('resize', resize);

        // Only changes on a theme toggle; cache it instead of re-reading
        // via getComputedStyle on every animation frame.
        let cachedBrandRgb = '255, 106, 0';
        const readBrandRgb = () => {
            cachedBrandRgb = getComputedStyle(document.documentElement).getPropertyValue('--color-brand-primary-rgb').trim() || '255, 106, 0';
        };
        readBrandRgb();
        const themeObserver = new MutationObserver(readBrandRgb);
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        // Animation parameters
        // `brand: true` orbs derive their color from --color-brand-primary-rgb
        // at draw time so a rebrand (overriding that token) recolors them.
        // The other two orbs use lighter/paler tints that aren't a plain
        // alpha of the brand color (no matching token), so they stay literal.
        let frame = 0;
        const orbs = [
            { x: 0.3, y: 0.4, radius: 150, speed: 0.002, brand: true, alpha: 0.15, color: '' },
            { x: 0.7, y: 0.6, radius: 200, speed: 0.0015, brand: false, alpha: 0.1, color: 'rgba(255, 138, 31, 0.1)' },
            { x: 0.5, y: 0.5, radius: 180, speed: 0.0025, brand: false, alpha: 0.08, color: 'rgba(255, 174, 0, 0.08)' },
        ];

        // Animation loop
        let animId: number = 0;
        const animate = () => {
            const brandRgb = cachedBrandRgb;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach((orb) => {
                const x = canvas.width * orb.x;
                const y = canvas.height * orb.y;
                const pulse = Math.sin(frame * orb.speed) * 20;
                const radius = orb.radius + pulse;

                // Create radial gradient
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, orb.brand ? `rgba(${brandRgb}, ${orb.alpha})` : orb.color);
                gradient.addColorStop(1, `rgba(${brandRgb}, 0)`);

                // Draw orb
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            frame++;
            animId = requestAnimationFrame(animate);
        };

        // If the user prefers reduced motion, draw a single static frame
        // (frame stays at 0) and don't start the animation loop.
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            animate();
            cancelAnimationFrame(animId);
        } else {
            animId = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
            themeObserver.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.waveformCanvas} />;
}
