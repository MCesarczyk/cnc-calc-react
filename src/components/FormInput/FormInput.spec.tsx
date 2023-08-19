import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { FormInput } from './FormInput';

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormInput inputName="" name={''} value={''} onChange={() => {}} />
    </ThemeProvider>,
  );

test('Input component should be empty initially', () => {
  const input = setup().getByRole('spinbutton');
  // @ts-ignore
  expect(input.value).toBe('');
});

test('Input component should display changed value of state variable', () => {
  const input = setup().getByRole('spinbutton');
  fireEvent.change(input, { target: { value: '123' } });
  // @ts-ignore
  expect(input.value).toBe('');
});

test("Input component shouldn't allow to input letters", () => {
  const input = setup().getByRole('spinbutton');
  fireEvent.change(input, { target: { value: 'Qwerty' } });
  // @ts-ignore
  expect(input.value).toBe('');
});

test('FormInput component rendering properly with styles', () => {
  const input = renderer.create(
    <ThemeProvider theme={theme}>
      <FormInput inputName="" name={''} value={''} onChange={() => {}} />
    </ThemeProvider>,
  );

  let tree = input.toJSON();

  expect(tree).toMatchSnapshot();
});
