import { FieldWrapper } from "../../../components/FieldWrapper";
import { TextSub } from "../../../components/TextSub";
import { Label } from "../../../components/Label";
import { Result, ResultCopyButton, ResultWrapper } from "./styled";

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
      <ResultWrapper>
        <Result placeholder={value.length == 0}>
          {value ? value : placeholder}
        </Result>
        <ResultCopyButton
          type="button"
        >
          Copy
        </ResultCopyButton>
      </ResultWrapper>
    </FieldWrapper>
  )
};

export default ResultField;