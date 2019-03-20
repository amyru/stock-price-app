import React from "react";
import CompanyStockInfo from "../CompanyStockInfo";
import { shallow } from "enzyme";

const company = {
  symbol: "GE",
  label: "GE",
  value: "GE",
  latestPrice: 10.2,
  companyName: "General Electric Company",
  description: "Company Description"
};

describe("CompanyStockInfo", () => {
  const wrapper = shallow(
    <CompanyStockInfo company={company} />
  )

  it("renders company info card", () => {
    expect(wrapper.find("article")).toHaveLength(1);
  });
})

