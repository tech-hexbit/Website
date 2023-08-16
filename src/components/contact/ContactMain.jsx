import React, { useState, useEffect } from "react";

// components
import ContactForm from "./ContactForm";

// icon
import mail from "./../../assets/AboutUS/Icon.svg";
import Icon_Call from "./../../assets/AboutUS/Icon_call.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// css
import styles from "./Css/ContactForm.module.css";

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
                <p className={styles.del}>tech@hexbit.io</p>
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
            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>An overview of the platform and its features</p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>
                Consultation on how to leverage the platform for your community
              </p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>Share few success stories with you</p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>
                Many desktop publishing packages and web page editors now use
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
