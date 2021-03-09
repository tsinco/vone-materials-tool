import Form from "./inkFormVone";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { MaterialsData } from "./MaterialsData";
import ShowMaterials from "../ShowMaterials";

const InitialState = {
  inktype: "",
  name: "",
  pass_spacing: 0,
  dispense_height: 0,
};

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [details, setDetails] = useState("");
  const [values, setValues] = useState(InitialState);
  const [state, dispatch] = useReducer(reducer, {
    InitialState,
  });
  const handleOnclick = (action: any) => () => {
    dispatch(action);
    setTemplateAvailable(true);
  };
  const handleOnselect = (inkname: any, data: any) => {
    if (!istemplateSelected && details !== inkname) {
      setDetails(inkname);
      setValues(data);
      setTemplateSelected(true);
    }
    if (istemplateSelected && details === inkname) {
      setDetails("");
      setValues(InitialState);
      setTemplateSelected(false);
    }
    if (istemplateSelected && details !== inkname) {
      setDetails(inkname);
      setValues(data);
      setTemplateSelected(true);
    } else {
    }
  };
  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div>
          <h2 className="Title">Select Material</h2>
          <ul>
            {/* {MaterialsData.map((val, key) => {
              return (
                <a
                  key={key}
                  className="row"
                  onClick={() => {
                    handleOnselect(val.details, val.values);
                  }}
                >
                  <div id="name">{val.details.name}</div>
                </a>
              );
            })} */}
            <ShowMaterials />
          </ul>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <button
              className="button"
              onClick={handleOnclick({
                type: "Blank Template",
                payload: InitialState,
              })}
            >
              Blank Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick({
                type: "Use as Template",
                payload: values,
                description: details,
              })}
            >
              Use as Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick({ type: "Update" })}
            >
              Update
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={handleOnclick({ type: "Delete" })}
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
