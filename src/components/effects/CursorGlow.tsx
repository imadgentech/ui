"use client";

import { useEffect } from "react";

/**
 * Attach once near the root (e.g. in layout or top-level page)
 * so CSS variables --mx, --my, --mxpx, --mypx are kept updated.
 */
export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;

    function setMouseVars(clientX: number, clientY: number) {
      const x = Math.max(0, Math.min(1, clientX / window.innerWidth));
      const y = Math.max(0, Math.min(1, clientY / window.innerHeight));
      root.style.setProperty("--mx", (x * 100).toFixed(2) + "%");
      root.style.setProperty("--my", (y * 100).toFixed(2) + "%");
      root.style.setProperty("--mxpx", ((x - 0.5) * 40).toFixed(2) + "px");
      root.style.setProperty("--mypx", ((y - 0.5) * 40).toFixed(2) + "px");
    }

    // mousemove/touchmove can fire far faster than the display refresh rate;
    // writing 4 custom properties directly in the handler forces a style
    // recalc every single event. Coalesce to at most once per animation
    // frame instead, same pattern the canvas effects use for their RAF loops.
    let pending: { x: number; y: number } | null = null;
    let frame: number | null = null;

    function flush() {
      frame = null;
      if (pending) setMouseVars(pending.x, pending.y);
    }

    function schedule(clientX: number, clientY: number) {
      pending = { x: clientX, y: clientY };
      if (frame === null) frame = requestAnimationFrame(flush);
    }

    function onMove(e: MouseEvent) {
      schedule(e.clientX, e.clientY);
    }

    function onTouch(e: TouchEvent) {
      if (!e.touches || !e.touches[0]) return;
      schedule(e.touches[0].clientX, e.touches[0].clientY);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    // initial position
    setMouseVars(window.innerWidth * 0.55, window.innerHeight * 0.25);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
