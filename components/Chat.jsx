import { useState } from 'react';
import { supabase } from '../utils/supabase';
import AuthForm from './AuthForm';
import Image from 'next/image';
import Portrait from '../public/images/picture.jpg'
import styles from '../styles/components/Chat.module.css';
import common from "../styles/pages/Common.module.css";


const Chat = ({ closeChatBox, openChatBox, showChatBox }) => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');

  const currentUser = supabase.auth.user();

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn({
      email: email,
    })

    console.log(user);
    console.log(error);
  }

  return (
    <div className={styles.container}>
      {showChatBox ? (
        <div className={styles.chatContainer}>
          <div className={styles.header}>
            <h2>Chat with me!</h2>
            <button className={styles.closeButton} onClick={closeChatBox}>X</button>
          </div>
          <p style={{ textAlign: 'center', color: '#f04854' }}>Work In Progress!</p>
          {/*<div className={styles.body}>
            {currentUser ? (
              <form>
                <textarea placeholder="write message"/>
                <button className={styles.button}>Send</button>
              </form>
            ) : (
              <form className={styles.form}>
                <label forHtml="name">name</label>
                <input type='text' name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                <label forHtml="email">email</label>
                <input type='email' name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                <button className={styles.button} onClick={handleSubmitAuth}>Start Chatting.</button>
              </form>
            )}
          </div> */}
        </div>
      ) : (
        <div className={styles.image} onClick={openChatBox}>
          <Image src={Portrait} alt="Chat portrait of Alex Gomes" className={styles.image} objectFit="cover" layout='fill'/>
        </div>
      )}
    </div>
  )
}

export default Chat;
