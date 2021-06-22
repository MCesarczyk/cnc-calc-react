import { useState } from "react";
import Buttons from "../Buttons";
import { Form, Fieldset, Legend, FieldsContainer, FormLabel, FormInnerText, FormTextSub, FormInput } from "../styled.js";

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
                <FieldsContainer>
                    <FormLabel>
                        <FormInnerText>
                            <label>D&nbsp;[mm]:</label>
                        </FormInnerText>
                        <FormInput
                            value={diameter}
                            type="number"
                            min="0.0001"
                            step="0.0001"
                            placeholder=" średnica narzędzia "
                            required
                            autoFocus
                            onChange={({ target }) => setDiameter(target.value - 0)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>n<FormTextSub>obr</FormTextSub>&nbsp;[obr/min]:</label>
                        </FormInnerText>
                        <FormInput
                            value={rotationSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" obroty wrzeciona "
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>V<FormTextSub>c</FormTextSub>&nbsp;[m/min]:</label>
                        </FormInnerText>
                        <FormInput
                            value={cuttingSpeed}
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

export default Form1;