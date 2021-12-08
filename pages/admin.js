import AuthForm from '../components/AuthForm';
import styles from "../styles/pages/Admin.module.css"

const Admin = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  )
}

export default Admin;
