import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/GlobalStyle';
import { theme } from '../src/theme';

interface ProviderProps {
  children?: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
