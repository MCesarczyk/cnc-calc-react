import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Label } from 'ui/atoms/label';

test('Text sub rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Label />
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
