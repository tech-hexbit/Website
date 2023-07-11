import React, { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
