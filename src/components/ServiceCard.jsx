// Icon map — renders SVG based on iconType string from services data
const ICON_MAP = {
  design: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="4" y="10" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 18H44" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="12" cy="14" r="2" fill="currentColor"/>
      <circle cx="20" cy="14" r="2" fill="currentColor"/>
      <path d="M16 28L20 32L28 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M8 12L18 24L8 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 36H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.5"/>
      <path d="M24 8V12M24 36V40M8 24H12M36 24H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  webapp: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 24H32M24 16V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M12 36L24 12L36 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 28H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  system: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
};

const ServiceCard = ({ iconType, title, description, tags, index }) => {
  const icon = ICON_MAP[iconType] || ICON_MAP.design;

  return (
    <div
      className="group bg-bg-secondary rounded-card p-7 flex flex-col gap-5 card-hover cursor-default border border-text-body/5 hover:border-accent-teal/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon & Step Number Header */}
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-accent-teal bg-accent-teal/8 group-hover:bg-accent-teal/15 transition-colors duration-300 flex-shrink-0">
          {icon}
        </div>
        <span className="text-[18px] font-mono text-text-muted/30 font-light">0{index + 1}</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-accent-navy text-[22px] leading-[30px] lg:text-[24px] lg:leading-[32px]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-[15px] leading-[25px] flex-grow">
        {description}
      </p>

      {/* Tags (Metadata Badge style) */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-bg-primary border border-text-body/5 text-accent-navy text-[10px] font-mono tracking-wider uppercase rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow on hover */}
      <div className="flex items-center gap-2 text-accent-teal text-[14px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
        <span>Learn more</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;
