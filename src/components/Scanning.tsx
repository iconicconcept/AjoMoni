import React from "react";

const Scanning = () => {
  return (
    <section id="contact" className="bg-white py-9 lg:py-12 mx-auto">
      <div className="flex flex-col justify-center items-center lg:flex-row px-4 lg:px-13 mx-auto max-w-500">
            {/* first div */}
        <div className="flex justify-center items-center pl-10 lg:pl-20">
            <img src="/phone4.png" alt="contented woman" className="lg:h-130 w-auto lg:w-180" />
        </div>

        {/* second div */}
        <div className="flex flex-col justify-center items-center">
            {/* text */}
          <div className="flex items-center justify-center md:gap-1">
            <h2 className="text-2xl font-bold">Start <br></br> Saving <br></br> Smarter</h2>
            <img src="/QRcode.png" alt="QRcode" className="h-60 lg:h-90 w-auto " />
          </div>

          {/* other texts */}
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            <h2 className="text-2xl font-normal text-center leading-tighter">Use your phones camera to scan and download the Ajo Moni app Available on iOS and Android</h2>
            {/* downlaod button */}
              <button className="px-2.5 lg:px-10 py-1.5 lg:py-2 shadow-xs shadow-gray-600 cursor-pointer hover:bg-[#57B524]/85 hover:scale-3d border border-gray-200 hidden md:flex md:gap-2 md:justify-center md:items-center bg-[#57B524] text-white rounded-full">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Scanning;
