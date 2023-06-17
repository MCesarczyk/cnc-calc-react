import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Select } from './Select';

test('Select component rendering properly', () => {
  const select = renderer.create(
    <ThemeProvider theme={theme}>
      <Select />
    </ThemeProvider>,
  );

  let tree = select.toJSON();

  expect(tree).toMatchSnapshot();
});
