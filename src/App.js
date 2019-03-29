// @flow
import React from "react";
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";
import Homepage from "./components/Homepage";
import { GlobalStyle, AppContainer, Header } from "./styles/App";
import { mapDispatch, getReducer } from "./reducers/appReducer";

export default function App() {
  const [state, dispatch] = getReducer();
  const actions = mapDispatch(dispatch);

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
      <StockListNav lists={state.lists} actions={actions} />
      {renderCompanyInfo()}
      {renderHomepage()}
    </AppContainer>
  );
}
