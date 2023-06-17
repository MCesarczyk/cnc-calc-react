import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import 'jest-styled-components';
import { Select } from '.';

test('Select component rendering properly', () => {
  const select = renderer.create(
    <ThemeProvider theme={theme}>
      <Select />
    </ThemeProvider>,
  );

  let tree = select.toJSON();

  expect(tree).toMatchSnapshot();
});
