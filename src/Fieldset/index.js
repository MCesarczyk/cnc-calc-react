import React from "react";
import "./style.css";

const Fieldset = ({ children }) => (
    <fieldset className="form__fieldset">
        {children}
    </fieldset>
);

export default Fieldset;