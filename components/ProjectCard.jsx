import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "../styles/components/ProjectCard.module.css";

const ProjectCard = ({ title, url, description, repo_url }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.iframe}>
        <iframe src={url} title={title} />
      </div>
      <p className={styles.content}>{description}</p>
      <a href={url} target="_blank" rel="noreferrer noopener">
        Go to site <LaunchIcon style={{ marginLeft: "1rem" }} />
      </a>
      <a href={repo_url} target="_blank" rel="noreferrer noopener">
        Go to Repository <GitHubIcon style={{ marginLeft: "1rem" }} />
      </a>
    </div>
  );
};

export default ProjectCard;
