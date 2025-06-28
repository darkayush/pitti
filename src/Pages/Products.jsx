import ReadMoreButton from '../Components/ReadMoreButton'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Products = () => {
  const carouselImages = [
    "Products/image.png",
    "Products/image2.png", 
    "Products/image3.png",
    "Products/image4.png"
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots slick-vertical-dots",
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all duration-300"></div>
    )
  }

  return (
    <div className='bg-gradient-to-b from-[#374051] to-[#374f51] min-h-[50vh]'>
      <div className="marginal">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 text-white">
            <h1 className="lg:text-5xl text-3xl font font-semibold">Products</h1>
            <p className="text:lg lg:text-xl mt-5 mb-10 flex-grow">
              We operate across two core product verticals—Rotating Electrical Equipment and Machined Components—both engineered to meet the needs of a rapidly evolving industrial landscape, complemented by our specialized Foundry Division. In the Rotating Electrical Equipment segment, we manufacture precision laminations up to 1300 mm in diameter, stator assemblies reaching heights of up to 1800 mm and weights up to 10 tons, and die-cast rotors with a maximum weight of 180 kg and height of 1500 mm. Our facilities support high-volume, high-accuracy production, ensuring consistency across complex geometries and demanding tolerances.
            </p>
            <ReadMoreButton/>
          </div>
          <div className="lg:w-1/2 flex justify-center relative pr-16">
            <div className="w-full max-w-lg h-96 relative">
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <img 
                      src={image} 
                      alt={`Product ${index + 1}`}
                      className="w-full h-96 object-cover rounded-xl shadow-2xl" 
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slick-vertical-dots {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex !important;
          flex-direction: column;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 16px;
          z-index: 10;
        }
        
        .slick-vertical-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }
        
        .slick-vertical-dots li button {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.8);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          outline: none;
        }
        
        .slick-vertical-dots li button:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .slick-vertical-dots li.slick-active button {
          background: white;
          border-color: white;
        }
        
        .slick-vertical-dots li button:before {
          display: none;
        }

        .slick-slider {
          position: relative;
        }
        
        .slick-list {
          border-radius: 12px;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Products