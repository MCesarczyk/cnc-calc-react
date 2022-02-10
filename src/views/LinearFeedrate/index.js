import { useEffect, useRef, useState } from "react";
import languages from "../../assets/fixtures/languages";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import FormFooter from "../../components/Form/Footer";
import FeedOptionSelector from "../../components/FeedOptionSelector";

const LinearFeedrateForm = ({ langId }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [feedFactor1, setFeedFactor1] = useState("");
    const [feedFactor2, setFeedFactor2] = useState("");
    const [feedType, setFeedType] = useState("FPR");
    const [feedValue, setFeedValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setFeedFactor1("");
        setFeedFactor2("");
    }, [feedType])

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (feedType === "FPR") {
            setFeedValue((rotationSpeed * feedFactor1).toFixed());
        } else {
            setFeedValue((rotationSpeed * feedFactor1 * feedFactor2).toFixed());
        }
        inputRef.current.focus();
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setRotationSpeed("");
        setFeedType("FPR");
        setFeedFactor1("");
        setFeedFactor2("");
        setFeedValue("");
        inputRef.current.focus();
    };

    return (
        <Form
            legend={languages[langId].form3Legend}
            onSubmit={onFormSubmit}
            onReset={onFormReset}
            footerContent={<FormFooter langID={langId} />}
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
                autoFocus
                onChange={({ target }) => setRotationSpeed(target.value)}
            />

            <FeedOptionSelector
                langId={langId}
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

            <FormInput
                name={languages[langId].feedrate.name}
                unit={languages[langId].feedrate.unit}
                value={feedValue}
                readOnly
                placeholder={languages[langId].feedrate.placeholder}
            />

        </Form>
    )
};

export default LinearFeedrateForm;