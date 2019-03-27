// @flow
import React, { useContext } from "react";
import styled from 'styled-components/macro';
import { AppContext } from "../App";
import SymbolList from "./SymbolList";

const Nav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #e0d8d8;
  display: flex;
  @media(max-width: 700px) {
    position: relative;
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
