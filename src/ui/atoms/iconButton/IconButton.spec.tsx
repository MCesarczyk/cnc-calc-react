import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { IconButton } from 'ui/atoms/iconButton';

test('MenuIcon changes style on action', () => {
  const iconComponent = renderer.create(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <IconButton onClick={() => {}}>ICON</IconButton>
      </ThemeProvider>
    </BrowserRouter>,
  );

  const icon = iconComponent.toJSON();

  expect(icon).toHaveStyleRule('filter', 'brightness(0.8)', {
    modifier: ':hover',
  });

  expect(icon).toHaveStyleRule('filter', 'unset', {
    modifier: ':active',
  });

  expect(icon).toHaveStyleRule('outline', 'none', {
    modifier: ':focus',
  });
});
