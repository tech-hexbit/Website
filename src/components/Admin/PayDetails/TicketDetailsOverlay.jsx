import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// components
import Load from "../../../MicroInteraction/Load";

// axios
import axios from "axios";

// css
import gpdo from "./Css/TicketDetailsOverlay.module.css";

export default function TicketDetailsOverlay({ selectedItem }) {
  if (!selectedItem) return null;

  const [replyMessage, setReplyMessage] = useState("");
  const [load, setLoad] = useState(false);
  const [data, setloadStore] = useState([]);
  const [fetchedData, setFetchedData] = useState({
    replyMessage: "",
  });

  const { StoreName, subject, StoreID, emailID, name, message, when, _id } =
    selectedItem[0];

  const authCtx = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoad(true);

    console.log(_id, " id printing");

    const data = {
      id: _id,
      replyMessage,
    };

    try {
      const response = await axios.post(
        "/api/website/ContactUs/user/post/reply",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setFetchedData((prevData) => ({
          ...prevData,
          replyMessage: response.data.replyMessage,
        }));

        setReplyMessage("");

        setLoad(false);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Failed to send",
          text: "Please all the details",
        });
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "An unexpected error occurred",
        text: "Failed to send",
      });
    }
  };
  const loadStore = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/website/ContactUs/user/post/reply/${_id}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);
        setFetchedData((prevData) => ({
          ...prevData,
          replyMessage: response.data.replyMessage,
        }));
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };
  useEffect(() => {
    loadStore();
  }, []);

  return (
    <div className={gpdo.main}>
      <div className={gpdo.item}>
        <h2>Ticket ID : HX#{_id.slice(-5)}</h2>
        <h2>Subject : {subject}</h2>
      </div>
      <div className={gpdo.wrapper}>
        <div className={gpdo.item}>
          <p> Request Date & Time</p>
          <p>{when.date}</p>
        </div>
        <div className={gpdo.item}>
          <p> Name </p>
          <p>{name}</p>
        </div>
        <div className={gpdo.item}>
          <p> Email </p>
          <p>{emailID}</p>
        </div>
        <div className={gpdo.item}>
          <p className={gpdo.bold}>Store ID</p>
          <p className={gpdo.bold}>{StoreID}</p>
        </div>
        <div className={gpdo.item}>
          <p> Store Name </p>
          <p>{StoreName}</p>
        </div>
      </div>
      <div className={gpdo.msgMDiv}>
        <label className={gpdo.message}>Message*</label>
        <p>{message}</p>
      </div>
      <div className={gpdo.msgMDiv}>
        <label className={gpdo.message}>
          {!fetchedData.replyMessage ? "Reply*" : "Replied"}
        </label>
        {!fetchedData.replyMessage ? (
          <>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={gpdo.messageInput}
              placeholder="Type..."
              onChange={(e) => setReplyMessage(e.target.value)}
              value={replyMessage}
            ></textarea>
            <div>
              <button onClick={handleSubmit} className={gpdo.btn}>
                {load ? <Load /> : "Send"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p>{fetchedData.replyMessage}</p>
          </>
        )}
      </div>
    </div>
  );
}
TicketDetailsOverlay.propTypes = {
  selectedItems: PropTypes.object.isRequired,
};
