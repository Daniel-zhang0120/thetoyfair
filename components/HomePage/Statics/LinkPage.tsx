import React from "react";
import styles from "./LinkPage.module.css";
import Link from "next/link";
import images from "../../../app/helper/imageIDs";
import { supportsWebP } from "@/app/helper/newFormateCheck";

const LinkBanner = () => {
  return (
    <div className={styles.mobileBannerContainer}>
      <div className={styles.bannerBox}>
        <div className={styles.imageContainer}>
          <img
            src={
              supportsWebP()
                ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeVisitors.webp"]}/public`
                : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeVisitors.svg"]}/public`
            }
            alt="visitors"
          />
        </div>
        <span className={styles.heading1}>4,000+</span>
        <span className={styles.heading2}>Visitors</span>
        <span className={styles.aside}>anticipated visitors</span>
        <a
          href="https://www.xpofairs.com/events-box-office"
          className={styles.link}
        >
          Register Now &gt;
        </a>
      </div>
      <div className={styles.bannerBox}>
        <div className={styles.imageContainer}>
          <img
            src={
              supportsWebP()
                ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeExhibitors.webp"]}/public`
                : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeExhibitors.svg"]}/public`
            }
            alt="exhibitors"
          />
        </div>
        <span className={styles.heading1}>200+</span>
        <span className={styles.heading2}>Exhibitors</span>
        <span className={styles.aside}>projected exhibitors</span>
        <Link href="/brands" className={styles.link}>
          See Who&apos;s Exhibiting &gt;
        </Link>
      </div>
      <div className={styles.bannerBox}>
        <div className={styles.imageContainer}>
          <img
            src={
              supportsWebP()
                ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeCountries.webp"]}/public`
                : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeCountries.svg"]}/public`
            }
            alt="countries"
          />
        </div>
        <span className={styles.heading1}>39</span>
        <span className={styles.heading2}>Days</span>
        <span className={styles.aside}>Jan 08 - Feb 28</span>
        <Link href="/brands" className={styles.link}>
          See Who&apos;s Exhibiting &gt;
        </Link>
      </div>
      <div className={styles.bannerBox}>
        <div className={styles.imageContainer}>
          <img
            src={
              supportsWebP()
                ? `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeConvenience.webp"]}/public`
                : `https://imagedelivery.net/YRgf2OvKS547t9TWgov5Lw/${images["homeConvenience.svg"]}/public`
            }
            alt="convenience"
          />
        </div>
        <span className={styles.heading1}>24/7</span>
        <span className={styles.heading2}>Convenience</span>
        <span className={styles.aside}>Attend whenever, wherever you like</span>
        <a href="https://www.xpofairs.com/howto-visit" className={styles.link}>
          How To Visit &gt;
        </a>
      </div>
    </div>
  );
};

export default LinkBanner;
