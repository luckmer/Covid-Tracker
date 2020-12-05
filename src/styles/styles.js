import styled from "styled-components";

export const GraphStyle = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0 0 0 ;
  select {
      width: 30em;
      height: 2em;
      border: none; 
    background-color: #e8e8e8;
    color: #000000;
    @media screen and (max-width: 850px) {
      width: calc(100vw - 5vw);
    }
    ;
  }
`
