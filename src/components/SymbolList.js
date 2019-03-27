// @flow
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { getSymbolList, getCompanyDescription } from "../services/api";
import Select from "react-select";

type Props = {
  list: Object,
  listName: string
}

const customStyles = {
  container: styles => ({ ...styles, width: "100%", '@media(max-width: 700px)': { position: "unset" } }),
  menu: styles => ({ ...styles, textAlign: "left", '@media(max-width: 700px)': { left: 0 } }),
  control: styles => {
    return {
      cursor: "default",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      minHeight: 38,
      position: "relative",
      transition: "all 100ms",
      alignItems: "left",
      border: "none",
      '@media(max-width: 700px)': { fontSize: ".7rem" }
    }
  },
  indicatorSeparator: styles => ({ display: "none" }),
  dropdownIndicator: styles => ({ ...styles, '@media(max-width: 700px)': { display: "none" } }),
  loadingIndicator: styles => ({ display: "none" })
};

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
