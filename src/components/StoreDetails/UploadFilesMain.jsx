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

  return <div>UploadFilesMain</div>;
}
