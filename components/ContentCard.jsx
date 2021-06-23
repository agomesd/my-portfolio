import styles from "../styles/components/ContentCard.module.css";

const ContentCard = ({
  children,
  title,
  isImage,
  gcs,
  gce,
  grs,
  gre,
  mgtop,
}) => {
  return (
    <div
      className={isImage ? styles.image : styles.container}
      style={{
        gridColumnStart: gcs,
        gridColumnEnd: gce,
        gridRowStart: grs,
        gridRowEnd: gre,
        marginTop: mgtop,
      }}
    >
      {title && <h1 className={styles.header}>{title}</h1>}
      {children}
    </div>
  );
};

export default ContentCard;
