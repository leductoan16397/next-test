import { skillGroups } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/TagList';
import { cx } from '@/lib/utils';

export function Skills() {
  return (
    <Section
      id="stack"
      cmd="kubectl get skills --all-namespaces"
      title="Tech stack & knowledge"
      description="Tools I've used in production — across backend services, cloud infrastructure and the pipelines that ship them."
    >
      <div className="skills">
        {skillGroups.map((group) => (
          <Card key={group.title} className={cx('skill', group.wide && 'wide')}>
            <div className="hd">
              <h3>{group.title}</h3>
              <span className="ic">{group.ns}</span>
            </div>
            <TagList items={group.items} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
