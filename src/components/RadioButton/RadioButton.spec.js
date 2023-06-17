import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import 'jest-styled-components';
import RadioButton from '.';

test('Radio button rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <RadioButton />
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
