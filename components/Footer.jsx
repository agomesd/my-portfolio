import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>© 2021 all rights reserved</p>
      </div>
      <div className={styles.iconBox}>
        <a
          href="https://github.com/agomesd/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className={styles.icon} fontSize={"large"} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-gomes-duguay-90128b5a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className={styles.icon} fontSize={"large"} />
        </a>
        <a
          href="https://www.facebook.com/alex.gomes.378"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon className={styles.icon} fontSize={"large"} />
        </a>
        <a
          href="https://www.instagram.com/glengomerson/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon className={styles.icon} fontSize={"large"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
