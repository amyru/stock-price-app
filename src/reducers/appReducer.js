export function reducer(state, action) {
  switch (action.type) {
    case "storeResults":
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
