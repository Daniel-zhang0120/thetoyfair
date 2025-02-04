import Image from "next/image";
import React from "react";
import styles from "./ExhibitorWay.module.css";
import { supportsWebP } from "../../app/helper/newFormateCheck";
import images from "../../app/helper/imageIDs";

const ExhibitorWay = () => {
  return (
    <section className="relative py-20 bg-white pt-100">
      <div className="inset-0">
        <div style={{ bottom: "150px" }}>
          <h1 className="font-poppins text-center font-extrabold break-words text-[44px] sm:text-[60px] lg:text-[72px] xl:text-[90px] leading-[1.7] tracking-[1.0px] bg-gradient-to-r from-[#F249CD] to-[#9747FF] bg-clip-text text-transparent">
            Why should you visit?
          </h1>
        </div>
      </div>
      <div className={styles.whySection}>
        <div className={styles.infoContainer}>
          <div className={styles.block1}>
            <h3 className={styles.whyHead} style={{ color: "#349EFF" }}>
              faster.
            </h3>
            <p className={styles.whyPara}>
              Set up a eye-catching stand in minutes using our free templates.
            </p>
            <p className={styles.whyPara}>
              No need for manuals, contractors, set-up, travel and hassle. Save
              months&apos;worth of planning.
            </p>
          </div>
          <div className={styles.block2}>
            <div className={styles.whyImageContainer}>
              <Image
                height={673}
                width={573}
                src={
                  supportsWebP()
                    ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor3.webp"]}/public`
                    : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor3.png"]}/public`
                }
                alt="visit-1"
              />
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.block1}>
            <div className={styles.whyImageContainer}>
              <Image
                height={673}
                width={573}
                src={
                  supportsWebP()
                    ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowToVisitor1.webp"]}/public`
                    : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowToVisitor1.png"]}/public`
                }
                alt="visit-2"
              />
            </div>
          </div>
          <div className={styles.block2}>
            <h3 className={styles.whyHead} style={{ color: "#F249CD" }}>
              cheaper.
            </h3>
            <p className={styles.whyPara}>
              Have your cake and eat it too, with one simple fee for a stand. No
              tiered pricing, and no extra costs, ever.
            </p>
            <p className={styles.whyPara}>
              {" "}
              We have plenty of{" "}
              <span style={{ color: "#F249CD", fontWeight: 600 }}>
                incentives
              </span>{" "}
              for early adopters - ask us today.
            </p>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.block1}>
            <h3 className={styles.whyHead} style={{ color: "#9B51FE" }}>
              easier.
            </h3>
            <p className={styles.whyPara}>Let the market come to you. </p>
            <p className={styles.whyPara}>
              Access the show from wherever is convenient for you, without
              having to take time out of your business or routine.
            </p>
          </div>
          <div className={styles.block2}>
            <div className={styles.whyImageContainer}>
              <Image
                height={673}
                width={573}
                src={
                  supportsWebP()
                    ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor2.webp"]}/public`
                    : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor2.png"]}/public`
                }
                alt="visit-3"
              />
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.block1}>
            <div className={styles.whyImageContainer}>
              <Image
                height={673}
                width={573}
                src={
                  supportsWebP()
                    ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor2.webp"]}/public`
                    : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["HowtoVisitor2.png"]}/public`
                }
                alt="visit-3"
              />
            </div>
          </div>
          <div className={styles.block2}>
            <h3 className={styles.whyHead} style={{ color: "#32BC42" }}>
              better.
            </h3>
            <p className={styles.whyPara}>
              We love trade shows - we believe there must be a better way.
            </p>
            <p className={styles.whyPara}>
              An online trade show can allow exhibitors to launch product and
              generate leads at greater convenience for a fraction of the cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitorWay;
