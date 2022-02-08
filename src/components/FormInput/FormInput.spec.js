import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { FieldWrapper, Input, InputLabelText } from "./styled";

test("FormInput component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FieldWrapper>
        <InputLabelText></InputLabelText>
        <Input />
      </FieldWrapper>
    </ThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("FormInput changed styles based on status", () => {
  const input = renderer.create(
    <ThemeProvider theme={theme}>
      <Input />
    </ThemeProvider>
  );

  let subtree = input.toJSON();

  expect(subtree).toHaveStyleRule('background-color', 'beige', {
    modifier: ':invalid'
  })
  expect(subtree).toHaveStyleRule('background-color', '#ddd', {
    modifier: ':disabled'
  })
});