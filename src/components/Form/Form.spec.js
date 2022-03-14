import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { FieldsContainer } from "./styled";
import { ButtonsContainer, FooterButton } from "./Footer/styled";

test("Fields container should have smaller gap on smallest mobile screen", () => {
  const containerComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <FieldsContainer />
    </ThemeProvider>
  );

  const container = containerComponent.toJSON();
  expect(container).toHaveStyleRule('gap', '1rem');
  expect(container).toHaveStyleRule('gap', '0.5rem', {
    media: '(max-width:480px)'
  });
});

test("Buttons change direction to column on mobile", () => {
  const buttonsContainerComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <ButtonsContainer />
    </ThemeProvider>
  );

  const buttonsContainer = buttonsContainerComponent.toJSON();
  expect(buttonsContainer).toHaveStyleRule('flex-direction', 'column', {
    media: '(max-width:480px)'
  });

  expect(buttonsContainer).toHaveStyleRule('align-items', 'stretch', {
    media: '(max-width:480px)'
  });
});

test("Form Button with states rendering properly", () => {
  const buttonComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <FooterButton />
    </ThemeProvider>
  );

  let button = buttonComponent.toJSON();
  expect(button).toMatchSnapshot();

  expect(button).toHaveStyleRule('filter', 'brightness(150%)', {
    modifier: ':hover'
  });

  expect(button).toHaveStyleRule('filter', 'brightness(200%)', {
    modifier: ':active'
  });

  expect(button).toHaveStyleRule('border-color', 'currentColor', {
    modifier: ':active'
  });
});