import { useRef, useState } from "react";
import languages from "../../assets/fixtures/languages";
import Form from "../../components/Form";
import FormFooter from "../../components/Form/Footer";
import FormInput from "../../components/FormInput";


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
        <Form
            legend={legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
            footerContent={<FormFooter langID={langId} />}
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
                autoFocus
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
            <FormInput
                name={languages[langId].rotSpeed.name}
                sub={languages[langId].rotSpeed.sub}
                unit={languages[langId].rotSpeed.unit}
                value={rotationSpeed}
                readOnly
                placeholder={languages[langId].rotSpeed.placeholder}
            />
        </Form >
    )
};

export default Form1;