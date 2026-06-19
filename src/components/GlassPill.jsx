const GlassPill = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-secondary border border-text-body/5 text-accent-navy text-[10px] font-mono tracking-wider uppercase ${className}`}
    >
      {children}
    </span>
  );
};

export default GlassPill;
