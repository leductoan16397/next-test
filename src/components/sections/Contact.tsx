import { profile } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/Section';

export function Contact() {
  return (
    <section id="contact" className="wrap reveal">
      <Card glow={false} className="contact">
        <div>
          <SectionHeader
            cmd="./connect.sh"
            title={
              <>
                Let&apos;s build something <span className="grad">that scales.</span>
              </>
            }
            description="Open to conversations about backend architecture, cloud infrastructure and technical leadership."
          />
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              <span className="mono">✉</span> {profile.email}
            </a>
            <a className="btn" href={profile.phoneHref}>
              <span className="mono">☎</span> {profile.phone}
            </a>
          </div>
        </div>
        <div className="ping">
          <span className="t-p">$</span> ping toan.dev{'\n'}
          <span className="t-d">PING toan.dev: 56 data bytes</span>
          {'\n'}64 bytes: location=<span className="t-s">HCMC, VN</span> time=<span className="t-n">fast</span>
          {'\n'}64 bytes: email=<span className="t-s">{profile.email}</span>
          {'\n'}64 bytes: phone=<span className="t-s">{profile.phone}</span>
          {'\n'}
          <span className="t-o">--- 0% packet loss, ready to connect ---</span>
        </div>
      </Card>
    </section>
  );
}
