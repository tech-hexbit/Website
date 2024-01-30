import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";
import { Alert } from "./../../MicroInteraction/Alert";

//component
import UploadFiles from "./UploadFiles";

export default function FileInput({ images, setImages }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState({ val: "", img: "" });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const onSubmit = async () => {
    setLoad(true);

    if (imageUpload) {
      const formData = new FormData();
      formData.append("value", JSON.stringify(imageUpload.val));
      formData.append("file", imageUpload.img);

      try {
        const response = await axios.post(
          "/api/website/auth/kyc/files/Upload",
          formData,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        console.log(response);

        console.log("first");
      } catch (error) {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
          val: true,
        });

        console.log(error);
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Select your Logo",
        val: true,
      });
    }
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

      <Alert variant={variants} val={setError} />
    </>
  );
}

FileInput.propTypes = {
  images: PropTypes.object.isRequired,
};
