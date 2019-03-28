// @flow
import React from "react";
import { Article, H2, H3, Paragraph } from "../styles/CompanyStockInfo";

type Props = {
  companyName: string,
  description: string,
  latestPrice: number,
  symbol: string
}

export default function CompanyStockInfo({
  companyName,
  description,
  latestPrice,
  symbol
}: Props) {
  const renderDescription = () => {
    if (!description) return null;
    return (
      <div>
        <H3>Company Description</H3>
        <Paragraph>{description}</Paragraph>
      </div>
    );
  };

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
  );
}
