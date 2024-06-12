import { useRef, useState, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import Upcss from "./Css/uploadCsvPopup.module.css";

// img
import upload_image from "../../../assets/dashboard/upload.svg";

const UploadCsvPopup = ({ setShowPopup, setError, domain }) => {
  const [file, setFile] = useState();
  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!file) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please Select a file",
      });

      return;
    }

    console.log("file->", file);

    const formData = new FormData();
    formData.append("Excel", file);
    formData.append("ExcelName", file.name);
    formData.append("domain", JSON.stringify({ domain: domain }));

    const response = await axios.post("/api/common/product/AddBulk", formData, {
      headers: {
        Authorization: `${authCtx.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      authCtx.showAlert({
        mainColor: "#EDFEEE",
        secondaryColor: "#5CB660",
        symbol: "check_circle",
        title: "Success",
        text: "Uploaded CSV",
      });
    } else {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Cannot upload file",
      });
    }
    setShowPopup(false);
  };

  const handleClick = (event) => {
    fileInp.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    event.target.style.display = "block";
    const img = document.getElementById("uploadImg");
    img.style.display = "none";

    console.log(fileUploaded);
  };

  return (
    <>
      <div className={Upcss.mainDiv}>
        <div className={Upcss.childDiv}>
          <div className={Upcss.closeBtn}>
            <p onClick={() => setShowPopup(false)}>X</p>
          </div>
          <div className={Upcss.image}>
            <img
              src={upload_image}
              alt=""
              width={200}
              height={200}
              onClick={handleClick}
              id="uploadImg"
            />
            <input
              type="file"
              onChange={handleChange}
              ref={fileInp}
              style={{ display: "none" }}
            />
            <p>Please select a file</p>
          </div>
          <div className={Upcss.btns}>
            <button type="file" onClick={handleSubmit}>
              Upload file
            </button>
            <a href="https://hexbitbucket2023.s3.ap-south-1.amazonaws.com/sample2_csv.xlsx">
              <button>Download Sample file</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCsvPopup;
