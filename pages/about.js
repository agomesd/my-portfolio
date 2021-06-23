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
              Bacon ipsum dolor amet short ribs shankle landjaeger tenderloin
              chislic meatball. Corned beef bresaola meatball jowl pig porchetta
              pastrami short loin. Kielbasa pastrami frankfurter tri-tip short
              loin strip steak ham hock boudin venison, spare ribs tongue cupim
              landjaeger tail. Chuck bacon ground round shankle boudin beef
              short ribs. Shank beef ribs hamburger ground round short ribs,
              pancetta ball tip capicola frankfurter alcatra burgdoggen venison
              doner. Tri-tip chicken meatloaf shankle hamburger corned beef
              leberkas jerky. Tongue pork belly ribeye doner pig turkey
              frankfurter bacon jerky ham hock jowl tenderloin burgdoggen
              pancetta kevin.
            </p>
          </ContentCard>
          <div className={styles.flexbox}>
            <ContentCard isImage>
              <Avatar
                image={picture}
                alt={"Picture of Alex Gomes"}
                variant={"rounded"}
              />
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
                </ul>
              </ContentCard>
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
                am yet to work as part of a team and have no experience working
                on any colaborative projects.
              </p>
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
