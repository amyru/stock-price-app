import { reducer } from "../appReducer";
import { initialState } from "../../store/defaultState";

export  const storeSymbols = async({listName, symbols}) => {
    await dispatch({ type: "storeResults", listName, symbols });
  };
describe("appReducer", () => {
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

  const newState = {
    ...initialState,
    lists: {
      ...initialState.lists,
      gainers: {
        list,
        listName: "Gainers"
      }
    }
  }

  describe("storeResults", () => {
    it("sets categories", () => {

      expect(
        reducer(
          initialState,
          storeSymbols({ listName: "Gainers" , symbols: list })
        )
      ).toEqual(newState);
    });
  });
});
