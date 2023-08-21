import { ChangeEvent } from 'react';

import { FeedOption, FeedType } from 'types';
import { FieldWrapper } from 'ui/atoms/fieldWrapper';
import { RadioButton } from 'ui/atoms/radioButton';
import { Input } from 'ui/atoms/input';

interface FeedOptionSelectorProps {
  feedOptions: FeedOption[];
  feedType: FeedType;
  setFeedType: (value: FeedType) => void;
  feedFactor: string | undefined;
  setFeedFactor: (value: number) => void;
}

export const FeedOptionSelector = ({
  feedOptions,
  feedType,
  setFeedType,
  feedFactor,
  setFeedFactor,
}: FeedOptionSelectorProps) => (
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
