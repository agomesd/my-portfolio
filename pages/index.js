import Link from "next/link";
import Head from "next/head";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Head>
          <title>Alex Gomes</title>
          <meta
            name="description"
            content="Alex Gomes personal portfolio website"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1
          className={styles.header}
          style={{
            left: "60px",
          }}
        >
          Web Developer.
        </h1>
        <h2 className={styles.header}>
          I'm Alex, a full-stack web developer from Montreal Canada currently
          living in Portugal. This is a website showcasing my portfolio. If you
          like what you see and would like to work with me, please{" "}
          <span style={{ color: "#f04854" }}>
            <Link href="contact">
              <a>Get in Touch!</a>
            </Link>
          </span>
        </h2>
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;
