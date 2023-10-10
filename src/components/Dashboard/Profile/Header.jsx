import React, { useContext, useEffect, useState } from "react";

// axios
import axios from "axios";

// Css
import HPCss from "./Css/Header.module.css";

// state
import AuthContext from "./../../../store/auth-context";

export default function Header() {
  const [load, setLoad] = useState(false);
  const [userData, setUserData] = useState({});

  const authCtx = useContext(AuthContext);

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
          ""
        ) : (
          <>
            <div className={HPCss.personalinfotab}>
              <div className={HPCss.heading}>Personal info</div>
              <div className={HPCss.box}>
                <div className={HPCss.textcontent}>
                  <div className={HPCss.div}>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>First name</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>Pranav</div>
                      </div>
                    </div>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>Last name</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>Sheth</div>
                      </div>
                    </div>
                  </div>
                  <div className={HPCss.div}>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>Email</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>ps@gmail.com</div>
                      </div>
                    </div>
                    <div className={HPCss.subdiv}>
                      <div className={HPCss.inputheading}>Mobile no.</div>
                      <div className={HPCss.infodiv}>
                        <div className={HPCss.info}>1444840</div>
                      </div>
                    </div>
                  </div>
                  <div className={HPCss.email}>
                    <div className={HPCss.inputheading}>Address</div>
                    <div className={HPCss.infodiv2}>
                      <p className={HPCss.info}>
                        3435AS, dhdhfbgi, chowk, behind bank, Ahmedabad-0000,
                        India
                      </p>
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
                          <div className={HPCss.businesstext2}>abc</div>
                        </div>
                      </div>
                    </div>
                    <div className={HPCss.div}>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>Email</div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>
                            abc@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>Contact no.</div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>138388380</div>
                        </div>
                      </div>
                    </div>
                    <div className={HPCss.email}>
                      <div className={HPCss.businesstext}>Location</div>
                      <div className={HPCss.businessinputdiv2}>
                        <p className={HPCss.businesstext2}>
                          3435AS, dhdhfbgi, chowk, behind bank, Ahmedabad-0000,
                          India
                        </p>
                      </div>
                    </div>
                    <div className={HPCss.div}>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>Account no.</div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>7080003625</div>
                        </div>
                      </div>
                      <div className={HPCss.businessdiv}>
                        <div className={HPCss.businesstext}>GSTIN</div>
                        <div className={HPCss.businessinputdiv}>
                          <div className={HPCss.businesstext2}>827729292</div>
                        </div>
                      </div>
                    </div>
                    <div className={HPCss.lastsection}>
                      <div className={HPCss.logodiv}>
                        <div className={HPCss.businesstext}>Logo</div>
                        <div className={HPCss.labels} />
                      </div>
                      <div className={HPCss.logodiv}>
                        <div className={HPCss.businesstext}>About</div>
                        <div className={HPCss.labels}>
                          <p className={HPCss.abouttext}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Aut minima debitis possimus repellendus
                            tempore et quidem, vitae autem eveniet similique
                            saepe perspiciatis ipsum aliquid ducimus. Repellat
                            autem ipsum esse accusantium?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={HPCss.logo}>
                    <img className={HPCss.image} alt="Image" src="" />
                    <div className={HPCss.logotext}>Logo here</div>
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
