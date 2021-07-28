import Form from "./inkFormVone";
import "./VoneHome.css";
import { useState } from "react";
import { Loadmaterials_Vone } from "../Database/VoneMaterials";
import ActionButton from "../Buttons/actionButtons";

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [details, setDetails] = useState("");
  const data = Loadmaterials_Vone().data;

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
  const useTemplate = () => {
    setTemplateAvailable(true);
  };
  const blankTemplate = () => {
    setDetails("");
    setTemplateAvailable(true);
  };
  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div className="body">
          <h2 className="Title">Select Material</h2>
          <ul>
            {data.map((val, key) => {
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
            <ActionButton
              name="Blank Template"
              disabled={false}
              onClick={blankTemplate}
            />
            <ActionButton
              name="Use Template"
              disabled={!istemplateSelected}
              onClick={useTemplate}
            />
            <ActionButton
              name="Update"
              disabled={!istemplateSelected}
              onClick={() => {}}
            />
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setTemplateAvailable(false)}>
            Back to Templates
          </button>
          <Form inkName={details} />
        </div>
      )}
    </div>
  );
};

export default VoneHome;
