import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Title } from 'ui/atoms/title';

test('Title text should be rendered in app', () => {
  const { container, getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Title title={'Lorem ipsum'} url={'home'} />
      </BrowserRouter>
    </ThemeProvider>,
  );

  expect(container).toHaveTextContent('Lorem ipsum');
  const title = getByText('Lorem ipsum');
  expect(title.parentElement!).toHaveAttribute('href', '/home');
});

test('Home link changes style on action', () => {
  const homeLinkComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Title title={''} url={'#'} />
      </BrowserRouter>
    </ThemeProvider>,
  );

  const homeLink = homeLinkComponent.toJSON();

  expect(homeLink).toHaveStyleRule('filter', 'brightness(0.8)', {
    modifier: ':hover',
  });

  expect(homeLink).toHaveStyleRule('filter', 'unset', {
    modifier: ':active',
  });

  expect(homeLink).toHaveStyleRule('outline', 'none', {
    modifier: ':focus',
  });
});
