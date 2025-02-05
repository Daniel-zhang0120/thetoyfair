import Image from "next/image";
import React from "react";
import WavyBG from "../CommonComponent/WaveBg/WaveBG";
import styles from "./ExhibitorWay.module.css";
import { supportsWebP } from "../../app/helper/newFormateCheck";
import images from "../../app/helper/imageIDs";
import { useMediaQuery } from "react-responsive";
import PageHead from "../CommonComponent/PageHead/PageHead";
import HeroSection from "./HeroSection";

const PurpleWave = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const getHeight = () => {
    if (isMobile) {
      return "1600px";
    } else if (isTablet) {
      return "1100px";
    } else {
      return "900px";
    }
  };

  const getTop = () => {
    if (isMobile) {
      return "640px";
    } else if (isTablet) {
      return "550px";
    } else {
      return "475px";
    }
  };
  return (
    <>
      <div className={styles.visitBanner}>
        <WavyBG color="#9F70FD" height={getHeight()} top={getTop()} />
        <div className={styles.landingContent}>
          <div className={styles.landingBio}>
            <h3 className={styles.bioMainHead}>
              Find fabulous recognized brands as well as the hottest newcomers
              at the{" "}
              <span className="text-[#00A651]">UK&apos;s first online Toy</span>{" "}
              trade show.
            </h3>
            <div className={styles.quickList}>
              <div>
                <h4 className={styles.listItemBig}>
                  For the first time trade shows work around you
                </h4>
                <p className={styles.listItemSmall}>
                  No need to re-arrange your schedule or arrange cover. Come and
                  go as you please, whenever it suits you.
                </p>
                <hr className={styles.listDivider} />
              </div>
              <div>
                <h4 className={styles.listItemBig}>
                  Reduce the hassle and cost
                </h4>
                <p className={styles.listItemSmall}>
                  Say goodbye to cramped commuter trains, car park shuttles and
                  expensive hotels.
                </p>
                <hr className={styles.listDivider} />
              </div>
              <div>
                <h4 className={styles.listItemBig}>
                  Get more information - faster
                </h4>
                <p className={styles.listItemSmall}>
                  Find a larger choice of exhibitors across more sectors of your
                  market in a fraction of the time - find what you want faster.
                </p>
                <hr className={styles.listDivider} />
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={
                supportsWebP()
                  ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["visit-landing-new.webp"]}/public`
                  : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["visit-landing-new.png"]}/public`
              }
              alt="xpo-visit-demo"
              height={673}
              width={573}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurpleWave;
