import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

//css
import FiCss from "./Css/FileInput.module.css";
import EtCss from "./../Dashboard/Profile/Css/EditProfile.module.css";

export default function UploadFiles({
  label,
  placeholder,
  //   handleImage,
  image,
  setImageUpload,
  imageUpload,
  handleClicksValue,
}) {
  const [imageUploadPart, setImageUploadPart] = useState();

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const fileInp = useRef(null);

  const handleImage = (e) => {
    setImageUploadPart(e.target.files[0]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  return (
    <div className={FiCss.inputLdivFile}>
      <p className={FiCss.inputLabel}>{label}</p>
      <div className={FiCss.inputDivFile}>
        <input
          type="file"
          name="file"
          onChange={handleImage}
          style={{ display: "none" }}
          ref={fileInp}
        />
        <div className={imageUploadPart ? "showPrev" : "hidePrev"}>
          {imageUploadPart ? (
            <div className={EtCss.prevImgDiv}>
              <p className={EtCss.PreviewPTag}>Preview</p>
              <img
                src={URL.createObjectURL(imageUploadPart)}
                alt=""
                className={EtCss.prevImg}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={FiCss.addImgDiv} onClick={handleClick}>
          <div className={FiCss.textCenter}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
