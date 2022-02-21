import { useContext } from "react";
import LanguageContext from "../../features/language/context";
import { createFeedOptions } from "../../assets/utils/createFeedOptions";
import RadioButton from "../RadioButton";
import { FieldWrapper } from "../FieldWrapper";
import { Input } from "../Input";

const FeedOptionSelector = ({
  feedType, setFeedType,
  feedFactor, setFeedFactor
}) => {
  const { langId } = useContext(LanguageContext);
  const feedOptions = createFeedOptions(langId);

  const onOptionChange = ({ target }) => {
    setFeedType(target.value);
  };

  return (
    <>
      {
        feedOptions.map(feedOption => (
          <FieldWrapper key={feedOption.id}>
            <RadioButton
              name="feedType"
              option={feedOption}
              parameter={feedType}
              onChange={onOptionChange}
            />
            <Input
              value={(feedOption.id === feedType) ? feedFactor : ""}
              type="number"
              min="0.01"
              step="0.01"
              required
              disabled={feedOption.id !== feedType}
              placeholder={feedOption.placeholder}
              onChange={({ target }) => setFeedFactor(target.value)}
            />
          </FieldWrapper>
        ))
      }
    </>
  )
};

export default FeedOptionSelector;
