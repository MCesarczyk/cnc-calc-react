import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { FieldsContainer, Fieldset, FormWrapper, Legend } from "./styled";
import { ButtonsContainer } from "./Footer/styled";
import { FormButton } from "./Button";

test("Form component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FormWrapper>
        <Fieldset>
          <Legend />
          <FieldsContainer />
        </Fieldset>
      </FormWrapper>
    </ThemeProvider>
  );

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
});

test("Form Footer rendered properly", () => {
  const footerComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <ButtonsContainer />
    </ThemeProvider>
  );

  let footer = footerComponent.toJSON();
  expect(footer).toMatchSnapshot();
});

test("Form Button with states rendering properly", () => {
  const buttonComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <FormButton />
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