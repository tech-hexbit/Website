import React, { useEffect } from "react";

// helmet
import { Helmet } from "react-helmet";

// components
import ContactMain from "./../components/contact/ContactMain";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>HexBit.io - Contact</title>
      </Helmet>

      <ContactMain />
    </>
  );
};

export default Contact;
