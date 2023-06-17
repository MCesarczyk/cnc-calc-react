import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FieldWrapper } from 'components/FieldWrapper';
import { Input } from 'components/Input';
import { Label } from 'components/Label';
import { theme } from '../theme';

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
