import { Link, NavLink } from "react-router-dom";

// css
import styles from "./Header.module.css";

// img
import imgLogo from "./../../assets/logo/Hexbit 2.png";

const Header = () => {
  return (
    <div className={styles.mDiv}>
      <div className={styles.mContDiv}>
        <Link to="/" className="LinkStyle">
          <div className={styles.titleP}>
            {/* HEXBIT.io */}
            <img src={imgLogo} alt="" className={styles.imgLogo} />
          </div>
        </Link>
        <div className={styles.rightDiv}>
          <NavLink to="/" className="LinkStyle">
            Home
          </NavLink>
          <NavLink to="/AboutUs" className="LinkStyle">
            <p>About Us</p>
          </NavLink>
          <NavLink to="/contact" className="LinkStyle">
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="/signIn" className="LinkStyle">
            <p>Login</p>
          </NavLink>
          <NavLink to="/register" className="LinkStyle">
            <p className={styles.registerPTag}>
              <b>Register for free</b>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
