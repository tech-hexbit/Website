import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// cookie
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";

// css
import "./index.css";

// store
import { AuthContextProvider } from "./store/auth-context";

// console.log(getCookieConsentValue("myAwesomeCookieName2"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="hexbitCookie"
      style={{ background: "#fff", boxShadow: "0 1px 5px black" }}
      buttonStyle={{
        color: "#fff",
        fontSize: "13px",
        backgroundColor: "#c075ff",
        fontWeight: "bold",
      }}
      expires={150}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          console.log("Accept was triggered by user scrolling");
        } else {
          console.log("Accept was triggered by clicking the Accept button");
        }
      }}
    >
      <span style={{ fontSize: "11px", color: "#221d1d" }}>
        <b>Use of Cookies</b>
      </span>
      <br />
      <span style={{ fontSize: "11px", color: "#221d1d" }}>
        We and our third party partners use cookie technology to make your
        shopping experience faster, safer and more relevant, and to deliver
        personalized advertising on and off our website. This website uses
        cookies to enhance the user experience.
      </span>
    </CookieConsent>

    <App />
  </AuthContextProvider>
);
