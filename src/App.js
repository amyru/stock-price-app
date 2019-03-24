// @flow
import React, { useReducer, createContext } from "react";
import './styles/App.css';
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";

const initialState = {
  lists: [ 
    { listName: "Most Active", list: [] },
    { listName: "Gainers", list: [] },
    { listName: "In Focus", list: [] },
    { listName:  "IEX Percent", list: [] },
    { listName: "IEX Volume", list: [] },
    { listName: "Losers", list: [] }
  ],
  selectedOption: {}
}

function reducer(state, action) {
  switch (action.type) {
    case 'storeResults':
      return {
        lists: {
          ...state.lists,
          [action.apiList]: action.results
        }
      };
    case 'selectOption':
      return { selectOption: action.selectOption  };
  }
}

export const AppContext = createContext(null);

export default function App({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const renderCompanyInfo = () => {
    if(Object.keys(this.state.selectedOption).length === 0) return null;
    return <CompanyStockInfo company={this.state.selectedOption} />
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}> }}
      <div className="App">
        <header className="App-header">
          <h1>Stock Pricing App</h1>
        </header>
        <StockListNav lists={this.state.lists} />
        {this.renderCompanyInfo()}
      </div>
    </AppContext>
  );
}

export default App;
