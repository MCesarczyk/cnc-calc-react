import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import Home from ".";

test("Home component rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});