import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  html {
    box-sizing: border-box;
    background-color: ${props => props.theme.bg};
  }
  body {
    font-size: 100%;
    font-family: 'Nunito Sans', sans-serif;
    padding: 0px;
    margin: 0px;
    max-width: 1920px;
    margin: 0 auto;
  }
  *, *::before, *::after {
	  box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`