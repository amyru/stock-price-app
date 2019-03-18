// @flow
import React from "react";
import SymbolList from "./SymbolList";

type Props = {
  lists: object,
  storeResults: Function
}

export default function StockListNav({lists, storeResults}: Props) {
  return (
    <nav>
      <SymbolList
        listName="Most Active"
        apiList="mostActive"
        results={lists.mostActive}
        storeResults={storeResults} />
      <SymbolList
        listName="Gainers"
        apiList="gainers"
        results={lists.gainers}
        storeResults={storeResults} />
    </nav>
  )
}
