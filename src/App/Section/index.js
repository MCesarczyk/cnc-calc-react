import React from "react";
import "./style.css";

const Section = ({ title, body }) => (
    <section>
    <h2 className="section__header">{title}</h2>
    {body}
    </section>
);

export default Section;