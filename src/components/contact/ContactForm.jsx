import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <div className={styles.heading}>Contact us</div>

      <div className={styles.group}>
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
      </div>
    </div>
  );
};

export default ContactForm;
