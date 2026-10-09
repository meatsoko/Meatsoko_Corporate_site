import { useEffect, useState } from 'react';

// A lightweight, dependency-free counter for that premium UI feel
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for a smooth slowdown at the end
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(end * easeOutQuart));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

export const ScaleMetricsBar = () => {
    const metrics = [
        {
            id: 1,
            value: 156,
            suffix: 'K',
            label: 'Worldwide users',
            description: 'Engaging with our platform.'
        },
        {
            id: 2,
            value: 146,
            suffix: '',
            label: 'Customer country',
            description: 'Global reach and delivery.'
        },
        {
            id: 3,
            value: 142,
            suffix: '+',
            label: 'Years of Experience',
            description: 'Combined team expertise.'
        },
        {
            id: 4,
            value: 134,
            suffix: 'K',
            label: 'Orders per month',
            description: 'Processed securely.'
        }
    ];

    return (
        <section className="bg-slate-50 border-y border-slate-100 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#059669] tracking-widest uppercase">Ecosystem Scale</h2>
                    <p className="mt-2 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                        Our numbers speak for themselves.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    {metrics.map((metric) => (
                        <div key={metric.id} className="relative flex flex-col items-center text-center px-4">
                            {/* Divider line for desktop (hidden on the first item and mobile) */}
                            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" aria-hidden="true" style={{ display: metric.id === 1 ? 'none' : 'block' }}></div>

                            <dt>
                                <div className="text-5xl font-extrabold text-[#0f172a] tracking-tight mb-2">
                                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                                </div>
                                <div className="text-lg font-semibold text-[#0f172a] mb-1">
                                    {metric.label}
                                </div>
                            </dt>
                            <dd className="text-sm text-[#475569]">
                                {metric.description}
                            </dd>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};