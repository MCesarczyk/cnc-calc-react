import { useRef, useState } from "react";
import languages from "../../assets/fixtures/languages";
import tapDiameters from "../../assets/fixtures/tapDiameters";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import FormFooter from "../../components/Form/Footer";
import FormSelect from "../../components/FormSelect";

const newArray = tapDiameters.map(record => ({
    key: record.id,
    value: record.diameter
}));

const TappingFeedrateForm = ({ langId }) => {
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

    return (
        <Form
            legend={languages[langId].form4Legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
            footerContent={<FormFooter langID={langId} />}
        >
            <FormInput
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
            <FormSelect
                name={languages[langId].diameter.name}
                unit={languages[langId].diameter.unit}
                id="diameterSelector"
                onChange={onOptionChange}
                value={diameter}
                data={newArray}
            />
            <FormInput
                name={languages[langId].pitch.name}
                unit={languages[langId].pitch.unit}
                value={pitch}
                placeholder={languages[langId].pitch.placeholder}
                readOnly
            />
            <FormInput
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedValue}
                readOnly
                placeholder={languages[langId].feedrate.placeholder}
            />
        </Form>
    )
};

export default TappingFeedrateForm;