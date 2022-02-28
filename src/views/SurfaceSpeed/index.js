import { useContext, useEffect, useRef, useState } from "react";
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
  const [diameter, setDiameter] = useState((memoryMode && values?.diameter) || "");
  const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed) || "");
  const [cuttingSpeed, setCuttingSpeed] = useState("");
  const inputRef = useRef();

  const onDiameterChange = ({ target }) => setDiameter(target.value);
  const onRotationSpeedChange = ({ target }) => setRotationSpeed(target.value);

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
    setCuttingSpeed(calculateCuttingSpeed(diameter, rotationSpeed));
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
        onChange={onDiameterChange}
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
        onChange={onRotationSpeedChange}
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