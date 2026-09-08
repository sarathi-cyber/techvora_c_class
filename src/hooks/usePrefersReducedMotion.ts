import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Live-updating media query hook. All animation systems
 * (canvas, marquee, typing, reveals) respect this flag.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(QUERY).matches
      : false,
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const list = window.matchMedia(QUERY);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    setReduced(list.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
