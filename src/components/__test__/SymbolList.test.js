import React from "react";
import SymbolList from "../SymbolList";
import Select from "react-select";
import { shallow } from "enzyme";

const list = [
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

const actions = { storeSymbols: jest.fn(), getOptions: jest.fn() };

const handleChange = jest.fn();

describe("SymbolList", () => {
  const wrapper = shallow(
    <SymbolList
      list={list}
      listName={"Gainers"}
      actions={actions}
    />
  );

  it("renders the Select dropdown", () => {
    expect(wrapper.find(Select)).toHaveLength(1);
  });

  it("contains props.list with label and value keys", () => {
    expect(Object.keys(list[0]).sort()).toEqual(
      expect.arrayContaining(
        ["companyName", "label", "latestPrice", "symbol", "value"].sort()
      )
    );
  });
});
