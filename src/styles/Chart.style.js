import styled from "styled-components";

export const Graph = styled.section `
  width: calc(100vw - 5vw);
  max-width: 60em;
`

export const Section = styled.section `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0 ;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`
export const Div = styled.div `
  width: 20em;
  height: 4em;
  border-radius: 10px;
  margin: 20px;
  background-color: #456268;
  color: #E0FBFC;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    width: calc(100vw - 5vw);
  }
`
export const FlagS = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
`