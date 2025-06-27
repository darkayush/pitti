import ReadMoreButton from '../Components/ReadMoreButton';
const BOD = () => {
    return (
        <div>
            <div className='marginal'>
                <div>
                    <h1 className='lg:text-5xl text-3xl text-center text-[#249380] font-semibold mb-10 '>Board of Directors</h1>
                    <div className='flex lg:flex-row flex-col gap-10'>
                        <div className='lg:w-1/2'>
                            <img src="BOD/1.png" alt=""
                                className='lg:h-150' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className='lg:text-3xl text-2xl text-[#dc3545] font-semibold '>Sharad B Pitti</h1>
                            <h2 className='lg:text-xl text-lg text-[#949494] mb-5'>Founder & Chairman</h2>
                            <p className='lg:text-lg text-md text-[#949494]'>Sharad B Pitti, founder of the Company, is a visionary leader who played a pioneering role in establishing and advancing the lamination manufacturing industry in India. With an illustrious career spanning over four decades, he has been instrumental in steering the Company toward consistent growth and long-term success. Under his leadership, the Company has evolved from a modest beginning into a respected name in the industry, known for its innovation, quality, and commitment to excellence. His deep industry knowledge, entrepreneurial spirit, and unwavering dedication have laid a strong foundation for the Company’s achievements and continue to inspire future generations.</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-8 mt-10'>
                        <div className='lg:w-1/4 flex flex-col'>
                            <img src="BOD/2.png" alt="" className='mb-5' />
                            <h1 className='lg:text-3xl text-2xl text-[#dc3545] font-semibold'>Akshay S Pitti</h1>
                            <h2 className='lg:text-xl text-lg text-[#949494] lg:mb-12 mb-5'>MD & CEO</h2>
                            <p className='lg:text-lg text-md text-[#949494]  pb-5 flex-grow'>Akshay S Pitti has been an integral part of the Company's leadership since October ,2004, serving as a Whole-Time Director and now holding the position of MD & CEO.</p>
                            <ReadMoreButton />
                        </div>
                        <div className='lg:w-1/4 flex flex-col'>
                            <img src="BOD/3.png" alt="" className='mb-5' />
                            <h1 className='lg:text-3xl text-2xl text-[#dc3545] font-semibold'>Y B Sahgal</h1>
                            <h2 className='lg:text-xl text-lg text-[#949494] mb-5'>Non-Executive Independent Director</h2>
                            <p className='lg:text-lg text-md text-[#949494] pb-5 flex-grow'>Y  B Sahgal is a seasoned Mechanical Engineer with over four decades of rich and ,diverse experience in the engineering and manufacturing industry.</p>
                            <ReadMoreButton />
                        </div>
                        <div className='lg:w-1/4 flex flex-col'>
                            <img src="BOD/4.png" alt="" className='mb-5' />
                            <h1 className='lg:text-3xl text-2xl text-[#dc3545] font-semibold'>N Vinod Kumar</h1>
                            <h2 className='lg:text-xl text-lg text-[#949494] mb-5'>Non-Executive Independent Director</h2>
                            <p className='lg:text-lg text-md text-[#949494] pb-5 flex-grow'>N. Vinod Kumar is a Fellow Member of the Institute of Chartered Accountants of India, with over three decades of extensive experience in finance, accounts, and corporate governance within Central Public Sector Undertakings ,(CPSUs).</p>
                            <ReadMoreButton />
                        </div>
                        <div className='lg:w-1/4 flex flex-col'>
                            <img src="BOD/5.png" alt="" className='mb-5' />
                            <h1 className='lg:text-3xl text-2xl text-[#dc3545] font-semibold'>Priti Paras Savla</h1>
                            <h2 className='lg:text-xl text-lg text-[#949494] mb-5'>Non-Executive Independent Director</h2>
                            <p className='lg:text-lg text-md text-[#949494] pb-5 flex-grow'>Priti Paras Savla is a Fellow Chartered Accountant with over 2 decades of expertise in ,strategic planning, business advisory, corporate governance, ESG advisory, CSR and impact assessment, audit, and risk mitigation.</p>
                            <ReadMoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BOD
