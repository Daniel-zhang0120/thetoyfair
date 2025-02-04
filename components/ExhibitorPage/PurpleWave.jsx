import Image from "next/image";
import React from "react";
import WavyBG from "../CommonComponent/WaveBg/WaveBG";
import styles from "./ExhibitorWay.module.css";
import { supportsWebP } from "@/app/helper/newformatecheck";
import images from "@/app/helper/imageIDs";
import { useMediaQuery } from "react-responsive";

const PurpleWave = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ maxWidth: 768, maxHeight: 1100 });

  return (
    <>
      {/* <section className="relative  text-white">
        <div
          className="absolute inset-0 top-[-100px] overflow-visible pointer-events-none z-0"
          style={{ zIndex: 0 }}
        >
          <div className="pt-56">
            <Image
              src="/images/Wave_purple.png"
              alt="Purple Wave Background"
              width={1920}
              height={918}
              className="w-full object-fill"
              priority
            />
          </div>
        </div>
        <div
          className="absolute inset-0 top-[-100px] overflow-visible pointer-events-none"
          style={{ zIndex: 0, paddingTop: "150px" }}
        >
          <div className="pt-56">
            <Image
              src="/images/Wave_purple.png"
              alt="Purple Wave Background"
              width={1920}
              height={918}
              className="w-full object-fill"
              priority
            />
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
      </section>
      <div
        className="container mx-auto px-4 relative flex items-center justify-between"
        style={{
          zIndex: 10,
          marginTop: "200px",
          maxWidth: "1400px",
          height: "918px",
          width: "100%",
        }}
      >
        <div
          className="flex-1 px-8"
          style={{ marginTop: "-600px", maxWidth: "600px" }}
        >
          <h1
            className="font-bold mb-6"
            style={{
              fontSize: "40px",
              letterSpacing: "-2.5px",
              lineHeight: "53px",
              fontWeight: "900",
            }}
          >
            Find fabulous recognized brands as well as the hottest newcomers at
            the{" "}
            <span className="text-[#00A651]">UK&apos;s first online Toy</span>{" "}
            trade show.
          </h1>

          <ol
            className="list-decimal pl-6 mb-8 text-white"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            <li className="mb-4">
              <div
                style={{ fontFamily: "Poppins, sans-serif", maxWidth: "400px" }}
              >
                For the first time trade shows work around you
              </div>
              <p
                className="mt-1"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  maxWidth: "500px",
                  marginLeft: "0",
                  fontFamily: "Poppins",
                }}
              >
                No need to re-arrange your schedule or arrange cover. Come and
                go as you please, whenever it suits you.
              </p>
              <div
                style={{
                  width: "300px",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginTop: "10px",
                }}
              ></div>
            </li>
            <li className="mb-4">
              <div
                style={{ fontFamily: "Poppins, sans-serif", maxWidth: "400px" }}
              >
                Reduce the hassle and cost
              </div>
              <p
                className="mt-1"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  maxWidth: "500px",
                  marginLeft: "0",
                  fontFamily: "Poppins",
                }}
              >
                Say goodbye to cramped commuter trains, car park shuttles and
                expensive hotels.
              </p>
              <div
                style={{
                  width: "300px",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginTop: "10px",
                }}
              ></div>
            </li>
            <li className="mb-4">
              <div
                style={{ fontFamily: "Poppins, sans-serif", maxWidth: "400px" }}
              >
                Get more information - faster
              </div>
              <p
                className="mt-1"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  maxWidth: "500px",
                  marginLeft: "0",
                  fontFamily: "Poppins",
                }}
              >
                Find a larger choice of exhibitors across more sectors of your
                market in a fraction of the time - find what you want faster.
              </p>
              <div
                style={{
                  width: "300px",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginTop: "10px",
                }}
              ></div>
            </li>
          </ol>

          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Register Now
          </button>
        </div>
        <div
          className="flex-1 relative"
          style={{ marginTop: "-550px", width: "583px", height: "652px" }}
        >
          <Image
            src="/images/exhibitor_sample2.png"
            alt="Trade Show Floor"
            width={583}
            height={652}
            className="object-contain rounded-xl"
          />
        </div>
      </div> */}
      <div className={styles.visitBanner}>
        <WavyBG
          color="#9F70FD"
          height={isMobile ? "1100px" : isTablet ? "1500px" : "575px"}
          top={isMobile ? "740px" : isTablet ? "850px" : "700px"}
        />
        {/* <PageHead text="Why should you exhibit?" colorGradient="purpleMulti" /> */}
        <div className={styles.landingContent}>
          <div className={styles.landingBio}>
            <h2 className={styles.bioMainHead}>
              Be part of the future at the{" "}
              <span className={styles.yellow}>UK&apos;s first online gift</span>{" "}
              trade show.
            </h2>
            <div className={styles.quickList}>
              <div>
                <h4 className={styles.listItemBig}>
                  Set up a hassle-free stand in minutes.
                </h4>
                <p className={styles.listItemSmall}>
                  Set up a stand quickly and easily using assets you already
                  have - no need for any training.
                </p>
                <hr className={styles.listDivider} />
              </div>
              <div>
                <h4 className={styles.listItemBig}>
                  Reach your broadest audience yet.
                </h4>
                <p className={styles.listItemSmall}>
                  Access global customers who are unable or unwilling to attend
                  traditional trade shows due to time, effort and expense.
                </p>
                <hr className={styles.listDivider} />
              </div>
              <div>
                <h4 className={styles.listItemBig}>
                  Save money with simple stand fees.
                </h4>
                <p className={styles.listItemSmall}>
                  Pay a single fee for a fully customisable stand. No hidden
                  costs, tiered pricing, or subscriptions.
                </p>
                <hr className={styles.listDivider} />
              </div>
            </div>
          </div>
          <div
          // className={imageLoaded ? styles.imageContainer : styles.hiddenImage}
          >
            <Image
              height={673}
              width={573}
              src={
                supportsWebP()
                  ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["visit-landing-new.webp"]}/public`
                  : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["visit-landing-new.png"]}/public`
              }
              alt="xpo-visit-demo"
              // onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurpleWave;
