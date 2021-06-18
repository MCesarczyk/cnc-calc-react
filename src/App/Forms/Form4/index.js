import { useState } from "react";
import Buttons from "../Buttons";
import "../style.css";

const tapDiameterTable = [
    { id: 0, diameter: "", pitch: "" },
    { id: 1, diameter: 1, pitch: 0.25 },
    { id: 2, diameter: 1.1, pitch: 0.25 },
    { id: 3, diameter: 1.2, pitch: 0.25 },
    { id: 4, diameter: 1.4, pitch: 0.3 },
    { id: 5, diameter: 1.6, pitch: 0.35 },
    { id: 6, diameter: 1.8, pitch: 0.35 },
    { id: 7, diameter: 2, pitch: 0.4 },
    { id: 8, diameter: 2.2, pitch: 0.45 },
    { id: 9, diameter: 2.5, pitch: 0.45 },
    { id: 10, diameter: 3, pitch: 0.5 },
    { id: 11, diameter: 3.5, pitch: 0.6 },
    { id: 12, diameter: 4, pitch: 0.7 },
    { id: 13, diameter: 4.5, pitch: 0.75 },
    { id: 14, diameter: 5, pitch: 0.8 },
    { id: 15, diameter: 6, pitch: 1 },
    { id: 16, diameter: 7, pitch: 1 },
    { id: 17, diameter: 8, pitch: 1.25 },
    { id: 18, diameter: 9, pitch: 1.25 },
    { id: 19, diameter: 10, pitch: 1.5 },
    { id: 20, diameter: 11, pitch: 1.5 },
    { id: 21, diameter: 12, pitch: 1.75 },
    { id: 22, diameter: 14, pitch: 2 },
    { id: 23, diameter: 16, pitch: 2 },
    { id: 24, diameter: 18, pitch: 2.5 },
    { id: 25, diameter: 20, pitch: 2.5 },
    { id: 26, diameter: 22, pitch: 2.5 },
    { id: 27, diameter: 24, pitch: 3 },
    { id: 28, diameter: 27, pitch: 3 },
    { id: 29, diameter: 30, pitch: 3.5 },
    { id: 30, diameter: 33, pitch: 3.5 },
    { id: 31, diameter: 36, pitch: 4 },
    { id: 32, diameter: 39, pitch: 4 },
    { id: 33, diameter: 42, pitch: 4.5 },
    { id: 34, diameter: 45, pitch: 4.5 },
    { id: 35, diameter: 48, pitch: 5 },
    { id: 36, diameter: 52, pitch: 5 },
    { id: 37, diameter: 56, pitch: 5.5 },
    { id: 38, diameter: 60, pitch: 5.5 },
    { id: 39, diameter: 64, pitch: 6 },
    { id: 40, diameter: 68, pitch: 6 },
];

const createTapDiameterList = () => {
    const optionList = document.querySelector(".js-tapDiameter").options;
    tapDiameterTable.forEach(option =>
        optionList.add(
            new Option(option.diameter, option.pitch)
        )
    );
};

// const form5equation = () => {
//     const rotation = document.querySelector(".js-rotationInput5").value;
//     const pitch = document.querySelector(".js-pitch").value;
//     return feedElement = rotation * pitch;
// };

// const form5input = () => {
//     const diameterSelector = document.querySelector(".js-tapDiameter");
//     const pitch = document.querySelector(".js-pitch");
//     pitch.value = parseFloat(diameterSelector.value);
// };

// const form5submit = (event) => {
//     event.preventDefault();
//     form5equation();
//     document.querySelector(".js-feedResult5").value = feedElement;
// };

// const form5reset = () => {
//     const rotationInput = document.querySelector(".js-rotationInput5");
//     rotationInput.placeholder = "obroty wrzeciona";
// };

{/* <form class="form js-form5">
            <label class="label">
              <span class="label__innerText"> n [obr/min] : </span><input type="number" min="0.01" step="0.01"
                placeholder=" obroty wrzeciona " required class="label__input js-rotationInput5">
            </label>
            <label class="label" for="tapDiameter">
              <span class="label__innerText"> Średnica narzędzia [mm] : </span>
              <select class="form__select js-tapDiameter" name="tapDiameter" required>
              </select>
            </label>
            <label class="label" for="pitch">
              <span class="label__innerText"> Skok gwintu [mm] : </span>
              <input class="label__input js-pitch" name="pitch" readonly placeholder="skok gwintu">
            </label>
            <label class="label">
              <span class="label__innerText"> f [mm/min] : </span><input readonly placeholder=" wynik "
                class="label__input js-feedResult5">
            </label>
      </form> */}

const Form4 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [diameter, setDiameter] = useState("");
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
                    <label className="form__label">
                        <span className=".form__innerText">
                            <label>D [mm]:</label>
                        </span>
                        <input
                            value={diameter}
                            className="form__input"
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" Średnica narzędzia "
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </label>

                    {/* {feedOptionList} */}

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