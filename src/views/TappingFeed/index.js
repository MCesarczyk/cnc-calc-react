import { useContext, useEffect, useRef, useState } from "react";
import ClipboardContext from "../../features/clipboard/context";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import ResultField from "../../features/clipboard/ResultField";
import { calculateTappingFeed, setPitchValue, tapDiametersArray } from "./equation";

const TappingFeedForm = () => {
    const { langId } = useContext(LanguageContext);
    const { values, setValues, memoryMode } = useContext(ClipboardContext);
    const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed) || "");
    const [diameter, setDiameter] = useState((memoryMode && values?.tapDiameter) || "");
    const [pitch, setPitch] = useState((memoryMode && values?.pitch) || "");
    const [feedrate, setFeedrate] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setValues({
            ...values,
            rotationSpeed: rotationSpeed,
            tapDiameter: diameter,
            pitch: pitch,
            tappingFeed: feedrate
        });

        // eslint-disable-next-line 
    }, [feedrate]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFeedrate(calculateTappingFeed(rotationSpeed, diameter));
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setRotationSpeed("");
        setDiameter("");
        setPitch("");
        setFeedrate("");
        focusForm(inputRef);
    };

    const onOptionChange = ({ target }) => {
        setDiameter(target.value);
        setPitch(setPitchValue(target.value));
    };

    return (
        <Form
            legend={languages[langId].form4Legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <FormInput
                name={languages[langId].rotSpeed.name}
                sub={languages[langId].rotSpeed.sub}
                unit={languages[langId].rotSpeed.unit}
                inputRef={inputRef}
                value={rotationSpeed}
                min="1"
                step="1"
                placeholder={languages[langId].rotSpeed.placeholder}
                autoFocus={!checkIfItsTouchDevice()}
                onChange={({ target }) => setRotationSpeed(target.value)}
            />
            <FormSelect
                name={languages[langId].diameter.name}
                unit={languages[langId].diameter.unit}
                id="diameterSelector"
                onChange={onOptionChange}
                value={diameter}
                data={tapDiametersArray}
            />
            <FormInput
                name={languages[langId].pitch.name}
                unit={languages[langId].pitch.unit}
                value={pitch}
                placeholder={languages[langId].pitch.placeholder}
                readOnly
            />
            <ResultField
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedrate}
                placeholder={languages[langId].feedrate.placeholder}
            />
        </Form>
    )
};

export default TappingFeedForm;