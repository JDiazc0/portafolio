import React from "react";
import Section from "../components/Section";
import icon from "../utils/scripts/icons";
import "../utils/styles/mainContent.css";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <Section
          title={"About Me"}
          children={
            <>
              <p className="aboutMe-content">
                A passionate <strong>Full-Stack Developer</strong> with a keen
                interest in <strong>UX/UI</strong>
                design. With a strong foundation in both{" "}
                <strong>front-end</strong> and <strong>back-end</strong>{" "}
                technologies, I bring a holistic approach to development,
                ensuring that every project I work on is not only functional but
                also aesthetically pleasing. <br />
                Throughout my career, I've honed my skills in JavaScript, React,
                Node.js, and various other modern web technologies. My UX/UI
                design expertise allows me to create interfaces that are
                intuitive and engaging, enhancing the overall user journey. I'm
                always eager to learn new things and take on challenging
                projects that push the boundaries of what's possible in web
                development.
              </p>
            </>
          }
        />
        <Section
          title="About My Skills"
          children={
            <>
              <div className="section-skills">
                <div className="main-skill">
                  <h3>Main Skill</h3>
                  <img src={icon.htmlLogo} alt="HTML5" title="HTML5" />
                  <img src={icon.cssLogo} alt="CSS3" title="CSS3" />
                  <img src={icon.jsLogo} alt="JavaScript" title="JavaScript" />
                  <img src={icon.vueLogo} alt="Vue.js" title="Vue.js" />
                  <img src={icon.reactLogo} alt="React" title="React" />
                  <img src={icon.nodeLogo} alt="Node.js" title="Node.js" />
                  <img
                    src={icon.firebaseLogo}
                    alt="Firebase"
                    title="Firebase"
                  />
                  <img src={icon.mongoLogo} alt="MongoDB" title="MongoDB" />
                  <img src={icon.mysqlLogo} alt="MySQL" title="MySQL" />
                  <img src={icon.figmaLogo} alt="Figma" title="Figma" />
                  <img
                    src={icon.materialLogo}
                    alt="Material-UI"
                    title="Material-UI"
                  />
                </div>
              </div>
              <div className="additional-skill">
                <h3>Additional Skill</h3>
                <img src={icon.angularLogo} alt="Angular" title="Angular" />
                <img
                  src={icon.androidLogo}
                  alt="Android Studio"
                  title="Android Studio"
                />
                <img src={icon.flutterLogo} alt="Flutter" title="Flutter" />
                <img src={icon.tsLogo} alt="TypeScript" title="TypeScript" />
                <img src={icon.trelloLogo} alt="Trello" title="Trello" />
                <img src={icon.notionLogo} alt="Notion" title="Notion" />
                <img src={icon.dockerLogo} alt="Docker" title="Docker" />
                <img src={icon.postmanLogo} alt="Postman" title="Postman" />
              </div>
            </>
          }
        />
        <Section
          title="Projects"
          children={
            <>
              <div className="section-projects">
                <div className="project">
                  <div className="project-link">
                    <img src={icon.mineSweeperScreen} alt="" />
                    <a href="https://minesweeper-jdiazc0.netlify.app/">
                      MineSweeper
                    </a>
                  </div>
                  <div className="project-technology">
                    <img src={icon.reactLogo} alt="" />
                    <img src={icon.cssLogo} alt="" />
                    <img src={icon.jsLogo} alt="" />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
