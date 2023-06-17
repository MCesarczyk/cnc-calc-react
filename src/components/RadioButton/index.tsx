import { ChangeEvent } from 'react';

import { Input } from '../Input';
import { TextSub } from '../TextSub';
import { RadioButtonWrapper } from './styled';
import { FeedOption } from 'types';

interface RadioButtonProps {
  name: string;
  option: FeedOption;
  parameter: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ name, option, parameter, onChange }: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <Input
        type="radio"
        name={name}
        id={option?.id}
        data-testid={`${option?.id}-radio`}
        value={option?.id}
        checked={parameter === option?.id}
        onChange={onChange}
      />
      <label htmlFor={option?.id}>
        {option?.name}
        <TextSub>{option?.sub}</TextSub>
        {option?.unit}
      </label>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
