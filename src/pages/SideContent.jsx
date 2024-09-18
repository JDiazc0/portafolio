import React from "react";
import icon from "../utils/scripts/icons";
import "../utils/styles/sideContent.css";
import cv_Jhoan_Diaz from "../utils/doc/cv_Jhoan_Diaz.pdf";

export default function SideContent() {
  return (
    <>
      <div className="side-content">
        <img src={icon.profilePhoto} alt="ProfilePhoto" />
        <h1 className="side-title">
          Hello, I'm <strong>Jhoan Diaz</strong>
          <br /> Fullstack developer
        </h1>
        <p>I'm not a machine learning, but I love machine learning.</p>
        <div className="btn-side-container">
          <a href={cv_Jhoan_Diaz} download="cv_Jhoan_Diaz.pdf">
            <button className="btn-side">Download CV</button>
          </a>
          <a
            href="https://github.com/jdiazc0"
            target="_blank"
            rel="noopener noreferrer">
            <button className="btn-side">GitHub</button>
          </a>
        </div>
      </div>
    </>
  );
}
