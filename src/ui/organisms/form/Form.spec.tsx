import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from 'theme';
import LanguageContext from 'features/language/context';
import { Form, FieldsContainer } from './Form';
import { Language } from 'features/language/types';
import { ButtonsContainer } from 'ui/organisms/form/FormFooter';

const setLangId = jest.fn();
const onReset = jest.fn();
const onSubmit = jest.fn();

const formSetup = (langId: Language) =>
  render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId,setLangId }}>
        <Form children legend='' onReset={onReset} onSubmit={onSubmit} />
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

test.skip('Fields container should have smaller gap on smallest mobile screen', () => {
  const containerComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <FieldsContainer />
    </ThemeProvider>,
  );

  const container = containerComponent.toJSON();
  expect(container).toHaveStyleRule('gap', '1rem');
  expect(container).toHaveStyleRule('gap', '0.5rem', {
    media: '(max-width:480px)',
  });
});

test.skip('Buttons change direction to column on mobile', () => {
  const buttonsContainerComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <ButtonsContainer />
    </ThemeProvider>,
  );

  const buttonsContainer = buttonsContainerComponent.toJSON();
  expect(buttonsContainer).toHaveStyleRule('flex-direction', 'column', {
    media: '(max-width:480px)',
  });

  expect(buttonsContainer).toHaveStyleRule('align-items', 'stretch', {
    media: '(max-width:480px)',
  });
});

test.skip('Both buttons have proper type', () => {
  const langId = 'EN';
  const types = ['submit', 'reset'];

  formSetup(langId);

  const buttons: HTMLButtonElement[] = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.type).toBe(types[index]));
});

test('Both buttons are displayed with correct names for language: EN', () => {
  const langId = 'EN';
  const labels = ['Calculate', 'Reset'];

  formSetup(langId);

  const buttons = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.innerHTML).toBe(labels[index]));
});

test('Both buttons are displayed with correct names for language: PL', () => {
  const langId = 'PL';
  const labels = ['Oblicz', 'Wyczyść'];

  formSetup(langId);

  const buttons = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.innerHTML).toBe(labels[index]));
});
