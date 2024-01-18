// import SvCss from "../Css/StoreVerify.module.css";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const FileInput = ({
  label,
  placeholder,
  handleImage,
  fileInp,
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
    <div className={SvCss.input_ldiv_file}>
      <p className={SvCss.input_label}>{label}</p>
      <div className={SvCss.input_div_file}>
        <input
          className={SvCss.input_file}
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
            className={SvCss.prevImg}
          />
        ) : (
          ""
        )}
        <div
          className={SvCss.addImgDiv}
          onClick={() => handleClicks(handleClicksValue)}
        >
          <div className={SvCss["text-center"]}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// BankFields.propTypes = {
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   type1: PropTypes.string,
// };
export default FileInput;
