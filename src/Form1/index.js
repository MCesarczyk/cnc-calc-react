import React from "react";
import "./style.css";

const Form1 = ({ legend }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">{legend}</legend>
            <div className="form__fieldsContainer">
                <label className="field">
                    <span className="fieldInnerText">
                        <label>D [mm]:</label>
                    </span>
                    <input type="number" min="0.0001" step="0.0001"
                        placeholder=" średnica narzędzia " required autofocus className="field__input" />
                </label>
                <label className="field">
                    <span className="fieldInnerText">
                        <label>n [obr/min]:</label>
                    </span>
                    <input type="number" min="1" step="1"
                        placeholder=" obroty wrzeciona " required className="field__input" />
                </label>
                <label className="field">
                    <span className="fieldInnerText">
                        <label>Vc [m/min]:</label>
                    </span>
                    <input readonly placeholder=" wynik " className="field__input" />
                </label>
            </div>
            <div className="form__buttonsContainer">
                <button className="form__button" type="submit">
                    Oblicz
                </button>
                <button className="form__button" type="reset">
                    Reset
                </button>
            </div>
        </fieldset>
    </form>
);

export default Form1;