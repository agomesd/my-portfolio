import { useState } from 'react';
import Head from "next/head";
import { supabase } from "../utils/supabase";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";
import Modal from '../components/Modal';
import styles from "../styles/pages/Portfolio.module.css";

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
    <div className={styles.portfolio}>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <AddProjectForm handleCloseModal={handleCloseModal}/>
        </Modal>
      )}
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Alex Gomes projects portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>Portfolio.</h1>
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageUrl={project.image_url}
              url={project.url}
              repoUrl={project.repo_url}
              description={project.description}
              completed={project.completed}
            />
          ))}
          {user && (
            <button className={styles.addButton} onClick={handleOpenModal}>Add Project +</button>
          )}
        </div>
      </div>
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
