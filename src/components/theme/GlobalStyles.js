// src/theme/GlobalStyles.js

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 16px;
}

@media (min-width: 1024px) {
  html {
    font-size: 19px;
  }
}

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }
`;