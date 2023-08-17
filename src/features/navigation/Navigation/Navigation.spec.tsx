import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { createRoutesList } from 'utils/createRoutesList';
import LanguageContext from 'features/language/context';
import { Form } from 'components/Form';
import { NavigationList, Item } from './NavigationList';
import { theme } from 'theme';
import { FormEvent } from 'react';

const renderList = (routes: { id: number; path: string; label: string; }[] | undefined) => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationList routes={routes} />
      </BrowserRouter>
    </ThemeProvider>,
  );
};

const langId = 'EN';
const routes = createRoutesList(langId);

const testNavlinkLabels = (langId: string) => {
  // @ts-ignore
  const routes = createRoutesList(langId);
  renderList(routes);

  const links = screen.getAllByRole('link');
  links.forEach((link, index) => {
    expect(link.innerHTML).toBe(routes[index].label);
  });
};

test('Navigation list rendered properly (default language: EN)', () => {
  renderList(routes);

  let list = screen.queryByRole('list');
  expect(list).toBeInTheDocument();
});

test('Navigation list should render all Navlinks for EN language', () => {
  testNavlinkLabels('EN');
});

test('Navigation list should render all Navlinks for PL language', () => {
  testNavlinkLabels('PL');
});

test('Each Navlink should lead to proper path', () => {
  renderList(routes);

  const form = render(
    <ThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <LanguageContext.Provider value={langId}>
        <Form legend={''} children={undefined} onSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } onReset={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } />
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

  const surfaceSpeedView = form.queryByText(/Surface cutting speed/i);
  expect(surfaceSpeedView).toHaveAttribute('href', '/surface-speed');

  const toolRotationView = form.queryByText(/Tool rotational speed/i);
  expect(toolRotationView).toHaveAttribute('href', '/spindle-speed');

  const linearFeedrateView = form.queryByText(/Linear feedrate/i);
  expect(linearFeedrateView).toHaveAttribute('href', '/feedrate');

  const tappingView = form.queryByText(/Tapping feedrate/i);
  expect(tappingView).toHaveAttribute('href', '/tapping-feed');
});

test('List item rendered properly', () => {
  const listItemComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Item to="#" />
      </BrowserRouter>
    </ThemeProvider>,
  );

  let item = listItemComponent.toJSON();
  expect(item).toMatchSnapshot();

  expect(item).toHaveStyleRule('filter', 'brightness(1.5)', {
    modifier: ':hover',
  });

  expect(item).toHaveStyleRule('filter', 'brightness(1)', {
    modifier: ':active',
  });

  expect(item).toHaveStyleRule('transform', 'scale(0.98)', {
    modifier: ':active',
  });

  expect(item).toHaveStyleRule('color', '#2188FF', {
    modifier: '&.active',
  });
});
