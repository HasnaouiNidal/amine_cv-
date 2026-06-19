import Container from '../components/Container';
import Button from '../components/Button';
import GlassPill from '../components/GlassPill';
import { assets } from '../data/assets';

// Arrow icon
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Scroll indicator
const ScrollIndicator = () => (
  <div className="flex flex-col items-center gap-2 mt-6">
    <span className="text-text-muted/50 text-[12px] tracking-widest uppercase">Scroll</span>
    <div className="w-px h-12 bg-gradient-to-b from-accent-teal/60 to-transparent relative">
      <div className="w-1.5 h-1.5 rounded-full bg-accent-teal absolute -left-[2px] top-0 animate-bounce"></div>
    </div>
  </div>
);

// Stats badge
const StatBadge = ({ value, label }) => (
  <div className="bg-bg-secondary rounded-2xl px-5 py-3 text-center border border-text-body/5">
    <p className="font-heading font-bold text-accent-navy text-[22px] leading-tight">{value}</p>
    <p className="text-text-muted text-[12px] mt-0.5">{label}</p>
  </div>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* ── Background Decorative Elements ── */}
      {/* Large soft teal glow — top left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
        style={{ background: 'rgba(13, 148, 136, 0.04)' }}
        aria-hidden="true"
      ></div>
      {/* Smaller soft gold glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"
        style={{ background: 'rgba(212, 175, 55, 0.03)', animationDelay: '2s' }}
        aria-hidden="true"
      ></div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(13,148,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      ></div>

      {/* Floating star dots */}
      {[
        { top: '20%', left: '10%', size: 4, delay: '0s' },
        { top: '60%', left: '5%', size: 3, delay: '1s' },
        { top: '35%', right: '8%', size: 5, delay: '0.5s' },
        { top: '75%', right: '12%', size: 3, delay: '1.5s' },
        { top: '15%', right: '25%', size: 4, delay: '2s' },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent-teal animate-pulse-slow pointer-events-none opacity-[0.25]"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
          aria-hidden="true"
        ></div>
      ))}

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left Column — Text ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            {/* Label pill */}
            <div>
              <GlassPill>
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                Available for work
              </GlassPill>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-heading font-bold text-accent-navy text-[42px] leading-[50px] sm:text-[52px] sm:leading-[62px] lg:text-hero lg:leading-[72px]">
                Crafting{' '}
                <span className="gradient-text">Digital</span>{' '}
                Experiences That Matter
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-text-muted text-[17px] leading-[28px] lg:text-body-lg max-w-[480px]">
              I'm a UI/UX Designer & Frontend Developer who turns complex problems into elegant, user-centered solutions. Let's build something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href="#portfolio" size="lg">
                View My Work
                <ArrowIcon />
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                Get In Touch
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-4 mt-2">
              <StatBadge value="5+" label="Years Exp." />
              <StatBadge value="80+" label="Projects" />
              <StatBadge value="97%" label="Satisfaction" />
            </div>
          </div>

          {/* ── Right Column — Person Image ── */}
          <div className="relative flex justify-center items-end order-1 lg:order-2">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-[40px] blur-[60px] pointer-events-none"
              style={{ background: 'rgba(13, 148, 136, 0.06)' }}
              aria-hidden="true"
            ></div>

            {/* Person image container */}
            <div className="relative animate-float">
              <div
                className="relative rounded-[32px] overflow-hidden border border-text-body/5"
                style={{ width: '420px', height: '500px', maxWidth: '100%' }}
              >
                <img
                  src={assets.heroPerson}
                  alt="Amine — UI/UX Designer & Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, #FAF8F5 0%, transparent 100%)' }}
                  aria-hidden="true"
                ></div>
              </div>

              {/* Floating badge — top right of image (OS Dark Panel) */}
              <div className="absolute -top-4 -right-4 bg-panel-dark text-bg-primary rounded-2xl px-4 py-3 border border-white/10 flex items-center gap-2 shadow-xl">
                <div className="w-9 h-9 rounded-xl bg-accent-teal flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-bg-primary font-bold text-[13px] leading-tight">Design Expert</p>
                  <p className="text-bg-secondary/70 text-[11px]">Figma & React</p>
                </div>
              </div>

              {/* Floating badge — bottom left of image (Sand Gray Panel) */}
              <div className="absolute -bottom-4 -left-4 bg-bg-secondary rounded-2xl px-4 py-3 border border-text-body/5 flex items-center gap-2 shadow-xl">
                <div className="flex -space-x-2">
                  {[assets.avatars?.[0], assets.avatars?.[1], assets.avatars?.[2]].filter(Boolean).map((av, i) => (
                    <img
                      key={i}
                      src={av}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-bg-secondary object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-accent-navy font-bold text-[13px] leading-tight">Happy Clients</p>
                  <div className="flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#D4AF37" className="flex-shrink-0">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <p className="text-text-muted text-[11px]">4.9/5 · 80+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <ScrollIndicator />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
