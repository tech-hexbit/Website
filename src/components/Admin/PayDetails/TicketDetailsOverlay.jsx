import React,{useState,useEffect,useContext} from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import Load from "../../../MicroInteraction/Load";
import { Alert } from "../../../MicroInteraction/Alert";

// css
import gpdo from "./Css/TicketDetailsOverlay.module.css";

// axios
import axios from "axios";

export default function TicketDetailsOverlay({ selectedItem }) {
  if (!selectedItem) return null;

  const [replyMessage, setReplyMessage] = useState("");
  const [load, setLoad] = useState(false); 
  const [data, setloadStore] = useState([]);
  const [fetchedData , setFetchedData]= useState({
 replyMessage : ""
  })
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const { StoreName, subject, StoreID, emailID, name, message, when, _id } = selectedItem[0];

  const authCtx = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoad(true);

    const data = {
     emailID,
     replyMessage,
    }

    try {
      const response = await axios.post(
        "/api/website/ContactUs/user/post/reply",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setFetchedData((prevData) => ({ ...prevData, replyMessage: response.data.replyMessage }));
     setReplyMessage("");
        setLoad(false);
      } else {
        console.log(e);
        setLoad(false);
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Failed to send",
          text: "Please all the details",
          val: true,
        });
      }
    } catch (e) {
      
      console.log(e);
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "An unexpected error occurred",
        text: "Failed to send",
        val: true,
      });
    }

    
  }
  const loadStore = async () => {
      setLoad(true);
  
      try {
        const response = await axios.get(
          `/api/website/ContactUs/user/post/reply/${StoreID}`,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
  
        if (response.data.success) {
          setLoad(false);
          console.log("response.data =555555555=343424242 == ", response);
          setFetchedData((prevData) => ({ ...prevData, replyMessage: response.data.replyMessage }));
        } else {
          console.log("errrr");
          setLoad(false);
        }
      } catch (e) {
        console.log(e);
        setLoad(false);
  
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    }
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
        <label className={gpdo.message}>{!fetchedData.replyMessage ?"Reply*" : "Replied"}</label>
       { !fetchedData.replyMessage ?
        (<>
         <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={gpdo.messageInput}
          placeholder="Type..."
          onChange={(e) => setReplyMessage(e.target.value)}
          value = {replyMessage}
        >
        </textarea>
        <div>
         <button onClick={handleSubmit} className={gpdo.btn}>{load ? <Load /> : "Send"}</button>
        </div>
        </>) : (<>
          <p>{fetchedData.replyMessage}</p>
        </>)
        }
      </div>
    
      <Alert variant={variants} val={setError} />
    </div>
  );
}
