import { useState } from "react";
import styles from "../styles/pages/Contact.module.css";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, subject, message }, setFormData] =
    useState(initialState);

  const handleInputChange = (e) => {
    const input = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.header}>Contact.</h1>
        <form
          className={styles.form}
          data-netlify="true"
          name="contact"
          netlify-honeypot="honeypot"
          data-netlify-recaptcha="true"
          method="POST"
          hidden
          enctype='application/x-www-form-urlencoded'
        >
          <input type="hidden" name="contact" value="contact" />
          <input className={styles.hidden} name="honeypot" />
          <input
            className={styles.textfield}
            name="name"
            id="name"
            type="text"
            placeholder="Full name."
            onChange={handleInputChange}
            value={name}
          />
          <input
            className={styles.textfield}
            name="email"
            id="email"
            type="email"
            placeholder="Email."
            onChange={handleInputChange}
            value={email}
          />
          <input
            className={styles.textfield}
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject."
            onChange={handleInputChange}
            value={subject}
          />
          <textarea
            className={styles.textfield}
            name="message"
            id="message"
            placeholder="Message."
            onChange={handleInputChange}
            value={message}
          />
          <div netlify-recaptcha="true"></div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
