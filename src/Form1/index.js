import React, { useState } from "react";
import "./style.css";

const Form1 = ({ legend }) => {
    const [diameter, setDiameter] = useState("");
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setCuttingSpeed((Math.PI * diameter * rotationSpeed / 1000).toFixed(2));
    };

    const onFormReset = (event) => {
        setDiameter();
        setRotationSpeed();
        setCuttingSpeed();
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">{legend}</legend>
                <div className="form__fieldsContainer">
                    <label className="field">
                        <span className="fieldInnerText">
                            <label>D [mm]:</label>
                        </span>
                        <input
                            value={diameter}
                            className="field__input"
                            type="number"
                            min="0.0001"
                            step="0.0001"
                            placeholder=" średnica narzędzia "
                            required
                            autofocus
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </label>
                    <label className="field">
                        <span className="fieldInnerText">
                            <label>n [obr/min]:</label>
                        </span>
                        <input
                            value={rotationSpeed}
                            className="field__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" obroty wrzeciona "
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </label>
                    <label className="field">
                        <span className="fieldInnerText">
                            <label>Vc [m/min]:</label>
                        </span>
                        <input
                            value={cuttingSpeed}
                            readonly
                            placeholder=" wynik "
                            className="field__input"
                        />
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
    )
};

export default Form1;