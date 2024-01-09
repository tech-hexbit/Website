import React, { useState, useEffect, useContext } from "react";

// css
import tableDetailStyle from "./Css/HelpDeskFormTableDetail.module.css";

function HelpDeskFormTableDetail({tableData,onBackButtonClick}) {
  console.log(tableData)
  return (
    <div >
      <div>
          <h3 className={tableDetailStyle.headerText}>TICKET ID :#HX{tableData._id.slice(-5)}</h3>
          <h3 className={tableDetailStyle.headerTextSecond}>SUBJECT : {tableData.subject} </h3>
      </div>
      <div className={tableDetailStyle.detailsSection}>
        <div>
          <div className={tableDetailStyle.detailsText }>
            <p className={tableDetailStyle.reqDate}>
              Request Time and Date
            </p>
            <p className={tableDetailStyle.reqDateSecond}>
              <p>
                {tableData.when.date},
              </p>
              <p>
                {tableData.when.time}
              </p>
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Name
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {tableData.name}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Email
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {tableData.emailID}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Store Id
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {tableData.StoreID}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Store Name
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {tableData.StoreName}
            </p>
          </div>
        </div>

      </div>
      <div >
        <p className={tableDetailStyle.message}>Message*</p>
      </div>
      <div className={tableDetailStyle.messageInput}> 
        <p>
          Brief description of the query min 120 characters.
        </p>
      </div>
      <div className={tableDetailStyle.resolveButton}>
          <p className={tableDetailStyle.resolveButtonText}>Resolve Query</p>
      </div>
    </div>
  )
}

export default HelpDeskFormTableDetail