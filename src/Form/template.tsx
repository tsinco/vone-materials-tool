import Form from "./form";
import { useReducer } from "react";
import reducer from "./reducer";

const Templates: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    type: "",
    name: "",
    expiration: new Date(),
  });
  return (
    <main>
      <div>
        <input name="type" type="text" value={state.type} />
        <input name="name" type="text" value={state.name} />
        <button onClick={() => dispatch({ type: "Cond2" })}>Cond2</button>
        <button onClick={() => dispatch({ type: "Flex2" })}>Flex2</button>
        <button onClick={() => dispatch({ type: "Blank" })}>Blank</button>
      </div>
      {/* <Form {...state}> </Form> */}
    </main>
  );
};

export default Templates;
