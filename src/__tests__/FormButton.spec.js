import React from "react";
import renderer from "react-test-renderer";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "jest-styled-components";
import { Button } from "../components/FormButtons/Button";

test("Form button with pseudostyles rendered properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <Button />
    </ThemeProvider>
  );

  let tree = component.toJSON()

  // expect(tree).toMatchSnapshot();
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