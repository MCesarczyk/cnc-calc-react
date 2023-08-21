import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { Footer } from './Footer';
import { Link } from 'ui/atoms/link';

test('Footer contains link to author homepage', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer date={1410} url="www.uvonjungingen.com" label="Ulrich von Jungingen" />
    </ThemeProvider>,
  );

  const content = screen.getByText(/Copyright/i);
  expect(content).toBeInTheDocument();

  const link = screen.getByRole('link');
  expect(link.innerHTML).toBe('Ulrich von Jungingen');
  expect(link).toHaveAttribute('href', 'www.uvonjungingen.com');
});

test('Link change style on hover', () => {
  const linkComponent = renderer.create(<Link href="#" />);

  let link = linkComponent.toJSON();
  expect(link).toHaveStyleRule('color', 'crimson', {
    modifier: ':hover',
  });
});
