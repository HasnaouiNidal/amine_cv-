// Skills shown in the marquee strip
const SKILLS = [
  'React',
  'UI/UX Design',
  'TypeScript',
  'Figma',
  'Node.js',
  'Tailwind CSS',
  'Next.js',
  'PostgreSQL',
  'Motion Design',
  'Design Systems',
  'Framer Motion',
  'GraphQL',
];

// Star icon between each skill
const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="flex-shrink-0 text-accent-teal"
    aria-hidden="true"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);

const MarqueeStrip = () => {
  // Duplicate the list to create seamless looping
  const items = [...SKILLS, ...SKILLS];

  return (
    <div
      className="relative py-4 overflow-hidden"
      style={{
        background: '#0F1219',
        transform: 'skewY(-2deg)',
        marginTop: '-8px',
        marginBottom: '-8px',
      }}
      aria-hidden="true"
    >
      {/* Unskew inner content so text stays level */}
      <div style={{ transform: 'skewY(2deg)' }}>
        {/* Row 1 — scrolling left */}
        <div className="marquee-container">
          <div className="inline-flex animate-marquee">
            {items.map((skill, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-4 text-bg-primary font-heading font-semibold text-[15px] uppercase tracking-widest whitespace-nowrap">
                <StarIcon />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
