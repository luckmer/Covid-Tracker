import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

html,body{
    background-color: #161616;
    color: #e0fbfc;
    width:100vw;
    height:100vh;
}

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
`;

export default globalStyle;
