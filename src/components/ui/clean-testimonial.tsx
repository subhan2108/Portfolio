import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

const testimonials = [
    {
        quote: "Subhan's attention to detail in web architecture is truly elite. The SEO growth we saw was beyond our expectations.",
        author: "Mohammed Al-Qahtani",
        role: "Director of Systems",
        company: "Al-Tawafuk Contracting",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
        quote: "The E-commerce solution he built for us is blazing fast. Conversion rates improved by 40% in just two months.",
        author: "Jane Sterling",
        role: "CEO",
        company: "Sterling Goods",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
        quote: "A rare developer who understands both scaling code and strategic digital marketing. A complete growth partner.",
        author: "Rahul Sharma",
        role: "Marketing Head",
        company: "Onlinks Web",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
]

function usePreloadImages(images: string[]) {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [images])
}

function SplitText({ text }: { text: string }) {
    const words = text.split(" ")

    return (
        <span className="inline">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.4,
                        delay: i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}

export function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    usePreloadImages(testimonials.map((t) => t.avatar))

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY],
    )

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const currentTestimonial = testimonials[activeIndex]

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-2xl mx-auto py-20 px-8 bg-transparent"
            style={{ cursor: "none" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNext}
        >
            {/* Custom magnetic cursor */}
            <motion.div
                className="pointer-events-none absolute z-[100] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="relative rounded-full bg-white flex items-center justify-center"
                    animate={{
                        width: isHovered ? 110 : 0,
                        height: isHovered ? 110 : 0,
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? [1, 1.05, 1] : 0,
                    }}
                    transition={{
                        width: { type: "spring", damping: 20, stiffness: 200 },
                        height: { type: "spring", damping: 20, stiffness: 200 },
                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse opacity-40 scale-110" />
                    <motion.span
                        className="text-black text-xs font-black tracking-[0.2em] uppercase"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        NEXT
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Floating index indicator */}
            <motion.div
                className="absolute top-8 right-8 flex items-baseline gap-2 font-mono text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.span
                    className="text-3xl font-black text-primary"
                    key={activeIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {String(activeIndex + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-500">{String(testimonials.length).padStart(2, "0")}</span>
            </motion.div>

            {/* Stacked avatar previews for other testimonials */}
            <motion.div
                className="absolute top-8 left-8 flex -space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.6 }}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-background-dark overflow-hidden transition-all duration-300 ${i === activeIndex ? "ring-2 ring-primary ring-offset-2 ring-offset-background-dark" : "grayscale opacity-50"
                            }`}
                        whileHover={{ scale: 1.1, opacity: 1 }}
                    >
                        <img src={t.avatar || "/placeholder.svg"} alt={t.author} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Main content */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.blockquote
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="text-2xl md:text-4xl font-black leading-[1.1] tracking-tight text-white uppercase italic"
                    >
                        <SplitText text={`"${currentTestimonial.quote}"`} />
                    </motion.blockquote>
                </AnimatePresence>

                {/* Author with reveal line */}
                <motion.div className="mt-16 relative" layout>
                    <div className="flex items-center gap-6">
                        {/* Avatar container with all images stacked */}
                        <div className="relative w-16 h-16">
                            <motion.div
                                className="absolute -inset-2 rounded-full border border-primary/40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            {testimonials.map((t, i) => (
                                <motion.img
                                    key={t.avatar}
                                    src={t.avatar}
                                    alt={t.author}
                                    className="absolute inset-0 w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500 border-2 border-primary/20"
                                    animate={{
                                        opacity: i === activeIndex ? 1 : 0,
                                        zIndex: i === activeIndex ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            ))}
                        </div>

                        {/* Author info with accent line */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="relative pl-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_10px_#9EFF00]"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ originY: 0 }}
                                />
                                <span className="block text-lg font-black text-white uppercase tracking-tighter">
                                    {currentTestimonial.author}
                                </span>
                                <span className="block text-xs text-primary mt-1 font-black uppercase tracking-[0.2em]">
                                    {currentTestimonial.role} — {currentTestimonial.company}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Progress bar */}
                <div className="mt-20 h-px bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_8px_#9EFF00]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>
            </div>

            {/* Keyboard hint */}
            <motion.div
                className="absolute bottom-8 left-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.6 : 0.2 }}
                transition={{ duration: 0.3 }}
            >
                <Sparkles className="size-3 text-primary animate-pulse" />
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">Click to cycle</span>
            </motion.div>
        </div>
    )
}
