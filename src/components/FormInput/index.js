import { Input } from "../Input";
import { TextSub } from "../TextSub";
import { InputLabelText, FieldWrapper } from "./styled";

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
      <InputLabelText>
        <label>
          {name}
          <TextSub>
            {sub}
          </TextSub>
          {unit}
        </label>
      </InputLabelText>
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