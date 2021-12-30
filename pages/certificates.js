import Head from 'next/head';
import { supabase } from "../utils/supabase";
import CertificateCard from '../components/CertificateCard';
import styles from '../styles/pages/Certificates.module.css';
import common from '../styles/pages/Common.module.css';

const Certificates = ({ data }) => {
  return (
    <div className={styles.background}>
      <Head>
        <title>Certificates | Alex Gomes</title>
        <meta name="description" content="Certificates and diplomas aquired through the years." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={common.container}>
        <h1 className={common.header} style={{ color: '#f04854' }}>Certificates.</h1>
        {data.length > 0 && data.map(d => (
          <CertificateCard data={d}/>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await supabase.from('certificates').select();
  return {
    props: {
      data,
    }
  }
}

export default Certificates;
