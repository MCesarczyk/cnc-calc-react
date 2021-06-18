import React, { useState } from "react";
import Buttons from "../Buttons";
import "../style.css";

const Form1 = ({ legend }) => {
    const [diameter, setDiameter] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");
    const [rotationSpeed, setRotationSpeed] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setRotationSpeed((cuttingSpeed * 1000 / Math.PI / diameter).toFixed(2));
    };

    const onFormReset = (event) => {
        setDiameter("");
        setCuttingSpeed("");
        setRotationSpeed("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">{legend}</legend>
                <div className="form__fieldsContainer">
                    <label className="form__label">
                        <span className="form__innerText">
                            <label>D [mm]:</label>
                        </span>
                        <input
                            value={diameter}
                            className="form__input"
                            type="number"
                            min="0.0001"
                            step="0.0001"
                            placeholder=" średnica narzędzia "
                            required
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className="form__innerText">
                            <label>Vc [m/min]:</label>
                        </span>
                        <input
                            value={cuttingSpeed}
                            className="form__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" prędkość liniowa "
                            required
                            onChange={({ target }) => setCuttingSpeed(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className="form__innerText">
                            <label>n_obr. [obr/min]:</label>
                        </span>
                        <input
                            value={rotationSpeed}
                            readOnly
                            placeholder=" wynik "
                            className="form__input"
                        />
                    </label>
                </div>
               <Buttons />
            </fieldset>
        </form>
    )
};

export default Form1;