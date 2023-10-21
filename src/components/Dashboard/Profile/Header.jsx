import React, { useContext, useRef, useEffect, useState } from "react";

// components
import PersonalInfo from "./PersonalInfo";

// axios
import axios from "axios";

// Css
import HPCss from "./Css/Header.module.css";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

export default function Header() {
  const [load, setLoad] = useState(false);
  const [userData, setUserData] = useState({});
  const [imageUpload, setImageUpload] = useState();

  const authCtx = useContext(AuthContext);

  const fileInp = useRef(null);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/auth/me/`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setUserData(response.data.user);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
    <>
      <div className={HPCss.background}>
        <div className={HPCss.mDiv}>
          <img src={authCtx.user.image} alt="" className={HPCss.imgHeaderP} />
          <div className={HPCss.delHeader}>
            <p className={HPCss.delPName}>
              <b>{authCtx.user.BusinessName}</b>
            </p>
            <p className={HPCss.delDes}>{authCtx.user.GSTIN}</p>
          </div>
        </div>

        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            <PersonalInfo />
            <div className={HPCss.personalinfotab}>
              <div className={HPCss.heading}>Personal info</div>
              <div className={HPCss.box}>
                <div className={HPCss.textcontent}>
                  <div className={HPCss.div}>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>Email</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>{userData.Email}</div>
                      </div>
                    </div>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>Mobile no.</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>+91 {userData.Phone}</div>
                      </div>
                    </div>
                  </div>
                  <div className={HPCss.email}>
                    <div className={HPCss.inputheading}>Address</div>
                    <div className={HPCss.infodiv2}>
                      <p className={HPCss.info}>{userData.Address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={HPCss.businessinfotab}>
              <div className={HPCss.heading}>Business info</div>
              <div className={HPCss.box2}>
                <div className={HPCss.businesscontent}>
                  <div className={HPCss.businesstext}>
                    <div className={HPCss.div}>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>
                          Business/shop name
                        </div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>
                            {userData.ShopName}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={HPCss.email}>
                      <div className={HPCss.businesstext}>Location</div>
                      <div className={HPCss.businessinputdiv2}>
                        <p className={HPCss.businesstext2}>
                          {userData.Address}
                        </p>
                      </div>
                    </div>
                    <div className={HPCss.div}>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>GSTIN</div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>
                            {userData.GSTIN}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={HPCss.lastsection}>
                      <div className={HPCss.logodiv}>
                        <div className={HPCss.businesstext}>About</div>
                        <div className={HPCss.labels}>
                          <p className={HPCss.abouttext}>
                            {userData.AdditionalInfo}
                          </p>
                        </div>
                      </div>

                      <div className={HPCss.logo}>
                        <div className={HPCss.addimgDivMain}>
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
                              className={HPCss.prevImg}
                            />
                          ) : (
                            ""
                          )}

                          <div
                            className={HPCss.addImgDiv}
                            onClick={handleClick}
                          >
                            <div className={HPCss["text-center"]}>
                              <p className={HPCss["dropzone-content"]}>+</p>
                            </div>
                          </div>
                        </div>
                        <div className={HPCss.SubmitBtn} onClick={onSubmit}>
                          Submit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
