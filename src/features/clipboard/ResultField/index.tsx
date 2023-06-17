import React from 'react';

import { FieldWrapper } from '../../../components/FieldWrapper';
import { TextSub } from '../../../components/TextSub';
import { Label } from '../../../components/Label';
import { Result } from './styled';

interface ResultFieldProps {
  name: string;
  unit: string;
  value: string;
  placeholder: string;
  sub?: string;
}

const ResultField = ({ name, unit, value, placeholder, sub }: ResultFieldProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Result placeholder={!value ? 'placeholder' : ''}>{value ? value : placeholder}</Result>
    </FieldWrapper>
  );
};

export default ResultField;
