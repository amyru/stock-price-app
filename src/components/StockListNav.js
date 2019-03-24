// @flow
import React from "react";
import SymbolList from "./SymbolList";

type Props = {
  lists: object,
  getStockInfo: Function,
  storeResults: Function
}

export default function StockListNav({
  getStockInfo,
  lists,
  storeResults
}: Props) {
  const noResults = "No current activity, please check back later";

  return (
    lists
    <nav>
      <SymbolList
        listName="Most Active"
        apiList="mostactive"
        list={lists.mostactive}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
        noResults={noResults}
      />
      <SymbolList
        listName="Gainers"
        apiList="gainers"
        list={lists.gainers}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
      />
      <SymbolList
        listName="Losers"
        apiList="losers"
        list={lists.losers}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
      />
      <SymbolList
        listName="IEX Volume"
        apiList="iexvolume"
        list={lists.iexvolume}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
        noResults={noResults}
      />
      <SymbolList
        listName="IEX Percent"
        apiList="iexpercent"
        list={lists.iexpercent}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
        noResults={noResults}
      />
      <SymbolList
        listName="In Focus"
        apiList="infocus"
        list={lists.infocus}
        storeResults={storeResults}
        getStockInfo={getStockInfo}
      />
    </nav>
  )
}
