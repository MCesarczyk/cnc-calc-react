import { useRef, useState } from "react";
import languages from "../../../assets/fixtures/languages";
import FormButtons from "../../../components/FormButtons";
import {
  Form,
  Fieldset,
  Legend,
  FieldsContainer
} from "../styled.js";
import FormField from "../../../components/FormField";

const Form1 = ({ legend, langId }) => {
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
    <Form onSubmit={onFormSubmit} onReset={onFormReset} >
      <Fieldset>
        <Legend>{legend}</Legend>
        <FieldsContainer>
          <FormField
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
          <FormField
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
          <FormField
            name={languages[langId].cutSpeed.name}
            sub={languages[langId].cutSpeed.sub}
            unit={languages[langId].cutSpeed.unit}
            value={cuttingSpeed}
            readOnly
            placeholder={languages[langId].cutSpeed.placeholder}
          />
        </FieldsContainer>
        <FormButtons langID={langId} />
      </Fieldset>
    </Form >
  )
};

export default Form1;