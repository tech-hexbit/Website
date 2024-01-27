import React, { useState, useEffect, useContext, useRef } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// css
import hdf from "./Css/HelpDeskForm.module.css";

export default function HelpDeskForm(props) {
  const [load, setLoad] = useState(false);
  const [DropShow, hideDrop] = useState(false);
  const [showloadStore, setloadStore] = useState([]);
  const [loadMIStore, setLoadMIStore] = useState(false);
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
console.log("submiting........");

    event.preventDefault();

    setLoad(true);

    try {
      const response = await axios.post(
        "/api/website/ContactUs/user/post",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setData({
          name: "",
          emailID: "",
          StoreName: "",
          StoreID: "",
          subject: "",
          message: "",
        });

        props.setSubmitted(true);
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const loadStore = async () => {
    setLoadMIStore(true);
    try {
      const response = await axios.get("/api/website/ContactUs/storeList/get", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoadMIStore(false);
console.log(response.data.stoeList);
        setloadStore(response.data.stoeList);
      } else {
        setLoadMIStore(false);
      }
    } catch (e) {
      setLoadMIStore(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  const handler = (e) => {
    try {
      if (!menu.current.contains(e.target)) {
        hideDrop(false);
      } else {
        hideDrop(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (DropShow) {
      document.addEventListener("mousedown", handler);
    }
  });

  useEffect(() => {
    loadStore();
  }, []);

  return (
    <>
      <div className={hdf.main}>
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

            {/* Store Name
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
            </div> */}

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
                  className={hdf.storeInp}
                  spellcheck="true"
                  autocomplete="off"
                  onFocus={() => {
                    hideDrop(true);
                  }}
                  required
                />

                <div className={hdf.MainDropDown}>
                  {loadMIStore ? (
                    <div className="loadCenterDiv">
                      <Load />
                    </div>
                  ) : (
                    <>
                      {showloadStore.length > 0 ? (
                        <>
                          {showloadStore
                            .filter((val) => {
                              if (data.StoreID === "") {
                                return val;
                              } else if (
                                val.StoreID._id
                                  .toLowerCase()
                                  .includes(data.StoreID.toLowerCase())
                              ) {
                                return val;
                              }
                            })
                            .map((val, key) => {
                              return (
                                <div
                                  key={key}
                                  className={hdf.DropDownmDiv}
                                  id={
                                    DropShow
                                      ? "showDropMenuClg"
                                      : "hideDropMenuClg"
                                  }
                                  onClick={() => {
                                    setData({
                                      ...data,
                                      StoreID: val.StoreID._id,
                                      StoreName: val.StoreID.StoreName,
                                    });
                                    hideDrop(false);
                                  }}
                                >
                                  <span data-span="ID" className={hdf.span1}>
                                    {val.StoreID._id}
                                  </span>
                                  <span
                                    data-span="Store Name"
                                    className={hdf.span2}
                                  >
                                    {val.StoreID.StoreName}
                                  </span>
                                </div>
                              );
                            })}
                        </>
                      ) : (
                        <div className="loadCenterDiv">No Available Stores</div>
                      )}
                    </>
                  )}
                </div>
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

            <button type="submit">{load ? <Load /> : "Submit"}</button>
          </form>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
