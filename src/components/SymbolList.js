// @flow
import React, { useState } from "react";
import Select from "react-select";
import { getSymbolList, getCompanyDescription } from "../services/api";
import { customStyles } from "../styles/SymbolList";

type Props = {
  actions: object,
  list: object,
  listName: string
};

export default function SymbolList({ actions, list, listName }: Props) {
  const [isLoading, toggleLoading] = useState(false);

  const getOptions = async e => {
    if (list.length > 0) return null;
    await toggleLoading(true);
    const symbols = await getSymbolList({ listName });
    await actions.storeSymbols({listName, symbols});
    await toggleLoading(false);
  };

  const handleChange = async selectedOption => {
    const description = await getCompanyDescription({
      symbol: selectedOption.symbol
    });
    await actions.selectOption({ ...selectedOption, description });
  };

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
  );
}
SymbolList.defaultProps = { noResults: "No Results" };
