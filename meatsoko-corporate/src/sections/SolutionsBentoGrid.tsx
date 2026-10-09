export const SolutionsBentoGrid = () => {
    return (
        <section id="solutions" className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#059669] tracking-widest uppercase">Core Infrastructure</h2>
                    <p className="mt-2 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                        Solutions that power the modern meat ecosystem.
                    </p>
                    <p className="mt-4 text-lg text-[#475569]">
                        We bridge the gap between physical agriculture and digital security, ensuring transparency from farm to table.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(250px,auto)]">

                    {/* Card 1: Traceability (Spans 2 columns on desktop) */}
                    <div className="md:col-span-2 relative group bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            {/* Abstract Nodes Icon */}
                            <svg className="w-32 h-32 text-[#059669]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">End-to-End Traceability</h3>
                            <p className="text-[#475569] max-w-md">
                                Utilizing immutable ledger technology to track origin, processing, and distribution. Ensure regulatory compliance and build consumer trust with verifiable data at every step.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Logistics */}
                    <div className="relative group bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-3">Smart Logistics</h3>
                        <p className="text-[#475569]">
                            Optimize routing, reduce spoilage, and monitor cold-chain integrity in real-time across Sub-Saharan infrastructure.
                        </p>
                    </div>

                    {/* Card 3: Technology Infrastructure */}
                    <div className="relative group bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-3">Digital Infrastructure</h3>
                        <p className="text-[#475569]">
                            API-first architecture designed to integrate seamlessly with existing agricultural ERPs and financial systems.
                        </p>
                    </div>

                    {/* Card 4: Action/CTA Block (Spans 2 columns on desktop) */}
                    <div className="md:col-span-2 relative bg-[#0f172a] rounded-2xl border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-green-400 via-transparent to-transparent"></div>

                        <div className="relative z-10 max-w-lg">
                            <h3 className="text-2xl font-bold text-white mb-2">Ready to transform your operations?</h3>
                            <p className="text-slate-400">
                                Join our network of forward-thinking agricultural and logistics partners.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-[#0f172a] bg-white hover:bg-slate-100 transition-colors"
                            >
                                Schedule a Demo
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};