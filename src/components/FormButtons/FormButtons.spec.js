import React from "react";
import renderer from "react-test-renderer";
import FormButtons from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";

test("Form buttons rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FormButtons />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});