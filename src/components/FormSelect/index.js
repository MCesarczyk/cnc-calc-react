import { TextSub } from "../TextSub";
import { InputLabelText, FieldWrapper, Select } from "./styled";

const FormSelect = ({
  name,
  sub,
  unit,
  id,
  value,
  data,
  onChange
}) => {
  return (
    <FieldWrapper>
      <InputLabelText>
        <label htmlFor={id}>
          {name}
          <TextSub>
            {sub}
          </TextSub>
          {unit}
        </label>
      </InputLabelText>
      <Select
        id={id}
        value={value}
        onChange={onChange}
      >
        {
          data.map(item => (
            <option key={item.key}>
              {item.value}
            </option>
          ))
        }
      </Select>
    </FieldWrapper>
  )
};

export default FormSelect;