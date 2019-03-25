// @flow
import React, { useContext } from "react";
import { AppContext } from "../App";
import { getSymbolList, getCompanyDescription } from "../services/api";
import Select from "react-select";

type Props = {
  list: Object,
  listName: string
}

export default function SymbolList({
  list,
  listName,
}: Props) {
  const { dispatch } = useContext(AppContext);

  const getOptions = async e => {
    if(list.length > 0) return null;
    const results = await getSymbolList({listName});
    await dispatch({ type: "storeResults", listName, results })
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
      isLoading={false}
      noOptionsMessage={noResults}
      hideSelectedOptions={true}
      isSearchable={false}
      placeholder={listName}
    />
  )
}

SymbolList.defaultProps = { noResults: "No Results" };
