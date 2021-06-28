import styles from "../styles/components/BurgerMenu.module.css";

const BurgerMenu = ({ isOpen, handleOpenMenu, handleCloseMenu }) => {
  return (
    <div className={styles.container}>
        <div className={styles.burger} onClick={isOpen ? handleCloseMenu : handleOpenMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
    </div>  
  );
};

export default BurgerMenu;
