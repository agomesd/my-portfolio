import { useEffect } from 'react';
import styles from "../styles/pages/Success.module.css";

const Success = () => {
    const redirect = () => {
        windon.loacation.assign('/');
    }

    useEffect(() => {
        setTimeout(() => {
            redirect()
        }, 2000)
    }, []);
    
  return (
    <div className={styles.success}>
      <div className={styles.container}>
        <h1 className={styles.header}>Success!</h1>
        <p>
          Your message has successfully been sent! You will now be redirected to
          the Homepage.
        </p>
      </div>
    </div>
  );
};

export default Success;
