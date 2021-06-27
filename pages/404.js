import Head from 'next/head'
import styles from "../styles/pages/404.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.pagenotfound}>
      <div className={styles.container}>
      <Head>
          <title>404|Page Not Found</title>
          <meta
            name="description"
            content="Page not found."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.header}><span style={{ color: '#fff' }}>404</span> | Page Not Found.</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
