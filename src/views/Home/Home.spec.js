import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import 'jest-styled-components';
import { HomeTitle } from './styled';
import { MobileNavWrapper } from '../../features/navigation/Navigation/styled';

test('Home component rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HomeTitle />
        <MobileNavWrapper />
      </BrowserRouter>
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
