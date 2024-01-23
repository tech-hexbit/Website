import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// state
import AuthContext from "../../store/auth-context";

// css
import styles from "./Css/Header.module.css";

// img
import imgLogo from "./../../assets/logo/HexbitLogo.png";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className={styles.mDiv}>
        <div className={styles.mContDiv}>
          <Link to="/" className="LinkStyle">
            <div className={styles.titleP}>
              {/* HEXBIT.io */}
              <img src={imgLogo} alt="" className={styles.imgLogo} />
            </div>
          </Link>

          {/* Home */}
          <div className={styles.rightDiv}>
            <NavLink to="/" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>Home</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>

            {/* About Us */}
            <NavLink to="/AboutUs" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>About Us</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>

            {/* Contact Us */}
            <NavLink to="/contact" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>Contact Us</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>

            {/* User */}
            {authCtx.isLoggedIn ? (
              <>
                <NavLink to="/me" className="LinkStyle">
                  <img
                    src={authCtx.user.image}
                    alt=""
                    className={styles.imgAuth}
                  />
                </NavLink>
              </>
            ) : (
              <>
                {/* Login */}
                <NavLink to="/signIn" className="LinkStyle">
                  <div className={styles.tabsDiv}>
                    <p>Login</p>
                    <div className={styles.tabLineDiv}></div>
                  </div>
                </NavLink>

                {/* Register */}
                <NavLink to="/register" className="LinkStyle">
                  <p className={styles.registerPTag}>
                    <b>Register for free</b>
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.replaceDiv}></div>
    </>
  );
};

export default Header;
