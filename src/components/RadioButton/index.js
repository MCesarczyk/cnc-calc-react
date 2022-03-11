import { TextSub } from "../TextSub";
import { RadioButtonWrapper } from "./styled";

const RadioButton = ({ name, option, parameter, onChange }) => (
  <RadioButtonWrapper>
    <input
      type="radio"
      name={name}
      id={option?.id}
      data-testid={`${option?.id}-radio`}
      value={option?.id}
      checked={parameter === option?.id}
      onChange={onChange}
    />
    <label htmlFor={option?.id}>
      {option?.name}
      <TextSub>
        {option?.sub}
      </TextSub>
      {option?.unit}
    </label>
  </RadioButtonWrapper>
);

export default RadioButton;