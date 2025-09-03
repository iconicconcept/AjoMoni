
const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-[#EEF8E9] py-9 md:h-[90vh] px-5 md:px-13 lg:px-20 section-padding background-image"
    >
      <div className="container-fintech max-w-7xl mx-auto">
        {/* <div className="overlay"></div> */}
        <div className="">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up bg-[#eef8e9]/40 md:bg-transparent">
            <div className="space-y-4">
              <h1 className="text-4xl max-w-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Saving the{" "}
                <span className="text-fintech-primary">Nigerian</span> Way.{" "}
                <span className="text-fintech-primary">Digitally.</span>
              </h1>
              <p className="text-[17px] leading-5 text-gray-600 max-w-2xl text-gray-950 font-bold md:font-normal">
                Join trusted groups, contribute turn by turn, and reach your
                financial goals easily, all from your phone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* downlaod button */}
              <button className="px-2.5 py-1.5 shadow-xs shadow-gray-600 cursor-pointer hover:bg-[#57B524]/80 hover:scale-3d border border-gray-200 hidden md:flex md:gap-2 md:justify-center md:items-center bg-[#57B524] text-white rounded-full">
                <div className="flex justify-center items-center">
                  <img
                    src="/playstore.png"
                    alt="playstore"
                    className="h-5 w-5 mt-0.5 ml-0.3"
                  />
                  <span className="text-[14px] font-extralight">|</span>
                  <img
                    src="/AppleLogo1.png"
                    alt="playstore"
                    className="h-3 w-3 ml-1 mb-0.3"
                  />
                </div>
                <p className="font-medium text-[14px]">Download App</p>
              </button>

              {/* start button */}
              <button className="px-8 py-1.5 shadow-xs shadow-gray-600 cursor-pointer bg-transparent hover:text-white hover:border hover:border-[#57B524] hidden md:flex md:gap-2 md:justify-center md:items-center hover:bg-[#57B524] text-[#57B524] rounded-full">
                <p className="font-medium text-[14px]">Get Started</p>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-start items-center pt-2 gap-3">
                  <img
                    src="/cbnfull.png"
                    alt="playstore"
                    className="h-7 w-24"
                  />

                  <img
                    src="/ndic.png"
                    alt="playstore"
                    className="h-12 w-30"
                  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
