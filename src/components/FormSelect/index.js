import { FieldWrapper } from "../FieldWrapper";
import { Label } from "../Label";
import { TextSub } from "../TextSub";
import { Select } from "../Select";

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
      <Label>
        <label htmlFor={id}>
          {name}
          <TextSub>
            {sub}
          </TextSub>
          {unit}
        </label>
      </Label>
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