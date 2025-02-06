import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./VideoComponent.module.css";

const VideoComponent = (props: any) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return props.mainHero ? (
    <div className={`${styles.heroSection} ${styles.overlay}`}>
      <iframe
        title="The Gift Fair"
        src={
          isMobile
            ? "https://customer-zbd79thgqefflu9b.cloudflarestream.com/ae28337fd7ceccbe938175d949072709/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-zbd79thgqefflu9b.cloudflarestream.com%2Fae28337fd7ceccbe938175d949072709%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
            : "https://customer-zbd79thgqefflu9b.cloudflarestream.com/e1d06ad26974bbdb81f2c82c580c5ac1/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false"
        }
        className={styles.heroVideo}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
      <div className={styles.heroText}>
        <p className={styles.date}>08 January 2025 - 28 February 2025</p>
        <h1 className={styles.strapline}>
          "a groundbreaking event redefining the{" "}
          <span className={styles.highlight}>gift</span> industry."
        </h1>
      </div>
    </div>
  ) : (
    <div className={styles.miniHeroSection}>
      <iframe
        title="The Gift Fair"
        src="https://customer-zbd79thgqefflu9b.cloudflarestream.com/ad88d8d96afcc11869ef72dd88a3c911/iframe?poster=https%3A%2F%2Fimagedelivery.net/YRgf2OvKS547t9TWgov5Lw/b2a41d20-bd47-4009-2ae3-fe63b4a43100/public"
        loading="lazy"
        className={styles.heroVideo}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoComponent;
