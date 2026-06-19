import GlassPill from './GlassPill';

const SectionHeader = ({
  label,
  title,
  subtitle,
  titleClassName = '',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-4 text-left items-start ${className}`}>
      {label && (
        <div>
          <GlassPill>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal inline-block"></span>
            {label}
          </GlassPill>
        </div>
      )}
      {title && (
        <h2
          className={`font-heading font-bold text-accent-navy text-[32px] leading-[40px] sm:text-[36px] sm:leading-[44px] lg:text-section lg:leading-[48px] ${titleClassName}`}
        >
          {title}
          <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full ml-2 align-middle"></span>
        </h2>
      )}
      {subtitle && (
        <p className="text-text-muted text-[17px] leading-[27px] lg:text-body-lg max-w-[640px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
