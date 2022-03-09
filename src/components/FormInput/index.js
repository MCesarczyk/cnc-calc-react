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
  min,
  step,
  placeholder,
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