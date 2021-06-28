import { useState } from "react";
import CurtainMenu from "./CurtainMenu";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    document.getElementById("curtainMenu").style.width = "100%";
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    document.getElementById("curtainMenu").style.width = "0%";
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.link} onClick={handleCloseMenu}>
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
          <BurgerMenu
            handleOpenMenu={handleOpenMenu}
            handleCloseMenu={handleCloseMenu}
            isOpen={isOpen}
          />
        </div>
      </div>
      <CurtainMenu handleClick={handleCloseMenu} />
    </>
  );
};

export default Navbar;
