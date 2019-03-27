// @flow
import React, { useContext } from "react";
import { AppContext } from "../App";
import SymbolList from "./SymbolList";
import { Nav } from "../styles/StockListNav";

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
    <Nav>
      { Object.keys(lists).map( key => {
        return renderSymbolList(lists[key])
      }) }
    </Nav>
  )
}
