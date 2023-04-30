import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /*dark mode*/
        --blue: hsl(246, 80%, 60%);
        --work: hsl(15, 100%, 70%);
        --play: hsl(195, 74%, 62%);
        --study: hsl(348, 100%, 68%);
        --exercise: hsl(145, 58%, 55%);
        --social: hsl(264, 64%, 52%);
        --selfcare: hsl(43, 84%, 65%);
        --verydarkblue: hsl(226, 43%, 10%);
        --darkblue: hsl(235, 46%, 20%);
        --desaturatedblue: hsl(235, 45%, 61%);
        --paleBlue: hsl(236, 100%, 87%);
        /*light mode*/
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #ffff;
        font-size: 18px;
        background: var(--verydarkblue);
    }
`;

export default GlobalStyle;
