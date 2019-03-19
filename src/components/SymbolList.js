// @flow
import React from "react";
import { getSymbolList, getCompanyDescription } from "../services/api";
import Select from "react-select";

type Props = {
  apiList: string,
  getStockInfo: Function,
  list: Object,
  listName: string,
  noResults?: string,
  storeResults: Function
}

export default function SymbolList({
  list,
  listName,
  apiList,
  storeResults,
  noResults,
  getStockInfo
}: Props) {
  const getOptions = async e => {
    if(list.length > 0) return null;
    const results = await getSymbolList({apiList});
    await storeResults({apiList, results})
  };

  const handleChange = async selectedOption => {
    const description = await getCompanyDescription({symbol: selectedOption.symbol});
    await getStockInfo({...selectedOption, description});
  }

  const noResultsMessage = () => {
    if(list.length === 0) {
      return noResults;
    }
  }

  return (
    <Select
      onChange={handleChange}
      onMenuOpen={getOptions}
      options={list}
      isLoading={false}
      noOptionsMessage={noResultsMessage}
      hideSelectedOptions={true}
      isSearchable={false}
      placeholder={listName}
    />
  )
}

SymbolList.defaultProps = { noResults: "No Results" };
