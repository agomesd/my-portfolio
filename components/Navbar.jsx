import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.link}>
          <h1>Alex Gomes</h1>
        </a>
      </Link>
      <div className={styles.links}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className={styles.burgerMenu}>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
