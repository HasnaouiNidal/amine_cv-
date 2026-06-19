import { useState } from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects } from '../data/projects';

// Get unique categories including "All"
const ALL_CATEGORIES = ['All', ...new Set(projects.map((p) => p.category))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(13, 148, 136, 0.03)' }}
        aria-hidden="true"
      ></div>

      <Container className="relative">
        {/* Header row — title left, filter right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            label="Portfolio"
            title="Selected Work"
            subtitle="A curated selection of projects that showcase my range, process, and passion for great design."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-5 py-2 rounded-pill text-[14px] font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent-navy text-bg-primary shadow-md'
                    : 'bg-bg-secondary border border-text-body/5 text-text-muted hover:bg-[#EAE4D5] hover:text-accent-navy'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Show More button */}
        <div className="mt-12 flex justify-center">
          <Button href="https://github.com" variant="ghost" size="lg">
            View All Projects on GitHub
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
