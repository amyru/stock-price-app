// @flow
import React, { useReducer, createContext } from "react";
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";
import { initialState } from "./store/defaultState";
import { reducer } from "./reducers/appReducer";
import { GlobalStyle, AppContainer, Header } from "./styles/App";

export const AppContext = createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const renderCompanyInfo = () => {
    if(Object.keys(state.selectedOption).length === 0) return null;
    return <CompanyStockInfo company={state.selectedOption} />
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <GlobalStyle />
        <Header>
          <h1>Stock Pricing App</h1>
        </Header>
        <StockListNav  />
        {renderCompanyInfo()}
      </AppContainer>
    </AppContext.Provider>
  );
}
