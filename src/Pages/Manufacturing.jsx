import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const Manufacturing = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  
  // Location data based on the reference image
  const locations = [
    {
      id: 1,
      name: "Nandigaon Village Facility",
      address: "Survey No.1603 & 1607, Nandigaon village, Kothur, Rangareddy, Telangana, 509228",
      position: { top: '68%', left: '42%' }, // Telangana area
      image: "ManufacturingLocations/kothur.png" // Update with your actual image path
    },
    {
      id: 2,
      name: "Mumbai Manufacturing Unit",
      address: "Survey No.2401 & 2402, Industrial Area, Mumbai, Maharashtra, 400001",
      position: { top: '52%', left: '18%' }, // Maharashtra - Mumbai area
      image: "/images/manufacturing/facility-2.jpg" // Update with your actual image path
    },
    {
      id: 3,
      name: "Pune Production Center",
      address: "Survey No.1201 & 1205, Industrial Zone, Pune, Maharashtra, 411001",
      position: { top: '55%', left: '25%' }, // Maharashtra - Pune area
      image: "/images/manufacturing/facility-3.jpg" // Update with your actual image path
    },
    {
      id: 4,
      name: "Hyderabad Facility",
      address: "Survey No.3301 & 3307, Industrial Estate, Hyderabad, Telangana, 500001",
      position: { top: '60%', left: '40%' }, // Telangana - Hyderabad area
      image: "/images/manufacturing/facility-4.jpg" // Update with your actual image path
    }
  ];

  const handlePointerClick = (location) => {
    setSelectedLocation(location);
    // Reset image error state when selecting a new location
    if (imageErrors[location.id]) {
      setImageErrors(prev => ({
        ...prev,
        [location.id]: false
      }));
    }
  };

  const handleImageError = (locationId) => {
    setImageErrors(prev => ({
      ...prev,
      [locationId]: true
    }));
  };

  return (
    <div className="bg-gradient-to-r from-[#c0c3c7] to-[#dedfe2] min-h-screen pb-10">
      <div className="marginal">
        <div className="flex lg:flex-row flex-col min-h-screen">
          {/* Left Side - Map with Pointers */}
          <div className="lg:w-1/2 relative">
            <div 
              className="bg-[url('ManufacturingLocations/india.png')] bg-contain bg-center bg-no-repeat min-h-[92vh] relative"
              style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}
            >
              {/* Interactive Pointers */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ 
                    top: location.position.top, 
                    left: location.position.left 
                  }}
                  onClick={() => handlePointerClick(location)}
                >
                  {/* Pointer Icon */}
                  <div className={`relative transition-all duration-300 hover:scale-110 ${
                    selectedLocation?.id === location.id ? 'scale-125' : ''
                  }`}>
                    <MapPin 
                      className={`w-8 h-8 transition-all duration-300 ${
                        selectedLocation?.id === location.id 
                          ? 'text-red-500 drop-shadow-lg' 
                          : 'text-white drop-shadow-md hover:text-teal-200'
                      }`}
                      fill="currentColor"
                    />
                    
                    {/* Pulse animation for selected pointer */}
                    {selectedLocation?.id === location.id && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 border-2 border-red-500 rounded-full animate-ping opacity-60"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-12">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-teal-600 mb-6">
                Manufacturing
                <br />
                <span className="">Locations</span>
              </h1>
              
              <p className="text-gray-600 text-lg ">
                Our manufacturing facilities are strategically located in the 
                state of Telangana and Maharashtra. These state-of-the-art units 
                form the backbone of our operations, enabling us to support and 
                deliver a diverse and high-quality product portfolio. We specialize 
                in producing electrical steel laminations, motor cores, stator and 
                rotor core assemblies, sub-assemblies, die-cast rotors, precision-machined 
                components, and castings. Through these facilities, we ensure operational 
                excellence, innovation, and responsiveness to the evolving needs of our 
                customers across industries.
              </p>
            </div>

            {/* Location Details Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {selectedLocation ? (
                <div className="transform transition-all duration-500 ease-in-out">
                  {/* Image Section */}
                  <div className="relative h-56 bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden">
                    {/* Real Image */}
                    <img 
                      src={selectedLocation.image} 
                      alt={selectedLocation.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Overlay */}
                    <div className=""></div>
                    <div className="absolute bottom-4 left-4 text-black">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-sm font-medium">Manufacturing Facility</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {selectedLocation.name}
                    </h3>
                    
                    <div className="bg-gray-800 text-white p-4 rounded-lg">
                      <p className="text-sm leading-relaxed">
                        {selectedLocation.address}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium">
                      View Facility Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Explore Our Facilities
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Click on any location marker to view detailed information about our manufacturing facilities
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;