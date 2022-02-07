import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import "jest-styled-components";
import { Button } from ".";

test("Form button with states rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Button />
    </ThemeProvider>
  );

  let tree = component.toJSON()

  expect(tree).toHaveStyleRule('filter', 'brightness(150%)', {
    modifier: ':hover'
  })
  expect(tree).toHaveStyleRule('filter', 'brightness(200%)', {
    modifier: ':active'
  })
  expect(tree).toHaveStyleRule('border-color', 'currentColor', {
    modifier: ':active'
  })
});