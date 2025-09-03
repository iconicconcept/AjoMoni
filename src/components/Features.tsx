
const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-5 md:pt-7 mx-auto">
      <div className="flex flex-col items-center gap-4 md:gap-7 w-full max-w-500 mx-auto mt-5 md:mt-1">
        <h1 className="font-bold text-center leading-tight text-2xl text-gray-950">
          HOW AJO MONI HAS YOUR BACK
        </h1>
        <div className="mb-6 lg:mb-16 bg-[#57B524] rounded-[20px] flex flex-col lg:flex-row gap-10 ml:pl-6 lg:pl-12 pb-0 lg:mb-7 md:pb-13 h-max">
          {/* first div */}
          <div className="text-white flex flex-col items-center md:items-start gap-2 md:max-w-xl mt-10 md:mt-12 lg:mt-15 px-7 md:px-0">
            <h1 className="font-bold text-4xl"> Secure Payment Integration</h1>
            <p className="font-normal text-[14px] text-start">
              Every transaction on Ajo Moni is securely processed through
              trusted payment gateways, protecting your contributions and
              payouts from fraud, delays, or loss — with full encryption and
              real-time confirmation.
            </p>
          </div>

          {/* second div */}
          <div>
            <img src="/man-smiling.png" alt="smiling man" className="h-105 w-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
