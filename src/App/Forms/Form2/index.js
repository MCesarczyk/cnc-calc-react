import { useState } from "react";
import Buttons from "../Buttons";
import { Form, Fieldset, Legend, FieldsContainer, FormLabel, FormInnerText, FormTextSub, FormInput } from "../styled.js";


const Form1 = ({ legend }) => {
    const [diameter, setDiameter] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");
    const [rotationSpeed, setRotationSpeed] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setRotationSpeed((cuttingSpeed * 1000 / Math.PI / diameter).toFixed(2));
    };

    const onFormReset = () => {
        setDiameter("");
        setCuttingSpeed("");
        setRotationSpeed("");
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
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>V<FormTextSub>c</FormTextSub>&nbsp;[m/min]:</label>
                        </FormInnerText>
                        <FormInput
                            value={cuttingSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder=" prędkość liniowa "
                            required
                            onChange={({ target }) => setCuttingSpeed(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>n<FormTextSub>obr</FormTextSub>&nbsp;[obr/min]:</label>
                        </FormInnerText>
                        <FormInput
                            value={rotationSpeed}
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