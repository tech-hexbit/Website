import React from "react";
import { Link } from "react-router-dom";

// css
import styles from "./Css/WhoAreWe.module.css";

export default function GridItem({ text, img, subText }) {
  return (
    <div className={styles.tripleGridItem}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{text}</div>
        <div className={styles.subTitle}>{subText}</div>
      </div>
      <button className={styles.contactButton}>
        <Link to="/contact" className="LinkStyle">
          <p>Contact Us</p>
        </Link>
      </button>
    </div>
  );
}
