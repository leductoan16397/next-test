import { principles, profile } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

const S = ({ children }: { children: string }) => <span className="t-s">&quot;{children}&quot;</span>;

const codeLines = [
  <><span className="t-k">export const</span> <span className="t-c">engineer</span> = {'{'}</>,
  <>  name: <S>{profile.name}</S>,</>,
  <>  role: <S>{profile.title}</S>,</>,
  <>  location: <S>{profile.location}</S>,</>,
  <>  experience: <span className="t-n">7</span>, <span className="t-d">{'// years, since 2019'}</span></>,
  <>  focus: [</>,
  <>    <S>distributed systems</S>,</>,
  <>    <S>cloud infrastructure</S>,</>,
  <>    <S>developer workflow</S>,</>,
  <>  ],</>,
  <>  education: {'{'}</>,
  <>    school: <S>HCMUTE</S>,</>,
  <>    major: <S>Information Technology</S>,</>,
  <>  {'}'},</>,
  <>  contact: <S>{profile.email}</S>,</>,
  <>{'}'} <span className="t-k">as const</span>;</>,
];

export function About() {
  return (
    <Section id="about" cmd="cat about.md" title="Beyond writing code">
      <div className="about">
        <Card className="prose">
          <p>
            I&apos;m deeply passionate about <strong>building and evolving scalable systems</strong>. For me that goes
            far beyond code: it&apos;s understanding the architecture, the business model, how users actually interact
            with the product, choosing the right technologies — and anticipating what breaks when traffic grows.
          </p>
          <p>
            I like designing <strong>independent, loosely-coupled components</strong> that are easy to maintain and
            scale with demand. And I love sharing what I learn: presenting both the problems I&apos;ve solved and the
            ones still open, so colleagues with different expertise can challenge my thinking.
          </p>
          <div className="principles">
            {principles.map((p, i) => (
              <div key={p.title} className="principle">
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <b>{p.title}</b> — <span>{p.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card glow={false} className="editor">
          <div className="tabs">
            <span className="on">engineer.ts</span>
            <span>stack.yaml</span>
          </div>
          <pre>
            {codeLines.map((line, i) => (
              <span key={i} className="l">
                {line}
              </span>
            ))}
          </pre>
        </Card>
      </div>
    </Section>
  );
}
