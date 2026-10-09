import { useState } from 'react';

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How does MEATSOKO ensure the quality and freshness of its meat products?",
            answer: "Quality is paramount in our purchase and supply division. We operate a highly efficient supply chain, ensuring that our customers receive the freshest and highest-quality meat products."
        },
        {
            question: "What payment methods are accepted on MEATSOKO?",
            answer: "We support multiple secure payment gateways designed for seamless and safe transactions across our ecosystem."
        },
        {
            question: "How does the delivery process work, and what is the estimated delivery time?",
            answer: "Our logistics division forms the backbone of our operations, ensuring that the journey from farm to table is efficient and reliable. We pride ourselves on timely deliveries and optimal transportation."
        },
        {
            question: "How can I provide feedback or share my experience with MEATSOKO?",
            answer: "We value your feedback! You can share your experience, suggestions, or concerns through our website’s feedback form on the Contact page. Your input helps us improve and enhance our services to serve you better."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-50 py-24 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                        Have Any Questions?
                    </h2>
                    <p className="mt-4 text-lg text-[#475569]">
                        Everything you need to know about the platform and how it works.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:border-[#059669]/30"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-[#0f172a] pr-8">{faq.question}</span>
                                <span className="ml-6 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-slate-200 text-slate-400 group-hover:text-[#059669] group-hover:border-[#059669]">
                                    {openIndex === index ? (
                                        <svg className="w-4 h-4 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {/* Answer Expansion Area */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 pb-5 text-[#475569] leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};