## Stock Price App
Keep track of company quotes with current stock price. Company Symbols are categorized for an easy search.
This app queries the [IEX Cloud API](https://iextrading.com/developer/docs)

### Installation

- `$ git clone git@github.com:amyru/stock-price-app.git`
- `$ cd stock-price-app`
- `$ npm install`
- `$ npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing
- `$ npm test`
- `$ a` to run all tests

### Details
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### The main stack is:
- React
- React-Hooks (useReducer, useState)
- Fetch for async calls
- react-select for the dropdown component
- Styled Components

#### The component structure is as follows
```
|~stock-price-app/
| |~public/
| | |-favicon.ico
| | |-index.html
| | `-manifest.json
| |~src/
| | |~components/
| | | |-CompanyStockInfo.js
| | | |-Homepage.js
| | | |-StockListNav.js
| | | `-SymbolList.js
| | |~reducers/
| | | `-appReducer.js
| | |~services/
| | | `-api.js
| | |~store/
| | | `-defaultState.js
| | |~styles/
| | | |-App.js
| | | |-colors.js
| | | |-CompanyStockInfo.js
| | | |-StockListNav.js
| | | |-SymbolList.js
| | | `-utils.js
| | |-App.js
| | |-index.js
| | |-setupTests.js
| | `-stocks_image.png
```
