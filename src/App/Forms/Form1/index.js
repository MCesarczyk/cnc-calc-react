import { useRef, useState } from "react";
import languages from "../../../assets/fixtures/languages";
import FormButtons from "../../../components/FormButtons";
import {
  Form,
  Fieldset,
  Legend,
  FieldsContainer,
  FormLabel,
  FormInnerText,
  FormInput
} from "../styled.js";
import { TextSub } from "../../../components/TextSub";

const Form1 = ({ legend, langId }) => {
  const [diameter, setDiameter] = useState("");
  const [rotationSpeed, setRotationSpeed] = useState("");
  const [cuttingSpeed, setCuttingSpeed] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setCuttingSpeed((Math.PI * diameter * rotationSpeed / 1000).toFixed(2));
    inputRef.current.focus();
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setDiameter("");
    setRotationSpeed("");
    setCuttingSpeed("");
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
              autoFocus
              onChange={({ target }) => setDiameter(target.value - 0)}
            />
          </FormLabel>
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
              value={rotationSpeed}
              type="number"
              min="1"
              step="1"
              placeholder={languages[langId].rotSpeed.placeholder}
              required
              onChange={({ target }) => setRotationSpeed(target.value)}
            />
          </FormLabel>
          <FormLabel>
            <FormInnerText>
              {languages[langId].cutSpeed.name}
              <TextSub>
                {languages[langId].cutSpeed.sub}
              </TextSub>
              {languages[langId].cutSpeed.unit}
            </FormInnerText>
            <FormInput
              value={cuttingSpeed}
              readOnly
              placeholder={languages[langId].cutSpeed.placeholder}
            />
          </FormLabel>
        </FieldsContainer>
        <FormButtons langID={langId} />
      </Fieldset>
    </Form>
  )
};

export default Form1;