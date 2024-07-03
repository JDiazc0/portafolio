import React from "react";
import Section from "../components/Section";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <Section
          title={"About Me"}
          children={
            <>
              <p>
                A passionate <strong>Full-Stack Developer</strong> with a keen
                interest in <strong>UX/UI</strong>
                design. With a strong foundation in both{" "}
                <strong>front-end</strong> and <strong>back-end</strong>{" "}
                technologies, I bring a holistic approach to development,
                ensuring that every project I work on is not only functional but
                also aesthetically pleasing. Throughout my career, I've honed my
                skills in JavaScript, React, Node.js, and various other modern
                web technologies. My UX/UI design expertise allows me to create
                interfaces that are intuitive and engaging, enhancing the
                overall user journey. I'm always eager to learn new things and
                take on challenging projects that push the boundaries of what's
                possible in web development. Let's create something amazing
                together!
              </p>
            </>
          }
        />
        <Section
          title="About my Skill"
          children={
            <>
              <div className="icons-skills">
                <img src="../utils/img/" alt="" />
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
