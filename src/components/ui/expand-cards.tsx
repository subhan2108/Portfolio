"use client";

import { useState } from "react";
import { Layout, BarChart3, Users, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const services = [
    {
        title: "Web Development",
        description: "Building responsive Web Apps, E-Commerce platforms, Static Sites & Modern Architecture.",
        icon: Layout,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    },
    {
        title: "Digital Marketing",
        description: "Executing strategic SEO, Targeted SEM & deep Performance Data Analytics for growth.",
        icon: BarChart3,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        title: "Social Presence",
        description: "Driving Social Media Optimization (SMO), Brand Management & Authority Building.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    }
];

export default function ExpandOnHover() {
    const [expandedImage, setExpandedImage] = useState(0);

    return (
        <div className="w-full relative flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-[400px] lg:min-h-[500px]">
            {services.map((service, idx) => {
                const isExpanded = idx === expandedImage;
                const Icon = service.icon;

                return (
                    <div
                        key={idx}
                        className={cn(
                            "group relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-in-out border border-white/10",
                            isExpanded
                                ? "flex-grow h-[350px] lg:h-[500px] lg:w-[60%]"
                                : "flex-none h-[80px] lg:h-[500px] lg:w-[15%]"
                        )}
                        style={{
                            flexBasis: isExpanded ? 'auto' : 'auto',
                        }}
                        onMouseEnter={() => setExpandedImage(idx)}
                        onClick={() => setExpandedImage(idx)}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300" style={{ opacity: isExpanded ? 0.4 : 0.8 }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                        <img
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            src={service.image}
                            alt={service.title}
                        />

                        {/* Content for Desktop */}
                        <div className="hidden lg:flex absolute bottom-0 left-0 w-full h-full p-8 z-20 flex-col justify-end">
                            <div className="flex items-center gap-6 relative">
                                <div className={cn(
                                    "flex items-center justify-center rounded-full bg-[#1A1A1A] text-[#9EFF00] shrink-0 border border-white/10 transition-all duration-500 delay-100",
                                    isExpanded ? "size-16 opacity-100 translate-x-0" : "size-12 opacity-0 -translate-y-4 absolute left-0"
                                )}>
                                    <Icon className={cn("transition-all duration-500", isExpanded ? "size-8" : "size-6")} />
                                </div>

                                <div className={cn(
                                    "flex flex-col overflow-hidden transition-all duration-700 ease-in-out",
                                    isExpanded ? "opacity-100 translate-x-0 w-full ml-20" : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                                )}>
                                    <h3 className="text-4xl font-black uppercase tracking-tight text-white whitespace-nowrap mb-3 pr-8">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-300 font-medium text-base line-clamp-2 max-w-md">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content for Mobile */}
                        <div className="flex lg:hidden absolute inset-0 w-full h-full px-5 py-4 z-20 flex-col justify-end">
                            <div className="flex items-end gap-4 w-full h-full pb-2">
                                <div className={cn(
                                    "flex items-center justify-center rounded-full bg-[#1A1A1A] text-[#9EFF00] shrink-0 border border-white/10 transition-all duration-500",
                                    isExpanded ? "size-12" : "size-10 absolute left-5 bottom-4"
                                )}>
                                    <Icon className={cn("transition-all duration-500", isExpanded ? "size-6" : "size-5")} />
                                </div>

                                <div className={cn(
                                    "flex flex-col overflow-hidden transition-all duration-700 ease-in-out flex-1",
                                    isExpanded ? "ml-14 justify-end h-full opacity-100" : "ml-14 justify-end h-full opacity-100"
                                )}>
                                    <h3 className={cn(
                                        "font-black uppercase tracking-tight text-white truncate w-full flex items-center justify-between transition-all duration-500",
                                        isExpanded ? "text-2xl" : "text-xl mt-1"
                                    )}>
                                        {service.title}
                                        {!isExpanded && <ChevronRight className="size-5 text-[#9EFF00] opacity-50 ml-2 shrink-0" />}
                                    </h3>

                                    {/* Expandable description on mobile */}
                                    <div className={cn(
                                        "grid transition-all duration-500 ease-in-out",
                                        isExpanded ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                                    )}>
                                        <div className="overflow-hidden">
                                            <p className="text-slate-300 font-medium text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Vertical text for collapsed state on desktop */}
                        <div className={cn(
                            "hidden lg:flex absolute inset-0 items-center justify-center z-20 transition-all duration-500 delay-100",
                            isExpanded ? "opacity-0 translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
                        )}>
                            <div className="flex flex-col items-center justify-center gap-8 -translate-y-10">
                                <Icon className="size-6 text-white/50 group-hover:text-[#9EFF00] transition-colors" />
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors whitespace-nowrap origin-center -rotate-90">
                                    {service.title.split(' ')[0]}
                                </h3>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
