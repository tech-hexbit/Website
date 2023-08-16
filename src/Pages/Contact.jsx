import React, { useEffect } from "react";

// components
import ContactMain from "../components/contact/ContactMain";

const Contact = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactMain />
    </>
  );
};

export default Contact;
