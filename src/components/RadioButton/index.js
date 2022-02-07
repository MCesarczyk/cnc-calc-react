import { TextSub } from "../TextSub";

const RadioButton = ({name, option, parameter, onChange}) => (
  <>
    <input
      type="radio"
      name={name}
      id={option?.id}
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
  </>
);

export default RadioButton;