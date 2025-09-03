import React from "react";

const Partners = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl flex justify-center items-center gap-2 md:gap-6 lg:gap-10 py-2 md:py-4 lg:py-6 mx-auto">
        {/* piggyveest */}
        <img
          src="./piggyvest.png"
          alt="cowrywise"
          className="h-25 md:h-30 lg:h-36 w-auto"
        />

        {/* cowrywise */}
        <img
          src="./cowrywise.png"
          alt="cowrywise"
          className="h-25 md:h-30 lg:h-36 w-auto"
        />

        {/* kuda */}
        <img
          src="./kuda.png"
          alt="cowrywise"
          className="h-25 md:h-30 lg:h-36 w-auto"
        />
      </div>
    </section>
  );
};

export default Partners;
