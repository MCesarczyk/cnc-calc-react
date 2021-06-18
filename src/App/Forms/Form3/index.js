import { useState } from "react";
import Buttons from "../Buttons";
import "../style.css";

const Form3 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [feedFactor1, setFeedFactor1] = useState("");
    const [feedFactor2, setFeedFactor2] = useState("");
    const [feedType, setFeedType] = useState("FPR");
    const [feedValue, setFeedValue] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (feedType === "FPR") {
            setFeedValue((rotationSpeed * feedFactor1).toFixed());
        } else {
            setFeedValue((rotationSpeed * feedFactor1 * feedFactor2).toFixed());
        }
    };

    const onFormReset = () => {
        setRotationSpeed("");
        setFeedType("FPR");
        setFeedFactor1("");
        setFeedFactor2("");
        setFeedValue("");
    };

    const feedOptions = [
        { id: "FPR", label: "f_obr [mm/obr]:", placeholder: " posuw na obrót ", disabled: false },
        { id: "FPT", label: "f_z [mm]:", placeholder: " posuw na ząb ", disabled: true }
    ];

    const onOptionChange = ({ target }) => {
        setFeedType(target.value);
        setFeedFactor1("");
        setFeedFactor2("");
    };

    const feedOptionList = (
        <ul className="form__list">
            {
                feedOptions.map(feedOption => (
                    <li className="form__label" key={feedOption.id}>
                        <div className="form__radioButtonContainer">
                            <input
                                type="radio"
                                name="feedType"
                                id={feedOption.id}
                                value={feedOption.id}
                                checked={feedType === feedOption.id}
                                onChange={onOptionChange}
                            />
                            <label htmlFor={feedOption.id}>
                                {feedOption.label}
                            </label>
                        </div>
                        <input
                            value={(feedOption.id === feedType) ? feedFactor1 : ""}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                            disabled={feedOption.id !== feedType}
                            placeholder={feedOption.placeholder}
                            className="form__input"
                            onChange={({ target }) => setFeedFactor1(target.value)}
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
                            value={(feedType === "FPT") ? feedFactor2 : ""}
                            className="form__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" ilość zębów "
                            required
                            disabled={feedType === "FPR"}
                            onChange={({ target }) => setFeedFactor2(target.value)}
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

export default Form3;