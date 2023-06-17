import React, { ChangeEvent, FormEvent } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import ResultField from "../../features/clipboard/ResultField";
import ClipboardContext from "../../features/clipboard/context";
import { calculateRotationSpeed } from "./equation";

const ToolRotationForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode } = useContext(ClipboardContext);
  const [diameter, setDiameter] = useState(
    (memoryMode && values?.diameter) || undefined
  );
  const [cuttingSpeed, setCuttingSpeed] = useState(
    (memoryMode && values?.surfaceSpeed) || undefined
  );
  const [rotationSpeed, setRotationSpeed] = useState<number | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDiameterChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDiameter(Number(e.target.value));
  const onCuttingSpeedChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCuttingSpeed(Number(e.target.value));

  useEffect(() => {
    setValues({
      ...values,
      diameter: diameter,
      surfaceSpeed: cuttingSpeed,
      rotationSpeed: rotationSpeed,
    });

    // eslint-disable-next-line
  }, [rotationSpeed]);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (diameter && cuttingSpeed) {
      setRotationSpeed(Number(calculateRotationSpeed(diameter, cuttingSpeed)));
    }
  };

  const onFormReset = (event: FormEvent) => {
    event.preventDefault();
    setDiameter(undefined);
    setCuttingSpeed(undefined);
    setRotationSpeed(undefined);
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
        min={0.01}
        step={0.01}
        placeholder={languages[langId].diameter.placeholder}
        autoFocus={!checkIfItsTouchDevice()}
        onChange={onDiameterChange}
      />
      <FormInput
        name={languages[langId].cutSpeed.name}
        sub={languages[langId].cutSpeed.sub}
        unit={languages[langId].cutSpeed.unit}
        value={cuttingSpeed}
        min={1}
        step={0.01}
        placeholder={languages[langId].cutSpeed.placeholder}
        onChange={onCuttingSpeedChange}
      />
      <ResultField
        name={languages[langId].rotSpeed.name}
        sub={languages[langId].rotSpeed.sub}
        unit={languages[langId].rotSpeed.unit}
        value={rotationSpeed}
        placeholder={languages[langId].rotSpeed.placeholder}
      />
    </Form>
  );
};

export default ToolRotationForm;
