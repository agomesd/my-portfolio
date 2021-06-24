import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/pages/Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Alex Gomes projects portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>Portfolio.</h1>
        <div className={styles.grid}>
          <ProjectCard
            title={"Savoie Preservation Solutions"}
            url={"http://savoieps.com/"}
            description={
              "A static website built as a freelance project using React and EmailJS services hosted on Easily."
            }
          />
          <ProjectCard
            title={"SoopaShop"}
            url={"https://gwd-ecommerce-next.netlify.app/"}
            repo_url={"https://github.com/agomesd/jamstack-ecom"}
            description={
              "An e-commerce webapp built with Next.js and Stripe, hosted on netlify styled with Styled Components. Project built from Jon Meyer's tutorial."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
