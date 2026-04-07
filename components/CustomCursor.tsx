"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  'a, button, input, select, textarea, label, [role="button"], [tabindex="0"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only on fine-pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("has-custom-cursor");
    setActive(true);

    // ~80 ms lag at 60 fps ≈ lerp factor 0.12
    const LERP = 0.12;

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * LERP;
      pos.current.y += (target.current.y - pos.current.y) * LERP;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setExpanded(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setExpanded(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!active) return null;

  const size = expanded ? 40 : 12;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
      style={{
        width: size,
        height: size,
        background: "#4CBB17",
        marginLeft: -size / 2,
        marginTop: -size / 2,
        transition: "width 0.2s ease, height 0.2s ease, margin 0.2s ease",
        willChange: "transform",
      }}
    />
  );
}
