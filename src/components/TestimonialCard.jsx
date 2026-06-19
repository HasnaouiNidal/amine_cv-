// Star rating icon
const StarIcon = ({ filled = true }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-accent-gold"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Quote icon
const QuoteIcon = () => (
  <svg
    width="40"
    height="32"
    viewBox="0 0 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent-gold/40"
    aria-hidden="true"
  >
    <path
      d="M0 32V19.2C0 8.533 5.333 2.4 16 0l2.4 4C13.6 5.333 11.2 8 10.667 12H18V32H0ZM22 32V19.2C22 8.533 27.333 2.4 38 0l2.4 4C35.6 5.333 33.2 8 32.667 12H40V32H22Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({ name, role, avatar, rating, text }) => {
  return (
    <article className="bg-bg-primary rounded-card p-7 flex flex-col gap-5 card-hover border border-text-body/5 h-full">
      {/* Quote icon */}
      <QuoteIcon />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      {/* Review text */}
      <p className="text-text-muted text-[15px] leading-[26px] flex-grow italic">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-text-body/5">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-accent-teal/30 flex-shrink-0"
          loading="lazy"
        />
        <div>
          <p className="font-heading font-bold text-accent-navy text-[15px] leading-tight">
            {name}
          </p>
          <p className="text-text-muted text-[13px] mt-0.5">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
