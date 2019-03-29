import styled from "styled-components/macro";
import * as color from "./colors";
import { mediaHuge, mediaMobile, mediaSmall, rem } from "./utils";

export const Article = styled.article`
  background: white;
  border: 1px solid ${color.borderLightGrey};
  border-radius: 4px;
  color: ${color.ceruleanBlue};
  max-width: ${rem(800)};
  margin: 2rem auto;
  padding: 1rem;
  ${mediaHuge} { max-width: 70%; }
  ${mediaMobile} {
    height: 100%;
    margin 0;
  }
`;

export const H2 = styled.h2`
  color: ${color.ceruleanBlue};
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    "Cambria", "Times New Roman", "Times", "serif";
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.02em;
  ${mediaMobile} {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  color: ${color.ceruleanBlue};
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    "Cambria", "Times New Roman", "Times", "serif";
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    "Cambria", "Times New Roman", "Times", "serif";
  color: ${color.celloBlack};
  font-size: 1rem;
`;

export const Img = styled.img`
  height: ${rem(300)};
  ${mediaSmall} {
    height: ${rem(200)};
  }
`;

export const Heading = styled(H3)`
  max-width: ${rem(500)};
  margin: auto;
  text-align: justify;
  font-size: 1rem;
  padding: 2rem 0 2rem;
  color: ${color.ceruleanBlue};
  font-weight: bold;
`;
