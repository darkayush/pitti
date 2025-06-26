import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Clock, Shield, Award, Users } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        
                        {/* Company Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <img src="Pitti_New_Logo-removebg.png" alt="Pitti Logo" className="h-12 w-auto" />
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Leading provider of industrial solutions and commercial applications. 
                                We deliver excellence through innovation and quality craftsmanship.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-2 bg-gray-800 hover:bg-blue-400 rounded-lg transition-all duration-300 hover:scale-110">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="p-2 bg-gray-800 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-all duration-300 hover:scale-110">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#home" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Home</a></li>
                                <li><a href="#products" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Products & Applications</a></li>
                                <li><a href="#quality" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Quality</a></li>
                                <li><a href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Services</a></li>
                                <li><a href="#about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">About Us</a></li>
                                <li><a href="#careers" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Careers</a></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Our Solutions</h3>
                            <ul className="space-y-3">
                                <li><a href="#industrial" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Industrial Solutions</a></li>
                                <li><a href="#commercial" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Commercial Applications</a></li>
                                <li><a href="#specialized" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Specialized Equipment</a></li>
                                <li><a href="#custom" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Custom Solutions</a></li>
                                <li><a href="#support" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Technical Support</a></li>
                                <li><a href="#maintenance" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Maintenance Services</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="text-gray-300">123 Industrial Avenue</p>
                                        <p className="text-gray-300">Business District, City 12345</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-green-400 flex-shrink-0" size={20} />
                                    <p className="text-gray-300">+91 98765 43210</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-blue-400 flex-shrink-0" size={20} />
                                    <p className="text-gray-300">info@pitti.com</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="text-yellow-400 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300 text-sm">Sat: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-16 pt-8 border-t border-gray-800">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Users className="text-white" size={24} />
                                </div>
                                <div className="text-2xl font-bold text-white">500+</div>
                                <div className="text-gray-400 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center group">
                                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Award className="text-white" size={24} />
                                </div>
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-gray-400 text-sm">Projects Completed</div>
                            </div>
                            <div className="text-center group">
                                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="text-white" size={24} />
                                </div>
                                <div className="text-2xl font-bold text-white">15+</div>
                                <div className="text-gray-400 text-sm">Years Experience</div>
                            </div>
                            <div className="text-center group">
                                <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="text-white" size={24} />
                                </div>
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <div className="text-gray-400 text-sm">Support Available</div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 bg-black bg-opacity-50">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                                <p className="text-gray-400 text-sm">
                                    © 2025 Pitti. All rights reserved.
                                </p>
                                <div className="flex space-x-6">
                                    <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                                    <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                                    <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
                                </div>
                            </div>
                            
                            {/* Back to top button */}
                            <button
                                onClick={scrollToTop}
                                className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                                aria-label="Back to top"
                            >
                                <ArrowUp size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}