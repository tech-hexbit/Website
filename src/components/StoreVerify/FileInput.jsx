// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
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
FileInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type1: PropTypes.string,
  fileInp: PropTypes.object,
  image: PropTypes.object,
};
export default FileInput;
