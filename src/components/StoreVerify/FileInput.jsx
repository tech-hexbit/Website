// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const FileInput = (props) => {
  const handleClicks = (val) => {
    if (val === "cheque") {
      props.fileInp.current.click();
    } else if (val === "address") {
      props.fileInp.current.click();
    } else if (val === "id") {
      props.fileInp.current.click();
    }
  };

  return (
    <div className={SvCss.input_ldiv_file}>
      <p className={SvCss.input_label}>{props.label}</p>
      <div className={SvCss.input_div_file}>
        <input
          className={SvCss.input_file}
          type="file"
          name="file"
          placeholder={props.placeholder}
          onChange={(e) => {
            props.handleImage(e);
          }}
          ref={props.fileInp}
        />
        {props.image ? (
          <img
            src={URL.createObjectURL(props.image)}
            alt=""
            className={SvCss.prevImg}
          />
        ) : (
          ""
        )}
        <div
          className={SvCss.addImgDiv}
          onClick={() => handleClicks(props.handleClicksValue)}
        >
          <div className={SvCss["text-center"]}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const ImgInputList = (props) => {
  console.log();
  const fileInp_id = useRef(null);
  const fileInp_cheque = useRef(null);
  const fileInp_address = useRef(null);
  const handleImageCheque = (e) => {
    props.setImages({ ...props.images, imageUploadCheque: e.target.files[0] });
  };
  const handleImageAddress = (e) => {
    props.setImages({ ...props.images, imageUploadAddress: e.target.files[0] });
  };
  const handleImageID = (e) => {
    props.setImages({ ...props.images, imageUploadID: e.target.files[0] });
  };
  return (
    <>
      <FileInput
        label="Upload Cancelled Cheque"
        placeholder="Cheque "
        handleImage={handleImageCheque}
        fileInp={fileInp_cheque}
        image={props.images.imageUploadCheque}
        handleClicksValue="cheque"
      />
      <FileInput
        label="Address Proof (GSTIN)"
        placeholder="Address "
        handleImage={handleImageAddress}
        fileInp={fileInp_address}
        image={props.images.imageUploadAddress}
        handleClicksValue="address"
      />
      <FileInput
        label="ID Proof (PAN CARD)"
        placeholder="PAN Card "
        handleImage={handleImageID}
        fileInp={fileInp_id}
        image={props.images.imageUploadID}
        handleClicksValue="id"
      />
    </>
  );
};
FileInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type1: PropTypes.string,
  fileInp: PropTypes.object,
  image: PropTypes.object,
};
export default ImgInputList;
