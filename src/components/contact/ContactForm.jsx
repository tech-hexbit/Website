// icon
import mail from "./../../assets/AboutUS/Icon.svg";
import Icon_Call from "./../../assets/AboutUS/Icon_call.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// css
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

          <div className={styles.conDiv}>
            <div className={styles.MailUs}>Mail Us</div>
            <div className={styles.CallUs}>Call Us</div>
          </div>

          <div className={styles.pointerDiv}>
            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>An overview of the platform and its features</p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>
                Consultation on how to leverage the platform for your community
              </p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>Share few success stories with you</p>
            </div>

            <div className={styles.pointers}>
              <ArrowRightAltIcon fontSize="large" />
              <p>
                Many desktop publishing packages and web page editors now use
              </p>
            </div>
          </div>
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
          <div className={styles.SendMessage}>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
