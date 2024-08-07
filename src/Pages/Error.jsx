import React from "react";

// css
import EC from "./Css/Error.module.css";

const Error = () => {
  return (
    <div id={EC.notfound}>
      <div class={EC.notfound}>
        <div class={EC.notfound404}>
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
};

export default Error;
