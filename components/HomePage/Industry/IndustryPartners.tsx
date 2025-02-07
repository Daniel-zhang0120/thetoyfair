import Image from "next/image";
import React from "react";

const IndustryPartners = () => {
  const partners = [
    { src: "/images/Partner 1.png", alt: "Partner 1" },
    { src: "/images/Partner 2.png", alt: "Partner 2" },
    { src: "/images/Partner 3.png", alt: "Partner 3" },
    { src: "/images/Partner 4.png", alt: "Partner 4" },
    { src: "/images/Partner 5.png", alt: "Partner 5" },
    { src: "/images/Partner 6.png", alt: "Partner 6" },
    { src: "/images/Partner 7.png", alt: "Partner 7" },
  ];
  return (
    <section className="bg-[#EDFFF0] overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        <h2 className="text-3xl md:text-[60px] leading-tight md:leading-[70px] tracking-[-1px] md:tracking-[-4px] text-center mb-10 font-bold text-[#287838]">
          Be at the frontier of fun - the toy industry is evolving
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold text-center mb-6 text-[#F249CD]">
          Industry Partners
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className="h-[50px] md:h-[70px] w-auto flex items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain max-h-[50px] md:max-h-[70px] w-auto"
                  width={140}
                  height={70}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartners;
