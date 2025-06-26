import React, { useState } from 'react';
import { MapPin, Settings } from 'lucide-react';

export default function PittiFooter() {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubscribe = () => {
        if (email && agreed) {
            alert('Subscribed successfully!');
            setEmail('');
            setAgreed(false);
        }
    };

    return (
        <div className="w-full">
            {/* Newsletter Subscription Section */}
            

            {/* Main Footer */}
            <footer className="bg-slate-700 text-white relative overflow-hidden">
                <div className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 translate-y-[70%]">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                    <span className="text-red-500">Subscribe</span> for the
                                </h2>
                                <p className="text-2xl md:text-3xl font-bold text-gray-800">
                                    exclusive updates
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-w-80"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap"
                                >
                                    SUBSCRIBE NOW
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-center lg:text-right">
                            <label className="flex items-center justify-center lg:justify-end gap-2 text-gray-600 text-sm">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                />
                                I agree to the <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
                {/* Background decorative gear */}
                <div className="absolute left-0 bottom-0 opacity-10">
                    <div className="w-96 h-96 relative">
                        <Settings size={384} className="text-white" />
                    </div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Company Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Settings className="text-white" size={32} />
                                <div>
                                    <h3 className="text-2xl font-bold">PITTI</h3>
                                    <p className="text-sm text-gray-300">Simplifying Energy Supply</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Quick Link</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Integrated Manufacturing Facilities</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Innovation</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Investors' Corner</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">News and Media/Blogs/</a></li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">News and Media/Blogs/ FAQs</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Contact us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                                    <div className="text-gray-300 text-sm leading-relaxed">
                                        <p className="font-semibold">Hyderabad</p>
                                        <p>(Formerly Pitti Laminations Limited) Survey No : 1837, Jingoniguda Road Nandigaon Village, Kothur Mandal Ranga Reddy District - 509 233 Telangana - India</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                                    <div className="text-gray-300 text-sm leading-relaxed">
                                        <p className="font-semibold">Aurangabad</p>
                                        <p>(Formerly Pitti Laminations Limited) Gut No.194, Limbe Jalgaon Village, Limbe Jalgaon Village,Gangapur Mandal, Aurangabad District- 431133 Maharashtra - India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-gray-600 text-center">
                        <p className="text-gray-400 text-sm">
                            2015 © Pitti Engineering Limited. All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}