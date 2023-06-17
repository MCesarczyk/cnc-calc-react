import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { MobileNavWrapper } from 'features/navigation/Navigation';
import { HomeTitle } from '.';

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
