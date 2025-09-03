import React from "react";

const CardSection = () => {
  return (
    <section id="features" className="bg-white py-5">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-7 lg w-full max-w-500 px-1 mx-auto">
        {/* first div */}
        <div className="text-white bg-[#57B524] rounded-2xl">
          {/*number 1*/}
          <div className="flex flex-col justify-center lg:justify-start items-center md:items-start gap-2 px-3 py-5 md:py-6">
          <h1 className="font-bold text-center lg:text-start leading-tight text-3xl lg:max-w-2xl"> Auto-Debit Setup & Support</h1>
          <p className="font-normal text-[15px] text-center lg:text-start lg:max-w-2xl">
            Stay updated with intelligent reminders and real-time alerts. Ajo
            Moni notifies you before each contribution, when payouts happen, or
            if your group activity needs attention — so you never miss anything.
          </p>  
        </div>

          {/*number 2*/}
          <div className="flex justify-center lg:justify-end w-full rounded-b-2xl mt-2">
            <img src="/woman1.png" alt="contented woman" className="h-80 w-full lg:w-auto rounded-b-2xl lg:rounded-br-2xl" />
          </div>
      </div>

        {/* second div */}
        <div className="rounded-2xl bg-[#57B524]">
          <div className="text-white bg-[#57B524] rounded-2xl flex flex-col justify-center items-center gap-2 px-3 py-3 md:py-6">
            <h1 className="font-bold text-3xl lg:max-w-2xl text-center leading-tight">Fraud Protection & Account Verification</h1>
            <p className="font-normal text-[15px] text-center lg:max-w-2xl">
              We verify all users and monitor group activity for unusual behavior. Ajo Moni protects your money and identity with real-name verification, secure logins, and fraud prevention systems you can trust.
            </p>
          </div>

          {/*number 2*/}
          <div className="flex justify-center lg:justify-end w-full rounded-b-2xl mt-2">
            <img src="/manholdingphone.png" alt="contented woman" className="h-80 w-full lg:w-auto rounded-b-2xl lg:rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
