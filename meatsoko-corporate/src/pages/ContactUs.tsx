import { useState } from 'react';

export const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Placeholder for your API route integration (e.g., Vercel Edge Function + Resend)
        // const formData = new FormData(e.currentTarget);
        // await fetch('/api/contact', { method: 'POST', body: formData });

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="w-full animate-fade-in bg-white">

            {/* Header Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Depending on your specific needs, utilize any of the available channels below to connect with the right division of MEATSOKO LIMITED.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16">

                        {/* Left Column: Contact Information */}
                        <div className="lg:col-span-5 mb-16 lg:mb-0">
                            <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Corporate Details</h2>

                            <div className="space-y-10">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 border border-green-100 text-[#059669]">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-[#0f172a]">Headquarters</h3>
                                        <p className="mt-2 text-[#475569]">Nairobi, Kenya</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 border border-green-100 text-[#059669]">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-[#0f172a]">Sales Inquiry</h3>
                                        <p className="mt-2 text-[#475569]">sales@meatsoko.com</p>
                                        <p className="mt-1 text-sm text-slate-500">For platform onboarding and logistics partnerships.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 border border-green-100 text-[#059669]">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-[#0f172a]">Strategic Partnerships</h3>
                                        <p className="mt-2 text-[#475569]">networks@meatsoko.com</p>
                                        <p className="mt-1 text-sm text-slate-500">For B2B integrations and media inquiries.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 border border-green-100 text-[#059669]">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-[#0f172a]">Careers</h3>
                                        <p className="mt-2 text-[#475569]">hr@meatsoko.com</p>
                                        <p className="mt-1 text-sm text-slate-500">Join our engineering and operations teams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
                                {/* Decorative top border */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#059669]"></div>

                                <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Send a Message</h2>

                                {isSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#059669]">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0f172a] mb-2">Message Received</h3>
                                        <p className="text-[#475569]">Thank you for reaching out. A member of the MEATSOKO team will respond to your inquiry shortly.</p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-6 text-sm font-semibold text-[#059669] hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-[#0f172a] mb-2">First Name</label>
                                                <input type="text" id="firstName" name="firstName" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-[#059669] focus:ring-[#059669] focus:ring-1 focus:outline-none transition-colors" />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-[#0f172a] mb-2">Last Name</label>
                                                <input type="text" id="lastName" name="lastName" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-[#059669] focus:ring-[#059669] focus:ring-1 focus:outline-none transition-colors" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[#0f172a] mb-2">Work Email</label>
                                            <input type="email" id="email" name="email" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-[#059669] focus:ring-[#059669] focus:ring-1 focus:outline-none transition-colors" />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-[#0f172a] mb-2">Inquiry Type</label>
                                            <select id="subject" name="subject" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-[#059669] focus:ring-[#059669] focus:ring-1 focus:outline-none transition-colors bg-white">
                                                <option>Sales & Onboarding</option>
                                                <option>Technology & Integrations</option>
                                                <option>Logistics & Fleet</option>
                                                <option>General Support</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-[#0f172a] mb-2">Message</label>
                                            <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-[#059669] focus:ring-[#059669] focus:ring-1 focus:outline-none transition-colors resize-none"></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-md text-white transition-all duration-200 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#0f172a] hover:bg-slate-800 shadow-lg'
                                                }`}
                                        >
                                            {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};