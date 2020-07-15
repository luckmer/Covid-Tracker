import styled from "styled-components";

export const Img = styled.img`
    width: 10vw;
    @media screen and (max-width: 850px) {
        width: 20vw;
    }
`;
export const Td = styled.td`
    display: flex;
    justify-content: center;
    width: 30vw;
    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: center;
        width: 100vw;
    }
`;
export const Th = styled.th`
    margin: 20px;
    @media screen and (max-width: 850px) {
        margin: 10px;
    }
`;
export const Tr = styled.th`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: flex-start;
    }
`;

export const Table = styled.table``;
