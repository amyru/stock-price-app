// @flow
import React, { useReducer, createContext } from "react";
import './styles/App.css';
import styled from 'styled-components/macro';
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";
import { reducer } from "./reducers/appReducer";

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #fff;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #0069a1;
`;

const initialState = {
  lists: {
    mostactive: { listName: "Most Active", list: [] },
    gainers: { listName: "Gainers", list: [] },
    infocus: { listName: "In Focus", list: [] },
    iexpercent: { listName:  "IEX Percent", list: [] },
    iexvolume: { listName: "IEX Volume", list: [] },
    losers: { listName: "Losers", list: [] }
  },
  selectedOption: {}
}

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
        <Header>
          <h1>Stock Pricing App</h1>
        </Header>
        <StockListNav  />
        {renderCompanyInfo()}
      </AppContainer>
    </AppContext.Provider>
  );
}
