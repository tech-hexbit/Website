// components
import Title from "./Title";
import GridItem from "./GridItem";

// css
import styles from "./Css/WhoAreWe.module.css";

// icons
import image1 from "../../assets/whoAreWe/Activity.png";
import image2 from "../../assets/whoAreWe/Video.png";
import image3 from "../../assets/whoAreWe/Chart.png";

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
