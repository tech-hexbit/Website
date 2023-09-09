import React, { useEffect } from "react";

// css
import EC from "./Css/Error.module.css";

// img
import Svg from "./../assets/error/barista_at0v.svg";

const Error = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={EC.mDiv}>
      <img src={Svg} alt="" srcset="" className={EC.imgDiv} />
      <p className={EC.pTag}>Error 404</p>
    </div>
  );
};

export default Error;
