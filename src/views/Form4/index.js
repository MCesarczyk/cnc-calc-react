import { useRef, useState } from "react";
import languages from "../../assets/fixtures/languages";
import tapDiameters from "../../assets/fixtures/tapDiameters";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import FormFooter from "../../components/Form/Footer";
import { FormLabel, Select } from "./styled";

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
        <Form
            legend={legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
            footerContent={<FormFooter langID={langId} />}
        >
            <FormField
                name={languages[langId].rotSpeed.name}
                sub={languages[langId].rotSpeed.sub}
                unit={languages[langId].rotSpeed.unit}
                inputRef={inputRef}
                value={rotationSpeed}
                type="number"
                min="1"
                step="1"
                placeholder={languages[langId].rotSpeed.placeholder}
                required
                autoFocus
                onChange={({ target }) => setRotationSpeed(target.value)}
            />

            {createTapDiameterList}

            <FormField
                name={languages[langId].pitch.name}
                unit={languages[langId].pitch.unit}
                value={pitch}
                placeholder={languages[langId].pitch.placeholder}
                readOnly
            />
            <FormField
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedValue}
                readOnly
                placeholder={languages[langId].feedrate.placeholder}
            />
        </Form>
    )
};

export default Form4;