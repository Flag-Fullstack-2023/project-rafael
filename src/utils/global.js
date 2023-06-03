import { createGlobalStyle } from "styled-components";
import { toRem } from "./mixins";
import { theme } from "../theme/theme";
export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


*,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    cursor: default;
    overflow-x: hidden;
  }

  main{
    margin: 0 auto;
    width: 100vw;
  }

  body {
    position: relative;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${toRem(16)};
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    color: black;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    outline: none;
    background: none;
  }

  input {
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    ::placeholder{
      color: ${theme.colors.lightGrey};
    }
  }

  p {margin-bottom: 1rem;}

h1 {
  margin-top: 0;
  font-size: 4.209rem;
}

h2 {font-size: 3.157rem;}

h3 {font-size: 2.369rem;}

h4 {font-size: 1.777rem;}

h5 {font-size: 1.333rem;}

small, .text_small {font-size: 0.75rem;}

  ul, ol li {
    list-style: none;
  }
    
a, a:hover, a:active, a:link, a:visited{
  text-decoration: none;
}
`;
