import { useEffect, useRef, useState } from "react";
import languages from "../../../assets/fixtures/languages";
import Buttons from "../Buttons";
import FeedOptionSelector from "../FeedOptionSelector";
import {
    Form,
    Fieldset,
    Legend,
    FieldsContainer,
    FormLabel,
    FormInnerText,
    FormTextSub,
    FormInput
} from "../styled.js";

const Form3 = ({ legend, langId }) => {
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
        <Form onSubmit={onFormSubmit} onReset={onFormReset} >
            <Fieldset>
                <Legend>{legend}</Legend>
                <FieldsContainer>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].rotSpeed.name}
                                <FormTextSub>
                                    {languages[langId].rotSpeed.sub}
                                </FormTextSub>
                                {languages[langId].rotSpeed.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            ref={inputRef}
                            value={rotationSpeed}
                            type="number"
                            min="1"
                            step="1"
                            placeholder={languages[langId].rotSpeed.placeholder}
                            required
                            onChange={({ target }) => setRotationSpeed(target.value)}
                        />
                    </FormLabel>

                    <FeedOptionSelector
                        langId={langId}
                        feedType={feedType}
                        setFeedType={setFeedType}
                        feedFactor1={feedFactor1}
                        setFeedFactor1={setFeedFactor1}
                        setFeedFactor2={setFeedFactor2}
                    />

                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].teethNumber.name}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={(feedType === "FPT") ? feedFactor2 : ""}
                            type="number"
                            min="1"
                            step="1"
                            placeholder={languages[langId].teethNumber.placeholder}
                            required
                            disabled={feedType === "FPR"}
                            onChange={({ target }) => setFeedFactor2(target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        <FormInnerText>
                            <label>
                                {languages[langId].feedrate.name}
                                {languages[langId].feedrate.unit}
                            </label>
                        </FormInnerText>
                        <FormInput
                            value={feedValue}
                            readOnly
                            placeholder={languages[langId].feedrate.placeholder}
                        />
                    </FormLabel>
                </FieldsContainer>
                <Buttons langID={langId} />
            </Fieldset>
        </Form>
    )
};

export default Form3;