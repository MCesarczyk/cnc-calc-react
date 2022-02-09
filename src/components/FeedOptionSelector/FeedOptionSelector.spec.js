import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "jest-styled-components";
import RadioButton from "../RadioButton";
import { FormLabel, RadioButtonContainer } from "./styled";
import { Input } from "../Input";

test("FeedOptionSelector component rendering properly", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme} >
      <FormLabel>
        <RadioButtonContainer>
          <RadioButton />
        </RadioButtonContainer>
        <Input />
      </FormLabel>
    </ThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});