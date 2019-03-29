import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import App, {selectOption} from '../App';
import CompanyStockInfo from "../components/CompanyStockInfo";
import StockListNav from "../components/StockListNav";

describe("App", () => {
  const company = {
    symbol: "GE",
    label: "GE",
    value: "GE",
    latestPrice: 10.2,
    companyName: "General Electric Company",
    description: "Company Description"
  };
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders StockList Nav", () => {
    expect(wrapper.find(StockListNav)).toHaveLength(1);
  })

  it("doesn't render companyInfo", () => {
    expect(wrapper.find(CompanyStockInfo)).toHaveLength(0);
  })
});
