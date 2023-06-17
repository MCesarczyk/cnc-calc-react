import React from "react";

import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import ResultField from "../../features/clipboard/ResultField";
import ClipboardContext from "../../features/clipboard/context";
import { calculateCuttingSpeed } from "./equation";

const SurfaceSpeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode } = useContext(ClipboardContext);
  const [diameter, setDiameter] = useState(
    (memoryMode && values?.diameter) || undefined
  );
  const [rotationSpeed, setRotationSpeed] = useState(
    (memoryMode && values?.rotationSpeed) || undefined
  );
  const [cuttingSpeed, setCuttingSpeed] = useState<number | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDiameterChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDiameter(Number(e.target.value));
  const onRotationSpeedChange = (e: ChangeEvent<HTMLInputElement>) =>
    setRotationSpeed(Number(e.target.value));

  useEffect(() => {
    setValues({
      ...values,
      diameter: diameter,
      rotationSpeed: rotationSpeed,
      surfaceSpeed: cuttingSpeed,
    });

    // eslint-disable-next-line
  }, [cuttingSpeed]);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (diameter && rotationSpeed) {
      setCuttingSpeed(
        Number(calculateCuttingSpeed(Number(diameter), Number(rotationSpeed)))
      );
    }
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiameter(undefined);
    setRotationSpeed(undefined);
    setCuttingSpeed(undefined);
    focusForm(inputRef);
  };

  return (
    <Form
      legend={languages[langId].form1Legend}
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
        name={languages[langId].rotSpeed.name}
        sub={languages[langId].rotSpeed.sub}
        unit={languages[langId].rotSpeed.unit}
        value={rotationSpeed}
        min={1}
        step={1}
        placeholder={languages[langId].rotSpeed.placeholder}
        onChange={onRotationSpeedChange}
      />
      <ResultField
        name={languages[langId].cutSpeed.name}
        sub={languages[langId].cutSpeed.sub}
        unit={languages[langId].cutSpeed.unit}
        value={cuttingSpeed}
        placeholder={languages[langId].cutSpeed.placeholder}
      />
    </Form>
  );
};

export default SurfaceSpeedForm;
