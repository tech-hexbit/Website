import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// css
import tableDetailStyle from "./Css/HelpDeskFormTableDetail.module.css";

export default function HelpDeskFormTableDetail({ tableData, replierEmail }) {
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
        {tableData.replyMessage &&
        <div className={tableDetailStyle.replyMessage}>
        <h4>Replied by : {tableData.replierEmail}</h4>
          <p>{tableData.replyMessage}</p>
          </div>
        }
      </div>

      {/* Resolve Button */}
      <div className={tableDetailStyle.resolveButton}>
        <p className={tableDetailStyle.resolveButtonText}>Resolve Query</p>
      </div>
    </div>
  );
}

HelpDeskFormTableDetail.propTypes = {
  tableData: PropTypes.object.isRequired,
};
