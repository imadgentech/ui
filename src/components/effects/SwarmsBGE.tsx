'use client'

import React from 'react'
import { useEffect, useRef } from 'react'

export default function SwarmsBGE() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const c = canvasRef.current
        if (!c) return

        const ctx = c.getContext('2d')
        if (!ctx) return

        interface Particle { x: number; y: number; vx: number; vy: number }

        let w: number, h: number, dpr: number
        const N = 80
        const pts: Particle[] = []

        const rnd = (a: number, b: number) => a + Math.random() * (b - a)

        const resize = () => {
            dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
            w = c.width = Math.floor(window.innerWidth * dpr)
            h = c.height = Math.floor(window.innerHeight * dpr)
            c.style.width = window.innerWidth + 'px'
            c.style.height = window.innerHeight + 'px'
        }

        const seed = () => {
            pts.length = 0
            for (let i = 0; i < N; i++) pts.push({ x: rnd(0, w), y: rnd(0, h), vx: rnd(-.12, .12) * dpr, vy: rnd(-.12, .12) * dpr })
        }

        // Only changes on a theme toggle; cache it instead of re-reading
        // via getComputedStyle on every animation frame.
        let cachedBrandRgb = '255, 106, 0'
        const readBrandRgb = () => {
            cachedBrandRgb = getComputedStyle(document.documentElement).getPropertyValue('--color-brand-primary-rgb').trim() || '255, 106, 0'
        }
        readBrandRgb()

        // Each node's glow is a radial gradient baked once into an offscreen
        // sprite and reused via drawImage — building a fresh
        // createRadialGradient + arc/fill per particle per frame (80
        // particles x 60fps) was the dominant per-frame cost in this effect.
        const SPRITE_SIZE = 64
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
            g.addColorStop(0, `rgba(${cachedBrandRgb},.18)`)
            g.addColorStop(1, `rgba(${cachedBrandRgb},0)`)
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
            // links
            for (let i = 0; i < N; i++) {
                for (let j = i + 1; j < N; j++) {
                    const a = pts[i], b = pts[j]
                    const dx = a.x - b.x, dy = a.y - b.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 170 * dpr) {
                        const alpha = (1 - (dist / (170 * dpr))) * 0.12
                        ctx.strokeStyle = `rgba(${cachedBrandRgb},${alpha})`
                        ctx.lineWidth = 1 * dpr
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
                    }
                }
            }
            // nodes
            for (const p of pts) {
                if (glowSprite) {
                    const size = 20 * dpr
                    ctx.drawImage(glowSprite, p.x - size / 2, p.y - size / 2, size, size)
                }

                ctx.fillStyle = `rgba(255,255,255,.16)`; ctx.beginPath(); ctx.arc(p.x, p.y, 2.2 * dpr, 0, Math.PI * 2); ctx.fill()
                p.x += p.vx; p.y += p.vy
                if (p.x < 0 || p.x > w) p.vx *= -1
                if (p.y < 0 || p.y > h) p.vy *= -1
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
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', opacity: 0.85 }} />
        </div>
    )
}
