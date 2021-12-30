import { useState } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import Chat from '../components/Chat';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [ showChatBox, setShowChatBox ] = useState(false);

  const handleShowChatBox = () => {
      setShowChatBox(true);
  }

  const handleHideChatBox = () => {
    setShowChatBox(false);
  }

  return (
    <CloudinaryContext cloudName="agomesd" secure="true">
      <Navbar />
        <Component {...pageProps} />
        <Chat
          closeChatBox={handleHideChatBox}
          showChatBox={showChatBox}
          openChatBox={handleShowChatBox}
        />
      <Footer />
    </CloudinaryContext>
  );
}

export default MyApp;
