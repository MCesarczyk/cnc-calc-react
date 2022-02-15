import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";
import { MenuIconWrapper } from "./MenuIcon/styled";
import { AppBar, Headline, HomeLink } from "./styled";
import MenuIcon from "./MenuIcon";

test("Header rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <AppBar>
          <MenuIcon />
          <HomeLink to="/">
            <Headline />
          </HomeLink>
        </AppBar>
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

test("Home link changes style on action", () => {
  const homeLinkComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <MenuIconWrapper />
    </ThemeProvider>
  );

  let homeLink = homeLinkComponent.toJSON();

  expect(homeLink).toHaveStyleRule('filter', 'brightness(0.8)', {
    modifier: ':hover'
  });

  expect(homeLink).toHaveStyleRule('filter', 'unset', {
    modifier: ':active'
  });

  expect(homeLink).toHaveStyleRule('outline', 'none', {
    modifier: ':focus'
  });
});