// Reusable icon for social links
const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-11h2.88v1.503h.04c.401-.76 1.381-1.561 2.839-1.561 3.036 0 3.597 1.999 3.597 4.599v6.459z" />
    </svg>
);

export const LeadershipGrid = () => {
    const teamMembers = [
        { name: 'Omar Buja', title: 'Founder & Chairman', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Ali Miyo', title: 'Chairman', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Juma Mohammed', title: 'Director', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Reagan Moseti', title: 'Chief Technology Officer', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Steve Romansky', title: 'Chief Experience Officer', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Taso Malaso', title: 'Media Director', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Aron Green', title: 'Advocacy & Networking', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Barbe Gambo', title: 'Advisory & Governance', imageUrl: 'https://images.unsplash.com/photo-1580894732594-4cd5ba894338?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
        { name: 'Idris', title: 'Logistics', imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop', linkedInUrl: '#' },
    ];

    return (
        <section id="leadership" className="bg-slate-50 border-t border-slate-100 py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
                    <h2 className="text-sm font-bold text-[#059669] tracking-widest uppercase mb-3">Meet Our Amazing Team</h2>
                    <p className="text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                        A Results-Driven Team
                    </p>
                    <p className="mt-6 text-lg text-[#475569] leading-relaxed">
                        Meatsoko Technologies is led by a team of experienced professionals with a passion for meat technology and a commitment to sustainability. Consisting of experts in agriculture, technology, engineering, and business, we work together to drive innovation and deliver exceptional solutions.
                    </p>
                </div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="group flex flex-col items-center">
                            <div className="relative aspect-[4/5] w-full max-w-[280px] rounded-2xl border border-slate-200 shadow-md overflow-hidden bg-white mb-6 group-hover:border-[#059669]/30 transition-all duration-300">
                                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-[#0f172a]">{member.name}</h3>
                                <p className="text-sm font-medium text-[#059669] mt-1 mb-4">{member.title}</p>
                                <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-[#475569] hover:bg-[#059669]/10 hover:border-[#059669]/30 hover:text-[#059669] transition-all duration-200 shadow-inner">
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};