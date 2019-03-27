import "whatwg-fetch";

const API = "https://api.iextrading.com/1.0";

export const getSymbolList = async ({ listName }) => {
  const response = await fetch(
    `${API}/stock/market/list/${formatName(listName)}`
  );
  const results = await response.json();
  return formatResults(results);
};

export const getCompanyDescription = async ({ symbol }) => {
  const company = await getCompany(symbol);
  return company.description;
};

export const getCompany = async symbol => {
  const response = await fetch(`${API}/stock/${symbol}/company`);
  const results = await response.json();
  return results;
};

const formatResults = results => {
  return results.map(quote => {
    return {
      companyName: quote.companyName,
      latestPrice: quote.latestPrice,
      symbol: quote.symbol,
      label: quote.symbol,
      value: quote.symbol
    };
  });
};

export const formatName = listName => {
  return listName.toLowerCase().replace(/\s+/g, "");
};
