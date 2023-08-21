import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Label } from 'ui/atoms/label';
import { Input } from 'ui/atoms/input';
import { FieldWrapper } from 'ui/atoms/fieldWrapper';

test('ResultField component rendering properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <FieldWrapper>
        <Label />
        <Input />
      </FieldWrapper>
    </ThemeProvider>,
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
