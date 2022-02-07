import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import Form from ".";
import { ButtonsContainer } from "./Footer/styled";

test("Form component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Form />
    </ThemeProvider>
  );

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot();
});

test("Form Footer rendered properly", () => {
  const subcomponent = renderer.create(
    <ThemeProvider theme={theme} >
      <ButtonsContainer />
    </ThemeProvider>
  );
  let subtree = subcomponent.toJSON();
  expect(subtree).toMatchSnapshot();
});