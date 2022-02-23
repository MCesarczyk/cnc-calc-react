import { FieldWrapper } from "../../../components/FieldWrapper";
import { TextSub } from "../../../components/TextSub";
import { Label } from "../../../components/Label";
import { Result } from "./styled";

const ResultField = ({
  name,
  sub,
  unit,
  value,
  placeholder
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
      <Result placeholder={value.length === 0 ? 'placeholder' : ''}>
        {value ? value : placeholder}
      </Result>
    </FieldWrapper>
  )
};

export default ResultField;