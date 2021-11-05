import Link from "next/link";
import Head from "next/head";
import ContentCard from "../components/ContentCard";
import Avatar from "../components/Avatar";
import picture from "../public/images/picture.jpg";
import skiPicture from "../public/images/alex-gomes-ski.jpg";
import styles from "../styles/pages/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Head>
        <title>About</title>
        <meta name="description" content="About Alex Gomes Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>About.</h1>
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
            <button className={styles.button}>
              <a
                href="https://my.indeed.com/p/alexandreg-0orcb4n/pdf"
                download="alex-gomes-cv"
              >
                Download CV
              </a>
            </button>
            <ContentCard title={"Skills and Technologies"}>
              <ul className={styles.list}>
                <li>HTML 5</li>
                <li>
                  CSS 3{" "}
                  <ul style={{ listStyle: "outside" }}>
                    <li>BEM</li>
                    <li>CSS Modules</li>
                    <li>Material-UI</li>
                    <li>Styled Components</li>
                    <li>SASS</li>
                  </ul>
                </li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>RESTful API</li>
                <li>Git</li>
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
              <p>
                Skiing, Ice Hockey, Football, Cooking, Travelling, Reading,
                Coding, Surfing
              </p>
            </ContentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
