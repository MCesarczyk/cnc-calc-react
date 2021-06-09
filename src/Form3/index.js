import React, { useState } from "react";
import "./style.css";

const Form1 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [diameter, setDiameter] = useState("");
    const [feedPerRevolution, setFeedPerRevolution] = useState("");
    const [feedPerTooth, setFeedPerTooth] = useState("");
    const [toothNumber, setToothNumber] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setRotationSpeed((cuttingSpeed * 1000 / Math.PI / diameter).toFixed(2));
    };

    const onFormReset = (event) => {
        setRotationSpeed("");
        setDiameter("");
        setFeedPerRevolution("");
        setFeedPerTooth("");
        setToothNumber("");
        setCuttingSpeed("");
    };

    // const form3input = (event) => {
    //     const rotation = document.querySelector(".js-rotationInput3").value;
    //     const feedForRev = document.querySelector(".js-feedForRev");
    //     const feedForTooth = document.querySelector(".js-feedForTooth");
    //     const toothNumber = document.querySelector(".js-toothNumber");
    //     const rev = document.querySelector(".js-rev");
    //     const tooth = document.querySelector(".js-tooth");
    //     if (tooth.checked) {
    //         feedForRev.disabled = true;
    //         feedForRev.value = "";
    //         feedForTooth.disabled = false;
    //         toothNumber.disabled = false;
    //         return feedElement = rotation * feedForTooth.value * toothNumber.value;
    //     } if (rev.checked) {
    //         feedForRev.disabled = false;
    //         feedForTooth.disabled = true;
    //         feedForTooth.value = "";
    //         toothNumber.disabled = true;
    //         toothNumber.value = "";
    //         return feedElement = rotation * feedForRev.value;
    //     };
    // };

    // const form3submit = (event) => {
    //     event.preventDefault();
    //     const feedResult = document.querySelector(".js-feedResult3");
    //     feedResult.value = feedElement;
    // };

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
                    <label className="form__label">
                        <span className=".form__innerText">
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
                            autofocus
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </label>

                    <label className="form__label">
                        <span className=".form__innerText">
                            <input
                                type="radio"
                                name="feedType"
                                id="FPR"
                                checked
                            />
                            <label for="FPR">
                                f_obr [mm/obr]:
                            </label>
                        </span>
                        <input
                            value={feedPerRevolution}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                            placeholder=" posuw na obrót "
                            className="form__input"
                            onChange={({ target }) => setFeedPerRevolution(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className=".form__innerText">
                            <input
                                type="radio"
                                name="feedType"
                                id="FPT"
                            />
                            <label for="FPT">
                                f_z [mm]:
                            </label>
                        </span>
                        <input
                            value={feedPerTooth}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                            disabled
                            placeholder=" posuw na ząb "
                            className="form__input"
                            onChange={({ target }) => setFeedPerTooth(target.value)}
                        />
                    </label>

                    <label className="form__label">
                        <span className=".form__innerText">
                            <label>z:</label>
                        </span>
                        <input
                            value={toothNumber}
                            className="form__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" ilość zębów "
                            required
                            disabled
                            onChange={({ target }) => setToothNumber(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className=".form__innerText">
                            <label>f [mm/min]:</label>
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