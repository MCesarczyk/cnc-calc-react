import { TextSub } from "../TextSub";
import { RadioButtonWrapper } from "./styled";

interface RadioButtonProps {
  name: string;
  option: {
    id: string;
    name: string;
    sub: string;
    unit: string;
  };
  parameter: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  name,
  option,
  parameter,
  onChange,
}: RadioButtonProps) => (
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
      <TextSub>{option?.sub}</TextSub>
      {option?.unit}
    </label>
  </RadioButtonWrapper>
);

export default RadioButton;
