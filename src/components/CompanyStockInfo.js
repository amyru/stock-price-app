// @flow
import React from "react";
import styled from 'styled-components/macro';

type Props = {
  company: Object
}

const Article = styled.article`
  background: white;
  border: 1px solid #e0d8d8;
  color: #0069a1;
  height: 100%;
  padding: 1rem;
  border-radius: 3px;
  max-width: 800px;
  margin: 2rem auto;
`;

const H2 = styled.h2`
  color: #0069a1;
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia", Cambria, Times New Roman, Times, serif;
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: 2rem;
`;

const H3 = styled.h3`
  color: #0069a1;
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia", Cambria, Times New Roman, Times, serif;
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: 1rem;
`;

const Paragraph = styled.p`
  font-family: "Mercury Text G2 A", "Mercury Text G2 B", "Georgia", "Georgia", Cambria, Times New Roman, Times, serif;
  color: #46505a;
  font-size: 1rem;
`;

export default function CompanyStockInfo({company}: Props) {
  const { companyName, description, latestPrice, symbol } = company;

  const renderDescription = () => {
    if(!description) return null;
    return(
      <div>
        <H3>Company Description</H3>
        <Paragraph>{description}</Paragraph>
      </div>
    )
  }

  return (
    <Article>
      <header>
        <H2>{companyName} Summary</H2>
      </header>
      <div>
        <H3>Symbol</H3>
        <Paragraph>{symbol}</Paragraph>
      </div>
      <div>
        <H3>Latest Price</H3>
        <Paragraph>${latestPrice} USD</Paragraph>
      </div>
      {renderDescription()}
    </Article>
  )
}
