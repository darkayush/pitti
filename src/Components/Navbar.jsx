import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Settings, ChevronDown, Phone, Mail, MapPin, Home, Plus, Minus, Building2, Award, Wrench, Users } from 'lucide-react';

export default function PittiNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setExpandedSection(null);
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleHomeRedirect = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
        setExpandedSection(null);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setExpandedSection(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const productCategories = [
        { 
            name: 'Industrial Solutions', 
            href: '#industrial',
            icon: Building2,
            description: 'Heavy-duty industrial applications'
        },
        { 
            name: 'Commercial Applications', 
            href: '#commercial',
            icon: Users,
            description: 'Business and commercial solutions'
        },
        { 
            name: 'Specialized Equipment', 
            href: '#specialized',
            icon: Settings,
            description: 'Custom specialized machinery'
        },
        { 
            name: 'Custom Solutions', 
            href: '#custom',
            icon: Wrench,
            description: 'Tailored engineering solutions'
        }
    ];

    const qualityItems = [
        { 
            name: 'Quality Standards', 
            href: '#standards',
            icon: Award,
            description: 'International quality benchmarks'
        },
        { 
            name: 'Certifications', 
            href: '#certifications',
            icon: Award,
            description: 'Industry certifications & compliance'
        },
        { 
            name: 'Testing Process', 
            href: '#testing',
            icon: Settings,
            description: 'Rigorous testing procedures'
        },
        { 
            name: 'Quality Assurance', 
            href: '#assurance',
            icon: Award,
            description: 'Comprehensive QA programs'
        }
    ];

    return (
        <>
            <nav className={`bg- backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-500 ${
                isScrolled ? 'py-2 shadow-xl' : 'py-6'
            }`}>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            <button
                                onClick={toggleMenu}
                                className="hidden lg:block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 hover:scale-105 group border border-transparent hover:border-blue-200/30"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? 'opacity-0' : 'translate-y-2.5 opacity-100'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                                    }`}></span>
                                </div>
                            </button>
                            <div className="flex items-center">
                                <button onClick={handleHomeRedirect} className="flex-shrink-0 group">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        <img 
                                            src="Pitti_New_Logo-removebg.png" 
                                            alt="Pitti Logo" 
                                            className={`relative h-10 sm:h-12 lg:h-13 transition-all duration-300 group-hover:scale-105 translate-y-[-20%] ${
                                                isScrolled ? 'h-8 sm:h-10 lg:h-11' : ''
                                            }`}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Desktop Navigation - Hidden when mobile menu is open */}
                        <div className={`flex items-center space-x-4 lg:space-x-8 transition-opacity duration-300 ${
                            isMenuOpen ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'
                        }`}>
                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex items-center space-x-2">
                                <div className="relative group">
                                    <a
                                        href="#products"
                                        className="flex items-center text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                        onMouseEnter={() => setHoveredItem('products')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        Products & Applications
                                        <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${
                                            hoveredItem === 'products' ? 'rotate-180' : ''
                                        }`} />
                                    </a>
                                </div>

                                <div className="relative group">
                                    <a
                                        href="#quality"
                                        className="flex items-center text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                        onMouseEnter={() => setHoveredItem('quality')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        Quality
                                        <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${
                                            hoveredItem === 'quality' ? 'rotate-180' : ''
                                        }`} />
                                    </a>
                                </div>

                                <a
                                    href="#services"
                                    className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                >
                                    Services
                                </a>

                                <a
                                    href="#about"
                                    className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                >
                                    About Us
                                </a>
                            </div>

                            {/* Enhanced CTA Button */}
                            <a
                                href="#quote"
                                className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-sm sm:text-base overflow-hidden group border border-blue-500/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative">Get Quote</span>
                            </a>

                            {/* Mobile Hamburger Menu */}
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 hover:scale-105 group border border-transparent hover:border-blue-200/30"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                                    <span className={`absolute block h-0.5 w-full bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-1'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-full bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? 'opacity-0' : 'translate-y-2 opacity-100'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-full bg-gradient-to-r from-slate-700 to-slate-800 rounded-full transform transition-all duration-300 ease-in-out group-hover:from-blue-600 group-hover:to-indigo-600 ${
                                        isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-3'
                                    }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Overlay Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 backdrop-blur-md z-40 transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`} onClick={() => setIsMenuOpen(false)}>
                <div className={`absolute top-16 sm:top-20 lg:top-24 left-0 w-full bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 transform transition-all duration-500 max-h-[85vh] overflow-y-auto ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
                }`} onClick={(e) => e.stopPropagation()}>
                    <div className="px-6 sm:px-8 py-8">
                        <div className="flex flex-col space-y-2">
                            {/* Enhanced Home button */}
                            <button
                                onClick={handleHomeRedirect}
                                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-4 px-5 rounded-xl text-left transform hover:translate-x-2 font-semibold group border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                            >
                                <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mr-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                                    <Home size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-semibold">Home</div>
                                    <div className="text-sm text-slate-500 group-hover:text-blue-500">Return to homepage</div>
                                </div>
                            </button>

                            {/* Enhanced Products and Applications Accordion */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => toggleSection('products')}
                                    className="flex items-center justify-between w-full text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-4 px-5 rounded-xl text-left font-semibold group border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                >
                                    <div className="flex items-center">
                                        <div className="p-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg mr-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300">
                                            <Building2 size={20} className="text-emerald-600" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">Products & Applications</div>
                                            <div className="text-sm text-slate-500 group-hover:text-blue-500">Explore our solutions</div>
                                        </div>
                                    </div>
                                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                                        expandedSection === 'products' ? 'bg-blue-100 rotate-45' : 'bg-slate-100 group-hover:bg-blue-100'
                                    }`}>
                                        {expandedSection === 'products' ? 
                                            <Minus size={18} className="text-blue-600" /> : 
                                            <Plus size={18} className="text-slate-600 group-hover:text-blue-600" />
                                        }
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    expandedSection === 'products' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="pl-6 space-y-2 border-l-2 border-gradient-to-b from-blue-200 to-indigo-200 ml-6">
                                        {productCategories.map((category, index) => {
                                            const IconComponent = category.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={category.href}
                                                    className="flex items-center text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-3 px-4 rounded-lg transform hover:translate-x-2 group border border-transparent hover:border-blue-200/30"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <div className="p-1.5 bg-gradient-to-r from-slate-100 to-gray-100 rounded-md mr-3 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                                        <IconComponent size={16} className="text-slate-600 group-hover:text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{category.name}</div>
                                                        <div className="text-xs text-slate-400 group-hover:text-blue-400">{category.description}</div>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Quality Accordion */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => toggleSection('quality')}
                                    className="flex items-center justify-between w-full text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-4 px-5 rounded-xl text-left font-semibold group border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                >
                                    <div className="flex items-center">
                                        <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg mr-4 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                                            <Award size={20} className="text-amber-600" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">Quality</div>
                                            <div className="text-sm text-slate-500 group-hover:text-blue-500">Standards & certifications</div>
                                        </div>
                                    </div>
                                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                                        expandedSection === 'quality' ? 'bg-blue-100 rotate-45' : 'bg-slate-100 group-hover:bg-blue-100'
                                    }`}>
                                        {expandedSection === 'quality' ? 
                                            <Minus size={18} className="text-blue-600" /> : 
                                            <Plus size={18} className="text-slate-600 group-hover:text-blue-600" />
                                        }
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    expandedSection === 'quality' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="pl-6 space-y-2 border-l-2 border-gradient-to-b from-amber-200 to-orange-200 ml-6">
                                        {qualityItems.map((item, index) => {
                                            const IconComponent = item.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    className="flex items-center text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-3 px-4 rounded-lg transform hover:translate-x-2 group border border-transparent hover:border-blue-200/30"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <div className="p-1.5 bg-gradient-to-r from-slate-100 to-gray-100 rounded-md mr-3 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                                        <IconComponent size={16} className="text-slate-600 group-hover:text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{item.name}</div>
                                                        <div className="text-xs text-slate-400 group-hover:text-blue-400">{item.description}</div>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Other Menu Items */}
                            <a
                                href="#services"
                                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-4 px-5 rounded-xl transform hover:translate-x-2 font-semibold group border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-lg mr-4 group-hover:from-purple-200 group-hover:to-violet-200 transition-all duration-300">
                                    <Wrench size={20} className="text-purple-600" />
                                </div>
                                <div>
                                    <div className="font-semibold">Services</div>
                                    <div className="text-sm text-slate-500 group-hover:text-blue-500">Our service offerings</div>
                                </div>
                            </a>

                            <a
                                href="#about"
                                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 py-4 px-5 rounded-xl transform hover:translate-x-2 font-semibold group border border-transparent hover:border-blue-200/30 hover:shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="p-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg mr-4 group-hover:from-rose-200 group-hover:to-pink-200 transition-all duration-300">
                                    <Users size={20} className="text-rose-600" />
                                </div>
                                <div>
                                    <div className="font-semibold">About Us</div>
                                    <div className="text-sm text-slate-500 group-hover:text-blue-500">Learn about our company</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}