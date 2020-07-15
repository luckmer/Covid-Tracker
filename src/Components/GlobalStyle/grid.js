import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

export const Left = styled.div`
    grid-column: 1 / span 4;
`;
