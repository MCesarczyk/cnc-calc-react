import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import { Select, InputLabelText } from "./styled";
import { FieldWrapper } from "../FieldWrapper";

test("FormSelect component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FieldWrapper>
        <InputLabelText></InputLabelText>
        <Select />
      </FieldWrapper>
    </ThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});