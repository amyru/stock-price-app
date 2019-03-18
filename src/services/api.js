import "whatwg-fetch";

const api = "https://api.iextrading.com/1.0";

export const getSymbolList = async({apiList}) => {
  const response = await fetch(`${api}/stock/market/list/${apiList}`);
  return response;
}
