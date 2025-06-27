import React from 'react'

const Applications = () => {
    return (
        <div className='bg-[#f3f4f6]'>
            <div className='marginal'>
                <div>
                    <h1 className='text-4xl lg:text-5xl font-bold text-teal-600 mb-6'>Applications</h1>
                    <p className='text-gray-600 text-lg '>Our diverse product portfolio supports a wide range of industrial applications, enabling us to serve evolving market needs and deliver value across multiple sectors.
                    <br />
                    We cater to a broad spectrum of industries including: Appliances, Cement, Construction, Data Centres, DG Sets, Electric Vehicle Motors, Freight Rail, Hydro Generators, Lift Irrigation, Medical Equipment, Mining, Mass Urban Transport, Oxygen Plants, Passenger Rail, Pumps, Steel, Sugar, Thermal Power, Windmill Generators, and Wind Energy.</p>
                </div>
                <div className='flex lg:flex-row flex-col gap-10 mt-10'>
                    <div className='lg:w-1/3'>
                        <img src="Applications\1.png" alt="" />
                        <h1 className='text-lg text-[#dc3545] text-center font-semibold'>Medical Equipment</h1>
                    </div>
                    <div className='lg:w-1/3'>
                        <img src="Applications\2.png" alt="" />
                        <h1 className='text-lg text-[#dc3545] text-center font-semibold'>Data Centres</h1>
                    </div>
                    <div className='lg:w-1/3'>
                        <img src="Applications\3.png" alt="" />
                        <h1 className='text-lg text-[#dc3545] text-center font-semibold'>Thermal Power</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applications
