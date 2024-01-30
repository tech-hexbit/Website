import React, { useState } from "react";
import PropTypes from "prop-types";

//component
import UploadFiles from "./UploadFiles";

export default function FileInput({ images, setImages }) {
  const [imageUpload, setImageUpload] = useState({ val: "", img: "" });

  const handleImage = (e) => {
    setImageUpload(e.target.files[0]);
  };

  return (
    <>
      <UploadFiles
        label="Upload Cancelled Cheque"
        val="cancelledCheques"
        image={images.imageUploadCheque}
        handleClicksValue="cheque"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
      />
      <UploadFiles
        label="Address Proof (GSTIN)"
        val="addressProof"
        image={images.imageUploadAddress}
        handleClicksValue="address"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
      />
      <UploadFiles
        label="ID Proof (PAN CARD)"
        val="idProof"
        image={images.imageUploadID}
        handleClicksValue="id"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
      />
    </>
  );
}

FileInput.propTypes = {
  images: PropTypes.object.isRequired,
};
