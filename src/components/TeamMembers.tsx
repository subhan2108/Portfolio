import { Component } from "./ui/3d-book-testimonial";

const TeamMembers = () => {
    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=400',
            text: 'Driving the vision and strategy, focusing on building high-converting architectures for ambitious brands.',
            name: 'Subhan Khan',
            jobtitle: 'Founder & Full Stack Dev',
            rating: 5,
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=400',
            text: 'Specializes in scaling systems and managing complex server-side infrastructures and APIs.',
            name: 'Ethan Smith',
            jobtitle: 'Backend Engineer',
            rating: 5,
        },
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400',
            text: 'Bringing pixels to life with obsessive attention to micro-interactions and high-performance rendering.',
            name: 'Liam Johnson',
            jobtitle: 'UI/UX Interactive Designer',
            rating: 5,
        },
        {
            image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&q=80&w=400',
            text: 'Optimizing funnels, A/B testing, and leading digital marketing strategies to maximize ROI.',
            name: 'Ava Martinez',
            jobtitle: 'Growth Marketer',
            rating: 5,
        },
    ];

    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center py-32 border-t border-white/10" id="team">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
                <h2 className="text-4xl md:text-6xl font-black tight-heading mb-4">Meet The Team</h2>
                <p className="text-xl text-slate-400">The collective intelligence driving our projects.</p>
            </div>
            <Component testimonials={testimonials} />
        </section>
    );
};

export default TeamMembers;
