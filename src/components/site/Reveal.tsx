import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels in from. */
  from?: "up" | "left" | "right" | "scale";
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "figure";
};

/**
 * Scroll-triggered reveal. Content is visible by default (SSR / no-JS safe)
 * and only hidden once JS has mounted, so nothing is ever stuck invisible.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        armed && "reveal",
        armed && `reveal-${from}`,
        armed && shown && "reveal-in",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
