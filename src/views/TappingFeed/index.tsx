import { FormEvent, ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import ClipboardContext from 'features/clipboard/context';
import LanguageContext from 'features/language/context';
import languages from 'assets/fixtures/languages';
import { focusForm } from 'utils/focusForm';
import { checkIfItsTouchDevice } from 'utils/checkDeviceType';
import { LabeledInput } from 'ui/molecules/labeledInput';
import { LabeledSelect } from 'ui/molecules/labeledSelect';
import { ResultField } from 'ui/molecules/resultField';
import { Form } from 'ui/organisms/form';
import { calculateTappingFeed, setPitchValue, tapDiametersArray } from './equation';

const TappingFeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode } = useContext(ClipboardContext);
  const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed?.toString()) || '');
  const [diameter, setDiameter] = useState((memoryMode && values?.tapDiameter?.toString()) || '');
  const [pitch, setPitch] = useState((memoryMode && values?.pitch?.toString()) || '');
  const [feedrate, setFeedrate] = useState<string>('');
  const inputRef = useRef(null);

  useEffect(() => {
    setValues({
      ...values,
      rotationSpeed: rotationSpeed,
      tapDiameter: diameter,
      pitch: pitch,
      tappingFeed: feedrate,
    });

    // eslint-disable-next-line
  }, [feedrate]);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rotationSpeed && diameter) {
      setFeedrate(String(calculateTappingFeed(Number(rotationSpeed), Number(diameter)) || 'N/A'));
    }
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRotationSpeed('');
    setDiameter('');
    setPitch('');
    setFeedrate('');
    focusForm(inputRef);
  };

  const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDiameter(e.target.value);
    setPitch(String(setPitchValue(Number(e.target.value))));
  };

  return (
    <Form legend={languages[langId].form4Legend} onSubmit={onFormSubmit} onReset={onFormReset}>
      <LabeledInput
        inputName="rotationSpeed"
        testId="input-tapping-spindle-speed"
        name={languages[langId].rotSpeed.name}
        sub={languages[langId].rotSpeed.sub}
        unit={languages[langId].rotSpeed.unit}
        inputRef={inputRef}
        value={rotationSpeed}
        min={1}
        step={1}
        placeholder={languages[langId].rotSpeed.placeholder}
        autoFocus={!checkIfItsTouchDevice()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setRotationSpeed(e.target.value)}
      />
      <LabeledSelect
        name={languages[langId].diameter.name}
        unit={languages[langId].diameter.unit}
        id="diameterSelector"
        testId="select-tapping-diameter"
        onChange={onOptionChange}
        value={diameter}
        data={tapDiametersArray}
      />
      <ResultField
        name={languages[langId].pitch.name}
        testId='result-thread-pitch'
        unit={languages[langId].pitch.unit}
        value={pitch}
        placeholder={languages[langId].pitch.placeholder}
      />
      <ResultField
        name={languages[langId].feedrate.name}
        testId='result-tapping-feedrate'
        unit={languages[langId].feedrate.unit}
        value={feedrate}
        placeholder={languages[langId].feedrate.placeholder}
      />
    </Form>
  );
};

export default TappingFeedForm;
