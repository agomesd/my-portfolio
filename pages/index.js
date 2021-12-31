import Link from "next/link";
import Head from "next/head";
import Banner from "../components/Banner";
import CreditTag from "../components/CreditTag"
import styles from "../styles/Home.module.css";
import common from "../styles/pages/Common.module.css";
import { credits } from '../utils/image-credits';

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={common.container}>
        <Head>
          <title>Alex Gomes</title>
          <meta
            name="description"
            content="My personal website showcasing my portfolio, certificates and my CV as a Web Developer."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1
          className={styles.header}
          style={{
            left: "60px",
          }}
        >
          Front-End Web Developer.
        </h1>
        <h2 className={styles.header}>
          I'm Alex, a web developer from Montreal Canada currently
          living and working in the UK. This is a website showcasing my work. If you
          like what you see and would like to work with me, please{" "}
          <span>
            <Link href="contact">
              <a>Get in Touch!</a>
            </Link>
          </span>
        </h2>
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
      <CreditTag data={credits[1]}/>
    </div>
  );
};

export default Home;
