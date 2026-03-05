import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#080808] border border-white/10 shadow-2xl z-10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-[#0D0D0D]">
                            <div>
                                <span className="text-[#9EFF00] text-xs font-black uppercase tracking-[0.3em] mb-2 block">
                                    Let's Talk
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                                    Start a Project
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 bg-white/5 hover:bg-[#9EFF00] text-white/50 hover:text-black transition-all duration-300 group"
                            >
                                <X className="size-6 transition-transform group-hover:rotate-90" />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-6 md:p-8">
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // TODO: Perform submit
                                    onClose();
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#9EFF00] rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#9EFF00] rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                        What can I help you with?
                                    </label>
                                    <select className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#9EFF00] rounded-xl px-4 py-3 text-white outline-none transition-colors appearance-none">
                                        <option value="" disabled selected>
                                            Select a service
                                        </option>
                                        <option value="web-development">Web Development</option>
                                        <option value="digital-marketing">Digital Marketing</option>
                                        <option value="seo">SEO Optimization</option>
                                        <option value="social-media">Social Media Management</option>
                                        <option value="consulting">Consulting / Other</option>
                                    </select>
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                        Project Details
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#9EFF00] rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors resize-none"
                                        placeholder="Tell me about your project, goals, and timeline..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-[#9EFF00] transition-colors duration-300"
                                >
                                    Send Message
                                    <span className="material-symbols-outlined text-[18px]">send</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
