import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/pages/Contact.module.css";
import common from "../styles/pages/Common.module.css";

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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, subject, message };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    };

    fetch("/", options)
      .then((res) => {
        window.location.assign("/success/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.background}>
      <div className={common.container}>
      <Head>
          <title>Contact | Alex Gomes</title>
          <meta
            name="description"
            content="My contact page where you can write me a message to get in touch."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={common.header}>Contact.</h1>
        <form
          className={styles.form}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
