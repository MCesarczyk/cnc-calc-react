import { createFeedOptions } from "../../assets/utils/createFeedOptions";
import RadioButton from "../RadioButton";
import { Input } from "../Input";
import { RadioButtonContainer } from "./styled";
import { FieldWrapper } from "../FieldWrapper";

const FeedOptionSelector = ({
  langId,
  feedType, setFeedType,
  feedFactor1, setFeedFactor1
}) => {
  const feedOptions = createFeedOptions(langId);

  const onOptionChange = ({ target }) => {
    setFeedType(target.value);
  };

  return (
    <>
      {
        feedOptions.map(feedOption => (
          <FieldWrapper key={feedOption.id}>
            <RadioButtonContainer>
              <RadioButton
                name="feedType"
                option={feedOption}
                parameter={feedType}
                onChange={onOptionChange}
              />
            </RadioButtonContainer>
            <Input
              value={(feedOption.id === feedType) ? feedFactor1 : ""}
              type="number"
              min="0.01"
              step="0.01"
              required
              disabled={feedOption.id !== feedType}
              placeholder={feedOption.placeholder}
              onChange={({ target }) => setFeedFactor1(target.value)}
            />
          </FieldWrapper>
        ))
      }
    </>
  )
};

export default FeedOptionSelector;
