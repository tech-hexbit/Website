import React, { useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// css
import "./Css/Alert.css";

export const Alert = () => {
  const authCtx = useContext(AuthContext);

  console.table(authCtx.alert);

  useEffect(() => {
    if (authCtx.alert.show) {
      setTimeout(() => {
        authCtx.clearAlert();
      }, 10000);
    }
  }, [authCtx.alert.show]);

  return (
    <div className="alert-mDiv" id={authCtx.alert.show ? "show" : "hide"}>
      <div
        className="alert-container"
        style={{
          background: authCtx.alert.mainColor,
          border: "0.1rem solid " + authCtx.alert.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: authCtx.alert.secondaryColor }}
        >
          <div>
            <span class="material-symbols-outlined symbol colorIcon">
              {authCtx.alert.symbol}
            </span>
          </div>
        </div>
        <div className="description-container">
          <span className="description-title">{authCtx.alert.title}:</span>
          <span className="description-text"> {authCtx.alert.text}</span>
        </div>
        <a
          className="symbol-close-link"
          onClick={() => {
            authCtx.clearAlert();
          }}
        >
          <span class="material-symbols-outlined  colorIcon">close</span>
        </a>
      </div>
    </div>
  );
};
