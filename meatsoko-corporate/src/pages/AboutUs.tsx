import { LeadershipGrid } from '../sections/LeadershipGrid';
import { CoreValuesHighlight } from '../sections/CoreValuesHighlight';

export const AboutUs = () => {
    return (
        <div className="w-full animate-fade-in">

            {/* 1. Page Header & Story Section */}
            <section className="bg-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                        {/* Story Text */}
                        <div className="mb-12 lg:mb-0">
                            <h1 className="text-sm font-bold text-[#059669] tracking-widest uppercase mb-3">About Meatsoko</h1>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
                                Nurturing Tradition, Powering Tomorrow's Meat Industry.
                            </h2>
                            <p className="text-lg text-[#475569] leading-relaxed mb-6">
                                At MEATSOKO LIMITED, we embark on a journey that transcends the ordinary, redefining the landscape of the meat industry in Sub-Saharan Africa. Founded by the visionary Kenyan pastoralist community, our story is one of innovation, empowerment, and a commitment to excellence.
                            </p>
                            <p className="text-lg text-[#475569] leading-relaxed mb-10">
                                We leverage technology, innovation, and community support to deliver premium meats with a focus on sustainability and economic empowerment.
                            </p>

                            {/* Stats Block */}
                            <div className="flex flex-col sm:flex-row gap-8 border-t border-slate-100 pt-8">
                                <div>
                                    <div className="text-4xl font-black text-[#0f172a]">138+</div>
                                    <div className="text-sm font-medium text-[#059669] mt-1 uppercase tracking-wide">Products Launched</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-[#0f172a]">224.9%</div>
                                    <div className="text-sm font-medium text-[#059669] mt-1 uppercase tracking-wide">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual/Image Area */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-slate-50 rounded-[2rem] transform rotate-3 -z-10"></div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                                {/* Replace with a real photo representing your pastoralist roots or modern logistics */}
                                <img
                                    src="https://images.unsplash.com/photo-1529124443729-281b37497d3e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Meatsoko Agricultural Technology"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. Vision & Mission Section */}
            <section className="bg-slate-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Vision Card */}
                        <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#059669] mb-4">Our Vision</h3>
                            <p className="text-xl text-slate-300 leading-relaxed relative z-10">
                                To be the leading Sub-Saharan meat e-commerce platform, connecting farmers, suppliers, vendors, and customers to high-quality Halal meat products.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#059669] mb-4">Our Mission</h3>
                            <p className="text-xl text-slate-300 leading-relaxed relative z-10">
                                To provide a convenient, reliable, and affordable way to buy and sell meat, while supporting the pastoralist community and promoting sustainable and ethical practices.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Reused Core Values Highlight (Optional, but good for flow) */}
            <CoreValuesHighlight />

            {/* 4. Leadership Team Grid */}
            <LeadershipGrid />

        </div>
    );
};