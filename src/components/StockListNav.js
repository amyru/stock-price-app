// @flow
import React, { useContext } from "react";
import { AppContext } from "../App";
import SymbolList from "./SymbolList";

export default function StockListNav() {
  const { state: { lists } } = useContext(AppContext);
  

  const renderSymbolList = list => {
    return (
      <SymbolList
        key={list.listName}
        { ...list }
      />
    )
  };

  return (
    <nav>
      { Object.keys(lists).map( key => {
        return renderSymbolList(lists[key])
      }) }
    </nav>
  )
}
