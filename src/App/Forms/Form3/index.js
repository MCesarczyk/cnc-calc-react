import { useRef, useState } from "react";
import languages from "../../languages";
import Buttons from "../Buttons";
import { Form, Fieldset, Legend, FieldsContainer, FormLabel, FormInnerText, FormTextSub, FormInput, RadioButtonContainer } from "../styled.js";

const Form3 = ({ legend, langId }) => {
    const [rotationSpeed, setRotationSpeed] = useState("");
    const [feedFactor1, setFeedFactor1] = useState("");
    const [feedFactor2, setFeedFactor2] = useState("");
    const [feedType, setFeedType] = useState("FPR");
    const [feedValue, setFeedValue] = useState("");
    const inputRef = useRef(null);

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

    const feedOptions = [
        {
            id: "FPR",
            name: `${languages[langId].feedPerRev.name}`,
            sub: `${languages[langId].feedPerRev.sub}`,
            unit: `${languages[langId].feedPerRev.unit}`,
            placeholder: `${languages[langId].feedPerRev.placeholder}`,
            disabled: false
        },
        {
            id: "FPT",
            name: `${languages[langId].feedPerTooth.name}`,
            sub: `${languages[langId].feedPerTooth.sub}`,
            unit: `${languages[langId].feedPerTooth.unit}`,
            placeholder: `${languages[langId].feedPerTooth.placeholder}`,
            disabled: true
        }
    ];

    const onOptionChange = ({ target }) => {
        setFeedType(target.value);
        setFeedFactor1("");
        setFeedFactor2("");
    };

    const createFeedOptionList = (
        <>
            {
                feedOptions.map(feedOption => (
                    <FormLabel key={feedOption.id}>
                        <RadioButtonContainer>
                            <input
                                type="radio"
                                name="feedType"
                                id={feedOption.id}
                                value={feedOption.id}
                                checked={feedType === feedOption.id}
                                onChange={onOptionChange}
                            />
                            <label htmlFor={feedOption.id}>
                                {feedOption.name}
                                <FormTextSub>
                                    {feedOption.sub}
                                </FormTextSub>
                                {feedOption.unit}
                            </label>
                        </RadioButtonContainer>
                        <FormInput
                            value={(feedOption.id === feedType) ? feedFactor1 : ""}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                            disabled={feedOption.id !== feedType}
                            placeholder={feedOption.placeholder}
                            onChange={({ target }) => setFeedFactor1(target.value)}
                        />
                    </FormLabel>
                ))
            }
        </>
    );

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

                    {createFeedOptionList}

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
                <Buttons langID={langId}/>
            </Fieldset>
        </Form>
    )
};

export default Form3;