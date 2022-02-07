import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import Form from ".";

test("Form component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Form />
    </ThemeProvider>
  );

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot();
});