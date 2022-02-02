import { useRef, useState } from "react";
import languages from "../../../assets/fixtures/languages";
import Buttons from "../Buttons";
import { Form, Fieldset, Legend, FieldsContainer, FormLabel, FormInnerText, FormTextSub, FormInput } from "../styled.js";


const Form1 = ({ legend, langId }) => {
    const [diameter, setDiameter] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");
    const [rotationSpeed, setRotationSpeed] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setRotationSpeed((cuttingSpeed * 1000 / Math.PI / diameter).toFixed(2));
        inputRef.current.focus();
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setDiameter("");
        setCuttingSpeed("");
        setRotationSpeed("");
        inputRef.current.focus();
    };

    return (
        <Form onSubmit={onFormSubmit} onReset={onFormReset} >
            <Fieldset>
                <Legend>{legend}</Legend>
                <FieldsContainer>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].diameter.name}
                                {languages[langId].diameter.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            ref={inputRef}
                            value={diameter}
                            type="number"
                            min="0.0001"
                            step="0.0001"
                            placeholder={languages[langId].diameter.placeholder}
                            required
                            onChange={({ target }) => setDiameter(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].cutSpeed.name}
                                <FormTextSub>
                                    {languages[langId].cutSpeed.sub}
                                </FormTextSub>
                                {languages[langId].cutSpeed.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={cuttingSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder={languages[langId].cutSpeed.placeholder}
                            required
                            onChange={({ target }) => setCuttingSpeed(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].rotSpeed.name}
                                <FormTextSub>
                                    {languages[langId].rotSpeed.sub}
                                </FormTextSub>
                                {languages[langId].rotSpeed.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={rotationSpeed}
                            readOnly
                            placeholder={languages[langId].rotSpeed.placeholder}
                        />
                    </FormLabel>
                </FieldsContainer>
                <Buttons langID={langId}/>
            </Fieldset>
        </Form>
    )
};

export default Form1;