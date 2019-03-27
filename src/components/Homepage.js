// @flow
import React from "react";
import {
  Article,
  Heading,
  Img
 } from "../styles/CompanyStockInfo";
import stocksImage from "../stocks_image.png";

export default function Homepage() {
  return (
    <Article>
      <header>
        <Heading>
          Keep track of Company Quotes with our useful categorised dropdown links above.
          Click any Company Symbol to get a summary.
        </Heading>
      </header>
      <div>
        <Img src={stocksImage} alt="Stocks Image" />
      </div>
    </Article>
  );
}

