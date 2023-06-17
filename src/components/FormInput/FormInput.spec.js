import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Input } from '../Input';
import { FormInput } from './FormInput';

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormInput />
    </ThemeProvider>,
  );

test('Input component should be empty initially', () => {
  const input = setup().getByRole('spinbutton');
  expect(input.value).toBe('');
});

test('Input component should display changed value of state variable', () => {
  const input = setup().getByRole('spinbutton');
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
});

test("Input component shouldn't allow to input letters", () => {
  const input = setup().getByRole('spinbutton');
  fireEvent.change(input, { target: { value: 'Qwerty' } });
  expect(input.value).toBe('');
});

test('FormInput component rendering properly', () => {
  const input = renderer.create(
    <ThemeProvider theme={theme}>
      <FormInput />
    </ThemeProvider>,
  );

  let tree = input.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Input component change style on actions', () => {
  const input = renderer.create(
    <ThemeProvider theme={theme}>
      <Input />
    </ThemeProvider>,
  );

  let tree = input.toJSON();

  expect(tree).toHaveStyleRule('background-color', 'beige', {
    modifier: ':invalid',
  });

  expect(tree).toHaveStyleRule('background-color', '#ddd', {
    modifier: ':disabled',
  });
});
