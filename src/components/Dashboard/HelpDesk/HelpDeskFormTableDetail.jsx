import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

//axios
import axios from "axios";

//state
import AuthContext from "../../../store/auth-context";

//css
import tableDetailStyle from "./Css/HelpDeskFormTableDetail.module.css";

//components
import Load from "../../../MicroInteraction/Load";

export default function HelpDeskFormTableDetail({ tableData, tableVal }) {
  
    console.log("Updated tableData:", tableData);
  
    const [querySolved , setQuerySolved] = useState(false);
    const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const resolveQueryHandler = async (event) => {
    event.preventDefault();
    setLoad(true);

    const resolveQueryData = {
      resolveQuery: true,
    };
  

    console.log("resolving.......");
    try {
      const response = await axios.post(
        "/api/website/ContactUs/user/post/resolveQuery",
        resolveQueryData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        
        setLoad(false);
        console.log("response.data  =====  ", response.data);
        console.log(response.data.resolvedQuery);
        if (response.data.resolvedQuery === true) {
          setQuerySolved(true);
        } else {
          throw new Error("Could not resolve query");
        }
        // tableVal([...tableData, { resolveQuery: response.data.resolvedQuery }]);

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

  return (
    <div>
      <div>
        {/* ID */}
        <h3 className={tableDetailStyle.headerText}>
          TICKET ID :#HX{tableData._id.slice(-5)}
        </h3>

        {/* SUBJECT */}
        <h3 className={tableDetailStyle.headerTextSecond}>
          SUBJECT : {tableData.subject}
        </h3>
      </div>
      <div className={tableDetailStyle.detailsSection}>
        <div>
          {/* Name */}
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>Name</p>
            <p className={tableDetailStyle.nameSecond}>{tableData.name}</p>
          </div>

          {/* Email */}
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>Email</p>
            <p className={tableDetailStyle.nameSecond}>{tableData.emailID}</p>
          </div>

          {/* Store Id */}
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>Store Id</p>
            <p className={tableDetailStyle.nameSecond}>
              #{tableData.StoreID.slice(-4)}
            </p>
          </div>

          {/* Store Name */}
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>Store Name</p>
            <p className={tableDetailStyle.nameSecond}>{tableData.StoreName}</p>
          </div>

          {/* Request Time */}
          <div className={tableDetailStyle.timeDate}>
            <p className={tableDetailStyle.reqDate}>Request Time and Date</p>
            <p className={tableDetailStyle.reqDateSecond}>
              <p>{tableData.when.date}</p>
              <span className={tableDetailStyle.comma}>,</span>
              <p>{tableData.when.time}</p>
            </p>
          </div>
        </div>
      </div>
      {/* Message */}
      <div className={tableDetailStyle.msgMDiv}>
        <label className={tableDetailStyle.message}>Message*</label>
        <p>{tableData.message}</p>
        {tableData.replyMessage && (
          <div className={tableDetailStyle.replyMessage}>
            <h4>Replied by : {tableData.replierEmail}</h4>
            <p>{tableData.replyMessage}</p>
          </div>
        )}
      </div>

      {/* Resolve Button */}
      
        <div className={tableDetailStyle.resolveButton}>
        { load ? <div className={tableDetailStyle.loading}>
          <Load/> 
        </div> : <p onClick={resolveQueryHandler} className={tableDetailStyle.resolveButtonText}>
  {(!tableData.resolvedQuery && !querySolved ) ? "Resolve Query" : "Query resolved"}
</p>}

        </div>
      
    </div>
  );
}

HelpDeskFormTableDetail.propTypes = {
  tableData: PropTypes.object.isRequired,
};
