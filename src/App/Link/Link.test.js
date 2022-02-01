import React from "react";
import renderer, { act } from "react-test-renderer";
import Link from ".";

test("Link changes class when hovered", () => {
  const component = renderer.create(
    <Link
      adress="mailto:michal.cesarczyk@gmail.com"
    >
      Michał&nbsp;Cesarczyk
    </Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});