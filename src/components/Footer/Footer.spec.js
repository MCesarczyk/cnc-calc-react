import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Footer from ".";

test("Footer rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});