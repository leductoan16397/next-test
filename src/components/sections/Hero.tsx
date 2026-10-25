import { profile, roles } from '@/data/profile';
import { Terminal } from '@/components/ui/Terminal';
import { TypedText } from '@/components/ui/TypedText';
import { Metrics } from './Metrics';

export function Hero() {
  return (
    <header className="wrap" id="top">
      <div className="hero">
        <div>
          <div className="status">
            <span className="pulse" />
            status: building @ {profile.company} · HCMC, VN
          </div>
          <h1>
            {profile.firstLine}
            <br />
            <span className="grad">{profile.lastName}</span>
          </h1>
          <div className="typed">
            <span className="t-d">&gt;</span> <TypedText words={roles} />
            <span className="caret" />
          </div>
          <p className="lead">{profile.lead}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">
              Explore projects <span className="mono">→</span>
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <span className="mono">$</span> mail me
            </a>
          </div>
        </div>
        <Terminal />
      </div>
      <Metrics />
    </header>
  );
}
