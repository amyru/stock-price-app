// @flow
import React from "react";
import { getSymbolList, getCompanyDescription } from "../services/api";
import Select from "react-select";

type Props = {
  apiList: string,
  getStockInfo: Function,
  list: Object,
  listName: string,
  storeResults: Function
}

export default function SymbolList({list, listName, apiList, storeResults, getStockInfo}: Props) {
  const getOptions = async e => {
    if(list.length > 0) return null;
    const results = await getSymbolList({apiList});
    await storeResults({apiList, results})
  };

  const handleChange = async selectedOption => {
    const description = await getCompanyDescription({symbol: selectedOption.symbol});
    await getStockInfo({...selectedOption, ...description});
  }

  return (
    <Select
      onChange={handleChange}
      onMenuOpen={getOptions}
      options={list}
      isLoading={false}
      noOptionsMessage={()=>"no results"}
      hideSelectedOptions={true}
      isSearchable={false}
      placeholder={listName}
    />
  )
}
