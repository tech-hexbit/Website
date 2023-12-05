import React from "react";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function AllSellers(props) {
  return (
    <div>
      {props.load ? (
        <Load />
      ) : (
        <>
          {props.data ? (
            <>
              {props.data.map((val, key) => {
                return (
                  <div key={key} className={}>
                    <p>{val.BusinessName}</p>
                    <p>{val.Phone}</p>
                    <p>{val.Email}</p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
