import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>© 2021 all rights reserved</p>
        <p className={styles.info}>
          <EmailIcon style={{ marginRight: '0.5rem' }} /> alex.gduguay@gmail.com
        </p>
        <p className={styles.info}>
          <PhoneIcon style={{ marginRight: '0.5rem' }} />
          +44 (0) 7767 747710
        </p>
      </div>
      <div className={styles.iconbox}>
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
