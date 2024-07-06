import React from "react";
import "../utils/styles/section.css";

export default function Section(props) {
  const { title, children } = props;

  return (
    <>
      <section className={`section-info`}>
        <h3 className="title-section">{title}</h3>
        <hr />
        <div className="content-section">{children}</div>
      </section>
    </>
  );
}
