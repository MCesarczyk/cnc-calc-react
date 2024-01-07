import { fireEvent, screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import languages from 'assets/fixtures/languages';
import { theme } from 'theme';
import LanguageContext from '../context';
import LanguageSwitcher from '.';
import { SwitcherButton } from './Button/styled';
import Button from './Button';
import { Language, LanguageState } from '~/features/language/types';

let langId = 'EN';
const setLangId = (id: string) => (langId = id);

const switcherSetup = () =>
  render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId, setLangId } as LanguageState}>
        <LanguageSwitcher />
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

const buttonSetup = (currentLangId: Language) => {
  const language = languages[currentLangId];

  return render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId, setLangId } as LanguageState}>
        <Button language={{ key: language.key as Language, flag: language.flag }} />
      </LanguageContext.Provider>
    </ThemeProvider>,
  );
};

test('Language switcher should render button for every language', () => {
  switcherSetup();

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toEqual(Object.values(languages).length);
});

test('Button sets proper language on click', () => {
  switcherSetup();

  expect(langId).toBe('EN');
  const button_EN = screen.getByText('EN');
  const button_PL = screen.getByText('PL');
  fireEvent.click(button_PL);
  expect(langId).toBe('PL');
  fireEvent.click(button_PL);
  expect(langId).toBe('PL');
  fireEvent.click(button_EN);
  expect(langId).toBe('EN');
  fireEvent.click(button_EN);
  expect(langId).toBe('EN');
});

test.skip('Active button should have light border', () => {
  buttonSetup('EN');

  const activeButtonItem = screen.getByRole('button');
  expect(activeButtonItem).toHaveStyle({ 'border-color': '#fff' });
});

test.skip('Inactive button should have dark border', () => {
  buttonSetup('PL');

  const inactiveButtonItem = screen.getByRole('button');
  expect(inactiveButtonItem).toHaveStyle({ 'border-color': '#1e3246' });
});

test('Basic button should render properly', () => {
  const buttonItem = renderer.create(
    <ThemeProvider theme={theme}>
      <SwitcherButton />
    </ThemeProvider>,
  );

  let buttonView = buttonItem.toJSON();
  expect(buttonView).toMatchSnapshot();
});
