import styled, { css } from 'styled-components';

import { TextSub } from 'ui/atoms/textSub';
import { Label } from 'ui/atoms/label';
import { FieldWrapper } from 'ui/atoms/fieldWrapper';

interface ResultFieldProps {
  name: string;
  unit: string;
  value?: string;
  placeholder: string;
  sub?: string;
}

export const ResultField = ({ name, unit, value, placeholder, sub }: ResultFieldProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Result $placeholder={!value ? 'placeholder' : ''}>{value ? value : placeholder}</Result>
    </FieldWrapper>
  );
};

export const ResultWrapper = styled.div`
  display: flex;
  flex-basis: 16rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-basis: unset;
    width: 100%;
  }
`;

export const ResultCopyButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.copyButtonText};
  margin-left: 0.5rem;

  &:hover {
    filter: brightness(1.5);
  }

  &:active {
    filter: brightness(0.5);
  }
`;

const Result = styled.div<{$placeholder?: string}>`
  min-width: 16rem;
  border: solid 1px ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.color.primaryText};

  ${({ $placeholder }) =>
    $placeholder &&
    css`
      color: ${({ theme }) => theme.color.placeholder};
    `}
`;
