import React from "react";
import "./style.css";

const Form = ({ legend, fields, buttons }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">{legend}</legend>
            <div className="form__fieldsContainer">
                {fields}
            </div>
            <div className="form__buttonsContainer">
                {buttons}
            </div>
        </fieldset>
    </form>
);

export default Form;