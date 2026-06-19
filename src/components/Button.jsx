const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-pill transition-all duration-300 ease-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal';

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-[15px]',
    lg: 'px-9 py-4 text-[16px]',
  };

  const variants = {
    primary:
      'bg-accent-navy text-bg-primary hover:bg-accent-teal shadow-md shadow-accent-navy/10 hover:-translate-y-0.5 hover:shadow-lg',
    ghost:
      'bg-bg-secondary border border-text-body/10 text-accent-navy hover:bg-[#EAE4D5] hover:border-text-body/20 hover:-translate-y-0.5',
    outline:
      'border border-accent-teal text-accent-teal hover:bg-accent-teal/8 hover:-translate-y-0.5',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
