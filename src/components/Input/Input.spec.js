import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { Input } from ".";

test("Input component rendering properly", () => {
  const input = renderer.create(
    <ThemeProvider theme={theme} >
      <Input />
    </ThemeProvider>
  );
  
  let tree = input.toJSON();
  
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveStyleRule('background-color', 'beige', {
    modifier: ':invalid'
  })

  expect(tree).toHaveStyleRule('background-color', '#ddd', {
    modifier: ':disabled'
  })
});