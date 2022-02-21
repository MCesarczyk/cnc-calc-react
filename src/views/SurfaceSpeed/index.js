import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import ResultField from "../../features/clipboard/ResultField";
import ClipboardContext from "../../features/clipboard/context";

const SurfaceSpeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues } = useContext(ClipboardContext);
  const [diameter, setDiameter] = useState(values?.diameter || "");
  const [rotationSpeed, setRotationSpeed] = useState(values?.rotationSpeed || "");
  const [cuttingSpeed, setCuttingSpeed] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setValues({
      ...values,
      diameter: diameter,
      rotationSpeed: rotationSpeed,
      surfaceSpeed: cuttingSpeed
    });

    // eslint-disable-next-line 
  }, [cuttingSpeed]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setCuttingSpeed((Math.PI * diameter * rotationSpeed / 1000).toFixed(2));
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setDiameter("");
    setRotationSpeed("");
    setCuttingSpeed("");
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
        type="number"
        min="0.01"
        step="0.01"
        placeholder={languages[langId].diameter.placeholder}
        required
        autoFocus={!checkIfItsTouchDevice()}
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
      <ResultField
        name={languages[langId].cutSpeed.name}
        sub={languages[langId].cutSpeed.sub}
        unit={languages[langId].cutSpeed.unit}
        value={cuttingSpeed}
        placeholder={languages[langId].cutSpeed.placeholder}
      />
    </Form >
  )
};

export default SurfaceSpeedForm;