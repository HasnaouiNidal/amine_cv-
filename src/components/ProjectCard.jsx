// GitHub icon
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// External link icon
const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ProjectCard = ({ title, description, image, tags, category, liveUrl, githubUrl }) => {
  return (
    <article className="group bg-bg-secondary rounded-project overflow-hidden card-hover border border-text-body/5 hover:border-accent-teal/20 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-panel-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-bg-secondary text-accent-navy border border-text-body/5">
            {category}
          </span>
        </div>

        {/* Action links — appear on hover on desktop, always visible on mobile/tablet */}
        <div className="absolute top-4 right-4 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:translate-y-2 lg:group-hover:translate-y-0 opacity-100 translate-y-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-panel-dark flex items-center justify-center text-white hover:text-accent-teal transition-colors border border-white/10"
              aria-label={`GitHub repository for ${title}`}
            >
              <GitHubIcon />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-panel-dark flex items-center justify-center text-white hover:text-accent-teal transition-colors border border-white/10"
              aria-label={`Live demo of ${title}`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-grow">
        <h3 className="font-heading font-bold text-accent-navy text-[20px] leading-[28px] lg:text-[22px] lg:leading-[30px]">
          {title}
        </h3>
        <p className="text-text-muted text-[14px] leading-[22px] flex-grow">
          {description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase text-accent-navy bg-bg-primary border border-text-body/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
