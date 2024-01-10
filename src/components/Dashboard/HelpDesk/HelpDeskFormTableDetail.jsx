import React from "react";

// css
import tableDetailStyle from "./Css/HelpDeskFormTableDetail.module.css";

function HelpDeskFormTableDetail({props}) {
  return (
    <>
      <div>
          <h3 className={tableDetailStyle.headerText}>TICKET ID :#HX{props._id.slice(-5)}</h3>
          <h3 className={tableDetailStyle.headerTextSecond}>SUBJECT : {props.subject} </h3>
      </div>
      <div className={tableDetailStyle.detailsSection}>
        <div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Name
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {props.name}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Email
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {props.emailID}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Store Id
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {props.StoreID.slice(-4)}
            </p>
          </div>
          <div className={tableDetailStyle.detailsText}>
            <p className={tableDetailStyle.name}>
              Store Name
            </p>
            <p className={tableDetailStyle.nameSecond}>
              {props.StoreName}
            </p>
          </div>
          <div className={tableDetailStyle.timeDate }>
            <p className={tableDetailStyle.reqDate}>
              Request Time and Date
            </p>
            <p className={tableDetailStyle.reqDateSecond}>
              <p>
                {props.when.date},
              </p>
              <p>
                {props.when.time}
              </p>
            </p>
          </div>
        </div>

      </div>
      <div >
        <p className={tableDetailStyle.message}>Message*</p>
      </div>
      <div className={tableDetailStyle.messageContainer} >
      <textarea
        placeholder="Brief description of the query min 120 characters."
        className={tableDetailStyle.textareaField}
      />
    </div>
      <div className={tableDetailStyle.resolveButton}>
          <p className={tableDetailStyle.resolveButtonText}>Resolve Query</p>
      </div>
    </>
  )
}

export default HelpDeskFormTableDetail