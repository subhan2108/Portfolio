import { useState, useEffect, useRef } from 'react';

// --- Data for Subhan Khan's services ---
const slidesData = [
    {
        title: "High Performance Web Development",
        description: "Building fast, responsive, and secure web applications using React, Django, and modern tech stacks that rank well and convert better.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        bgColor: "#0D0D0D", // background-dark
        textColor: "#F8F8F5", // text color
        accentColor: "#9EFF00", // primary lime
    },
    {
        title: "SEO That Actually Grows Businesses",
        description: "From technical SEO audits to strategic on-page/off-page campaigns, I help your brand dominate search engines and attract organic leads.",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop",
        bgColor: "#131313", // slightly different dark
        textColor: "#F8F8F5",
        accentColor: "#9EFF00",
    },
    {
        title: "Full Stack Growth Solutions",
        description: "Merging front-end excellence with robust back-end logic. I create complete ecosystems that handle both the scales and the shadows of modern commerce.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        bgColor: "#0D0D0D",
        textColor: "#F8F8F5",
        accentColor: "#9EFF00",
    },
    {
        title: "Digital Marketing & Ad Strategies",
        description: "Leveraging Google and Meta Ads to deliver high ROI. Expert management for sports, fitness, and construction industries with measurable growth.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        bgColor: "#1a1a1a",
        textColor: "#F8F8F5",
        accentColor: "#9EFF00",
    },
];

export function InteractiveScrollingHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollableHeight = container.scrollHeight - window.innerHeight;

            // Calculate how far we've scrolled into the container
            const scrolledInContainer = -rect.top;

            const stepHeight = scrollableHeight / slidesData.length;
            const newActiveIndex = Math.min(
                slidesData.length - 1,
                Math.max(0, Math.floor(scrolledInContainer / stepHeight))
            );

            setActiveIndex(newActiveIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // No grid background pattern
    const gridPatternStyle = {};

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-visible"
            style={{ height: `${slidesData.length * 100}vh` }}
        >
            <div
                className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center transition-colors duration-700 ease-in-out overflow-hidden"
                style={{
                    backgroundColor: slidesData[activeIndex].bgColor,
                    color: slidesData[activeIndex].textColor
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-full w-full max-w-[1400px] mx-auto px-6 py-10 md:py-0">

                    {/* Left Column: Text Content */}
                    <div className="relative flex flex-col justify-center py-10 md:py-20 md:pr-10 md:border-r border-white/5">
                        {/* Pagination Bars */}
                        <div className="absolute top-24 left-0 flex space-x-2">
                            {slidesData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-0.5 rounded-full transition-all duration-500 ease-in-out ${index === activeIndex ? 'w-12 bg-[#9EFF00]' : 'w-6 bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="relative h-[250px] md:h-[400px] w-full mt-6 md:mt-10">
                            {slidesData.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${index === activeIndex
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    <span className="text-[#9EFF00] font-mono text-xs tracking-[0.4em] uppercase mb-2 md:mb-4 block">
                                        Service {index + 1}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white">
                                        {slide.title.split(' ').map((word, i) => (
                                            <span key={i} className={i === 1 ? 'text-[#9EFF00]' : ''}>{word} </span>
                                        ))}
                                    </h2>
                                    <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                                        {slide.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button removed */}
                    </div>

                    {/* Right Column: Image Content */}
                    <div className="flex items-center justify-center relative mt-4 md:mt-0" style={gridPatternStyle}>
                        <div className="relative w-full md:w-[80%] aspect-[4/3] md:aspect-square md:h-[70vh] overflow-hidden shadow-[0_0_100px_rgba(158,255,0,0.1)] grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl md:rounded-none">
                            <div
                                className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                            >
                                {slidesData.map((slide, index) => (
                                    <div key={index} className="w-full h-full relative">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="h-full w-full object-cover opacity-60"
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
