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
        <GitHubIcon className={styles.icon}/>
        <LinkedInIcon className={styles.icon}/>
        <FacebookIcon className={styles.icon}/>
        <InstagramIcon className={styles.icon}/>
      </div>
    </div>
  );
};

export default Footer;
