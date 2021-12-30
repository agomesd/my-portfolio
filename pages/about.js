import Link from "next/link";
import Head from "next/head";
import ContentCard from "../components/ContentCard";
import Avatar from "../components/Avatar";
import Skills from '../components/Skills';
import Tag from '../components/Tag';
import picture from "../public/images/picture.jpg";
import skiPicture from "../public/images/alex-gomes-ski.jpg";
import styles from "../styles/pages/About.module.css";
import common from "../styles/pages/Common.module.css";
import { about } from '../utils/about';

const About = () => {
  return (
    <div className={styles.background}>
      <Head>
        <title>About | Alex Gomes</title>
        <meta name="description" content="About me / my CV containing information about my education, experience, skills and hobbies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={common.container}>
        <h1 className={common.header}>About.</h1>
        <div className={styles.grid}>
          <ContentCard gcs={"1"} gce={"3"}>
            <p>
              I'm a self taught web-develop with a focus on creating single page applications with the use of modern Javascript frameworks and libraries. You can find some of my personal and
              freelance projects in the{" "}
              <span>
                <Link href="/portfolio">
                  <a style={{ color: "#f04854" }}>Portfolio</a>
                </Link>
              </span>{" "}
              section of this website. I love learning and working with people to solve complexe problems.
            </p>
          </ContentCard>
          <div className={styles.flexbox}>
            <ContentCard isImage>
              <Avatar
                image={picture}
                alt={"Picture of Alex Gomes"}
                variant={"rounded"}
              />
            </ContentCard>
            <a
              href="https://my.indeed.com/p/alexandreg-0orcb4n/pdf"
              download="alex-gomes-cv"
            >
              <button className={styles.button}>
                  Download CV
              </button>
            </a>
            <ContentCard title={"Skills and Technologies"} pr={0}>
              <ul className={styles.list}>
                {about.skills.length > 0 && about.skills.map(skill => (
                  <Skills data={skill}/>
                ))}
              </ul>
            </ContentCard>
            <ContentCard title={"Languages"}>
              <ul>
                <li>English - C2 Fluent Bilingual</li>
                <li>French - C2 Fluent Bilingual</li>
                <li>Portuguese - B1 Intermediate</li>
              </ul>
            </ContentCard>
          </div>
          <div className={styles.flexbox}>
            <ContentCard title={"Education"}>
              <h2>Concordia Univeristy</h2>
              <p>Montreal, Canada</p>
              <p>Bachelor's of Commerce - Finance</p>
              <p>Graduated 2016</p>
            </ContentCard>
            <ContentCard title={"Experience"}>
              <h2>Working</h2>
              <h3>Front-end Developer</h3>
              <h3>Orcawise</h3>
              <p>October 2021 - current</p>
            </ContentCard>
            <ContentCard isImage>
              <Avatar
                image={skiPicture}
                alt={"Picture of Alex Skiing"}
                variant={"rounded"}
              />
            </ContentCard>
            <ContentCard title={"Hobbies"}>
              <ul className={styles.tags}>
                {about.hobbies.length > 0 && about.hobbies.map(hobby => (
                  <Tag data={hobby}/>
                ))}
              </ul>
            </ContentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
