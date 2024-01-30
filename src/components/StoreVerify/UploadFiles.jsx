import React from "react";
import PropTypes from "prop-types";

//css
import FiCss from "./Css/FileInput.module.css";

export default function UploadFiles({
  fileInp,
  label,
  placeholder,
  handleImage,
  image,
  handleClicksValue,
}) {
  return (
    <div className={FiCss.inputLdivFile}>
      <p className={FiCss.inputLabel}>{label}</p>
      <div className={FiCss.inputDivFile}>
        <input
          className={FiCss.inputFile}
          type="file"
          name="file"
          placeholder={placeholder}
          onChange={(e) => {
            handleImage(e);
          }}
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
        <div
          className={FiCss.addImgDiv}
          onClick={() => handleClicks(handleClicksValue)}
        >
          <div className={FiCss["text-center"]}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
