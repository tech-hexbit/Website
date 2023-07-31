import styles from "./Css/ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      {/* <div className={styles.heading}>Contact us</div> */}

      {/* <div className={styles.group}>
        <div className={styles.left}>
          <form action="">
            <input name="" type="text" placeholder="Name" />
            <input name="" type="text" placeholder="Email" />
            <input name="" type="text" placeholder="Contact number" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.right}>
          <p>or drop a mail at</p>
          <h2>
            <a href="mailto:info@hexbit.io">info@hexbit.io</a>
            <br />
            <a href="mailto:contact@hexbit.io">contact@hexbit.io</a>
          </h2>
        </div>
      </div> */}

      <div className={styles.mDiv}>
        <div className={styles.leftDiv}>
          <p className={styles.HexbitPMainTag}>
            Is Hexbit the right platform for your Business?
          </p>
          <p className={styles.JustAnswer}>
            Just answer a few questions so that we can personalize the right
            experience for you. unknown printer took a type and scrambled it to
            make a type
          </p>
        </div>
        <div className={styles.FormMDiv}>
          {/* FirstName */}
          <div className={styles.labelDiv}>
            <label htmlFor="FirstName">First Name *</label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="John David"
            />
          </div>
          {/* Email */}
          <div className={styles.labelDiv}>
            <label htmlFor="Email">Your email *</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="example@yourmail.com"
            />
          </div>
          {/* Company */}
          <div className={styles.labelDiv}>
            <label htmlFor="Company">Company *</label>
            <input
              type="text"
              name="Company"
              id="Company"
              placeholder="your company name here"
            />
          </div>
          {/* Subject */}
          <div className={styles.labelDiv}>
            <label htmlFor="Subject">Subject *</label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              placeholder="How can we Help"
            />
          </div>
          {/* Message */}
          <div className={styles.labelDiv}>
            <label htmlFor="FirstName">Message *</label>
            <textarea
              name="FirstName"
              id="FirstName"
              cols="30"
              rows="10"
              placeholder="Hello there,I would like to talk about how to..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
