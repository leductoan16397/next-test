import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer>
      <span className="ok">✔</span> build passed · © {new Date().getFullYear()} {profile.name} ·{' '}
      <span className="t-d">exit 0</span>
    </footer>
  );
}
