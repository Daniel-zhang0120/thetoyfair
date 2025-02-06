"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./ExhibitorWay.module.css";
import { supportsWebP } from "../../app/helper/newFormateCheck";
import images from "../../app/helper/imageIDs";
import WavyBG from "@/components/CommonComponent/WaveBg/WaveBG";

const GreenWave = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 600,
        isTablet: window.innerWidth <= 768,
      });
    };

    updateSize(); // Set initial value
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className={styles.environment}>
        <h3
          className={styles.whyHead}
          style={{ color: "#FFFFFF", zIndex: 100 }}
        >
          ...and it&apos;s better for the environment
        </h3>
        <div className={styles.infoContainer}>
          <div className={styles.block1}>
            <p className={styles.whyPara} style={{ color: "#FFFFFF" }}>
              Feel good about reducing your carbon footprint by eliminating
              unnecessary waste.
            </p>
            <p className={styles.whyPara} style={{ color: "#FFFFFF" }}>
              No more single use stands, no need to reckless building waste,
              leaflets, or exhibition books bound for the landfill. No more
              emission-heavy flights and travel.
            </p>
          </div>
          <div className={styles.block2}>
            <div className={styles.whyImageContainer}>
              <Image
                height={673}
                width={573}
                src={
                  supportsWebP()
                    ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["earth.webp"]}/public`
                    : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["earth.png"]}/public`
                }
                alt="better-for-planet"
              />
            </div>
          </div>
        </div>
        <WavyBG
          key={screenSize.isMobile ? "mobile" : screenSize.isTablet ? "tablet" : "desktop"}
          color="#32BC42"
          height={screenSize.isMobile ? "700px" : screenSize.isTablet ? "600px" : "400px"}
          top={screenSize.isMobile ? "45%" : "50%"}
          reverse
        />
      </div>
    </>
  );
};

export default GreenWave;
