import { ChangeEvent, useContext } from "react";
import LanguageContext from "features/language/context";
import { createFeedOptions } from "assets/utils/createFeedOptions";
import RadioButton from "../RadioButton";
import { FieldWrapper } from "../FieldWrapper";
import { Input } from "../Input";
import { Language } from "types";

interface FeedOptionSelectorProps {
  feedType: string;
  setFeedType: (value: string) => void;
  feedFactor: string;
  setFeedFactor: (value: string) => void;
}

const FeedOptionSelector = ({
  feedType, setFeedType,
  feedFactor, setFeedFactor
}: FeedOptionSelectorProps) => {
  const { langId } = useContext(LanguageContext);
  const feedOptions = createFeedOptions(langId as Language);

  return (
    <>
      {
        feedOptions.map(feedOption => (
          <FieldWrapper key={feedOption.id}>
            <RadioButton
              name="feedType"
              option={feedOption}
              parameter={feedType}
              onChange={(e: ChangeEvent<HTMLInputElement> ) => setFeedType(e.target.value)}
            />
            <Input
              data-testid={`${feedOption.id}-input`}
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
