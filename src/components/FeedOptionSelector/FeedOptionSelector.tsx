import { ChangeEvent, useContext } from 'react';

import { FeedType } from 'types';
import { Language } from 'features/language/types';
import LanguageContext from 'features/language/context';
import { createFeedOptions } from 'assets/utils/createFeedOptions';
import { RadioButton } from '../RadioButton/RadioButton';
import { FieldWrapper } from '../FieldWrapper';
import { Input } from '../Input';

interface FeedOptionSelectorProps {
  feedType: FeedType;
  setFeedType: (value: FeedType) => void;
  feedFactor: string | undefined;
  setFeedFactor: (value: number) => void;
}

export const FeedOptionSelector = ({ feedType, setFeedType, feedFactor, setFeedFactor }: FeedOptionSelectorProps) => {
  const { langId } = useContext(LanguageContext);
  const feedOptions = createFeedOptions(langId as Language);

  return (
    <>
      {feedOptions.map((option) => (
        <FieldWrapper key={option.id}>
          <RadioButton
            name="feedType"
            option={option}
            parameter={feedType}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFeedType(e.target.value as FeedType)}
          />
          <Input
            data-testid={`${option.id}-input`}
            value={option.id === feedType ? feedFactor : ''}
            type="number"
            min="0.01"
            step="0.01"
            required
            disabled={option.id !== feedType}
            placeholder={option.placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFeedFactor(Number(e.target.value))}
          />
        </FieldWrapper>
      ))}
    </>
  );
};
