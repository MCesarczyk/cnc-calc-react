import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../theme';
import 'jest-styled-components';
import { createRoutesList } from '../../../assets/utils/createRoutesList';
import NavigationList from './List';
import { Item } from './List/styled';
import Form from '../../../components/Form';
import LanguageContext from '../../language/context';

const renderList = (routes) => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationList routes={routes} />
      </BrowserRouter>
    </ThemeProvider>,
  );
};

const langId = 0;
const routes = createRoutesList(langId);

const testNavlinkLabels = (langId) => {
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
  testNavlinkLabels(0);
});

test('Navigation list should render all Navlinks for PL language', () => {
  testNavlinkLabels(1);
});

test('Each Navlink should lead to proper path', () => {
  renderList(routes);

  const form = render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={langId}>
        <Form />
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
