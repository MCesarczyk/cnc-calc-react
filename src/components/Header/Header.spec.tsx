import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';
import LanguageContext from 'features/language/context';
import NavigationContext from 'features/navigation/context';
import { Header } from './Header';
import { Language } from 'features/language/types';

const setup = (langId: Language, open: boolean) =>
  render(
    <ThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <LanguageContext.Provider value={langId}>
      {/* @ts-ignore */}
        <NavigationContext.Provider value={open}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </NavigationContext.Provider>
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

test('Title leads to root location', () => {
  const langId = 'EN';
  const open = false;

  setup(langId, open);

  const title = screen.getByRole('link');
  expect(title).toHaveAttribute('href', '/');
});
