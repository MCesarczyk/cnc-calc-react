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
import { calculateFeedrate } from "./equation";
import FeedOptionSelector from "../../components/FeedOptionSelector/FeedOptionsSelector";

const LinearFeedForm = () => {
  const { langId } = useContext(LanguageContext);
  const { values, setValues, memoryMode, feedType, setFeedType } =
    useContext(ClipboardContext);
  const [rotationSpeed, setRotationSpeed] = useState(
    (memoryMode && values?.rotationSpeed) || undefined
  );
  const [toothNumber, setToothNumber] = useState(
    (memoryMode && values?.toothNumber) || undefined
  );
  const feedPerRevolutionInitial =
    (memoryMode && values?.feedPerRevolution) || undefined;
  const [feedPerRevolution, setFeedPerRevolution] = useState(
    feedPerRevolutionInitial
  );
  const feedPerToothInitial = (memoryMode && values?.feedPerTooth) || undefined;
  const [feedPerTooth, setFeedPerTooth] = useState(feedPerToothInitial);
  const [feedrate, setFeedrate] = useState<number | undefined>(undefined);
  const inputRef = useRef(null);

  useEffect(() => {
    setFeedPerRevolution(feedPerRevolutionInitial);
    setFeedPerTooth(feedPerToothInitial);
    setToothNumber(values?.toothNumber || undefined);
    setFeedrate(undefined);
    //eslint-disable-next-line
  }, [feedType]);

  useEffect(() => {
    setValues({
      ...values,
      rotationSpeed: rotationSpeed,
      feedPerRevolution: feedPerRevolution,
      feedPerTooth: feedPerTooth,
      toothNumber: toothNumber,
      feedrate: feedrate,
    });
    setFeedType(feedType);

    // eslint-disable-next-line
  }, [feedrate]);

  const onFeedChange = (feedValue: number) => {
    feedType === "FPR" && setFeedPerRevolution(feedValue);
    feedType === "FPT" && setFeedPerTooth(feedValue);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedrate(
      Number(
        calculateFeedrate(
          feedType,
          Number(rotationSpeed),
          Number(feedPerRevolution),
          Number(feedPerTooth),
          Number(toothNumber)
        )
      )
    );
  };

  const onFormReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRotationSpeed(undefined);
    setFeedType("FPR");
    setFeedPerRevolution(undefined);
    setFeedPerTooth(undefined);
    setToothNumber(undefined);
    setFeedrate(undefined);
    focusForm(inputRef);
  };

  return (
    <Form
      legend={languages[langId].form3Legend}
      onSubmit={onFormSubmit}
      onReset={onFormReset}
    >
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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRotationSpeed(Number(e.target.value))
        }
      />
      <FeedOptionSelector
        feedType={feedType}
        setFeedType={setFeedType}
        feedFactor={feedType === "FPR" ? feedPerRevolution : feedPerTooth}
        setFeedFactor={onFeedChange}
      />
      <FormInput
        name={languages[langId].teethNumber.name}
        value={feedType === "FPT" ? toothNumber : ""}
        min={1}
        step={1}
        placeholder={languages[langId].teethNumber.placeholder}
        disabled={feedType === "FPR"}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setToothNumber(Number(e.target.value))
        }
      />
      <ResultField
        name={languages[langId].feedrate.name}
        unit={languages[langId].feedrate.unit}
        value={feedrate}
        placeholder={languages[langId].feedrate.placeholder}
      />
    </Form>
  );
};

export default LinearFeedForm;
