import React, { useRef } from "react";
import Section from "../components/Section";
import icon from "../utils/scripts/icons";
import "../utils/styles/mainContent.css";
import emailjs from "@emailjs/browser";

export default function MainContent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_PORTFOLIO_SERVICE,
        process.env.REACT_APP_PORTFOLIO_TEMPLATE,
        form.current,
        process.env.REACT_APP_PORTFOLIO_USER
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const sections = [
    {
      title: "About Me",
      code: (
        <p className="aboutMe-content">
          A passionate <strong>Full-Stack Developer</strong> with a keen
          interest in <strong>UX/UI </strong> design. With a strong foundation
          in both <strong>front-end</strong> and <strong>back-end </strong>
          technologies. <br />
          Throughout my career, I've honed my skills in JavaScript, React,
          Node.js, and various other modern web technologies. I'm always eager
          to learn new things and take on challenging projects that push the
          boundaries of what's possible in web development. <br />
          In my free time, I immerse myself in the constant search for
          knowledge, enjoy cycling and find peace in the contemplation of
          sunsets in the company of my loyal pet. I firmly believe that this
          personal harmony is essential to tackle projects in an efficient and
          orderly manner.
        </p>
      ),
    },
    {
      title: "About My Skill",
      code: (
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
              <img src={icon.firebaseLogo} alt="Firebase" title="Firebase" />
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
      ),
    },
    {
      title: "Projects",
      code: (
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
      ),
    },
    {
      title: "Contact Me",
      code: (
        <>
          <div className="section-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                <input type="text" name="name" required />
                <label className="name-form">Name</label>
              </div>
              <div className="email">
                <input type="text" name="email" required />
                <label htmlFor="" className="email-form">
                  E-mail
                </label>
              </div>
              <div className="message">
                <textarea
                  className="message-textarea"
                  name="message"
                  required></textarea>
                <label className="message-form">Message</label>
              </div>
              <div className="buttons-form">
                <button type="submit" className="btn btn-submit">
                  Contact
                </button>
              </div>
            </form>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="main-content">
      {sections.map((section, index) => (
        <Section key={index} title={section.title} children={section.code} />
      ))}
    </div>
  );
}
