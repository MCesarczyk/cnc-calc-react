import { Label } from '../../ui/atoms/Label';
import { TextSub } from '../TextSub/TextSub';
import { Select } from '../Select/Select';
import { FieldWrapper } from 'ui/atoms/FieldWrapper';

interface FormSelectProps {
  name: string;
  sub?: string;
  unit?: string;
  id: string;
  value: string;
  data: any[];
  onChange: any;
}

export const FormSelect = ({ name, sub, unit, id, value, data, onChange }: FormSelectProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label htmlFor={id}>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Select id={id} value={value} onChange={onChange}>
        {data.map((item) => (
          <option key={item.key}>{item.value}</option>
        ))}
      </Select>
    </FieldWrapper>
  );
};
