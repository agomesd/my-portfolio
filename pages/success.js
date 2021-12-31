import { useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CreditTag from '../components/CreditTag';
import styles from "../styles/pages/Success.module.css";
import common from "../styles/pages/Common.module.css";
import { credits } from '../utils/image-credits';

const Success = () => {
  const redirect = () => {
    setTimeout(() => {
      window.location.assign("/");
    }, 3000);
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <div className={styles.success}>
      <div className={common.container}>
      <Head>
          <title>Success!</title>
          <meta
            name="description"
            content="Form submission success page"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.textbox}>
          <h1 className={styles.header}>
            Success!
            <CheckCircleIcon
              style={{ color: "#60FF87", marginLeft: "1rem" }}
              fontSize="large"
            />
          </h1>
          <p>
            Your message has successfully been sent! You will now be redirected
            to the Homepage.{" "}
            <span>
              <Link href="/">
                <a style={{ color: "#f04854" }}>Click here</a>
              </Link>
            </span>{" "}
            if not redirected.
          </p>
        </div>
      </div>
      <CreditTag data={credits[0]}/>
    </div>
  );
};

export default Success;
