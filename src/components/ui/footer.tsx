"use client"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

// Animation variants for reusability with explicit types to satisfy lints
const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Cubic bezier instead of string "easeOut"
            staggerChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const linkVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
}

const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        },
    },
}

const backgroundVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Footer data for better maintainability (tailored for Subhan Khan)
const footerData = {
    sections: [
        { title: "Navigation", links: ["Home", "Work", "About", "Contact"] },
        { title: "Social", links: ["LinkedIn", "Twitter", "Instagram", "GitHub"] },
        { title: "Services", links: ["Web Design", "Development", "SEO", "Ads Management"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
    ],
    social: [
        { href: "https://twitter.com", label: "Twitter", icon: "X" },
        { href: "https://github.com", label: "GitHub", icon: "G" },
        { href: "https://linkedin.com", label: "LinkedIn", icon: "L" },
    ],
    title: "Subhan Khan",
    subtitle: "Designing for Growth.",
    copyright: "© 2024 All rights reserved",
}

// Reusable components
const NavSection = ({ title, links, index }: { title: string; links: string[]; index: number }) => (
    <motion.div variants={itemVariants} custom={index} className="flex flex-col gap-2">
        <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="mb-2 uppercase text-[#9EFF00] text-[10px] font-bold tracking-[0.2em] border-b border-white/10 pb-1"
        >
            {title}
        </motion.h3>
        {links.map((link, linkIndex) => (
            <motion.a
                key={linkIndex}
                variants={linkVariants}
                custom={linkIndex}
                href={`#${link.toLowerCase()}`}
                whileHover={{
                    x: 4,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="text-slate-400 hover:text-white transition-colors duration-300 font-sans text-xs group relative w-fit"
            >
                <span className="relative">
                    {link}
                    <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-[#9EFF00]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                </span>
            </motion.a>
        ))}
    </motion.div>
)

const SocialLink = ({ href, label, icon, index }: { href: string; label: string; icon: string; index: number }) => (
    <motion.a
        variants={socialVariants}
        custom={index}
        href={href}
        target="_blank"
        whileHover={{
            scale: 1.2,
            rotate: 12,
            transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#9EFF00]/50 flex items-center justify-center transition-colors duration-300 group"
        aria-label={label}
    >
        <motion.span
            className="text-xs font-bold text-slate-400 group-hover:text-[#9EFF00]"
        >
            {icon}
        </motion.span>
    </motion.a>
)

export default function StickyFooter() {
    return (
        <div className="relative h-[60vh] md:h-[70vh] w-full" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="relative h-[calc(100vh+70vh)] -top-[100vh]">
                <div className="h-[70vh] sticky top-[calc(100vh-70vh)]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="bg-[#0D0D0D] py-12 md:py-20 px-6 md:px-12 lg:px-20 h-full w-full flex flex-col justify-between relative overflow-hidden border-t border-white/5"
                    >
                        {/* Animated Background Elements */}
                        <motion.div
                            variants={backgroundVariants}
                            className="absolute top-0 right-0 w-96 h-96 bg-[#9EFF00]/5 rounded-full blur-[120px]"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Navigation Section */}
                        <motion.div variants={containerVariants} className="relative z-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                                {footerData.sections.map((section, index) => (
                                    <NavSection key={section.title} title={section.title} links={section.links} index={index} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Footer Bottom Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 gap-8 mt-12"
                        >
                            <div className="flex-1">
                                <motion.h1
                                    className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-white uppercase"
                                    style={{ fontFamily: "inherit" }}
                                >
                                    {footerData.title}
                                </motion.h1>

                                <div className="flex items-center gap-4 mt-6">
                                    <motion.div
                                        className="w-12 h-0.5 bg-[#9EFF00]"
                                        animate={{
                                            scaleX: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">
                                        {footerData.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="text-left md:text-right">
                                <p className="text-slate-500 text-[10px] uppercase font-mono tracking-widest mb-4">
                                    {footerData.copyright}
                                </p>

                                <motion.div
                                    variants={containerVariants}
                                    className="flex gap-3 justify-start md:justify-end"
                                >
                                    {footerData.social.map((social, index) => (
                                        <SocialLink
                                            key={social.label}
                                            href={social.href}
                                            label={social.label}
                                            icon={social.icon}
                                            index={index}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
