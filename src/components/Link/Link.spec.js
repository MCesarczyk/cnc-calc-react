import React from "react";
import renderer from "react-test-renderer";
import Link from ".";
import "jest-styled-components";

test("Link with states rendering properly", () => {
  const component = renderer.create(
    <Link />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});