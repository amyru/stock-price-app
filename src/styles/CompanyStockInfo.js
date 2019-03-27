import styled from "styled-components/macro";

export const Article = styled.article`
  background: white;
  border: 1px solid #e0d8d8;
  color: #0069a1;
  padding: 1rem;
  border-radius: 4px;
  max-width: 800px;
  margin: 2rem auto;
  @media(max-width: 400px) {
    height: 100%;
    margin 0;
  }
`;

export const H2 = styled.h2`
  color: #0069a1;
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    Cambria, Times New Roman, Times, serif;
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  color: #0069a1;
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    Cambria, Times New Roman, Times, serif;
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia",
    Cambria, Times New Roman, Times, serif;
  color: #46505a;
  font-size: 1rem;
`;

export const Img = styled.img`
  height: 300px;
  @media (max-width: 700px) {
    height: 200px;
  }
`;

export const Heading = styled(H3)`
  max-width: 500px;
  margin: auto;
  text-align: justify;
  font-size: 1rem;
  padding: 2rem 0 2rem;
  color: #0069a1;
  font-weight: bold;
`;
