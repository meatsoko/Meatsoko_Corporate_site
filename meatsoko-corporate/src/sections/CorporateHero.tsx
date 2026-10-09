export const CorporateHero = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Subtle background decoration to break up pure white */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50 rounded-r-full opacity-50 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                            Transforming the <br className="hidden lg:block" />
                            <span className="text-[#059669]">Meat Value Chain</span> <br className="hidden lg:block" />
                            in Sub-Saharan Africa
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We leverage technology, innovation, and community support to deliver premium meats with a focus on sustainability and economic empowerment.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-md text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-green-900/20 transition-all duration-200"
                            >
                                Partner With Us
                            </a>
                            <a
                                href="#solutions"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-semibold rounded-md text-[#0f172a] bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                            >
                                Explore Solutions
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Graphic / Illustration Area */}
                    <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                        {/* Decorative blob behind the image frame */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-slate-50 rounded-[2rem] transform rotate-3 -z-10"></div>

                        {/* Image/Dashboard Placeholder Frame */}
                        <div className="relative rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden aspect-[4/3] flex flex-col">

                            {/* Fake Browser/App Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            </div>

                            {/* Fake UI Body representing supply chain nodes */}
                            <div className="flex-1 p-8 flex items-center justify-center relative bg-slate-50">
                                {/* Connecting track line */}
                                <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-green-200 -translate-y-1/2"></div>

                                <div className="w-full flex justify-between relative z-10">
                                    {/* Node 1: Origin */}
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5h2m-2 0h-2" />
                                        </svg>
                                    </div>

                                    {/* Node 2: Active/Verified */}
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#059669] shadow-lg shadow-green-900/20 flex items-center justify-center text-white ring-4 ring-green-50">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    {/* Node 3: Destination */}
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};