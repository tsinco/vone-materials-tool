import Form from "./inkFormVone";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { MaterialsData } from "./MaterialsData";

const InitialState = {
  inktype: "",
  name: "",
  pass_spacing: 0,
  dispense_height: 0,
};

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [active, setActive] = useState("");
  const [values, setValues] = useState({ pass_spacing: 0, dispense_height: 0 });
  const [state, dispatch] = useReducer(reducer, {
    InitialState,
  });
  const handleOnclick = (action: any, data: any) => () => {
    dispatch(action);
    setTemplateAvailable(true);
    console.log(data);
  };
  const handleOnselect = (name: string, data: any) => {
    if (!istemplateSelected) {
      setActive(name);
      setValues(data);
      setTemplateSelected(true);
    } else {
      setTemplateSelected(false);
    }
  };
  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div>
          <h2 className="Title">Select Material</h2>
          <ul>
            {MaterialsData.map((val, key) => {
              return (
                <a
                  key={key}
                  className="row"
                  onClick={() => {
                    handleOnselect(val.name, val.values);
                  }}
                >
                  <div id="name">{val.name}</div>
                </a>
              );
            })}
          </ul>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <button
              className="button"
              onClick={handleOnclick({ type: "Blank Template" }, InitialState)}
            >
              Blank Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick(
                {
                  type: "Use as Template",
                },
                values
              )}
            >
              Use as Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick({ type: "Update" }, values)}
            >
              Update
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick({ type: "Delete" }, values)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setTemplateAvailable(false)}>
            Back to Templates
          </button>
          <Form {...state}> </Form>
        </div>
      )}
    </div>
  );
};

export default VoneHome;
