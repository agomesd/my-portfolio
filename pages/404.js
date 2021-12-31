import Head from 'next/head'
import CreditTag from '../components/CreditTag';
import styles from "../styles/pages/404.module.css";
import common from "../styles/pages/Common.module.css";
import { credits } from '../utils/image-credits';

const PageNotFound = () => {
  return (
    <div className={styles.background}>
      <div className={common.container}>
      <Head>
          <title>404 - Not Found | Alex Gomes</title>
          <meta
            name="description"
            content="Page not found."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={common.header}><span style={{ color: '#fff' }}>404</span> | Page Not Found.</h1>
      </div>
      <CreditTag data={credits[6]} />
    </div>
  );
};

export default PageNotFound;
