import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the original ReadMoreButton
import ReadMoreButton from '../Components/ReadMoreButton';

const BOD = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Updated directors array with 5 directors as shown in the image
    const directors = [
        {
            id: 1,
            image: "BOD/2.png",
            name: "Akshay S Pitti",
            position: "MD & CEO",
            description: "Akshay S Pitti has been an integral part of the Company's leadership since October 2004, serving as a Whole-Time Director and now holding the position of MD & CEO."
        },
        {
            id: 2,
            image: "BOD/3.png",
            name: "Y B Sahgal",
            position: "Non-Executive Independent Director",
            description: "Y B Sahgal is a seasoned Mechanical Engineer with over four decades of rich and diverse experience in the engineering and manufacturing industry."
        },
        {
            id: 3,
            image: "BOD/4.png",
            name: "N Vinod Kumar",
            position: "Non-Executive Independent Director",
            description: "N. Vinod Kumar is a Fellow Member of the Institute of Chartered Accountants of India, with over three decades of extensive experience in finance, accounts, and corporate governance within Central Public Sector Undertakings (CPSUs)."
        },
        {
            id: 4,
            image: "BOD/5.png",
            name: "Priti Paras Savla",
            position: "Non-Executive Independent Director",
            description: "Priti Paras Savla is a Fellow Chartered Accountant with over 2 decades of expertise in strategic planning, business advisory, corporate governance, ESG advisory, CSR and impact assessment, audit, and risk mitigation."
        },
        {
            id: 5,
            image: "BOD/6.png",
            name: "Kemisha Soni",
            position: "Chartered Accountant",
            description: "Kemisha Soni is a Chartered Accountant with over two decades of experience in the fields of accounting, auditing, and taxation. In August 2024, she was appointed as an Independent Director of the Company."
        }
    ];

    const nextSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => 
            prevIndex === directors.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? directors.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index, e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Animation variants for mobile carousel
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const slideTransition = {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
    };

    const DirectorCard = ({ director, isMobile = false, isDesktop = false }) => (
        <div className={`flex flex-col ${isMobile ? 'w-full' : ''} ${isDesktop ? 'text-center' : ''}`}>
            <div className={`${isDesktop ? 'mb-4' : 'mb-5'} ${isDesktop ? 'flex justify-center' : ''}`}>
                <img 
                    src={director.image} 
                    alt={director.name}
                    className={`${isDesktop ? 'w-48 h-48 object-cover rounded-lg' : 'w-full'}`}
                />
            </div>
            <h1 className={`${isDesktop ? 'text-xl' : 'lg:text-3xl text-2xl'} text-[#dc3545] font-semibold ${isDesktop ? 'mb-2' : ''}`}>
                {director.name}
            </h1>
            <h2 className={`${isDesktop ? 'text-sm text-gray-500 mb-3' : 'lg:text-xl text-lg text-[#949494] lg:mb-12 mb-5'}`}>
                {director.position}
            </h2>
            <p className={`${isDesktop ? 'text-sm text-gray-600 mb-4 flex-grow' : 'lg:text-lg text-md text-[#949494] pb-5 flex-grow'}`}>
                {director.description}
            </p>
            <div className={`${isDesktop ? 'flex justify-center' : ''}`}>
                <ReadMoreButton />
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='px-4 lg:px-8 max-w-7xl mx-auto'>
                <div>
                    <motion.h1 
                        className='lg:text-5xl text-3xl text-center text-[#249380] font-semibold mb-10'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Board of Directors
                    </motion.h1>
                    
                    {/* Founder and MD & CEO Section - Similar to image layout */}
                    <motion.div 
                        className='flex lg:flex-row flex-col gap-10 mb-16'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Founder */}
                        <motion.div 
                            className='lg:w-1/2 text-center'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='mb-6'>
                                <img src="BOD/1.png" alt="Sharad B Pitti"
                                    className='w-64 h-64 object-cover rounded-lg shadow-lg mx-auto' />
                            </div>
                            <motion.h1 
                                className='text-2xl lg:text-3xl text-[#dc3545] font-semibold mb-2'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Sharad B Pitti
                            </motion.h1>
                            <motion.h2 
                                className='text-lg lg:text-xl text-[#949494] mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Founder & Chairman
                            </motion.h2>
                            <motion.p 
                                className='text-sm lg:text-base text-[#949494] text-justify max-w-md mx-auto mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Sharad B Pitti, founder of the Company, is a visionary leader who played a pioneering role in establishing and advancing the lamination manufacturing industry in India. With an illustrious career spanning over four decades, he has been instrumental in steering the Company toward consistent growth and long-term success.
                            </motion.p>
                            <ReadMoreButton />
                        </motion.div>

                        {/* MD & CEO */}
                        <motion.div 
                            className='lg:w-1/2 text-center'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='mb-6'>
                                <img src="BOD/2.png" alt="Akshay S Pitti"
                                    className='w-64 h-64 object-cover rounded-lg shadow-lg mx-auto' />
                            </div>
                            <motion.h1 
                                className='text-2xl lg:text-3xl text-[#dc3545] font-semibold mb-2'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Akshay S Pitti
                            </motion.h1>
                            <motion.h2 
                                className='text-lg lg:text-xl text-[#949494] mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                MD & CEO
                            </motion.h2>
                            <motion.p 
                                className='text-sm lg:text-base text-[#949494] text-justify max-w-md mx-auto mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Akshay S Pitti has been an integral part of the Company's leadership since October 2004, serving as a Whole-Time Director and now holding the position of MD & CEO. From the early stages of his career, he demonstrated a deep commitment to understanding the business at every level.
                            </motion.p>
                            <ReadMoreButton />
                        </motion.div>
                    </motion.div>

                    {/* Desktop Layout for Other Directors - 4 in a row as per image */}
                    <motion.div 
                        className='hidden lg:block'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className='grid grid-cols-4 gap-6'>
                            {directors.slice(1).map((director, index) => (
                                <DirectorCard key={director.id} director={director} isDesktop={true} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Mobile Carousel for All Directors */}
                    <div className='lg:hidden mt-10'>
                        <div className='relative'>
                            {/* Carousel Container - Auto height to show all content */}
                            <div className='relative overflow-hidden'>
                                <AnimatePresence initial={false} custom={1} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={1}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={slideTransition}
                                        className="w-full"
                                    >
                                        <DirectorCard 
                                            director={directors[currentIndex]} 
                                            isMobile={true}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation Arrows - Fixed positioning */}
                            <div className='flex justify-between items-center mt-6 px-4'>
                                <motion.button 
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className='bg-white rounded-full p-3 shadow-lg border-2 border-[#249380] disabled:opacity-50 z-10'
                                    whileHover={{ 
                                        scale: 1.1, 
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)' 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                >
                                    <ChevronLeft className='w-6 h-6 text-[#249380]' />
                                </motion.button>

                                <motion.button 
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className='bg-white rounded-full p-3 shadow-lg border-2 border-[#249380] disabled:opacity-50 z-10'
                                    whileHover={{ 
                                        scale: 1.1, 
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)' 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                >
                                    <ChevronRight className='w-6 h-6 text-[#249380]' />
                                </motion.button>
                            </div>

                            {/* Dots Indicator */}
                            <div className='flex justify-center mt-6 space-x-2'>
                                {directors.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={(e) => goToSlide(index, e)}
                                        disabled={isAnimating}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentIndex 
                                                ? 'bg-[#249380]' 
                                                : 'bg-gray-300'
                                        }`}
                                        whileHover={{ 
                                            scale: 1.2,
                                            backgroundColor: index !== currentIndex ? '#9ca3af' : '#249380'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{
                                            scale: index === currentIndex ? 1.2 : 1,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        type="button"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BOD;