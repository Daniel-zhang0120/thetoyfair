import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import WavyBG from "../CommonComponent/WaveBg/WaveBG";
import styles from "./ExhibitorWay.module.css";
import { PartnersCarousel } from "../CommonComponent/PartnersCarousal";
import HeroSection from "./HeroSection";
import text1 from "../../public/images/Text1.png";

const PinkWave = ({ color, title, isImage = false, imageSrc = text1 }) => {
  const videoRef = useRef(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 600,
        isTablet: window.innerWidth > 600 && window.innerWidth <= 768,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className={styles.expectContainer}>
        <HeroSection
          title={title ? title : "What To Expect?"}
          isImage={isImage}
          top={30}
          imageSrc={imageSrc}
        />
        <div className={styles.expectContent}>
          <PartnersCarousel />
          <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden mt-5 mb-5 relative video-container">
            <div className="relative">
              <video
                ref={videoRef}
                src="/videos/Xpo720p.mp4"
                className="object-cover w-full rounded-xl cursor-pointer"
                loop
                playsInline
                preload="auto"
                muted
                autoPlay
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                  }
                }}
              />
            </div>
          </div>
          <WavyBG
            color={color ? color : "#E770C1"}
            height={screenSize.isMobile ? "250px" : screenSize.isTablet ? "400px" : "575px"}
            top={screenSize.isMobile ? "500px" : screenSize.isTablet ? "600px" : "622px"}
            reverse
          />
        </div>
      </div>
    </>
  );
};

export default PinkWave;
