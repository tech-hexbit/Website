import { Link } from "react-router-dom";

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
          <Link to="/contact" className="LinkStyle">
            <p>Contact Us</p>
          </Link>
          <Link to="/AboutUs" className="LinkStyle">
            <p>About Us</p>
          </Link>
          <Link to="/register" className="LinkStyle">
            <p className={styles.registerPTag}>
              <b>Register for free</b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
