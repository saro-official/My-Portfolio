import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const PROFESSIONAL_SUMMARY =
  'Motivated B.Tech Information Technology student with a CGPA of 8.3 and hands-on experience in front-end development, Python programming, and cloud computing. Completed a certified internship in front-end development and earned certifications in Prompt Engineering and AWS Cloud Computing. Passionate about building useful software solutions with a long-term goal of becoming a Software Engineer or Cloud Solutions Architect.';

const TECHNICAL_SKILLS = [
  {
    label: 'Programming Languages',
    items: ['Python', 'C'],
  },
  {
    label: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'Database',
    items: ['MySQL'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker Basics'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];

const EXTRA_SECTIONS = [
  {
    label: 'Certifications',
    items: ['Front-End Development Internship', 'Prompt Engineering', 'AWS Cloud Computing'],
  },
  {
    label: 'Soft Skills',
    items: ['Adaptability', 'Positive Attitude', 'Decision Making', 'Team Work', 'Smart Thinking'],
  },
  {
    label: 'Languages',
    items: ['Tamil', 'English'],
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[1%] top-[4%] w-[60px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="h-auto w-full"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[55px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="h-auto w-full"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[1%] top-[4%] w-[60px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="h-auto w-full"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[65px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="h-auto w-full"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <AnimatedText
            text={PROFESSIONAL_SUMMARY}
            className="max-w-[680px] font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.15} className="w-full max-w-5xl">
            <div className="flex flex-col gap-5 sm:gap-6">
              {TECHNICAL_SKILLS.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5"
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:w-48 sm:shrink-0 sm:text-right">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1 text-sm text-[#D7E2EA]/80 transition-colors hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.22} className="w-full max-w-5xl">
            <div className="grid gap-4 md:grid-cols-3">
              {EXTRA_SECTIONS.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[28px] border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] p-5 text-left"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/45">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D7E2EA]/15 px-3 py-1 text-sm text-[#D7E2EA]/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
