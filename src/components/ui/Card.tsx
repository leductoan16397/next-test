import type { HTMLAttributes } from 'react';
import { cx } from '@/lib/utils';

type CardProps = HTMLAttributes<HTMLDivElement> & { glow?: boolean };

export function Card({ glow = true, className, ...props }: CardProps) {
  return <div className={cx('card', glow && 'glow-card', className)} {...props} />;
}
