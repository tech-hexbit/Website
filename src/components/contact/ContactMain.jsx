import React, { useState, useEffect } from "react";

// components
import ContactForm from "./ContactForm";

// icon
import mail from "./../../assets/AboutUS/Icon.svg";
import Icon_Call from "./../../assets/AboutUS/Icon_call.svg";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <p>An overview of the platform and its features</p>
            </div>

            <div className={styles.pointers}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <p>
                Consultation on how to leverage the platform for your community
              </p>
            </div>

            <div className={styles.pointers}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <p>Share few success stories with you</p>
            </div>

            <div className={styles.pointers}>
              {/* <ArrowRightAltIcon fontSize="large" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
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
