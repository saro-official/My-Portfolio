import { ArrowUpRight, GraduationCap, Mail, MapPin, MessageCircle } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saravanan111g@gmail.com',
    href: 'mailto:saravanan111g@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 73976 83440',
    href: 'https://wa.me/917397683440',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chengalpattu, Tamil Nadu',
    href: 'https://www.google.com/maps/search/Chengalpattu,+Tamil+Nadu',
  },
  {
    icon: GraduationCap,
    label: 'College',
    value: 'Tagore Engineering College',
    href: '#about',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-4 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get in touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mb-12 text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Pick whichever channel suits you
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          const isExternal = method.href.startsWith('http');

          return (
            <FadeIn key={method.label} delay={index * 0.1} y={30}>
              <a
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex h-full flex-col justify-between gap-8 rounded-[28px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/60 hover:bg-[#1a1a20] sm:gap-10 sm:rounded-[32px] sm:p-7 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#D7E2EA]/20 p-3 transition-colors duration-300 group-hover:border-[#D7E2EA]/50 sm:p-3.5">
                    <Icon className="text-[#D7E2EA]" size={22} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#D7E2EA]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <span
                    className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
                  >
                    {method.label}
                  </span>
                  <span
                    className="break-all font-medium text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:mt-24 sm:flex-row sm:justify-between md:mt-28">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            (c) 2026 SARAVANAN M
          </span>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            Designed and built in Chengalpattu
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
