import React, { useCallback, useRef, useState } from "react";
import Section from "../components/Section";
import icon from "../utils/scripts/icons";
import emailjs from "@emailjs/browser";
import ToastNotification from "../components/ToastNotification";
import "../utils/styles/mainContent.css";

export default function MainContent() {
  const form = useRef();
  const [notifications, setNotifications] = useState([]);

  const createNotification = (message = "Notification", type = "info") => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const clearForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

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
          createNotification("Message Sended!", "success");
          clearForm();
        },
        (error) => {
          createNotification("Something was happend! :(", "error");
        }
      );
  };

  const sections = [
    {
      title: "About Me",
      code: (
        <p className="aboutMe-content">
          As a <strong>full-stack</strong> developer, I am passionate about
          finding innovative solutions, especially in the{" "}
          <strong>backend</strong> and in the field of{" "}
          <strong>machine learning</strong>. Although I work on both{" "}
          <strong>front-end</strong>
          and <strong>back-end</strong>, what really drives me is the ability to
          create intelligent models and optimise systems.
        </p>
      ),
    },
    {
      title: "About My Skill",
      code: (
        <>
          <div className="section-skills">
            <div className="backend-skill">
              <h3>Back-end Skills</h3>
              <img src={icon.laravelLogo} alt="Laravel" title="Laravel" />
              <img src={icon.phpLogo} alt="PHP" title="PHP" />
              <img src={icon.nodeLogo} alt="Node.Js" title="Node.Js" />
              <img src={icon.csharpLogo} alt="CSharp" title="CSharp" />
              <img src={icon.mongoLogo} alt="MongoDB" title="MongoDB" />
              <img src={icon.mysqlLogo} alt="MySQL" title="MySQL" />
              <img src={icon.postmanLogo} alt="Postman" title="Postman" />
              <img src={icon.insomniaLogo} alt="Insomnia" title="Insomnia" />
            </div>
          </div>
          <div className="frontend-skill">
            <h3>Front-end Skills</h3>
            <img src={icon.reactLogo} alt="React" title="React" />
            <img src={icon.angularLogo} alt="Angular" title="Angular" />
            <img src={icon.jsLogo} alt="JavaScript" title="JavaScript" />
            <img src={icon.tsLogo} alt="TypeScript" title="TypeScript" />
            <img src={icon.figmaLogo} alt="Figma" title="Figma" />
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
              <a href="https://minesweeper-jdiazc0.netlify.app/">
                <div className="project-link">
                  <img src={icon.mineSweeperScreen} alt="" />
                  <p>MineSweeper</p>
                </div>
              </a>
              <div className="project-technology">
                <img src={icon.reactLogo} alt="" />
                <img src={icon.cssLogo} alt="" />
                <img src={icon.jsLogo} alt="" />
                <a href="https://github.com/JDiazc0/mine_sweeper">
                  <img src={icon.githubLogo} alt="" />
                </a>
              </div>
            </div>
            <hr className="dashed" />
            <div className="project">
              <a href="https://landing-page-jdiazc0.netlify.app">
                <div className="project-link">
                  <img src={icon.landingPageScreen} alt="" />
                  <p>Landing page</p>
                </div>
              </a>
              <div className="project-technology">
                <img src={icon.reactLogo} alt="" />
                <img src={icon.tailwindLogo} alt="" />
                <img src={icon.tsLogo} alt="" />
                <a href="https://github.com/JDiazc0/landingpage_mrdogkat">
                  <img src={icon.githubLogo} alt="" />
                </a>
              </div>
            </div>
            <hr className="dashed" />
            <div className="project">
              <a href="https://github.com/JDiazc0/virtual-market-backend/blob/main/README.md">
                <div className="project-link">
                  <img src={icon.virtualMarketScreen} alt="" />
                  <p>Virtual Market (Backend)</p>
                </div>
              </a>
              <div className="project-technology">
                <img src={icon.laravelLogo} alt="" />
                <img src={icon.phpLogo} alt="" />
                <img src={icon.mysqlLogo} alt="" />
                <a href="https://github.com/JDiazc0/virtual-market-backend">
                  <img src={icon.githubLogo} alt="" />
                </a>
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
    <>
      <div className="main-content">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} children={section.code} />
        ))}
      </div>
      <ToastNotification
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </>
  );
}
