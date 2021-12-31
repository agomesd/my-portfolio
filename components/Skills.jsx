import Image from "next/image"
import styles from '../styles/components/Skills.module.css';

const Skills = ({ data }) => {
  const { image, title, id, url } = data;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image.src} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </a>
  )
}

export default Skills;
