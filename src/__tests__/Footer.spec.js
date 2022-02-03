import React from "react";
import renderer from "react-test-renderer";
import Footer from "../App/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "jest-styled-components";

test("Footer rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Footer />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});