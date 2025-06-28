import React from 'react'
import InvestorResultsTable from '../Components/InvestorResultsTable '

const Investor = () => {
    return (
        <>
            <div className="bg-[url('Investors/bg.png')] bg-cover bg-center min-h-screen">
                <div className='bg-black/60'>
                    <div className="marginal">
                        <div className="flex items-center min-h-screen">
                            <h1 className="md:text-7xl text-5xl font-semibold text-white">
                                Investors’ <br />
                                corner  <br />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='marginal'>
                <h1 className='text-4xl lg:text-5xl font-bold text-teal-600  text-center'>Financial Reporting</h1>
            </div>
            <div className='bg-gradient-to-b from-[#374051] to-[#374f51] pb-10 pt-10'>
                <div className='marginal'>
                    <div className='text-white text-center text-3xl'>
                        <h1>Highlights from our Full Year FY 2025 Results (Consolidated)</h1>
                    </div>
                    <div className='flex lg:flex-row flex-col text-center mt-10'>
                        <div className='lg:w-1/3'>
                            <h1 className='text-white text-4xl'>₹ 1743.36 crores</h1>
                            <h2 className='text-white text-xl mt-2'>Total Income</h2>
                        </div>
                        <div className='lg:w-1/3'>
                            <h1 className='text-white text-4xl'>₹ 271.12 crores</h1>
                            <h2 className='text-white text-xl mt-2'>EBITDA</h2>
                        </div>
                        <div className='lg:w-1/3'>
                            <h1 className='text-white text-4xl'>₹ 122.29 crores</h1>
                            <h2 className='text-white text-xl mt-2'>PAT</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-10 pb-10'>
                <div className='marginal'>
                    <div className='text-center text-3xl'>
                        <h1>Highlights from our Q4 FY 2025 Results (Consolidated)</h1>
                    </div>
                    <div className='flex lg:flex-row flex-col text-center mt-10'>
                        <div className='lg:w-1/3'>
                            <h1 className='text-4xl'>₹₹ 472.30 crores</h1>
                            <h2 className='text-xl mt-2'>Total Income</h2>
                        </div>
                        <div className='lg:w-1/3'>
                            <h1 className='text-4xl'>₹ 80.07 crores</h1>
                            <h2 className='text-xl mt-2'>EBITDA</h2>
                        </div>
                        <div className='lg:w-1/3'>
                            <h1 className='text-4xl'>₹ 36.14 crores</h1>
                            <h2 className='text-xl mt-2'>PAT</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className='marginal'>
                    <InvestorResultsTable />
                </div>
            </div>

        </>
    )
}

export default Investor
