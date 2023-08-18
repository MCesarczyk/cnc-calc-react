import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Button } from 'ui/atoms/button/Button';
import 'jest-styled-components';

test('Default Button with states rendering properly', () => {
  const buttonRender = renderer.create(
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>,
  );

  const button = buttonRender.toJSON();

  expect(button).toHaveStyleRule('color', '#fff');
  expect(button).toHaveStyleRule('background-color', '#1e3246');

  expect(button).toHaveStyleRule('filter', 'brightness(150%)', {
    modifier: ':hover',
  });

  expect(button).toHaveStyleRule('filter', 'brightness(100%)', {
    modifier: ':active',
  });

  expect(button).toHaveStyleRule('color', '#808080', {
    modifier: ':disabled',
  });
  expect(button).toHaveStyleRule('background-color', '#ddd', {
    modifier: ':disabled',
  });
});

test('Submit Button should have font color #19aa6e', () => {
  const buttonRender = renderer.create(
    <ThemeProvider theme={theme}>
      <Button $variant="SUBMIT" />
    </ThemeProvider>,
  );

  const button = buttonRender.toJSON();

  expect(button).toHaveStyleRule('color', '#19aa6e');
  expect(button).toHaveStyleRule('background-color', '#1e3246');
});

test('Reset Button should have font color #dc3223', () => {
  const buttonRender = renderer.create(
    <ThemeProvider theme={theme}>
      <Button $variant="RESET" />
    </ThemeProvider>,
  );

  const button = buttonRender.toJSON();

  expect(button).toHaveStyleRule('color', '#dc3223');
  expect(button).toHaveStyleRule('background-color', '#1e3246');
});
