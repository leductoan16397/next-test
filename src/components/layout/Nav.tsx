import { navLinks } from '@/data/profile';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Nav() {
  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="logo">
          <span className="p">~/</span>toan<span className="cur" />
        </a>
        <div className="links">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href}>
              <span>{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
