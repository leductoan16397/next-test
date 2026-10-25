import type { ReactNode } from 'react';
import { profile, projects } from '@/data/profile';
import { CountUp } from '@/components/ui/CountUp';

type Metric = { label: string; value: ReactNode; color: string; points: string };

const metrics: Metric[] = [
  {
    label: 'uptime',
    value: (
      <>
        <CountUp since={profile.careerStart} />
        <small>+ yrs</small>
      </>
    ),
    color: 'var(--c1)',
    points: '0,18 8,16 16,17 24,12 32,13 40,8 48,6 56,2',
  },
  { label: 'companies', value: <CountUp to={5} />, color: 'var(--c2)', points: '0,20 14,16 28,12 42,8 56,4' },
  {
    label: 'projects shipped',
    value: <CountUp to={projects.length} />,
    color: 'var(--c3)',
    points: '0,19 7,17 14,18 21,14 28,15 35,10 42,9 49,5 56,3',
  },
  {
    label: 'role',
    value: <span className="metric-text">Tech Lead</span>,
    color: 'var(--ok)',
    points: '0,11 10,11 14,4 18,18 22,11 56,11',
  },
];

export function Metrics() {
  return (
    <div className="metrics">
      {metrics.map((m) => (
        <div key={m.label} className="metric">
          <div className="k">{m.label}</div>
          <b>{m.value}</b>
          <svg className="spark" viewBox="0 0 56 22" aria-hidden>
            <polyline fill="none" stroke={m.color} strokeWidth="1.5" points={m.points} />
          </svg>
        </div>
      ))}
    </div>
  );
}
