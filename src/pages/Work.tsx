import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StickyFooter from "../components/ui/footer";

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 group">
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-2xl md:text-4xl font-black uppercase transition-colors duration-300 ${isOpen ? 'text-[#9EFF00]' : 'group-hover:text-white text-slate-500'}`}>
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="material-symbols-outlined text-primary"
        >
          expand_more
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 text-slate-400 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const archiveData = [
    {
      title: "Web Development",
      projects: [
        { name: "Al-Tawafuk Contracting", url: "https://www.al-tawafuk.com" },
        { name: "Pathan Gadget", url: "https://pathan-gadget.vercel.app" },
        { name: "TV Wale", url: "https://tvwale.co.in/" }
      ]
    },
    {
      title: "Digital Marketing",
      projects: [
        { name: "Sport Track Fitness", url: "https://sporttrackfitness.in/" },
        { name: "Avtar Nashamukti Kendra", url: "https://avtarnashamuktikendra.com/" }
      ]
    },
    {
      title: "Social Media",
      projects: [
        { name: "Full Presence Analytics & Case Studies", url: "https://docs.google.com/spreadsheets/d/1-oC0oNICvYR1MMdpwoUK3uwBxA9md94eQYO4npoIKaQ/edit?gid=1342725660#gid=1342725660" }
      ]
    }
  ];
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-[#F5F5F5] antialiased">
      <div>
        {/* Navigation */}

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          {/* Hero Section */}
          <section className="grid-12 mb-16 md:mb-32">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8">
                Selected <br /> <span className="text-primary italic">Portfolio</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                A curated archive of editorial projects, digital experiences, and brand identities developed between 2020 and 2024.
              </p>
            </div>
          </section>
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-8">
            <button className="px-6 py-2 bg-primary text-background-dark text-xs font-bold uppercase tracking-widest">All Work</button>
            <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">Editorial</button>
            <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">Digital</button>
            <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">Branding</button>
          </div>
          {/* Project Grid */}
          <div className="space-y-24 md:space-y-40">
            {/* Featured Project 01 */}
            <article className="grid-12 group cursor-pointer" onClick={() => window.open("https://www.al-tawafuk.com", "_blank")}>
              <div className="col-span-12 md:col-span-7 overflow-hidden">
                <div className="aspect-[16/10] bg-slate-800 transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist editorial magazine layout with bold typography" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-end pt-8 md:pt-0 md:pl-12">
                <div className="flex items-center gap-4 text-primary mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest">01 / Corporate</span>
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">2024</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight group-hover:text-primary transition-colors">Al-Tawafuk Contracting</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Corporate website development, establishing a robust digital identity and comprehensive SEO strategy.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform text-white">
                    Visit Website <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
            {/* Project 02 & 03 Split */}
            <div className="grid-12">
              {/* Project 02 */}
              <article className="col-span-12 md:col-span-6 group cursor-pointer" onClick={() => window.open("https://sporttrackfitness.in", "_blank")}>
                <div className="aspect-square md:aspect-square bg-slate-800 mb-8 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Monochrome digital interface design on a laptop screen" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop")' }}>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">02 / Digital</span>
                    <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors">Sport Track Fitness</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">2024</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Website development and strategic SEO optimization for a fitness platform, driving targeted organic traffic.
                </p>
              </article>
              {/* Project 03 */}
              <article className="col-span-12 md:col-span-6 group cursor-pointer mt-12 md:mt-0" onClick={() => window.open("https://pathan-gadget.vercel.app", "_blank")}>
                <div className="aspect-square bg-slate-800 mb-8 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Conceptual branding mockups on black texture background" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")' }}>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">03 / E-Commerce</span>
                    <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors">Pathan Gadget</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">2024</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  High-performance modern E-Commerce development built with React and advanced digital storefront architecture.
                </p>
              </article>
            </div>
            {/* Full Width Project 04 */}
            <article className="group cursor-pointer relative">
              <div className="aspect-square md:aspect-[21/9] bg-slate-800 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" data-alt="Modernist architecture photograph with dramatic shadows" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop")' }}>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-background-dark/20 group-hover:bg-transparent transition-colors">
                <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4">Featured Highlight</span>
                <h3 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">Modernist Review</h3>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-white" />
                  <p className="text-sm font-bold uppercase tracking-widest italic">Print — 2022</p>
                  <span className="h-px w-8 bg-white" />
                </div>
              </div>
            </article>
            {/* Work Archive Accordion */}
            <div className="border-t border-white/10 pt-20">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-12">Project Archive</h4>
              <div className="max-w-4xl">
                {archiveData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="grid gap-4">
                      {item.projects.map((project, pIndex) => (
                        <a
                          key={pIndex}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/5 hover:border-[#9EFF00]/30 hover:bg-white/10 transition-all group/item"
                        >
                          <div>
                            <p className="text-[#9EFF00] text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover/item:opacity-100 transition-opacity">Launch Site</p>
                            <span className="text-lg md:text-xl font-bold uppercase transition-colors group-hover/item:text-white">
                              {project.name}
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-[#9EFF00] opacity-0 group-hover/item:opacity-100 transition-all translate-x-[-10px] group-hover/item:translate-x-0">
                            arrow_right_alt
                          </span>
                        </a>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <StickyFooter />
      </div>

    </div>
  );
}
