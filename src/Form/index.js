import React from "react";
import "./style.css";

const Form = ({ children }) => (
    <form className="form">
        {children}
    </form>
);

export default Form;