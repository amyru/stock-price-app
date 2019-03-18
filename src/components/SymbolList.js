// @flow
import React from "react";
import { getSymbolList } from "../services/api";

type Props = {
  apiList: string,
  listName: string,
  storeResults: Function
}

export default function SymbolList({listName, apiList, storeResults}: Props) {
  const handleClick = async e => {
    const results = await getSymbolList({apiList});
    storeResults({apiList, results})
  };

  return (
    <select onClick={handleClick}>
      <option disabled={true} value="default">{listName}</option>
    </select>
  )
}
