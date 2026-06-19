import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background — secondary dark */}
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" aria-hidden="true"></div>

      {/* Background glows */}
      <div
        className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(13, 148, 136, 0.03)' }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 left-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(13, 148, 136, 0.03)' }}
        aria-hidden="true"
      ></div>

      <Container className="relative">
        {/* Header */}
        <SectionHeader
          label="Testimonials"
          title="What Clients Are Saying"
          subtitle="Don't just take my word for it — here's what the people I've worked with have to say."
          className="mb-14"
        />

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center gap-8 md:gap-12 text-left">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '80+', label: 'Reviews' },
            { value: '100%', label: 'Repeat Clients' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="font-heading font-bold text-accent-navy text-[28px] leading-none">
                {item.value}
              </p>
              <p className="text-text-muted text-[13px]">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
