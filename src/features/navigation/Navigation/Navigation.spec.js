import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../../../theme";
import "jest-styled-components";
import { createRoutesList } from "../../../assets/utils/createRoutesList";
import NavigationList from "./List";
import { Item } from "./List/styled";

const renderList = (routes) => {
  render(
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <NavigationList routes={routes} />
      </BrowserRouter>
    </ThemeProvider>
  )
};

const langId = 0;

const testNavlinkLabels = (langId) => {
  const routes = createRoutesList(langId);
  renderList(routes);

  const links = screen.getAllByRole('link');
  links.forEach((link, index) => {
    expect(link.innerHTML).toBe(routes[index].label);
  });
};

test("Navigation list rendered properly (default language: EN)", () => {
  const routes = createRoutesList(langId);
  renderList(routes);

  let list = screen.queryByRole('list');
  expect(list).toBeInTheDocument();
});

test("Navigation list should render all Navlinks for EN language", () => {
  testNavlinkLabels(0);
});

test("Navigation list should render all Navlinks for PL language", () => {
  testNavlinkLabels(1);
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

  expect(item).toHaveStyleRule('filter', 'brightness(1.5)', {
    modifier: ':hover'
  });

  expect(item).toHaveStyleRule('filter', 'brightness(1)', {
    modifier: ':active'
  });

  expect(item).toHaveStyleRule('transform', 'scale(0.98)', {
    modifier: ':active'
  });

  expect(item).toHaveStyleRule('color', '#2188FF', {
    modifier: '&.active'
  });
});