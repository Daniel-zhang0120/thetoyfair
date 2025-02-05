import React from "react";

const HeroSection = ({title}) => {
  return (
    <>
      <section className="pt-20 bg-white pt-100 h-full">
        <div className="inset-0">
          <div >
            <h1 className="font-poppins text-center font-extrabold break-words text-[44px] sm:text-[60px] lg:text-[72px] xl:text-[90px] leading-[1.7] tracking-[1.0px] bg-gradient-to-r from-[#F249CD] to-[#9747FF] bg-clip-text text-transparent z-50">
              {title}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
