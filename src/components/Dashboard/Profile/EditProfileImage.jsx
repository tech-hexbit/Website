import React, { useContext, useRef, useState } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Alert from "./../../../MicroInteraction/Alert";
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import EtCss from "./Css/EditProfile.module.css";

export default function EditProfileImage(props) {
  const [imageUpload, setImageUpload] = useState();
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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
        setLoad(false);

        console.log(response);
      } else {
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);

      console.log(error);
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

            <button
              className={EtCss.SubmitBtn}
              onClick={onSubmit}
              disabled={imageUpload ? true : false}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
