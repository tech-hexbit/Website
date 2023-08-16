import React, { useState, useEffect } from "react";

// components
import { Alert } from "./../../MicroInteraction/Alert";
import Load from "./../../MicroInteraction/Load";

// icon
import mail from "./../../assets/AboutUS/Icon.svg";
import Icon_Call from "./../../assets/AboutUS/Icon_call.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// axios
import axios from "axios";

// css
import styles from "./Css/ContactForm.module.css";

const ContactForm = () => {
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    CompanyName: "",
    subject: "",
    message: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const sendData = async () => {
    if (
      input.name == "" ||
      input.email == "" ||
      input.CompanyName == "" ||
      input.subject == "" ||
      input.message == ""
    ) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
      try {
        const response = await axios.post("/api/website/ContactUs", input);
        console.log(response);
        setError("");
        setInput({
          name: "",
          email: "",
          CompanyName: "",
          subject: "",
          message: "",
        });

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "We'll revert back to you soon!",
          val: true,
        });
      } catch (err) {
        console.log(err);
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
          val: true,
        });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    }, 10000);
  }, [variants]);

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
        <div className={styles.FormMDiv}>
          {/* FirstName */}
          <div className={styles.labelDiv}>
            <label htmlFor="FirstName">First Name *</label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="John David"
              value={input.name}
              onChange={(e) => {
                setInput({ ...input, name: e.target.value });
              }}
            />
          </div>
          {/* Email */}
          <div className={styles.labelDiv}>
            <label htmlFor="Email">Your email *</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="example@yourmail.com"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
            />
          </div>
          {/* Company */}
          <div className={styles.labelDiv}>
            <label htmlFor="Company">Company *</label>
            <input
              type="text"
              name="Company"
              id="Company"
              placeholder="your company name here"
              value={input.CompanyName}
              onChange={(e) => {
                setInput({ ...input, CompanyName: e.target.value });
              }}
            />
          </div>
          {/* Subject */}
          <div className={styles.labelDiv}>
            <label htmlFor="Subject">Subject *</label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              placeholder="How can we Help"
              value={input.subject}
              onChange={(e) => {
                setInput({ ...input, subject: e.target.value });
              }}
            />
          </div>
          {/* Message */}
          <div className={styles.labelDiv}>
            <label htmlFor="FirstName">Message *</label>
            <textarea
              name="FirstName"
              id="FirstName"
              cols="30"
              rows="10"
              placeholder="Hello there, I would like to talk about how to..."
              value={input.message}
              onChange={(e) => {
                setInput({ ...input, message: e.target.value });
              }}
            ></textarea>
          </div>
          <div className={styles.SendMessage}>
            <button onClick={sendData}>
              {load ? <Load /> : "Send Message"}
            </button>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
};

export default ContactForm;
