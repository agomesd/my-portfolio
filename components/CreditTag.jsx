import styles from '../styles/components/CreditTag.module.css';

const CreditTag = ({ data }) => {
  const { name, person_url, unsplash_url } = data;
  return (
    <div className={styles.container}>
      <p>Background Image by {" "}
        <a href={person_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a> on {" "}
        <a href={unsplash_url} target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </p>
    </div>
  )
}

export default CreditTag;
