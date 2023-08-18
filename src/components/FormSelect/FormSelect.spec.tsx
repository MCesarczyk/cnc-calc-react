import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { FormSelect } from './FormSelect';

const data = [
  { key: 0, value: '' },
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' },
  { key: 4, value: 'D' },
  { key: 5, value: 'E' },
  { key: 6, value: 'F' },
  { key: 7, value: 'G' },
  { key: 8, value: 'H' },
  { key: 9, value: 'I' },
];

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormSelect data={data} name={''} id={''} value={''} onChange={() => {}} />
    </ThemeProvider>,
  );

test('Select component should be empty initially', () => {
  const select = setup().getByRole('combobox');
  // @ts-ignore
  expect(select.value).toBe('');
});

test('Select component should display selected value', () => {
  const select = setup().getByRole('combobox');
  fireEvent.change(select, { target: { value: 'B' } });
  // @ts-ignore
  expect(select.value).toBe('');
  
  fireEvent.change(select, { target: { value: 'B' } });
  // @ts-ignore
  expect(select.value).toBe('');
  
  fireEvent.change(select, { target: { value: 'F' } });
  // @ts-ignore
  expect(select.value).toBe('');
});

test('FormSelect component rendering properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <FormSelect data={data} name={''} id={''} value={''} onChange={() => {}} />
    </ThemeProvider>,
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
