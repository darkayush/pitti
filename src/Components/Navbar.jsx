import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Settings, ChevronDown, Phone, Mail, MapPin, Home } from 'lucide-react';

export default function PittiNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsProductsDropdownOpen(false);
    };

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    const handleHomeRedirect = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
        setIsProductsDropdownOpen(false);
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
                setIsProductsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const productCategories = [
        { name: 'Industrial Solutions', href: '#industrial' },
        { name: 'Commercial Applications', href: '#commercial' },
        { name: 'Specialized Equipment', href: '#specialized' },
        { name: 'Custom Solutions', href: '#custom' }
    ];

    return (
        <>
            <nav
                className={` md:bg-cover bg-center transition-all duration-300 ${isScrolled
                        ? 'shadow-lg bg-opacity-95 backdrop-blur-sm'
                        : ''
                    } text-white sticky top-0 z-50`}
            >
                <div className=" mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        {/* Left side - Hamburger Menu (Desktop) and Logo */}
                        <div className="flex items-center space-x-4">
                            {/* Desktop Hamburger Menu */}
                            <button
                                onClick={toggleMenu}
                                className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span className={`absolute block h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'opacity-0' : 'translate-y-2.5 opacity-100'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                                    }`}></span>
                                </div>
                            </button>

                            {/* Logo */}
                            <div className="flex items-center">
                                <button onClick={handleHomeRedirect} className="">
                                    <img src="Pitti_New_Logo-removebg.png" alt="Pitti Logo" className='h-13 translate-y-[-10px]' />
                                </button>
                            </div>
                        </div>

                        {/* Center - Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-end space-x-8">
                            <a
                                href="#products"
                                className="text-black hover:text-black transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-gray-100 hover:scale-105"
                            >
                                Products and Applications
                            </a>

                            <a
                                href="#quality"
                                className="text-black hover:text-black transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-gray-100 hover:scale-105"
                            >
                                Quality
                            </a>
                        </div>

                        {/* Right side - CTA and Mobile menu */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="#quote"
                                className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Request a Quote
                            </a>

                            <button
                                onClick={toggleMenu}
                                className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'opacity-0' : 'translate-y-2.5 opacity-100'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                                    }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile/Desktop menu with smooth gradient background */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${
                        isMenuOpen ? 'max-h-130 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="mt-6 pb-6 border-t border-gray-400 transform transition-all duration-500 ease-out">
                            <div className="flex flex-col space-y-2 pt-6">
                                {/* Home button */}
                                <button
                                    onClick={handleHomeRedirect}
                                    className="flex items-center text-black hover:text-black hover:bg-gray-100 transition-all duration-300 py-3 px-3 rounded-md text-left transform hover:translate-x-2"
                                >
                                    <Home size={20} className="mr-3" />
                                    Home
                                </button>

                                <div className="space-y-1">
                                    <div className="text-black text-sm font-semibold uppercase tracking-wide px-3 py-2">
                                        Products and Applications
                                    </div>
                                    {productCategories.map((category, index) => (
                                        <a
                                            key={index}
                                            href={category.href}
                                            className="text-black hover:text-black hover:bg-gray-100 transition-all duration-300 py-3 px-6 rounded-md ml-3 block transform hover:translate-x-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {category.name}
                                        </a>
                                    ))}
                                </div>

                                <a
                                    href="#quality"
                                    className="text-black hover:text-black hover:bg-gray-100 transition-all duration-300 py-3 px-3 rounded-md transform hover:translate-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Quality
                                </a>

                                <a
                                    href="#services"
                                    className="text-black hover:text-black hover:bg-gray-100 transition-all duration-300 py-3 px-3 rounded-md transform hover:translate-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </a>

                                <a
                                    href="#about"
                                    className="text-black hover:text-black hover:bg-gray-100 transition-all duration-300 py-3 px-3 rounded-md transform hover:translate-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}