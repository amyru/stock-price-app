import * as api from "../api";

describe("getSymbol", () => {
  it("fetches an array of companies with symbols and price", async () => {
    const response = [
      {
        symbol: "GE",
        label: "GE",
        value: "GE",
        latestPrice: 10.2,
        companyName: "General Electric Company"
      },
      {
        symbol: "SRNE",
        label: "SRNE",
        value: "SRNE",
        latestPrice: 11.2,
        companyName: "Sorrento Therapeutics Inc."
      }
    ];

    expect.assertions(1);

    fetch.mockResponse(JSON.stringify(response));

    const result = await api.getSymbolList({
      listName: "Gainers"
    });

    expect(result).toEqual(response);
  });
});

describe("getCompanyDescription", () => {
  it("fetches company description", async () => {
    const response = {
      symbol: "GE",
      companyName: "General Electric Company",
      description: "Company description"
    };

    expect.assertions(1);

    fetch.mockResponse(JSON.stringify(response));

    const result = await api.getCompanyDescription({
      symbol: "GE"
    });

    expect(result).toEqual(response.description);
  });
});

describe("getCompany", () => {
  it("fetches company", async () => {
    const response = {
      symbol: "GE",
      companyName: "General Electric Company",
      description: "Company description"
    };

    expect.assertions(1);

    fetch.mockResponse(JSON.stringify(response));

    const result = await api.getCompany({
      symbol: "GE"
    });

    expect(result).toEqual(response);
  });
});
