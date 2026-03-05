import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openContact } = useModal();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Work', id: 'work' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Journey', id: 'journey' },
        { name: 'Feedback', id: 'testimonials' },
    ];

    return (
        <header className="sticky top-0 z-[100] w-full border-b border-slate-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="size-8 bg-primary flex items-center justify-center transition-transform group-hover:rotate-90">
                        <span className="material-symbols-outlined text-background-dark font-bold text-lg">architecture</span>
                    </div>
                    <h1 className="text-xl font-black uppercase tracking-tighter">Subhan Khan</h1>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button
                        onClick={openContact}
                        className="hidden sm:block px-6 py-2 bg-primary text-background-dark text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all duration-300 active:scale-95"
                    >
                        Get in touch
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="material-symbols-outlined md:hidden text-primary size-10 flex items-center justify-center border border-white/5 rounded-full bg-white/5"
                    >
                        {isMenuOpen ? 'close' : 'menu'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full h-screen bg-background-dark/95 backdrop-blur-xl md:hidden z-[100] border-t border-white/5"
                    >
                        <nav className="flex flex-col items-center justify-center h-[70%] space-y-12">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    openContact();
                                }}
                                className="px-10 py-4 bg-primary text-background-dark text-sm font-black uppercase tracking-widest rounded-full"
                            >
                                Let's Talk
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
