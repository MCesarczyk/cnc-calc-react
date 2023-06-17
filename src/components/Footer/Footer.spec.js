import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Footer, FooterLink } from './Footer';

test('Footer contains link to author homepage', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  );

  const content = screen.getByText(/Copyright/i);
  expect(content).toBeInTheDocument();

  const link = screen.getByRole('link');
  expect(link.innerHTML).toBe('Cesarczyk.dev');
  expect(link).toHaveAttribute('href', 'https://home.cesarczyk.dev');
});

test('Footer rendered properly', () => {
  const footerComponent = renderer.create(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  );

  let footer = footerComponent.toJSON();
  expect(footer).toMatchSnapshot();
});

test('Link change style on hover', () => {
  const linkComponent = renderer.create(<FooterLink />);

  let link = linkComponent.toJSON();
  expect(link).toHaveStyleRule('color', 'crimson', {
    modifier: ':hover',
  });
});
