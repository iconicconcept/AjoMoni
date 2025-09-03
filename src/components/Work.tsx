
const Work = () => {
  return (
    <section id="work" className=" w-full">
      <div className="max-w-360 flex flex-col lg:flex-row justify-between items-center gap-2 md:gap-5 lg:gap-8 py-1 md:py-3 lg:py-4 mx-auto lg:pl-12">
        {/* phone 1 */}
        <div className="relative pt-40">
          <img
            src="/phone1.png"
            alt="step-1"
            className="h-auto md:h-auto lg:h-auto w-auto absolute top-2 left-15"
          />

          <div className="bg-[#EEF8E9] px-6 pb-5 pt-15 w-70 rounded-2xl flex flex-col gap-1.5 text-gray-950">
            <img src="/user.png" alt="user" className="size-10" />
            <h2 className="font-semibold text-[17px]">Easy Account Opening</h2>
            <p className="font-normal text-[14px]">No paperwork. No stress. Just your phone, a few taps, and you’re in.</p>
          </div>
        </div>

        {/* phone 2 */}
        <div className="relative pt-40">
          <img
            src="/phone2.png"
            alt="step-2"
            className="h-auto md:h-auto lg:h-auto w-auto absolute top-2 left-15"
          />

          <div className="bg-[#EEF8E9] px-6 pb-5 pt-15 w-70 rounded-2xl flex flex-col gap-1.5 text-gray-950">
            <img src="/team.png" alt="user" className="size-10" />
            <h2 className="font-semibold text-[17px]">Create and join Ajo Group</h2>
            <p className="font-normal text-[14px]">Start your own group or join one with a code — easy and fast.</p>
          </div>
        </div>

        {/* phone 3 */}
        <div className="relative pt-40">
          <img
            src="/phone3.png"
            alt="step-3"
            className="h-50 md:h-70 lg:h-60 w-auto absolute top-2 right-0"
          />

          <div className="bg-[#EEF8E9] px-6 pb-5 pt-15 w-70 rounded-2xl flex flex-col gap-1.5 text-gray-950">
            <img src="/tracking.png" alt="user" className="size-10" />
            <h2 className="font-semibold text-[17px]">Contribution Tracking</h2>
            <p className="font-normal text-[14px]">See who has paid, whos due , and get notified of each contribution in real time</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
