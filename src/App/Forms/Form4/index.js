import { useRef, useState } from "react";
import Buttons from "../Buttons";
import tapDiameters from "./tapDiameters";
import { FormLabel, Select, Form, Fieldset, Legend, FieldsContainer, FormInnerText, FormTextSub, FormInput } from "../styled";

const Form4 = ({ legend }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [diameter, setDiameter] = useState("");
    const [pitch, setPitch] = useState("");
    const [feedValue, setFeedValue] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFeedValue((rotationSpeed * pitch).toFixed());
        inputRef.current.focus();
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setRotationSpeed("");
        setDiameter("");
        setPitch("");
        setFeedValue("");
        inputRef.current.focus();
    };

    const onOptionChange = ({ target }) => {
        setDiameter(target.value);
        setPitch(
            tapDiameters[
                tapDiameters.findIndex(({ diameter }) => diameter.toString() === target.value)
            ].pitch
        );
    };

    const createTapDiameterList = (
        <FormLabel>
            <label htmlFor="diameterSelector">D&nbsp;[mm]:</label>
            <Select
                id="diameterSelector"
                onChange={onOptionChange}
                value={diameter}
            >
                {
                    tapDiameters.map(tapDiameter => (
                        <option
                            key={tapDiameter.id}
                        >
                            {tapDiameter.diameter}
                        </option>
                    ))
                }
            </Select>
        </FormLabel>
    );

    return (
        <Form onSubmit={onFormSubmit} onReset={onFormReset} >
            <Fieldset>
                <Legend>{legend}</Legend>
                <FieldsContainer>
                    <FormLabel>
                        <FormInnerText>
                            <label>n<FormTextSub>obr</FormTextSub>&nbsp;[obr/min]:</label>
                        </FormInnerText>
                        <FormInput
                            ref={inputRef}
                            value={rotationSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" obroty wrzeciona "
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </FormLabel>

                    {createTapDiameterList}

                    <FormLabel>
                        <FormInnerText>
                            <label>P&nbsp;[mm]:</label>
                        </FormInnerText>
                        <FormInput
                            value={pitch}
                            placeholder=" Skok gwintu "
                            readOnly
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>f&nbsp;[mm/min]:</label>
                        </FormInnerText>
                        <FormInput
                            value={feedValue}
                            readOnly
                            placeholder=" wynik "
                        />
                    </FormLabel>
                </FieldsContainer>
                <Buttons />
            </Fieldset>
        </Form>
    )
};

export default Form4;