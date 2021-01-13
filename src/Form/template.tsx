import Form from "./form";
import { useState, useReducer } from "react";
import initialValue from "./value";
type ActionType = {
  type: "Cond2" | "Flex2" | "Solder Paste Bi" | "Solder Paste Pb" | "Blank";
};

function reducer(state: any, action: ActionType) {
  switch (action.type) {
    case "Cond2":
      return {
        type: "Cond2",
        name: "CrazyFries",
        expiration: new Date("2013-01-08"),
      };
    case "Flex2":
      return {
        type: "Flex2",
        name: "BigMac",
        expiration: new Date("2011-01-08"),
      };
    case "Blank":
      return { ...initialValue };
    default:
      return {};
  }
}

interface props {
  id: Number;
  name: String;
  type: String;
  expiration: Date;
}

const Templates: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialValue });

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setValue({
    //   ...value,
    // [name]: e.target.value,
    //});
  };

  return (
    <main>
      <div>
        <input name="type" type="text" value={state.type} />
        <input name="name" type="text" value={state.name} />
        <button key="123" onClick={() => dispatch({ type: "Cond2" })}>
          Cond2
        </button>
        <button key="456" onClick={() => dispatch({ type: "Flex2" })}>
          Flex2
        </button>
        <button key="456" onClick={() => dispatch({ type: "Blank" })}>
          Blank
        </button>
        <Form {...initialValue}></Form>
      </div>
    </main>
  );
};

export default Templates;
