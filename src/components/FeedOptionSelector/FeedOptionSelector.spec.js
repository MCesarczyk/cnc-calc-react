import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import RadioButton from "../RadioButton";
import { RadioButtonContainer } from "./styled";
import { Input } from "../Input";
import { FieldWrapper } from "../FieldWrapper";

test("FeedOptionSelector component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FieldWrapper>
        <RadioButtonContainer>
          <RadioButton />
        </RadioButtonContainer>
        <Input />
      </FieldWrapper>
    </ThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});