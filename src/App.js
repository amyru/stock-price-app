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
      selectedCompany: {}
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stock Pricing App</h1>
        </header>
        <StockListNav lists={this.state.lists} storeResults={this.storeResults} />
      </div>
    );
  }
}

export default App;
