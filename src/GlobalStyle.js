import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  color: #1E3246;
  background-color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.15;
  font-family: 'Ubuntu', sans-serif;
  min-width: 248px;
}

button, a {
    cursor: pointer;
}

a {
  text-decoration: none;
}
`;