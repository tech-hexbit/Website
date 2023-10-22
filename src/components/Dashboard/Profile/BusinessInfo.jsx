import React, { useContext, useRef, useEffect, useState } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BusinessInfo(props) {
  const [imageUpload, setImageUpload] = useState();

  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setImageUpload(e.target.files[0]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("images", imageUpload);

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    try {
      const response = await axios.post("/api/website/auth/EditMe", formData, {
        headers: { Authorization: `${authCtx.token}` },
      });
      console.log(response);

      if (response.data.success) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Business info</div>
      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Business/Shop Name</div>
            <div className={PICss.infodiv}>{props.ShopName}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>GSTIN</div>
            <p className={PICss.infodiv}>{props.GSTIN}</p>
          </div>
        </div>
        <div className={PICss.col0}>
          <div className={PICss.inputheading}>About</div>
          <div className={PICss.infodiv}>{props.AdditionalInfo}</div>
        </div>

        <div className={PICss.logo}>
          <div className={PICss.addimgDivMain}>
            <input
              type="file"
              name="file"
              onChange={handleImage}
              style={{ display: "none" }}
              ref={fileInp}
            />

            {imageUpload ? (
              <img
                src={URL.createObjectURL(imageUpload)}
                alt=""
                className={PICss.prevImg}
              />
            ) : (
              ""
            )}

            <div className={PICss.addImgDiv} onClick={handleClick}>
              <div className={PICss["text-center"]}>
                <p className={PICss["dropzone-content"]}>+</p>
              </div>
            </div>
          </div>
          <div className={PICss.SubmitBtn} onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
