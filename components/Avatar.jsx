import Image from "next/image";
import styles from "../styles/components/Avatar.module.css";

const Avatar = ({ image, alt, variant }) => {
  return (
    <div
      className={
        variant === "circle"
          ? `${styles.container} ${styles.circle}`
          : `${styles.container} ${styles.rounded}`
      }
    >
      <Image src={image} alt={alt} placeholder="blur" />
    </div>
  );
};

export default Avatar;
