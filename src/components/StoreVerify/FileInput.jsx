import React, { useRef } from "react";

import PropTypes from "prop-types";

//css
import FiCss from "./Css/FileInput.module.css";

const FileInput = ({
  fileInp,
  label,
  placeholder,
  handleImage,
  image,
  handleClicksValue,
}) => {
  const handleClicks = (val) => {
    if (val === "cheque") {
      fileInp.current.click();
    } else if (val === "address") {
      fileInp.current.click();
    } else if (val === "id") {
      fileInp.current.click();
    }
  };

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
};
const ImgInputList = ({ images, setImages }) => {
  const fileInp_id = useRef(null);
  const fileInp_cheque = useRef(null);
  const fileInp_address = useRef(null);
  const handleImageCheque = (e) => {
    setImages({ ...images, imageUploadCheque: e.target.files[0] });
  };
  const handleImageAddress = (e) => {
    setImages({ ...images, imageUploadAddress: e.target.files[0] });
  };
  const handleImageID = (e) => {
    setImages({ ...images, imageUploadID: e.target.files[0] });
  };
  return (
    <>
      <FileInput
        label="Upload Cancelled Cheque"
        placeholder="Cheque "
        handleImage={handleImageCheque}
        fileInp={fileInp_cheque}
        image={images.imageUploadCheque}
        handleClicksValue="cheque"
      />
      <FileInput
        label="Address Proof (GSTIN)"
        placeholder="Address "
        handleImage={handleImageAddress}
        fileInp={fileInp_address}
        image={images.imageUploadAddress}
        handleClicksValue="address"
      />
      <FileInput
        label="ID Proof (PAN CARD)"
        placeholder="PAN Card "
        handleImage={handleImageID}
        fileInp={fileInp_id}
        image={images.imageUploadID}
        handleClicksValue="id"
      />
    </>
  );
};
ImgInputList.propTypes = {
  images: PropTypes.object,
};

export default ImgInputList;
