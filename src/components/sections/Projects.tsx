'use client';

import { useState } from 'react';
import { projects, type Project } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/Section';
import { TagList } from '@/components/ui/TagList';
import { cx, slugify } from '@/lib/utils';

const companies = ['all', ...new Set(projects.map((p) => p.company))];

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <Card
      className={cx('project', featured && 'featured', open && 'open')}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="p-path">
        <span>
          <span className="d">./{slugify(project.company)}/</span>
          {project.slug}
        </span>
        <span>
          team {project.team}
          <span className="team">
            {Array.from({ length: Math.min(project.team, 6) }, (_, i) => (
              <i key={i} />
            ))}
          </span>
        </span>
      </div>
      <h3>{project.name}</h3>
      <div className="role">{project.role}</div>
      <p className="desc">{project.desc}</p>
      <div className="resp">
        <div>
          <ul>
            {project.resp.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className="toggle">{open ? '[−]' : '[+]'} responsibilities</span>
      <TagList items={project.tech} />
    </Card>
  );
}

export function Projects() {
  const [company, setCompany] = useState('all');
  const visible = projects.filter((p) => company === 'all' || p.company === company);

  return (
    <section id="projects" className="wrap reveal">
      <SectionHeader cmd="ls -la ./projects" title="Selected work" description="Click a card to expand responsibilities." />
      <div className="filters">
        {companies.map((c) => (
          <button key={c} className={cx('filter', c === company && 'active')} onClick={() => setCompany(c)}>
            --{slugify(c)}
          </button>
        ))}
      </div>
      <div className="projects">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} featured={!!p.featured && company === 'all'} />
        ))}
      </div>
    </section>
  );
}
