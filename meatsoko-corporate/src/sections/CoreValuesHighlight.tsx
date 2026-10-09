export const CoreValuesHighlight = () => {
    const values = [
        {
            numeral: '01',
            title: 'Absolute Transparency',
            description: 'We believe trust is built on verifiable data. By leveraging immutable ledger technology, we ensure every transaction and supply chain movement is fully transparent and auditable.'
        },
        {
            numeral: '02',
            title: 'Enterprise Security',
            description: 'Security is not an afterthought. Our infrastructure adheres to rigorous digital asset tokenization standards and robust multi-tenant access controls, safeguarding partner data at all times.'
        },
        {
            numeral: '03',
            title: 'Collaborative Growth',
            description: 'We succeed when our ecosystem succeeds. From local agricultural producers to institutional partners, our platforms are designed to create equitable, scalable value for all stakeholders.'
        }
    ];

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Side: Visual / Image Area */}
                    <div className="relative mb-16 lg:mb-0">
                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] transform -rotate-3 -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#059669]/10 to-transparent rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>

                        {/* Main Image Container */}
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-slate-800 border border-slate-200">
                            {/* Replace src with a real high-res image of technology meeting agriculture */}
                            <img
                                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
                                alt="Modern agricultural technology integration"
                                className="w-full h-full object-cover opacity-90"
                            />
                            {/* Subtle overlay gradient to make it feel premium */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Side: The Values */}
                    <div>
                        <h2 className="text-sm font-bold text-[#059669] tracking-widest uppercase mb-3">Our Core Values</h2>
                        <p className="text-3xl font-extrabold text-[#0f172a] sm:text-4xl mb-12">
                            The principles powering our digital infrastructure.
                        </p>

                        <div className="space-y-10">
                            {values.map((value) => (
                                <div key={value.numeral} className="group flex">
                                    {/* Numeral indicator */}
                                    <div className="flex-shrink-0 mr-6">
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-[#059669] transition-colors duration-300">
                                            {value.numeral}
                                        </span>
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-[#475569] leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};