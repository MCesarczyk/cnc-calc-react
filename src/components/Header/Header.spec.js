import React from "react";
import renderer from "react-test-renderer";
import Header from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";
import { MenuIconWrapper } from "./MenuIcon/styled";

test("Header rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );

  let header = component.toJSON();
  expect(header).toMatchSnapshot();
});

test("MenuIcon changes style on action", () => {
  const iconComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <MenuIconWrapper />
    </ThemeProvider>
  );

  let icon = iconComponent.toJSON();

  expect(icon).toHaveStyleRule('filter', 'brightness(0.8)', {
    modifier: ':hover'
  });

  expect(icon).toHaveStyleRule('filter', 'unset', {
    modifier: ':active'
  });

  expect(icon).toHaveStyleRule('outline', 'none', {
    modifier: ':focus'
  });
});