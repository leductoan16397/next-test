import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

type Node = { x: number; y: number; w: number; h?: number; title: string[]; sub: string; highlight?: boolean };
type Flow = { d: string; kind: 'req' | 'rpc' | 'evt' | 'ci' };

const nodes: Node[] = [
  { x: 20, y: 85, w: 130, title: ['Web App'], sub: 'Next.js · React' },
  { x: 20, y: 205, w: 130, title: ['CMS'], sub: 'React admin' },
  { x: 250, y: 80, w: 120, h: 180, title: ['API', 'Gateway'], sub: 'GraphQL', highlight: true },
  { x: 470, y: 65, w: 120, title: ['user-svc'], sub: 'NestJS' },
  { x: 470, y: 145, w: 120, title: ['content-svc'], sub: 'NestJS' },
  { x: 470, y: 225, w: 120, title: ['payment-svc'], sub: 'NestJS · Stripe' },
  { x: 300, y: 305, w: 120, title: ['SQS'], sub: 'event queue' },
  { x: 20, y: 305, w: 180, title: ['Lambda workers'], sub: 'SendGrid · Firebase' },
  { x: 800, y: 65, w: 160, title: ['DocumentDB'], sub: 'MongoDB API' },
  { x: 800, y: 145, w: 160, title: ['Redis'], sub: 'cache' },
  { x: 800, y: 225, w: 160, title: ['CloudWatch'], sub: 'logs · metrics' },
  { x: 860, y: 305, w: 100, title: ['CI/CD'], sub: 'GHA · TF' },
];

const flows: Flow[] = [
  { d: 'M150 110 H250', kind: 'req' },
  { d: 'M150 230 H250', kind: 'req' },
  { d: 'M370 170 C420 170 420 90 470 90', kind: 'rpc' },
  { d: 'M370 170 H470', kind: 'rpc' },
  { d: 'M370 170 C420 170 420 250 470 250', kind: 'rpc' },
  { d: 'M590 250 C620 250 620 330 470 330 H420', kind: 'evt' },
  { d: 'M300 330 H200', kind: 'evt' },
  { d: 'M590 90 H800', kind: 'req' },
  { d: 'M590 170 H800', kind: 'req' },
  { d: 'M590 250 H800', kind: 'req' },
  { d: 'M860 330 H760', kind: 'ci' },
];

const legend = [
  { label: 'http / graphql', color: 'var(--c2)' },
  { label: 'grpc', color: 'var(--c1)' },
  { label: 'events', color: 'var(--c3)' },
  { label: 'deploy', color: 'var(--warn)' },
];

function DiagramNode({ x, y, w, h = 50, title, sub, highlight }: Node) {
  // Single-line titles sit near the top; multi-line titles are centered in taller boxes.
  const titleY = title.length > 1 ? y + h / 2 - 10 : y + 23;
  return (
    <g className={highlight ? 'node hl' : 'node'}>
      <rect x={x} y={y} width={w} height={h} rx="10" />
      {title.map((t, i) => (
        <text key={t} x={x + 16} y={titleY + i * 18}>
          {t}
        </text>
      ))}
      <text className="sub" x={x + 16} y={titleY + title.length * 18 - 2}>
        {sub}
      </text>
    </g>
  );
}

export function Architecture() {
  return (
    <Section
      id="architecture"
      cmd="terraform graph | dot -Tsvg"
      title="System design in practice"
      description="The kind of platform I lead: TeeFi, migrated from a monolith to NestJS microservices on AWS, provisioned with Terraform and shipped by GitHub Actions."
    >
      <Card glow={false} className="arch">
        <div className="arch-top">
          <span className="mono">teefi-platform · aws</span>
          <div className="legend">
            {legend.map((l) => (
              <span key={l.label}>
                <i style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
        </div>
        <div className="arch-scroll">
          <svg viewBox="0 0 980 400" role="img" aria-label="Microservice architecture diagram">
            <rect className="zone" x="200" y="20" width="560" height="360" rx="14" />
            <text className="zone-l" x="216" y="42">
              AWS · ECS CLUSTER (NX MONOREPO)
            </text>
            {flows.map((f) => (
              <path key={f.d} className={`flow f-${f.kind}`} d={f.d} />
            ))}
            {nodes.map((n) => (
              <DiagramNode key={n.title.join(' ')} {...n} />
            ))}
          </svg>
        </div>
        <div className="arch-note">Simplified illustration based on the TeeFi stack — service names are representative.</div>
      </Card>
    </Section>
  );
}
