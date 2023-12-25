import React, { useState, useEffect, useContext, useRef } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// components
import HelpDeskFormTicket from "./HelpDeskFormTicket";

// css
import hdf from "./Css/HelpDeskForm.module.css";

export default function HelpDeskForm({ onFormSubmit }) {
  const [load, setLoad] = useState(false);
  const [DropShow, hideDrop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showloadStore, setloadStore] = useState([]);
  const [data, setData] = useState({
    name: "",
    emailID: "",
    StoreName: "",
    StoreID: "",
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

  const authCtx = useContext(AuthContext);

  let menu = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Submit Data");

      const response = await axios.post(
        "/api/website/ContactUs/user/post",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response);

      // setSubmitted(true); // Update local submitted state
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Invalid Credentials",
        val: true,
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const loadStore = async () => {
    try {
      const response = await axios.get("/api/website/ContactUs/storeList/get", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        setloadStore(response.data.stoeList);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Invalid Credentials",
        val: true,
      });
    }
  };

  const handler = (e) => {
    try {
      if (!menu.current.contains(e.target)) {
        hideDrop(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DropCheck = () => {
    if (
      "Kalinga Institute of Industrial Technology"
        .toLowerCase()
        .includes(data.StoreID)
    ) {
      hideDrop(true);
    } else {
      hideDrop(false);
    }
  };

  useEffect(() => {
    if (DropShow) {
      document.addEventListener("mousedown", handler);
    }
  });

  useEffect(() => {
    DropCheck();
  }, [data.StoreID]);

  useEffect(() => {
    loadStore();
  }, []);

  return (
    <div className={hdf.main}>
      {submitted ? (
        <HelpDeskFormTicket changeState={setSubmitted} />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            {/* Name */}
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

            {/* Email */}
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

            {/* Store Name */}
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

            {/* Store ID */}
            <div className={hdf.flex}>
              <label htmlFor="storeId">Store ID *</label>
              <div ref={menu} className={hdf.CollegeInpmDIv}>
                <input
                  type="text"
                  id="storeId"
                  name="StoreID"
                  placeholder="your store id (located in my profile)"
                  value={data.StoreID}
                  onChange={handleChange}
                  onFocus={() => {
                    DropCheck();
                  }}
                  className={hdf.storeInp}
                  spellcheck="true"
                  autocomplete="off"
                  required
                />

                {showloadStore.length > 0 ? (
                  <>
                    {showloadStore.map((val, key) => {
                      return (
                        <div
                          key={key}
                          className={hdf.DropDownmDiv}
                          id={DropShow ? "showDropMenuClg" : "hideDropMenuClg"}
                          onClick={() => {
                            setData({
                              ...data,
                              StoreID:
                                "Kalinga Institute of Industrial Technology",
                            });
                            hideDrop(false);
                          }}
                        >
                          <span className={hdf.span1}>{val.StoreID._id}</span>
                          <span className={hdf.span2}>
                            {val.StoreID.StoreName}
                          </span>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Subject */}
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

            {/* Message */}
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
