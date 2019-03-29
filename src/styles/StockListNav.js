import styled from "styled-components/macro";
import * as color from "./colors";
import { mediaSmall } from "./utils";

export const Nav = styled.nav`
  background-color: ${color.white};
  border-bottom: 1px solid ${color.borderLightGrey};
  display: flex;
  ${mediaSmall} {
    position: relative;
  }
`;
