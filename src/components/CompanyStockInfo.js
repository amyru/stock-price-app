// @flow
import React from "react";

type Props = {
  company: Object
}

export default function CompanyStockInfo({company}: Props) {
  const { companyName, description, latestPrice, symbol } = company;

  const renderDescription = () => {
    if(!description) return null;
    return(
      <div>
        <h3>Company Description</h3>
        <p>{description}</p>
      </div>
    )
  }

  return (
    <article>
      <header>
        <h2>{companyName} Summary</h2>
      </header>
      <div>
        <h3>Symbol</h3>
        <p>{symbol}</p>
      </div>
      <div>
        <h3>Latest Price</h3>
        <p>${latestPrice} USD</p>
      </div>
      {renderDescription()}
    </article>
  )
}
