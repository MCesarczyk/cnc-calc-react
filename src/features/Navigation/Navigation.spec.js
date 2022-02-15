import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { Item, List } from "./styled";
import { BrowserRouter } from "react-router-dom";

test("Navigation list rendered properly", () => {
  const listComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <List />
    </ThemeProvider>
  );

  let list = listComponent.toJSON();
  expect(list).toMatchSnapshot();
});

test("List item rendered properly", () => {
  const listItemComponent = renderer.create(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Item to="#" />
      </BrowserRouter>
    </ThemeProvider>
  );

  let item = listItemComponent.toJSON();
  expect(item).toMatchSnapshot();
});