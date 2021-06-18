import { useState } from "react";
import Buttons from "../Buttons";
import tapDiameters from "./tapDiameters";
import "../style.css";

const Form4 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [pitch, setPitch] = useState("");
    const [feedValue, setFeedValue] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFeedValue((rotationSpeed * pitch).toFixed());
    };

    const onFormReset = () => {
        setRotationSpeed("");
        setPitch("");
        setFeedValue("");
    };

    const onOptionChange = ({ target }) => {
        setPitch(
            tapDiameters[
                tapDiameters.findIndex(({ diameter }) => diameter.toString() === target.value)
            ].pitch
        );
    };

    const createTapDiameterList = (
        <div className="form__label">
            <label htmlFor="diameterSelector">D [mm]:</label>
            <select
                className="form__input form__input--select"
                id="diameterSelector"
                onChange={onOptionChange}
            >
                {
                    tapDiameters.map(tapDiameter => (
                        <option
                            key={tapDiameter.id}
                            value={tapDiameter.diameter}
                        >
                            {tapDiameter.diameter}
                        </option>
                    ))
                }
            </select>
        </div>
    );

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">{legend}</legend>
                <div className="form__fieldsContainer">
                    <label className="form__label">
                        <span className=".form__innerText">
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

                    {createTapDiameterList}

                    <label className="form__label">
                        <span className=".form__innerText">
                            <label>P [mm]:</label>
                        </span>
                        <input
                            value={pitch}
                            className="form__input"
                            placeholder=" Skok gwintu "
                            readOnly
                        />
                    </label>
                    <label className="form__label">
                        <span className=".form__innerText">
                            <label>f [mm/min]:</label>
                        </span>
                        <input
                            value={feedValue}
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

export default Form4;