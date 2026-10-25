'use client';

import { useEffect, useState } from 'react';
import { prefersReducedMotion, yearsSince } from '@/lib/utils';

type CountUpProps = {
  to?: number;
  /** ISO date — counts whole years elapsed since then, computed in the browser. */
  since?: string;
  duration?: number;
};

export function CountUp({ to = 0, since, duration = 1200 }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const target = since ? yearsSince(since) : to;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let frame: number;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to, since, duration]);

  return <>{value}</>;
}
