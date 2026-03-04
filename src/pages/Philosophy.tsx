
export default function Philosophy() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-[#F5F5F5] antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-20 py-16 lg:py-32">
            {/* Philosophy Core Message Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
              {/* Sidebar Label Column */}
              <div className="lg:col-span-3 border-t border-slate-800 pt-6">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Philosophy</span>
              </div>
              {/* Main Content Column */}
              <div className="lg:col-span-9">
                <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-12">
                  No trends for the sake of it. No visual noise. Only structured digital systems designed to convert traffic into measurable growth.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                  <p>
                    I believe that every pixel should serve a purpose. In an era of fleeting trends, I focus on building enduring visual languages and robust design systems. By stripping away the unnecessary, we create space for what truly matters: your message and your user's journey.
                  </p>
                  <p>
                    Design is not decoration; it is a communication tool. Our approach is rooted in data-driven decisions and cognitive psychology, ensuring that the aesthetic excellence of a product is always balanced by its functional performance and business objectives.
                  </p>
                </div>
              </div>
            </div>
            {/* Stats/Performance Grid */}
            <div className="mt-24 lg:mt-48 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group border border-slate-800 p-8 rounded-xl hover:bg-slate-800/20 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-slate-500 font-medium">Conversion Lift</span>
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-bold tracking-tight">+45%</p>
                  <p className="text-green-500 text-sm font-medium">+12% year-over-year</p>
                </div>
              </div>
              <div className="group border border-slate-800 p-8 rounded-xl hover:bg-slate-800/20 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-slate-500 font-medium">Page Load Speed</span>
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-bold tracking-tight">&lt;1.2s</p>
                  <p className="text-primary text-sm font-medium">Global average delivery</p>
                </div>
              </div>
              <div className="group border border-slate-800 p-8 rounded-xl hover:bg-slate-800/20 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-slate-500 font-medium">User Retention</span>
                  <span className="material-symbols-outlined text-primary">group</span>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-bold tracking-tight">+30%</p>
                  <p className="text-green-500 text-sm font-medium">+5% avg increase</p>
                </div>
              </div>
            </div>
            {/* Visual Element: Large Type / Background Contrast */}
            <div className="mt-32 lg:mt-64 relative py-32 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-primary/5 opacity-50" />
              <div className="relative z-10 text-center px-4">
                <h2 className="text-primary text-[10vw] font-black uppercase tracking-tighter opacity-10 leading-none select-none">
                  PERFORMANCE
                </h2>
                <div className="max-w-2xl mx-auto -mt-8 md:-mt-16">
                  <h3 className="text-2xl md:text-4xl font-bold mb-6">Built for results.</h3>
                  <p className="text-slate-400 text-lg">
                    We strip away the ego of the designer to reveal the intent of the brand. Our systems are built to scale, endure, and most importantly, perform.
                  </p>
                </div>
              </div>
            </div>
            {/* Footer CTA */}
            <footer className="mt-32 border-t border-slate-800 pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-slate-500 text-sm mb-2 uppercase tracking-widest">Available for projects</p>
                <a className="text-2xl font-bold hover:text-primary transition-colors underline decoration-slate-700 underline-offset-8" href="mailto:hello@subhankhan.com">hello@subhankhan.com</a>
              </div>
              <div className="flex gap-6">
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Twitter</a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">LinkedIn</a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Dribbble</a>
              </div>
            </footer>
          </main>
        </div>
      </div>

    </div>
  );
}
