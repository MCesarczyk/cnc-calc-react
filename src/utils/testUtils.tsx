import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const testWithStylesAndRouter = (children: ReactNode, theme: any) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </BrowserRouter>
);

export const testWithStyles = (children: ReactNode, theme: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
