export const GlobalFooter = () => {
    return (
        <footer className="bg-[#0f172a] text-slate-400 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">

                    {/* Brand & Office Info */}
                    <div className="space-y-8 xl:col-span-1">
                        <span className="text-2xl font-extrabold tracking-tight text-white">
                            MEAT<span className="text-[#059669]">SOKO</span>
                        </span>
                        <p className="text-sm leading-6">
                            Empowering the agricultural ecosystem with digital traceability, enterprise logistics, and absolute transparency.
                        </p>
                        <div className="text-sm">
                            <strong className="text-slate-300 font-semibold block mb-1">Headquarters</strong>
                            Nairobi, Kenya<br />
                        </div>
                    </div>

                    {/* Link Silos */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Column 1: Solutions */}
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4 text-sm">
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Digital Traceability</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Smart Logistics</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Enterprise Tech Stack</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">B2B Payments</a></li>
                                </ul>
                            </div>

                            {/* Column 2: Company */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-6 space-y-4 text-sm">
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Leadership</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">News & Insights</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Column 3: Investors */}
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Investors</h3>
                                <ul role="list" className="mt-6 space-y-4 text-sm">
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">MEAT Equity Portal</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Governance Policies</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Token Explorer</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Network Status</a></li>
                                </ul>
                            </div>

                            {/* Column 4: Legal */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4 text-sm">
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Compliance</a></li>
                                    <li><a href="#" className="hover:text-[#059669] transition-colors">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Meatsoko Group Limited. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="mailto:networks@meatsoko.com" className="hover:text-white transition-colors">Partnerships</a>
                        <a href="mailto:hr@meatsoko.com" className="hover:text-white transition-colors">HR Inquiries</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};