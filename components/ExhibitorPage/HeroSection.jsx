import Image from "next/image";
import React from "react";
import styles from "./HeroSection.module.css";
import text1 from "../../public/images/Text1.png";

const HeroSection = ({
  title,
  isImage = false,
  imageSrc = text1,
  top = 100,
}) => {
  return (
    <>
      <section className="pt-20 h-full flex justify-center bg-transparent">
        {isImage ? (
          <div
            className={`flex justify-center w-full relative top-[${top}px] bg-transparent`}
          >
            <Image
              src={imageSrc}
              alt={title}
              className={`${styles.visit_images_text} max-w-[1200px] w-full `}
            />
          </div>
        ) : (
          <div className="inset-0">
            <h1 className="font-poppins text-center font-extrabold break-words text-[44px] sm:text-[60px] lg:text-[72px] xl:text-[90px] leading-[1.7] tracking-[1.0px] bg-gradient-to-r from-[#F249CD] to-[#9747FF] bg-clip-text text-transparent z-50">
              {title}
            </h1>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;
