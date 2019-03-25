// @flow
import React, { useReducer, createContext } from "react";
import './styles/App.css';
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";
import { reducer } from "./reducers/appReducer";

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
      <div className="App">
        <header className="App-header">
          <h1>Stock Pricing App</h1>
        </header>
        <StockListNav  />
        {renderCompanyInfo()}
      </div>
    </AppContext.Provider>
  );
}
