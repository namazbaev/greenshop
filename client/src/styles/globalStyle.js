import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    * {
        @import url('./font.css');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cera Pro", sans-serif;
    }
    :root {
        --gray:#FBFBFB;
        --green:#46A358;
        --bold-color: #3D3D3D;
        --text-color: #727272;
        --shadow-color: #C2C3C4;
    }
`