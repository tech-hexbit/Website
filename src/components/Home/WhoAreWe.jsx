// components
import Title from "./Title";

// css
import styles from "./Css/WhoAreWe.module.css";

// icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../assets/whoAreWe/Activity.png";
import image2 from "../../assets/whoAreWe/Video.png";
import image3 from "../../assets/whoAreWe/Chart.png";
import { Link } from "react-router-dom";

const GridItem = ({ text, img, subText }) => {
  return (
    <div className={styles.tripleGridItem}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{text}</div>
        <div className={styles.subTitle}>{subText}</div>
      </div>
      <button className={styles.contactButton}>
        <Link to="/contact" className="LinkStyle">
          <p>Contact Us</p>
        </Link>
      </button>
    </div>
  );
};

const WhoAreWe = () => {
  return (
    <div className={styles.wrapperDiv}>
      <div className={styles.header}>
        <div className={styles.head1}>HEXBIT Who ??</div>
        <div className={styles.head2}>Who Are We </div>
      </div>

      <div className={styles.container}>
        <div className={styles.tripleGrid}>
          <GridItem
            text="TRUSTWORTHY BUSINESS PARTNER"
            img={image1}
            subText="A Trustworthy Business Partner For Micro, Small, And Medium Enterprises"
          />
          <GridItem
            text="Empowering Businesses For The Digital Age"
            img={image2}
            subText="We are Always Dedicated In Empowering All Types Businesses For The Digital Age."
          />
          <GridItem
            text="DIGITIZATION"
            img={image3}
            subText=" Digitization With Minimum Involvement In The Process"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
