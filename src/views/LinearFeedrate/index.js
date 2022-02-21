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

const LinearFeedrateForm = () => {
    const { langId } = useContext(LanguageContext);
    const { values, setValues } = useContext(ClipboardContext);
    const [rotationSpeed, setRotationSpeed] = useState(values.rotationSpeed || "");
    const [feedFactor1, setFeedFactor1] = useState("");
    const [feedFactor2, setFeedFactor2] = useState("");
    const [feedType, setFeedType] = useState("FPR");
    const [feedValue, setFeedValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setFeedFactor1("");
        setFeedFactor2("");
    }, [feedType])

    useEffect(() => {
        setValues({
            ...values,
            rotationSpeed: rotationSpeed,
            feedrate: feedValue
        });

        // eslint-disable-next-line 
    }, [feedValue]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (feedType === "FPR") {
            setFeedValue((rotationSpeed * feedFactor1).toFixed());
        } else {
            setFeedValue((rotationSpeed * feedFactor1 * feedFactor2).toFixed());
        }
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setRotationSpeed("");
        setFeedType("FPR");
        setFeedFactor1("");
        setFeedFactor2("");
        setFeedValue("");
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
                feedFactor1={feedFactor1}
                setFeedFactor1={setFeedFactor1}
            />
            <FormInput
                name={languages[langId].teethNumber.name}
                value={(feedType === "FPT") ? feedFactor2 : ""}
                type="number"
                min="1"
                step="1"
                placeholder={languages[langId].teethNumber.placeholder}
                required
                disabled={feedType === "FPR"}
                onChange={({ target }) => setFeedFactor2(target.value)}
            />
            <ResultField
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedValue}
                placeholder={languages[langId].feedrate.placeholder}
            />
        </Form>
    )
};

export default LinearFeedrateForm;