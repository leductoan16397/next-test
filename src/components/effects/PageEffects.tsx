'use client';

import { useEffect } from 'react';

/** Global client-side effects: reveal-on-scroll for `.reveal` and cursor glow for `.glow-card`. */
export function PageEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element).closest?.('.glow-card') as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onPointerMove);

    return () => {
      observer.disconnect();
      document.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return null;
}
