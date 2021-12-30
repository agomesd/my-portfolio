import styles from '../styles/components/Tag.module.css';

const Tag = ({ data }) => {
  return (
    <div className={styles.tag}>
      <p>{data}</p>
    </div>
  )
}

export default Tag;
