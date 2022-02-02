import languages from "../../languages";
import { FormInput, FormLabel, FormTextSub, RadioButtonContainer } from "../styled";

const FeedOptionSelector = ({
  langId,
  feedType, setFeedType,
  feedFactor1, setFeedFactor1, setFeedFactor2
}) => {
  const feedOptions = [
    {
      id: "FPR",
      name: languages[langId].feedPerRev.name,
      sub: languages[langId].feedPerRev.sub,
      unit: languages[langId].feedPerRev.unit,
      placeholder: languages[langId].feedPerRev.placeholder,
      disabled: false
    },
    {
      id: "FPT",
      name: languages[langId].feedPerTooth.name,
      sub: languages[langId].feedPerTooth.sub,
      unit: languages[langId].feedPerTooth.unit,
      placeholder: languages[langId].feedPerTooth.placeholder,
      disabled: true
    }
  ];

  const onOptionChange = ({ target }) => {
    setFeedType(target.value);
    setFeedFactor1("");
    setFeedFactor2("");
  };

  return (
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
  )
};

export default FeedOptionSelector;
