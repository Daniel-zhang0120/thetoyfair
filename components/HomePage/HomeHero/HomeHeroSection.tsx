import Image from "next/image";
import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/images/TGFUSA.png"
          alt="The gift fair USA"
          fill
          className="object-cover w-full h-full brightness-100"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 100vw,
                 100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="mt-16 md:mt-32 px-4 md:px-0 flex justify-end">
          <div className="max-w-full md:max-w-[800px] mr-4 md:mr-8">
            <h1 className="text-3xl md:text-[96px] leading-tight md:leading-[93.5px] tracking-[-1px] md:tracking-[-8px] font-normal text-right text-white">
              <div
                className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]"
                style={{
                  fontSize: "inherit",
                  lineHeight: "1.2",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-shrikhand)",
                }}
              >
                Discover the
              </div>
              <span
                className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]"
                style={{
                  fontSize: "inherit",
                  lineHeight: "1.2",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-shrikhand)",
                }}
              >
                best gifts the US
              </span>
              <span
                className="block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]"
                style={{
                  fontSize: "inherit",
                  lineHeight: "1.2",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-shrikhand)",
                }}
              >
                has to offer
              </span>
            </h1>
          </div>
        </div>
        <div className="pb-16 md:pb-32 px-4 md:px-0 flex justify-start">
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-start md:justify-start gap-4 ml-[-15px] md:ml-8 mt-[200px] md:mt-0">
            <div className="flex flex-col">
              <p className="text-white text-base md:text-[30px] leading-normal tracking-[0px] font-poppins font-bold animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s] text-left">
                12 January 2026 - 28 February 2026
              </p>
              <button className="w-full md:w-[250px] bg-gradient-to-r mt-2 from-purple-600 to-pink-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.8s]">
                Join the Fun!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
