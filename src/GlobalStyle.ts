import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

*:root {
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 18px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 16px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 14px;
  }
}

body {
  color: #1E3246;
  background-color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem 0.5rem;
  line-height: 1.15;
  font-family: 'Ubuntu', sans-serif;
  min-width: 248px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    overflow-y: scroll;
  }
}

button, a {
  cursor: pointer;
  color: inherit;
  outline: none;
}

a {
  text-decoration: none;
}
`;
