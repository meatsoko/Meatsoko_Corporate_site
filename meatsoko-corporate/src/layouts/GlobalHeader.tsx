import { useState } from 'react';
import { Link } from 'react-router-dom';

export const GlobalHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section - Routes to Home */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/" className="text-2xl font-extrabold tracking-tight text-[#0f172a]">
                            MEAT<span className="text-[#059669]">SOKO</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link to="/about-us" className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors">
                            About Us
                        </Link>
                        <Link to="/services" className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors">
                            Services
                        </Link>
                        <Link to="/contact-us" className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors">
                            Contact Us
                        </Link>

                        {/* Shop Subdomain */}
                        <a
                            href="https://shop.meatsokogroup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
                        >
                            Shop
                        </a>
                    </nav>

                    {/* Desktop CTA Button - Investment Subdomain */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="https://investment.meatsokogroup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-md text-white bg-[#0f172a] hover:bg-slate-800 shadow-sm transition-all duration-200"
                        >
                            Investment
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#475569] hover:text-[#0f172a] hover:bg-slate-50 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#475569] hover:text-[#059669] hover:bg-slate-50">About Us</Link>
                        <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#475569] hover:text-[#059669] hover:bg-slate-50">Services</Link>
                        <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#475569] hover:text-[#059669] hover:bg-slate-50">Contact Us</Link>
                        <a href="https://shop.meatsokogroup.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-[#475569] hover:text-[#059669] hover:bg-slate-50">Shop</a>
                        <a href="https://investment.meatsokogroup.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0f172a] hover:bg-slate-800">
                            Investment
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};