import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';

import LanguageContext from 'features/language/context';
import ClipboardContext from 'features/clipboard/context';
import languages from 'assets/fixtures/languages';
import { focusForm } from 'utils/focusForm';
import { checkIfItsTouchDevice } from 'utils/checkDeviceType';
import { LabeledInput } from 'ui/molecules/labeledInput';
import { ResultField } from 'ui/molecules/resultField';
import { Form } from 'ui/organisms/form';
import { calculateCuttingSpeed } from './equation';

const SurfaceSpeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode } = useContext(ClipboardContext);
  const [diameter, setDiameter] = useState((memoryMode && values?.diameter?.toString()) || '');
  const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed?.toString()) || '');
  const [cuttingSpeed, setCuttingSpeed] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDiameterChange = (e: ChangeEvent<HTMLInputElement>) => setDiameter(e.target.value);
  const onRotationSpeedChange = (e: ChangeEvent<HTMLInputElement>) => setRotationSpeed(e.target.value);

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
      setCuttingSpeed(calculateCuttingSpeed(Number(diameter), Number(rotationSpeed)));
    }
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiameter('');
    setRotationSpeed('');
    setCuttingSpeed('');
    focusForm(inputRef);
  };

  return (
    <Form legend={languages[langId].form1Legend} onSubmit={onFormSubmit} onReset={onFormReset}>
      <LabeledInput
        inputName="diameter"
        testId="input-surface-speed-diameter"
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
      <LabeledInput
        inputName="rotationSpeed"
        testId="input-surface-speed-spindle-speed"
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
        testId="result-surface-speed"
        sub={languages[langId].cutSpeed.sub}
        unit={languages[langId].cutSpeed.unit}
        value={cuttingSpeed}
        placeholder={languages[langId].cutSpeed.placeholder}
      />
    </Form>
  );
};

export default SurfaceSpeedForm;
