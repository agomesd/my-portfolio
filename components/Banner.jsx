import pictureMaynooth from "../public/images/maynooth.png";
import picturePatBlog from "../public/images/patblog.png";
import pictureSps from "../public/images/sps.png";
import Avatar from "../components/Avatar";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ zIndex: "100", left: "22%" }}>
        <a
          href="https://patrickwilliamsphotos.netlify.app"
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
      <div className={styles.image} style={{ left: "-75px", top: "30px" }}>
        <a href="http://savoieps.com" target="_blank" rel="noopener noreferrer">
          <Avatar
            image={pictureSps}
            alt={"Picture of Savoie Preservation Solutions"}
            variant={"rounded"}
          />
        </a>
      </div>
      <div className={styles.image} style={{ right: "-75px", top: "30px" }}>
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
