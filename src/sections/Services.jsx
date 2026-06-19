import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background — secondary dark */}
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" aria-hidden="true"></div>

      {/* Background glow — center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(13, 148, 136, 0.03)' }}
        aria-hidden="true"
      ></div>

      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          label="Services"
          title="What I Bring to the Table"
          subtitle="From concept to launch, I offer end-to-end design and development services tailored to your unique goals."
          className="mb-14"
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              iconType={service.iconType}
              title={service.title}
              description={service.description}
              tags={service.tags}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-left">
          <p className="text-text-muted text-[15px] mb-4">
            Looking for something specific? Let's talk about your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-teal font-semibold text-[15px] hover:gap-4 transition-all duration-300 group"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;
