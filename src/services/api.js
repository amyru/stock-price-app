import "whatwg-fetch";

const api = "https://api.iextrading.com/1.0";

export const getSymbolList = async({apiList}) => {
  const response = await fetch(`${api}/stock/market/list/${apiList}`);
  const results = await response.json();
  return formatResults(results);
}

const formatResults = results => {
  return results.map( quote => {
    return {
      price: quote.latestPrice,
      symbol: quote.symbol,
      label: quote.symbol,
      value: quote.symbol
    }
  })
}
