import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../../store/auth-context";

// components
import Load from "./../../MicroInteraction/Load";

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

  const authCtx = useContext(AuthContext);

  const sendData = async () => {
    setLoad(true);

    if (
      input.name == "" ||
      input.email == "" ||
      input.CompanyName == "" ||
      input.subject == "" ||
      input.message == ""
    ) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
      });
    } else {
      try {
        const response = await axios.post("/api/website/ContactUs", input);

        if (response.data.success) {
          setLoad(false);

          setInput({
            name: "",
            email: "",
            CompanyName: "",
            subject: "",
            message: "",
          });

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "We'll revert back to you soon!",
          });
        }
      } catch (err) {
        console.log(err);

        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
        });
      }
    }
  };

  return (
    <>
      <div className={styles.FormMDiv}>
        {/* FirstName */}
        <div className={styles.labelDiv}>
          <label htmlFor="FirstName">
            First Name
            <span className="required"> *</span>
          </label>
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
          <label htmlFor="Email">
            Your email
            <span className="required"> *</span>
          </label>
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
          <label htmlFor="Company">
            Company
            <span className="required"> *</span>
          </label>
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
          <label htmlFor="Subject">
            Subject
            <span className="required"> *</span>
          </label>
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
          <label htmlFor="FirstName">
            Message
            <span className="required"> *</span>
          </label>
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
    </>
  );
};

export default ContactForm;
