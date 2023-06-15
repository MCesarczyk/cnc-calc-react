import { FieldWrapper } from "../FieldWrapper";
import { Input } from "../Input";
import { TextSub } from "../TextSub";
import { Label } from "../Label";

interface FormInputProps {
  name: string;
  sub?: string;
  unit?: string;
  inputRef?: any;
  value?: any;
  min?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  onChange?: any;
}

const FormInput = ({
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
  onChange
}:FormInputProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label>
          {name}
          <TextSub>
            {sub}
          </TextSub>
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
  )
};

export default FormInput;