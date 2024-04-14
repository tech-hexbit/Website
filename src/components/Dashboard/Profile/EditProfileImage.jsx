import React, { useContext, useRef, useState } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";

// css
import EtCss from "./Css/EditProfile.module.css";

export default function EditProfileImage(props) {
  const [imageUpload, setImageUpload] = useState();
  const [load, setLoad] = useState(false);

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
    setLoad(true);

    if (imageUpload) {
      const formData = new FormData();
      formData.append("images", imageUpload);

      for (var key of formData.entries()) {
        console.log(key[0] + ", -- " + key[1]);
      }

      try {
        const response = await axios.post(
          "/api/website/auth/EditMe",
          formData,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
        console.log(response);

        if (response.data.success) {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Logo Updated !!",
          });

          props.setEdit(false);
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "An Unexpected Error Occured",
          });
        }
      } catch (error) {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occured",
        });

        console.log(error);
      }
    } else {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Select your Logo",
      });
    }
  };

  return (
    <>
      <div className={EtCss.mDiv}>
        <div className={EtCss.centerDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
            className={EtCss.closeMDiv}
            onClick={() => {
              props.setEdit(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <div className={EtCss.upMDivPar}>
            <div className={EtCss.upMDiv}>
              <div className={EtCss.addimgDivMain}>
                <input
                  type="file"
                  name="file"
                  onChange={handleImage}
                  style={{ display: "none" }}
                  ref={fileInp}
                />

                <div className={EtCss.addImgDiv} onClick={handleClick}>
                  <p className={EtCss.LogoHere}>Logo Here</p>
                  <div className={EtCss.textCenter}>
                    <p className={EtCss.dropzoneContent}>+</p>
                  </div>
                </div>
              </div>
              <div className={imageUpload ? "showPrev" : "hidePrev"}>
                {imageUpload ? (
                  <div className={EtCss.prevImgDiv}>
                    <p className={EtCss.PreviewPTag}>Preview</p>
                    <img
                      src={URL.createObjectURL(imageUpload)}
                      alt=""
                      className={EtCss.prevImg}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button className={EtCss.SubmitBtn} onClick={onSubmit}>
              {load ? <Load /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
