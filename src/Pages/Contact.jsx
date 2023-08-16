import React, { useEffect } from "react";

// components
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
