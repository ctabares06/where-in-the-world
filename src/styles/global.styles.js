import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    font-size: 100%;
    font-family: 'Nunito Sans', sans-serif;
    padding: 0px;
    margin: 0px;
  }
  *, *::before, *::after {
	  box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }
`