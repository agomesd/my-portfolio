import { useState } from "react";
import { supabase } from '../utils/supabase';
import CurtainMenu from "./CurtainMenu";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/components/Navbar.module.css";
import { useRouter } from 'next/router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const user = supabase.auth.user();

  const handleOpenMenu = () => {
    document.getElementById("curtainMenu").style.width = "100%";
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    document.getElementById("curtainMenu").style.width = "0%";
    setIsOpen(false);
  };


  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    router.push('/');
    console.log(error);
  }

  return (
    <nav>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.link} onClick={handleCloseMenu}>
            <h1>Alex | Gomes</h1>
          </a>
        </Link>

        <div className={styles.links}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/certificates">
            <a>Certificates</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          {user && (
            <button className={styles.button} onClick={handleLogout}>Logout</button>
          )}
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
    </nav>
  );
};

export default Navbar;
