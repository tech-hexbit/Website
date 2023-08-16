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
          <button onClick={sendData}>{load ? <Load /> : "Send Message"}</button>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
};

export default ContactForm;
