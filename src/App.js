// @flow
import React, { useReducer } from "react";
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";
import Homepage from "./components/Homepage";
import { initialState } from "./store/defaultState";
import { reducer } from "./reducers/appReducer";
import { GlobalStyle, AppContainer, Header } from "./styles/App";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeSymbols = async({listName, symbols}) => {
    await dispatch({ type: "storeResults", listName, symbols });
  };

  const selectOption = async selectedOption => {
    await dispatch({ type: "selectedOption", selectedOption });
  };

  const renderCompanyInfo = () => {
    if (Object.keys(state.selectedOption).length === 0) return null;
    return <CompanyStockInfo {...state.selectedOption} />;
  };

  const renderHomepage = () => {
    if (Object.keys(state.selectedOption).length === 0) {
      return <Homepage />;
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Header>
        <h1>Stock Pricing App</h1>
      </Header>
      <StockListNav
        lists={state.lists}
        actions={{storeSymbols, selectOption}}
      />
      {renderCompanyInfo()}
      {renderHomepage()}
    </AppContainer>
  );
}
