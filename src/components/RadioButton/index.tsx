import { ChangeEvent } from "react";

import { Input } from "../Input";
import { TextSub } from "../TextSub";
import { RadioButtonWrapper } from "./styled";

interface RadioButtonProps {
  name: string;
  option: {
    id: number;
    name: string;
    sub: string;
    unit: string;
  };
  parameter: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  name,
  option,
  parameter,
  onChange,
}: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <Input
        type="radio"
        name={name}
        id={option?.name}
        data-testid={`${option?.id}-radio`}
        value={option?.id}
        checked={parameter === option?.id}
        onChange={onChange}
      />
      <label htmlFor={option?.name}>
        {option?.name}
        <TextSub>{option?.sub}</TextSub>
        {option?.unit}
      </label>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
