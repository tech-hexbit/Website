import React, { useState, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import HelpDeskFormTicket from "./HelpDeskFormTicket";

// css
import hdf from "./Css/HelpDeskForm.module.css";

export default function HelpDeskForm({ onFormSubmit }) {
  const [submitted, setSubmitted] = useState(false);

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
                name="fullName"
                placeholder="john david"
                // value={formData.fullName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@yourmail.com"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="storeName">Store Name *</label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                placeholder="your company name here"
                // value={formData.storeName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="storeId">Store ID *</label>
              <input
                type="text"
                id="storeId"
                name="storeId"
                placeholder="your store id (located in my profile)"
                // value={formData.storeId}
                // onChange={handleChange}
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
                // value={formData.subject}
                // onChange={handleChange}
                required
              />
            </div>
            <div className={hdf.flex}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                placeholder="brief description of the query min 120 characters"
                // value={formData.message}
                // onChange={handleChange}
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
