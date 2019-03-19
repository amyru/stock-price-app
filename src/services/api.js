import "whatwg-fetch";

const api = "https://api.iextrading.com/1.0";

export const getSymbolList = async({apiList}) => {
  const response = await fetch(`${api}/stock/market/list/${apiList}`);
  const results = await response.json();
  return formatResults(results);
}

export const getCompanyDescription = async({symbol}) => {
  const company = await getCompany(symbol);
  return company.description;
}

const getCompany = async symbol => {
  const response = await fetch(`${api}/stock/${symbol}/company`);
  const results = await response.json();
  return results;
}

const formatResults = results => {
  return results.map( quote => {
    return {
      companyName: quote.companyName,
      latestPrice: quote.latestPrice,
      symbol: quote.symbol,
      label: quote.symbol,
      value: quote.symbol
    }
  })
}
