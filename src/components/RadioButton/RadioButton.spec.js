import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
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
