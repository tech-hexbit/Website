import React from "react";

//component
import TextInput from "./TextInput";

const GrpTextInput = ({ showData, setData }) => {
  return (
    <>
      <TextInput
        type="text"
        Label="First Name"
        showData={showData}
        setData={setData}
        field="FirstName"
        placeholder="John"
      />{" "}
      <TextInput
        type="text"
        Label="Last Name"
        showData={showData}
        setData={setData}
        field="LastName"
        placeholder="David"
      />{" "}
      <TextInput
        type="text"
        Label="Legal Name"
        showData={showData}
        setData={setData}
        field="LegalName"
        placeholder="John David"
      />
      <TextInput
        type="email"
        Label="Email ID"
        showData={showData}
        setData={setData}
        field="EmailID"
        placeholder="Enter your email"
      />{" "}
      <TextInput
        type="date"
        Label="DOB"
        showData={showData}
        setData={setData}
        field="DOB"
      />
    </>
  );
};

export default GrpTextInput;
