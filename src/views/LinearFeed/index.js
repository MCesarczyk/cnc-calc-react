import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../features/language/context";
import languages from "../../assets/fixtures/languages";
import { focusForm } from "../../assets/utils/focusForm";
import { checkIfItsTouchDevice } from "../../assets/utils/checkDeviceType";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import FeedOptionSelector from "../../components/FeedOptionSelector";
import ResultField from "../../features/clipboard/ResultField";
import ClipboardContext from "../../features/clipboard/context";

const LinearFeedForm = () => {
    const { langId } = useContext(LanguageContext);
    const { values, setValues, memoryMode } = useContext(ClipboardContext);
    const [rotationSpeed, setRotationSpeed] = useState((memoryMode && values?.rotationSpeed) || "");
    const [feedType, setFeedType] = useState((memoryMode && values?.feedType) || "FPR");
    const [toothNumber, setToothNumber] = useState((memoryMode && values?.toothNumber) || "");
    const feedPerRevolutionInitial = (memoryMode && values?.feedPerRevolution) || "";
    const [feedPerRevolution, setFeedPerRevolution] = useState(feedPerRevolutionInitial);
    const feedPerToothInitial = (memoryMode && values?.feedPerTooth) || "";
    const [feedPerTooth, setFeedPerTooth] = useState(feedPerToothInitial);
    const [feedrate, setFeedrate] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setFeedPerRevolution(feedPerRevolutionInitial);
        setFeedPerTooth(feedPerToothInitial);
        setToothNumber(values?.toothNumber || "");
        //eslint-disable-next-line
    }, [feedType])

    useEffect(() => {
        setValues({
            ...values,
            rotationSpeed: rotationSpeed,
            feedPerRevolution: feedPerRevolution,
            feedPerTooth: feedPerTooth,
            toothNumber: toothNumber,
            feedType: feedType,
            feedrate: feedrate
        });

        // eslint-disable-next-line 
    }, [feedrate]);

    const onFeedChange = (feedValue) => {
        feedType === "FPR" && setFeedPerRevolution(feedValue);
        feedType === "FPT" && setFeedPerTooth(feedValue);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (feedType === "FPR") {
            setFeedrate((rotationSpeed * feedPerRevolution).toFixed());
        } else {
            setFeedrate((rotationSpeed * feedPerTooth * toothNumber).toFixed());
        }
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setRotationSpeed("");
        setFeedType("FPR");
        setFeedPerRevolution("");
        setFeedPerTooth("");
        setToothNumber("");
        setFeedrate("");
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
                type="number"
                min="1"
                step="1"
                placeholder={languages[langId].rotSpeed.placeholder}
                required
                autoFocus={!checkIfItsTouchDevice()}
                onChange={({ target }) => setRotationSpeed(target.value)}
            />
            <FeedOptionSelector
                feedType={feedType}
                setFeedType={setFeedType}
                feedFactor={feedType === "FPR" ? feedPerRevolution : feedPerTooth}
                setFeedFactor={onFeedChange}
            />
            <FormInput
                name={languages[langId].teethNumber.name}
                value={(feedType === "FPT") ? toothNumber : ""}
                type="number"
                min="1"
                step="1"
                placeholder={languages[langId].teethNumber.placeholder}
                required
                disabled={feedType === "FPR"}
                onChange={({ target }) => setToothNumber(target.value)}
            />
            <ResultField
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedrate}
                placeholder={languages[langId].feedrate.placeholder}
            />
        </Form>
    )
};

export default LinearFeedForm;