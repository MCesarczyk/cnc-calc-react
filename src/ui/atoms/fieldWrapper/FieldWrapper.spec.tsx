import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
<<<<<<<< HEAD:src/ui/atoms/fieldWrapper/FieldWrapper.spec.tsx
========
import { Label } from 'ui/atoms/label';
import { Input } from 'ui/atoms/input';
>>>>>>>> main:src/features/clipboard/ResultField/ResultField.spec.tsx
import { FieldWrapper } from 'ui/atoms/fieldWrapper';

test('Text sub rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <FieldWrapper />
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
