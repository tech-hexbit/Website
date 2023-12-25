import React, { useState, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import HelpDeskFormTicket from "./HelpDeskFormTicket";

// css
import hdf from "./Css/HelpDeskForm.module.css";

export default function HelpDeskForm({ onFormSubmit }) {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    emailID: "",
    StoreName: "",
    StoreID: "",
    subject: "",
    message: "",
  });

  const authCtx = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form submission logic if needed
    setSubmitted(true); // Update local submitted state
    onFormSubmit(); // Call the onFormSubmit function received from props
  };

  console.log(authCtx.user.Email);

  return (
    <div className={hdf.main}>
      {submitted ? (
        <HelpDeskFormTicket changeState={setSubmitted} />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className={hdf.flex}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="name"
                placeholder="john david"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="emailID"
                placeholder="example@yourmail.com"
                value={data.emailID}
                onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="storeName">Store Name *</label>
              <input
                type="text"
                id="storeName"
                name="StoreName"
                placeholder="your company name here"
                value={data.StoreName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="storeId">Store ID *</label>
              <input
                type="text"
                id="storeId"
                name="StoreID"
                placeholder="your store id (located in my profile)"
                value={data.StoreID}
                onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="brief title of your query"
                value={data.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                placeholder="Brief description of the query min 120 characters"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
