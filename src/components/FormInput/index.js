import { FieldWrapper } from "../FieldWrapper";
import { Input } from "../Input";
import { TextSub } from "../TextSub";
import { Label } from "../Label";

const FormInput = ({
  name,
  sub,
  unit,
  inputRef,
  value,
  type,
  min,
  step,
  placeholder,
  required,
  disabled,
  readOnly,
  autoFocus,
  onChange
}) => {
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
        type={type}
        min={min}
        step={step}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </FieldWrapper>
  )
};

export default FormInput;