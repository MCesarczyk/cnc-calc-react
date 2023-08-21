import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { LabeledSelect } from './LabeledSelect';
import { data } from './fixtures';

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <LabeledSelect data={data} name={''} id={''} value={''} onChange={() => {}} />
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
  expect((select as HTMLSelectElement).value).toBe('');
  
  fireEvent.change(select, { target: { value: 'B' } });
  expect((select as HTMLSelectElement).value).toBe('');
  
  fireEvent.change(select, { target: { value: 'F' } });
  expect((select as HTMLSelectElement).value).toBe('');
});

test('FormSelect component rendering properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <LabeledSelect data={data} name={''} id={''} value={''} onChange={() => {}} />
    </ThemeProvider>,
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
