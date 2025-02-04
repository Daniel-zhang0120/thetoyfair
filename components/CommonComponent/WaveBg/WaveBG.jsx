import React from "react";
import styles from "./Wave.module.css";

const WavyBG = (props) => {
  return (
    <div
      className={
        props.reverse ? `${styles.wavyBg} ${styles.reverse}` : styles.wavyBg
      }
      style={{ top: props.top }}
    >
      <svg
        className={styles.wavyUp}
        data-name="wavy_up"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 212.8"
        style={{
          fill: `${props.color}`,
          position: "relative",
          bottom: -3,
          zIndex: 1,
        }}
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="m1644.86,182.53c-87.43-20.66-142.08-91.48-324.67-98.06-161.2-5.8-243.63,74.77-490.76,81.88-210.61,6.06-358.69-108.16-411.21-130.4C365.69,13.71,257.13-23.69,0,20.79v192.01h1920v-8.28c-61.03,1.77-189.6-1.77-275.14-21.99Z"></path>
        </g>
      </svg>
      <div
        style={{ background: `${props.color}`, height: `${props.height}` }}
        className={styles.wavyMiddle}
      ></div>
        <svg
          className={styles.wavyDown}
          data-name="wavy_down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 212.8"
          style={{
            fill: `${props.color}`,
            position: "relative",
            bottom: -3,
            zIndex: 1,
          }}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="m1644.86,182.53c-87.43-20.66-142.08-91.48-324.67-98.06-161.2-5.8-243.63,74.77-490.76,81.88-210.61,6.06-358.69-108.16-411.21-130.4C365.69,13.71,257.13-23.69,0,20.79v192.01h1920v-8.28c-61.03,1.77-189.6-1.77-275.14-21.99Z"></path>
          </g>
        </svg>
    </div>
  );
};

export default WavyBG;
