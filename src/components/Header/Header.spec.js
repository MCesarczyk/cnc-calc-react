import React from "react";
import renderer from "react-test-renderer";
import Header from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";

test("Header rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Header />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});