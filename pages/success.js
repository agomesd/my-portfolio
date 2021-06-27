import { useEffect } from "react";
import Link from 'next/link';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "../styles/pages/Success.module.css";

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
      <div className={styles.container}>
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
    </div>
  );
};

export default Success;
