import Form from "./inkFormVone";
import { useReducer, useState } from "react";
import reducer from "./reducer";

const VoneHome: React.FC = () => {
  const [available, setAvailable] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    inktype: "",
    name: "",
    pass_spacing: 0,
    dispense_height: 0,
  });
  const handleOnclick = (template: any) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(template);
    setAvailable(true);
  };

  return (
    <div className="body">
      {!available ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <button className="button" onClick={handleOnclick({ type: "Blank" })}>
            Blank
          </button>
          <button className="button" onClick={handleOnclick({ type: "Cond2" })}>
            Cond2
          </button>
          <button className="button" onClick={handleOnclick({ type: "Flex2" })}>
            Flex2
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => setAvailable(false)}>Back to Templates</button>
          <Form {...state}> </Form>
        </div>
      )}
    </div>
  );
};

export default VoneHome;
