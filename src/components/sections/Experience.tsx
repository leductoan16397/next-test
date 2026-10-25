import { jobs } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { cx } from '@/lib/utils';

export function Experience() {
  return (
    <Section id="experience" cmd="git log --career --graph" title="Career journey">
      <div className="gitlog">
        {jobs.map((job) => (
          <div key={job.hash} className={cx('commit', job.current && 'head')}>
            <div className="rail">
              <span className="node-dot" />
            </div>
            <Card>
              <div className="c-meta">
                <span className="hash">{job.hash}</span>
                {job.refs?.map((ref) => (
                  <span key={ref.label} className={cx('ref', ref.kind === 'tag' && 'tag-ref')}>
                    {ref.label}
                  </span>
                ))}
                <span>{job.period}</span>
              </div>
              <h3>
                {job.title} <span>@ {job.company}</span>
              </h3>
              <ul>
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
