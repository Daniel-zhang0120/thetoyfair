import React from "react";
import PageHead from "../CommonComponent/PageHead/PageHead";
import CTAButton from "../CommonComponent/CTAButton/CTAbutton";
import styles from "./ExhibitorWay.module.css"

const BookComponent = () => {
  return (
    <div className="mt-[150px]">
      <PageHead
        text="Join us and be the change."
        notTop
        colorGradient="purpleMulti"
      />
      <div className={styles.CTAButton}>
        <CTAButton
          href="https://www.xpofairs.com/events-box-office"
          text="BUY A TICKET"
          color="#3D9BE9"
        />
      </div>
    </div>
  );
};

export default BookComponent;
