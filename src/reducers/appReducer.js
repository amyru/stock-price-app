import {useReducer} from 'react';
import { initialState } from "../store/defaultState";

export const mapDispatch = dispatch => ({
  storeSymbols: async payload => {
    await dispatch({ type: "storeSymbols", ...payload })
  },
  selectOption: payload => dispatch({ type: "selectedOption", ...payload })
})

export function reducer(state, action) {
  switch (action.type) {
    case "storeSymbols":
      return {
        ...state,
        lists: {
          ...state.lists,
          [formatName(action.listName)]: updateList({
            lists: state.lists,
            listName: formatName(action.listName),
            symbols: action.symbols
          })
        }
      };
    case "selectedOption":
      return { ...state, selectedOption: action.selectedOption };
    default:
      return state;
  }
}

export function updateList({ lists, symbols, listName }) {
  if (lists[listName]) {
    return { ...lists[listName], list: symbols };
  }
}

export const formatName = listName => {
  return listName.toLowerCase().replace(/\s+/g, "");
};

export const getReducer = () => {
  return useReducer(reducer, initialState);
};
