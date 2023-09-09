import React, { useEffect } from "react";

// css
import EC from "./Css/Error.module.css";

const Error = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="">Error 404</div>;
};

export default Error;
