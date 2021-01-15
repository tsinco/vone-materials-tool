type InkType = {
  type: "Cond2" | "Flex2" | "Solder Paste Bi" | "Solder Paste Pb" | "Blank";
};

//
function reducer(state: any, action: InkType) {
  switch (action.type) {
    case "Cond2":
      return {
        inktype: "Cond2",
        name: "Pizza",
      };
    case "Flex2":
      return {
        inktype: "Flex2",
        name: "BigMac",
      };
    case "Blank":
      return {
        inktype: "",
        name: "",
      };
    default:
      return null;
  }
}

export default reducer;
