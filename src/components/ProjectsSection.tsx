import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  imageTop: string;
  imageBottom: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'E-Commerce Website',
    name: 'SAGO',
    description:
      'A simple shopping experience for girls with browsing, cart, and order-focused flows built for a clean commercial storefront feel.',
    stack: ['Shopping UI', 'Cart Flow', 'Commercial'],
    imageTop: '/sago-home.png',
    imageBottom: '/sago-catalog.png',
  },
  {
    number: '02',
    category: 'Luxury Fashion Store',
    name: 'JACKOO',
    description:
      'A premium store experience for highly valuable suites and dresses, designed to feel polished, structured, and product-first.',
    stack: ['Luxury Fashion', 'Product Grid', 'Storefront'],
    imageTop: '/jackoo-home.png',
    imageBottom: '/jackoo-products.png',
  },
  {
    number: '03',
    category: 'Commercial E-Commerce',
    name: 'NIGHT MOON',
    description:
      'A dark, high-contrast ecommerce concept with separate shopper and admin flows, local backend thinking, and a bold brand presence.',
    stack: ['Admin Portal', 'Shop Flow', 'Commercial'],
    imageTop: '/nightmoon-home.png',
    imageBottom: '/nightmoon-login.png',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 h-[82vh] w-full md:top-32"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto flex h-full w-full flex-col gap-4 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex min-w-0 w-full flex-row items-start gap-3 sm:gap-6 md:gap-10">
            <div
              className="shrink-0 font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1 sm:gap-3 sm:pt-3 md:pt-4">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="max-w-3xl font-light leading-relaxed text-[#D7E2EA]/70"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#D7E2EA]/75 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-1 min-h-0 gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex h-full flex-col justify-between rounded-[32px] border border-[#D7E2EA]/10 bg-[#111111] p-5 sm:rounded-[40px] sm:p-6 md:p-7">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/45">
                Portfolio Highlight
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-[#D7E2EA]/75 sm:text-base md:text-lg">
                {project.name} is presented as a showcase project with a focus on clean UI, strong hierarchy, and a commercial feel that matches the product style.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/45">Type</p>
                <p className="mt-2 text-sm font-medium text-[#D7E2EA] sm:text-base">
                  {project.category}
                </p>
              </div>
              <div className="rounded-[24px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/45">Focus</p>
                <p className="mt-2 text-sm font-medium text-[#D7E2EA] sm:text-base">
                  User flow and product showcase
                </p>
              </div>
            </div>
          </div>

          <div className="grid h-full min-h-0 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
            <div className="overflow-hidden rounded-[32px] border border-[#D7E2EA]/10 sm:rounded-[40px]">
              <img
                src={project.imageTop}
                alt={`${project.name} screenshot 1`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="overflow-hidden rounded-[32px] border border-[#D7E2EA]/10 sm:rounded-[40px]">
              <img
                src={project.imageBottom}
                alt={`${project.name} screenshot 2`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 w-full rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
