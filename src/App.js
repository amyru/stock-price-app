// @flow
import React, { Component } from 'react';
import './styles/App.css';
import StockListNav from "./components/StockListNav";
import CompanyStockInfo from "./components/CompanyStockInfo";

class App extends Component<{},{}> {
  constructor() {
    super();
    this.state = {
      lists: {
        gainers: [],
        infocus: [],
        iexpercent: [],
        iexvolume: [],
        losers: [],
        mostactive: []
      },
      selectedOption: {}
    }
  }

  storeResults = ({apiList, results}) => {
    this.setState(prevState => ({
      lists: {
        ...prevState.lists,
        [apiList]: results
      }
    }))
  }

  getStockInfo = selectedOption => {
    this.setState(() => ({ selectedOption }))
  }

  renderCompanyInfo = () => {
    if(Object.keys(this.state.selectedOption).length === 0) return null;
    return <CompanyStockInfo company={this.state.selectedOption} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stock Pricing App</h1>
        </header>
        <StockListNav lists={this.state.lists} storeResults={this.storeResults} getStockInfo={this.getStockInfo} />
        {this.renderCompanyInfo()}
      </div>
    );
  }
}

export default App;
