
import styles from '../styles/components/Modal.module.css';

const Modal = ({ children, handleCloseModal }) => {
  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      {children}
    </div>
  )
}

export default Modal;
