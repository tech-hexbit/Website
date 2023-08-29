import React, { useContext } from "react";

// Css
import HPCss from "./Css/Header.module.css";

// state
import AuthContext from "../../store/auth-context";

export default function Header() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={HPCss.mDiv}>
      <img src={authCtx.user.image} alt="" className={HPCss.imgHeaderP} />
      <div>
        <p>Pranav Sheth</p>
        <p>Owner & founder</p>
      </div>
    </div>
  );
}
