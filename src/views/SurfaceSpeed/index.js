import { useRef, useState } from "react";
import languages from "../../assets/fixtures/languages";
import Form from "../../components/Form";
import FormFooter from "../../components/Form/Footer";
import FormInput from "../../components/FormInput";

const SurfaceSpeedForm = ({ langId }) => {
  const [diameter, setDiameter] = useState("");
  const [rotationSpeed, setRotationSpeed] = useState("");
  const [cuttingSpeed, setCuttingSpeed] = useState("");
  const inputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    setCuttingSpeed((Math.PI * diameter * rotationSpeed / 1000).toFixed(2));
    inputRef.current?.focus();
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setDiameter("");
    setRotationSpeed("");
    setCuttingSpeed("");
    inputRef.current?.focus();
  };

  return (
    <Form
      legend={languages[langId].form1Legend}
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
        onChange={({ target }) => setDiameter(target.value - 0)}
      />
      <FormInput
        name={languages[langId].rotSpeed.name}
        sub={languages[langId].rotSpeed.sub}
        unit={languages[langId].rotSpeed.unit}
        value={rotationSpeed}
        type="number"
        min="1"
        step="1"
        placeholder={languages[langId].rotSpeed.placeholder}
        required
        onChange={({ target }) => setRotationSpeed(target.value)}
      />
      <FormInput
        name={languages[langId].cutSpeed.name}
        sub={languages[langId].cutSpeed.sub}
        unit={languages[langId].cutSpeed.unit}
        value={cuttingSpeed}
        readOnly
        placeholder={languages[langId].cutSpeed.placeholder}
      />
    </Form >
  )
};

export default SurfaceSpeedForm;