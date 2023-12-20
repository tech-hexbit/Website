import React, { useEffect, useContext } from "react";

export default function Contact() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Contact</div>;
}
