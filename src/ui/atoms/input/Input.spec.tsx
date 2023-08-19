import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Input } from './Input';

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
