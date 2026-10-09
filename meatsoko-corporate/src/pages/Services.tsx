export const Services = () => {
    const mslServices = [
        {
            title: "MSL Research & Innovations",
            description: "Driving the future of agritech through continuous research, development, and implementation of cutting-edge supply chain technologies.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "MSL Logistics",
            description: "The backbone of our operations. We ensure the journey from farm to table is efficient, reliable, and powered by optimal transportation routing.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            )
        },
        {
            title: "Finance (Assets & Investments)",
            description: "Going beyond commerce to invest in the future. We provide financial support and capital structuring to empower sustainable agricultural practices.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Advocacy & Governance",
            description: "Ensuring strict compliance, ethical sourcing, and strong representation for the pastoralist community across legislative and market frameworks.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5h2m-2 0h-2" /></svg>
            )
        },
        {
            title: "Energy (Green)",
            description: "Pioneering sustainable infrastructure by integrating renewable energy solutions across our processing, storage, and logistical hubs.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            title: "Networking Playground",
            description: "Creating collaborative environments and B2B platforms that connect vendors, suppliers, and buyers for seamless industry integration.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            title: "MSL Brands",
            description: "Developing and managing a portfolio of premium, trusted meat and agricultural product lines tailored for the Sub-Saharan consumer.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            )
        },
        {
            title: "Media Group",
            description: "Managing corporate communications, industry publishing, and digital content to educate the market and elevate the MEATSOKO brand presence.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            )
        }
    ];

    return (
        <div className="w-full animate-fade-in bg-white">

            {/* Services Header */}
            <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-sm font-bold text-[#059669] tracking-widest uppercase mb-3">Capabilities</h1>
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                            The MSL Technologies Ecosystem
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            An integrated suite of services designed to transform the agricultural value chain. From robust logistics to green energy and B2B networking, we provide the infrastructure required to scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mslServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#059669] hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-[#0f172a] group-hover:bg-[#059669] group-hover:text-white transition-colors duration-300 mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[#475569] leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Bar */}
            <section className="bg-slate-50 py-16 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-[#0f172a]">Need a specialized integration?</h3>
                        <p className="text-[#475569] mt-2">Connect with our team to discuss how MSL Technologies can power your operations.</p>
                    </div>
                    <a
                        href="/contact-us"
                        className="mt-6 md:mt-0 inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-md text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                    >
                        Contact Sales
                    </a>
                </div>
            </section>

        </div>
    );
};