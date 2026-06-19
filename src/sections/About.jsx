import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { assets } from '../data/assets';

// Individual stat card
const StatCard = ({ value, label, icon }) => (
  <div className="bg-bg-secondary rounded-card p-4 sm:p-6 flex flex-col items-center justify-center gap-2 text-center card-hover border border-text-body/5 hover:border-accent-teal/25">
    <span className="text-xl sm:text-2xl" aria-hidden="true">{icon}</span>
    <p className="font-heading font-bold text-accent-navy text-[28px] sm:text-[34px] leading-tight">{value}</p>
    <p className="text-text-muted text-[13px] sm:text-[14px]">{label}</p>
  </div>
);

const STATS = [
  { value: '5+', label: 'Years of Experience', icon: '🗓️' },
  { value: '80+', label: 'Projects Delivered', icon: '🚀' },
  { value: '40+', label: 'Happy Clients', icon: '🤝' },
  { value: '97%', label: 'Client Satisfaction', icon: '⭐' },
];

const SKILLS_LIST = [
  'Figma & Prototyping',
  'React & Next.js',
  'Tailwind CSS',
  'Node.js & APIs',
  'Design Systems',
  'User Research',
];

// Checkmark icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent-teal flex-shrink-0">
    <circle cx="12" cy="12" r="10" fill="rgba(13,148,136,0.15)"/>
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-x-hidden px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2"
        style={{ background: 'rgba(13, 148, 136, 0.03)' }}
        aria-hidden="true"
      ></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Column — Image ── */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Glow */}
            <div
              className="absolute inset-10 rounded-3xl blur-[60px] pointer-events-none"
              style={{ background: 'rgba(13,148,136,0.05)' }}
              aria-hidden="true"
            ></div>

            <div className="relative w-full max-w-sm mx-auto">
              {/* Main image */}
              <div className="rounded-[28px] overflow-hidden border border-text-body/5 w-full aspect-[4/5] md:aspect-[23/27] md:max-w-[460px] md:h-[540px]">
                <img
                  src={assets.aboutPerson}
                  alt="About Amine"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating experience badge (Sand Gray Panel) */}
              <div className="absolute bottom-4 right-3 max-w-[160px] scale-90 sm:scale-100 sm:bottom-6 sm:right-6 bg-bg-secondary rounded-2xl p-3 sm:p-5 border border-text-body/5 shadow-xl text-center">
                <p className="font-heading font-bold text-accent-navy text-[28px] sm:text-[32px] leading-tight">5+</p>
                <p className="text-text-muted text-[11px] sm:text-[13px] mt-0.5">Years of<br/>Experience</p>
              </div>

              {/* Floating tools badge (OS Dark Panel) */}
              <div className="absolute top-4 left-3 max-w-[160px] scale-90 sm:scale-100 sm:top-6 sm:left-6 bg-panel-dark text-bg-primary rounded-2xl px-3 py-2 sm:px-5 sm:py-4 border border-white/10 shadow-xl flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent-teal flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">✦</div>
                <div>
                  <p className="text-bg-primary font-bold text-[11px] sm:text-[13px] leading-tight">Full Stack</p>
                  <p className="text-bg-secondary/70 text-[10px] sm:text-[11px]">Design + Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column — Content ── */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <SectionHeader
              label="About Me"
              title="Designing with Purpose, Building with Precision"
              subtitle="I'm a multidisciplinary designer and developer with a passion for creating digital experiences that are both beautiful and functional. I bridge the gap between design and engineering to deliver products users love."
            />

            {/* Skills checklist */}
            <div className="grid grid-cols-2 gap-3">
              {SKILLS_LIST.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-text-muted text-[15px]">{skill}</span>
                </div>
              ))}
            </div>

            {/* Bio paragraph */}
            <p className="text-text-muted text-[15px] leading-[26px]">
              With over 5 years of experience across startups and enterprise clients, I've developed a deep understanding of what makes digital products successful — from initial research and wireframing to pixel-perfect implementation and post-launch optimization.
            </p>

            {/* CTA */}
            <div className="flex gap-3">
              <Button href="#portfolio" size="md">
                See My Work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button href="/cv" variant="ghost" size="md">
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
