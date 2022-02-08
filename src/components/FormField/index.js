import { TextSub } from "../TextSub";
import { InputLabelText, FormInput, FieldWrapper } from "./styled";

const FormField = ({
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
      <FormInput
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

export default FormField;