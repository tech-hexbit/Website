import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

//css
import FiCss from "./Css/FileInput.module.css";

export default function UploadFiles({
  label,
  placeholder,
  //   handleImage,
  image,
  handleClicksValue,
}) {
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
    console.log(e.target.files[0]);
    setImageUpload(e.target.files[0]);
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
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className={FiCss.prevImg}
          />
        ) : (
          ""
        )}
        <div className={FiCss.addImgDiv} onClick={() => handleClick}>
          <div className={FiCss["text-center"]}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
