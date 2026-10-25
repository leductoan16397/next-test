import { education } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

export function Education() {
  return (
    <Section id="education" cmd="cat education.log" title="Foundation">
      <Card className="edu">
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
        </div>
        <div className="mono">{education.period}</div>
      </Card>
    </Section>
  );
}
