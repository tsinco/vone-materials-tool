type InkType = {
  type: "Cond2" | "Flex2" | "Solder Paste Bi" | "Solder Paste Pb" | "Blank";
};

//
function reducer(state: any, action: InkType) {
  switch (action.type) {
    case "Cond2":
      return {
        inktype: "Cond2",
        name: "MuscularMermaid",
        pass_spacing: 0.15,
        dispense_height: 0.1,
      };
    case "Flex2":
      return {
        inktype: "Flex2",
        name: "ZanyZebrafish",
        pass_spacing: 0.2,
        dispense_height: 0.15,
      };
    case "Blank":
      return {
        inktype: "",
        name: "",
      };
    default:
      return state;
  }
}

export default reducer;
