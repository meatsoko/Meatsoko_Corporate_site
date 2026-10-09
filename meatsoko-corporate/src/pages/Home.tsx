import { CorporateHero } from '../sections/CorporateHero';
import { ScaleMetricsBar } from '../sections/ScaleMetricsBar';
import { SolutionsBentoGrid } from '../sections/SolutionsBentoGrid';
import { FAQSection } from '../sections/FAQSection';

export const Home = () => {
    return (
        <div className="w-full animate-fade-in">
            <CorporateHero />
            <SolutionsBentoGrid />
            <ScaleMetricsBar />

            {/* Testimonial Section */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-sm font-bold text-[#059669] tracking-widest uppercase mb-8">What Our Clients Say About Us</h2>
                    <blockquote className="text-2xl font-medium text-[#0f172a] italic mb-8">
                        “After using this platform, I can get everything done in minutes and spend time doing what I love.”
                    </blockquote>
                    <div className="flex items-center justify-center flex-col">
                        <div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
                        <div className="font-bold text-[#0f172a]">Alexander Gray</div>
                        <div className="text-sm text-[#475569]">CEO & Founder</div>
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
};