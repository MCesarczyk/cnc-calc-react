import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import ResultField from "../../features/clipboard/ResultField";
import ClipboardContext from "../../features/clipboard/context";

const ToolRotationForm = () => {
    const { langId } = useContext(LanguageContext);
    const { values, setValues } = useContext(ClipboardContext);
    const [diameter, setDiameter] = useState("");
    const [cuttingSpeed, setCuttingSpeed] = useState("");
    const [rotationSpeed, setRotationSpeed] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setValues({
            ...values,
            toolRotation: rotationSpeed
        });

        // eslint-disable-next-line 
    }, [rotationSpeed]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setRotationSpeed((cuttingSpeed * 1000 / Math.PI / diameter).toFixed(2));
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setDiameter("");
        setCuttingSpeed("");
        setRotationSpeed("");
        focusForm(inputRef);
    };

    return (
        <Form
            legend={languages[langId].form2Legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <FormInput
                name={languages[langId].diameter.name}
                unit={languages[langId].diameter.unit}
                inputRef={inputRef}
                value={diameter}
                type="number"
                min="0.0001"
                step="0.0001"
                placeholder={languages[langId].diameter.placeholder}
                required
                autoFocus={!checkIfItsTouchDevice()}
                onChange={({ target }) => setDiameter(target.value)}
            />
            <FormInput
                name={languages[langId].cutSpeed.name}
                sub={languages[langId].cutSpeed.sub}
                unit={languages[langId].cutSpeed.unit}
                value={cuttingSpeed}
                type="number"
                min="1"
                step="1"
                placeholder={languages[langId].cutSpeed.placeholder}
                required
                onChange={({ target }) => setCuttingSpeed(target.value)}
            />
            <ResultField
                name={languages[langId].rotSpeed.name}
                sub={languages[langId].rotSpeed.sub}
                unit={languages[langId].rotSpeed.unit}
                value={rotationSpeed}
                placeholder={languages[langId].rotSpeed.placeholder}
            />
        </Form >
    )
};

export default ToolRotationForm;