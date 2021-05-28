import React from "react";
import "./style.css";

const Label = ({ control, binding, text, input }) => (
    <label className="label">
        <span className="labelInnerText">
            {control}<label for={binding}>{text}:</label>
        </span>
        {input}
    </label>
);

export default Label;