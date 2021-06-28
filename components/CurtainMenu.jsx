import Link from "next/link";
import styles from "../styles/components/CurtainMenu.module.css";

const CurtainMenu = ({ handleClick }) => {

  return (
    <div className={styles.container} id='curtainMenu'>
      <div className={styles.content}>
        <Link href="/about">
          <a onClick={handleClick}>About.</a>
        </Link>
        <Link href="/portfolio">
          <a onClick={handleClick}>Portfolio.</a>
        </Link>
        <Link href="/contact">
          <a onClick={handleClick}>Contact.</a>
        </Link>
      </div>
    </div>
  );
};

export default CurtainMenu;
