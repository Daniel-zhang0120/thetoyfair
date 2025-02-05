"use client";
import React, { useRef } from "react";
import { PartnersCarousel } from "../CommonComponent/PartnersCarousal";
import styles from "./ExhibitorWay.module.css";
import WavyBG from "../CommonComponent/WaveBg/WaveBG";
import { useMediaQuery } from "react-responsive";
import HeroSection from "./HeroSection";

const PinkWave = ({ color, title }) => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ maxWidth: 768, maxHeight: 1100 });

  return (
    <>
      <div className={styles.expectContainer}>
        {/* <PageHead text="What To Expect?" notTop colorGradient="purpleMulti" /> */}
        <HeroSection title={title ? title :"What To Expect?"} />
        <div className={styles.expectContent}>
          <PartnersCarousel />
          <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden mt-5 relative">
            <div className="relative aspect-video group">
              <video
                ref={videoRef}
                src="/videos/Xpo720p.mp4"
                className="object-cover w-full h-full rounded-xl cursor-pointer"
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
            height={isMobile ? "430px" : isTablet ? "600px" : "575px"}
            top={isMobile ? "200px" : isTablet ? "650px" : "725px"}
            reverse
          />
        </div>
      </div>
    </>
  );
};

export default PinkWave;
