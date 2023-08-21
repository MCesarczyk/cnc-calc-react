import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';
import { ResultField } from 'ui/molecules/resultField/ResultField';

test('ResultField component rendering properly', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ResultField name="f" unit="[mm/min]" value="1001" placeholder="Feedrate" sub="t" />
    </ThemeProvider>,
  );

  expect(container).toHaveTextContent('ft[mm/min]1001');
});

test('ResultField should have proper placeholder', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ResultField name="f" unit="[mm/min]" value={undefined} placeholder="Feedrate" sub="t" />
    </ThemeProvider>,
  );

  expect(container).toHaveTextContent('Feedrate');
});
