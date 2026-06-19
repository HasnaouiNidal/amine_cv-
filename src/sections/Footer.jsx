import Container from '../components/Container';
import Button from '../components/Button';

// Social links
const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.369 5.64c1.313 1.608 2.1 3.655 2.125 5.878-3.12-.66-5.998-.572-8.626.267-.228-.525-.463-1.047-.713-1.563 3.12-1.274 5.422-3.189 7.214-4.582zM12 2.059c2.428 0 4.65.882 6.358 2.34-1.62 1.275-3.786 3.01-6.735 4.17C10.13 5.99 8.57 4.06 7.16 2.593A10.04 10.04 0 0 1 12 2.059zm-6.41 1.607C7.002 5.17 8.532 7.08 10.447 9.535c-3.397.9-7.178.9-7.45.9-.017-.17-.026-.344-.026-.52 0-2.394.879-4.586 2.32-6.249zM2.059 12.001l.001-.173c.394.01 4.987.077 8.808-.981.241.475.474.953.69 1.435-4.137 1.165-7.245 4.403-8.808 7.054A9.963 9.963 0 0 1 2.059 12zm9.941 9.941c-2.48 0-4.76-.9-6.516-2.382 1.31-2.473 4.184-5.538 8.658-6.856.88 2.3 1.556 4.72 1.98 7.249A9.96 9.96 0 0 1 12 21.941zm7.965-3.352c-.473-2.37-1.1-4.648-1.928-6.813 2.35-.336 4.813-.05 7.44.842-.497 2.627-1.953 4.913-4.03 6.47z"/>
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ── CTA Section (OS Dark tech panel contrast) ── */}
      <div className="relative py-28 bg-panel-dark">
        {/* Decorative glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'rgba(13, 148, 136, 0.15)' }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-[300px] h-[200px] rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'rgba(212, 175, 55, 0.05)' }}
          aria-hidden="true"
        ></div>

        <Container className="relative text-center">
          {/* Large decorative text */}
          <p className="text-label text-accent-teal mb-6 tracking-[4px]">LET'S WORK TOGETHER</p>

          <h2 className="font-heading font-bold text-white text-[36px] leading-[44px] sm:text-[48px] sm:leading-[58px] lg:text-footer-title lg:leading-[64px] max-w-[800px] mx-auto mb-6">
            Ready to Build Something{' '}
            <span className="text-accent-gold">Extraordinary?</span>
          </h2>

          <p className="text-bg-secondary/70 text-[17px] leading-[28px] max-w-[560px] mx-auto mb-10">
            Whether you have a project in mind or just want to say hello, my inbox is always open. Let's create something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="mailto:amine@example.com" size="lg">
              Say Hello 👋
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </Button>
            <Button href="#portfolio" variant="ghost" size="lg">
              View Portfolio
            </Button>
          </div>
        </Container>
      </div>

      {/* ── Footer Bottom Bar (Sand Accent) ── */}
      <div className="bg-bg-secondary border-t border-text-body/5 py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 font-heading font-bold text-[20px] text-accent-navy hover:text-accent-teal transition-colors duration-300"
            >
              <span className="w-7 h-7 rounded-lg gradient-purple flex items-center justify-center text-white text-[12px] font-bold">A</span>
              Amine.<span className="gradient-text">dev</span>
            </a>

            {/* Nav links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-6 justify-center">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-accent-navy transition-colors text-[14px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-bg-primary hover:bg-[#EAE4D5] border border-text-body/5 flex items-center justify-center text-text-muted hover:text-accent-navy transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-text-body/5 text-center">
            <p className="text-text-muted/50 text-[13px]">
              © {new Date().getFullYear()} Amine.dev · Designed & Built with ❤️ and lots of ☕
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
