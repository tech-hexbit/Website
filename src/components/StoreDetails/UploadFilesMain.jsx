import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

//css
import FiCss from "./Css/FileInput.module.css";
import EtCss from "./../Dashboard/Profile/Css/EditProfile.module.css";

export default function UploadFilesMain({
  label,
  val,
  setImageUpload,
  imageUpload,
  onSubmitFun,
}) {
  const [imageUploadPart, setImageUploadPart] = useState();

  const fileInp = useRef(null);

  const handleImage = (e) => {
    setImageUploadPart(e.target.files[0]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  const onSubmit = async () => {
    setImageUpload({
      ...imageUpload,
      val,
      img: imageUploadPart,
    });

    onSubmitFun();
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
            <>
              <div className={EtCss.prevImgDiv}>
                <p className={EtCss.PreviewPTag}>Preview</p>
                <img
                  src={URL.createObjectURL(imageUploadPart)}
                  alt=""
                  className={EtCss.prevImg}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className={FiCss.addImgDiv} onClick={handleClick}>
          <div
            className={`${FiCss.textCenter} ${
              imageUploadPart ? FiCss.textCenterM : ""
            }`}
          >
            <p>+</p>
          </div>
        </div>

        {imageUploadPart ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`lucide lucide-upload ${FiCss.uploadIcon} `}
              onClick={onSubmit}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
