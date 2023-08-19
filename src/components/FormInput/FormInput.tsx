import { TextSub } from '../../ui/atoms/textSub';
import { Label } from '../../ui/atoms/label';
import { ChangeEvent } from 'react';
import { Input } from 'ui/atoms/input';
import { FieldWrapper } from 'ui/atoms/fieldWrapper';

interface FormInputProps {
  inputName: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  sub?: string;
  unit?: string;
  inputRef?: any;
  min?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export const FormInput = ({
  inputName,
  name,
  value,
  onChange,
  sub,
  unit,
  inputRef,
  min,
  step,
  placeholder,
  disabled,
  autoFocus,
}: FormInputProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label htmlFor={inputName}>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Input
        ref={inputRef}
        name={inputName}
        id={inputName}
        value={value}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
        required
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
