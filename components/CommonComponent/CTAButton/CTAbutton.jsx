import React from "react";
import styles from "./CTAbutton.module.css";

const CTAButton = (props) => {
  const customCss = {
    // Define CSS variables dynamically based on props
    "--my-color": props.color,
    border: `2px solid ${props.color}`,
    color: `${props.color}`,
    // Add more CSS variables as needed
  };

  return (
    <>
      <a href={props.href} style={customCss} className={styles.ctaButton}>
        {props.text}
      </a>
    </>
  );
};

export default CTAButton;
