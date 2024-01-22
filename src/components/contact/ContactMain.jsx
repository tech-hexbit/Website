import React, { useState, useEffect } from "react";

// components
import ContactForm from "./ContactForm";
import Pointers from "./Pointers";

// css
import styles from "./Css/ContactForm.module.css";

// icon
import mail from "./../../assets/AboutUS/Icon.svg";
import Icon_Call from "./../../assets/AboutUS/Icon_call.svg";

export default function ContactMain() {
  return (
    <>
      <div className={styles.mDiv}>
        <div className={styles.leftDiv}>
          <p className={styles.HexbitPMainTag}>
            Is Hexbit the right platform for your Business?
          </p>
          <p className={styles.JustAnswer}>
            Just answer a few questions so that we can personalize the right
            experience for you. unknown printer took a type and scrambled it to
            make a type
          </p>
          <div className={styles.conDiv}>
            <div className={styles.MailUs}>
              <div>
                <img src={mail} alt="" className={styles.mailImg} />
                <p className={styles.mthName}>Mail Us</p>
              </div>
              <div>
                <p className={styles.del}>support@hexbit.io</p>
              </div>
            </div>
            <div className={styles.CallUs}>
              <div>
                <img src={Icon_Call} alt="" className={styles.mailImg} />
                <p className={styles.mthName}>Call Us</p>
              </div>
              <div>
                <p className={styles.del}>Coming Soon</p>
              </div>
            </div>
          </div>
          <div className={styles.pointerDiv}>
            <Pointers label="An overview of the platform and its features" />
            <Pointers label="Consultation on how to leverage the platform for your community" />
            <Pointers label="Share few success stories with you" />
            <Pointers label="Many desktop publishing packages and web page editors now use" />
          </div>
          <br />
          <br />
          Address: G/F, H NO-98-C, M.B ROAD KHANPUR VILLAGE, NEW DELHI, SOUTH
          DELHI, DELHI, 110080, DELHI, Delhi,
          <br />
          PIN: 110080
          <br />
          Telephone No: 9939197376
          <br />
          E-Mail ID: support@hexbit.io
        </div>
        <ContactForm />
      </div>
    </>
  );
}
