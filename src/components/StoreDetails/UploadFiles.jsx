import React from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";
import { Alert } from "./../../MicroInteraction/Alert";

//component
import UploadFilesMain from "./UploadFilesMain";

// css
import PrCss from "./Css/Particulars.module.css";

export default function UploadFiles({ images, setImages }) {
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

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Updated !!",
            val: true,
          });
        } else {
          setLoad(false);

          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "An Unexpected Error Occured",
            val: true,
          });
        }
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

      <Alert variant={variants} val={setError} />
    </>
  );
}

UploadFiles.propTypes = {
  images: PropTypes.object.isRequired,
  setImages: PropTypes.func.isRequired,
};
