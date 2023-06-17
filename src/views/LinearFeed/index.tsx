import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import LanguageContext from '../../features/language/context';
import languages from '../../assets/fixtures/languages';
import { focusForm } from '../../assets/utils/focusForm';
import { checkIfItsTouchDevice } from '../../assets/utils/checkDeviceType';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import ResultField from '../../features/clipboard/ResultField';
import ClipboardContext from '../../features/clipboard/context';
import { calculateFeedrate } from './equation';
import FeedOptionSelector from '../../components/FeedOptionSelector/FeedOptionsSelector';

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
  const [feedType, setFeedType] = useState<number>(0);
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
      rotationSpeed: Number(rotationSpeed),
      feedPerRevolution: Number(feedPerRevolution),
      feedPerTooth: Number(feedPerTooth),
      toothNumber: Number(toothNumber),
      feedrate: Number(feedrate),
      feedType: feedType,
    });

    // eslint-disable-next-line
  }, [feedrate]);

  const onFeedChange = (feedValue: number) => {
    feedType === 0 && setFeedPerRevolution(feedValue.toString());
    feedType === 1 && setFeedPerTooth(feedValue.toString());
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedrate(
      calculateFeedrate(
        Number(feedType),
        Number(rotationSpeed),
        Number(feedPerRevolution),
        Number(feedPerTooth),
        Number(toothNumber),
      ),
    );
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRotationSpeed('');
    setFeedType(0);
    setFeedPerRevolution('');
    setFeedPerTooth('');
    setToothNumber('');
    setFeedrate('');
    focusForm(inputRef);
  };

  return (
    <Form legend={languages[langId].form3Legend} onSubmit={onFormSubmit} onReset={onFormReset}>
      <FormInput
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
        feedType={feedType}
        setFeedType={setFeedType}
        feedFactor={feedType === 0 ? feedPerRevolution : feedPerTooth}
        setFeedFactor={onFeedChange}
      />
      <FormInput
        name={languages[langId].teethNumber.name}
        value={feedType === 1 ? toothNumber : ''}
        min={1}
        step={1}
        placeholder={languages[langId].teethNumber.placeholder}
        disabled={feedType === 0}
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
