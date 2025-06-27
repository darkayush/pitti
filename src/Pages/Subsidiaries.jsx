import { useState } from 'react';
import ReadMoreButton from '../Components/ReadMoreButton'
const Subsidiaries = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const images = [
        {
            src: "Subsidaries/1.png",
            alt: "Pitti Industries Private Limited"
        },
        {
            src: "Subsidaries/2.png", 
            alt: "Dakshin Foundry Private Limited"
        }
    ];

    const openZoom = (imageSrc) => {
        setZoomedImage(imageSrc);
    };

    const closeZoom = () => {
        setZoomedImage(null);
    };

    return (
        <>
            <div className="bg-[url('Subsidaries/bg.png')] bg-cover bg-center min-h-[50vh]">
                <div className="bg-gradient-to-r from-[#394153] to-transparent min-h-[50vh]">
                    <div className="marginal">
                        <div className="text-white">
                            <div className="flex lg:flex-row flex-col gap-10">
                                <div className="lg:w-2/4">
                                    <h1 className="lg:text-5xl text-3xl font font-semibold">Subsidiaries</h1>
                                    <p className="text:lg lg:text-xl mt-5 mb-10 flex-grow">We have two wholly owned subsidiaries—Pitti Industries Private Limited and Dakshin Foundry Private Limited—situated in Karnataka, enhancing our regional penetration and supporting our strategic growth. These entities strengthen our capabilities, broaden our offerings, and enable us to deliver greater value to our stakeholders across key sectors.</p>
                                    <ReadMoreButton/>
                                </div>
                                
                                {images.map((image, index) => (
                                    <div key={index} className="lg:w-1/4 relative group cursor-pointer" onClick={() => openZoom(image.src)}>
                                        <div className="relative overflow-hidden rounded-3xl h-80">
                                            <img 
                                                src={image.src} 
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                            />
                                            
                                            {/* Overlay with zoom icon */}
                                            <div className="absolute inset-0 bg-black opacity-50 transition-all duration-300 flex items-center justify-center">
                                                <div className="transition-all duration-300">
                                                    {/* Zoom Icon */}
                                                    <div className="flex flex-col items-center text-white">
                                                        <div className="border-4 border-white rounded-lg p-4 mb-3">
                                                            <div className="w-8 h-8 border-4 border-white rounded-full relative">
                                                                <div className="absolute -right-2 -bottom-2 w-3 h-1 bg-white transform rotate-45 rounded-full"></div>
                                                            </div>
                                                            <div className="text-4xl font-bold text-center mt-2">+</div>
                                                        </div>
                                                        <span className="text-lg font-semibold tracking-wider">CLICK TO ZOOM</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoom Modal */}
            {zoomedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeZoom}
                >
                    <div className="relative max-w-7xl max-h-full">
                        {/* Close button */}
                        <button 
                            onClick={closeZoom}
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-200 z-10"
                        >
                            ×
                        </button>
                        
                        {/* Zoomed Image */}
                        <img 
                            src={zoomedImage} 
                            alt="Zoomed view"
                            className="max-w-full max-h-full object-contain rounded-2xl animate-zoom-in shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes zoom-in {
                    from { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                .animate-zoom-in {
                    animation: zoom-in 0.4s ease-out;
                }
            `}</style>
        </>
    );
};

export default Subsidiaries;