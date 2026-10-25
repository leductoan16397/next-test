import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  cmd: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
};

export function SectionHeader({ cmd, title, description }: Omit<SectionProps, 'id' | 'children'>) {
  return (
    <div className="sec-head">
      <div className="cmd">
        <span className="p">$</span> {cmd}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Section({ id, children, ...header }: SectionProps) {
  return (
    <section id={id} className="wrap reveal">
      <SectionHeader {...header} />
      {children}
    </section>
  );
}
