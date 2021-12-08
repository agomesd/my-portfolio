import { useState } from 'react';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/router';
import styles from '../styles/components/AuthForm.module.css';

const AuthForm = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('')
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: username,
      password: password
    });

    if (user) {
      router.push("/");
    }

    if (error) {
      setError(error.message)
    }
  }

  return (
    <form className={styles.container}>
      <h1>Admin Authentication</h1>
      <label className={styles.label} forHtml="username">
        Username
      </label>
      <input
        className={styles.input}
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={styles.label} forHtml="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    {error && (
      <p style={{ color: '#f04854' }}>{error}</p>
    )}
    <button className={styles.button} onClick={handleSubmit}>Loggin</button>
    </form>
  )
}

export default AuthForm
