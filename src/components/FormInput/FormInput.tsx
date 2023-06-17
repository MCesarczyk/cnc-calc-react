import { FieldWrapper } from '../FieldWrapper';
import { Input } from '../Input';
import { TextSub } from '../TextSub/TextSub';
import { Label } from '../Label';
import { ChangeEvent } from 'react';

interface FormInputProps {
  name: string;
  sub?: string;
  unit?: string;
  inputRef?: any;
  value: string;
  min?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  name,
  sub,
  unit,
  inputRef,
  value,
  min,
  step,
  placeholder,
  disabled,
  readOnly,
  autoFocus,
  onChange,
}: FormInputProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Input
        ref={inputRef}
        value={value}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
        required
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
