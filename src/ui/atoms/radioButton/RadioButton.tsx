import { ChangeEvent, CSSProperties } from 'react';
import styled from 'styled-components';

import { FeedOption } from 'types';
import { TextSub } from 'ui/atoms/textSub';
import { Input } from 'ui/atoms/input';

export type RadioButtonVariants = 'DEFAULT';

type RadioButtonStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {
    disabledText?: CSSProperties['color'];
    disabledBackgroundColor?: CSSProperties['backgroundColor'];
  }
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<RadioButtonVariants, RadioButtonStyles> = {
  DEFAULT: {
    color: 'primaryText',
    backgroundColor: 'elementBackground',
    borderColor: 'primary',
    disabledText: 'disabledText',
    disabledBackgroundColor: 'disabledBackground',
  },
};

interface RadioButtonProps {
  name: string;
  option: FeedOption;
  parameter: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ name, option, parameter, disabled, onChange }: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <Input
        type="radio"
        name={name}
        id={option?.id}
        data-testid={`${option?.id}-radio`}
        value={option?.id}
        checked={parameter === option?.id}
        disabled={disabled}
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

const RadioButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    align-self: flex-start;
  }
`;

RadioButton.defaultProps = {};

RadioButton.displayName = 'RadioButton';
