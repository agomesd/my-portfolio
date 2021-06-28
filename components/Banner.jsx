import pictureMaynooth from "../public/images/maynooth.png";
import picturePatBlog from "../public/images/patblog.png";
import pictureSps from "../public/images/sps.png";
import Avatar from "../components/Avatar";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.image1}`}>
        <a
          href="https://patrick-williams-photos.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            image={picturePatBlog}
            alt={"Picture of Patrick Williams Photos"}
            variant={"rounded"}
          />
        </a>
      </div>
      <div className={`${styles.image} ${styles.image2}`}>
        <a href="http://savoieps.com" target="_blank" rel="noopener noreferrer">
          <Avatar
            image={pictureSps}
            alt={"Picture of Savoie Preservation Solutions"}
            variant={"rounded"}
          />
        </a>
      </div>
      <div className={`${styles.image} ${styles.image3}`}>
        <a
          href="https://maynooth.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            image={pictureMaynooth}
            alt={"Picture of Maynooth"}
            variant={"rounded"}
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
