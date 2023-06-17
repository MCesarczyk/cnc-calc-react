import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from 'theme';
import LanguageContext from 'features/language/context';
import { FieldsContainer } from './styled';
import { ButtonsContainer, FooterButton } from './Footer/styled';
import Form from '.';

const formSetup = (langId) =>
  render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId }}>
        <Form />
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

test('Both buttons have proper type', () => {
  const langId = 0;
  const types = ['submit', 'reset'];

  formSetup(langId);

  const buttons = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.type).toBe(types[index]));
});

test('Both buttons are displayed with correct names for language: EN', () => {
  const langId = 0;
  const labels = ['Calculate', 'Reset'];

  formSetup(langId);

  const buttons = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.innerHTML).toBe(labels[index]));
});

test('Both buttons are displayed with correct names for language: PL', () => {
  const langId = 1;
  const labels = ['Oblicz', 'Wyczyść'];

  formSetup(langId);

  const buttons = screen.getAllByRole('button');
  buttons.forEach((button, index) => expect(button.innerHTML).toBe(labels[index]));
});

test('Form Buttons with states rendering properly', () => {
  const buttonComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <FooterButton />
    </ThemeProvider>,
  );

  let button = buttonComponent.toJSON();
  expect(button).toMatchSnapshot();

  expect(button).toHaveStyleRule('filter', 'brightness(150%)', {
    modifier: ':hover',
  });

  expect(button).toHaveStyleRule('filter', 'brightness(200%)', {
    modifier: ':active',
  });

  expect(button).toHaveStyleRule('border-color', 'currentColor', {
    modifier: ':active',
  });
});
