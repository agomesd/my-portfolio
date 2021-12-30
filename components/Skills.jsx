import styles from '../styles/components/Skills.module.css';

const Skills = ({ data }) => {
  const { image, title, id, url } = data;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <div key={id} className={styles.image}>
          <img src={image.src} alt={title}/>
        </div>
        <p>{title}</p>
      </div>
    </a>
  )
}

export default Skills;
