import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

//component
import UploadFilesMain from "./UploadFilesMain";

// css
import PrCss from "./Css/Particulars.module.css";

export default function UploadFiles({ images, setImages }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState({ val: "", img: "" });

  const authCtx = useContext(AuthContext);

  const onSubmit = async () => {
    setLoad(true);

    console.log(imageUpload);
    console.log(imageUpload.img);

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

        if (response.data.success) {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Updated !!",
          });
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "An Unexpected Error Occured",
          });
        }
      } catch (error) {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
        });

        console.log(error);
      }
    } else {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Select your Logo",
      });
    }
  };

  return (
    <>
      <div className={PrCss.mDiv}>
        <p className={PrCss.AboutYou}>Upload Files</p>
      </div>

      <UploadFilesMain
        label="Upload Cancelled Cheque"
        val="cancelledCheques"
        image={images.imageUploadCheque}
        // handleClicksValue="cheque"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
      <UploadFilesMain
        label="Address Proof (GSTIN)"
        val="addressProof"
        image={images.imageUploadAddress}
        // handleClicksValue="address"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
      <UploadFilesMain
        label="ID Proof (PAN CARD)"
        val="idProof"
        image={images.imageUploadID}
        // handleClicksValue="id"
        setImageUpload={setImageUpload}
        imageUpload={imageUpload}
        onSubmitFun={onSubmit}
      />
    </>
  );
}

UploadFiles.propTypes = {
  images: PropTypes.object.isRequired,
  setImages: PropTypes.func.isRequired,
};
