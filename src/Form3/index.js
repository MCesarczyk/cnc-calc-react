import React, { useState } from "react";
import "./style.css";

const Form3 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [feedPerRevolutionInput, setFeedPerRevolutionInput] = useState("");
    const [feedPerToothInput, setFeedPerToothInput] = useState("");
    const [toothNumber, setToothNumber] = useState("");
    const [feedValue, setFeedValue] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFeedValue((rotationSpeed * 1000 / Math.PI / 2).toFixed(2));
    };

    const onFormReset = () => {
        setRotationSpeed("");
        setFeedPerRevolutionInput("");
        setFeedPerToothInput("");
        setToothNumber("");
        setFeedValue("");
    };

    // const form3input = (event) => {
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

    const [feedType, setFeedType] = useState("FPR");

    const handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        console.log("działamy: ", feedType);
    };

    return (
        <form className="form" onSubmit={handleFormSubmit} onReset={onFormReset} >
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
                            // required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </label>

                    <label className="form__label">
                        <span className=".form__innerText">
                            <input
                                type="radio"
                                name="feedType"
                                id="FPR"
                                value="FPR"
                                defaultChecked
                                onChange={({ target }) => setFeedType(target.value)}
                            />
                            <label htmlFor="FPR">
                                f_obr [mm/obr]:
                            </label>
                        </span>
                        <input
                            value={feedPerRevolutionInput}
                            type="number"
                            min="0.01"
                            step="0.01"
                            // required
                            placeholder=" posuw na obrót "
                            className="form__input"
                            onChange={({ target }) => setFeedPerRevolutionInput(target.value)}
                        />
                    </label>
                    <label className="form__label">
                        <span className=".form__innerText">
                            <input
                                type="radio"
                                name="feedType"
                                id="FPT"
                                value="FPT"
                                onChange={({ target }) => setFeedType(target.value)}
                            />
                            <label htmlFor="FPT">
                                f_z [mm]:
                            </label>
                        </span>
                        <input
                            value={feedPerToothInput}
                            type="number"
                            min="0.01"
                            step="0.01"
                            // required
                            disabled
                            placeholder=" posuw na ząb "
                            className="form__input"
                            onChange={({ target }) => setFeedPerToothInput(target.value)}
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
                            value={feedValue}
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

export default Form3;