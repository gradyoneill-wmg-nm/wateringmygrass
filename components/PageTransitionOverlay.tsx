"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const prev = useRef(pathname);
  // Incrementing key forces remount → restarts animation on every navigation
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (pathname === prev.current) return;
    prev.current = pathname;
    setAnimKey((k) => k + 1);
  }, [pathname]);

  return (
    <div
      key={animKey}
      className="fixed inset-0 z-[9990] pointer-events-none bg-black"
      style={{
        animation:
          animKey > 0
            ? "pageWipe 0.8s cubic-bezier(0.76,0,0.24,1) both"
            : "none",
        // hidden by default (no navigation yet)
        clipPath: animKey === 0 ? "inset(0 100% 0 0)" : undefined,
      }}
    />
  );
}
