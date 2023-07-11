// components
import Title from "./Title";

// css
import styles from "./Css/WhoAreWe.module.css";

// icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GridItem = ({ text }) => {
  return (
    <div className={styles.tripleGridItem}>
      <div className={styles.iconDiv}>
        <ArrowForwardIosIcon fontSize="small" />
      </div>
      <div className={styles.title}>{text}</div>
    </div>
  );
};

const WhoAreWe = () => {
  return (
    <div className={styles.wrapperDiv}>
      <Title title="Who Are We?" />

      <div className={styles.container}>
        <div className={styles.tripleGrid}>
          <GridItem text="A Trustworthy Business Partner For Micro, Small, And Medium Enterprises" />
          <GridItem text="Empowering Businesses For The Digital Age." />
          <GridItem text="Digitization With Minimum Involvement In The Process" />
        </div>

        <div className={styles.paragraph}>
          HEXBIT.IO is an attempt to create a trustworthy business partner for
          micro, small, and medium enterprises in their journey of digitization
          with minimum involvement in the process. It is an end-to-end
          integrated hybrid formula enabled by technology and human hands to
          enable enterprises across the products and services category to
          leverage the growing digital commerce markets.
        </div>

        <button type="button" className={styles.button}>
          Register for free
        </button>
      </div>
    </div>
  );
};

export default WhoAreWe;
