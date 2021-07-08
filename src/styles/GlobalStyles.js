import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        font-family: "Hind Siliguri", sans-serif;
        margin: 0;
        padding: 0;
        border: none;
    }
    a { 
        text-decoration: none;
    }
    body {
        font-size: 14px;
    }
`;

export default GlobalStyles;
