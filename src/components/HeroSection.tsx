import { useEffect } from 'react';
import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  useEffect(() => {
    let fired = false;

    const goToAbout = () => {
      if (fired) return;
      fired = true;
      document.getElementById('about')?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (fired || event.deltaY <= 0 || window.scrollY > 50) return;
      event.preventDefault();
      goToAbout();
    };

    const onKey = (event: KeyboardEvent) => {
      if (fired || window.scrollY > 50) return;
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        goToAbout();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 flex h-full flex-col">
        <FadeIn delay={0} y={-20}>
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
            <ul className="flex items-center gap-5 sm:gap-8 md:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-xs"
            >
              Contact
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-1 items-center">
          <div className="w-full max-w-7xl px-6 md:px-10">
            <FadeIn delay={0.3} y={20}>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/60 sm:text-xs">
                Portfolio | 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40}>
              <h1
                className="font-black uppercase leading-[0.88] tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 12vw, 10.5rem)' }}
              >
                SARAVANAN<br />M
              </h1>
            </FadeIn>

            <FadeIn delay={0.85} y={20}>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/75 sm:text-xs md:mt-7 md:text-sm">
                Software Engineer | Front-End Developer | Cloud Enthusiast
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="flex items-end justify-between px-6 pb-7 md:px-10 md:pb-12 sm:pb-10">
          <FadeIn delay={1.1} y={20}>
            <a href="#about" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white sm:text-[10px]">
                Scroll
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-white"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={1.1} y={20}>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-xs"
            >
              Say hello
            </a>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
