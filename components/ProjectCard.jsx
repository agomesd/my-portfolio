import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import Image from 'next/image'
import Tag from './Tag';
import styles from "../styles/components/ProjectCard.module.css";
import { about } from '../utils/about';

const ProjectCard = ({ data }) => {
  const { title, image_url, url, description, repo_url, completed, stack } = data;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.image}>
        <Image src={image_url} alt={`${title} website`} width={760} height={356}/>
      </div>
      <ul className={styles.tags}>
        {stack.length > 0 && stack.map(s => (
          <Tag key={s} data={s}/>
        ))}
      </ul>
      <a href={url} target="_blank" rel="noreferrer noopener">
        Go to site <LaunchIcon style={{ marginLeft: "1rem" }} />
      </a>
      {repo_url && (
        <a href={repo_url} target="_blank" rel="noreferrer noopener">
          Go to Repository <GitHubIcon style={{ marginLeft: "1rem" }} />
        </a>
      )}
      {completed ? (
        <p className={styles.status} style={{ color: "#60FF87" }}>
          Completed
        </p>
      ) : (
        <p className={styles.status} style={{ color: "#f04854" }}>
          Work in Progress
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
