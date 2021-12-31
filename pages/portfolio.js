import { useState } from 'react';
import Head from "next/head";
import { supabase } from "../utils/supabase";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";
import CreditTag from "../components/CreditTag";
import Modal from '../components/Modal';
import styles from "../styles/pages/Portfolio.module.css";
import common from "../styles/pages/Common.module.css";
import { credits } from "../utils/image-credits";

const Portfolio = ({ projects }) => {
  const [ showModal, setShowModal ] = useState(false);
  const user = supabase.auth.user();

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  }

  return (
    <div className={styles.background}>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <AddProjectForm handleCloseModal={handleCloseModal}/>
        </Modal>
      )}
      <Head>
        <title>Portfolio | Alex Gomes</title>
        <meta name="description" content="My portfolio showcasing some personal and professional projects I have worked on in the past." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={common.container}>
        <h1 className={common.header}>Portfolio.</h1>
        <div className={styles.grid}>
          {projects && projects.map(project => (
            <ProjectCard
              key={project.id}
              data={project}
            />
          ))}
          {user && (
            <button className={styles.addButton} onClick={handleOpenModal}>Add Project +</button>
          )}
        </div>
      </div>
      <CreditTag data={credits[3]}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data, error } = await supabase.from('projects').select();
  const projects = data;
  return {
    props: {
      projects,
    }
  }
}

export default Portfolio;
