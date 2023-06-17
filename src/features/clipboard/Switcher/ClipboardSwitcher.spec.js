import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import LanguageContext from 'features/language/context';
import ClipboardContext from '../context';
import { theme } from 'theme';
import { ClipboardSwitcher } from './ClipboardSwitcher';

let langId = 'EN';
const setLangId = (id) => (langId = id);

let memoryMode = false;
const setMemoryMode = (value) => (memoryMode = value);

const switcherSetup = (memoryMode) =>
  render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId, setLangId }}>
        <ClipboardContext.Provider value={{ memoryMode, setMemoryMode }}>
          <ClipboardSwitcher />
        </ClipboardContext.Provider>
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

test('Clipboard switcher should render properly', () => {
  switcherSetup(false);

  const switcher = screen.getByLabelText(/Memory mode/ || /Tryb zapamiętywania/);
  expect(switcher).toBeInTheDocument();
});

test.skip('Clipboard switcher should be grey and in left position when off', () => {
  switcherSetup(false);

  const button = screen.getByRole('button');
  expect(button.firstChild).toHaveStyle({ 'background-color': '#d9d9d9' });
});

test.skip('Clipboard switcher should be darkblue and in right position when on', () => {
  switcherSetup(true);

  const button = screen.getByRole('button');
  expect(button.firstChild).toHaveStyle({ 'background-color': '#1E3246' });
  expect(button.firstChild).toHaveStyle({ transform: 'translateX(1.2rem)' });
});

test("Clipboard switcher should toggle state 'ON' of 'memoryMode' variable", () => {
  memoryMode = false;
  const setMemoryMode = (payload) => (memoryMode = payload);

  switcherSetup(memoryMode, setMemoryMode);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(memoryMode).toBe(true);
});

test("Clipboard switcher should toggle state 'OFF' of 'memoryMode' variable", () => {
  memoryMode = true;
  const setMemoryMode = (payload) => (memoryMode = payload);

  switcherSetup(memoryMode, setMemoryMode);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(memoryMode).toBe(false);
});
