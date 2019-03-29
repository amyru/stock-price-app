import React from "react";
import omit from "lodash/omit";
import CompanyStockInfo from "../CompanyStockInfo";
import { Article, H2, H3, Paragraph } from "../../styles/CompanyStockInfo";
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
  describe("render company card with description", () => {
    const wrapper = shallow(
      <CompanyStockInfo {...company} />
    )

    it("renders company info card", () => {
      expect(wrapper.find(Article)).toHaveLength(1);
      expect(wrapper.find(H2).text()).toBe(`${company.companyName} Summary`);
      expect(wrapper.find(Paragraph).at(0).text()).toBe(`${company.symbol}`);
      expect(wrapper.find(Paragraph).at(1).text()).toBe(`$${company.latestPrice} USD`);
      expect(wrapper.find(Paragraph).at(2).text()).toBe(company.description);
      expect(wrapper.find(H3)).toHaveLength(3);
    });
  });

  describe("render company card without description", () => {
    const wrapper = shallow(
      <CompanyStockInfo {...omit(company, ["description"])} />
    )

    it("renders company info card", () => {
      expect(wrapper.find(Article)).toHaveLength(1);
      expect(wrapper.find(H2).text()).toBe(`${company.companyName} Summary`);
      expect(wrapper.find(Paragraph).at(0).text()).toBe(`${company.symbol}`);
      expect(wrapper.find(Paragraph).at(1).text()).toBe(`$${company.latestPrice} USD`);
      expect(wrapper.find(Paragraph).at(2)).toHaveLength(0);
      expect(wrapper.find(H3)).toHaveLength(2);
    });
  });
})
