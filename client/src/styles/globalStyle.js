import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cera Pro", sans-serif;
    }
    html, body {
        max-width: 1280px;
        margin: 0 auto;
    }
    :root {
        --gray:#FBFBFB;
        --green:#46A358;
        --bold-color: #3D3D3D;
        --text-color: #727272;
        --shadow-color: #C2C3C4;
        --green-border: 1px solid rgba(70, 163, 88, 0.2);
    }
`