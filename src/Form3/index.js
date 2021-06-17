import React, { useState } from "react";
import "./style.css";

const Form3 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [feedPerRevolution, setFeedPerRevolution] = useState("");
    const [feedPerTooth, setFeedPerTooth] = useState("");
    const [toothNumber, setToothNumber] = useState("");
    const [feedType, setFeedType] = useState("FPR");
    const [feedValue, setFeedValue] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (feedType === "FPR") {
            setFeedValue((rotationSpeed * feedPerRevolution).toFixed());
        } else {
            setFeedValue((rotationSpeed * feedPerTooth * toothNumber).toFixed());
        }
    };

    const onFormReset = () => {
        setRotationSpeed("");
        setFeedPerRevolution("");
        setFeedPerTooth("");
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

    const feedOptions = [
        { id: "FPR", checked: true, label: "f_obr [mm/obr]:", placeholder: " posuw na obrót ", disabled: false },
        { id: "FPT", checked: false, label: "f_z [mm]:", placeholder: " posuw na ząb ", disabled: true }
    ];

    const feedOptionList = (
        <ul className="form__list">
            {
                feedOptions.map(feedOption => (
                    <li className="form__label" key={feedOption.id}>
                        <input
                            type="radio"
                            name="feedType"
                            id={feedOption.id}
                            value={feedOption.id}
                            defaultChecked={feedOption.checked}
                            onChange={({ target }) => setFeedType(target.value)}
                        />
                        <label htmlFor={feedOption.id}>
                            {feedOption.label}
                        </label>
                        <input
                            value={feedPerRevolution}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                            disabled={feedOption.disabled}
                            placeholder={feedOption.placeholder}
                            className="form__input"
                            onChange={({ target }) => setFeedPerRevolution(target.value)}
                        />
                    </li>
                ))
            }
        </ul>
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

                    {feedOptionList}

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