import styles from "../styles/components/ContentCard.module.css";

const ContentCard = ({
  children,
  title,
  isImage,
  gcs,
  gce,
  grs,
  gre,
  mg,
  mgtop,
  pr
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
        margin: mg,
        paddingRight: pr
      }}
    >
      {title && <h1 className={styles.header}>{title}</h1>}
      {children}
    </div>
  );
};

export default ContentCard;
