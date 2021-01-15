import Form from "./form";
import { useReducer, useState } from "react";
import reducer from "./reducer";

const Templates: React.FC = () => {
  const [available, setAvailable] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    type: "",
    name: "",
    expiration: new Date(),
  });
  const handleOnclick = (template: any) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(template);
    setAvailable(true);
  };
  return (
    <main>
      <div>
        {!available ? (
          <div>
            <button
              className="button"
              onClick={handleOnclick({ type: "Blank" })}
            >
              Blank
            </button>
            <button
              className="button"
              onClick={handleOnclick({ type: "Cond2" })}
            >
              Cond2
            </button>
            <button
              className="button"
              onClick={handleOnclick({ type: "Flex2" })}
            >
              Flex2
            </button>
          </div>
        ) : null}
      </div>
      {available ? (
        <div>
          <button onClick={() => setAvailable(false)}>Back to Templates</button>
          <Form {...state}> </Form>
        </div>
      ) : null}
    </main>
  );
};

export default Templates;
