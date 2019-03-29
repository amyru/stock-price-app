import React, { useContext } from "react";
import { shallow, mount } from "enzyme";
import SymbolList from "../SymbolList";
import StockListNav from "../StockListNav";
import { Nav } from "../../styles/StockListNav";

const lists = {
  gainers: {
    listName: "Gainers",
    list: [
      {
        symbol: "GE",
        label: "GE",
        value: "GE",
        latestPrice: 10.2,
        companyName: "General Electric Company",
      },
      {
        symbol: "SRNE",
        label: "SRNE",
        value: "SRNE",
        latestPrice: 11.2,
        companyName: "Sorrento Therapeutics Inc.",
      },
    ],
  },
  mostactive: { listName: "Most Active", list: [] },
  gainers: { listName: "Gainers", list: [] },
  infocus: { listName: "In Focus", list: [] },
  iexpercent: { listName: "IEX Percent", list: [] },
  iexvolume: { listName: "IEX Volume", list: [] },
  losers: { listName: "Losers", list: [] },
};

describe("StockListNav", () => {
  const wrapper = shallow(<StockListNav lists={lists} actions={{}} />);

  it("renders SymbolList", () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(SymbolList)).toHaveLength(6);
  });
});
