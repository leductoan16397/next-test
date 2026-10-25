'use client';

import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

export function TypedText({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];
      setText(word.slice(0, charIndex));

      let delay = deleting ? 35 : 70;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      } else {
        charIndex += deleting ? -1 : 1;
      }
      timer = setTimeout(tick, delay);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return <b>{text}</b>;
}
