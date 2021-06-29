import { useRef, useState } from "react";
import languages from "../../languages";
import Buttons from "../Buttons";
import { Form, Fieldset, Legend, FieldsContainer, FormLabel, FormInnerText, FormTextSub, FormInput } from "../styled.js";

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
                {languages[langId].diameterName}
                {languages[langId].diameterUnit}
              </label>
            </FormInnerText>
            <FormInput
              ref={inputRef}
              value={diameter}
              type="number"
              min="0.0001"
              step="0.0001"
              placeholder={languages[langId].form1Input1Placeholder}
              required
              autoFocus
              onChange={({ target }) => setDiameter(target.value - 0)}
            />
          </FormLabel>
          <FormLabel>
            <FormInnerText>
              <label>
                {languages[langId].rotSpeedName}
                <FormTextSub>
                  {languages[langId].rotSpeedSub}
                </FormTextSub>
                {languages[langId].rotSpeedUnit}
              </label>
            </FormInnerText>
            <FormInput
              value={rotationSpeed}
              type="number"
              min="1"
              step="1"
              placeholder={languages[langId].form1Input2Placeholder}
              required
              onChange={({ target }) => setRotationSpeed(target.value)}
            />
          </FormLabel>
          <FormLabel>
            <FormInnerText>
              {languages[langId].cutSpeedName}
              <FormTextSub>
                {languages[langId].cutSpeedSub}
              </FormTextSub>
              {languages[langId].cutSpeedUnit}
            </FormInnerText>
            <FormInput
              value={cuttingSpeed}
              readOnly
              placeholder={languages[langId].form1Input3Placeholder}
            />
          </FormLabel>
        </FieldsContainer>
        <Buttons />
      </Fieldset>
    </Form>
  )
};

export default Form1;