const OurBusiness = () => {
    return (
        <div className="bg-gradient-to-r from-[#adadad] to-[#242525] min-h-screen">
            <div className="marginal">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-2/3 lg:mt-80">
                        <img src="OurBusiness\image.png" alt="" />
                    </div>
                    <div className="lg:w-1/3 text-white ">
                        <img src="OurBusiness\image1.png" alt=""
                        className="h-40 lg:translate-x-[155%] lg:translate-y-[15%]" />
                        <h1 className="text-3xl lg:text-5xl font-semibold">
                            Our Business
                        </h1>
                        <p className="text:lg lg:text-xl mt-5 mb-10">
                            Over the years, we have continually evolved to meet dynamic customer requirements and seize emerging market opportunities. This evolution has involved diversifying and enhancing our engineering capabilities and manufacturing processes.
                            <br />
                            <br />
                            Today, our operations include machined castings, core building, shaft manufacturing and assembly, air gap turning, laser cutting, cleat forming, spot and special welding, heat treatment, precision machining, tool manufacturing, and fabrication.
                            <br />
                            <br />
                            These advanced capabilities enable us to manufacture and supply a broad range of high-value-added components, subassemblies, and ready-to-wind assemblies for use in rotating equipment such as stators and rotors. Our products serve a diverse array of industries, and our integrated end-to-end supply chain ensures seamless delivery and superior value for our customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBusiness
