import Link from "next/link";
import Head from "next/head";
import ContentCard from "../components/ContentCard";
import Avatar from "../components/Avatar";
import picture from "../public/images/my-portrait-patrick-williams.jpg";
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
              I've been learning to code for the past year with the use of
              online courses and tutorials. You can find some of my personal and
              freelance projects in the{" "}
              <span>
                <Link href="/portfolio">
                  <a style={{ color: "#f04854" }}>Portfolio</a>
                </Link>
              </span>{" "}
              section of this website. I'm a quick learner and a team player
              with an open mind to new ideas. I'm looking to join a team that
              fosters growth and creativity. If I seem to have what you are
              looking for, please{" "}
              <span>
                <Link href="/contact">
                  <a style={{ color: "#f04854" }}>Get In Touch</a>
                </Link>
              </span>
              . I hope to hear from you soon!
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
            <ContentCard title={"Skills and Technologies"} mgtop={"2rem"}>
              <ul className={styles.list}>
                <li>HTML</li>
                <li>
                  CSS{" "}
                  <ul style={{ listStyle: "outside" }}>
                    <li>BEM</li>
                    <li>CSS Modules</li>
                    <li>Material-UI</li>
                    <li>Styled Components</li>
                  </ul>
                </li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>RESTful API</li>
                <li>Git</li>
                <li>Netlify</li>
              </ul>
            </ContentCard>
            <ContentCard title={"Languages"} mgtop={"2rem"}>
              <ul>
                <li>English - C2 Fluent Bilingual</li>
                <li>French - C2 Fluent Bilingual</li>
                <li>Portuguese - B1 Intermediate</li>
              </ul>
            </ContentCard>
          </div>
          <div className={styles.flexbox}>
            <ContentCard title={"Education"}>
              <p>
                In 2016, I graduated from Concordia University in Montreal with
                a bachelor's degree in Commerce, majoring in Finance. Before
                University, I completed a two year vocational program in
                Automotive Mechanics.
              </p>
            </ContentCard>
            <ContentCard title={"Experience"} mgtop={"2rem"}>
              <p>
                Most of my experience in programming comes from personal
                projects, course projects, tutorials and freelance projects. I
                would like to be part of a team in a dynamic environment.
              </p>
              <h3>Courses</h3>
              <ul>
                <li>Colt Steele - Web Developer Bootcamp</li>
                <li>Maximillian Schwarzmuller - React Course</li>
                <li>Mosh Hamedani - Several</li>
                <li>Harvard Online - CS50 (currently)</li>
              </ul>
            </ContentCard>
            <ContentCard isImage mgtop={"2rem"}>
              <Avatar
                image={skiPicture}
                alt={"Picture of Alex Skiing"}
                variant={"rounded"}
              />
            </ContentCard>
            <ContentCard title={"Hobbies"} mgtop={"2rem"}>
              <p>
                Skiing, Ice Hockey, Football, Cooking, Travelling, Reading,
                Coding
              </p>
            </ContentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
