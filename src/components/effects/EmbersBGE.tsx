'use client'

import React from 'react'
import { useEffect, useRef } from 'react'

export default function EmbersBGE() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const c = canvasRef.current
        if (!c) return

        const ctx = c.getContext('2d')
        if (!ctx) return

        interface Particle { x: number; y: number; r: number; vx: number; vy: number; a: number }

        let w: number, h: number, dpr: number
        const N = 90
        const pts: Particle[] = []

        const rnd = (a: number, b: number) => a + Math.random() * (b - a)

        const resize = () => {
            dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
            w = c.width = Math.floor(window.innerWidth * dpr)
            h = c.height = Math.floor(window.innerHeight * dpr)
            // c.style.width = window.innerWidth + 'px' // Handled by CSS usually, but good for safety
            // c.style.height = window.innerHeight + 'px'
        }

        const seed = () => {
            pts.length = 0
            for (let i = 0; i < N; i++) {
                pts.push({
                    x: rnd(0, w),
                    y: rnd(0, h),
                    r: rnd(0.6, 2.4) * dpr,
                    vx: rnd(-0.10, 0.10) * dpr,
                    vy: rnd(-0.22, -0.04) * dpr,
                    a: rnd(0.06, 0.22)
                })
            }
        }

        // Only changes on a theme toggle; cache it instead of re-reading
        // via getComputedStyle on every animation frame.
        let cachedBrandRgb = '255, 106, 0'
        const readBrandRgb = () => {
            cachedBrandRgb = getComputedStyle(document.documentElement).getPropertyValue('--color-brand-primary-rgb').trim() || '255, 106, 0'
        }
        readBrandRgb()

        // Each ember's glow is a radial gradient baked once into an offscreen
        // sprite and reused via drawImage — building a fresh
        // createRadialGradient + arc/fill per particle per frame (90
        // particles x 60fps) is the dominant per-frame cost in this effect;
        // the gradient shape is identical for every ember (only x/y differ),
        // so there's nothing to recompute per-particle once it's rasterized.
        const SPRITE_SIZE = 256
        let glowSprite: HTMLCanvasElement | null = null
        const buildGlowSprite = () => {
            const sprite = document.createElement('canvas')
            sprite.width = SPRITE_SIZE
            sprite.height = SPRITE_SIZE
            const sctx = sprite.getContext('2d')
            if (!sctx) return null
            const cx = SPRITE_SIZE / 2
            const cy = SPRITE_SIZE / 2
            const radius = SPRITE_SIZE / 2
            const g = sctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
            g.addColorStop(0, `rgba(${cachedBrandRgb},1)`)
            g.addColorStop(0.45, `rgba(255,138,31,0.55)`)
            g.addColorStop(1, `rgba(255,138,31,0)`)
            sctx.fillStyle = g
            sctx.beginPath()
            sctx.arc(cx, cy, radius, 0, Math.PI * 2)
            sctx.fill()
            return sprite
        }
        glowSprite = buildGlowSprite()
        // Theme toggles are rare — re-read the color and rebuild the sprite
        // then, instead of on every animation frame.
        const themeObserver = new MutationObserver(() => {
            readBrandRgb()
            glowSprite = buildGlowSprite()
        })
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

        let animId: number = 0
        const draw = () => {
            ctx.clearRect(0, 0, w, h)
            for (const p of pts) {
                if (glowSprite) {
                    const size = p.r * 16
                    ctx.globalAlpha = p.a
                    ctx.drawImage(glowSprite, p.x - size / 2, p.y - size / 2, size, size)
                    ctx.globalAlpha = 1
                }

                ctx.fillStyle = `rgba(255,255,255,${p.a * 0.55})`
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fill()

                p.x += p.vx
                p.y += p.vy

                if (p.y < -20 * dpr) { p.y = h + 20 * dpr; p.x = rnd(0, w) }
                if (p.x < -20 * dpr) p.x = w + 20 * dpr
                if (p.x > w + 20 * dpr) p.x = -20 * dpr
            }
            animId = requestAnimationFrame(draw)
        }

        resize()
        seed()

        // draw() schedules its own next frame via requestAnimationFrame; if
        // the user prefers reduced motion we let it draw exactly one static
        // frame and then cancel the frame it just scheduled, instead of
        // letting the loop continue indefinitely.
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        draw()
        if (prefersReducedMotion) {
            cancelAnimationFrame(animId)
        }

        const onResize = () => { resize(); seed(); }
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
            cancelAnimationFrame(animId)
            themeObserver.disconnect()
        }
    }, [])

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} aria-hidden="true"></canvas>
        </div>
    )
}
