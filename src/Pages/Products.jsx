import ReadMoreButton from '../Components/ReadMoreButton'
const Products = () => {
  return (
    <div className='bg-gradient-to-b from-[#374051] to-[#374f51] min-h-[50vh]'>
      <div className="marginal">
        <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/2 text-white">
                <h1 className="lg:text-5xl text-3xl font font-semibold">Products</h1>
                <p className="text:lg lg:text-xl mt-5 mb-10 flex-grow">We operate across two core product verticals—Rotating Electrical Equipment and Machined Components—both engineered to meet the needs of a rapidly evolving industrial landscape, complemented by our specialized Foundry Division.In the Rotating Electrical Equipment segment, we manufacture precision laminations up to 1300 mm in diameter, stator assemblies reaching heights of up to 1800 mm and weights up to 10 tons, and die-cast rotors with a maximum weight of 180 kg and height of 1500 mm. Our facilities support high-volume, high-accuracy production, ensuring consistency across complex geometries and demanding tolerances.</p>
                <ReadMoreButton/>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <img src="Products\image.png" alt=""
                className="h-100" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
