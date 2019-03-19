// @flow
import React, { Component } from 'react';
import './styles/App.css';
import StockListNav from "./components/StockListNav";

class App extends Component<{},{}> {
  constructor() {
    super();
    this.state = {
      lists: {
        mostactive: [],
        gainers: []
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

  getStockInfo = (selectedOption) => {
    this.setState(() => ({ selectedOption }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stock Pricing App</h1>
        </header>
        <StockListNav lists={this.state.lists} storeResults={this.storeResults} getStockInfo={this.getStockInfo} />
      </div>
    );
  }
}

export default App;
