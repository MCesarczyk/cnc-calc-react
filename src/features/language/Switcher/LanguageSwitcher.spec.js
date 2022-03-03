import { fireEvent, screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import LanguageContext from "../context";
import languages from "../../../assets/fixtures/languages";
import LanguageSwitcher from ".";

let langId = 0;
const setLangId = id => langId = id;

const setup = () => render(
  <ThemeProvider theme={theme}>
    <LanguageContext.Provider value={{langId, setLangId}}>
      <LanguageSwitcher />
    </LanguageContext.Provider>
  </ThemeProvider>
);

test("Language switcher should render button for every language", () => {
  setup();

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toEqual(languages.length);
});

test("Button sets proper language on click", () => {
  setup();

  expect(langId).toBe(0);
  const button_EN = screen.getByText('EN');
  const button_PL = screen.getByText('PL');
  fireEvent.click(button_PL);
  expect(langId).toBe(1);
  fireEvent.click(button_PL);
  expect(langId).toBe(1);
  fireEvent.click(button_EN);
  expect(langId).toBe(0);
  fireEvent.click(button_EN);
  expect(langId).toBe(0);
});