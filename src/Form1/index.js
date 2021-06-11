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

    const onFormReset = () => {
        setDiameter("");
        setRotationSpeed("");
        setCuttingSpeed("");
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
                            autoFocus
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className="form__innerText">
                            <label>n [obr/min]:</label>
                        </span>
                        <input
                            value={rotationSpeed}
                            className="form__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" obroty wrzeciona "
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className="form__innerText">
                            <label>Vc [m/min]:</label>
                        </span>
                        <input
                            value={cuttingSpeed}
                            readOnly
                            placeholder=" wynik "
                            className="form__input"
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