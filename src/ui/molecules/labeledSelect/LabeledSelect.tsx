import { Label } from 'ui/atoms/label';
import { TextSub } from 'ui/atoms/textSub';
import { FieldWrapper } from 'ui/atoms/fieldWrapper';
import { Select } from 'ui/atoms/select';

interface FormSelectProps {
  name: string;
  sub?: string;
  unit?: string;
  id: string;
  value: string;
  data: any[];
  onChange: any;
  disabled?: boolean;
}

export const LabeledSelect = ({ name, sub, unit, id, value, data, onChange, disabled }: FormSelectProps) => {
  return (
    <FieldWrapper>
      <Label>
        <label htmlFor={id}>
          {name}
          <TextSub>{sub}</TextSub>
          {unit}
        </label>
      </Label>
      <Select id={id} value={value} onChange={onChange} disabled={disabled}>
        {data.map((item) => (
          <option key={item.key}>{item.value}</option>
        ))}
      </Select>
    </FieldWrapper>
  );
};
