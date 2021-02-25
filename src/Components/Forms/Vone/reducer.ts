type Type = {
  type: "Use as Template" | "Update" | "Delete" | "Blank";
  payload: any;
  description: any;
};

function reducer(state: any, action: Type) {
  switch (action.type) {
    case "Use as Template":
      return action.payload;
    case "Update":
      return {};
    case "Delete":
      return {};
    case "Blank":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
