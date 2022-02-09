import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { FieldWrapper } from "../FieldWrapper";
import { Label } from "../Label";
import { Select } from "../Select";

test("FormSelect component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FieldWrapper>
        <Label />
        <Select />
      </FieldWrapper>
    </ThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});