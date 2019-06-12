// @flow
import React from "react";
import SymbolList from "./SymbolList";
import { Nav } from "../styles/StockListNav";

type Props = {
  actions: Object,
  lists: Object,
};

export default function StockListNav({ actions, lists }: Props) {
  const renderSymbolList = list => {
    return <SymbolList key={list.listName} actions={actions} {...list} />;
  };

  return (
    <Nav>
      {Object.keys(lists).map(key => {
        return renderSymbolList(lists[key]);
      })}
    </Nav>
  );
}
