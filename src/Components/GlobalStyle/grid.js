import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    @media screen and(max-width:850px) {
        display: grid;
        height: 100vh;
        width: 100vw;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const Left = styled.div`
    grid-row: 1 / span 6;
    grid-column: 1 / span 5;
    @media screen and (max-width: 850px) {
        grid-row: 1 / span 6;
        grid-column: 1 / span 6;
    }
`;

export const Right = styled.div`
    width: 30vw;
    height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
    grid-row: 1;
    grid-column: 6;
    @media screen and (max-width: 850px) {
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
        grid-row: 3 / span 6;
        grid-column: 1 / span 6;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: none;
        width: 0;
        height: 0;
    }
    ::-webkit-scrollbar-thumb {
        background: white;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
