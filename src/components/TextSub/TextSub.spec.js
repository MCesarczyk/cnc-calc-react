import React from 'react';
import renderer from 'react-test-renderer';
import { TextSub } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import 'jest-styled-components';

test('Text sub rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <TextSub />
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
