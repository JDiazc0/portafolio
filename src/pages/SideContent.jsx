import React from "react";
import icon from "../utils/scripts/icons";
import "../utils/styles/sideContent.css";

export default function SideContent() {
  return (
    <>
      <div className="side-content">
        <img src={icon.profilePhoto} alt="ProfilePhoto" />
        <h1 className="side-title">
          Hello, I'm <strong>Jhoan Diaz</strong>
          <br /> Fullstack developer
        </h1>
        <p>
          A passionate Full-Stack Developer with a keen interest in UX/UI
          design. With a strong foundation in both front-end and back-end
          technologies, I bring a holistic approach to development, ensuring
          that every project I work on is not only functional but also
          aesthetically pleasing.
        </p>
        <div className="btn-side-container">
          <button className="btn-side">Download CV</button>
          <button className="btn-side">GitHub</button>
        </div>
      </div>
    </>
  );
}
