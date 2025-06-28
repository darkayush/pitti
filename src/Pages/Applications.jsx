import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Applications = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(0);
    
    const applications = [
        {
            image: "Applications/1.png",
            title: "MEDICAL EQUIPMENT",
            alt: "Medical Equipment"
        },
        {
            image: "Applications/2.png", 
            title: "DATA CENTRES",
            alt: "Data Centres"
        },
        {
            image: "Applications/3.png",
            title: "THERMAL POWER", 
            alt: "Thermal Power"
        }
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === applications.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? applications.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 600);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    // Animation variants for the carousel cards
    const cardVariants = {
        left: {
            x: -400,
            y: 50,
            scale: 0.75,
            opacity: 0.7,
            rotate: 2,
            zIndex: 10,
        },
        center: {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            zIndex: 20,
        },
        right: {
            x: 330,
            y: -50,
            scale: 0.75,
            opacity: 0.7,
            rotate: -2,
            zIndex: 10,
        }
    };

    const cardTransition = {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1
    };

    const renderImageCard = (appIndex, position, animationKey) => {
        const app = applications[appIndex];
        const isCenter = position === 'center';
        
        return (
            <motion.div 
                key={animationKey}
                className="absolute top-1/2 left-1/2"
                style={{ transformOrigin: 'center center' }}
                variants={cardVariants}
                animate={position}
                transition={cardTransition}
                initial={position}
            >
                <motion.div 
                    className={`bg-white rounded-xl overflow-hidden ${isCenter ? 'shadow-2xl' : 'shadow-lg'}`}
                    style={{ 
                        transformOrigin: 'center center',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className={isCenter ? 'w-96 h-72' : 'w-72 h-56'}>
                        <motion.img 
                            src={app.image} 
                            alt={app.alt}
                            className='w-full h-full object-cover'
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                    <motion.div 
                        className={isCenter ? 'p-6' : 'p-3'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <motion.h3 
                            className={`font-bold text-red-600 text-center ${isCenter ? 'text-xl tracking-wide' : 'text-sm'}`}
                        >
                            {app.title}
                        </motion.h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <motion.div 
            className='bg-gray-50 py-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-7xl mx-auto px-4'>
                <motion.div 
                    className='mb-12'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h1 
                        className='text-4xl lg:text-5xl font-bold text-teal-600 mb-6'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Applications
                    </motion.h1>
                    <motion.p 
                        className='text-gray-600 text-lg max-w-4xl mb-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Our diverse product portfolio supports a wide range of industrial applications, enabling us to serve evolving market needs and deliver value across multiple sectors.
                    </motion.p>
                    <motion.p 
                        className='text-gray-600 text-lg max-w-4xl'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        We cater to a broad spectrum of industries including: Appliances, Cement, Construction, Data Centres, DG Sets, Electric Vehicle Motors, Freight Rail, Hydro Generators, Lift Irrigation, Medical Equipment, Mining, Mass Urban Transport, Oxygen Plants, Passenger Rail, Pumps, Steel, Sugar, Thermal Power, Windmill Generators, and Wind Energy.
                    </motion.p>
                </motion.div>

                {/* Carousel Container */}
                <motion.div 
                    className='relative h-[500px] flex items-center justify-center overflow-hidden'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {/* Left Arrow */}
                    <motion.div 
                        className='absolute left-16 top-2/3 z-30'
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <motion.button 
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className='bg-white rounded-full p-3 shadow-lg border-2 border-teal-500 disabled:opacity-50'
                            whileHover={{ 
                                scale: 1.1, 
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                borderColor: '#0d9488'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <ChevronLeft className='w-6 h-6 text-teal-600' />
                        </motion.button>
                    </motion.div>

                    {/* Images Container */}
                    <div className='relative w-full h-full'>
                        <AnimatePresence mode="wait">
                            {/* Left Image */}
                            {renderImageCard(
                                (currentIndex - 1 + applications.length) % applications.length, 
                                'left',
                                `left-${currentIndex}`
                            )}
                            
                            {/* Center Image */}
                            {renderImageCard(
                                currentIndex, 
                                'center',
                                `center-${currentIndex}`
                            )}
                            
                            {/* Right Image */}
                            {renderImageCard(
                                (currentIndex + 1) % applications.length, 
                                'right',
                                `right-${currentIndex}`
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <motion.div 
                        className='absolute right-16 top-1/3 z-30'
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <motion.button 
                            onClick={nextSlide}
                            disabled={isAnimating}
                            className='bg-white rounded-full p-3 shadow-lg border-2 border-teal-500 disabled:opacity-50'
                            whileHover={{ 
                                scale: 1.1, 
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                borderColor: '#0d9488'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <ChevronRight className='w-6 h-6 text-teal-600' />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Dots Indicator */}
                <motion.div 
                    className='flex justify-center mt-8 space-x-3'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    {applications.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`w-4 h-4 rounded-full transition-all duration-300 disabled:opacity-50 ${
                                index === currentIndex 
                                    ? 'bg-teal-600 shadow-lg' 
                                    : 'bg-gray-300'
                            }`}
                            whileHover={{ 
                                scale: index !== currentIndex ? 1.2 : 1.25,
                                backgroundColor: index !== currentIndex ? '#9ca3af' : '#0d9488'
                            }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                scale: index === currentIndex ? 1.25 : 1,
                                backgroundColor: index === currentIndex ? '#0d9488' : '#d1d5db'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Applications;