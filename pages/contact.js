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
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          method="POST"
        >
          <input type="hidden" name="bot-field" />
          <input type='hidden' name='form-name' value='contact'/>
          <input
            className={styles.textfield}
            name="name"
            type="text"
            placeholder="Full name."
            onChange={handleInputChange}
            value={name}
            required
          />
          <input
            className={styles.textfield}
            name="email"
            type="email"
            placeholder="Email."
            onChange={handleInputChange}
            value={email}
            required
          />
          <input
            className={styles.textfield}
            name="subject"
            type="text"
            placeholder="Subject."
            onChange={handleInputChange}
            value={subject}
            required
          />
          <textarea
            className={styles.textfield}
            name="message"
            placeholder="Message."
            onChange={handleInputChange}
            value={message}
            required
          ></textarea>
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
