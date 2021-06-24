import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Head>
          <title>Alex Gomes</title>
          <meta name="description" content="Alex Gomes personal portfolio website" />
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
          living in Portugal.{" "}
        </h2>
      </div>
    </div>
  );
};

export default Home;
