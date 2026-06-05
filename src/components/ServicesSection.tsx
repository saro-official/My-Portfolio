import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Building clean, responsive websites with HTML, CSS, and JavaScript while keeping the structure simple, fast, and easy to maintain.',
  },
  {
    number: '02',
    title: 'Python Development',
    description:
      'Using Python for scripting, problem solving, and project logic with a focus on practical learning and real-world utility.',
  },
  {
    number: '03',
    title: 'Front-End Development',
    description:
      'Creating user-friendly interfaces with React and modern component patterns so the app feels polished across screen sizes.',
  },
  {
    number: '04',
    title: 'Prompt Engineering',
    description:
      'Designing prompts that guide AI systems toward reliable, useful outputs for content, assistance, and workflow support.',
  },
  {
    number: '05',
    title: 'Gen AI Integration',
    description:
      'Connecting AI capabilities into real products and workflows so features feel practical, helpful, and ready to ship.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(index === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
                <h3
                  className="relative inline-block w-fit font-medium uppercase leading-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.65,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
