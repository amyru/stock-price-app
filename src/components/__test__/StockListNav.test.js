import React, { useContext } from "react";
import { shallow, mount } from "enzyme";
import SymbolList from "../SymbolList";
import StockListNav from "../StockListNav";
import { Nav } from "../../styles/StockListNav";
import AppContext from "../../AppContext";

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

const mockContext = jest.fn();
jest.mock('../../AppContext', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

describe("StockListNav", () => {
  beforeEach(() => {
    mockContext.mockReset();  
  });

  const wrapper = shallow(
    <StockListNav />
  );

  it("renders SymbolList", () => {
    expect(wrapper.find(SymbolList)).toHaveLength(6);
  });

  it("renders Nav", () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  })
});
