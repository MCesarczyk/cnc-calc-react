import { FieldWrapper } from "../../../components/FieldWrapper";
import { TextSub } from "../../../components/TextSub";
import { Label } from "../../../components/Label";
import { Result, ResultCopyButton, ResultWrapper } from "./styled";
import { useContext } from "react";
import ClipboardContext from "../context";

const ResultField = ({
  name,
  sub,
  unit,
  value,
  placeholder
}) => {
  const { setValues } = useContext(ClipboardContext);

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
        <Result placeholder={value.length === 0 ? 'placeholder' : ''}>
          {value ? value : placeholder}
        </Result>
        <ResultCopyButton
          type="button"
          onClick={() => setValues(value)}
        >
          Copy
        </ResultCopyButton>
      </ResultWrapper>
    </FieldWrapper>
  )
};

export default ResultField;