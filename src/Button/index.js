import React from "react";
import "./style.css";

const Button = ({ name, type }) => (
    <button className="button" type={type}>
        {name}
    </button>
);

export default Button;