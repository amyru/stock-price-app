// @flow
import React, { useContext } from "react";
import styled from 'styled-components/macro';
import { AppContext } from "../App";
import SymbolList from "./SymbolList";

const Nav = styled.nav`
  display: flex;
  @media(max-width: 700px) {
    flex-wrap: wrap;
  }
`;

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
