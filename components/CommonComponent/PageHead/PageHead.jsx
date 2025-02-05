import React from "react";
import styles from "./PageHead.module.css";


const PageHead = (props) => {
  return (
    <>
      <h1
        className={
          props.colorGradient
            ? `${styles[props.colorGradient]} ${styles.pageHead}`
            : styles.pageHead
        }
        style={{
          ...(props.color ? { color: props.color } : {}),
          ...(props.notTop ? { marginTop: 0 } : {}),
        }}
      >
        {props.text}
      </h1>
    </>
  );
};

export default PageHead;
