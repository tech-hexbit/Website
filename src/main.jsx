import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// cookie
import CookieConsent from "react-cookie-consent";

// css
import "./index.css";

// store
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "11px" }}
      expires={150}
    >
      <span style={{ fontSize: "11px" }}>
        <b>Use of Cookies</b>
      </span>
      <br />
      <span style={{ fontSize: "11px" }}>
        We and our third party partners use cookie technology to make your
        shopping experience faster, safer and more relevant, and to deliver
        personalized advertising on and off our website. This website uses
        cookies to enhance the user experience.
      </span>
    </CookieConsent>

    <App />
  </AuthContextProvider>
);
