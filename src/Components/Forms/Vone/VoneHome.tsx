import Form from "./inkFormVone";
import { useState } from "react";
import { Showmaterials } from "../Buttons/action";
import {
  blanktemplate,
  usetemplate,
  updatetemplate,
  deletetemplate,
} from "../Buttons/action";

const initialTemplate = {
  inktype: "",
  name: "",
  pass_spacing: 0,
  dispense_height: 0,
};

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [template, setTemplate] = useState(initialTemplate);
  const [details, setDetails] = useState("");

  const handleOnselect = (inkname: any) => {
    if (!istemplateSelected && details !== inkname) {
      setDetails(inkname);
      setTemplateSelected(true);
    }
    if (istemplateSelected && details === inkname) {
      setDetails("");
      setTemplateSelected(false);
    }
    if (istemplateSelected && details !== inkname) {
      setDetails(inkname);
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
            {Showmaterials().data.map((val, key) => {
              return (
                <a
                  key={key}
                  className="row"
                  onClick={() => {
                    handleOnselect(val);
                  }}
                >
                  <div id="name">{val}</div>
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
              onClick={() => {
                blanktemplate();
              }}
            >
              Blank Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={() => {
                usetemplate(details);
              }}
            >
              Use as Template
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={() => {
                updatetemplate(details);
              }}
            >
              Update
            </button>
            <button
              disabled={!istemplateSelected}
              className="button"
              onClick={() => {
                deletetemplate(details);
              }}
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
          <Form {...template}> </Form>
        </div>
      )}
    </div>
  );
};

export default VoneHome;
