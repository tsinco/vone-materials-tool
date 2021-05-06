import FormNova from "./inkFormNova";
import { useState } from "react";
import { Loadmaterials_Nova } from "../Database/NovaMaterials";
import ActionButton from "../Buttons/actionButtons";

const InkDisplay: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [details, setDetails] = useState("");
  const data = Loadmaterials_Nova().data;
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
        <div>
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
              onClick={() => {
                setTemplateAvailable(true);
              }}
            />
            <ActionButton
              name="Use Template"
              disabled={!istemplateSelected}
              onClick={useTemplate}
            />
            <ActionButton name="Update" disabled={!istemplateSelected} />
            <ActionButton name="Delete" disabled={!istemplateSelected} />
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setTemplateAvailable(false)}>
            Back to Templates
          </button>
          <FormNova inkID={details}> </FormNova>
        </div>
      )}
    </div>
  );
};

export default InkDisplay;
