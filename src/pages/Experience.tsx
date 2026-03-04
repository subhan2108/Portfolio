
export default function Experience() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-[#F5F5F5] antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Navigation */}

          <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12 md:py-24">
            {/* Header Section */}
            <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
              <div className="col-span-12 md:col-span-8">
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
                  Experience
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  A journey through editorial design and visual strategy, building high-impact platforms for global publications.
                </p>
              </div>
            </div>
            {/* Timeline Layout */}
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Item 1 */}
              <div className="grid grid-cols-12 gap-6 group">
                <div className="col-span-12 md:col-span-3">
                  <span className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">2021 — Present</span>
                </div>
                <div className="col-span-12 md:col-span-9 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Lead Designer at Peak Strategy</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Spearheaded the complete visual rebranding for three Fortune 500 editorial platforms. Established new design systems that increased reader engagement by 40% and streamlined cross-functional production workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Design Systems</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Visual Identity</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">UX Strategy</span>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="grid grid-cols-12 gap-6 group">
                <div className="col-span-12 md:col-span-3">
                  <span className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">2018 — 2021</span>
                </div>
                <div className="col-span-12 md:col-span-9 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Senior Editorial Designer at Mode Media</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Defined digital layout standards for high-traffic lifestyle publications. Managed a team of five junior designers and oversaw the art direction for over 50 monthly digital feature covers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Art Direction</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Typography</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Leadership</span>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="grid grid-cols-12 gap-6 group">
                <div className="col-span-12 md:col-span-3">
                  <span className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">2016 — 2018</span>
                </div>
                <div className="col-span-12 md:col-span-9 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Visual Designer at Creative Pulse</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Executed multi-channel brand campaigns with a rigorous focus on typography and grid systems. Developed modular grid-based components that reduced asset creation time by 25%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Grid Systems</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Layout Design</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Marketing</span>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="grid grid-cols-12 gap-6 group">
                <div className="col-span-12 md:col-span-3">
                  <span className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">2014 — 2016</span>
                </div>
                <div className="col-span-12 md:col-span-9 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Junior Designer at Alpha Studio</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Assisted in the production of monthly print and digital supplements. Mastered the intricacies of print preparation, color correction, and publication asset management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Print Design</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Pre-press</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">Production</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Expertise Section */}
            <div className="mt-32 pt-16 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-3xl font-bold mb-12">Expertise &amp; Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Strategy</h4>
                  <p className="text-slate-600 dark:text-slate-400">Editorial Strategy, Content Auditing, Brand Positioning, Design Systems Governance.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Design</h4>
                  <p className="text-slate-600 dark:text-slate-400">Advanced Typography, Complex Grid Systems, Visual Storytelling, Responsive Digital Layouts.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Tools</h4>
                  <p className="text-slate-600 dark:text-slate-400">Figma, Adobe Creative Suite, Webflow, Readymag, Motion Design (After Effects).</p>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <footer className="max-w-7xl mx-auto w-full px-6 md:px-20 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">© 2024 Subhan Khan. All rights reserved.</p>
              </div>
              <div className="flex gap-6">
                <a className="text-sm font-medium hover:text-primary" href="#">LinkedIn</a>
                <a className="text-sm font-medium hover:text-primary" href="#">Behance</a>
                <a className="text-sm font-medium hover:text-primary" href="#">Email</a>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </div>
  );
}
