import { useRef, useState } from "react";
import Buttons from "../Buttons";
import tapDiameters from "./tapDiameters";
import { 
    FormLabel, 
    Select, 
    Form, 
    Fieldset, 
    Legend, 
    FieldsContainer, 
    FormInnerText, 
    FormInput 
} from "../styled";
import { TextSub } from "../../../components/TextSub";
import languages from "../../../assets/fixtures/languages";

const Form4 = ({ legend, langId }) => {
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
            <label htmlFor="diameterSelector">
                {languages[langId].diameter.name}
                {languages[langId].diameter.unit}
            </label>
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
                            <label>
                                {languages[langId].rotSpeed.name}
                                <TextSub>
                                    {languages[langId].rotSpeed.sub}
                                </TextSub>
                                {languages[langId].rotSpeed.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            ref={inputRef}
                            value={rotationSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder={languages[langId].rotSpeed.placeholder}
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </FormLabel>

                    {createTapDiameterList}

                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].pitch.name}
                                {languages[langId].pitch.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={pitch}
                            placeholder={languages[langId].pitch.placeholder}
                            readOnly
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].feedrate.name}
                                {languages[langId].feedrate.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={feedValue}
                            readOnly
                            placeholder={languages[langId].feedrate.placeholder}
                        />
                    </FormLabel>
                </FieldsContainer>
                <Buttons langID={langId}/>
            </Fieldset>
        </Form>
    )
};

export default Form4;