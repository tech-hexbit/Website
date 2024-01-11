import React, { useRef } from "react";
import PropTypes from "prop-types";

//Css
import style from "./Css/MultipleImageHandler.module.css";

export default function MultipleImageHandler({
  multipleImageUpload,
  setMultipleImageUpload,
}) {
  const fileInp = useRef(null);

  // Functions to handle change
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setMultipleImageUpload((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  const handleDeselectImage = (index) => {
    const filteredImages = multipleImageUpload.filter((_, i) => i !== index);
    setMultipleImageUpload(filteredImages);
  };

  return (
    <>
      <div className={style.inpDiv}>
        <p className={style.label}>Product image</p>
        <p className={style.labelDes}>Add the product main image</p>
        <div className={style.addimgDivMain}>
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={fileInp}
          />

          {multipleImageUpload.map((image, index) => (
            <div key={index} className={style.imageContainer}>
              <img
                src={URL.createObjectURL(image)}
                alt=""
                style={{
                  maxWidth: "150px",
                  maxHeight: "100px",
                  margin: "5px",
                  position: "relative",
                }}
              />
              <div className={style.closeButton}>
                <button onClick={() => handleDeselectImage(index)}>
                  &#x2715;
                </button>
              </div>
            </div>
          ))}

          <div className={style.addImgDiv} onClick={handleClick}>
            <div>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

MultipleImageHandler.propTypes = {
  multipleImageUpload: PropTypes.array.isRequired,
  setMultipleImageUpload: PropTypes.func.isRequired,
};
