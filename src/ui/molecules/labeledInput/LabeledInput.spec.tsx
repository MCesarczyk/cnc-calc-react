import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';
import { LabeledInput } from './LabeledInput';

const setup = (value: string = '', placeholder?: string) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <LabeledInput
        inputName="velocity"
        name={'Velocity'}
        placeholder={placeholder}
        value={value}
        onChange={jest.fn()}
      />
    </ThemeProvider>,
  );

  const input = utils.getByLabelText('Velocity');

  return {
    input,
    ...utils,
  };
};

test('Input component should display placeholder in case of no value', () => {
  const { input } = setup('', 'Lorem ipsum');
  expect((input as HTMLInputElement).placeholder).toBe('Lorem ipsum');
});

test('Input component should display controlling value from props', () => {
  const { input } = setup('123', 'Lorem ipsum');
  expect((input as HTMLInputElement).value).toBe('123');
});
