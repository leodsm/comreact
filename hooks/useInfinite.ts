import { useEffect, useRef, useState } from "react";

export function useInfinite<T>(all: T[], step = 9){
  const [limit, setLimit] = useState(step);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          setLimit((l) => {
            if (l + step >= all.length) ob.unobserve(el);
            return Math.min(l + step, all.length);
          });
      });
    });
    ob.observe(el);
    return () => ob.disconnect();
  }, [all.length, step]);

  const items = all.slice(0, limit);
  return { items, sentinelRef: ref, done: limit>=all.length };
}
