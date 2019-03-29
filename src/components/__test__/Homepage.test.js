import React from "react";
import { shallow } from "enzyme";
import Homepage from "../Homepage";
import { Article, Heading, Img } from "../../styles/CompanyStockInfo";
import stocksImage from "../../stocks_image.png";

describe("Homepage", () => {
  describe("render homepage", () => {
    const wrapper = shallow(
      <Homepage />
    )

    it("renders company info card", () => {
      expect(wrapper.find(Article)).toHaveLength(1);
      expect(wrapper.find(Heading)).toHaveLength(1);
      expect(wrapper.find(Img).prop("src")).toBe(stocksImage);
    });
  });
})
