'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { prefersReducedMotion, yearsSince } from '@/lib/utils';

type Line = { cmd: string } | { out: ReactNode };

const Str = ({ children }: { children: string }) => <span className="t-s">{children}</span>;

const YamlRow = ({ k, values }: { k: string; values: string[] }) => (
  <>
    <span className="t-k">{k}</span>:{' '.repeat(9 - k.length)}[
    {values.map((v, i) => (
      <Fragment key={v}>
        {i > 0 && ', '}
        <Str>{v}</Str>
      </Fragment>
    ))}
    ]{'\n'}
  </>
);

const pods: [name: string, running: boolean, age: string][] = [
  ['faboshop-lead', true, ''],
  ['teefi-lead', false, '1y2m'],
  ['pascal-backend', false, '7m'],
  ['cmc-fullstack', false, '1y6m'],
  ['devinition-web', false, '1y1m'],
];

// Built on the client only (after mount), so the computed age never causes a hydration mismatch.
function buildLines(): Line[] {
  return [
    { cmd: 'whoami' },
    {
      out: (
        <>
          <Str>le-duc-toan</Str> <span className="t-d">— software engineer, technical leader</span>
        </>
      ),
    },
    { cmd: 'cat stack.yaml' },
    {
      out: (
        <>
          <YamlRow k="runtime" values={['node', 'typescript']} />
          <YamlRow k="backend" values={['nestjs', 'express', 'graphql', 'grpc']} />
          <YamlRow k="data" values={['mongodb', 'redis', 'documentdb']} />
          <YamlRow k="cloud" values={['ecs', 'sqs', 'lambda', 'terraform']} />
          <YamlRow k="ship" values={['docker', 'k8s', 'github-actions']} />
        </>
      ),
    },
    { cmd: 'kubectl get pods -n career' },
    {
      out: (
        <>
          <span className="t-d">{'NAME              STATUS     AGE'}</span>
          {pods.map(([name, running, age]) => (
            <Fragment key={name}>
              {'\n' + name.padEnd(18)}
              <span className={running ? 't-o' : 't-c'}>{(running ? 'Running' : 'Completed').padEnd(11)}</span>
              {running ? `${yearsSince('2024-06-01')}y` : age}
            </Fragment>
          ))}
          {'\n'}
        </>
      ),
    },
    { cmd: 'echo $MOTTO' },
    { out: <span className="t-w">&quot;design for scale, build for change.&quot;</span> },
  ];
}

const Prompt = () => (
  <>
    <span className="t-p">➜</span> <span className="t-c">~</span>{' '}
  </>
);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [done, setDone] = useState(0);
  const [typing, setTyping] = useState<string | null>(null);

  useEffect(() => {
    const all = buildLines();
    setLines(all);
    let cancelled = false;

    if (prefersReducedMotion()) {
      setDone(all.length);
      return;
    }

    (async () => {
      for (let i = 0; i < all.length; i++) {
        const line = all[i];
        if ('cmd' in line) {
          for (let k = 0; k <= line.cmd.length; k++) {
            if (cancelled) return;
            setTyping(line.cmd.slice(0, k));
            await sleep(45 + Math.random() * 40);
          }
          await sleep(250);
          setTyping(null);
          setDone(i + 1);
        } else {
          if (cancelled) return;
          setDone(i + 1);
          await sleep(450);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const finished = lines.length > 0 && done === lines.length;

  return (
    <div className="term" aria-label="Terminal introduction">
      <div className="term-bar">
        <i />
        <i />
        <i />
        <span>toan@prod: ~</span>
      </div>
      <div className="term-body">
        {lines.slice(0, done).map((line, i) => (
          <Fragment key={i}>
            {'cmd' in line ? (
              <>
                <Prompt />
                {line.cmd}
                {'\n'}
              </>
            ) : (
              <>
                {line.out}
                {'\n'}
              </>
            )}
          </Fragment>
        ))}
        {typing !== null && (
          <>
            <Prompt />
            {typing}▌
          </>
        )}
        {finished && (
          <>
            <Prompt />
            <span className="term-caret" />
          </>
        )}
      </div>
    </div>
  );
}
