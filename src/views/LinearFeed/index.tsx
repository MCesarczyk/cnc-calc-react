import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';

import { FeedType } from 'types';
import LanguageContext from 'features/language/context';
import ClipboardContext from 'features/clipboard/context';
import { Language } from 'features/language/types';
import { focusForm } from 'utils/focusForm';
import { checkIfItsTouchDevice } from 'utils/checkDeviceType';
import { createFeedOptions } from 'utils/createFeedOptions';
import languages from 'assets/fixtures/languages';
import { LabeledInput } from 'ui/molecules/labeledInput';
import { ResultField } from 'ui/molecules/resultField';
import { FeedOptionSelector } from 'ui/organisms/feedOptionSelector';
import { Form } from 'ui/organisms/form';
import { calculateFeedrate } from './equation';

const LinearFeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode } = useContext(ClipboardContext);
  const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed?.toString()) || '');
  const [toothNumber, setToothNumber] = useState((memoryMode && values?.toothNumber?.toString()) || '');
  const feedPerRevolutionInitial = (memoryMode && values?.feedPerRevolution?.toString()) || '';
  const [feedPerRevolution, setFeedPerRevolution] = useState(feedPerRevolutionInitial);
  const feedPerToothInitial = (memoryMode && values?.feedPerTooth?.toString()) || '';
  const [feedPerTooth, setFeedPerTooth] = useState(feedPerToothInitial);
  const [feedrate, setFeedrate] = useState<string>('');
  const [feedType, setFeedType] = useState<FeedType>('FPR');
  const feedOptions = createFeedOptions(langId as Language);
  const inputRef = useRef(null);

  useEffect(() => {
    setFeedPerRevolution(feedPerRevolutionInitial);
    setFeedPerTooth(feedPerToothInitial);
    setToothNumber(values?.toothNumber?.toString() || '');
    setFeedrate('');
    //eslint-disable-next-line
  }, [values.feedType]);

  useEffect(() => {
    setValues({
      ...values,
      rotationSpeed: rotationSpeed,
      feedPerRevolution: feedPerRevolution,
      feedPerTooth: feedPerTooth,
      toothNumber: toothNumber,
      feedrate: feedrate,
      feedType: feedType,
    });
    // eslint-disable-next-line
  }, [feedrate, feedType]);

  const onFeedChange = (feedValue: number) => {
    feedType === 'FPR' && setFeedPerRevolution(feedValue.toString());
    feedType === 'FPT' && setFeedPerTooth(feedValue.toString());
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedrate(
      calculateFeedrate(
        feedType,
        Number(rotationSpeed),
        Number(feedPerRevolution),
        Number(feedPerTooth),
        Number(toothNumber),
      ).toFixed(),
    );
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRotationSpeed('');
    setFeedType('FPR');
    setFeedPerRevolution('');
    setFeedPerTooth('');
    setToothNumber('');
    setFeedrate('');
    focusForm(inputRef);
  };

  return (
    <Form legend={languages[langId].form3Legend} onSubmit={onFormSubmit} onReset={onFormReset}>
      <LabeledInput
        inputName="rotationSpeed"
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
      <FeedOptionSelector
        feedOptions={feedOptions}
        feedType={feedType}
        setFeedType={setFeedType}
        feedFactor={feedType === 'FPR' ? feedPerRevolution : feedPerTooth}
        setFeedFactor={onFeedChange}
      />
      <LabeledInput
        inputName="feedFactor"
        name={languages[langId].teethNumber.name}
        value={feedType === 'FPT' ? toothNumber : ''}
        min={1}
        step={1}
        placeholder={languages[langId].teethNumber.placeholder}
        disabled={feedType === 'FPR'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setToothNumber(e.target.value)}
      />
      <ResultField
        name={languages[langId].feedrate.name}
        unit={languages[langId].feedrate.unit}
        value={feedrate || ''}
        placeholder={languages[langId].feedrate.placeholder}
      />
    </Form>
  );
};

export default LinearFeedForm;
