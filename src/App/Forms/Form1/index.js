import { useState } from "react";
import Buttons from "../Buttons";
import "../style.css";
import { Form, Fieldset, Legend } from "../styled.js";

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
        <Form onSubmit={onFormSubmit} onReset={onFormReset} >
            <Fieldset>
                <Legend>{legend}</Legend>
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
                            onChange={({ target }) => setDiameter(target.value - 0)}
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
                <Buttons />
            </Fieldset>
        </Form>
    )
};

export default Form1;