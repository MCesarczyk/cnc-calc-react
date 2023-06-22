import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import LanguageContext from 'features/language/context';
import NavigationContext from 'features/navigation/context';
import { Header } from './Header';
import { Title } from './Title';
import { MenuIconWrapper } from 'components/Header/MenuIcon';
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

test('MenuIcon changes style on action', () => {
  const iconComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <MenuIconWrapper />
    </ThemeProvider>,
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

test('Home link changes style on action', () => {
  const homeLinkComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Title title={''}  />
      </BrowserRouter>
    </ThemeProvider>,
  );

  const homeLink = homeLinkComponent.toJSON();

  expect(homeLink).toHaveStyleRule('filter', 'brightness(0.8)', {
    modifier: ':hover',
  });

  expect(homeLink).toHaveStyleRule('filter', 'unset', {
    modifier: ':active',
  });

  expect(homeLink).toHaveStyleRule('outline', 'none', {
    modifier: ':focus',
  });
});
