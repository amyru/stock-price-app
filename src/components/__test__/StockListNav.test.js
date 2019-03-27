import React from "react";
import SymbolList from "../SymbolList";
import StockListNav from "../StockListNav";
import { shallow, mount } from "enzyme";

const lists = {
  gainers: [
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
  ],
  infocus: [],
  iexpercent: [],
  iexvolume: [],
  losers: [],
  mostactive: []
};

describe("StockListNav", () => {
  const wrapper = shallow(
    <StockListNav
      lists={lists}
      storeResults={jest.fn()}
      getStockInfo={jest.fn()}
    />
  );

  it("renders SymbolList", () => {
    expect(wrapper.find(SymbolList)).toHaveLength(6);
  });
});
