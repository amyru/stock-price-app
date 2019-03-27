// @flow
import React, { useContext, useState } from "react";
import Select from "react-select";
import { AppContext } from "../App";
import { getSymbolList, getCompanyDescription } from "../services/api";
import { customStyles } from "../styles/SymbolList";

type Props = {
  list: Object,
  listName: string
}

export default function SymbolList({
  list,
  listName,
}: Props) {
  const { dispatch } = useContext(AppContext);
  const [ isLoading, toggleLoading ] = useState(false);

  const getOptions = async e => {
    if(list.length > 0) return null;
    await toggleLoading(true);
    const results = await getSymbolList({listName});
    await dispatch({ type: "storeResults", listName, results })
    await toggleLoading(false);
  };

  const handleChange = async selectedOption => {
    const description = await getCompanyDescription({ symbol: selectedOption.symbol });
    await dispatch({
      type: "selectedOption",
      selectedOption: { ...selectedOption, description }
    });
  }

  const noResults = () => "No current activity, please check back later";

  return (
    <Select
      onChange={handleChange}
      onMenuOpen={getOptions}
      options={list}
      isLoading={isLoading}
      noOptionsMessage={noResults}
      hideSelectedOptions={true}
      isSearchable={false}
      placeholder={listName}
      styles={customStyles}
      value={listName}
    />
  )
}
SymbolList.defaultProps = { noResults: "No Results" };
