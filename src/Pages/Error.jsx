import React, { useEffect } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
