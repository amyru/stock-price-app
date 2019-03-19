// @flow
import React from "react";
import SymbolList from "./SymbolList";

type Props = {
  lists: object,
  storeResults: Function
}

export default function StockListNav({getStockInfo, lists, storeResults}: Props) {
  return (
    <nav>
      <SymbolList
        listName="Most Active"
        apiList="mostactive"
        list={lists.mostactive}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
      />
      <SymbolList
        listName="Gainers"
        apiList="gainers"
        list={lists.gainers}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
      />
    </nav>
  )
}
