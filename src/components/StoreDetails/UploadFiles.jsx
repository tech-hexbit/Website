import React from "react";
import PropTypes from "prop-types";

// css
import PrCss from "./Css/Particulars.module.css";

export default function UploadFiles({ images, setImages }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Upload Files</p>
    </div>
  );
}

UploadFiles.propTypes = {
  images: PropTypes.object.isRequired,
  setImages: PropTypes.func.isRequired,
};
