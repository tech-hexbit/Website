import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//component
import UploadFiles from "./UploadFiles";

export default function FileInput({ images, setImages }) {
  const [imageUpload, setImageUpload] = useState({ val: "", img: "" });

  const onSubmit = async () => {};

  return (
    <>
      <UploadFiles
        label="Upload Cancelled Cheque"
        val="cancelledCheques"
        image={images.imageUploadCheque}
        handleClicksValue="cheque"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
      <UploadFiles
        label="Address Proof (GSTIN)"
        val="addressProof"
        image={images.imageUploadAddress}
        handleClicksValue="address"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
      <UploadFiles
        label="ID Proof (PAN CARD)"
        val="idProof"
        image={images.imageUploadID}
        handleClicksValue="id"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
    </>
  );
}

FileInput.propTypes = {
  images: PropTypes.object.isRequired,
};
