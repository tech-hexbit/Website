import React, { useState, useContext } from 'react'


// state
import AuthContext from "../../../../../store/auth-context";

// Css
import SCss from '../CSS/SellerDetail.module.css'
import SDCss from '../CSS/selectSellerDetail.module.css';

function Alert(props) {
  const [load, setLoad] = useState(false);
  const [showVer, setVer] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const saveVer = async () => {
    let showData = {
      email: props.show.val.Email,
      state: true,
    };
    try {
      const response = await axios.post(
        "/api/website/admin/setVerification",
        showData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setVer(false);

        console.log("first");

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Verified",
          val: true,
        });

        props.hide(false);
        props.setLoad(true);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };
  return (
    <div className={SCss.alert} >
    {props.props.show.val.accountVerified ? (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#15e506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
      <p className={SCss.ver}>VERIFIED SELLER</p>
      </>

    ) : (
      <>
        {showVer ? (
          <>
            <div class="checkbox-wrapper-3">
              <input type="checkbox" id="cbx-3" onClick={saveVer} />
              <label for="cbx-3" class="toggle">
                <span></span>
              </label>
            </div>
          </>
        ) : (
          
          <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d70303"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-badge-help"
            className={SDCss.notVer}
            onClick={() => {
              setVer(true);
            }}
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" x2="12.01" y1="17" y2="17" />
          </svg>
          <p className={SCss.unVer}>UNVERIFIED SELLER</p>
          </>
        )}
      </>
    )}
  </div>
  )
}

export default Alert