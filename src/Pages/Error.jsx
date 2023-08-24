import React, { useEffect } from "react";

const Error = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Error 404</div>;
};

export default Error;
