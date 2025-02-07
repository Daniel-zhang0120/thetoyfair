import Image from "next/image";
import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/images/Toy_fair_im1.png"
          alt="Sports Licensing Event Banner"
          fill
          className="object-cover brightness-75"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <p className="text-[#F249CD] text-lg md:text-[30px] leading-normal tracking-[0px] font-poppins font-bold animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
              12 January 2026 - 28 February 2026
            </p>
            <h1 className="text-4xl md:text-[96px] leading-tight md:leading-[93.5px] tracking-[-2px] md:tracking-[-8px] font-normal mb-4 font-tilt-warp">
              <span className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
                Sourcing <span className="text-[#4AD966] font-normal">toys</span> has never been
              </span>
              <br />
              <span className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]">
                <span className="text-[#4AD966] font-normal">so much fun !</span>
              </span>
            </h1>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.8s]">
              Join the fun!
            </button>
          </div>
        </div>
      </div>
  );
};

export default HomeHeroSection;
