import styled, { createGlobalStyle } from "styled-components/macro";
import * as color from "./colors";

export const GlobalStyle = createGlobalStyle`
  html { height: 100%; }
  body {
    background: ${color.lightGrey};
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia", Cambria, Times New Roman, Times, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .root {
    height: 100%;
  }
`;

export const AppContainer = styled.div`
  height: 100%;
  text-align: center;
`;

export const Header = styled.header`
  background-color: ${color.white};
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${color.ceruleanBlue};
`;
