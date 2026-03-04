import { useState, useEffect } from 'react';
import TeamMembers from '../components/TeamMembers';
import ParallaxSection from '../components/ui/parallax-scrolling-effect';
import { InteractiveScrollingHero } from '../components/ui/interactive-scrolling-story-component';
import StickyFooter from '../components/ui/footer';
import { Testimonial } from '../components/ui/clean-testimonial';
import { Timeline } from '../components/ui/timeline';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandOnHover from '../components/ui/expand-cards';
import { ChevronDown } from 'lucide-react';
import HomeSkeleton from '../components/HomeSkeleton';

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 group">
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-2xl md:text-5xl font-black uppercase transition-colors duration-300 ${isOpen ? 'text-[#9EFF00]' : 'group-hover:text-white text-slate-500'}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#9EFF00]"
        >
          <ChevronDown className="size-8" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial sequence loading for the wow factor
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomeSkeleton />;
  }

  const archiveData = [
    {
      title: "Web Development",
      projects: [
        { name: "Al-Tawafuk Contracting", url: "https://www.al-tawafuk.com", type: "Corporate / Django" },
        { name: "Pathan Gadget", url: "https://pathan-gadget.vercel.app", type: "E-Commerce / React" },
        { name: "TV Wale", url: "https://tvwale.co.in/", type: "Dynamic Portal" }
      ]
    },
    {
      title: "Digital Marketing",
      projects: [
        { name: "Sport Track Fitness", url: "https://sporttrackfitness.in/", type: "SEO / Performance" },
        { name: "Avtar Nashamukti Kendra", url: "https://avtarnashamuktikendra.com/", type: "Lead Gen / Ads" }
      ]
    },
    {
      title: "Social Media",
      projects: [
        { name: "Full Presence Analytics & Case Studies", url: "https://docs.google.com/spreadsheets/d/1-oC0oNICvYR1MMdpwoUK3uwBxA9md94eQYO4npoIKaQ/edit?gid=1342725660#gid=1342725660", type: "Strategy / SMO" }
      ]
    }
  ];
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-[#F5F5F5] antialiased">
      <div>

        <main>
          {/* New Interactive Scrolling Hero Section */}
          <InteractiveScrollingHero />

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[1rem]">
            {/* Selected Work (Stacking Cards Layout) */}
            <section className="py-20 md:py-32" id="work">
              <div className="flex items-baseline justify-between mb-12 md:mb-20 border-b border-white/10 pb-8">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">Selected Work</h3>
                <span className="text-slate-500 font-mono text-sm">01 — 04</span>
              </div>
              <div className="space-y-[10vh]">
                {/* Category 1: Web Development */}
                <div className="stacking-card bg-background-dark pt-8 cursor-pointer group/card" id="web-dev">
                  <div className="group relative overflow-hidden border border-white/10 rounded-3xl bg-[#0D0D0D]">
                    <div className="aspect-square md:aspect-[21/9] w-full relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-40 group-hover/card:opacity-60"
                        alt="High-end web development code"
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                        loading="lazy"
                      />
                      {/* Title Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent">
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="text-[#9EFF00] text-xs font-black uppercase tracking-[0.5em] mb-4"
                        >
                          SERVICE — 01
                        </motion.span>
                        <h4 className="text-[8vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none text-white text-center">
                          Web <span className="text-transparent border-white stroke-white" style={{ WebkitTextStroke: '2px white' }}>Development</span>
                        </h4>
                      </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-[#0D0D0D]">
                      <p className="text-slate-400 text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed font-medium">
                        Crafting high-performance, growth-focused web architectures with a focus on speed, precision, and modern design standards.
                      </p>
                      <button className="flex items-center gap-4 py-3 px-8 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#9EFF00] transition-all duration-300 active:scale-95 whitespace-nowrap">
                        Explore Work
                        <span className="material-symbols-outlined text-[16px]">north_east</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category 2: Digital Marketing */}
                <div className="stacking-card bg-background-dark pt-8 cursor-pointer group/card" id="digital-marketing">
                  <div className="group relative overflow-hidden border border-white/10 rounded-3xl bg-[#0D0D0D]">
                    <div className="aspect-square md:aspect-[21/9] w-full relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-40 group-hover/card:opacity-60"
                        alt="Digital marketing analytics"
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                        loading="lazy"
                      />
                      {/* Title Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent">
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="text-[#9EFF00] text-xs font-black uppercase tracking-[0.5em] mb-4"
                        >
                          SERVICE — 02
                        </motion.span>
                        <h4 className="text-[8vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none text-white text-center">
                          Digital <span className="text-transparent border-white stroke-white" style={{ WebkitTextStroke: '2px white' }}>Marketing</span>
                        </h4>
                      </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-[#0D0D0D]">
                      <p className="text-slate-400 text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed font-medium">
                        Driving measurable business growth through data-backed SEO, precision-targeted ads, and strategic visibility optimization.
                      </p>
                      <button className="flex items-center gap-4 py-3 px-8 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#9EFF00] transition-all duration-300 active:scale-95 whitespace-nowrap">
                        Explore Growth
                        <span className="material-symbols-outlined text-[16px]">north_east</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category 3: Social Media Handling */}
                <div className="stacking-card bg-background-dark pt-8 cursor-pointer group/card" id="social-media">
                  <div className="group relative overflow-hidden border border-white/10 rounded-3xl bg-[#0D0D0D]">
                    <div className="aspect-square md:aspect-[21/9] w-full relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-40 group-hover/card:opacity-60"
                        alt="Instagram and LinkedIn social media strategy"
                        src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop"
                        loading="lazy"
                      />
                      {/* Title Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent">
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="text-[#9EFF00] text-xs font-black uppercase tracking-[0.5em] mb-4"
                        >
                          SERVICE — 03
                        </motion.span>
                        <h4 className="text-[8vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none text-white text-center">
                          Social Media <br /><span className="text-transparent border-white stroke-white" style={{ WebkitTextStroke: '2px white' }}>Management</span>
                        </h4>
                      </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-[#0D0D0D]">
                      <p className="text-slate-400 text-sm md:text-base max-w-xl text-center md:text-left leading-relaxed font-medium">
                        Building brand authority and emotional connections through high-quality content production and strategic community engagement.
                      </p>
                      <button className="flex items-center gap-4 py-3 px-8 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#9EFF00] transition-all duration-300 active:scale-95 whitespace-nowrap">
                        Explore Presence
                        <span className="material-symbols-outlined text-[16px]">north_east</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Home Project Archive Section */}
            <section className="py-24 md:py-32 border-t border-white/5" id="archive">
              <div className="flex items-baseline justify-between mb-16">
                <h3 className="text-3xl font-bold uppercase tracking-tighter text-white/50">Project Archive</h3>
                <span className="text-slate-500 font-mono">05 — 10</span>
              </div>

              <div className="max-w-[1000px]">
                {archiveData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {item.projects.map((project, pIndex) => (
                        <a
                          key={pIndex}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#9EFF00]/40 hover:bg-white/[0.07] transition-all group/item"
                        >
                          <div>
                            <span className="text-[#9EFF00] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover/item:opacity-100 transition-all translate-y-2 group-hover/item:translate-y-0">Launch Experience</span>
                            <div className="flex items-center gap-4">
                              <h5 className="text-xl md:text-2xl font-black uppercase text-white/80 group-hover/item:text-white transition-colors">{project.name}</h5>
                              <span className="text-slate-500 text-xs font-mono">/ {project.type}</span>
                            </div>
                          </div>
                          <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover/item:border-[#9EFF00] group-hover/item:bg-[#9EFF00] transition-all">
                            <span className="material-symbols-outlined text-white group-hover/item:text-black transition-colors">north_east</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-24 md:py-32 bg-[#080808] border-y border-white/5 overflow-hidden" id="services">
              <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center w-full mb-16 md:mb-24">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-[#9EFF00] font-black uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">Services Architecture</p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                      What I <br className="hidden md:block" /><span className="text-white/40 italic">Offer</span>
                    </h2>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ExpandOnHover />
                </motion.div>
              </div>
            </section>


            <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2940&auto=format&fit=crop">
              {/* About Section */}
              <section className="py-20 md:py-32" id="about">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 lg:mb-0">About Me</h3>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-8 text-white">
                      I am a <span className="text-primary italic">Web Developer</span> and <span className="border-b-4 border-primary">SEO Specialist</span> based in New Delhi with hands-on experience in building responsive websites and optimizing them for search engines.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed mb-8">
                      I specialize in HTML, CSS, JavaScript, React, Django, WordPress, and technical/on-page/off-page SEO, along with Google and Meta Ads for digital marketing. With a strong interest in full stack development and digital growth strategies, I focus on creating performance-driven websites that improve visibility, traffic, and business growth.
                    </p>
                  </div>
                </div>
              </section>

              <section className="py-20 md:py-32 border-t border-white/10" id="journey">
                <Timeline data={[
                  {
                    title: "2024 - Present",
                    content: (
                      <div>
                        <h4 className="text-3xl font-black uppercase text-white mb-4 tracking-tighter">Web Developer</h4>
                        <p className="text-[#9EFF00] font-bold text-sm mb-6 uppercase tracking-widest">Al-Tawafuk Contracting</p>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-8">
                          Leading the digital transformation of enterprise-level systems. Contributing to full-stack website development, advanced SEO optimization for high-growth fitness platforms, and strategic social media management for business growth.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                            alt="Project"
                            className="rounded-lg h-40 w-full object-cover border border-white/5"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
                            alt="Project"
                            className="rounded-lg h-40 w-full object-cover border border-white/5"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "2023 - 2024",
                    content: (
                      <div>
                        <h4 className="text-3xl font-black uppercase text-white mb-4 tracking-tighter">SEO Specialist Intern</h4>
                        <p className="text-[#9EFF00] font-bold text-sm mb-6 uppercase tracking-widest">Onlinks Web Service Pvt Ltd</p>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-8">
                          Architected and executed search engine optimization strategies that increased organic visibility by over 150%. Focused on technical SEO architecture, on-page content strategy, and high-authority link building campaigns.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono uppercase tracking-widest bg-white/5 p-4 rounded-lg w-fit">
                          <span className="text-slate-300">Technical SEO</span>
                          <span className="text-[#9EFF00]">/</span>
                          <span className="text-slate-300">Google Ads</span>
                          <span className="text-[#9EFF00]">/</span>
                          <span className="text-slate-300">Content Strategy</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Special Projects",
                    content: (
                      <div>
                        <h4 className="text-3xl font-black uppercase text-white mb-4 tracking-tighter">E-Commerce Architecture</h4>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed mb-6">
                          Developed high-performance React frontends including the Pathan Gadget application, achieving <span className="text-white">99+ Lighthouse scores</span> and seamless user experiences.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <img
                            src="https://images.unsplash.com/photo-1627389955609-7020dec776f2?q=80&w=2070&auto=format&fit=crop"
                            alt="Gadget Project"
                            className="rounded-lg h-40 w-full object-cover border border-white/5 opacity-80"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                            alt="SEO Stats"
                            className="rounded-lg h-40 w-full object-cover border border-white/5 opacity-80"
                          />
                        </div>
                      </div>
                    )
                  },
                ]} />
              </section>
            </ParallaxSection>
            {/* Team Members Section */}
            <TeamMembers />

            {/* Testimonials Section */}
            <section className="py-24 md:py-48 bg-[#0D0D0D] border-t border-white/5 overflow-hidden" id="testimonials">
              <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-12 gap-12 items-center">
                  <div className="col-span-12 lg:col-span-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <p className="text-[#9EFF00] font-black uppercase tracking-[0.4em] mb-6 text-sm">Validations</p>
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                        Kind <br /><span className="text-white/40 italic">Words</span>
                      </h2>
                      <p className="text-slate-400 font-medium text-lg max-w-sm">
                        Trust built through consistent delivery of performance-driven digital solutions.
                      </p>
                    </motion.div>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
            </section>


            {/* Contact Section */}
            <section className="py-32 border-t border-white/10 mb-20" id="contact">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-10">
                  <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tight-heading mb-16">
                    Let’s Build Something That Converts.
                  </h2>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                    <a className="text-3xl md:text-4xl font-bold border-b-2 border-primary pb-2 hover:text-primary transition-colors" href="mailto:hello@subhankhan.com">
                      hello@subhankhan.com
                    </a>
                    <div className="flex gap-8 uppercase text-sm font-bold tracking-[0.2em]">
                      <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                        LinkedIn <span className="material-symbols-outlined text-[18px]">north_east</span>
                      </a>
                      <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                        Twitter <span className="material-symbols-outlined text-[18px]">north_east</span>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* New Interactive Sticky Footer Section */}
        <StickyFooter />
      </div>

    </div>
  );
}
