export const ContactCTA = () => {
    return (
        <section id="contact" className="bg-[#059669] relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                            Ready to transform your supply chain?
                        </h2>
                        <p className="mt-4 text-lg text-green-50 leading-relaxed">
                            Connect with our enterprise sales team to discuss multi-tenant architecture integration, smart logistics, and secure digital infrastructure for your operations.
                        </p>
                    </div>

                    <div className="mt-10 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full border border-green-800/10">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="email" className="sr-only">Corporate Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-slate-300 px-4 py-3 text-[#0f172a] shadow-sm focus:border-[#059669] focus:ring-[#059669] bg-slate-50 border"
                                        placeholder="Enter your work email"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#0f172a] hover:bg-slate-800 transition-colors duration-200 shadow-md"
                                >
                                    Request Consultation
                                </button>
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    Prefer direct communication? Email us at <a href="mailto:sales@meatsoko.com" className="text-[#059669] hover:underline font-medium">sales@meatsoko.com</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};