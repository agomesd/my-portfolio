import AuthForm from '../components/AuthForm';
import common from "../styles/pages/Common.module.css";

const Admin = () => {
  return (
    <div className={common.container}>
      <AuthForm />
    </div>
  )
}

export default Admin;
